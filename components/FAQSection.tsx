'use client';

import { useState } from 'react';
import { useLocale } from './LocaleProvider';
import { Reveal } from './Reveal';

export function FAQSection() {
    const { t } = useLocale();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [1, 2, 3, 4].map((n) => ({ q: t(`faq_q${n}`) as string, a: t(`faq_a${n}`) as string }));

    return (
        <section id="faq" className="section bg-bg">
            <div className="container-apple max-w-3xl">
                <Reveal as="h2" className="t-headline">{t('faq_title') as string}</Reveal>

                <div className="mt-12 border-t border-line">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={faq.q} className="border-b border-line">
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    aria-expanded={isOpen}
                                    className="w-full py-6 flex items-center justify-between gap-6 text-left"
                                >
                                    <span className="text-[1.1875rem] md:text-[1.3125rem] font-semibold tracking-tight">{faq.q}</span>
                                    <span
                                        aria-hidden="true"
                                        className={`flex-none text-[1.75rem] leading-none font-light text-fg-2 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                                    >
                                        +
                                    </span>
                                </button>
                                <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div className="overflow-hidden">
                                        <p className="pb-7 pr-10 text-fg-2 text-[1.0625rem] leading-relaxed">{faq.a}</p>
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
