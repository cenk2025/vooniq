'use client';

import Image from 'next/image';
import { useLocale } from './LocaleProvider';
import { Reveal } from './Reveal';
import { Icons } from './Icons';

export function AIServicesSection() {
    const { t } = useLocale();
    const s = (k: string) => t(k) as string;
    const services = t('ai_services') as readonly string[];

    const steps = [1, 2, 3, 4].map((n) => ({ title: s(`ai_step_${n}_title`), body: s(`ai_step_${n}_body`) }));
    const plans = [1, 2, 3].map((n) => ({
        name: s(`plan_${n}_name`),
        price: s(`plan_${n}_price`),
        desc: s(`plan_${n}_desc`),
        features: t(`plan_${n}_features`) as readonly string[],
    }));

    return (
        <section id="ai" className="relative overflow-hidden bg-black text-[#f5f5f7]">
            <Image src="/images/tausta-metsa-tumma.jpg" alt="" fill sizes="100vw" quality={80} className="object-cover object-right opacity-90" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.55)_60%,#000_100%)]" />

            <div className="relative section container-wide">
                <Reveal className="max-w-2xl">
                    <p className="t-eyebrow !text-[#ff5a7f]">{s('ai_eyebrow')}</p>
                    <h2 className="t-headline mt-3">
                        {s('ai_title').split('. ')[0]}.{' '}
                        <span className="text-gradient">{s('ai_title').split('. ')[1]}</span>
                    </h2>
                    <p className="t-sub mt-5 !text-[#a1a1a6]">{s('ai_subtitle')}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                        {services.map((x) => (
                            <li key={x} className="chip bg-white/10 text-white/85">{x}</li>
                        ))}
                    </ul>
                </Reveal>

                <ol className="mt-16 md:mt-24 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, i) => (
                        <Reveal as="li" key={step.title} delay={i * 100} className="glass-dark rounded-[28px] p-6">
                            <span className="text-[0.875rem] font-semibold text-gradient">0{i + 1}</span>
                            <h3 className="mt-3 text-[1.3125rem] font-semibold tracking-tight">{step.title}</h3>
                            <p className="mt-2 text-white/60 leading-relaxed">{step.body}</p>
                        </Reveal>
                    ))}
                </ol>

                <div className="mt-5 grid gap-4 lg:grid-cols-3">
                    {plans.map((p, i) => (
                        <Reveal
                            key={p.name}
                            delay={i * 100}
                            className="glass-dark rounded-[28px] p-7 flex flex-col"
                        >
                            <h3 className="text-[1.3125rem] font-semibold">{p.name}</h3>
                            <p className="mt-4 text-[2rem] font-semibold tracking-[-0.03em]">{p.price}</p>
                            <p className="mt-1 text-white/60">{p.desc}</p>
                            <ul className="mt-6 space-y-3 flex-1">
                                {p.features.map((f) => (
                                    <li key={f} className="flex items-center gap-3 text-white/85">
                                        <Icons.check className="w-4 h-4 text-[#ff5a7f] flex-none" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    ))}
                </div>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[0.8125rem] text-white/45">{s('pricing_note')}</p>
                    <a href="#contact" className="btn btn-primary shrink-0">{s('plan_cta')}</a>
                </div>
            </div>
        </section>
    );
}
