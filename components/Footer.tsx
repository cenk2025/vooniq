'use client';

import Image from 'next/image';
import { useLocale } from './LocaleProvider';
import { useTheme } from './ThemeProvider';

export function Footer() {
    const { t } = useLocale();
    const { theme } = useTheme();
    const s = (k: string) => t(k) as string;
    const currentYear = new Date().getFullYear();

    const columns = [
        {
            title: s('footer_products'),
            links: [
                { label: 'SkillPath', href: 'https://tyo.voon.fi' },
                { label: 'Talent Factory', href: 'https://worklife.voon.fi' },
                { label: 'BizPulse', href: 'https://biz.voon.fi' },
                { label: 'Nordway', href: 'https://nordway.voon.fi' },
            ],
        },
        {
            title: s('footer_company'),
            links: [
                { label: s('footer_ai_services'), href: '#ai' },
                { label: s('nav_public'), href: '#public' },
                { label: s('nav_about'), href: '#about' },
                { label: 'business.voon.fi', href: 'https://business.voon.fi/fi' },
            ],
        },
        {
            title: s('footer_contact'),
            links: [
                { label: 'info@voon.fi', href: 'mailto:info@voon.fi' },
                { label: s('footer_location'), href: '#contact' },
            ],
        },
    ];

    return (
        <footer className="bg-bg-alt text-[0.75rem] leading-[1.33] text-fg-2">
            <div className="container-wide py-10">
                <div className="grid gap-8 border-b border-line pb-8 md:grid-cols-[1.4fr_repeat(3,1fr)]">
                    <div>
                        <Image
                            src={theme === 'dark' ? '/brand/voon-iq-logo-white.png' : '/brand/voon-iq-logo.png'}
                            alt="VOON IQ"
                            width={640}
                            height={181}
                            className="h-6 w-auto"
                        />
                        <p className="mt-4 max-w-xs text-[0.8125rem]">{s('footer_tagline')}</p>
                    </div>
                    {columns.map((col) => (
                        <nav key={col.title} aria-label={col.title}>
                            <h3 className="font-semibold text-fg">{col.title}</h3>
                            <ul className="mt-3 space-y-2.5">
                                {col.links.map((l) => (
                                    <li key={l.label}>
                                        <a href={l.href} className="hover:text-fg hover:underline underline-offset-2">{l.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}
                </div>
                <div className="pt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <p>&copy; {currentYear} VOON IQ Oy. All rights reserved.</p>
                    <p className="flex gap-4">
                        <a href="#" className="hover:text-fg hover:underline underline-offset-2">{s('footer_privacy')}</a>
                        <a href="#" className="hover:text-fg hover:underline underline-offset-2">{s('footer_terms')}</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
