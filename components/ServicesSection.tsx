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
        <section id="services" className="relative py-20 md:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        {t('services_title') as string}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300">
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
                                className="glass p-6 lg:p-8 rounded-xl hover:bg-slate-800/70 transition-all duration-300 group fade-in"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                                    <service.Icon className="w-7 h-7 text-cyan-400" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {t(service.titleKey) as string}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-400 mb-4 leading-relaxed">
                                    {t(service.bodyKey) as string}
                                </p>

                                {/* Bullets */}
                                <ul className="space-y-2">
                                    {bullets.map((bullet, bulletIdx) => (
                                        <li key={bulletIdx} className="flex items-start space-x-2 text-sm text-slate-300">
                                            <Icons.check className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
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
