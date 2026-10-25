'use client';

import { useState, useEffect } from 'react';
import { useLocale } from './LocaleProvider';

export function CookieConsent() {
    const { t } = useLocale();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        try {
            if (!localStorage.getItem('cookie-consent')) setIsVisible(true);
        } catch {
            // storage unavailable — don't show the banner
        }
    }, []);

    const dismiss = () => {
        try {
            localStorage.setItem('cookie-consent', 'seen');
        } catch {
            // storage unavailable — the notice shows again next visit
        }
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fade-up fixed bottom-4 left-4 right-4 z-[100] md:left-6 md:right-auto md:bottom-6 md:max-w-sm" role="dialog" aria-live="polite">
            <div className="glass rounded-[24px] p-5">
                <p className="text-[0.875rem] leading-relaxed text-black/75">{t('cookie_text') as string}</p>
                <div className="mt-4 flex items-center gap-4">
                    <button onClick={dismiss} className="btn btn-primary btn-sm px-6">
                        {t('cookie_accept') as string}
                    </button>
                    <a href="/tietosuoja" className="text-[0.875rem] font-medium text-[#d81b47] hover:underline underline-offset-2">
                        {t('cookie_more') as string}
                    </a>
                </div>
            </div>
        </div>
    );
}
