import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Voon IQ — AI & Technology for Business',
        short_name: 'Voon IQ',
        description: 'Helping Finnish companies adopt AI safely and fast: automation, analytics, copilots, and pragmatic implementations.',
        start_url: '/',
        display: 'standalone',
        background_color: '#020617',
        theme_color: '#3b82f6',
        icons: [
            {
                src: '/icon-192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon-512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
