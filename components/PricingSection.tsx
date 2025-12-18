'use client';

import { useLocale } from './LocaleProvider';
import { Icons } from './Icons';

export function PricingSection() {
    const { t } = useLocale();

    const plans = [
        {
            name: t('plan_1_name'),
            price: t('plan_1_price'),
            desc: t('plan_1_desc'),
            features: t('plan_1_features') as string[],
            badge: t('plan_1_badge'),
            primary: false,
        },
        {
            name: t('plan_2_name'),
            price: t('plan_2_price'),
            desc: t('plan_2_desc'),
            features: t('plan_2_features') as string[],
            badge: t('plan_2_badge'),
            primary: true,
        },
        {
            name: t('plan_3_name'),
            price: t('plan_3_price'),
            desc: t('plan_3_desc'),
            features: t('plan_3_features') as string[],
            badge: t('plan_3_badge'),
            primary: false,
        },
    ];

    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        {t('pricing_title') as string}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
                        {t('pricing_subtitle') as string}
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative glass p-8 md:p-10 rounded-3xl border ${plan.primary
                                    ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20'
                                    : 'border-slate-800'
                                } flex flex-col h-full group hover:translate-y-[-8px] transition-all duration-300`}
                        >
                            {plan.badge && (
                                <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${plan.primary ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50' : 'bg-slate-800 text-slate-400'
                                    }`}>
                                    {plan.badge as string}
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name as string}</h3>
                                <div className="text-3xl font-black text-white mb-4">{plan.price as string}</div>
                                <p className="text-slate-400">{plan.desc as string}</p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start text-slate-300">
                                        <Icons.check className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={`w-full py-4 rounded-xl font-bold text-center transition-all duration-200 ${plan.primary
                                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 neon-glow'
                                        : 'bg-slate-900 border border-slate-700 text-white hover:bg-slate-800'
                                    }`}
                            >
                                {t('plan_cta') as string}
                            </a>
                        </div>
                    ))}
                </div>

                <p className="text-center mt-12 text-slate-500 text-sm max-w-md mx-auto">
                    {t('pricing_note') as string}
                </p>
            </div>
        </section>
    );
}
