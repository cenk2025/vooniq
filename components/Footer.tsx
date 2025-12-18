'use client';

import { useLocale } from './LocaleProvider';

export function Footer() {
    const { t } = useLocale();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-slate-900 bg-black/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-2">
                        <a href="#top" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6 inline-block">
                            Voon IQ
                        </a>
                        <p className="text-slate-500 max-w-sm">
                            Voon IQ auttaa suomalaisia yrityksiä hyödyntämään tekoälyä ja teknologiaa käytännönläheisesti ja turvallisesti.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">{t('footer_services') as string}</h4>
                        <ul className="space-y-4">
                            <li><a href="#services" className="text-slate-500 hover:text-blue-400 transition-colors">AI-kartoitus</a></li>
                            <li><a href="#services" className="text-slate-500 hover:text-blue-400 transition-colors">Prosessiautomaatio</a></li>
                            <li><a href="#services" className="text-slate-500 hover:text-blue-400 transition-colors">Tekoäly-copilots</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Linkit</h4>
                        <ul className="space-y-4">
                            <li><a href="https://business.voon.fi/fi" className="text-slate-500 hover:text-blue-400 transition-colors">{t('footer_business_link') as string}</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">{t('footer_privacy') as string}</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">{t('footer_terms') as string}</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-slate-600 text-sm">
                        &copy; {currentYear} Voon IQ. All rights reserved.
                    </div>
                    <div className="flex space-x-6">
                        {/* Social links could go here */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
