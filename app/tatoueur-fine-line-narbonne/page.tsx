import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Star, Trophy } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Divider from '@/components/Divider';
import { SITE_URL, studio } from '@/data/studio';

const TITLE = 'Tatoueur fine line à Narbonne | Barberousse Tattoo, Gruissan';
const DESCRIPTION =
  "Spécialiste de la ligne fine à quinze minutes de Narbonne. Victor tatoue seul, sur rendez-vous, primé au Narbonne Tattoo Show. 5,0 sur plus de 400 avis.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/tatoueur-fine-line-narbonne' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/tatoueur-fine-line-narbonne',
    siteName: studio.name,
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: studio.ogImage, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [studio.ogImage] },
};

// Les réalisations en ligne fine, seules concernées par cette page
const FINE_LINE = studio.gallery.filter((piece) => piece.style === 'Fine line');

// Les deux prix décrochés au Narbonne Tattoo Show, décisifs sur cette page
const NARBONNE_AWARDS = studio.awards.filter((award) => award.event.includes('Narbonne'));

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/tatoueur-fine-line-narbonne#service`,
  name: 'Tatouage en ligne fine',
  serviceType: 'Tatouage fine line',
  description:
    "Tatouage en ligne fine réalisé au salon Barberousse Tattoo, à Gruissan, à quinze minutes de Narbonne. Trait continu posé une seule fois, sans repasse ni rattrapage.",
  provider: { '@type': 'TattooParlor', '@id': `${SITE_URL}/#salon`, name: studio.name },
  areaServed: [
    { '@type': 'City', name: 'Narbonne' },
    { '@type': 'City', name: 'Gruissan' },
    { '@type': 'City', name: 'Narbonne-Plage' },
    { '@type': 'City', name: 'Coursan' },
    { '@type': 'City', name: 'Port-la-Nouvelle' },
    { '@type': 'City', name: 'Sigean' },
    { '@type': 'AdministrativeArea', name: 'Aude' },
  ],
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: `${SITE_URL}/#contact`,
    servicePhone: studio.phone.replace(/\s+/g, ''),
    serviceLocation: { '@type': 'Place', '@id': `${SITE_URL}/#salon` },
  },
};

const SECTION = 'mx-auto w-full max-w-4xl px-6 md:px-8';
const H2 =
  'font-sans text-3xl font-light tracking-tight text-foreground md:text-4xl';
const H2_STYLE = { fontFamily: 'var(--font-display), sans-serif', letterSpacing: '0.05em' } as const;
const BODY = 'leading-relaxed text-white/85';
const BODY_STYLE = { fontFamily: 'var(--font-body), sans-serif', fontWeight: 300 } as const;

export default function TatoueurFineLineNarbonne() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <main>
        {/* En-tête : plus court que celui de l'accueil, le texte prime */}
        <section className="relative isolate flex min-h-[70vh] w-full flex-col justify-end overflow-hidden pb-16 pt-32">
          <div className="absolute inset-0 -z-10">
            <Image
              src={studio.heroImage}
              alt={studio.heroImageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-black/65" />

          <div className={SECTION}>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-gold/60" aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.25em] text-gold">
                Ligne fine, bassin de Narbonne
              </span>
            </div>
            <h1
              className="max-w-3xl font-sans text-4xl uppercase leading-[0.95] text-white md:text-6xl"
              style={H2_STYLE}
            >
              Tatoueur fine line à Narbonne
            </h1>
            <p className={`mt-6 max-w-2xl text-lg ${BODY}`} style={BODY_STYLE}>
              Mon salon est à Gruissan, quai du Ponant, à quinze minutes de Narbonne. J&apos;y tatoue
              seul, sur rendez-vous, et la ligne fine est ma spécialité depuis l&apos;ouverture en 2019.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:brightness-110"
                style={{ backgroundColor: studio.accentColor }}
              >
                Décrire mon projet
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={studio.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/80 underline decoration-white/25 underline-offset-4 transition-colors duration-300 hover:text-gold"
                style={BODY_STYLE}
              >
                <Star className="h-4 w-4 text-gold" aria-hidden="true" />
                5,0 sur plus de 400 avis Google
              </a>
            </div>
          </div>
        </section>

        <Divider />

        <section className="py-20 md:py-24">
          <div className={SECTION}>
            <h2 className={H2} style={H2_STYLE}>
              La ligne fine ne pardonne rien
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              <p className={BODY} style={BODY_STYLE}>
                Une ligne fine, c&apos;est un trait continu, d&apos;une régularité constante, posé une
                seule fois. Pas de repasse, pas de rattrapage : ce qui est fait est fait. C&apos;est ce
                qui la rend exigeante, et c&apos;est aussi ce qui la rend belle quand elle est propre.
                Un trait repassé se voit toujours, et il vieillit mal.
              </p>
              <p className={BODY} style={BODY_STYLE}>
                C&apos;est sur cette maîtrise que j&apos;ai bâti ma réputation, du petit motif discret
                aux compositions florales et ornementales les plus étendues. Peu de salons du bassin de
                Narbonne en font leur spécialité : c&apos;est une technique qui demande de la pratique
                et une main sûre, plus qu&apos;un catalogue de motifs.
              </p>
              <p className={BODY} style={BODY_STYLE}>
                Chaque projet est dessiné sur iPad et adapté à votre idée, à votre morphologie et à
                l&apos;emplacement choisi. Taille, niveau de détail, lisibilité et vieillissement sont
                pris en compte pour éviter un motif trop petit ou, au contraire, inutilement trop grand.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        <section className="py-20 md:py-24">
          <div className={SECTION}>
            <h2 className={H2} style={H2_STYLE}>
              Pourquoi faire les quinze minutes depuis Narbonne
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
                <span className="inline-flex w-fit rounded-lg bg-gold/10 p-2.5 text-gold">
                  <Trophy className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg text-white" style={H2_STYLE}>
                  Primé au Narbonne Tattoo Show
                </h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {NARBONNE_AWARDS.map((award) => (
                    <li key={award.image} className={`text-sm ${BODY}`} style={BODY_STYLE}>
                      {award.rank} · {award.category}
                      {award.year ? ` · ${award.year}` : ''}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
                <span className="inline-flex w-fit rounded-lg bg-gold/10 p-2.5 text-gold">
                  <Star className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg text-white" style={H2_STYLE}>
                  Plus de 400 avis, 5,0 de moyenne
                </h3>
                <p className={`mt-4 text-sm ${BODY}`} style={BODY_STYLE}>
                  Je tatoue seul et je prends le temps qu&apos;il faut. Les avis parlent autant de
                  l&apos;accompagnement que du résultat.{' '}
                  <a
                    href={studio.googleBusinessUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-white/25 underline-offset-4 transition-colors duration-300 hover:text-gold"
                  >
                    Les lire sur Google
                  </a>
                  .
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
                <span className="inline-flex w-fit rounded-lg bg-gold/10 p-2.5 text-gold">
                  <MapPin className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg text-white" style={H2_STYLE}>
                  Quinze minutes, et on se gare
                </h3>
                <p className={`mt-4 text-sm ${BODY}`} style={BODY_STYLE}>
                  Quai du Ponant, rive droite, face au port de Gruissan. Ouvert toute l&apos;année, en
                  saison comme hors saison, sur rendez-vous uniquement.{' '}
                  <a
                    href={studio.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-white/25 underline-offset-4 transition-colors duration-300 hover:text-gold"
                  >
                    Itinéraire depuis Narbonne
                  </a>
                  .
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
                <span className="inline-flex w-fit rounded-lg bg-gold/10 p-2.5 text-gold">
                  <ArrowRight className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg text-white" style={H2_STYLE}>
                  Un seul interlocuteur
                </h3>
                <p className={`mt-4 text-sm ${BODY}`} style={BODY_STYLE}>
                  Vous décrivez votre projet, je réponds sous 48h. On valide le dessin ensemble au
                  salon avant de tatouer. Guide de cicatrisation à la fin, et retouche gratuite si
                  nécessaire.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        <section className="py-20 md:py-24">
          <div className={SECTION}>
            <h2 className={H2} style={H2_STYLE}>
              Mes tatouages en ligne fine
            </h2>
            <p className={`mt-5 max-w-2xl ${BODY}`} style={BODY_STYLE}>
              Une sélection de pièces réalisées au salon. Le reste du travail, tous styles confondus,
              est dans{' '}
              <Link href="/#gallery" className="underline decoration-white/25 underline-offset-4 transition-colors duration-300 hover:text-gold">
                la galerie complète
              </Link>
              .
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
              {FINE_LINE.slice(0, 6).map((piece) => (
                <div
                  key={piece.src}
                  className="relative aspect-[3/4] overflow-hidden rounded-lg border border-white/10"
                >
                  <Image
                    src={piece.src}
                    alt={piece.alt}
                    fill
                    sizes="(max-width:768px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        <section className="py-20 md:py-24">
          <div className={SECTION}>
            <h2 className={H2} style={H2_STYLE}>
              Parlons de votre projet
            </h2>
            <p className={`mt-5 max-w-2xl ${BODY}`} style={BODY_STYLE}>
              Décrivez-moi ce que vous avez en tête : emplacement, taille, style, et toute référence
              qui vous inspire. Je réponds sous 48h, et on se retrouve au salon, face au port.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:brightness-110"
                style={{ backgroundColor: studio.accentColor }}
              >
                Envoyer ma demande
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={`tel:${studio.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 text-sm text-white/80 underline decoration-white/25 underline-offset-4 transition-colors duration-300 hover:text-gold"
                style={BODY_STYLE}
              >
                {studio.phone}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
