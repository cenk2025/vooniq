'use client';

import Image from 'next/image';
import { ReactNode } from 'react';
import { useLocale } from './LocaleProvider';
import { Reveal } from './Reveal';
import { Icons } from './Icons';

function ProductCard({
    name,
    domain,
    tagline,
    body,
    badge,
    cta,
    widget,
    delay,
}: {
    name: string;
    domain: string;
    tagline: string;
    body: string;
    badge: string;
    cta: string;
    widget: ReactNode;
    delay: number;
}) {
    return (
        <Reveal delay={delay} className="glass rounded-[34px] p-7 md:p-8 flex flex-col">
            <div className="flex items-center justify-between gap-3">
                <h3 className="text-[1.5rem] font-semibold tracking-tight">{name}</h3>
                <span className="text-[0.75rem] font-medium text-black/55 rounded-full bg-white/60 px-2.5 py-1">{badge}</span>
            </div>
            <p className="mt-1 text-[1.125rem] font-semibold tracking-tight text-black/80">{tagline}</p>
            <p className="mt-3 text-black/60 leading-relaxed">{body}</p>
            <div className="mt-6 rounded-[22px] bg-white/55 p-4" aria-hidden="true">{widget}</div>
            <a href={`https://${domain}`} className="link-more mt-6 text-[#d81b47]">
                {cta} <span className="sr-only">{name}</span>
            </a>
            <span className="mt-1 text-[0.8125rem] text-black/45">{domain}</span>
        </Reveal>
    );
}

export function ProductsSection() {
    const { t } = useLocale();
    const s = (k: string) => t(k) as string;
    const steps = t('nw_w_steps') as readonly string[];

    return (
        <section id="products" className="relative overflow-hidden text-[#1d1d1f]">
            <Image src="/images/tausta-niitty.jpg" alt="" fill sizes="100vw" quality={80} className="hidden md:block object-cover" />
            <Image src="/images/mobiili-koivikko.jpg" alt="" fill sizes="100vw" quality={80} className="md:hidden object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(240,240,234,0.55)_0%,rgba(240,240,234,0)_40%)]" />

            <div className="relative section container-wide">
                <Reveal className="max-w-2xl">
                    <p className="t-eyebrow !text-[#d81b47]">{s('products_eyebrow')}</p>
                    <h2 className="t-headline mt-3">{s('products_title')}</h2>
                    <p className="t-sub mt-5 !text-[#424245]">{s('products_subtitle')}</p>
                </Reveal>

                <div className="mt-14 md:mt-20 grid gap-5 lg:grid-cols-3">
                    <ProductCard
                        delay={0}
                        name={s('sp_name')}
                        domain={s('sp_domain')}
                        tagline={s('sp_tagline')}
                        body={s('sp_body')}
                        badge={s('sp_badge')}
                        cta={s('product_open')}
                        widget={
                            <>
                                <p className="text-[0.75rem] font-semibold text-black/50">{s('sp_w_title')}</p>
                                {[
                                    { job: s('sp_w_job_1'), pct: 86 },
                                    { job: s('sp_w_job_2'), pct: 74 },
                                ].map((m) => (
                                    <div key={m.job} className="mt-3">
                                        <div className="flex justify-between text-[0.9375rem] font-semibold">
                                            <span>{m.job}</span>
                                            <span className="text-gradient">{m.pct} %</span>
                                        </div>
                                        <div className="bar mt-1.5"><i style={{ width: `${m.pct}%` }} /></div>
                                    </div>
                                ))}
                            </>
                        }
                    />
                    <ProductCard
                        delay={120}
                        name={s('tf_name')}
                        domain={s('tf_domain')}
                        tagline={s('tf_tagline')}
                        body={s('tf_body')}
                        badge={s('tf_badge')}
                        cta={s('product_open')}
                        widget={
                            <>
                                <p className="text-[0.75rem] font-semibold text-black/50">{s('tf_w_title')}</p>
                                <div className="mt-3 flex items-center justify-between gap-3">
                                    <span className="text-[0.9375rem] font-medium">{s('tf_w_text')}</span>
                                    <span className="flex-none rounded-full bg-[linear-gradient(90deg,#fb2b3b,#fd4180)] px-3 py-1 text-[0.8125rem] font-semibold text-white">
                                        + {s('tf_w_add')}
                                    </span>
                                </div>
                                <div className="mt-3 flex flex-wrap gap-1.5">
                                    {['JavaScript', 'SQL', 'Git'].map((k) => (
                                        <span key={k} className="chip bg-black/5 text-black/70">{k}</span>
                                    ))}
                                </div>
                            </>
                        }
                    />
                    <ProductCard
                        delay={240}
                        name={s('nw_name')}
                        domain={s('nw_domain')}
                        tagline={s('nw_tagline')}
                        body={s('nw_body')}
                        badge={s('nw_badge')}
                        cta={s('product_open')}
                        widget={
                            <ol className="space-y-2.5">
                                {steps.map((step, i) => (
                                    <li key={step} className="flex items-center gap-3 text-[0.9375rem] font-medium">
                                        {i < 2 ? (
                                            <span className="check-dot"><Icons.check className="w-3 h-3" /></span>
                                        ) : (
                                            <span className="w-[1.375rem] h-[1.375rem] rounded-full border-2 border-[#fd355d]" />
                                        )}
                                        <span className={i < 2 ? 'text-black/50' : ''}>{step}</span>
                                    </li>
                                ))}
                            </ol>
                        }
                    />
                </div>
            </div>
        </section>
    );
}
