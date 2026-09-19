'use client';

import { useState } from 'react';
import { useLocale } from './LocaleProvider';
import { Icons } from './Icons';

export function UseCasesSection() {
    const { t } = useLocale();
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { id: 0, label: t('uc_tab_1'), title: t('uc_1_title'), body: t('uc_1_body'), icon: Icons.sales, color: 'bg-grape text-cream', pill: 'bg-grape text-cream', btn: 'bg-lime text-ink' },
        { id: 1, label: t('uc_tab_2'), title: t('uc_2_title'), body: t('uc_2_body'), icon: Icons.users, color: 'bg-flame text-cream', pill: 'bg-flame text-cream', btn: 'bg-sun text-ink' },
        { id: 2, label: t('uc_tab_3'), title: t('uc_3_title'), body: t('uc_3_body'), icon: Icons.support, color: 'bg-sun text-ink', pill: 'bg-sun text-ink', btn: 'bg-ink text-cream' },
        { id: 3, label: t('uc_tab_4'), title: t('uc_4_title'), body: t('uc_4_body'), icon: Icons.finance, color: 'bg-hot text-cream', pill: 'bg-hot text-cream', btn: 'bg-lime text-ink' },
    ];

    const active = tabs[activeTab];
    const ActiveIcon = active.icon;

    return (
        <section id="use-cases" className="pt-24 md:pt-36 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 md:mb-14">
                    <h2 className="font-display font-semibold tracking-tight leading-[0.95] text-5xl md:text-7xl mb-5">
                        {t('usecases_title') as string}
                    </h2>
                    <p className="text-lg md:text-xl text-fg/70 max-w-2xl mx-auto">
                        {t('usecases_subtitle') as string}
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10" role="tablist">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            role="tab"
                            aria-selected={activeTab === tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`btn-pop px-5 md:px-7 py-2.5 md:py-3 rounded-full text-sm md:text-base font-bold border-2 focus-visible-ring ${activeTab === tab.id
                                ? `${tab.pill} border-transparent`
                                : 'border-line hover:border-fg'
                                }`}
                        >
                            {tab.label as string}
                        </button>
                    ))}
                </div>

                {/* Panel — changes colour per tab */}
                <div
                    key={active.id}
                    role="tabpanel"
                    className={`fade-in-up relative overflow-hidden rounded-[2rem] md:rounded-[3rem] p-7 md:p-14 ${active.color}`}
                >
                    <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-14 items-center">
                        <div>
                            <h3 className="font-display font-semibold leading-[1] tracking-tight text-3xl md:text-5xl mb-6">
                                {active.title as string}
                            </h3>
                            <p className="text-lg md:text-xl leading-relaxed opacity-90 mb-8 max-w-xl">
                                {active.body as string}
                            </p>
                            <a
                                href="#contact"
                                className={`btn-pop inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-base focus-visible-ring ${active.btn}`}
                            >
                                {t('nav_cta') as string}
                                <Icons.arrowRight className="w-5 h-5" />
                            </a>
                        </div>

                        <div className="hidden md:flex justify-center">
                            <div className="relative w-64 h-64 lg:w-72 lg:h-72">
                                <div className="absolute inset-0 rounded-[2.5rem] bg-ink/15 rotate-6" />
                                <div className="absolute inset-0 rounded-[2.5rem] bg-ink/90 text-cream -rotate-3 flex items-center justify-center">
                                    <ActiveIcon className="w-28 h-28 lg:w-32 lg:h-32" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
