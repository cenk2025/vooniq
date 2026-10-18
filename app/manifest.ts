import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Voon IQ — Tekoälykonsultointi ja automaatio',
        short_name: 'Voon IQ',
        description: 'Autamme suomalaisia yrityksiä ottamaan tekoälyn käyttöön turvallisesti ja nopeasti.',
        start_url: '/',
        lang: 'fi',
        display: 'standalone',
        background_color: '#1a0a10',
        theme_color: '#ee2ea6',
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
