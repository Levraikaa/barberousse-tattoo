import type { Metadata } from 'next';
import { Bebas_Neue, Inter } from 'next/font/google';
import { SITE_URL, studio } from '@/data/studio';
import CustomCursor from '@/components/CustomCursor';
import SplashScreen from '@/components/SplashScreen';
import './globals.css';

// Polices auto-hébergées par Next : plus d'appel bloquant à fonts.googleapis.com,
// et le texte s'affiche tout de suite au lieu d'attendre le téléchargement.
const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});
const inter = Inter({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const TITLE = 'Tatoueur fine line, Narbonne et Gruissan | Barberousse Tattoo';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: studio.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: TITLE,
    description: studio.description,
    url: '/',
    siteName: studio.name,
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: studio.ogImage,
        width: 1200,
        height: 630,
        alt: 'Barberousse Tattoo, tatoueur à Gruissan, spécialiste de la ligne fine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: studio.description,
    images: [studio.ogImage],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

// Données structurées du salon : ce que Google et les moteurs de réponse lisent en premier.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['TattooParlor', 'LocalBusiness'],
  '@id': `${SITE_URL}/#salon`,
  name: studio.name,
  alternateName: 'Barberousse Tattoo Gruissan',
  description:
    "Salon de tatouage à Gruissan, face au port, rive droite. Victor tatoue seul, sur rendez-vous, toute l'année : fine line, japonais, manga, réalisme noir et gris, polynésien, ornemental.",
  slogan: studio.tagline,
  url: `${SITE_URL}/`,
  image: `${SITE_URL}${studio.ogImage}`,
  logo: `${SITE_URL}${studio.logo}`,
  telephone: studio.phone.replace(/\s+/g, ''),
  email: studio.email,
  currenciesAccepted: 'EUR',
  foundingDate: String(studio.establishedYear),
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Résidence les Rocailles, Bât. B, Quai du Ponant',
    addressLocality: studio.address.city,
    postalCode: studio.address.zip,
    addressRegion: 'Occitanie',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: studio.address.coordinates.lat,
    longitude: studio.address.coordinates.lng,
  },
  hasMap: studio.googleBusinessUrl,
  // Fourchette générique : le salon ne communique aucun tarif chiffré sur le site.
  priceRange: '€€',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '13:45',
      closes: '16:45',
    },
  ],
  sameAs: [studio.socials.instagram, studio.googleBusinessUrl, studio.facebookUrl, studio.planityUrl],
  publicAccess: false,
  availableLanguage: { '@type': 'Language', name: 'Français', alternateName: 'fr' },
  areaServed: [
    { '@type': 'City', name: 'Gruissan' },
    { '@type': 'City', name: 'Narbonne' },
    { '@type': 'City', name: 'Narbonne-Plage' },
    { '@type': 'City', name: 'Saint-Pierre-la-Mer' },
    { '@type': 'City', name: 'Port-la-Nouvelle' },
    { '@type': 'City', name: 'Leucate' },
    { '@type': 'City', name: 'Béziers' },
    { '@type': 'City', name: 'Perpignan' },
    { '@type': 'AdministrativeArea', name: 'Aude' },
    { '@type': 'AdministrativeArea', name: 'Occitanie' },
  ],
  founder: {
    '@type': 'Person',
    name: 'Victor',
    jobTitle: 'Tatoueur',
    knowsAbout: [
      'Tatouage fine line',
      'Tatouage japonais',
      'Manga et anime',
      'Réalisme noir et gris',
      'Tatouage polynésien et maori',
      'Tatouage traditionnel',
      'Ornemental et mandala',
      'Dotwork',
      'Lettering',
      "Peinture japonaise à l'aquarelle",
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: 'Certificat de formation en réalisme noir et gris',
      credentialCategory: 'certificate',
      recognizedBy: { '@type': 'Organization', name: 'Séminaire Laura Ink' },
      dateCreated: '2021',
    },
    award: [
      '1er prix, Moyenne & grande pièce couleur, Narbonne Tattoo Show #6, 2024',
      '1er prix, Asiatique, Béziers Tattoo Show',
      '2e prix, Petite pièce couleur, Narbonne Tattoo Show, 2023',
      '3e prix, Graphique, Convention Tattoo Béziers, 2023',
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: studio.ratingValue,
    bestRating: '5',
    ratingCount: String(studio.reviewCount),
    reviewCount: String(studio.reviewCount),
  },
  // Les avis balisés sont ceux affichés sur la page, condition posée par Google
  review: studio.reviews.map((r) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.author },
    datePublished: r.date,
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    reviewBody: r.text,
  })),
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Tatouage fine line',
        serviceType: 'Tatouage en ligne fine',
        areaServed: 'Gruissan, Narbonne, Aude',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Tatouage japonais, manga et anime',
        serviceType: 'Tatouage japonais',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: 'Réalisme noir et gris', serviceType: 'Tatouage réaliste' },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Tatouage polynésien et maori',
        serviceType: 'Tatouage polynésien',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: 'Tatouage traditionnel', serviceType: 'Tatouage traditionnel' },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Ornemental, mandala et dotwork',
        serviceType: 'Tatouage ornemental',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: 'Lettering', serviceType: 'Tatouage lettering' },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Projet sur-mesure',
        description: "Dessin personnalisé sur iPad, adapté à la morphologie et à l'emplacement.",
      },
    },
  ],
  potentialAction: {
    '@type': 'ReserveAction',
    name: 'Prendre rendez-vous',
    target: `${SITE_URL}/#contact`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${bebas.variable} ${inter.variable} dark antialiased cursor-none`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="cursor-none bg-background text-foreground font-sans"
        style={{ '--gold': studio.accentColor } as React.CSSProperties}
      >
        <SplashScreen />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
