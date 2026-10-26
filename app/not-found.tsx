import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center">
                <p className="t-eyebrow">404</p>
                <h1 className="t-headline mt-3">Sivua ei löytynyt.</h1>
                <p className="t-sub mt-5">Page not found.</p>
                <Link href="/" className="btn btn-primary mt-10 inline-flex">
                    voon.fi
                </Link>
            </div>
        </main>
    );
}
