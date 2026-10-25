'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLocale } from './LocaleProvider';
import { useTheme } from './ThemeProvider';
import { Icons } from './Icons';

export function Header() {
    const { locale, setLocale, t } = useLocale();
    const { theme, themeMode, setThemeMode } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    const themeOptions = [
        { mode: 'light', labelKey: 'theme_day', Icon: Icons.sun },
        { mode: 'dark', labelKey: 'theme_night', Icon: Icons.moon },
        { mode: 'system', labelKey: 'theme_system', Icon: Icons.system },
    ] as const;

    const navItems = [
        { labelKey: 'nav_products', href: '#products' },
        { labelKey: 'nav_business', href: '#business' },
        { labelKey: 'nav_public', href: '#public' },
        { labelKey: 'nav_about', href: '#about' },
        { labelKey: 'nav_contact', href: '#contact' },
    ];

    const themeSwitch = (size: 'sm' | 'lg') => (
        <div className="flex items-center rounded-full bg-fill p-0.5" role="group" aria-label={t('theme_label') as string}>
            {themeOptions.map(({ mode, labelKey, Icon }) => {
                const active = themeMode === mode;
                const label = t(labelKey) as string;
                return (
                    <button
                        key={mode}
                        onClick={() => setThemeMode(mode)}
                        aria-pressed={active}
                        aria-label={label}
                        title={label}
                        className={`${size === 'sm' ? 'w-7 h-7' : 'w-9 h-9'} rounded-full flex items-center justify-center transition-colors ${active ? 'bg-surface text-fg shadow-sm' : 'text-fg-2 hover:text-fg'}`}
                    >
                        <Icon className={size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} />
                    </button>
                );
            })}
        </div>
    );

    return (
        <header className="fixed inset-x-0 top-0 z-50 glass-nav border-b border-black/5 dark:border-white/10">
            <div className="container-wide flex h-14 items-center justify-between gap-4">
                <a href="#top" aria-label="VOON IQ" className="flex items-center rounded-md">
                    <Image
                        src={theme === 'dark' ? '/brand/voon-iq-logo-white.png' : '/brand/voon-iq-logo.png'}
                        alt="VOON IQ"
                        width={640}
                        height={181}
                        priority
                        className="h-6 w-auto"
                    />
                </a>

                <nav className="hidden lg:flex items-center gap-8" aria-label="Main">
                    {navItems.map((item) => (
                        <a key={item.href} href={item.href} className="text-[0.8125rem] text-fg/80 hover:text-fg transition-colors">
                            {t(item.labelKey) as string}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setLocale(locale === 'fi' ? 'en' : 'fi')}
                        className="h-8 px-2.5 rounded-full text-[0.8125rem] font-medium text-fg/80 hover:bg-fill transition-colors"
                        aria-label={locale === 'fi' ? 'Switch to English' : 'Vaihda suomeksi'}
                    >
                        {locale === 'fi' ? 'EN' : 'FI'}
                    </button>

                    <div className="hidden sm:block">{themeSwitch('sm')}</div>

                    <a href="#contact" className="btn btn-primary btn-sm hidden md:inline-flex">
                        {t('nav_cta') as string}
                    </a>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-expanded={menuOpen}
                        aria-label={t('nav_menu') as string}
                        className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px]"
                    >
                        <span className={`block h-[1.5px] w-[18px] bg-fg transition-transform duration-300 ${menuOpen ? 'translate-y-[3.25px] rotate-45' : ''}`} />
                        <span className={`block h-[1.5px] w-[18px] bg-fg transition-transform duration-300 ${menuOpen ? '-translate-y-[3.25px] -rotate-45' : ''}`} />
                    </button>
                </div>
            </div>

            {menuOpen && (
                <nav className="lg:hidden container-wide pb-8 pt-4 flex flex-col" aria-label="Mobile">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="py-2.5 text-[1.75rem] font-semibold tracking-tight"
                        >
                            {t(item.labelKey) as string}
                        </a>
                    ))}
                    <div className="mt-6 flex items-center justify-between gap-4">
                        <a href="#contact" onClick={() => setMenuOpen(false)} className="btn btn-primary">
                            {t('nav_cta') as string}
                        </a>
                        <div className="sm:hidden">{themeSwitch('lg')}</div>
                    </div>
                </nav>
            )}
        </header>
    );
}
