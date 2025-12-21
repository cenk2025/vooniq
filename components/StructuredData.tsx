'use client';

import { useLocale } from './LocaleProvider';

export function StructuredData() {
    const { locale, t } = useLocale();

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Voon IQ",
        "legalName": "Voon Oy",
        "url": "https://vooniq.com",
        "logo": "https://vooniq.com/icon-512.png",
        "foundingDate": "2024",
        "founders": [
            {
                "@type": "Person",
                "name": "Cenk Yakinlar"
            }
        ],
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "FI",
            "addressLocality": "Finland"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "email": "info@voon.fi",
            "availableLanguage": ["Finnish", "English"]
        },
        "sameAs": [
            "https://business.voon.fi"
        ],
        "description": locale === 'fi'
            ? "Autamme suomalaisia yrityksiä ottamaan tekoälyn käyttöön turvallisesti ja nopeasti: automaatio, analytiikka, copilotit ja käytännönläheiset toteutukset."
            : "Helping Finnish companies adopt AI safely and fast: automation, analytics, copilots, and pragmatic implementations."
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "AI Consulting and Implementation",
        "provider": {
            "@type": "Organization",
            "name": "Voon IQ"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Finland"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "AI Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": locale === 'fi' ? "Tekoälyautomaatio" : "AI Automation",
                        "description": locale === 'fi'
                            ? "Automatisoi toistuvat prosessit ja vapauta aikaa arvokkaampaan työhön"
                            : "Automate repetitive processes and free up time for more valuable work"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": locale === 'fi' ? "Tekoälyanalytiikka" : "AI Analytics",
                        "description": locale === 'fi'
                            ? "Muuta data toimiviksi oivalluksiksi ja paremmiksi päätöksiksi"
                            : "Transform data into actionable insights and better decisions"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": locale === 'fi' ? "Tekoälycopilotit" : "AI Copilots",
                        "description": locale === 'fi'
                            ? "Rakenna räätälöityjä tekoälyassistentteja tiimillesi"
                            : "Build custom AI assistants for your team"
                    }
                }
            ]
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Voon IQ",
        "url": "https://vooniq.com",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://vooniq.com/?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        },
        "inLanguage": ["fi", "en"]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": locale === 'fi' ? "Mikä on Voon IQ?" : "What is Voon IQ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": locale === 'fi'
                        ? "Voon IQ on suomalainen tekoälykonsultointi- ja toteutusyritys, joka auttaa yrityksiä ottamaan tekoälyn käyttöön turvallisesti ja nopeasti."
                        : "Voon IQ is a Finnish AI consulting and implementation company that helps businesses adopt AI safely and quickly."
                }
            },
            {
                "@type": "Question",
                "name": locale === 'fi' ? "Mitä palveluita Voon IQ tarjoaa?" : "What services does Voon IQ offer?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": locale === 'fi'
                        ? "Tarjoamme tekoälyautomaatiota, analytiikkaa, räätälöityjä copilot-ratkaisuja sekä käytännönläheisiä tekoälytoteutuksia suomalaisille yrityksille."
                        : "We offer AI automation, analytics, custom copilot solutions, and pragmatic AI implementations for Finnish companies."
                }
            },
            {
                "@type": "Question",
                "name": locale === 'fi' ? "Kenelle Voon IQ:n palvelut sopivat?" : "Who are Voon IQ's services for?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": locale === 'fi'
                        ? "Palvelumme sopivat kaikenkokoisille suomalaisille yrityksille, jotka haluavat hyödyntää tekoälyä liiketoiminnassaan."
                        : "Our services are suitable for Finnish companies of all sizes looking to leverage AI in their business."
                }
            }
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://vooniq.com"
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
}
