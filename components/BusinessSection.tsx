'use client';

import Image from 'next/image';
import { useLocale } from './LocaleProvider';
import { Reveal } from './Reveal';
import { Icons } from './Icons';

export function BusinessSection() {
    const { t } = useLocale();
    const s = (k: string) => t(k) as string;
    const features = t('bp_features') as readonly string[];

    return (
        <section id="business" className="section bg-bg">
            <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[36px] text-[#1d1d1f]">
                    <Image
                        src="/images/kortti-bizpulse.jpg"
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        quality={82}
                        className="object-cover"
                    />
                    <div className="glass absolute left-6 right-6 bottom-6 md:left-auto md:right-8 md:bottom-8 md:w-[300px] rounded-[28px] p-5" aria-hidden="true">
                        <p className="text-[0.75rem] font-semibold text-black/50">{s('bp_w_title')}</p>
                        <p className="mt-1 font-semibold">Esimerkki Oy</p>
                        <dl className="mt-3 space-y-1.5 text-[0.9375rem]">
                            <div className="flex justify-between"><dt className="text-black/55">{s('bp_w_amount_label')}</dt><dd className="font-semibold">248,00 €</dd></div>
                            <div className="flex justify-between"><dt className="text-black/55">{s('bp_w_due_label')}</dt><dd className="font-semibold">14.11.2026</dd></div>
                        </dl>
                        <div className="mt-4 flex items-center gap-2.5 rounded-2xl bg-white/60 px-3 py-2.5 text-[0.875rem] font-medium">
                            <span className="check-dot !bg-[#30d158]"><Icons.check className="w-3 h-3" /></span>
                            {s('bp_w_done')}
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={120}>
                    <p className="t-eyebrow">{s('business_eyebrow')}</p>
                    <h2 className="t-headline mt-3">{s('business_title')}</h2>
                    <p className="t-sub mt-5">{s('business_body')}</p>
                    <ul className="mt-8 divide-y divide-line border-y border-line">
                        {features.map((f) => (
                            <li key={f} className="flex items-center gap-4 py-4 text-[1.0625rem]">
                                <span className="check-dot"><Icons.check className="w-3 h-3" /></span>
                                {f}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                        <a href="#contact" className="btn btn-primary">{s('bp_cta')}</a>
                        <a href={`https://${s('bp_domain')}`} className="link-more">{s('bp_domain')}</a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
