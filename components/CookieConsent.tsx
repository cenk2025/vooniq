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

    const choose = (value: 'accepted' | 'rejected') => {
        try {
            localStorage.setItem('cookie-consent', value);
        } catch {
            // storage unavailable — the choice applies for this visit only
        }
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fade-up fixed bottom-4 left-4 right-4 z-[100] md:left-6 md:right-auto md:bottom-6 md:max-w-sm" role="dialog" aria-live="polite">
            <div className="glass rounded-[24px] p-5">
                <p className="text-[0.875rem] leading-relaxed text-black/75">{t('cookie_text') as string}</p>
                <div className="mt-4 flex gap-2">
                    <button onClick={() => choose('accepted')} className="btn btn-primary btn-sm flex-1">
                        {t('cookie_accept') as string}
                    </button>
                    <button onClick={() => choose('rejected')} className="btn btn-secondary btn-sm flex-1 text-[#1d1d1f]">
                        {t('cookie_reject') as string}
                    </button>
                </div>
            </div>
        </div>
    );
}
