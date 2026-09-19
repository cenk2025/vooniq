'use client';

import { useState } from 'react';
import { useLocale } from './LocaleProvider';
import { Icons } from './Icons';

const fieldClass =
    'w-full bg-cream text-ink placeholder:text-ink/40 border-2 border-ink/15 rounded-2xl py-4 pr-4 focus:outline-none focus:border-hot focus:ring-4 focus:ring-hot/20 transition';

export function ContactSection() {
    const { t } = useLocale();
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        // Store form reference before async operations
        const form = e.currentTarget;

        try {
            // Get form data
            const formData = new FormData(form);
            const data = {
                company: formData.get('company') as string,
                name: formData.get('name') as string,
                email: formData.get('email') as string,
                need: formData.get('need') as string,
                message: formData.get('message') as string,
            };

            // Send to our secure API route
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to send email');
            }

            setStatus('success');

            // Reset form safely
            if (form) {
                form.reset();
            }

            // Reset success state after 5 seconds
            setTimeout(() => {
                setStatus('idle');
            }, 5000);
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('error');

            // Reset error state after 3 seconds
            setTimeout(() => {
                setStatus('idle');
            }, 3000);
        }
    };

    const needs = t('form_need_options') as string[];

    return (
        <section id="contact" className="pt-24 md:pt-36 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
                    <div>
                        <h2 className="font-display font-semibold tracking-tight leading-[0.95] text-5xl md:text-7xl mb-6">
                            {t('contact_title') as string}
                        </h2>
                        <p className="text-lg md:text-xl text-fg/70 mb-10 max-w-lg">
                            {t('contact_subtitle') as string}
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-5 p-5 md:p-6 rounded-[1.75rem] bg-sun text-ink">
                                <div className="w-14 h-14 rounded-2xl bg-ink text-sun flex items-center justify-center -rotate-6 flex-shrink-0">
                                    <Icons.mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xs uppercase font-extrabold tracking-widest opacity-60 mb-1">Email</div>
                                    <a href="mailto:info@voon.fi" className="font-display text-xl md:text-2xl font-semibold hover:underline underline-offset-4">info@voon.fi</a>
                                </div>
                            </div>

                            <a
                                href="https://business.voon.fi/fi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-pop flex items-center justify-between gap-4 p-5 md:p-6 rounded-[1.75rem] bg-grape text-cream group"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-cream text-grape flex items-center justify-center rotate-6 flex-shrink-0">
                                        <Icons.externalLink className="w-6 h-6" />
                                    </div>
                                    <div className="font-display text-xl md:text-2xl font-semibold">{t('contact_link_business') as string}</div>
                                </div>
                                <Icons.arrowRight className="w-7 h-7 flex-shrink-0 group-hover:translate-x-2 transition-transform" />
                            </a>
                        </div>
                    </div>

                    <div className="rounded-[2rem] md:rounded-[2.5rem] bg-blush text-ink p-6 md:p-10">
                        {status === 'success' ? (
                            <div className="py-12 text-center">
                                <div className="w-20 h-20 rounded-full bg-lime text-ink flex items-center justify-center mx-auto mb-6">
                                    <Icons.check className="w-10 h-10" />
                                </div>
                                <h3 className="font-display text-3xl font-semibold mb-3">{t('form_success') as string}</h3>
                                <p className="text-ink/70 text-lg">{t('form_success_subtitle') as string}</p>
                            </div>
                        ) : status === 'error' ? (
                            <div className="py-12 text-center">
                                <div className="w-20 h-20 rounded-full bg-flame text-cream flex items-center justify-center mx-auto mb-6">
                                    <Icons.alertCircle className="w-10 h-10" />
                                </div>
                                <h3 className="font-display text-3xl font-semibold mb-3">{t('form_error') as string}</h3>
                                <p className="text-ink/70">{t('form_error_subtitle') as string}</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label htmlFor="company" className="text-sm font-bold ml-1">{t('form_company') as string}</label>
                                        <div className="relative">
                                            <Icons.building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink/45" />
                                            <input id="company" name="company" required type="text" className={`${fieldClass} pl-12`} placeholder="Voon Oy" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-bold ml-1">{t('form_name') as string}</label>
                                        <div className="relative">
                                            <Icons.user className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink/45" />
                                            <input id="name" name="name" required type="text" className={`${fieldClass} pl-12`} placeholder="Cenk Yakinlar" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold ml-1">{t('form_email') as string}</label>
                                    <div className="relative">
                                        <Icons.mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink/45" />
                                        <input id="email" name="email" required type="email" className={`${fieldClass} pl-12`} placeholder="hello@example.com" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="need" className="text-sm font-bold ml-1">{t('form_need') as string}</label>
                                    <select id="need" name="need" required className={`${fieldClass} pl-4 appearance-none cursor-pointer`}>
                                        {needs.map((need, i) => (
                                            <option key={i} value={need}>{need}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-bold ml-1">{t('form_message') as string}</label>
                                    <textarea id="message" name="message" rows={4} className={`${fieldClass} pl-4 resize-none`} placeholder="..." />
                                </div>

                                <button
                                    disabled={status === 'loading'}
                                    type="submit"
                                    className="btn-pop w-full bg-ink text-cream hover:bg-hot font-bold text-lg py-4 rounded-full disabled:opacity-50 disabled:cursor-not-allowed group focus-visible-ring"
                                >
                                    <span className="flex items-center justify-center">
                                        {status === 'loading' ? (
                                            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                        ) : null}
                                        {t('form_submit') as string}
                                        <Icons.arrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
