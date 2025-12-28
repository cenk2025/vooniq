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
        <section id="pricing" className="py-32 md:py-40 relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl pointer-events-none float" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-3xl pointer-events-none float" style={{ animationDelay: '2s' }} />
            <div className="absolute inset-0 grid-pattern opacity-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20 fade-in-up">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight gradient-text-vibrant">
                        {t('pricing_title') as string}
                    </h2>
                    <p className="text-xl md:text-2xl lg:text-3xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
                        {t('pricing_subtitle') as string}
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative glass-strong p-10 md:p-12 rounded-3xl border-2 ${plan.primary
                                    ? 'border-indigo-500/50 neon-glow-purple scale-105'
                                    : 'border-white/10'
                                } flex flex-col h-full group hover:scale-110 transition-all duration-300 cursor-pointer fade-in-up`}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            {plan.badge && (
                                <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider ${plan.primary
                                        ? 'btn-premium text-white'
                                        : 'glass-strong text-slate-300'
                                    }`}>
                                    {plan.badge as string}
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-3">{plan.name as string}</h3>
                                <div className="text-5xl font-black gradient-text-vibrant mb-4">{plan.price as string}</div>
                                <p className="text-slate-300 text-lg">{plan.desc as string}</p>
                            </div>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start text-slate-200">
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                                            <Icons.check className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-base">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={`w-full py-5 rounded-xl font-bold text-center text-lg transition-all duration-300 ${plan.primary
                                        ? 'btn-premium text-white hover:scale-105'
                                        : 'glass-strong text-white hover:glass border-2 border-white/20 hover:border-white/40'
                                    }`}
                            >
                                {t('plan_cta') as string}
                            </a>
                        </div>
                    ))}
                </div>

                <p className="text-center mt-16 text-slate-400 text-base max-w-2xl mx-auto">
                    {t('pricing_note') as string}
                </p>
            </div>
        </section>
    );
}
