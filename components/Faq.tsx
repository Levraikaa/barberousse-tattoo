'use client';

import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { studio } from '@/data/studio';

const EASE = [0.22, 1, 0.36, 1] as const;

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const BODY_FONT = { fontFamily: 'var(--font-body), sans-serif', fontWeight: 300 } as const;
const HEADING_STYLE = { fontFamily: 'var(--font-display), sans-serif', letterSpacing: '0.05em' } as const;

/**
 * Questions fréquentes. En details/summary natif : le texte est dans le HTML
 * servi, lisible sans JavaScript, ce qui compte pour Google et les moteurs de
 * réponse autant que pour un lecteur d'écran.
 */
export default function Faq() {
  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-4xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="max-w-2xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-gold/60" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold">Questions fréquentes</span>
          </div>
          <h2
            className="font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl"
            style={HEADING_STYLE}
          >
            Avant de venir
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white" style={BODY_FONT}>
            Ce qu&apos;on me demande le plus souvent. Pour tout le reste, le formulaire est en bas de
            page.
          </p>
        </motion.div>

        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 divide-y divide-white/10 border-y border-white/10"
        >
          {studio.faq.map((item) => (
            <motion.details key={item.question} variants={itemVariants} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left [&::-webkit-details-marker]:hidden">
                <h3 className="text-lg text-white md:text-xl" style={HEADING_STYLE}>
                  {item.question}
                </h3>
                <Plus
                  className="h-5 w-5 shrink-0 text-gold transition-transform duration-300 group-open:rotate-45"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-6 pr-10 leading-relaxed text-white/85" style={BODY_FONT}>
                {item.answer}
              </p>
            </motion.details>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
