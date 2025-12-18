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
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="absolute inset-0 aurora-glow" />

            {/* Gradient orb */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                <div className="text-center space-y-8 fade-in">
                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            {t('hero_title') as string}
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                        {t('hero_subtitle') as string}
                    </p>

                    {/* Trust row */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-4">
                        {trustItems.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center space-x-2 text-sm md:text-base text-slate-400"
                            >
                                <Icons.check className="w-5 h-5 text-cyan-400" />
                                <span>{t(item.textKey) as string}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-lg font-semibold rounded-lg transition-all duration-200 neon-glow focus-visible-ring w-full sm:w-auto text-center"
                        >
                            {t('hero_cta_primary') as string}
                        </a>
                        <a
                            href="https://business.voon.fi/fi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 glass hover:bg-slate-800/70 text-slate-200 text-lg font-semibold rounded-lg transition-all duration-200 focus-visible-ring w-full sm:w-auto text-center flex items-center justify-center space-x-2"
                        >
                            <span>{t('hero_cta_secondary') as string}</span>
                            <Icons.externalLink className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Hero cards */}
                    <div className="grid md:grid-cols-3 gap-6 pt-16 max-w-5xl mx-auto">
                        {heroCards.map((card, idx) => (
                            <div
                                key={idx}
                                className="glass p-6 rounded-xl hover:bg-slate-800/70 transition-all duration-300 group"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <card.Icon className="w-6 h-6 text-cyan-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    {t(card.titleKey) as string}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {t(card.bodyKey) as string}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <Icons.chevronDown className="w-6 h-6 text-slate-400" />
            </div>
        </section>
    );
}
