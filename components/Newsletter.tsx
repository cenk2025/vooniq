'use client';

import { useEffect, useState } from 'react';
import { useLocale } from './LocaleProvider';
import { Icons } from './Icons';

// Footer signup. Step 1 of double opt-in: the API emails a confirmation link,
// nobody is added to the list before they click it.
export function NewsletterForm() {
    const { t, locale } = useLocale();
    const s = (k: string) => t(k) as string;
    const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        setStatus('loading');
        try {
            const response = await fetch('/api/newsletter/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: data.get('email'),
                    website: data.get('website'),
                    consent: data.get('consent') === 'on',
                    locale,
                }),
            });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            form.reset();
            setStatus('sent');
        } catch (error) {
            console.error('Newsletter signup failed:', error);
            setStatus('error');
        }
    };

    return (
        <div id="newsletter" className="grid gap-6 border-b border-line py-8 md:grid-cols-[1fr_1.15fr] md:items-start md:gap-12">
            <div>
                <h3 className="text-[0.9375rem] font-semibold text-fg">{s('newsletter_title')}</h3>
                <p className="mt-2 max-w-sm text-[0.8125rem] leading-relaxed">{s('newsletter_body')}</p>
            </div>
            {status === 'sent' ? (
                <p className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-4 text-[0.875rem] text-fg" role="status">
                    <Icons.mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {s('newsletter_sent')}
                </p>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="flex gap-2 rounded-full border border-line bg-surface p-1.5 transition focus-within:border-[#fd355d] focus-within:ring-4 focus-within:ring-[#fd355d]/15">
                        <input
                            type="email"
                            name="email"
                            required
                            maxLength={160}
                            autoComplete="email"
                            placeholder={s('newsletter_placeholder')}
                            aria-label={s('newsletter_placeholder')}
                            className="w-0 min-w-0 flex-1 bg-transparent px-3 text-[0.9375rem] text-fg outline-none placeholder:text-fg-3"
                        />
                        <button type="submit" disabled={status === 'loading'} className="btn btn-primary btn-sm shrink-0 px-5 disabled:opacity-60">
                            {status === 'loading' ? s('newsletter_sending') : s('newsletter_submit')}
                        </button>
                    </div>
                    <label className="flex cursor-pointer items-start gap-2.5 text-[0.75rem] leading-normal">
                        <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 shrink-0 accent-[#e8264f]" />
                        <span>
                            {s('newsletter_consent')}{' '}
                            <a href="/tietosuoja" className="underline underline-offset-2 hover:text-fg">{s('footer_privacy')}</a>
                        </span>
                    </label>
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-px w-px opacity-0" />
                    {status === 'error' && (
                        <p className="text-[0.8125rem] text-brand" role="alert">{s('newsletter_error')}</p>
                    )}
                </form>
            )}
        </div>
    );
}

// Result of the confirmation link (/api/newsletter/confirm redirects back with ?uutiskirje=ok|invalid|error).
export function NewsletterNotice() {
    const { t } = useLocale();
    const [state, setState] = useState<'ok' | 'invalid' | 'error' | null>(null);

    useEffect(() => {
        const url = new URL(window.location.href);
        const value = url.searchParams.get('uutiskirje');
        if (value !== 'ok' && value !== 'invalid' && value !== 'error') return;
        url.searchParams.delete('uutiskirje');
        window.history.replaceState(null, '', url.pathname + url.search + url.hash);
        // eslint-disable-next-line react-hooks/set-state-in-effect -- the URL is only readable after hydration
        setState(value);
        const timer = setTimeout(() => setState(null), 9000);
        return () => clearTimeout(timer);
    }, []);

    if (!state) return null;
    return (
        <div className="fade-up fixed left-1/2 top-20 z-[110] w-max max-w-[calc(100vw-32px)] -translate-x-1/2" role="status">
            <div className="flex items-center gap-3 rounded-[20px] border border-line bg-surface py-3 pl-4 pr-2 text-[0.9375rem] leading-snug text-fg shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)]">
                {state === 'ok' ? (
                    <span className="check-dot !h-7 !w-7 shrink-0"><Icons.check className="h-4 w-4" /></span>
                ) : (
                    <Icons.alertCircle className="h-6 w-6 shrink-0 text-brand" />
                )}
                <span>{t(`newsletter_notice_${state}`) as string}</span>
                <button
                    type="button"
                    onClick={() => setState(null)}
                    aria-label={t('newsletter_close') as string}
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-fg-3 hover:bg-line hover:text-fg"
                >
                    ×
                </button>
            </div>
        </div>
    );
}
