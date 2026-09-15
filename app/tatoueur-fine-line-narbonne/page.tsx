import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Star, Trophy } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Divider from '@/components/Divider';
import LandingFaq, { breadcrumbJsonLd, faqJsonLd, type QA } from '@/components/LandingFaq';
import { SITE_URL, studio } from '@/data/studio';

const PATH = '/tatoueur-fine-line-narbonne';
const TITLE = 'Tatoueur fine line à Narbonne | Barberousse Tattoo, Gruissan';
const DESCRIPTION =
  "Spécialiste du tatouage ligne fine à quinze minutes de Narbonne. Trait unique, sans repasse, pensé pour durer. Primé au Narbonne Tattoo Show, 5,0 sur plus de 400 avis.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    siteName: studio.name,
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: studio.ogImage, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [studio.ogImage] },
};

// Seules les pièces au trait réellement fin, sans ombrage dense, ont leur place ici.
// Les autres « fine line » de la galerie (phénix, montagne, cerisier rose) restent
// dans la galerie complète.
const SHOWCASE = [
  'papillon-fine-line',
  'deux-hirondelles',
  'creation-adam',
  'cerisier-fine-line',
  'hirondelle-fine-line',
  'branches-fine-line',
  'bracelet-pivoines',
  'lettering-ancree',
];
const PIECES = SHOWCASE.map((name) => studio.gallery.find((p) => p.src.includes(`/${name}.jpg`))).filter(
  (p): p is (typeof studio.gallery)[number] => Boolean(p),
);

const NARBONNE_AWARDS = studio.awards.filter((award) => award.event.includes('Narbonne'));

// Les réponses ne disent que ce que le site affirme déjà ailleurs, ou ce qui
// relève du métier en général. Rien sur le salon qui ne soit pas vérifié.
const FAQ: QA[] = [
  {
    question: "Qu'est-ce qu'un tatouage fine line, exactement ?",
    answer:
      "Un tatouage réalisé avec une seule aiguille, ou un groupement de trois, pour obtenir un trait d'une finesse proche de celle d'un stylo. Pas de contour épais, pas ou très peu d'ombrage : le dessin repose entièrement sur la précision de la ligne. C'est le style le plus proche du dessin sur papier, et le plus exigeant à poser.",
  },
  {
    question: 'Est-ce que la ligne fine vieillit bien ?',
    answer:
      "Oui, à deux conditions : que le trait soit posé à la bonne profondeur, et que le motif soit dimensionné pour la zone. Un trait fin bien posé reste net pendant des années. Trop superficiel, il s'estompe ; trop profond, il bave. Trop petit, les détails finissent par se rejoindre. C'est pour ça que je vous conseille sur la taille et l'emplacement avant de tatouer, et que je refuse de descendre en dessous de ce qui tiendra.",
  },
  {
    question: 'Quels motifs se prêtent à la ligne fine ?',
    answer:
      "Le floral et le botanique (branches, fleurs de cerisier, pivoines, rameaux), les animaux stylisés (hirondelles, papillons), le lettering manuscrit, les motifs célestes et les compositions ornementales. Regardez les pièces plus haut : c'est ce que je fais le plus au salon.",
  },
  {
    question: "Est-ce que ça fait moins mal qu'un tatouage classique ?",
    answer:
      "En général, oui : une aiguille fine, un seul passage, pas de remplissage. La séance est aussi plus courte pour un motif de taille équivalente. Cela dépend de l'emplacement et de chacun, mais beaucoup de clients repartent surpris d'avoir si peu senti.",
  },
  {
    question: 'Combien coûte un tatouage fine line ?',
    answer:
      "Il n'y a pas de tarif fixe. Le prix dépend de la taille, du niveau de détail et de l'emplacement. Décrivez votre projet dans le formulaire : je vous envoie une estimation personnalisée sous 48h, sans engagement.",
  },
  {
    question: 'Vous recevez sans rendez-vous ?',
    answer:
      "Non, uniquement sur rendez-vous, toute l'année, du mardi au samedi. Depuis Narbonne, comptez quinze minutes par la route de Gruissan. Le salon est quai du Ponant, rive droite, face au port de plaisance.",
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}${PATH}#service`,
  name: 'Tatouage en ligne fine',
  serviceType: 'Tatouage fine line',
  description:
    "Tatouage en ligne fine réalisé au salon Barberousse Tattoo, à Gruissan, à quinze minutes de Narbonne. Trait unique posé une seule fois, sans repasse ni rattrapage.",
  provider: { '@type': 'TattooParlor', '@id': `${SITE_URL}/#salon`, name: studio.name },
  areaServed: [
    { '@type': 'City', name: 'Narbonne' },
    { '@type': 'City', name: 'Gruissan' },
    { '@type': 'City', name: 'Narbonne-Plage' },
    { '@type': 'City', name: 'Coursan' },
    { '@type': 'City', name: 'Sigean' },
    { '@type': 'City', name: 'Port-la-Nouvelle' },
    { '@type': 'City', name: 'Lézignan-Corbières' },
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
const CARD = 'rounded-2xl border border-white/10 bg-white/[0.02] p-7';
const ICON = 'inline-flex w-fit rounded-lg bg-gold/10 p-2.5 text-gold';

export default function TatoueurFineLineNarbonne() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(SITE_URL, 'Tatoueur fine line à Narbonne', PATH)) }}
      />
      <Navbar />

      <main>
        <section className="relative isolate flex min-h-[70vh] w-full flex-col justify-end overflow-hidden pb-16 pt-32">
          <div className="absolute inset-0 -z-10">
            <Image src={studio.heroImage} alt={studio.heroImageAlt} fill priority sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 -z-10 bg-black/70" />

          <div className={SECTION}>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-gold/60" aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.25em] text-gold">Ligne fine · Narbonne et l&apos;Aude</span>
            </div>
            <h1 className="max-w-3xl font-sans text-4xl uppercase leading-[0.95] text-white md:text-6xl" style={H2_STYLE}>
              Tatoueur fine line à Narbonne
            </h1>
            <p className={`mt-6 max-w-2xl text-lg ${BODY}`} style={BODY_STYLE}>
              La ligne fine est ma spécialité depuis l&apos;ouverture du salon en 2019. Je tatoue seul,
              sur rendez-vous, à Gruissan, quai du Ponant : quinze minutes depuis Narbonne.
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
              <a href={studio.googleBusinessUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 text-sm text-white/80 ${LINK}`} style={BODY_STYLE}>
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
              La ligne fine ne pardonne rien
            </h2>
            <div className="mt-6 flex flex-col gap-5">
              <p className={BODY} style={BODY_STYLE}>
                Un tatouage classique se construit en couches : un contour, puis du remplissage, puis
                des ombres. Chaque couche rattrape un peu la précédente. Un trait un peu tremblé
                disparaît sous l&apos;ombrage, un contour hésitant se noie dans l&apos;aplat. La ligne fine
                n&apos;a rien de tout ça. Le trait est le dessin. Ce qui est posé reste visible tel quel,
                à la loupe, pendant des années.
              </p>
              <p className={BODY} style={BODY_STYLE}>
                Techniquement, on travaille avec une seule aiguille, ou un groupement de trois, là où
                un contour classique en utilise cinq à neuf. Le trait fait moins d&apos;un demi-millimètre.
                À cette échelle, tout compte : la vitesse de la main, la pression, l&apos;angle de la
                machine, la tension de la peau, la profondeur exacte à laquelle l&apos;encre se dépose.
                Trop superficiel, le trait s&apos;efface à la cicatrisation. Trop profond, l&apos;encre diffuse
                sous la peau et la ligne bave : c&apos;est ce qu&apos;on appelle un blowout, et il est
                irréversible.
              </p>
              <p className={BODY} style={BODY_STYLE}>
                Et surtout : on ne repasse pas. Sur un contour épais, un second passage renforce la
                ligne. Sur un trait fin, il la double, l&apos;épaissit, la rend sale. Chaque trait se pose
                donc une seule fois, d&apos;un geste continu, avec la régularité d&apos;un tracé à la règle mais
                à main levée. Un rond doit être rond, une courbe doit être une courbe, une ligne
                droite ne doit pas onduler. Si la main hésite au milieu d&apos;un trait, ça se voit, et ça
                se verra toujours.
              </p>
              <p className={BODY} style={BODY_STYLE}>
                C&apos;est cette discipline qui fait ma réputation à Gruissan et dans le bassin de
                Narbonne, du petit motif discret aux compositions florales les plus étendues. Elle
                demande des années de pratique et une main sûre, plus qu&apos;un catalogue de motifs.
                Peu de salons de la région en font leur spécialité, parce qu&apos;elle ne tolère pas
                l&apos;à-peu-près.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        <section className="py-20 md:py-24">
          <div className={SECTION}>
            <h2 className={H2} style={H2_STYLE}>
              Ce que ça change pour vous
            </h2>
            <div className="mt-6 flex flex-col gap-5">
              <p className={BODY} style={BODY_STYLE}>
                Un tatouage fine line est dessiné pour l&apos;endroit où il va vivre. Je travaille
                chaque projet sur iPad, à l&apos;échelle réelle, adapté à votre morphologie. Je vous dis
                franchement si un motif est trop petit pour tenir dans le temps, ou si un emplacement
                le fera vieillir plus vite : les mains, les doigts, les côtes et les zones de frottement
                ne pardonnent pas plus que le trait. L&apos;objectif est un tatouage fin, propre, et pensé
                pour bien évoluer.
              </p>
              <p className={BODY} style={BODY_STYLE}>
                Une séance de ligne fine est souvent plus courte, et plus supportable, qu&apos;un tatouage
                avec remplissage : une aiguille fine, un seul passage, pas de zones à saturer. Ce
                qu&apos;on gagne en douceur pendant la séance, on le doit à la concentration en amont.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        <section className="py-20 md:py-24">
          <div className={SECTION}>
            <h2 className={H2} style={H2_STYLE}>
              Ce qui fait la différence, à quinze minutes de Narbonne
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className={CARD}>
                <span className={ICON}>
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

              <div className={CARD}>
                <span className={ICON}>
                  <Star className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg text-white" style={H2_STYLE}>
                  Plus de {studio.reviewCount} avis, {studio.ratingValue.replace('.', ',')} de moyenne
                </h3>
                <p className={`mt-4 text-sm ${BODY}`} style={BODY_STYLE}>
                  Je tatoue seul et je prends le temps qu&apos;il faut. Les avis parlent autant de
                  l&apos;accompagnement que du résultat.{' '}
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

              <div className={CARD}>
                <span className={ICON}>
                  <MapPin className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg text-white" style={H2_STYLE}>
                  Quinze minutes, et on se gare
                </h3>
                <p className={`mt-4 text-sm ${BODY}`} style={BODY_STYLE}>
                  Depuis Narbonne, Coursan ou Narbonne-Plage, la route de Gruissan mène au port.
                  Sigean et Port-la-Nouvelle sont à vingt-cinq minutes, Lézignan-Corbières à
                  quarante. Le salon est quai du Ponant, rive droite, ouvert toute l&apos;année.{' '}
                  <a href={studio.address.googleMapsUrl} target="_blank" rel="noopener noreferrer" className={LINK}>
                    Itinéraire
                  </a>
                  .
                </p>
              </div>

              <div className={CARD}>
                <span className={ICON}>
                  <ArrowRight className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg text-white" style={H2_STYLE}>
                  Un seul interlocuteur
                </h3>
                <p className={`mt-4 text-sm ${BODY}`} style={BODY_STYLE}>
                  Vous décrivez votre projet, je réponds sous 48h. On valide le dessin ensemble au
                  salon avant de tatouer. Guide de cicatrisation à la fin, retouche gratuite si
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
              Des pièces réalisées au salon, au trait fin, sans ombrage ou presque. Floral,
              botanique, animaux, lettering. Le reste du travail, tous styles confondus, est dans{' '}
              <Link href="/#gallery" className={LINK}>
                la galerie complète
              </Link>
              .
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {PIECES.map((piece) => (
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
            <LandingFaq title="Questions sur la ligne fine" items={FAQ} />
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
              <a href={`tel:${studio.phone.replace(/\s+/g, '')}`} className={`inline-flex items-center gap-2 text-sm text-white/80 ${LINK}`} style={BODY_STYLE}>
                {studio.phone}
              </a>
              <Link href="/tatouage-japonais-beziers" className={`text-sm text-white/60 ${LINK}`} style={BODY_STYLE}>
                Voir aussi : le tatouage japonais
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
