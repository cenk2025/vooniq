'use client';

import { useState } from 'react';
import { useLocale } from './LocaleProvider';
import { Reveal } from './Reveal';
import { Icons } from './Icons';

const fieldClass =
    'w-full min-h-[52px] rounded-2xl border border-line bg-surface px-4 py-3.5 text-fg placeholder:text-fg-3 outline-none transition focus:border-[#fd355d] focus:ring-4 focus:ring-[#fd355d]/15';

export function ContactSection() {
    const { t } = useLocale();
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        // Store form reference before async operations
        const form = e.currentTarget;

        try {
            const formData = new FormData(form);
            const data = {
                company: formData.get('company') as string,
                name: formData.get('name') as string,
                email: formData.get('email') as string,
                need: formData.get('need') as string,
                message: formData.get('message') as string,
            };

            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to send email');
            }

            setStatus('success');
            form.reset();
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    const needs = t('form_need_options') as string[];

    return (
        <section id="contact" className="section bg-bg-alt">
            <div className="container-wide grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20 items-start">
                <Reveal>
                    <p className="t-eyebrow">{t('contact_eyebrow') as string}</p>
                    <h2 className="t-headline mt-3">{t('contact_title') as string}</h2>
                    <p className="t-sub mt-5 max-w-md">{t('contact_subtitle') as string}</p>
                    <a href="mailto:info@voon.fi" className="mt-10 inline-flex items-center gap-3 text-[1.3125rem] font-semibold tracking-tight hover:text-brand transition-colors">
                        <Icons.mail className="w-5 h-5 text-brand" />
                        info@voon.fi
                    </a>
                    <p className="mt-2 text-fg-2">{t('footer_location') as string}</p>
                </Reveal>

                <Reveal delay={120} className="rounded-[34px] bg-surface p-6 md:p-10 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)]">
                    {status === 'success' ? (
                        <div className="py-14 text-center" role="status">
                            <span className="check-dot !w-16 !h-16 mx-auto"><Icons.check className="w-8 h-8" /></span>
                            <h3 className="t-title mt-6">{t('form_success') as string}</h3>
                            <p className="mt-3 text-fg-2">{t('form_success_subtitle') as string}</p>
                        </div>
                    ) : status === 'error' ? (
                        <div className="py-14 text-center" role="alert">
                            <Icons.alertCircle className="w-14 h-14 mx-auto text-brand" />
                            <h3 className="t-title mt-6">{t('form_error') as string}</h3>
                            <p className="mt-3 text-fg-2">{t('form_error_subtitle') as string}</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid gap-5 md:grid-cols-2">
                                <label className="block space-y-2">
                                    <span className="text-[0.875rem] font-semibold">{t('form_company') as string}</span>
                                    <input name="company" required type="text" className={fieldClass} autoComplete="organization" />
                                </label>
                                <label className="block space-y-2">
                                    <span className="text-[0.875rem] font-semibold">{t('form_name') as string}</span>
                                    <input name="name" required type="text" className={fieldClass} autoComplete="name" />
                                </label>
                            </div>
                            <label className="block space-y-2">
                                <span className="text-[0.875rem] font-semibold">{t('form_email') as string}</span>
                                <input name="email" required type="email" className={fieldClass} autoComplete="email" />
                            </label>
                            <label className="block space-y-2">
                                <span className="text-[0.875rem] font-semibold">{t('form_need') as string}</span>
                                <select name="need" required className={`${fieldClass} appearance-none cursor-pointer`}>
                                    {needs.map((need) => (
                                        <option key={need} value={need}>{need}</option>
                                    ))}
                                </select>
                            </label>
                            <label className="block space-y-2">
                                <span className="text-[0.875rem] font-semibold">{t('form_message') as string}</span>
                                <textarea name="message" rows={4} className={`${fieldClass} resize-none`} />
                            </label>
                            <button type="submit" disabled={status === 'loading'} className="btn btn-primary w-full disabled:opacity-60">
                                {status === 'loading' && (
                                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                    </svg>
                                )}
                                {t('form_submit') as string}
                            </button>
                            <p className="text-center text-[0.8125rem] text-fg-3">
                                <a href="/tietosuoja" className="hover:text-fg underline underline-offset-2">{t('form_privacy_note') as string}</a>
                            </p>
                        </form>
                    )}
                </Reveal>
            </div>
        </section>
    );
}
