'use client';

import { useState } from 'react';
import { useLocale } from './LocaleProvider';
import { Icons } from './Icons';

type SceneKey = 'jyvaskyla' | 'satama';

interface Scene {
  label: string;
  src: string;
  poster: string;
  titleKey: string;
  dateKey: string;
}

const scenes: Record<SceneKey, Scene> = {
  jyvaskyla: {
    label: 'Jyväskylä',
    src: '/jyvaskyla.mp4',
    poster: '/jyvaskyla-poster.jpg',
    titleKey: 'scroll_hero_title_jyvaskyla',
    dateKey: 'scroll_hero_date_jyvaskyla',
  },
  satama: {
    label: 'Satama',
    src: '/satama.mp4',
    poster: '/satama-poster.jpg',
    titleKey: 'scroll_hero_title_satama',
    dateKey: 'scroll_hero_date_satama',
  },
};

// Colour-block palette for the headline (background + readable text colour)
const blockPalette = [
  'bg-grape text-cream',
  'bg-flame text-cream',
  'bg-sun text-ink',
  'bg-blush text-ink',
];

/** Splits the headline into short lines, each rendered as its own colour block. */
function toChunks(title: string, maxLen = 22): { brand: string | null; chunks: string[] } {
  const [first, ...restParts] = title.split(/\s+—\s+/);
  const hasBrand = restParts.length > 0;
  const words = (hasBrand ? restParts.join(' ') : first).split(/\s+/);

  const chunks: string[] = [];
  let line = '';
  for (const word of words) {
    if (line && `${line} ${word}`.length > maxLen) {
      chunks.push(line);
      line = word;
    } else {
      line = line ? `${line} ${word}` : word;
    }
  }
  if (line) chunks.push(line);

  return { brand: hasBrand ? first : null, chunks };
}

export function ScrollHeroSection() {
  const { t } = useLocale();
  const [scene, setScene] = useState<SceneKey>('jyvaskyla');
  const current = scenes[scene];

  const { brand, chunks } = toChunks(t('hero_title') as string);
  const blocks = brand ? [brand, ...chunks] : chunks;

  const heroCards = [
    { titleKey: 'hero_card_1_title', bodyKey: 'hero_card_1_body', Icon: Icons.sparkles, color: 'bg-grape text-cream' },
    { titleKey: 'hero_card_2_title', bodyKey: 'hero_card_2_body', Icon: Icons.shield, color: 'bg-flame text-cream' },
    { titleKey: 'hero_card_3_title', bodyKey: 'hero_card_3_body', Icon: Icons.rocket, color: 'bg-sun text-ink' },
  ];

  const trustItems = ['hero_trust_1', 'hero_trust_2', 'hero_trust_3'];

  return (
    <section id="top" className="relative pt-28 md:pt-40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Headline as colour blocks */}
        <div className="fade-in-up font-display font-semibold leading-[0.95] tracking-tight text-[clamp(2rem,6.2vw,5.25rem)] flex flex-wrap justify-center gap-2.5 md:gap-4">
          <h1 className="contents">
            {blocks.map((text, i) => (
              <span
                key={i}
                className={`rounded-[1.1rem] md:rounded-[1.75rem] px-4 md:px-8 pt-1.5 pb-2.5 md:pt-3 md:pb-4 ${blockPalette[i % blockPalette.length]}`}
              >
                {text}
              </span>
            ))}
          </h1>
          <a
            href="#contact"
            aria-label={t('hero_cta_primary') as string}
            className="btn-pop inline-flex items-center justify-center rounded-[1.1rem] md:rounded-[1.75rem] bg-hot text-cream px-5 md:px-8 focus-visible-ring"
          >
            <Icons.arrowRight className="w-[0.8em] h-[0.8em]" />
          </a>
        </div>

        <p className="fade-in-up mt-8 md:mt-12 max-w-2xl mx-auto text-lg md:text-2xl leading-snug text-fg/80" style={{ animationDelay: '0.1s' }}>
          {t('hero_subtitle') as string}
        </p>

        {/* CTA pill */}
        <div className="fade-in-up mt-8 md:mt-10 max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-2 rounded-[2rem] sm:rounded-full bg-plum border-2 border-hot/60">
            <input
              type="text"
              placeholder={(t('hero_input_placeholder') as string) || 'Kerro meille yrityksesi tarpeista...'}
              aria-label={t('hero_input_placeholder') as string}
              className="flex-1 min-w-0 bg-transparent outline-none text-cream placeholder:text-cream/55 text-base md:text-lg px-5 py-3 text-center sm:text-left"
            />
            <a
              href="#contact"
              className="btn-pop text-center whitespace-nowrap px-7 py-3.5 bg-lime text-ink font-bold text-base md:text-lg rounded-full focus-visible-ring"
            >
              {(t('hero_cta_start') as string) || 'Aloita nyt'}
            </a>
          </div>
        </div>

        {/* Trust pills */}
        <ul className="fade-in-up mt-8 flex flex-wrap justify-center gap-2.5 md:gap-3" style={{ animationDelay: '0.3s' }}>
          {trustItems.map((key) => (
            <li
              key={key}
              className="inline-flex items-center gap-2 rounded-full border-2 border-line px-4 py-2 text-sm md:text-base font-medium"
            >
              <span className="w-5 h-5 rounded-full bg-lime text-ink flex items-center justify-center">
                <Icons.check className="w-3 h-3" />
              </span>
              {t(key) as string}
            </li>
          ))}
        </ul>
      </div>

      {/* Video frame with stacked colour layers behind it */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 mt-16 md:mt-24">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {(Object.keys(scenes) as SceneKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setScene(key)}
              aria-pressed={scene === key}
              className={`btn-pop px-5 py-2 rounded-full text-sm md:text-base font-bold focus-visible-ring ${scene === key
                ? 'bg-lime text-ink'
                : 'border-2 border-line hover:border-lime hover:text-lime'
                }`}
            >
              {scenes[key].label}
            </button>
          ))}
        </div>

        <div className="relative">
          <div aria-hidden="true" className="absolute inset-0 rounded-[2rem] md:rounded-[3rem] bg-flame -rotate-3 translate-x-3 md:translate-x-6" />
          <div aria-hidden="true" className="absolute inset-0 rounded-[2rem] md:rounded-[3rem] bg-sun rotate-2 -translate-x-2 md:-translate-x-4" />
          <div className="relative rounded-[2rem] md:rounded-[3rem] bg-hot p-2.5 md:p-4">
            <div className="relative aspect-video overflow-hidden rounded-[1.5rem] md:rounded-[2.25rem] bg-ink">
              <video
                key={scene}
                autoPlay
                loop
                muted
                playsInline
                poster={current.poster}
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={current.src} type="video/mp4" />
              </video>
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-8 bg-gradient-to-t from-ink/85 to-transparent text-left">
                <p className="font-display font-extrabold uppercase leading-none text-cream text-2xl sm:text-4xl md:text-6xl">
                  {t(current.titleKey) as string}
                </p>
                <p className="mt-2 text-sm md:text-base font-medium text-lime">
                  {t(current.dateKey) as string}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-20 md:mt-32 grid md:grid-cols-3 gap-4 md:gap-5">
        {heroCards.map((card, idx) => (
          <div
            key={idx}
            className={`rounded-[2rem] p-7 md:p-8 transition-transform duration-300 hover:-translate-y-2 ${idx % 2 ? 'hover:rotate-1' : 'hover:-rotate-1'} ${card.color}`}
          >
            <card.Icon className="w-10 h-10 mb-8" />
            <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight mb-3">
              {t(card.titleKey) as string}
            </h3>
            <p className="text-base leading-relaxed opacity-90">
              {t(card.bodyKey) as string}
            </p>
          </div>
        ))}
      </div>

      {/* Ticker */}
      <div className="mt-20 md:mt-32 -mx-4 py-4 md:py-5 bg-lime text-ink -rotate-1 overflow-hidden" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center">
              {[...trustItems, ...trustItems].map((key, i) => (
                <span key={i} className="flex items-center font-display font-extrabold uppercase text-2xl md:text-4xl whitespace-nowrap">
                  {t(key) as string}
                  <Icons.sparkles className="w-7 h-7 md:w-9 md:h-9 mx-6 md:mx-10 text-hot" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
