'use client';

import { useLocale } from './LocaleProvider';
import { Icons } from './Icons';

export function ProcessSection() {
    const { t } = useLocale();

    // Colours run from deep rust to soft peach, like a stack of cards
    const steps = [
        { title: t('process_1_title'), body: t('process_1_body'), icon: Icons.sparkles, color: 'bg-rust text-cream' },
        { title: t('process_2_title'), body: t('process_2_body'), icon: Icons.zap, color: 'bg-peach text-ink' },
        { title: t('process_3_title'), body: t('process_3_body'), icon: Icons.shield, color: 'bg-flame text-cream' },
        { title: t('process_4_title'), body: t('process_4_body'), icon: Icons.rocket, color: 'bg-oxblood text-cream' },
    ];

    return (
        <section id="process" className="pt-24 md:pt-36 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 md:mb-16 text-center">
                    <h2 className="inline-block rounded-[1.25rem] md:rounded-[1.75rem] bg-sun text-ink px-6 md:px-9 pt-1 pb-3 md:pb-4 font-display font-semibold tracking-tight leading-[0.95] text-5xl md:text-7xl -rotate-2 mb-6">
                        {t('process_title') as string}
                    </h2>
                    <p className="text-lg md:text-xl text-fg/70 max-w-2xl mx-auto">
                        {t('process_subtitle') as string}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:items-start">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`group rounded-[1.75rem] md:rounded-[2rem] p-6 md:p-7 min-h-[18rem] flex flex-col transition-transform duration-300 hover:-translate-y-2 lg:[margin-top:var(--step-offset)] ${step.color}`}
                            style={{ ['--step-offset' as string]: `${index * 2.5}rem` }}
                        >
                            <div className="flex items-start justify-between mb-auto">
                                <span className="font-display font-extrabold text-6xl md:text-7xl leading-none opacity-90">
                                    {index + 1}
                                </span>
                                <step.icon className="w-9 h-9 group-hover:rotate-12 transition-transform" />
                            </div>
                            <h3 className="font-display font-extrabold uppercase text-xl md:text-2xl leading-tight mt-10 mb-3">
                                {(step.title as string).replace(/^\d+\)\s*/, '')}
                            </h3>
                            <p className="text-base leading-relaxed opacity-90">
                                {step.body as string}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
