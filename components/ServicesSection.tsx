'use client';

import { useLocale } from './LocaleProvider';
import { Icons } from './Icons';

export function ServicesSection() {
    const { t } = useLocale();

    const services = [
        {
            titleKey: 'svc_1_title',
            bodyKey: 'svc_1_body',
            bulletsKey: 'svc_1_bullets',
            Icon: Icons.brain,
        },
        {
            titleKey: 'svc_2_title',
            bodyKey: 'svc_2_body',
            bulletsKey: 'svc_2_bullets',
            Icon: Icons.workflow,
        },
        {
            titleKey: 'svc_3_title',
            bodyKey: 'svc_3_body',
            bulletsKey: 'svc_3_bullets',
            Icon: Icons.lock,
        },
        {
            titleKey: 'svc_4_title',
            bodyKey: 'svc_4_body',
            bulletsKey: 'svc_4_bullets',
            Icon: Icons.barChart,
        },
        {
            titleKey: 'svc_5_title',
            bodyKey: 'svc_5_body',
            bulletsKey: 'svc_5_bullets',
            Icon: Icons.zap,
        },
        {
            titleKey: 'svc_6_title',
            bodyKey: 'svc_6_body',
            bulletsKey: 'svc_6_bullets',
            Icon: Icons.lifebuoy,
        },
    ];

    return (
        <section id="services" className="relative py-24 md:py-40 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-purple-950/20 to-slate-950/50" />
            <div className="absolute inset-0 grid-pattern opacity-20" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center max-w-4xl mx-auto mb-20 fade-in-up">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 gradient-text-vibrant">
                        {t('services_title') as string}
                    </h2>
                    <p className="text-xl md:text-2xl lg:text-3xl text-slate-200 font-light leading-relaxed">
                        {t('services_subtitle') as string}
                    </p>
                </div>

                {/* Services grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, idx) => {
                        const bullets = t(service.bulletsKey) as string[];
                        return (
                            <div
                                key={idx}
                                className="glass-strong p-8 lg:p-10 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer fade-in-up"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                {/* Icon */}
                                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600/40 to-purple-600/40 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 neon-glow-purple">
                                    <service.Icon className="w-8 h-8 text-indigo-200" />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-200 transition-colors">
                                    {t(service.titleKey) as string}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-300 mb-6 leading-relaxed text-base">
                                    {t(service.bodyKey) as string}
                                </p>

                                {/* Bullets */}
                                <ul className="space-y-3">
                                    {bullets.map((bullet, bulletIdx) => (
                                        <li key={bulletIdx} className="flex items-start space-x-3 text-sm text-slate-300">
                                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Icons.check className="w-3 h-3 text-white" />
                                            </div>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
