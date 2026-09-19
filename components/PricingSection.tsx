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
            card: 'bg-blush text-ink',
            badgeStyle: 'bg-ink text-cream',
            checkStyle: 'bg-ink text-blush',
            btn: 'bg-ink text-cream hover:bg-hot',
            primary: false,
        },
        {
            name: t('plan_2_name'),
            price: t('plan_2_price'),
            desc: t('plan_2_desc'),
            features: t('plan_2_features') as string[],
            badge: t('plan_2_badge'),
            card: 'bg-lime text-ink',
            badgeStyle: 'bg-hot text-cream',
            checkStyle: 'bg-ink text-lime',
            btn: 'bg-ink text-cream hover:bg-hot',
            primary: true,
        },
        {
            name: t('plan_3_name'),
            price: t('plan_3_price'),
            desc: t('plan_3_desc'),
            features: t('plan_3_features') as string[],
            badge: t('plan_3_badge'),
            card: 'bg-grape text-cream',
            badgeStyle: 'bg-sun text-ink',
            checkStyle: 'bg-cream text-grape',
            btn: 'bg-lime text-ink hover:bg-sun',
            primary: false,
        },
    ];

    return (
        <section id="pricing" className="pt-24 md:pt-36 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14 md:mb-20">
                    <h2 className="font-display font-semibold tracking-tight leading-[0.95] text-6xl md:text-8xl mb-6">
                        {t('pricing_title') as string}
                    </h2>
                    <p className="text-lg md:text-2xl text-fg/70 max-w-3xl mx-auto leading-snug">
                        {t('pricing_subtitle') as string}
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 lg:gap-5 lg:items-stretch">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col rounded-[2rem] md:rounded-[2.5rem] p-7 md:p-10 transition-transform duration-300 hover:-translate-y-2 ${plan.card} ${plan.primary ? 'lg:-translate-y-4 lg:hover:-translate-y-6' : ''}`}
                        >
                            {plan.badge && (
                                <div className={`absolute -top-4 right-6 rotate-3 px-5 py-1.5 rounded-full text-xs md:text-sm font-extrabold uppercase tracking-wider ${plan.badgeStyle}`}>
                                    {plan.badge as string}
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">{plan.name as string}</h3>
                                <div className="font-display font-extrabold leading-none tracking-tight text-4xl md:text-5xl xl:text-6xl mb-4 [overflow-wrap:anywhere]">{plan.price as string}</div>
                                <p className="text-base md:text-lg opacity-85 leading-snug">{plan.desc as string}</p>
                            </div>

                            <ul className="space-y-3.5 mb-10 flex-grow">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start gap-3">
                                        <span className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.checkStyle}`}>
                                            <Icons.check className="w-3.5 h-3.5" />
                                        </span>
                                        <span className="text-base leading-snug">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={`btn-pop w-full py-4 rounded-full font-bold text-center text-lg focus-visible-ring ${plan.btn}`}
                            >
                                {t('plan_cta') as string}
                            </a>
                        </div>
                    ))}
                </div>

                <p className="text-center mt-14 text-fg/60 text-base max-w-2xl mx-auto">
                    {t('pricing_note') as string}
                </p>
            </div>
        </section>
    );
}
