'use client';

import { useState, useEffect } from 'react';
import { useLocale } from './LocaleProvider';

export function CookieConsent() {
    const { t } = useLocale();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookie-consent', 'rejected');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 z-[100] md:left-6 md:right-auto md:bottom-6 md:max-w-md fade-in-up">
            <div className="rounded-[1.75rem] bg-cream text-ink p-6 shadow-[0_20px_50px_rgba(0,0,0,0.45)] border-2 border-ink">
                <p className="text-sm md:text-[0.95rem] leading-relaxed mb-5">
                    {t('cookie_text') as string}
                </p>
                <div className="flex flex-wrap gap-2.5">
                    <button
                        onClick={handleAccept}
                        className="btn-pop flex-1 px-6 py-2.5 bg-lime text-ink border-2 border-ink text-sm font-bold rounded-full focus-visible-ring"
                    >
                        {t('cookie_accept') as string}
                    </button>
                    <button
                        onClick={handleReject}
                        className="btn-pop flex-1 px-6 py-2.5 bg-transparent text-ink border-2 border-ink text-sm font-bold rounded-full hover:bg-ink hover:text-cream focus-visible-ring"
                    >
                        {t('cookie_reject') as string}
                    </button>
                    <button
                        className="w-full px-6 py-1.5 text-ink/60 hover:text-ink text-xs font-semibold underline underline-offset-4 transition-colors"
                    >
                        {t('cookie_manage') as string}
                    </button>
                </div>
            </div>
        </div>
    );
}
