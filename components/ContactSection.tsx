'use client';

import { useState } from 'react';
import { useLocale } from './LocaleProvider';
import { Icons } from './Icons';

export function ContactSection() {
    const { t } = useLocale();
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
    };

    const needs = t('form_need_options') as string[];

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                            {t('contact_title') as string}
                        </h2>
                        <p className="text-lg md:text-xl text-slate-400 mb-12">
                            {t('contact_subtitle') as string}
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center space-x-6 p-6 glass rounded-2xl border border-slate-800">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                                    <Icons.mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500 uppercase font-bold tracking-widest mb-1">Email</div>
                                    <a href="mailto:info@voon.fi" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">info@voon.fi</a>
                                </div>
                            </div>

                            <a
                                href="https://business.voon.fi/fi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-6 glass rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all group"
                            >
                                <div className="flex items-center space-x-6">
                                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                                        <Icons.externalLink className="w-6 h-6" />
                                    </div>
                                    <div className="text-xl font-bold text-white">{t('contact_link_business') as string}</div>
                                </div>
                                <Icons.arrowRight className="w-6 h-6 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-2 transition-all" />
                            </a>
                        </div>
                    </div>

                    <div className="glass p-8 md:p-12 rounded-3xl border border-slate-800 relative">
                        {status === 'success' ? (
                            <div className="py-12 text-center">
                                <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mx-auto mb-6">
                                    <Icons.check className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{t('form_success') as string}</h3>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-300 ml-1">{t('form_company') as string}</label>
                                        <div className="relative">
                                            <Icons.building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                            <input required type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Voon Oy" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-300 ml-1">{t('form_name') as string}</label>
                                        <div className="relative">
                                            <Icons.user className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                            <input required type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Cenk Yakinlar" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-300 ml-1">{t('form_email') as string}</label>
                                    <div className="relative">
                                        <Icons.mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                        <input required type="email" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="hello@example.com" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-300 ml-1">{t('form_need') as string}</label>
                                    <select className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-4 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer">
                                        {needs.map((need, i) => (
                                            <option key={i} value={need}>{need}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-300 ml-1">{t('form_message') as string}</label>
                                    <textarea rows={4} className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-4 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="..." />
                                </div>

                                <button
                                    disabled={status === 'loading'}
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                                >
                                    <span className="flex items-center justify-center">
                                        {status === 'loading' ? (
                                            <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
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
