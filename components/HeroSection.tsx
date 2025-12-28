'use client';

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

    return (
        <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background effects */}
            <div className="absolute inset-0 grid-pattern opacity-40" />
            <div className="absolute inset-0 aurora-glow" />

            {/* Animated gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full blur-3xl float" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-indigo-600/25 to-violet-600/25 rounded-full blur-3xl float" style={{ animationDelay: '2s' }} />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                <div className="text-center space-y-10 fade-in-up">
                    {/* Massive Headline */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[1.1] tracking-tight">
                        <span className="gradient-text-vibrant block">
                            {t('hero_title') as string}
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-200 max-w-5xl mx-auto leading-relaxed font-light">
                        {t('hero_subtitle') as string}
                    </p>

                    {/* Glassmorphic Search/Input Box - Framer Style */}
                    <div className="max-w-4xl mx-auto pt-6">
                        <div className="glass-strong rounded-2xl p-2 neon-glow-purple">
                            <div className="flex items-center gap-3 px-4 py-4">
                                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex-shrink-0">
                                    <Icons.sparkles className="w-5 h-5 text-white" />
                                </div>
                                <input
                                    type="text"
                                    placeholder={t('hero_input_placeholder') as string || "Kerro meille yrityksesi tarpeista..."}
                                    className="flex-1 bg-transparent border-none outline-none text-white text-lg placeholder:text-slate-400 focus:placeholder:text-slate-500 transition-colors"
                                />
                                <a
                                    href="#contact"
                                    className="btn-premium px-6 py-3 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 flex-shrink-0"
                                >
                                    {t('hero_cta_start') as string || "Aloita AI:n kanssa"}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Trust row */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10 pt-6">
                        {trustItems.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center space-x-2 text-base md:text-lg text-slate-300"
                            >
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center flex-shrink-0">
                                    <Icons.check className="w-4 h-4 text-white" />
                                </div>
                                <span className="font-medium">{t(item.textKey) as string}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons - Alternative */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <a
                            href="#services"
                            className="glass hover:glass-strong text-slate-200 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 focus-visible-ring w-full sm:w-auto text-center flex items-center justify-center space-x-2"
                        >
                            <span>{t('hero_cta_secondary') as string}</span>
                            <Icons.chevronDown className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Hero cards */}
                    <div className="grid md:grid-cols-3 gap-6 pt-16 max-w-6xl mx-auto">
                        {heroCards.map((card, idx) => (
                            <div
                                key={idx}
                                className="glass-strong p-8 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer"
                                style={{ animationDelay: `${idx * 0.15}s` }}
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-indigo-600/30 to-purple-600/30 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 neon-glow-purple">
                                    <card.Icon className="w-7 h-7 text-indigo-300" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">
                                    {t(card.titleKey) as string}
                                </h3>
                                <p className="text-slate-300 text-base leading-relaxed">
                                    {t(card.bodyKey) as string}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="glass rounded-full p-3">
                    <Icons.chevronDown className="w-6 h-6 text-indigo-300" />
                </div>
            </div>
        </section>
    );
}
