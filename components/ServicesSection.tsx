'use client';

import { useLocale } from './LocaleProvider';
import { Icons } from './Icons';
import Image from 'next/image';

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
    ];

    return (
        <section id="services" className="relative py-24 md:py-32 bg-white text-slate-900 overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* Left: Sticky Text Content */}
                    <div className="lg:sticky lg:top-32 lg:w-1/2 space-y-8 fade-in-up">
                        {/* Accent Text like the reference */}
                        <div className="inline-flex items-center space-x-2 font-bold text-emerald-600 tracking-wide uppercase text-sm">
                            <Icons.sparkles className="w-5 h-5" />
                            <span>GenAI Advances Daily</span>
                        </div>

                        <h2 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight">
                            AI Changing<br />
                            <span className="text-slate-900">Software</span><br />
                            <span className="font-caveat text-emerald-500 block transform rotate-[-2deg] mt-2">Development</span>
                        </h2>

                        <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                            {t('services_subtitle') as string || "AI's ability to automate complex tasks is evolving at a dizzying pace. We help you stay ahead."}
                        </p>

                        <div className="pt-4">
                            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-slate-900 border border-transparent rounded-full hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 hover:scale-105 shadow-xl">
                                Explore Solutions
                            </a>
                        </div>
                    </div>

                    {/* Right: Service Cards / Orchestra Image aesthetic */}
                    <div className="lg:w-1/2 space-y-8 w-full">
                        {/* Featured "Orchestra" Card equivalent */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 aspect-video group cursor-pointer hover:scale-[1.02] transition-transform duration-500">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opactiy-80" />
                            {/* Use the conductor image here too as a reference to the theme, or a different one */}
                            <Image
                                src="/hero-conductor.png"
                                alt="AI Orchestra"
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                            />
                            <div className="absolute bottom-0 left-0 p-8 z-20">
                                <div className="flex items-center space-x-4 mb-3">
                                    <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">AI</div>
                                    <div>
                                        <p className="text-white font-bold text-lg">AI-Powered Teams</p>
                                        <p className="text-emerald-400 text-sm">Machine Learning Engineers</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service Grid below */}
                        <div className="grid sm:grid-cols-2 gap-6 pt-8">
                            {services.map((service, idx) => (
                                <div
                                    key={idx}
                                    className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-emerald-600 group-hover:scale-110 transition-transform">
                                        <service.Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                                        {t(service.titleKey) as string}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        {t(service.bodyKey) as string}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
