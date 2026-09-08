'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Instagram, TikTok } from './SocialIcons';
import { studio } from '@/data/studio';

const REVEAL = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
} as const;

const HEADING = 'font-sans text-xs uppercase tracking-wider text-white/80';
const HEADING_STYLE = { fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' } as const;
const BODY_FONT = { fontFamily: "'Inter', sans-serif", fontWeight: 300 } as const;
const SOCIAL_LINK =
  'inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 hover:scale-110 hover:border-gold/40 hover:text-gold hover:shadow-[0_0_15px_3px_rgba(184,67,44,0.5)]';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-background pb-10 pt-16">
      <motion.div {...REVEAL} className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4">
          <div className="lg:pr-6">
            <a href="#" className="group inline-flex items-center gap-2.5" aria-label={studio.name}>
              {studio.logo ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={studio.logo}
                  alt=""
                  width={54}
                  height={41}
                  className="h-10 w-auto transition-opacity duration-300 group-hover:opacity-80"
                />
              ) : (
                <span className="h-2 w-2 rounded-[1px] bg-gold transition-shadow duration-300 group-hover:shadow-[0_0_14px_0_var(--gold)]" />
              )}
              <span className="font-sans text-2xl tracking-wide text-foreground" style={HEADING_STYLE}>
                {studio.name}
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white" style={BODY_FONT}>
              {studio.tagline}
            </p>
            <p className="mt-3 text-xs text-white/80" style={BODY_FONT}>
              Salon de tatouage · Quai du Ponant, {studio.address.city} ({studio.address.zip}), Aude
            </p>
          </div>

          <nav aria-label="Navigation du pied de page">
            <h3 className={HEADING} style={HEADING_STYLE}>
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {studio.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-white transition-colors duration-300 hover:text-gold">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className={HEADING} style={HEADING_STYLE}>
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white">
              <li>
                <a
                  href={`tel:${studio.phone.replace(/\s+/g, '')}`}
                  className="group inline-flex items-center gap-2.5 transition-colors duration-300 hover:text-gold"
                >
                  <Phone className="h-4 w-4 text-gold/70 transition-colors duration-300 group-hover:text-gold" />
                  {studio.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${studio.email}`}
                  className="group inline-flex items-center gap-2.5 transition-colors duration-300 hover:text-gold"
                >
                  <Mail className="h-4 w-4 text-gold/70 transition-colors duration-300 group-hover:text-gold" />
                  {studio.email}
                </a>
              </li>
              <li>
                <a
                  href={studio.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-2.5 transition-colors duration-300 hover:text-gold"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/70 transition-colors duration-300 group-hover:text-gold" />
                  <span className="not-italic">
                    {studio.address.street}
                    <br />
                    {studio.address.zip} {studio.address.city}
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={HEADING} style={HEADING_STYLE}>
              Suivez-moi
            </h3>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={studio.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={SOCIAL_LINK}
              >
                <Instagram className="h-5 w-5" />
              </a>
              {studio.socials.tiktok && (
                <a
                  href={studio.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className={SOCIAL_LINK}
                >
                  <TikTok className="h-5 w-5" />
                </a>
              )}
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-medium tracking-wide text-foreground transition-all duration-300 hover:border-gold/50 hover:text-gold"
            >
              {studio.ctaLabel}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/5 pt-8 text-xs text-white/80 sm:flex-row sm:items-center sm:justify-between">
          <p style={BODY_FONT}>
            © {studio.establishedYear}–{currentYear} {studio.name}. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors duration-300 hover:text-gold">
              Mentions légales
            </a>
            <a href="#" className="transition-colors duration-300 hover:text-gold">
              Confidentialité
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
