'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { studio } from '@/data/studio';

const EASE = [0.22, 1, 0.36, 1] as const;

/** Barre de navigation fixe : se teinte au scroll, se rétracte en descendant. */
export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 24);
    setHidden(latest > previous && latest > 120 && !menuOpen);
  });

  const closeMenu = () => setMenuOpen(false);

  // Un clic en dehors du panneau le referme. On écoute pointerdown, pas click :
  // au click, l'icône du bouton a déjà été remplacée et la cible n'est plus
  // dans le document, ce qui refermait le menu à peine ouvert.
  useEffect(() => {
    if (!menuOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!(e.target as HTMLElement).closest('header')) setMenuOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? '-110%' : 0 }}
      transition={{ duration: 0.5, ease: EASE }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || menuOpen
          ? 'border-b border-white/10 bg-background/70 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 md:px-8">
        <a href="#" onClick={closeMenu} className="group inline-flex items-center gap-2.5" aria-label={studio.name}>
          {studio.logo ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={studio.logo}
              alt=""
              width={54}
              height={41}
              className="h-9 w-auto transition-opacity duration-300 group-hover:opacity-80 md:h-10"
            />
          ) : (
            <span className="h-2 w-2 rounded-[1px] bg-gold transition-shadow duration-300 group-hover:shadow-[0_0_14px_0_var(--gold)]" />
          )}
          <span
            className="font-sans text-2xl tracking-wide text-foreground"
            style={{ fontFamily: "var(--font-display), sans-serif", letterSpacing: '0.05em' }}
          >
            {studio.name}
          </span>
        </a>


        <div className="relative flex items-center gap-3">
          <a
            href="/#contact"
            className="hidden items-center justify-center gap-2 rounded-full bg-gold px-6 py-2.5 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:shadow-[0_0_25px_5px_rgba(184,67,44,0.5)] hover:brightness-110 md:inline-flex"
          >
            {studio.ctaLabel}
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-foreground transition-colors duration-300 hover:border-gold/40 hover:text-gold-text"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                key="menu"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: EASE }}
                // Petit panneau accroché sous les trois barres, aligné sur leur bord droit
                className="absolute right-0 top-full mt-3 w-52 rounded-2xl border border-white/10 bg-[#0a0a0a]/95 p-2 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur"
              >
                <ul className="flex flex-col">
                  {studio.nav.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={closeMenu}
                        className="block rounded-lg px-3 py-2 text-right text-sm text-white/85 transition-colors duration-200 hover:bg-white/5 hover:text-gold-text"
                        style={{ fontFamily: "var(--font-body), sans-serif", fontWeight: 300 }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                  <li className="mt-1 border-t border-white/10 pt-1 md:hidden">
                    <a
                      href="/#contact"
                      onClick={closeMenu}
                      className="block rounded-lg px-3 py-2 text-right text-sm text-gold-text transition-colors duration-200 hover:bg-white/5"
                      style={{ fontFamily: "var(--font-body), sans-serif", fontWeight: 400 }}
                    >
                      {studio.ctaLabel}
                    </a>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

    </motion.header>
  );
}
