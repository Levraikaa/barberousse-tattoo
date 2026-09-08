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
  ];
}
