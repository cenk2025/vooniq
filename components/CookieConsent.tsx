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
        <div className="fixed bottom-6 left-6 right-6 z-[100] md:left-auto md:max-w-md animate-in fade-in slide-in-from-bottom-10 duration-500">
            <div className="glass p-6 rounded-3xl border border-slate-700 shadow-2xl">
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {t('cookie_text') as string}
                </p>
                <div className="flex flex-wrap gap-3">
                    <button
                        onClick={handleAccept}
                        className="flex-1 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-colors"
                    >
                        {t('cookie_accept') as string}
                    </button>
                    <button
                        onClick={handleReject}
                        className="flex-1 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-bold rounded-xl transition-colors"
                    >
                        {t('cookie_reject') as string}
                    </button>
                    <button
                        className="w-full md:w-auto px-6 py-2.5 text-slate-500 hover:text-slate-400 text-xs font-medium transition-colors"
                    >
                        {t('cookie_manage') as string}
                    </button>
                </div>
            </div>
        </div>
    );
}
