'use client';

import { useState, useEffect } from 'react';
import { useLocale } from './LocaleProvider';
import { useTheme } from './ThemeProvider';
import { Icons } from './Icons';

export function Header() {
    const { locale, setLocale, t } = useLocale();
    const { themeMode, setThemeMode } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [showThemeMenu, setShowThemeMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { labelKey: 'nav_services', href: '#services' },
        { labelKey: 'nav_use_cases', href: '#use-cases' },
        { labelKey: 'nav_process', href: '#process' },
        { labelKey: 'nav_pricing', href: '#pricing' },
        { labelKey: 'nav_contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'glass shadow-lg shadow-blue-500/5'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <a
                        href="#top"
                        className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent focus-visible-ring"
                    >
                        Voon IQ
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors focus-visible-ring"
                            >
                                {t(item.labelKey) as string}
                            </a>
                        ))}
                    </nav>

                    {/* Right side controls */}
                    <div className="flex items-center space-x-3 md:space-x-4">
                        {/* Theme toggle */}
                        <div className="relative">
                            <button
                                onClick={() => setShowThemeMenu(!showThemeMenu)}
                                className="p-2 rounded-lg hover:bg-slate-800/50 transition-colors focus-visible-ring"
                                aria-label="Toggle theme"
                            >
                                {themeMode === 'auto' && <Icons.auto className="w-5 h-5 text-slate-300" />}
                                {themeMode === 'light' && <Icons.sun className="w-5 h-5 text-slate-300" />}
                                {themeMode === 'dark' && <Icons.moon className="w-5 h-5 text-slate-300" />}
                            </button>

                            {showThemeMenu && (
                                <div className="absolute right-0 mt-2 w-32 glass rounded-lg shadow-xl py-1 z-50">
                                    <button
                                        onClick={() => {
                                            setThemeMode('auto');
                                            setShowThemeMenu(false);
                                        }}
                                        className="w-full px-4 py-2 text-left text-sm text-slate-300 hover:bg-slate-800/50 flex items-center space-x-2"
                                    >
                                        <Icons.auto className="w-4 h-4" />
                                        <span>Auto</span>
                                    </button>
                                    <button
                                        onClick={() => {
                                            setThemeMode('light');
                                            setShowThemeMenu(false);
                                        }}
                                        className="w-full px-4 py-2 text-left text-sm text-slate-300 hover:bg-slate-800/50 flex items-center space-x-2"
                                    >
                                        <Icons.sun className="w-4 h-4" />
                                        <span>Light</span>
                                    </button>
                                    <button
                                        onClick={() => {
                                            setThemeMode('dark');
                                            setShowThemeMenu(false);
                                        }}
                                        className="w-full px-4 py-2 text-left text-sm text-slate-300 hover:bg-slate-800/50 flex items-center space-x-2"
                                    >
                                        <Icons.moon className="w-4 h-4" />
                                        <span>Dark</span>
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Language toggle */}
                        <button
                            onClick={() => setLocale(locale === 'fi' ? 'en' : 'fi')}
                            className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors focus-visible-ring rounded-lg"
                            aria-label="Toggle language"
                        >
                            {locale === 'fi' ? 'EN' : 'FI'}
                        </button>

                        {/* CTA Button */}
                        <a
                            href="#contact"
                            className="hidden md:inline-flex px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-sm font-semibold rounded-lg transition-all duration-200 neon-glow focus-visible-ring"
                        >
                            {t('nav_cta') as string}
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile menu overlay - click outside to close theme menu */}
            {showThemeMenu && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowThemeMenu(false)}
                />
            )}
        </header>
    );
}
