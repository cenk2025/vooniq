import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EMAIL_RE, NEWSLETTER_FROM, passwordMatches } from '@/lib/newsletter';

const MAX_HTML = 900 * 1024;

const json = (data: unknown, status = 200) =>
    NextResponse.json(data, { status, headers: { 'Cache-Control': 'no-store' } });

// Used by /uutiskirje-admin.html. Body: { password, action: 'check' | 'list' | 'test' | 'send', ... }
export async function POST(request: NextRequest) {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== 'object') return json({ error: 'Invalid JSON' }, 400);
    if (!passwordMatches(body.password)) {
        // Slow down password guessing a little.
        await new Promise((r) => setTimeout(r, 800));
        return json({ error: 'Väärä salasana tai NEWSLETTER_ADMIN_PASSWORD puuttuu' }, 401);
    }
    if (!process.env.RESEND_API_KEY) return json({ error: 'RESEND_API_KEY puuttuu' }, 500);

    const resend = new Resend(process.env.RESEND_API_KEY);
    const segmentId = (typeof body.segmentId === 'string' && body.segmentId.trim()) || process.env.NEWSLETTER_SEGMENT_ID;

    try {
        if (body.action === 'check') {
            // Report the segment's name and size so a wrong id or missing permission is visible at once.
            let segment: { name?: string; subscribers?: number; hasMore?: boolean; error?: string } = {};
            if (segmentId) {
                const found = await resend.segments.get(segmentId);
                if (found.error) {
                    segment = { error: found.error.message };
                } else {
                    const contacts = await resend.contacts.list({ segmentId, limit: 100 });
                    segment = contacts.error
                        ? { name: found.data?.name, error: contacts.error.message }
                        : {
                              name: found.data?.name,
                              subscribers: contacts.data?.data.filter((c) => !c.unsubscribed).length,
                              hasMore: contacts.data?.has_more,
                          };
                }
            }
            return json({ ok: true, from: NEWSLETTER_FROM, segmentConfigured: Boolean(segmentId), segment });
        }

        if (body.action === 'list') {
            const { data, error } = await resend.broadcasts.list();
            if (error) return json({ error: error.message }, 502);
            return json({ broadcasts: data?.data ?? [] });
        }

        const subject = typeof body.subject === 'string' ? body.subject.trim().slice(0, 200) : '';
        const html = typeof body.html === 'string' ? body.html : '';
        const previewText = typeof body.previewText === 'string' ? body.previewText.trim().slice(0, 200) : '';
        if (!subject) return json({ error: 'Aihe puuttuu' }, 400);
        if (!html.trim()) return json({ error: 'HTML puuttuu' }, 400);
        if (html.length > MAX_HTML) return json({ error: 'HTML on liian suuri (yli 900 kt) – siirrä kuvat palvelimelle' }, 400);
        if (/src=["']data:/i.test(html)) {
            return json({ error: 'HTML sisältää data:-kuvia. Gmail ja Outlook estävät ne – käytä https-osoitteita.' }, 400);
        }

        if (body.action === 'test') {
            const to = typeof body.testTo === 'string' ? body.testTo.trim() : '';
            if (!EMAIL_RE.test(to)) return json({ error: 'Testiosoite puuttuu tai on virheellinen' }, 400);
            // Resend fills the unsubscribe link only in broadcasts; point it at the site in tests.
            const testHtml = html.replaceAll('{{{RESEND_UNSUBSCRIBE_URL}}}', '#').replace(/\{\{\{contact\.[a-z_]+\|?([^}]*)\}\}\}/g, '$1');
            const { data, error } = await resend.emails.send({
                from: NEWSLETTER_FROM,
                to,
                subject: `[TESTI] ${subject}`,
                html: testHtml,
            });
            if (error) return json({ error: error.message }, 502);
            return json({ ok: true, id: data?.id });
        }

        if (body.action === 'send') {
            if (!segmentId) return json({ error: 'NEWSLETTER_SEGMENT_ID puuttuu' }, 400);
            if (!html.includes('{{{RESEND_UNSUBSCRIBE_URL}}}')) {
                return json({ error: 'HTML:stä puuttuu peruutuslinkki {{{RESEND_UNSUBSCRIBE_URL}}} – se on lain mukaan pakollinen' }, 400);
            }
            const scheduledAt = typeof body.scheduledAt === 'string' && body.scheduledAt ? body.scheduledAt : undefined;
            if (scheduledAt && Number.isNaN(Date.parse(scheduledAt))) {
                return json({ error: 'Ajastusaika on virheellinen' }, 400);
            }
            const { data, error } = await resend.broadcasts.create({
                segmentId,
                from: NEWSLETTER_FROM,
                subject,
                html,
                previewText: previewText || undefined,
                name: (typeof body.name === 'string' && body.name.trim()) || subject,
                send: true,
                scheduledAt,
            });
            if (error) return json({ error: error.message }, 502);
            return json({ ok: true, id: data?.id, scheduledAt: scheduledAt ?? null });
        }

        return json({ error: 'Unknown action' }, 400);
    } catch (error) {
        console.error('Newsletter admin error:', error);
        return json({ error: 'Internal server error' }, 500);
    }
}
