'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { studio } from '@/data/studio';

const EASE = [0.22, 1, 0.36, 1] as const;

const HEADING_STYLE = { fontFamily: 'var(--font-display), sans-serif', letterSpacing: '0.05em' } as const;
const BODY_FONT = { fontFamily: 'var(--font-body), sans-serif', fontWeight: 300 } as const;

const find = (name: string) => studio.gallery.find((p) => p.src.includes(`/${name}.jpg`));

// Les deux spécialités ont chacune leur page : ce bloc les met à portée de clic
// depuis l'accueil, là où arrivent la plupart des visiteurs.
const SPECIALTIES = [
  {
    href: '/tatoueur-fine-line-narbonne',
    eyebrow: 'Ma signature',
    title: 'La ligne fine',
    text: "Un trait unique, posé une seule fois, sans repasse. La discipline la plus exigeante du métier, et celle sur laquelle j'ai bâti ma réputation.",
    cta: 'Tout savoir sur la ligne fine',
    image: find('papillon-fine-line'),
  },
  {
    href: '/tatouage-japonais-beziers',
    eyebrow: 'Primé au Béziers Tattoo Show',
    title: 'Le japonais et le manga',
    text: "Carpe koï, dragon, hannya, personnages d'anime : des pièces composées pour vous, nourries par la peinture japonaise à l'aquarelle.",
    cta: 'Découvrir le tatouage japonais',
    image: find('carpe-koi'),
  },
];

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function Specialties() {
  return (
    <section id="specialites" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="max-w-2xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-gold/60" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold">Deux spécialités</span>
          </div>
          <h2
            className="font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl"
            style={HEADING_STYLE}
          >
            Ce que je fais le mieux
          </h2>
        </motion.div>

        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {SPECIALTIES.map((s) => (
            <motion.a
              key={s.href}
              href={s.href}
              variants={cardVariants}
              className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 transition-colors duration-300 hover:border-gold/40 sm:aspect-[3/2] md:aspect-[4/5] lg:aspect-[3/2]"
            >
              {s.image && (
                <Image
                  src={s.image.src}
                  alt={s.image.alt}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
                <span className="text-xs uppercase tracking-[0.25em] text-gold">{s.eyebrow}</span>
                <h3 className="mt-2 text-3xl text-white md:text-4xl" style={HEADING_STYLE}>
                  {s.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85" style={BODY_FONT}>
                  {s.text}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm text-gold" style={BODY_FONT}>
                  {s.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
