'use client';

import { useLocale } from './LocaleProvider';
import { Icons } from './Icons';

export function ProofSection() {
    const { t } = useLocale();

    const stats = [
        { value: '3+', label: t('proof_stat_1') },
        { value: '30-60', label: t('proof_stat_2') },
        { value: '4', label: t('proof_stat_3') },
    ];

    const promises = [
        {
            title: t('promise_1_title'),
            body: t('promise_1_body'),
            icon: Icons.sparkles,
        },
        {
            title: t('promise_2_title'),
            body: t('promise_2_body'),
            icon: Icons.shield,
        },
        {
            title: t('promise_3_title'),
            body: t('promise_3_body'),
            icon: Icons.users,
        },
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center p-8 glass rounded-3xl border border-blue-500/10 hover:border-blue-500/20 transition-all group">
                            <div className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                                {stat.value}
                            </div>
                            <p className="text-slate-400 font-medium">
                                {stat.label as string}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        {t('proof_title') as string}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
                        {t('proof_subtitle') as string}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {promises.map((promise, index) => (
                        <div key={index} className="relative group">
                            <div className="mb-6 inline-flex p-3 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                                <promise.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                {promise.title as string}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {promise.body as string}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
