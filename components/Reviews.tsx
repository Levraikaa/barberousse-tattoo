'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';
import { studio } from '@/data/studio';

const EASE = [0.22, 1, 0.36, 1] as const;

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const BODY_FONT = { fontFamily: 'var(--font-body), sans-serif', fontWeight: 300 } as const;
const HEADING_STYLE = { fontFamily: 'var(--font-display), sans-serif', letterSpacing: '0.05em' } as const;

/** Avis Google reproduits sur le site : le seul actif du salon qui n'y figurait pas. */
export default function Reviews() {
  const note = studio.ratingValue.replace('.', ',');

  return (
    <section id="avis" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-gold/60" aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.25em] text-gold">Avis Google</span>
            </div>
            <h2
              className="font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl"
              style={HEADING_STYLE}
            >
              Ils sont venus se faire tatouer
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white" style={BODY_FONT}>
              {note} sur 5, sur plus de {studio.reviewCount}{' '}avis Google. Voici ce qu&apos;en disent
              les derniers venus, mot pour mot.
            </p>
          </div>

          <a
            href={studio.googleBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm font-medium tracking-wide text-foreground transition-all duration-300 hover:border-gold/50 hover:text-gold"
          >
            <span className="inline-flex items-center gap-1" aria-label={`${note} étoiles sur 5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" strokeWidth={1.5} aria-hidden="true" />
              ))}
            </span>
            Voir les {studio.reviewCount} avis sur Google
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>

        <motion.ul
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 columns-1 gap-5 md:columns-2 lg:columns-3"
        >
          {studio.reviews.map((review) => (
            // L'enfant direct d'une colonne CSS reste sans transform (voir Gallery)
            <li key={review.author + review.date} className="mb-5 break-inside-avoid">
              <motion.blockquote
                variants={cardVariants}
                className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/20 md:p-7"
              >
                <div className="flex items-center gap-1" aria-label="5 étoiles sur 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" strokeWidth={1.5} aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-white/85" style={BODY_FONT}>
                  {review.text}
                </p>
                <footer className="mt-auto flex items-baseline justify-between gap-3 border-t border-white/5 pt-4">
                  <cite className="text-sm not-italic text-white" style={HEADING_STYLE}>
                    {review.author}
                  </cite>
                  <span className="text-xs text-white/50" style={BODY_FONT}>
                    {review.visited}
                  </span>
                </footer>
              </motion.blockquote>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
