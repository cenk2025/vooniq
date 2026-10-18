'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLocale } from './LocaleProvider';
import { useTheme } from './ThemeProvider';
import { Icons } from './Icons';

export function Header() {
    const { locale, setLocale, t } = useLocale();
    const { theme, setThemeMode } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { labelKey: 'nav_services', href: '#services' },
        { labelKey: 'nav_use_cases', href: '#use-cases' },
        { labelKey: 'nav_process', href: '#process' },
        { labelKey: 'nav_pricing', href: '#pricing' },
        { labelKey: 'nav_contact', href: '#contact' },
    ];

    return (
        <header className="fixed top-3 md:top-4 inset-x-3 md:inset-x-4 z-50">
            <div className="max-w-7xl mx-auto bg-plum text-cream rounded-[1.75rem] shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                <div className="flex items-center justify-between h-14 md:h-[4.5rem] pl-5 pr-2.5 md:pl-7 md:pr-3">
                    {/* Logo */}
                    <a
                        href="#top"
                        aria-label="Voon IQ"
                        className="flex items-center focus-visible-ring rounded-lg"
                    >
                        <Image
                            src="/logo.png"
                            alt="Voon IQ"
                            width={1200}
                            height={346}
                            priority
                            className="h-9 md:h-11 w-auto"
                        />
                    </a>

                    {/* Desktop navigation */}
                    <nav className="hidden lg:flex items-center gap-9">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-[0.95rem] font-medium hover:text-lime transition-colors focus-visible-ring rounded"
                            >
                                {t(item.labelKey) as string}
                            </a>
                        ))}
                    </nav>

                    {/* Right side controls */}
                    <div className="flex items-center gap-2 md:gap-3">
                        <a
                            href="#contact"
                            className="hidden sm:inline-flex btn-pop px-4 md:px-5 py-2 md:py-2.5 bg-lime text-ink text-sm font-bold rounded-xl focus-visible-ring"
                        >
                            {t('nav_cta') as string}
                        </a>

                        {/* Language toggle */}
                        <button
                            onClick={() => setLocale(locale === 'fi' ? 'en' : 'fi')}
                            className="h-9 md:h-10 px-3 text-sm font-bold rounded-xl border-2 border-cream/25 hover:border-lime hover:text-lime transition-colors focus-visible-ring"
                            aria-label="Toggle language"
                        >
                            {locale === 'fi' ? 'EN' : 'FI'}
                        </button>

                        {/* Theme toggle */}
                        <div
                            className="flex items-center p-1 rounded-xl bg-cream/90"
                            role="group"
                            aria-label="Theme"
                        >
                            <button
                                onClick={() => setThemeMode('light')}
                                aria-pressed={theme === 'light'}
                                aria-label="Light theme"
                                className={`w-8 h-7 md:w-9 md:h-8 rounded-lg flex items-center justify-center transition-colors focus-visible-ring ${theme === 'light' ? 'bg-hot text-cream' : 'text-ink/70 hover:text-ink'}`}
                            >
                                <Icons.sun className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setThemeMode('dark')}
                                aria-pressed={theme === 'dark'}
                                aria-label="Dark theme"
                                className={`w-8 h-7 md:w-9 md:h-8 rounded-lg flex items-center justify-center transition-colors focus-visible-ring ${theme === 'dark' ? 'bg-hot text-cream' : 'text-ink/70 hover:text-ink'}`}
                            >
                                <Icons.moon className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-expanded={menuOpen}
                            aria-label="Menu"
                            className="lg:hidden w-10 h-10 rounded-xl bg-cream/10 flex flex-col items-center justify-center gap-1.5 focus-visible-ring"
                        >
                            <span className={`block h-0.5 w-5 bg-cream transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
                            <span className={`block h-0.5 w-5 bg-cream transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
                            <span className={`block h-0.5 w-5 bg-cream transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {menuOpen && (
                    <nav className="lg:hidden px-3 pb-4 pt-1 flex flex-col gap-1">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className="px-4 py-3 rounded-xl text-lg font-display font-semibold hover:bg-cream/10 transition-colors"
                            >
                                {t(item.labelKey) as string}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setMenuOpen(false)}
                            className="sm:hidden mt-2 px-4 py-3 rounded-xl bg-lime text-ink text-center font-bold"
                        >
                            {t('nav_cta') as string}
                        </a>
                    </nav>
                )}
            </div>
        </header>
    );
}
