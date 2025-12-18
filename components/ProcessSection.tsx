'use client';

import { useLocale } from './LocaleProvider';
import { Icons } from './Icons';

export function ProcessSection() {
    const { t } = useLocale();

    const steps = [
        {
            title: t('process_1_title'),
            body: t('process_1_body'),
            icon: Icons.sparkles,
            color: 'from-blue-500 to-cyan-500',
        },
        {
            title: t('process_2_title'),
            body: t('process_2_body'),
            icon: Icons.zap,
            color: 'from-purple-500 to-blue-500',
        },
        {
            title: t('process_3_title'),
            body: t('process_3_body'),
            icon: Icons.shield,
            color: 'from-cyan-500 to-teal-500',
        },
        {
            title: t('process_4_title'),
            body: t('process_4_body'),
            icon: Icons.rocket,
            color: 'from-blue-600 to-indigo-600',
        },
    ];

    return (
        <section id="process" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        {t('process_title') as string}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
                        {t('process_subtitle') as string}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting lines for desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-800 to-transparent -translate-y-1/2 z-0" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 group">
                            <div className="glass p-8 rounded-3xl border border-slate-800 hover:border-slate-700 transition-all duration-300 h-full flex flex-col items-center text-center">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-4 mb-6 shadow-lg shadow-blue-500/10 group-hover:scale-110 transition-transform duration-300`}>
                                    <step.icon className="w-full h-full text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">
                                    {step.title as string}
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {step.body as string}
                                </p>
                            </div>

                            {/* Step number hanging over the card */}
                            <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-sm font-bold text-blue-400 shadow-xl group-hover:border-blue-500/50 transition-colors">
                                {index + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
