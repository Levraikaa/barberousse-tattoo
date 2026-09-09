'use client';

import { motion } from 'framer-motion';
import { Layers, PenTool, RefreshCw, Sparkles } from 'lucide-react';
import { studio } from '@/data/studio';

const EASE = [0.22, 1, 0.36, 1] as const;
// Une icône par prestation, en boucle sur la liste
const ICONS = [PenTool, Sparkles, Layers, RefreshCw];

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-14 max-w-2xl md:mb-20"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-gold/60" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold">Prestations, à Gruissan</span>
          </div>
          <h2
            className="font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl"
            style={{ fontFamily: "var(--font-display), sans-serif", letterSpacing: '0.05em' }}
          >
            Mes prestations de tatouage
          </h2>
        </motion.div>

        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
        >
          {studio.services.map((service, index) => {
            const Icon = ICONS[index % ICONS.length];
            const number = String(index + 1).padStart(2, '0');

            return (
              <motion.div
                key={service.name}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  boxShadow: '0 0 30px 5px rgba(184, 67, 44, 0.25)',
                  transition: { duration: 0.3 },
                }}
                transition={{ duration: 0.4, ease: EASE }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-colors duration-300 hover:border-white/20 md:p-10"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-6 top-6 select-none text-6xl font-light md:text-7xl leading-none text-white/15"
                >
                  {number}
                </span>

                <span className="inline-flex w-fit rounded-lg bg-gold/10 p-2.5 text-gold">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>

                <h3
                  // Le chiffre décoratif occupe le coin haut droit : le titre garde
                  // sa place à gauche au lieu de passer dessous.
                  className="mt-6 max-w-[calc(100%-5rem)] font-sans text-base font-normal tracking-tight text-white md:max-w-[calc(100%-5.5rem)] md:text-lg"
                  style={{ fontFamily: "var(--font-display), sans-serif", letterSpacing: '0.05em' }}
                >
                  {service.name}
                </h3>

                <div className="mt-3 flex flex-1 flex-col gap-3">
                  {service.description.split('\n\n').map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="text-base leading-relaxed text-white/80"
                      style={{ fontFamily: "var(--font-body), sans-serif", fontWeight: 300 }}
                    >
                      {paragraph}
                    </p>
                  ))}

                  {/* Lien contextuel vers la page dédiée : c'est celui qui compte */}
                  {index === 0 && (
                    <a
                      href="/tatoueur-fine-line-narbonne"
                      className="mt-1 inline-flex w-fit items-center gap-2 text-sm text-gold underline decoration-gold/30 underline-offset-4 transition-colors duration-300 hover:decoration-gold"
                      style={{ fontFamily: "var(--font-body), sans-serif", fontWeight: 300 }}
                    >
                      La ligne fine, si vous venez de Narbonne
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
