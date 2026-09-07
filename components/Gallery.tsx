'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { studio } from '@/data/studio';

const EASE = [0.22, 1, 0.36, 1] as const;
// Les vignettes alternent trois formats pour casser la grille
const RATIOS = ['aspect-[3/4]', 'aspect-square', 'aspect-[4/5]'];
const ALL = 'Tout';

export default function Gallery() {
  const [activeStyle, setActiveStyle] = useState<string>(ALL);

  const filters = [ALL, ...studio.galleryStyles];
  const pieces =
    activeStyle === ALL ? studio.gallery : studio.gallery.filter((piece) => piece.style === activeStyle);

  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="max-w-2xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-gold/60" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold">Galerie</span>
          </div>
          <h2
            className="font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}
          >
            Mes réalisations
          </h2>
          <p
            className="mt-5 text-base leading-relaxed text-white"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Une sélection de pièces réalisées au salon, de la ligne la plus fine aux grandes compositions japonaises et
            manga. Filtrez par style pour explorer mon travail.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {filters.map((filter) => {
            const active = filter === activeStyle;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveStyle(filter)}
                aria-pressed={active}
                className={`rounded-full px-5 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                  active
                    ? 'bg-gold text-[#0a0a0a]'
                    : 'border border-white/15 text-white hover:border-gold/50 hover:text-gold'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </motion.div>

        <div className="mt-12 columns-2 gap-4 md:columns-3">
          <AnimatePresence mode="popLayout">
            {pieces.map((piece, index) => (
              <motion.div
                key={piece.src}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 24 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92 }}
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{
                  boxShadow: '0 0 50px 10px rgba(255, 150, 80, 0.2)',
                  transition: { duration: 0.3 },
                }}
                transition={{ duration: 0.6, ease: EASE }}
                className={`group relative mb-4 break-inside-avoid overflow-hidden rounded-lg border border-white/10 transition-colors duration-300 hover:border-gold/40 ${
                  RATIOS[index % RATIOS.length]
                }`}
              >
                <Image
                  src={piece.src}
                  alt={piece.alt}
                  fill
                  sizes="(max-width:768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="p-4 text-xs font-medium uppercase tracking-[0.2em] text-gold">{piece.style}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
