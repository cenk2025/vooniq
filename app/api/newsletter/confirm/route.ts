import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { SITE_URL, addSubscriber, segmentIds, verifyToken } from '@/lib/newsletter';

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
        const failure = await addSubscriber(new Resend(process.env.RESEND_API_KEY), email, segments);
        if (failure) {
            console.error('Newsletter confirm failed:', failure.step, failure.error);
            return back('error');
        }

        console.log('Newsletter subscriber confirmed', { locale, at: new Date().toISOString() });
        return back('ok');
    } catch (error) {
        console.error('Newsletter confirm error:', error);
        return back('error');
    }
}
