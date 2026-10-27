// Server-only helpers for the newsletter route handlers (app/api/newsletter/*).
import crypto from 'node:crypto';

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://voon.fi').replace(/\/$/, '');
export const NEWSLETTER_FROM = process.env.NEWSLETTER_FROM || 'VOON IQ <uutiset@uutiset.voon.fi>';
export const LOCALES = ['fi', 'en'] as const;
export type NewsletterLocale = (typeof LOCALES)[number];
export const isLocale = (v: unknown): v is NewsletterLocale => LOCALES.includes(v as NewsletterLocale);
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const TOKEN_TTL_MS = 7 * 24 * 60 * 60 * 1000;

// Every confirmed subscriber goes to the main segment; a per-language segment is optional.
export function segmentIds(locale: NewsletterLocale): string[] {
    const ids = [process.env.NEWSLETTER_SEGMENT_ID, process.env[`NEWSLETTER_SEGMENT_ID_${locale.toUpperCase()}`]];
    return [...new Set(ids.filter((id): id is string => Boolean(id)))];
}

export const escapeHtml = (value: string) =>
    String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

const b64url = (buf: Buffer | string) => Buffer.from(buf).toString('base64url');

function secret(): string {
    const value = process.env.NEWSLETTER_SECRET;
    if (!value || value.length < 32) throw new Error('NEWSLETTER_SECRET must be set (32+ characters)');
    return value;
}

// Signed, expiring confirmation token: nothing is stored until the subscriber clicks the link.
export function signToken(email: string, locale: NewsletterLocale): string {
    const payload = b64url(JSON.stringify({ e: email, l: locale, t: Date.now() }));
    const sig = b64url(crypto.createHmac('sha256', secret()).update(payload).digest());
    return `${payload}.${sig}`;
}

export function verifyToken(token: unknown): { email: string; locale: NewsletterLocale } | null {
    if (typeof token !== 'string' || !token.includes('.')) return null;
    const [payload, sig] = token.split('.');
    const expected = b64url(crypto.createHmac('sha256', secret()).update(payload).digest());
    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
    try {
        const data = JSON.parse(Buffer.from(payload, 'base64url').toString());
        if (typeof data.t !== 'number' || Date.now() - data.t > TOKEN_TTL_MS) return null;
        if (typeof data.e !== 'string' || !EMAIL_RE.test(data.e) || !isLocale(data.l)) return null;
        return { email: data.e, locale: data.l };
    } catch {
        return null;
    }
}

export function passwordMatches(given: unknown): boolean {
    const expected = process.env.NEWSLETTER_ADMIN_PASSWORD;
    if (!expected || expected.length < 12 || typeof given !== 'string') return false;
    const a = crypto.createHash('sha256').update(given).digest();
    const b = crypto.createHash('sha256').update(expected).digest();
    return crypto.timingSafeEqual(a, b);
}

// Double opt-in email, in the language the visitor used on the site.
export const CONFIRM_EMAIL: Record<NewsletterLocale, Record<'subject' | 'heading' | 'body' | 'button' | 'ignore', string>> = {
    fi: {
        subject: 'Vahvista uutiskirjeen tilaus – VOON IQ',
        heading: 'Vielä yksi klikkaus',
        body: 'Kiitos, että tilasit VOON IQ:n uutiskirjeen. Vahvista tilauksesi alla olevasta painikkeesta. Linkki on voimassa 7 päivää.',
        button: 'Vahvista tilaus',
        ignore: 'Jos et tilannut uutiskirjettä, voit jättää tämän viestin huomiotta. Sinua ei lisätä postituslistalle.',
    },
    en: {
        subject: 'Confirm your newsletter subscription – VOON IQ',
        heading: 'One more click',
        body: 'Thanks for subscribing to the VOON IQ newsletter. Please confirm your subscription with the button below. The link is valid for 7 days.',
        button: 'Confirm subscription',
        ignore: 'If you did not subscribe, you can ignore this email. You will not be added to the mailing list.',
    },
};

export function confirmEmailHtml(locale: NewsletterLocale, link: string): string {
    const t = CONFIRM_EMAIL[locale];
    return `<!DOCTYPE html><html lang="${locale}"><body style="margin:0;background:#f3f5f8;font-family:Arial,Helvetica,sans-serif">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f5f8"><tr><td align="center" style="padding:32px 16px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:14px">
<tr><td style="background:#0d1321;padding:26px 30px;border-radius:14px 14px 0 0;color:#ffffff;font-size:20px;letter-spacing:4px">VOON <b style="color:#ff4184">IQ</b></td></tr>
<tr><td style="padding:30px">
<h1 style="margin:0 0 14px;font-size:22px;color:#0b0f16">${t.heading}</h1>
<p style="margin:0 0 26px;color:#3b4250;line-height:1.7;font-size:15px">${t.body}</p>
<a href="${escapeHtml(link)}" style="display:inline-block;background:#ff2a3a;color:#ffffff;text-decoration:none;font-weight:bold;padding:14px 26px;border-radius:999px">${t.button}</a>
<p style="margin:28px 0 0;color:#6b7383;font-size:13px;line-height:1.6">${t.ignore}</p>
</td></tr></table>
<p style="color:#8a93a3;font-size:12px;margin-top:18px">VOON IQ Oy · Jyväskylä · voon.fi</p>
</td></tr></table></body></html>`;
}
