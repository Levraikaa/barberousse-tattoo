'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Trophy, X } from 'lucide-react';
import { Instagram } from './SocialIcons';
import { studio } from '@/data/studio';

const EASE = [0.22, 1, 0.36, 1] as const;

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

// Salon à tatoueur unique : les textes passent au singulier
const SOLO = studio.artists.length === 1;
const AWARDS = studio.awards ?? [];
const HAS_AWARDS = AWARDS.length > 0;

const PILL =
  'inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-medium tracking-wide text-gold transition-all duration-300 hover:border-gold/60 hover:bg-gold/20';

export default function Artists() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  // Échap ferme le palmarès, et le fond ne défile pas pendant qu'il est ouvert
  useEffect(() => {
    if (!drawerOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [drawerOpen]);

  return (
    <section id="artists" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-14 md:mb-20"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-gold/60" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold">
              {SOLO ? "L'artiste" : "L'équipe"}
            </span>
          </div>
          <h2
            className="font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}
          >
            {SOLO ? 'Derrière la machine' : 'Nos artistes'}
          </h2>
          <p className="mt-5 max-w-xl text-white" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            {SOLO
              ? studio.artistsIntro
              : 'Des mains singulières, une même exigence. Chacun de nos tatoueurs cultive un style qui lui est propre — choisissez celui qui dessinera votre prochaine pièce.'}
          </p>
        </motion.div>

        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className={
            SOLO
              ? 'grid max-w-md grid-cols-1 gap-6 md:gap-8'
              : 'grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3'
          }
        >
          {studio.artists.map((artist) => {
            const open = activeCard === artist.name;
            return (
              <motion.div
                key={artist.name}
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 0 40px 8px rgba(184, 67, 44, 0.3)',
                  transition: { duration: 0.3 },
                }}
                transition={{ duration: 0.4, ease: EASE }}
                onClick={() => setActiveCard(open ? null : artist.name)}
                className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl border border-white/10 transition-colors duration-300 hover:border-gold/40"
              >
                <Image
                  src={artist.photo}
                  alt={artist.name}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {HAS_AWARDS && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setDrawerOpen(true);
                    }}
                    aria-label={`Voir le palmarès : ${AWARDS.length} prix en convention`}
                    className={`absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-black/60 px-3 py-1.5 text-xs font-medium text-gold backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-0 ${
                      open ? 'opacity-0' : ''
                    }`}
                  >
                    <Trophy className="h-3.5 w-3.5" aria-hidden="true" />
                    {AWARDS.length} prix
                  </button>
                )}

                <div
                  className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 pt-16 transition-opacity duration-300 group-hover:opacity-0 ${
                    open ? 'opacity-0' : ''
                  }`}
                >
                  <h3
                    className="font-sans text-xl text-foreground"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}
                  >
                    {artist.name}
                  </h3>
                  <p
                    className="mt-1 text-xs uppercase tracking-wider text-gold"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                  >
                    {artist.specialty}
                  </p>
                </div>

                <div
                  className={`absolute inset-0 z-20 flex flex-col justify-end gap-4 bg-black/70 p-6 opacity-0 backdrop-blur-sm transition-opacity duration-500 ease-out group-hover:opacity-100 ${
                    open ? 'opacity-100' : 'pointer-events-none group-hover:pointer-events-auto'
                  }`}
                >
                  <div>
                    <h3
                      className="font-sans text-2xl text-foreground"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}
                    >
                      {artist.name}
                    </h3>
                    <p
                      className="mt-1 text-xs uppercase tracking-wider text-gold"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                    >
                      {artist.specialty}
                    </p>
                  </div>

                  <p
                    className="line-clamp-5 text-sm leading-relaxed text-white"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                  >
                    {artist.bio}
                  </p>

                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href={artist.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={PILL}
                    >
                      <Instagram className="h-4 w-4" aria-hidden="true" />@
                      {artist.instagram.replace(/\/+$/, '').split('/').pop()}
                    </a>

                    {HAS_AWARDS && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setDrawerOpen(true);
                        }}
                        className={PILL}
                      >
                        <Trophy className="h-4 w-4" aria-hidden="true" />
                        Palmarès
                        <span className="rounded-full bg-gold/25 px-1.5 py-px text-[0.65rem] leading-tight">
                          {AWARDS.length}
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Tiroir latéral : les prix remportés en convention */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 z-[60] bg-black/75 backdrop-blur-sm"
              aria-hidden="true"
            />
            <motion.aside
              key="awards-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Palmarès"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: EASE }}
              className="fixed inset-y-0 right-0 z-[61] flex w-full max-w-lg flex-col border-l border-white/10 bg-[#0d0d0d] shadow-[0_0_80px_-10px_rgba(0,0,0,0.9)]"
            >
              <div className="flex items-start justify-between gap-6 border-b border-white/10 px-6 pb-6 pt-[max(2rem,env(safe-area-inset-top))] md:px-8">
                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <Trophy className="h-4 w-4 text-gold" aria-hidden="true" />
                    <span className="text-xs uppercase tracking-[0.25em] text-gold">Palmarès</span>
                  </div>
                  <h3
                    className="font-sans text-3xl text-foreground"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}
                  >
                    {AWARDS.length} titres en convention
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Fermer le palmarès"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 hover:border-gold/60 hover:text-gold"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-6 md:px-8">
                <ul className="flex flex-col gap-8">
                  {AWARDS.map((award) => (
                    <li key={award.image}>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-black">
                        <Image
                          src={award.image}
                          alt={`${award.rank} ${award.category} — ${award.event}`}
                          fill
                          sizes="(max-width:1024px) 100vw, 32rem"
                          className="object-contain p-4"
                        />
                      </div>
                      <p
                        className="mt-4 font-sans text-2xl leading-none text-gold"
                        style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}
                      >
                        {award.rank}
                      </p>
                      <p className="mt-2 text-base text-white" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                        {award.category}
                      </p>
                      <p className="mt-1 text-sm text-white/60" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                        {award.event}
                        {award.year && ` · ${award.year}`}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
