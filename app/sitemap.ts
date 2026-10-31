import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://voon.fi'

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/tietosuoja`,
            lastModified: new Date('2026-10-25'),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/kayttoehdot`,
            lastModified: new Date('2026-10-25'),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/saavutettavuus`,
            lastModified: new Date('2026-10-31'),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ]
}
