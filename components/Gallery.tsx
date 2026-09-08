"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { studio } from "@/data/studio";

const EASE = [0.22, 1, 0.36, 1] as const;
// Les vignettes alternent trois formats pour casser la grille
const RATIOS = ["aspect-[3/4]", "aspect-square", "aspect-[4/5]"];
const ALL = "Tout";
// Sans filtre, on ne montre qu'un aperçu : le reste passe par les catégories
const APERCU = 18;

export default function Gallery() {
  const [activeStyle, setActiveStyle] = useState<string>(ALL);
  const [toutAfficher, setToutAfficher] = useState(false);

  const filters = [ALL, ...studio.galleryStyles];
  const pieces =
    activeStyle === ALL
      ? studio.gallery
      : studio.gallery.filter((piece) => piece.style === activeStyle);

  // L'aperçu ne s'applique qu'à la vue d'ensemble ; une catégorie s'affiche en entier
  const limite = activeStyle === ALL && !toutAfficher;
  const visibles = limite ? pieces.slice(0, APERCU) : pieces;

  const changerFiltre = (filtre: string) => {
    setActiveStyle(filtre);
    setToutAfficher(false);
  };

  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="max-w-2xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-gold/60" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold">
              Galerie de tatouages
            </span>
          </div>
          <h2
            className="font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            Mes réalisations à Gruissan
          </h2>
          <p
            className="mt-5 text-base leading-relaxed text-white"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            {studio.galleryIntro}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {filters.map((filter) => {
            const active = filter === activeStyle;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => changerFiltre(filter)}
                aria-pressed={active}
                className={`rounded-full px-5 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                  active
                    ? "bg-gold text-[#0a0a0a]"
                    : "border border-white/15 text-white hover:border-gold/50 hover:text-gold"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </motion.div>

        <div className="mt-12 columns-2 gap-4 md:columns-3">
          {visibles.map((piece, index) => (
            // L'enfant direct d'une colonne CSS reste sans transform : une vignette
            // animée directement ici disparaît une fois sur deux à la fragmentation.
            <div
              key={piece.src}
              className={`mb-4 break-inside-avoid ${RATIOS[index % RATIOS.length]}`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{
                  boxShadow: "0 0 50px 10px rgba(255, 150, 80, 0.2)",
                  transition: { duration: 0.3 },
                }}
                transition={{
                  duration: 0.6,
                  ease: EASE,
                  delay: Math.min(index, 11) * 0.04,
                }}
                className="group relative h-full w-full overflow-hidden rounded-lg border border-white/10 transition-colors duration-300 hover:border-gold/40"
              >
                <Image
                  src={piece.src}
                  alt={piece.alt}
                  fill
                  // Les premières vignettes sont visibles d'emblée sur grand écran :
                  // le lazy loading les laissait vides tant que le scroll ne bougeait pas.
                  loading={index < 6 ? "eager" : "lazy"}
                  sizes="(max-width:768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="p-4 text-xs font-medium uppercase tracking-[0.2em] text-gold">
                    {piece.style}
                  </span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {limite && pieces.length > APERCU && (
          <div className="mt-4 flex justify-center">
            <button
              type="button"
              onClick={() => setToutAfficher(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-medium tracking-wide text-foreground transition-all duration-300 hover:border-gold/50 hover:text-gold"
            >
              Voir les {pieces.length} réalisations
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
