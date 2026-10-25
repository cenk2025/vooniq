'use client';

import { Header } from './Header';
import { Footer } from './Footer';
import { useLocale } from './LocaleProvider';
import { legalDocs, LegalDocId } from '@/lib/legal';

export function LegalPage({ doc }: { doc: LegalDocId }) {
    const { locale } = useLocale();
    const d = legalDocs[doc][locale];

    return (
        <div className="relative min-h-screen">
            <Header />
            <main className="pt-14">
                <article className="container-apple max-w-3xl py-20 md:py-28">
                    <p className="t-eyebrow">{d.updated}</p>
                    <h1 className="t-headline mt-3">{d.title}</h1>
                    <p className="t-sub mt-6">{d.intro}</p>

                    {d.sections.map((section) => (
                        <section key={section.heading} className="mt-12">
                            <h2 className="text-[1.5rem] font-semibold tracking-tight">{section.heading}</h2>
                            {section.paragraphs?.map((p) => (
                                <p key={p} className="mt-4 text-fg-2 leading-relaxed">{p}</p>
                            ))}
                            {section.list && (
                                <ul className="mt-4 space-y-2 text-fg-2 leading-relaxed list-disc pl-5 marker:text-brand">
                                    {section.list.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            )}
                            {section.note && <p className="mt-4 text-fg-2 leading-relaxed">{section.note}</p>}
                        </section>
                    ))}
                </article>
            </main>
            <Footer />
        </div>
    );
}
