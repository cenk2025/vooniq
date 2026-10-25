'use client';

import { useLocale } from './LocaleProvider';
import { Reveal } from './Reveal';
import { Icons } from './Icons';

export function PublicSection() {
    const { t } = useLocale();
    const s = (k: string) => t(k) as string;
    const points = t('public_points') as readonly string[];

    return (
        <section id="public" className="section bg-bg-alt">
            <div className="container-apple text-center">
                <Reveal>
                    <p className="t-eyebrow">{s('public_eyebrow')}</p>
                    <h2 className="t-headline mt-3 mx-auto max-w-3xl">{s('public_title')}</h2>
                    <p className="t-sub mt-5 mx-auto max-w-2xl">{s('public_body')}</p>
                </Reveal>

                <ul className="mt-14 grid gap-4 md:grid-cols-3 text-left">
                    {points.map((p, i) => (
                        <Reveal as="li" key={p} delay={i * 100} className="rounded-[28px] bg-surface p-7 flex flex-col gap-5">
                            <span className="check-dot !w-8 !h-8"><Icons.check className="w-4 h-4" /></span>
                            <span className="text-[1.1875rem] font-semibold tracking-tight leading-snug">{p}</span>
                        </Reveal>
                    ))}
                </ul>

                <Reveal delay={200} className="mt-12">
                    <a href="#contact" className="btn btn-primary">{s('public_cta')}</a>
                </Reveal>
            </div>
        </section>
    );
}
