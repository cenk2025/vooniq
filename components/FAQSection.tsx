'use client';

import { useState } from 'react';
import { useLocale } from './LocaleProvider';

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
        <section id="faq" className="pt-24 md:pt-36 pb-24 md:pb-36 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="font-display font-semibold tracking-tight leading-[0.95] text-5xl md:text-7xl">
                        {t('faq_title') as string}
                    </h2>
                </div>

                <div className="space-y-3 md:space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`rounded-[1.75rem] md:rounded-[2rem] overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-sun text-ink' : 'bg-card border-2 border-line hover:border-fg/60'}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    aria-expanded={isOpen}
                                    className="w-full px-6 md:px-8 py-5 md:py-6 text-left flex items-center justify-between gap-4 focus-visible-ring rounded-[inherit]"
                                >
                                    <span className="font-display text-lg md:text-2xl font-semibold leading-snug">
                                        {faq.q as string}
                                    </span>
                                    <span
                                        aria-hidden="true"
                                        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold leading-none transition-transform duration-300 ${isOpen ? 'rotate-45 bg-ink text-sun' : 'bg-hot text-cream'}`}
                                    >
                                        +
                                    </span>
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-6 md:px-8 pb-6 md:pb-7 text-base md:text-lg leading-relaxed opacity-85">
                                            {faq.a as string}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
