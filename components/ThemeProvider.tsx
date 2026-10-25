'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';
/** 'light' = day, 'dark' = night, 'system' = follow the OS setting live. */
export type ThemeMode = 'system' | 'light' | 'dark';

interface ThemeContextType {
    /** The theme actually applied right now. */
    theme: Theme;
    /** The user's choice. */
    themeMode: ThemeMode;
    setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'theme-mode';
const DARK_QUERY = '(prefers-color-scheme: dark)';

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [themeMode, setThemeModeState] = useState<ThemeMode>('system');
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        // Load saved preference ('auto' was the old name for 'system')
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'light' || saved === 'dark' || saved === 'system') {
            setThemeModeState(saved);
        } else if (saved === 'auto') {
            setThemeModeState('system');
        }
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia(DARK_QUERY);

        const apply = () => {
            const next: Theme =
                themeMode === 'system' ? (mediaQuery.matches ? 'dark' : 'light') : themeMode;
            setTheme(next);
            document.documentElement.classList.toggle('dark', next === 'dark');
            document.documentElement.classList.toggle('light', next === 'light');
        };

        apply();

        // In system mode, follow OS changes live (e.g. automatic day/night switch)
        if (themeMode !== 'system') return;
        mediaQuery.addEventListener('change', apply);
        return () => mediaQuery.removeEventListener('change', apply);
    }, [themeMode]);

    const setThemeMode = (mode: ThemeMode) => {
        setThemeModeState(mode);
        try {
            localStorage.setItem(STORAGE_KEY, mode);
        } catch {
            // storage unavailable (private mode) — choice applies for this visit only
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, themeMode, setThemeMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
