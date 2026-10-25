'use client';

import { getImageProps } from 'next/image';
import { useLocale } from './LocaleProvider';

export function Hero() {
    const { t } = useLocale();
    const skills = t('hero_widget_skills') as readonly string[];

    // Art direction: landscape portrait on desktop, vertical portrait on phones.
    const common = { alt: '', priority: true, sizes: '100vw' };
    const {
        props: { srcSet: desktop },
    } = getImageProps({ ...common, src: '/images/hero-koivikko.jpg', width: 1680, height: 944, quality: 82 });
    const {
        props: { srcSet: mobile, ...rest },
    } = getImageProps({ ...common, src: '/images/mobiili-hero-kukka.jpg', width: 944, height: 1680, quality: 82 });

    return (
        <section id="top" className="relative h-[100svh] min-h-[640px] max-h-[1100px] overflow-hidden bg-[#d9dad3] text-[#1d1d1f]">
            <picture>
                <source media="(min-width: 768px)" srcSet={desktop} />
                <source media="(max-width: 767px)" srcSet={mobile} />
                <img {...rest} alt="" className="focus-in absolute inset-0 h-full w-full object-cover object-[70%_50%] md:object-center" />
            </picture>

            {/* Soft veil so the headline stays readable over the photo */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(242,242,236,0.82)_0%,rgba(242,242,236,0.35)_45%,rgba(242,242,236,0)_70%)] md:bg-[linear-gradient(90deg,rgba(242,242,236,0.78)_0%,rgba(242,242,236,0.35)_40%,rgba(242,242,236,0)_60%)]" />

            <div className="relative container-wide h-full flex flex-col justify-start pt-28 md:justify-center md:pt-14">
                <div className="max-w-xl">
                    <p className="fade-up text-[1.0625rem] font-semibold text-[#e8264f]" style={{ animationDelay: '0.2s' }}>
                        {t('hero_eyebrow') as string}
                    </p>
                    <h1 className="fade-up t-hero caret mt-3" style={{ animationDelay: '0.35s' }}>
                        {t('hero_title') as string}
                    </h1>
                    <p className="fade-up mt-5 max-w-md text-[1.1875rem] md:text-[1.3125rem] leading-snug text-[#424245]" style={{ animationDelay: '0.5s' }}>
                        {t('hero_subtitle') as string}
                    </p>
                    <div className="fade-up mt-8 flex flex-wrap items-center gap-3" style={{ animationDelay: '0.65s' }}>
                        <a href="#products" className="btn btn-primary">{t('hero_cta_primary') as string}</a>
                        <a href="#contact" className="btn btn-secondary text-[#1d1d1f]">{t('hero_cta_secondary') as string}</a>
                    </div>
                </div>
            </div>

            {/* Product glimpse: SkillPath recognising skills */}
            <div
                className="fade-up glass absolute hidden md:block right-[6%] bottom-[16%] w-[300px] rounded-[30px] p-5"
                style={{ animationDelay: '1.1s' }}
                aria-hidden="true"
            >
                <p className="text-[0.8125rem] font-semibold text-black/55">{t('hero_widget_title') as string}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                    {skills.map((s) => (
                        <span key={s} className="chip chip-brand">{s}</span>
                    ))}
                </div>
                <div className="mt-5 rounded-2xl bg-white/55 p-3.5">
                    <p className="text-[0.75rem] text-black/50">{t('hero_widget_match_label') as string}</p>
                    <div className="mt-1 flex items-baseline justify-between font-semibold">
                        <span>{t('hero_widget_match_job') as string}</span>
                        <span className="text-gradient">82 %</span>
                    </div>
                    <div className="bar mt-2"><i style={{ width: '82%' }} /></div>
                </div>
            </div>
        </section>
    );
}
