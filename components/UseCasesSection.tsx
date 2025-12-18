'use client';

import { useState } from 'react';
import { useLocale } from './LocaleProvider';
import { Icons } from './Icons';

export function UseCasesSection() {
    const { t } = useLocale();
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { id: 0, label: t('uc_tab_1'), title: t('uc_1_title'), body: t('uc_1_body'), icon: Icons.sales },
        { id: 1, label: t('uc_tab_2'), title: t('uc_2_title'), body: t('uc_2_body'), icon: Icons.users },
        { id: 2, label: t('uc_tab_3'), title: t('uc_3_title'), body: t('uc_3_body'), icon: Icons.support },
        { id: 3, label: t('uc_tab_4'), title: t('uc_4_title'), body: t('uc_4_body'), icon: Icons.finance },
    ];

    return (
        <section id="use-cases" className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        {t('usecases_title') as string}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
                        {t('usecases_subtitle') as string}
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border ${activeTab === tab.id
                                ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20'
                                : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'
                                }`}
                        >
                            {tab.label as string}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 text-blue-500/10 transition-transform duration-700 group-hover:scale-110">
                        {(() => {
                            const Icon = tabs[activeTab].icon;
                            return Icon ? <Icon className="w-64 h-64" /> : null;
                        })()}
                    </div>

                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex p-3 rounded-2xl bg-blue-500/10 text-blue-400 mb-6">
                                {(() => {
                                    const Icon = tabs[activeTab].icon;
                                    return Icon ? <Icon className="w-8 h-8" /> : null;
                                })()}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                {tabs[activeTab].title as string}
                            </h3>
                            <p className="text-lg text-slate-300 leading-relaxed mb-8">
                                {tabs[activeTab].body as string}
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors group/link"
                            >
                                {t('nav_cta') as string}
                                <svg className="w-4 h-4 ml-2 transform transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                        <div className="hidden md:block">
                            {/* Visual representation could go here, for now a card style placeholder */}
                            <div className="aspect-video rounded-2xl bg-gradient-to-br from-slate-900 to-black border border-slate-800 p-6 relative">
                                <div className="absolute inset-0 bg-blue-500/5 blur-xl group-hover:bg-blue-500/10 transition-colors" />
                                <div className="space-y-4 relative z-10">
                                    <div className="h-4 w-3/4 bg-slate-800 rounded animate-pulse" />
                                    <div className="h-4 w-1/2 bg-slate-800 rounded animate-pulse" style={{ animationDelay: '0.2s' }} />
                                    <div className="h-4 w-5/6 bg-slate-800 rounded animate-pulse" style={{ animationDelay: '0.4s' }} />
                                    <div className="pt-4 grid grid-cols-2 gap-4">
                                        <div className="h-20 bg-blue-500/10 rounded-xl border border-blue-500/20" />
                                        <div className="h-20 bg-cyan-500/10 rounded-xl border border-cyan-500/20" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
