import type { MetadataRoute } from 'next';
import { SITE_URL, studio } from '@/data/studio';


export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      // Les tatouages sont le fonds de commerce : ils passent dans Google Images
      images: [
        `${SITE_URL}${studio.ogImage}`,
        ...studio.gallery.map((piece) => `${SITE_URL}${piece.src}`),
      ],
    },
    {
      url: `${SITE_URL}/tatoueur-fine-line-narbonne`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: studio.gallery
        .filter((piece) => piece.style === 'Fine line')
        .map((piece) => `${SITE_URL}${piece.src}`),
    },
    {
      url: `${SITE_URL}/tatouage-japonais-beziers`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: studio.gallery
        .filter((piece) => piece.style === 'Japonais' || piece.style === 'Manga')
        .map((piece) => `${SITE_URL}${piece.src}`),
    },
    { url: `${SITE_URL}/mentions-legales`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/confidentialite`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/cookies`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/conditions-utilisation`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ];
}
