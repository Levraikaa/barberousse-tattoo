import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Star, Trophy } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Divider from '@/components/Divider';
import { SITE_URL, studio } from '@/data/studio';

const TITLE = 'Tatouage japonais et manga, Béziers | Barberousse Tattoo';
const DESCRIPTION =
  "Carpe koï, dragon, hannya, manga : un tatoueur primé au Béziers Tattoo Show, à 45 minutes de Béziers. Victor tatoue seul, sur rendez-vous, à Gruissan.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/tatouage-japonais-beziers' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/tatouage-japonais-beziers',
    siteName: studio.name,
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: studio.ogImage, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [studio.ogImage] },
};

// Les pièces japonaises et manga, seules concernées par cette page
const JAPONAIS = studio.gallery.filter((piece) => piece.style === 'Japonais' || piece.style === 'Manga');

// Les deux prix décrochés à Béziers, décisifs sur cette page
const BEZIERS_AWARDS = studio.awards.filter((award) => award.event.includes('Béziers'));

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/tatouage-japonais-beziers#service`,
  name: 'Tatouage japonais, manga et anime',
  serviceType: 'Tatouage japonais',
  description:
    "Tatouage japonais traditionnel, manga et anime, réalisé au salon Barberousse Tattoo à Gruissan, à 45 minutes de Béziers. Chaque pièce est composée pour vous, nourrie par la peinture japonaise à l'aquarelle.",
  provider: { '@type': 'TattooParlor', '@id': `${SITE_URL}/#salon`, name: studio.name },
  areaServed: [
    { '@type': 'City', name: 'Béziers' },
    { '@type': 'City', name: 'Narbonne' },
    { '@type': 'City', name: 'Gruissan' },
    { '@type': 'City', name: 'Agde' },
    { '@type': 'City', name: 'Sète' },
    { '@type': 'AdministrativeArea', name: 'Hérault' },
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
const H2 = 'font-sans text-3xl font-light tracking-tight text-foreground md:text-4xl';
const H2_STYLE = { fontFamily: 'var(--font-display), sans-serif', letterSpacing: '0.05em' } as const;
const BODY = 'leading-relaxed text-white/85';
const BODY_STYLE = { fontFamily: 'var(--font-body), sans-serif', fontWeight: 300 } as const;
const LINK = 'underline decoration-white/25 underline-offset-4 transition-colors duration-300 hover:text-gold';

export default function TatouageJaponaisBeziers() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <main>
        <section className="relative isolate flex min-h-[70vh] w-full flex-col justify-end overflow-hidden pb-16 pt-32">
          <div className="absolute inset-0 -z-10">
            <Image
              src={JAPONAIS[0]?.src ?? studio.heroImage}
              alt={JAPONAIS[0]?.alt ?? studio.heroImageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-black/70" />

          <div className={SECTION}>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-gold/60" aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.25em] text-gold">
                Japonais, manga et anime · Béziers et l&apos;Hérault
              </span>
            </div>
            <h1
              className="max-w-3xl font-sans text-4xl uppercase leading-[0.95] text-white md:text-6xl"
              style={H2_STYLE}
            >
              Tatouage japonais et manga, à 45 minutes de Béziers
            </h1>
            <p className={`mt-6 max-w-2xl text-lg ${BODY}`} style={BODY_STYLE}>
              Le japonais est le style qui m&apos;a valu un premier prix au Béziers Tattoo Show. Je
              le travaille à Gruissan, face au port, dans un salon où je tatoue seul, sur rendez-vous.
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
                className={`inline-flex items-center gap-2 text-sm text-white/80 ${LINK}`}
                style={BODY_STYLE}
              >
                <Star className="h-4 w-4 text-gold" aria-hidden="true" />
                {studio.ratingValue.replace('.', ',')} sur plus de {studio.reviewCount} avis Google
              </a>
            </div>
          </div>
        </section>

        <Divider />

        <section className="py-20 md:py-24">
          <div className={SECTION}>
            <h2 className={H2} style={H2_STYLE}>
              Le japonais, ça se compose avant de se tatouer
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              <p className={BODY} style={BODY_STYLE}>
                Une carpe koï, un dragon, un masque hannya, des chrysanthèmes : le tatouage japonais
                traditionnel repose sur un vocabulaire de motifs, et surtout sur la façon de les faire
                tenir ensemble sur un bras, une cuisse ou un dos. C&apos;est une question de composition
                avant d&apos;être une question de trait.
              </p>
              <p className={BODY} style={BODY_STYLE}>
                Je peins à l&apos;aquarelle japonaise en dehors du salon. Ce n&apos;est pas un passe-temps
                à côté : c&apos;est ce qui nourrit directement ma manière de placer les vagues, les
                nuages et les fleurs autour du sujet principal. Chaque pièce est dessinée sur iPad,
                pour vous, adaptée à votre morphologie et à l&apos;emplacement choisi.
              </p>
              <p className={BODY} style={BODY_STYLE}>
                Le manga et l&apos;anime, c&apos;est la même exigence appliquée à des personnages : la
                ressemblance, l&apos;expression, l&apos;encre noire et rouge qui garde son contraste en
                vieillissant. Un projet manga chez moi est composé spécialement, jamais décalqué d&apos;une
                image trouvée en ligne.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        <section className="py-20 md:py-24">
          <div className={SECTION}>
            <h2 className={H2} style={H2_STYLE}>
              Pourquoi venir de Béziers
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
                <span className="inline-flex w-fit rounded-lg bg-gold/10 p-2.5 text-gold">
                  <Trophy className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg text-white" style={H2_STYLE}>
                  Deux prix décrochés à Béziers
                </h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {BEZIERS_AWARDS.map((award) => (
                    <li key={award.image} className={`text-sm ${BODY}`} style={BODY_STYLE}>
                      {award.rank} · {award.category} · {award.event}
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
                  Plus de {studio.reviewCount} avis, {studio.ratingValue.replace('.', ',')} de moyenne
                </h3>
                <p className={`mt-4 text-sm ${BODY}`} style={BODY_STYLE}>
                  Les avis parlent autant de l&apos;accompagnement que du résultat.{' '}
                  <Link href="/#avis" className={LINK}>
                    Les lire sur le site
                  </Link>{' '}
                  ou{' '}
                  <a href={studio.googleBusinessUrl} target="_blank" rel="noopener noreferrer" className={LINK}>
                    sur Google
                  </a>
                  .
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
                <span className="inline-flex w-fit rounded-lg bg-gold/10 p-2.5 text-gold">
                  <MapPin className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg text-white" style={H2_STYLE}>
                  45 minutes par l&apos;A9, et le port au bout
                </h3>
                <p className={`mt-4 text-sm ${BODY}`} style={BODY_STYLE}>
                  Sortie Narbonne-Est, puis la route de Gruissan. Le salon est quai du Ponant, rive
                  droite, face au port de plaisance. Ouvert toute l&apos;année, sur rendez-vous.{' '}
                  <a href={studio.address.googleMapsUrl} target="_blank" rel="noopener noreferrer" className={LINK}>
                    Itinéraire depuis Béziers
                  </a>
                  .
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
                <span className="inline-flex w-fit rounded-lg bg-gold/10 p-2.5 text-gold">
                  <ArrowRight className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg text-white" style={H2_STYLE}>
                  Une grande pièce se prépare
                </h3>
                <p className={`mt-4 text-sm ${BODY}`} style={BODY_STYLE}>
                  Un japonais, c&apos;est souvent plusieurs séances. Vous décrivez le projet, je réponds
                  sous 48h, on valide le dessin ensemble au salon, puis on planifie. Guide de
                  cicatrisation entre chaque séance, retouche gratuite si nécessaire.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        <section className="py-20 md:py-24">
          <div className={SECTION}>
            <h2 className={H2} style={H2_STYLE}>
              Mes tatouages japonais et manga
            </h2>
            <p className={`mt-5 max-w-2xl ${BODY}`} style={BODY_STYLE}>
              Les pièces japonaises et manga réalisées au salon. Le reste du travail, tous styles
              confondus, est dans{' '}
              <Link href="/#gallery" className={LINK}>
                la galerie complète
              </Link>
              .
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {JAPONAIS.map((piece) => (
                <div key={piece.src} className="relative aspect-[3/4] overflow-hidden rounded-lg border border-white/10">
                  <Image src={piece.src} alt={piece.alt} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        <section className="py-20 md:py-24">
          <div className={SECTION}>
            <h2 className={H2} style={H2_STYLE}>
              Parlons de votre projet japonais
            </h2>
            <p className={`mt-5 max-w-2xl ${BODY}`} style={BODY_STYLE}>
              Le motif qui vous parle, l&apos;emplacement, la taille, et toute référence qui vous
              inspire. Je réponds sous 48h, et on se retrouve au salon, face au port.
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
              <a href={`tel:${studio.phone.replace(/\s+/g, '')}`} className={`inline-flex items-center gap-2 text-sm text-white/80 ${LINK}`} style={BODY_STYLE}>
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
