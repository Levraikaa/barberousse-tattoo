'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Circle,
  CircleCheckBig,
  Hexagon,
  Mail,
  Maximize,
  MapPin,
  Phone,
} from 'lucide-react';
import { Instagram, TikTok } from './SocialIcons';
import { studio } from '@/data/studio';

const EASE = [0.22, 1, 0.36, 1] as const;
const ACCENT = '#b8432c';

const MAP_URL = `https://www.google.com/maps?q=${studio.address.coordinates.lat},${studio.address.coordinates.lng}&z=15&output=embed`;

const SIZES = [
  { id: 'small', label: 'Petite pièce', range: 'Moins de 10 cm', Icon: Circle },
  { id: 'medium', label: 'Moyenne pièce', range: '10 – 20 cm', Icon: Hexagon },
  { id: 'large', label: 'Grande pièce / Dos complet', range: 'Plus de 20 cm', Icon: Maximize },
];

const INPUT =
  'w-full appearance-none rounded-lg border border-white/10 bg-[#1a1a1a] px-4 py-3 text-white outline-none transition-colors duration-300 placeholder:text-white/30 focus:border-[#b8432c]';
const LABEL = 'mb-2 block text-xs uppercase tracking-[0.2em] text-white/50';
const BODY_FONT = { fontFamily: "'Inter', sans-serif", fontWeight: 300 } as const;

const formVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const fieldVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [styles, setStyles] = useState<string[]>([]);
  const [size, setSize] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [sent, setSent] = useState(false);

  const reset = () => {
    setName('');
    setPhone('');
    setEmail('');
    setStyles([]);
    setSize('');
    setMessage('');
    setConsent(false);
    setSent(false);
  };

  return (
    <section id="contact" className="relative bg-[#0a0a0a] py-24 md:py-32">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-14 px-6 md:px-8 lg:grid-cols-[2fr_3fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex flex-col gap-10"
        >
          <div>
            <h2
              className="font-sans text-5xl uppercase leading-[0.9] text-white md:text-6xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.03em' }}
            >
              <span className="block">Parlons de</span>
              <span className="block">votre tatouage</span>
            </h2>
            <p className="mt-6 max-w-md text-white/70" style={BODY_FONT}>
              Chaque tatouage commence par une conversation. Décrivez-moi votre idée : je vous réponds sous 48h, et on se retrouve au salon, face au port de Gruissan.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <a href={`tel:${studio.phone.replace(/\s+/g, '')}`} className="group flex items-start gap-4">
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${ACCENT}1a`, color: ACCENT }}
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.2em] text-white/50">Téléphone</span>
                <span className="mt-1 text-lg text-white transition-colors duration-300 group-hover:text-gold">
                  {studio.phone}
                </span>
              </span>
            </a>

            <a href={`mailto:${studio.email}`} className="group flex items-start gap-4">
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${ACCENT}1a`, color: ACCENT }}
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.2em] text-white/50">Email</span>
                <span className="mt-1 text-lg text-white transition-colors duration-300 group-hover:text-gold">
                  {studio.email}
                </span>
              </span>
            </a>

            <div className="flex items-start gap-4">
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${ACCENT}1a`, color: ACCENT }}
              >
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.2em] text-white/50">Adresse</span>
                <span className="mt-1 text-lg text-white">{studio.address.street}</span>
                <span className="text-lg text-white">
                  {studio.address.zip} {studio.address.city}
                </span>
                <a
                  href={studio.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex w-fit items-center gap-1 text-sm font-medium text-gold transition-colors duration-300 hover:text-gold/80"
                >
                  Itinéraire vers le salon
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
            <p className="text-sm text-white/70" style={BODY_FONT}>
              Sur rendez-vous uniquement, toute l'année
            </p>
            <div className="flex items-center gap-3">
              <a
                href={studio.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 hover:border-gold/40 hover:text-gold"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              {studio.socials.tiktok && (
                <a
                  href={studio.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 hover:border-gold/40 hover:text-gold"
                >
                  <TikTok className="h-5 w-5" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/10">
            <iframe
              title="Carte"
              src={MAP_URL}
              loading="lazy"
              width="100%"
              height={280}
              className="block w-full border-0"
              style={{ filter: 'invert(0.92) hue-rotate(180deg) brightness(0.9) contrast(0.9) grayscale(0.2)' }}
            />
          </div>
        </motion.div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-10">
          {sent ? (
            <div className="flex h-full min-h-[28rem] flex-col items-center justify-center gap-5 text-center">
              <CircleCheckBig className="h-14 w-14 text-gold" aria-hidden="true" />
              <h3
                className="text-3xl uppercase text-white"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.04em' }}
              >
                Demande envoyée
              </h3>
              <p className="max-w-sm text-white/70" style={BODY_FONT}>
                Merci ! Je reviens vers vous sous 48h pour échanger sur votre projet.
              </p>
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:border-gold/50 hover:text-gold"
              >
                Envoyer une autre demande
              </button>
            </div>
          ) : (
            <motion.form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              variants={formVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="flex flex-col gap-7"
            >
              <motion.div variants={fieldVariants} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className={LABEL}>
                    Nom complet
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jeanne Dupont"
                    className={INPUT}
                    style={BODY_FONT}
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className={LABEL}>
                    Téléphone
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="06 12 34 56 78"
                    className={INPUT}
                    style={BODY_FONT}
                  />
                </div>
              </motion.div>

              <motion.div variants={fieldVariants}>
                <label htmlFor="contact-email" className={LABEL}>
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="vous@exemple.fr"
                  className={INPUT}
                  style={BODY_FONT}
                />
              </motion.div>

              <motion.div variants={fieldVariants}>
                <span className={LABEL}>Style souhaité</span>
                <div className="flex flex-wrap gap-2.5">
                  {studio.galleryStyles.map((style) => {
                    const active = styles.includes(style);
                    return (
                      <button
                        key={style}
                        type="button"
                        onClick={() =>
                          setStyles((current) =>
                            current.includes(style) ? current.filter((s) => s !== style) : [...current, style],
                          )
                        }
                        aria-pressed={active}
                        className="rounded-full px-4 py-2 text-sm tracking-wide text-white transition-all duration-300"
                        style={{ ...BODY_FONT, backgroundColor: active ? ACCENT : 'rgba(255,255,255,0.1)' }}
                      >
                        {style}
                      </button>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div variants={fieldVariants}>
                <span className={LABEL}>Taille du projet</span>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {SIZES.map(({ id, label, range, Icon }) => {
                    const active = size === id;
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setSize(id)}
                        aria-pressed={active}
                        className="flex flex-col items-start gap-2 rounded-lg border p-4 text-left transition-all duration-300"
                        style={{
                          borderColor: active ? ACCENT : 'rgba(255,255,255,0.1)',
                          backgroundColor: active ? `${ACCENT}1a` : '#1a1a1a',
                        }}
                      >
                        <Icon className="h-5 w-5" style={{ color: active ? ACCENT : '#ffffff' }} aria-hidden="true" />
                        <span className="text-sm font-medium text-white" style={BODY_FONT}>
                          {label}
                        </span>
                        <span className="text-xs text-white/50" style={BODY_FONT}>
                          {range}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div variants={fieldVariants}>
                <label htmlFor="contact-message" className={LABEL}>
                  Décrivez votre projet
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Emplacement sur le corps, taille approximative, références visuelles, histoire derrière le projet..."
                  className={`${INPUT} resize-none`}
                  style={BODY_FONT}
                />
              </motion.div>

              <motion.label
                variants={fieldVariants}
                htmlFor="contact-consent"
                className="flex cursor-pointer items-start gap-3 text-sm text-white/70"
                style={BODY_FONT}
              >
                <input
                  id="contact-consent"
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[#b8432c]"
                />
                J&apos;accepte d&apos;être contacté par téléphone ou email pour ce projet
              </motion.label>

              <motion.button
                variants={fieldVariants}
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-lg py-5 text-xl uppercase tracking-[0.05em] text-white transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_25px_5px_rgba(184,67,44,0.5)]"
                style={{ backgroundColor: ACCENT, fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Envoyer ma demande
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </motion.button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}
