import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { SITE_URL, segmentIds, verifyToken } from '@/lib/newsletter';

// Step 2 of double opt-in: add the contact to the newsletter segment(s) in Resend, then send the
// visitor back to the front page, which shows a notice for ?uutiskirje=ok|invalid|error.
export async function GET(request: NextRequest) {
    const back = (status: 'ok' | 'invalid' | 'error') => {
        const response = NextResponse.redirect(`${SITE_URL}/?uutiskirje=${status}`, 302);
        response.headers.set('Cache-Control', 'no-store');
        return response;
    };

    let data: ReturnType<typeof verifyToken> = null;
    try {
        data = verifyToken(request.nextUrl.searchParams.get('token'));
    } catch (error) {
        console.error('Newsletter confirm misconfigured:', (error as Error).message);
    }
    if (!data) return back('invalid');

    const { email, locale } = data;
    const segments = segmentIds(locale);
    if (!process.env.RESEND_API_KEY || segments.length === 0) {
        console.error('Newsletter confirm: RESEND_API_KEY or NEWSLETTER_SEGMENT_ID missing');
        return back('error');
    }

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const created = await resend.contacts.create({
            email,
            unsubscribed: false,
            segments: segments.map((id) => ({ id })),
        });

        if (created.error) {
            // Most likely the contact already exists (earlier subscriber, or one who unsubscribed and is
            // now opting in again): re-activate it and make sure it is in the segment(s).
            const updated = await resend.contacts.update({ email, unsubscribed: false });
            if (updated.error) {
                console.error('Newsletter confirm failed:', created.error, updated.error);
                return back('error');
            }
            for (const segmentId of segments) {
                const added = await resend.contacts.segments.add({ email, segmentId });
                if (added.error) console.warn('Segment add skipped:', segmentId, added.error.message);
            }
        }

        console.log('Newsletter subscriber confirmed', { locale, at: new Date().toISOString() });
        return back('ok');
    } catch (error) {
        console.error('Newsletter confirm error:', error);
        return back('error');
    }
}
