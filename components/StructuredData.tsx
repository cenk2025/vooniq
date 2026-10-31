'use client';

import { useLocale } from './LocaleProvider';

const SITE = 'https://voon.fi';

/**
 * One @graph with linked entities (@id) so search engines and AI answer engines
 * can resolve who the business is, what it sells and what it costs.
 * Every value is taken from the same translations that render on the page —
 * FAQPage markup must mirror the visible FAQ.
 */
export function StructuredData() {
    const { locale, t } = useLocale();
    const s = (key: string) => t(key) as string;

    const services = [
        { key: 'sp', url: 'https://tyo.voon.fi' },
        { key: 'tf', url: 'https://worklife.voon.fi' },
        { key: 'bp', url: 'https://biz.voon.fi' },
        { key: 'nw', url: 'https://nordway.voon.fi' },
    ].map(({ key, url }) => ({
        '@type': 'Service',
        '@id': `${SITE}/#service-${key}`,
        name: key === 'bp' ? 'BizPulse' : s(`${key}_name`),
        description: key === 'bp' ? s('business_body') : s(`${key}_body`),
        url,
        provider: { '@id': `${SITE}/#organization` },
        areaServed: { '@type': 'Country', name: 'Finland' },
    }));

    const offers = [
        { n: 1, min: 990 },
        { n: 2, min: 3900 },
        { n: 3, min: null },
    ].map(({ n, min }) => ({
        '@type': 'Offer',
        name: s(`plan_${n}_name`),
        description: [s(`plan_${n}_desc`), ...(t(`plan_${n}_features`) as readonly string[])].join(' · '),
        ...(min !== null && {
            priceCurrency: 'EUR',
            priceSpecification: {
                '@type': 'PriceSpecification',
                minPrice: min,
                priceCurrency: 'EUR',
            },
        }),
        seller: { '@id': `${SITE}/#organization` },
    }));

    const graph = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Organization',
                '@id': `${SITE}/#organization`,
                name: 'VOON IQ',
                url: SITE,
                logo: {
                    '@type': 'ImageObject',
                    url: `${SITE}/icon-512.png`,
                    width: 512,
                    height: 512,
                },
                image: `${SITE}/og-image.png`,
                foundingDate: '2024',
                founder: { '@type': 'Person', name: 'Cenk Yakinlar' },
                address: { '@type': 'PostalAddress', addressLocality: 'Jyväskylä', addressCountry: 'FI' },
                areaServed: { '@type': 'Country', name: 'Finland' },
                email: 'info@voon.fi',
                contactPoint: {
                    '@type': 'ContactPoint',
                    contactType: 'customer service',
                    email: 'info@voon.fi',
                    availableLanguage: ['fi', 'en'],
                },
                sameAs: ['https://business.voon.fi'],
                knowsAbout: [
                    'Osaamisen tunnistaminen',
                    'Skills recognition',
                    'ESCO',
                    'Tekoäly',
                    'Artificial intelligence',
                    'Prosessiautomaatio',
                    'Business process automation',
                    'AI copilots',
                    'Data analytics',
                    'Generatiivinen tekoäly',
                    'Large language models',
                ],
                description: s('hero_subtitle'),
                makesOffer: offers,
                hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: s('products_title'),
                    itemListElement: services.map((svc) => ({
                        '@type': 'Offer',
                        itemOffered: { '@id': svc['@id'] },
                    })),
                },
            },
            ...services,
            {
                '@type': 'WebSite',
                '@id': `${SITE}/#website`,
                name: 'VOON IQ',
                url: SITE,
                publisher: { '@id': `${SITE}/#organization` },
                inLanguage: ['fi', 'en'],
            },
            {
                '@type': 'WebPage',
                '@id': `${SITE}/#webpage`,
                url: SITE,
                name: 'VOON IQ — Osaaminen näkyviin',
                isPartOf: { '@id': `${SITE}/#website` },
                about: { '@id': `${SITE}/#organization` },
                primaryImageOfPage: { '@type': 'ImageObject', url: `${SITE}/og-image.png` },
                inLanguage: locale,
            },
            {
                '@type': 'FAQPage',
                '@id': `${SITE}/#faq`,
                inLanguage: locale,
                mainEntity: [1, 2, 3, 4].map((n) => ({
                    '@type': 'Question',
                    name: s(`faq_q${n}`),
                    acceptedAnswer: { '@type': 'Answer', text: s(`faq_a${n}`) },
                })),
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
    );
}
