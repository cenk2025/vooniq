'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';
type ThemeMode = 'auto' | 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    themeMode: ThemeMode;
    setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [themeMode, setThemeModeState] = useState<ThemeMode>('auto');
    const [theme, setTheme] = useState<Theme>('dark');

    useEffect(() => {
        // Load saved preference
        const saved = localStorage.getItem('theme-mode') as ThemeMode | null;
        if (saved) {
            setThemeModeState(saved);
        }
    }, []);

    useEffect(() => {
        const determineTheme = (): Theme => {
            if (themeMode === 'light') return 'light';
            if (themeMode === 'dark') return 'dark';

            // Auto mode: check system preference first
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }
            if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                return 'light';
            }

            // If no system preference, use time-based logic
            const hour = new Date().getHours();
            // Day: 7am-7pm (light), Night: 7pm-7am (dark)
            return hour >= 7 && hour < 19 ? 'light' : 'dark';
        };

        const updateTheme = () => {
            const newTheme = determineTheme();
            setTheme(newTheme);

            if (newTheme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        };

        updateTheme();

        // Listen for system preference changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            if (themeMode === 'auto') {
                updateTheme();
            }
        };

        mediaQuery.addEventListener('change', handleChange);

        // Update every minute for time-based switching (only in auto mode)
        let interval: NodeJS.Timeout | null = null;
        if (themeMode === 'auto') {
            interval = setInterval(updateTheme, 60000);
        }

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
            if (interval) clearInterval(interval);
        };
    }, [themeMode]);

    const setThemeMode = (mode: ThemeMode) => {
        setThemeModeState(mode);
        localStorage.setItem('theme-mode', mode);
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
