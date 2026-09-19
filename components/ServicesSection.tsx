'use client';

import { useLocale } from './LocaleProvider';
import { Icons } from './Icons';
import Image from 'next/image';

export function ServicesSection() {
    const { t } = useLocale();

    const services = [
        { titleKey: 'svc_1_title', bodyKey: 'svc_1_body', Icon: Icons.brain, color: 'bg-grape text-cream' },
        { titleKey: 'svc_2_title', bodyKey: 'svc_2_body', Icon: Icons.workflow, color: 'bg-flame text-cream' },
        { titleKey: 'svc_3_title', bodyKey: 'svc_3_body', Icon: Icons.lock, color: 'bg-sun text-ink' },
        { titleKey: 'svc_4_title', bodyKey: 'svc_4_body', Icon: Icons.barChart, color: 'bg-hot text-cream' },
    ];

    return (
        <section
            id="services"
            className="relative mt-24 md:mt-32 mx-2 md:mx-4 rounded-[2rem] md:rounded-[3.5rem] bg-blush text-ink py-16 md:py-28 overflow-hidden"
        >
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">

                    {/* Left: sticky text */}
                    <div className="lg:sticky lg:top-32 lg:w-1/2 space-y-8">
                        <div className="inline-flex items-center gap-2 rounded-full bg-ink text-lime px-4 py-2 font-bold tracking-wide uppercase text-xs md:text-sm">
                            <Icons.sparkles className="w-4 h-4" />
                            <span>GenAI Advances Daily</span>
                        </div>

                        <h2 className="font-display font-semibold leading-[0.95] tracking-tight text-5xl sm:text-6xl md:text-7xl">
                            <span className="block mb-3">AI Changing</span>
                            <span className="inline-block rounded-[1.25rem] md:rounded-[1.75rem] bg-ink text-cream px-5 md:px-7 pt-1 pb-2.5 md:pb-3.5 mb-3">Software</span>
                            <br />
                            <span className="inline-block rounded-[1.25rem] md:rounded-[1.75rem] bg-hot text-cream px-5 md:px-7 pt-1 pb-2.5 md:pb-3.5 -rotate-2">Development</span>
                        </h2>

                        <p className="text-lg md:text-xl leading-relaxed max-w-lg text-ink/75">
                            {t('services_subtitle') as string || "AI's ability to automate complex tasks is evolving at a dizzying pace. We help you stay ahead."}
                        </p>

                        <a
                            href="#contact"
                            className="btn-pop inline-flex items-center gap-2 px-8 py-4 text-base md:text-lg font-bold text-cream bg-ink rounded-full hover:bg-lime hover:text-ink focus-visible-ring"
                        >
                            Explore Solutions
                            <Icons.arrowRight className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Right: featured image + service cards */}
                    <div className="lg:w-1/2 space-y-4 md:space-y-5 w-full">
                        <div className="relative rounded-[2rem] overflow-hidden bg-ink aspect-video group">
                            <Image
                                src="/hero-conductor.png"
                                alt="AI Orchestra"
                                fill
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 p-5 md:p-7 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-lime text-ink flex items-center justify-center font-display font-extrabold -rotate-6">AI</div>
                                <div>
                                    <p className="text-cream font-display font-semibold text-xl">AI-Powered Teams</p>
                                    <p className="text-lime text-sm">Machine Learning Engineers</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                            {services.map((service, idx) => (
                                <div
                                    key={idx}
                                    className={`rounded-[1.75rem] p-6 md:p-7 transition-transform duration-300 hover:-translate-y-1.5 ${idx % 2 ? 'hover:rotate-1' : 'hover:-rotate-1'} ${service.color}`}
                                >
                                    <div className="flex items-center justify-between mb-8">
                                        <service.Icon className="w-9 h-9" />
                                        <span className="font-display font-extrabold text-xl opacity-60">0{idx + 1}</span>
                                    </div>
                                    <h3 className="font-display text-xl md:text-2xl font-semibold leading-tight mb-3">
                                        {t(service.titleKey) as string}
                                    </h3>
                                    <p className="text-sm md:text-[0.95rem] leading-relaxed opacity-90">
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
