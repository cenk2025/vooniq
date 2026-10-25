'use client';

import { useLocale } from './LocaleProvider';
import { Reveal } from './Reveal';

export function IntroSection() {
    const { t } = useLocale();
    const stats = [1, 2, 3, 4].map((n) => ({ value: t(`stat_${n}_value`) as string, label: t(`stat_${n}_label`) as string }));

    return (
        <section className="section bg-bg">
            <div className="container-apple">
                <Reveal as="p" className="t-highlight max-w-4xl">
                    {t('intro_text_1') as string}
                    <strong>{t('intro_strong') as string}</strong>
                    {t('intro_text_2') as string}
                </Reveal>

                <dl className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-y-10">
                    {stats.map((s, i) => (
                        <Reveal key={s.label} delay={i * 100} className="md:border-l md:first:border-l-0 border-line md:px-8 md:first:pl-0">
                            <dt className="sr-only">{s.label}</dt>
                            <dd>
                                <span className="block text-[2.75rem] md:text-[3.5rem] font-semibold leading-none tracking-[-0.04em] text-gradient">
                                    {s.value}
                                </span>
                                <span className="mt-2 block text-fg-2">{s.label}</span>
                            </dd>
                        </Reveal>
                    ))}
                </dl>
            </div>
        </section>
    );
}
