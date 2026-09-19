'use client';

import { useLocale } from './LocaleProvider';

export function Footer() {
    const { t } = useLocale();
    const currentYear = new Date().getFullYear();

    const linkClass = 'hover:text-lime transition-colors';

    return (
        <footer className="relative bg-navy text-cream rounded-t-[2rem] md:rounded-t-[3.5rem] overflow-hidden pt-16 md:pt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                <div className="grid md:grid-cols-4 gap-10 md:gap-12 mb-16 md:mb-24">
                    <div className="md:col-span-2">
                        <p className="text-cream/70 max-w-sm text-base md:text-lg leading-relaxed">
                            Voon IQ auttaa suomalaisia yrityksiä hyödyntämään tekoälyä ja teknologiaa käytännönläheisesti ja turvallisesti.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-display text-azure font-semibold text-lg mb-5">{t('footer_services') as string}</h4>
                        <ul className="space-y-3">
                            <li><a href="#services" className={linkClass}>AI-kartoitus</a></li>
                            <li><a href="#services" className={linkClass}>Prosessiautomaatio</a></li>
                            <li><a href="#services" className={linkClass}>Tekoäly-copilots</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display text-azure font-semibold text-lg mb-5">Linkit</h4>
                        <ul className="space-y-3">
                            <li><a href="https://business.voon.fi/fi" className={linkClass}>{t('footer_business_link') as string}</a></li>
                            <li><a href="#" className={linkClass}>{t('footer_privacy') as string}</a></li>
                            <li><a href="#" className={linkClass}>{t('footer_terms') as string}</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pb-6 text-cream/50 text-sm">
                    &copy; {currentYear} Voon IQ. All rights reserved.
                </div>
            </div>

            {/* Oversized wordmark */}
            <a
                href="#top"
                aria-label="Voon IQ"
                className="block select-none text-center font-display font-extrabold tracking-tighter leading-[0.8] text-azure text-[26vw] md:text-[21vw] whitespace-nowrap translate-y-[0.08em]"
            >
                Voon IQ
            </a>
        </footer>
    );
}
