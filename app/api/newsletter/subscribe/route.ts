import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { CONFIRM_EMAIL, EMAIL_RE, NEWSLETTER_FROM, SITE_URL, confirmEmailHtml, isLocale, signToken, type NewsletterLocale } from '@/lib/newsletter';

// Step 1 of double opt-in: email the visitor a confirmation link.
// Nobody is added to the list until they click it, so a typo or someone else's address costs nothing.
export async function POST(request: NextRequest) {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== 'object') return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });

    // Honeypot filled in: pretend success so bots do not retry.
    if (body.website) return NextResponse.json({ success: true });

    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase().slice(0, 160) : '';
    const locale: NewsletterLocale = isLocale(body.locale) ? body.locale : 'fi';
    if (!EMAIL_RE.test(email)) return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    if (body.consent !== true) return NextResponse.json({ error: 'Consent required' }, { status: 400 });

    if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY is not set');
        return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    try {
        const link = `${SITE_URL}/api/newsletter/confirm?token=${encodeURIComponent(signToken(email, locale))}`;
        const resend = new Resend(process.env.RESEND_API_KEY);
        const { error } = await resend.emails.send({
            from: NEWSLETTER_FROM,
            to: email,
            subject: CONFIRM_EMAIL[locale].subject,
            html: confirmEmailHtml(locale, link),
        });
        if (error) {
            console.error('Newsletter confirmation email failed:', error);
            return NextResponse.json({ error: 'Failed to send confirmation' }, { status: 500 });
        }
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Newsletter subscribe error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
