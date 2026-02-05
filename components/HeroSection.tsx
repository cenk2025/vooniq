'use client';

import { useEffect, useRef } from 'react';

import { useLocale } from './LocaleProvider';
import { Icons } from './Icons';

export function HeroSection() {
    const { t } = useLocale();

    const heroCards = [
        {
            titleKey: 'hero_card_1_title',
            bodyKey: 'hero_card_1_body',
            Icon: Icons.sparkles,
        },
        {
            titleKey: 'hero_card_2_title',
            bodyKey: 'hero_card_2_body',
            Icon: Icons.shield,
        },
        {
            titleKey: 'hero_card_3_title',
            bodyKey: 'hero_card_3_body',
            Icon: Icons.rocket,
        },
    ];

    const trustItems = [
        { textKey: 'hero_trust_1' },
        { textKey: 'hero_trust_2' },
        { textKey: 'hero_trust_3' },
    ];

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.6; // Slow motion effect
        }
    }, []);

    return (
        <section id="top" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#020617]">
            {/* Background Video */}
            <div className="absolute inset-0 z-0 w-full h-full">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute w-full h-full object-cover object-center opacity-90"
                    poster="/hero-conductor.png"
                >
                    {/* Placeholder for user video */}
                    <source src="/hero-conductor.mp4" type="video/mp4" />
                    {/* Fallback to image if video fails/missing */}
                    <img src="/hero-conductor.png" alt="Conductor Background" className="w-full h-full object-cover" />
                </video>

                {/* Cinema-style gradients for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-[#020617]/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/70 via-[#020617]/20 to-[#020617]/70" />

                {/* Abstract magical particles overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-emerald-500/10 blur-[130px] rounded-full mix-blend-screen animate-pulse pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center">

                <div className="text-center space-y-8 fade-in-up max-w-5xl pt-10">
                    {/* Massive Headline */}
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[1.1] tracking-tight text-white drop-shadow-2xl">
                        {t('hero_title') as string}
                        <span className="text-emerald-500">.</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl md:text-3xl text-slate-200 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-md">
                        {t('hero_subtitle') as string}
                    </p>

                    {/* Glassmorphic Search/Input Box - Updated to Emerald Theme */}
                    <div className="max-w-3xl mx-auto pt-10">
                        <div className="glass-strong rounded-2xl p-2 neon-glow-emerald transition-all duration-500 hover:shadow-[0_0_50px_rgba(16,185,129,0.3)]">
                            <div className="flex flex-col sm:flex-row items-center gap-3 px-2 sm:px-4 py-3">
                                <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex-shrink-0 shadow-lg">
                                    <Icons.sparkles className="w-6 h-6 text-white" />
                                </div>
                                <input
                                    type="text"
                                    placeholder={t('hero_input_placeholder') as string || "Kerro meille yrityksesi tarpeista..."}
                                    className="w-full bg-transparent border-none outline-none text-white text-lg placeholder:text-slate-300 focus:placeholder:text-slate-200 transition-colors text-center sm:text-left h-12"
                                />
                                <a
                                    href="#contact"
                                    className="w-full sm:w-auto px-8 py-4 bg-white text-emerald-950 font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:bg-emerald-50 shadow-[0_0_20px_rgba(255,255,255,0.3)] flex-shrink-0 whitespace-nowrap"
                                >
                                    {t('hero_cta_start') as string || "Aloita Nyt"}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Trust row */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 pt-10 opacity-90">
                        {trustItems.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center space-x-3 text-base md:text-lg text-slate-200"
                            >
                                <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center flex-shrink-0">
                                    <Icons.check className="w-3 h-3 text-emerald-400" />
                                </div>
                                <span className="font-medium tracking-wide">{t(item.textKey) as string}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hero cards - Subtle Integration */}
                <div className="grid md:grid-cols-3 gap-6 pt-32 w-full max-w-6xl">
                    {heroCards.map((card, idx) => (
                        <div
                            key={idx}
                            className="bg-slate-950/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl hover:bg-slate-900/60 transition-all duration-300 group cursor-pointer hover:-translate-y-1"
                            style={{ animationDelay: `${idx * 0.15}s` }}
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                                    <card.Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                                    {t(card.titleKey) as string}
                                </h3>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed pl-[3.5rem] border-l border-white/5">
                                {t(card.bodyKey) as string}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20 opacity-70">
                <Icons.chevronDown className="w-8 h-8 text-white/50" />
            </div>
        </section>
    );
}
