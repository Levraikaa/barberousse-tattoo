'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { CalendarCheck, Clock, Heart, MessageCircle, Palette, Zap } from 'lucide-react';
import { studio } from '@/data/studio';

const EASE = [0.22, 1, 0.36, 1] as const;
const ACCENT = '#b8432c';

const STEPS = [
  {
    Icon: MessageCircle,
    title: 'PRISE DE CONTACT',
    description:
      "Remplissez le formulaire ci-dessous avec votre projet : emplacement, taille, style, et toute référence visuelle qui vous inspire. Plus vous me donnez de détails, mieux je peux vous conseiller.",
  },
  {
    Icon: Clock,
    title: 'RÉPONSE SOUS 48H',
    description:
      "J'étudie votre demande et je vous recontacte par email ou téléphone pour échanger sur votre vision et évaluer la faisabilité du projet.",
  },
  {
    Icon: Palette,
    title: 'ESTIMATION & DEVIS',
    description:
      "Selon la complexité, la taille et le style choisi, je vous envoie une estimation personnalisée. Pas de tarif fixe : chaque pièce est unique.",
  },
  {
    Icon: CalendarCheck,
    title: 'RENDEZ-VOUS AU SALON',
    description:
      "On se retrouve au salon, quai du Ponant à Gruissan, pour valider ensemble le design, affiner les détails et fixer la date de votre séance. Un acompte est demandé pour confirmer votre réservation.",
  },
  {
    Icon: Zap,
    title: 'LA SÉANCE DE TATOUAGE',
    description:
      "Le grand jour. Je prends le temps qu'il faut pour réaliser une pièce à la hauteur de vos attentes, dans un cadre soigné et une ambiance détendue.",
  },
  {
    Icon: Heart,
    title: 'LES SOINS & LE SUIVI',
    description:
      "Je vous remets un guide de cicatrisation complet. Je reste disponible pour vos questions et pour une retouche gratuite si nécessaire. Votre tatouage mérite un suivi impeccable.",
  },
];

const stepVariants = { hidden: {}, show: { transition: { staggerChildren: 0.2 } } };
const textVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};
const bulletVariants = {
  hidden: { scale: 0, backgroundColor: 'rgba(184, 67, 44, 0)' },
  show: {
    scale: 1,
    backgroundColor: ACCENT,
    transition: {
      scale: { stiffness: 320, damping: 11 },
      backgroundColor: { duration: 0.4, ease: EASE },
    },
  },
};

export default function Process() {
  const timelineRef = useRef<HTMLDivElement>(null);
  // La ligne verticale se remplit au fil du scroll dans la timeline
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section id="process" className="relative bg-[#0a0a0a] py-24 md:py-32">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-16 text-center font-sans text-5xl uppercase leading-[0.9] md:mb-24 md:text-6xl"
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.03em' }}
        >
          <span className="block text-white">Votre tatouage</span>
          <span className="block" style={{ color: ACCENT }}>
            Étape par étape
          </span>
        </motion.h2>

        <div ref={timelineRef} className="relative">
          <span aria-hidden="true" className="absolute bottom-0 left-6 top-0 w-px bg-white/10 md:left-1/2" />
          <motion.span
            aria-hidden="true"
            style={{ scaleY: progress, backgroundColor: ACCENT }}
            className="absolute bottom-0 left-6 top-0 w-px origin-top md:left-1/2"
          />

          <div className="flex flex-col gap-14 md:gap-0">
            {STEPS.map(({ Icon, title, description }, index) => (
              <motion.div
                key={title}
                variants={stepVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-120px' }}
                className="relative md:grid md:grid-cols-2 md:items-center md:gap-x-16 md:py-10"
              >
                <motion.div
                  variants={bulletVariants}
                  className="absolute left-0 top-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border transition-shadow duration-300 hover:shadow-[0_0_20px_5px_rgba(184,67,44,0.6)] md:left-[calc(50%-1.5rem)] md:top-[calc(50%-1.5rem)]"
                  style={{ borderColor: ACCENT }}
                >
                  <Icon className="h-5 w-5 text-white" strokeWidth={1.75} aria-hidden="true" />
                </motion.div>

                <motion.div
                  variants={textVariants}
                  className={`pl-16 md:pl-0 ${
                    index % 2 === 0 ? 'md:col-start-1 md:pr-16 md:text-right' : 'md:col-start-2 md:pl-16'
                  }`}
                >
                  <span className="text-xs font-medium uppercase tracking-[0.3em]" style={{ color: ACCENT }}>
                    Étape {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className="mt-2 font-sans text-2xl uppercase text-white"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.04em' }}
                  >
                    {title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed text-white/70"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                  >
                    {description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
