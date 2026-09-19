'use client';

import { useLocale } from './LocaleProvider';
import { Icons } from './Icons';

export function ProofSection() {
    const { t } = useLocale();

    const stats = [
        { value: '3+', label: t('proof_stat_1'), color: 'bg-lime text-ink', tilt: '-rotate-1' },
        { value: '30-60', label: t('proof_stat_2'), color: 'bg-hot text-cream', tilt: 'rotate-1' },
        { value: '4', label: t('proof_stat_3'), color: 'bg-grape text-cream', tilt: '-rotate-1' },
    ];

    const promises = [
        { title: t('promise_1_title'), body: t('promise_1_body'), icon: Icons.sparkles, chip: 'bg-sun text-ink' },
        { title: t('promise_2_title'), body: t('promise_2_body'), icon: Icons.shield, chip: 'bg-flame text-cream' },
        { title: t('promise_3_title'), body: t('promise_3_body'), icon: Icons.users, chip: 'bg-blush text-ink' },
    ];

    return (
        <section className="pt-24 md:pt-36 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-4 md:gap-5 mb-24 md:mb-32">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`rounded-[2rem] md:rounded-[2.5rem] p-7 md:p-9 transition-transform duration-300 hover:rotate-0 hover:scale-[1.02] ${stat.tilt} ${stat.color}`}
                        >
                            <div className="font-display font-extrabold leading-[0.85] tracking-tighter text-7xl sm:text-8xl md:text-[6.5rem] mb-6">
                                {stat.value}
                            </div>
                            <p className="text-base md:text-lg font-medium leading-snug opacity-90">
                                {stat.label as string}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mb-12 md:mb-16">
                    <h2 className="font-display font-semibold tracking-tight leading-[0.95] text-5xl md:text-7xl mb-5">
                        {t('proof_title') as string}
                    </h2>
                    <p className="text-lg md:text-xl text-fg/70 max-w-2xl mx-auto">
                        {t('proof_subtitle') as string}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 md:gap-5">
                    {promises.map((promise, index) => (
                        <div
                            key={index}
                            className="rounded-[2rem] border-2 border-line bg-card p-7 md:p-8 transition-colors hover:border-lime"
                        >
                            <div className={`mb-8 inline-flex w-14 h-14 items-center justify-center rounded-2xl -rotate-6 ${promise.chip}`}>
                                <promise.icon className="w-7 h-7" />
                            </div>
                            <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight mb-3">
                                {promise.title as string}
                            </h3>
                            <p className="text-fg/70 leading-relaxed">
                                {promise.body as string}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
