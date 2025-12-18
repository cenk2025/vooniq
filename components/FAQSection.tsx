'use client';

import { useState } from 'react';
import { useLocale } from './LocaleProvider';
import { Icons } from './Icons';

export function FAQSection() {
    const { t } = useLocale();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        { q: t('faq_q1'), a: t('faq_a1') },
        { q: t('faq_q2'), a: t('faq_a2') },
        { q: t('faq_q3'), a: t('faq_a3') },
        { q: t('faq_q4'), a: t('faq_a4') },
    ];

    return (
        <section className="py-24 relative">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        {t('faq_title') as string}
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="glass rounded-2xl border border-slate-800 overflow-hidden transition-all duration-300">
                            <button
                                onClick={() => setOpenIndex(index === openIndex ? null : index)}
                                className="w-full p-6 text-left flex items-center justify-between group"
                            >
                                <span className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                                    {faq.q as string}
                                </span>
                                <Icons.chevronDown
                                    className={`w-5 h-5 text-slate-500 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-blue-500' : ''
                                        }`}
                                />
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-slate-800/50">
                                    {faq.a as string}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
