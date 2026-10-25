'use client';

import Image from 'next/image';
import { useLocale } from './LocaleProvider';
import { Reveal } from './Reveal';

export function FounderSection() {
    const { t } = useLocale();
    const s = (k: string) => t(k) as string;

    return (
        <section id="about" className="section bg-bg">
            <div className="container-apple">
                <Reveal as="figure" className="max-w-4xl">
                    <p className="t-eyebrow">{s('founder_eyebrow')}</p>
                    <blockquote className="t-headline mt-4">
                        <span className="text-gradient">“</span>
                        {s('founder_quote')}
                        <span className="text-gradient">”</span>
                    </blockquote>
                    <figcaption className="mt-10 flex items-center gap-4">
                        <span className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-bg-alt">
                            <Image src="/brand/voon-iq-mark.png" alt="" width={512} height={464} className="w-8 h-auto" />
                        </span>
                        <span>
                            <span className="block font-semibold">{s('founder_name')}</span>
                            <span className="block text-fg-2">{s('founder_role')}, VOON IQ</span>
                        </span>
                    </figcaption>
                    <p className="mt-6 max-w-2xl text-fg-2 leading-relaxed">{s('founder_bio')}</p>
                </Reveal>
            </div>
        </section>
    );
}
