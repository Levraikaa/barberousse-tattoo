import { Plus } from 'lucide-react';

export type QA = { question: string; answer: string };

const H_STYLE = { fontFamily: 'var(--font-display), sans-serif', letterSpacing: '0.05em' } as const;
const BODY_STYLE = { fontFamily: 'var(--font-body), sans-serif', fontWeight: 300 } as const;

/**
 * Questions-réponses d'une page dédiée, en details/summary natif : le texte est
 * dans le HTML servi, lisible sans JavaScript par Google et les moteurs de réponse.
 * Le balisage FAQPage correspondant est construit par `faqJsonLd`.
 */
export default function LandingFaq({ title, items }: { title: string; items: QA[] }) {
  return (
    <div>
      <h2 className="font-sans text-3xl font-light tracking-tight text-foreground md:text-4xl" style={H_STYLE}>
        {title}
      </h2>
      <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
        {items.map((item) => (
          <details key={item.question} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left [&::-webkit-details-marker]:hidden">
              <h3 className="text-lg text-white md:text-xl" style={H_STYLE}>
                {item.question}
              </h3>
              <Plus
                className="h-5 w-5 shrink-0 text-gold transition-transform duration-300 group-open:rotate-45"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </summary>
            <p className="pb-6 pr-10 leading-relaxed text-white/85" style={BODY_STYLE}>
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}

export function faqJsonLd(items: QA[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function breadcrumbJsonLd(siteUrl: string, name: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name, item: `${siteUrl}${path}` },
    ],
  };
}
