import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Divider from '@/components/Divider';
import LandingFaq, { breadcrumbJsonLd, faqJsonLd, type QA } from '@/components/LandingFaq';
import { SITE_URL, studio } from '@/data/studio';

const PATH = '/tatouage-japonais-beziers';

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


// Réponses limitées à ce que le site affirme déjà, ou au métier en général.
const FAQ: QA[] = [
  {
    question: 'Que signifient la carpe koï, le dragon et le masque hannya ?',
    answer:
      "Dans l'iconographie japonaise, la carpe koï remonte les cascades : persévérance, courage, réussite après l'effort. Le dragon protège et apporte la sagesse, souvent associé à l'eau et aux nuages. Le masque hannya représente une femme consumée par la jalousie, mais on le porte comme protection contre le mal. Chaque motif a ses règles de composition ; on en parle ensemble avant de dessiner.",
  },
  {
    question: 'Combien de séances pour un tatouage japonais ?',
    answer:
      "Tout dépend de la taille. Un motif isolé, une carpe ou un masque sur le bras, se fait en une séance. Une composition étendue avec fond, vagues et nuages, se planifie sur plusieurs séances espacées de quelques semaines, le temps que la peau cicatrise entre deux. On établit le plan des séances au moment de valider le dessin.",
  },
  {
    question: 'Faites-vous des tatouages manga et anime ?',
    answer:
      "Oui. Personnages, scènes, lettrages japonais, en noir ou en noir et rouge. Chaque projet est composé spécialement pour vous et pour l'emplacement : je ne décalque pas une image trouvée en ligne, je la redessine pour qu'elle tienne sur la peau et qu'elle vieillisse bien.",
  },
  {
    question: 'Noir et gris ou couleur ?',
    answer:
      "Les deux. Le japonais traditionnel se prête à la couleur, le rouge en particulier, qui garde son contraste dans le temps. Le noir et gris donne un rendu plus sobre. C'est un choix qu'on fait ensemble selon le motif, l'emplacement et ce que vous portez déjà.",
  },
  {
    question: 'Combien ça coûte ?',
    answer:
      "Il n'y a pas de tarif fixe : le prix dépend de la taille, du niveau de détail et du nombre de séances. Décrivez votre projet dans le formulaire, je vous envoie une estimation personnalisée sous 48h. Pour une grande pièce, on parle aussi du rythme des séances.",
  },
  {
    question: 'Depuis Béziers, comment venir ?',
    answer:
      "Par l'A9 jusqu'à la sortie Narbonne-Est, puis la route de Gruissan : environ quarante-cinq minutes. Depuis Agde ou Pézenas, comptez une heure. Le salon est quai du Ponant, rive droite, face au port. Sur rendez-vous uniquement, toute l'année.",
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}${PATH}#service`,
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(SITE_URL, 'Tatouage japonais, Béziers', PATH)) }}
      />
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
            <div className="mt-6 flex flex-col gap-5">
              <p className={BODY} style={BODY_STYLE}>
                Le tatouage japonais traditionnel, l&apos;irezumi, ne se résume pas à un motif posé sur
                la peau. Une carpe koï, un dragon, un masque hannya, des chrysanthèmes ou des pivoines
                sont les sujets ; autour d&apos;eux, les vagues, les nuages, le vent et les feuilles
                d&apos;érable forment le fond qui relie tout. C&apos;est ce fond qui fait qu&apos;une pièce
                japonaise se lit d&apos;un seul regard, et qu&apos;elle épouse le bras, la cuisse ou le dos au
                lieu d&apos;y être collée.
              </p>
              <p className={BODY} style={BODY_STYLE}>
                Composer, c&apos;est décider où va le sujet par rapport aux muscles et aux articulations,
                dans quel sens tournent les vagues, où le regard doit entrer et sortir. Un dragon qui
                remonte l&apos;avant-bras ne se dessine pas comme un dragon qui enroule le mollet. C&apos;est un
                travail de dessin avant d&apos;être un travail de machine, et c&apos;est là que se joue la
                différence entre une pièce qui tient et une pièce qui encombre.
              </p>
              <p className={BODY} style={BODY_STYLE}>
                Je peins à l&apos;aquarelle japonaise en dehors du salon. Ce n&apos;est pas un à-côté : c&apos;est
                ce qui nourrit directement ma manière de placer les vagues, les nuages et les fleurs
                autour du sujet. Chaque projet est ensuite dessiné sur iPad, à l&apos;échelle réelle, adapté
                à votre morphologie et à l&apos;emplacement choisi, et validé ensemble au salon avant la
                première séance.
              </p>
              <p className={BODY} style={BODY_STYLE}>
                Le manga et l&apos;anime, c&apos;est la même exigence appliquée à des personnages : la
                ressemblance, l&apos;expression, l&apos;encre noire et rouge qui garde son contraste en
                vieillissant. Un projet manga chez moi est composé spécialement, jamais décalqué d&apos;une
                image trouvée en ligne. Un style qui m&apos;a valu un premier prix Asiatique au Béziers
                Tattoo Show.
              </p>
            </div>

            <h2 className={`${H2} mt-14`} style={H2_STYLE}>
              Une grande pièce, ça se planifie
            </h2>
            <div className="mt-6 flex flex-col gap-5">
              <p className={BODY} style={BODY_STYLE}>
                Un motif isolé, une carpe sur le bras ou un masque sur la cuisse, tient en une séance.
                Une composition avec fond se répartit sur plusieurs séances, espacées de quelques
                semaines pour laisser la peau cicatriser. On établit le plan dès la validation du
                dessin : ce qui se fait en premier, ce qui vient ensuite, et à quel rythme.
              </p>
              <p className={BODY} style={BODY_STYLE}>
                Entre chaque séance, vous repartez avec un guide de cicatrisation. Je reste disponible
                pour vos questions, et si une retouche est nécessaire, elle est gratuite. Venir de
                Béziers, de l&apos;Hérault ou de plus loin pour un japonais, c&apos;est un engagement sur
                plusieurs mois : autant que tout soit clair dès le premier rendez-vous.
              </p>
            </div>

            <h2 className={`${H2} mt-14`} style={H2_STYLE}>
              Pourquoi faire la route jusqu&apos;à Gruissan
            </h2>
            <p className={`mt-5 max-w-2xl ${BODY}`} style={BODY_STYLE}>
              Parce que le japonais se juge à la pièce finie, et que des jurys de conventions l&apos;ont fait. Voici ce qu&apos;ils ont retenu de mon travail.
            </p>

            <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {studio.awards.map((award) => (
                <li key={award.image} className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4">
                  <span className="w-24 shrink-0 text-lg text-gold" style={H2_STYLE}>
                    {award.rank}
                  </span>
                  <span className={`flex-1 ${BODY}`} style={BODY_STYLE}>
                    {award.category}
                  </span>
                  <span className="text-sm text-white/50" style={BODY_STYLE}>
                    {award.event}
                    {award.year ? ` · ${award.year}` : ''}
                  </span>
                </li>
              ))}
              {studio.certifications.map((c) => (
                <li key={c.image} className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4">
                  <span className="w-24 shrink-0 text-lg text-gold" style={H2_STYLE}>
                    Certificat
                  </span>
                  <span className={`flex-1 ${BODY}`} style={BODY_STYLE}>
                    {c.title}, {c.detail.charAt(0).toLowerCase() + c.detail.slice(1)}
                  </span>
                  <span className="text-sm text-white/50" style={BODY_STYLE}>
                    {c.issuer} · {c.year}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid max-w-xl grid-cols-2 gap-4">
              {studio.awards
                .filter((award) => award.event.includes('Béziers'))
                .map((award) => (
                  <figure key={award.image} className="group">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/10 transition-colors duration-300 group-hover:border-gold/40">
                      <Image
                        src={award.image}
                        alt={`${award.rank}, ${award.category}, ${award.event}${award.year ? ` ${award.year}` : ''}`}
                        fill
                        sizes="(max-width:640px) 45vw, 280px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <figcaption className={`mt-2 text-xs ${BODY}`} style={BODY_STYLE}>
                      <span className="text-gold">{award.rank}</span> · {award.category}
                      {award.year ? ` · ${award.year}` : ''}
                    </figcaption>
                  </figure>
                ))}
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
                <div key={piece.src} className="group relative aspect-[3/4] overflow-hidden rounded-lg border border-white/10 transition-colors duration-300 hover:border-gold/40">
                  <Image src={piece.src} alt={piece.alt} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        <section className="py-20 md:py-24">
          <div className={SECTION}>
            <LandingFaq title="Questions sur le tatouage japonais" items={FAQ} />
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
              <Link href="/tatoueur-fine-line-narbonne" className={`text-sm text-white/60 ${LINK}`} style={BODY_STYLE}>
                Voir aussi : la ligne fine
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
