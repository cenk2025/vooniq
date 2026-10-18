'use client';

import Image from 'next/image';
import { useLocale } from './LocaleProvider';

export function Footer() {
    const { t } = useLocale();
    const currentYear = new Date().getFullYear();

    const linkClass = 'px-3.5 py-1.5 rounded-full text-sm md:text-base text-cream/75 hover:text-ink hover:bg-lime transition-colors focus-visible-ring';

    return (
        <footer className="relative bg-navy text-cream rounded-t-[2rem] md:rounded-t-[3.5rem] overflow-hidden py-14 md:py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
                <a href="#top" aria-label="Voon IQ" className="focus-visible-ring rounded-lg">
                    <Image
                        src="/logo-sm.png"
                        alt="Voon IQ"
                        width={480}
                        height={138}
                        unoptimized
                        className="h-9 md:h-10 w-auto"
                    />
                </a>

                <p className="mt-5 max-w-md text-cream/65 text-sm md:text-base leading-relaxed">
                    Voon IQ auttaa suomalaisia yrityksiä hyödyntämään tekoälyä ja teknologiaa käytännönläheisesti ja turvallisesti.
                </p>

                <nav aria-label="Footer" className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-2">
                    <a href="#services" className={linkClass}>AI-kartoitus</a>
                    <a href="#services" className={linkClass}>Prosessiautomaatio</a>
                    <a href="#services" className={linkClass}>Tekoäly-copilots</a>
                    <a href="https://business.voon.fi/fi" className={linkClass}>{t('footer_business_link') as string}</a>
                    <a href="#" className={linkClass}>{t('footer_privacy') as string}</a>
                    <a href="#" className={linkClass}>{t('footer_terms') as string}</a>
                </nav>

                <div className="mt-10 pt-6 w-full border-t border-cream/10 text-cream/45 text-xs md:text-sm">
                    &copy; {currentYear} Voon IQ. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
