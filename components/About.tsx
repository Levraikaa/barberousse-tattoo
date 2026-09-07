'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { studio } from '@/data/studio';

const EASE = [0.22, 1, 0.36, 1] as const;

const IMAGES: readonly string[] =
  studio.aboutImages && studio.aboutImages.length > 0 ? studio.aboutImages : [studio.aboutImage];
const HAS_CAROUSEL = IMAGES.length > 1;

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function About() {
  const [index, setIndex] = useState(0);

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-gold/50" aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.25em] text-gold">Le studio</span>
            </div>

            <h2
              className="font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}
            >
              {studio.aboutTitle}
            </h2>

            <div className="mt-6 flex max-w-prose flex-col gap-4">
              {studio.aboutStory.split('\n\n').map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="leading-relaxed text-white"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="mt-10 grid grid-cols-3 gap-6 border-t border-white/5 pt-8"
            >
              {studio.stats.map((stat) => (
                <motion.div key={stat.label} variants={itemVariants}>
                  <div className="font-serif text-4xl font-light tracking-tight text-gold md:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[0.7rem] uppercase tracking-[0.18em] text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-10">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-medium tracking-wide text-foreground transition-all duration-300 hover:border-gold/50 hover:text-gold"
              >
                Mes prestations
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative"
          >
            <span
              className="absolute -left-4 top-10 hidden h-24 w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent lg:block"
              aria-hidden="true"
            />

            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_60px_-20px_var(--gold)]">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                  key={IMAGES[index]}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className="absolute inset-0"
                >
                  <Image
                    src={IMAGES[index]}
                    alt=""
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent"
                aria-hidden="true"
              />
              <div className="pointer-events-none absolute inset-3 rounded-xl border border-gold/20" aria-hidden="true" />

              {HAS_CAROUSEL && (
                <>
                  <button
                    type="button"
                    onClick={() => setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length)}
                    aria-label="Photo précédente du salon"
                    className="absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white opacity-80 backdrop-blur-sm transition-all duration-300 hover:border-gold/60 hover:text-gold hover:opacity-100"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setIndex((i) => (i + 1) % IMAGES.length)}
                    aria-label="Photo suivante du salon"
                    className="absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white opacity-80 backdrop-blur-sm transition-all duration-300 hover:border-gold/60 hover:text-gold hover:opacity-100"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>

                  <div className="absolute inset-x-0 bottom-5 z-10 flex items-center justify-center gap-2">
                    {IMAGES.map((src, i) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setIndex(i)}
                        aria-label={`Voir la photo ${i + 1} du salon`}
                        aria-current={i === index}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === index ? 'w-6 bg-gold' : 'w-1.5 bg-white/45 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="absolute -bottom-5 -right-2 rounded-full border border-gold/30 bg-[#111111] px-5 py-2 lg:right-6">
              <span className="font-serif text-sm tracking-wide text-gold">Depuis {studio.establishedYear}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
