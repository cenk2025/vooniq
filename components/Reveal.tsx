'use client';

import { useEffect, useRef, ReactNode, ElementType, CSSProperties } from 'react';

/** Fades and lifts its content in once it scrolls into view (see `.reveal` in globals.css). */
export function Reveal({
    children,
    as: Tag = 'div',
    delay = 0,
    className = '',
}: {
    children: ReactNode;
    as?: ElementType;
    delay?: number;
    className?: string;
}) {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('is-visible');
                    io.disconnect();
                }
            },
            { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <Tag ref={ref} className={`reveal ${className}`} style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}>
            {children}
        </Tag>
    );
}
