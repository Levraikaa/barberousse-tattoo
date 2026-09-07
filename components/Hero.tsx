'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { studio } from '@/data/studio';

const EASE = [0.22, 1, 0.36, 1] as const;

// Le nom du salon est éclaté en lignes, une par mot (3 max)
const WORDS = studio.name.trim().split(/\s+/).slice(0, 3);
// Taille plancher : le mot le plus long doit tenir dans 300px
const MIN_REM = Math.min(8, 300 / (0.42 * Math.max(...WORDS.map((w) => w.length))) / 16);

const wordVariants = {
  hidden: { opacity: 0, y: '0.4em' },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE, delay: 0.25 + 0.12 * index },
  }),
};

export default function Hero() {
  return (
    <>
      <section id="hero" className="relative isolate flex h-screen min-h-screen w-full flex-col overflow-hidden">
        <div className="ken-burns absolute inset-0 -z-10">
          <Image src={studio.heroImage} alt="" fill priority sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 -z-10 bg-black/50" />
        <div
          className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-black/70 to-transparent"
          aria-hidden="true"
        />
        <div className="grain" />

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center md:px-10">
          <h1
            aria-label={studio.name}
            className="font-serif uppercase leading-[0.82] text-white"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: `clamp(${MIN_REM.toFixed(2)}rem, 18vw, 22rem)`,
              letterSpacing: '0.01em',
            }}
          >
            {WORDS.map((word, index) => (
              <span key={`${word}-${index}`} className="block overflow-hidden">
                <motion.span
                  custom={index}
                  variants={wordVariants}
                  initial="hidden"
                  animate="show"
                  className="block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>
      </section>

      {/* Barre d'appel à l'action collée en bas de l'écran */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <span
            className="text-lg uppercase tracking-[0.2em] text-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {studio.name}
          </span>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_25px_5px_rgba(184,67,44,0.5)]"
            style={{ backgroundColor: studio.accentColor }}
          >
            {studio.ctaLabel}
          </a>
        </div>
      </div>
    </>
  );
}
