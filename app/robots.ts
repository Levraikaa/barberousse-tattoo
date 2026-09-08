import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/data/studio';


export default function robots(): MetadataRoute.Robots {
  return {
    // Les moteurs de réponse (ChatGPT, Perplexity, Claude, Gemini) sont nommés
    // explicitement : un salon local a tout à gagner à être cité par eux.
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-SearchBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
