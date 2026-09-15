import type { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const H2_STYLE = { fontFamily: 'var(--font-display), sans-serif', letterSpacing: '0.05em' } as const;
const BODY_STYLE = { fontFamily: 'var(--font-body), sans-serif', fontWeight: 300 } as const;

/** Gabarit sobre des pages légales : un titre, des sections, rien d'autre. */
export default function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pb-24 pt-36 md:pt-44">
        <article className="mx-auto w-full max-w-3xl px-6 md:px-8">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-gold/60" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold">{eyebrow}</span>
          </div>
          <h1 className="font-sans text-4xl uppercase leading-[0.95] text-white md:text-5xl" style={H2_STYLE}>
            {title}
          </h1>
          <p className="mt-4 text-sm text-white/50" style={BODY_STYLE}>
            Dernière mise à jour : {updated}
          </p>
          <div
            className="legal mt-12 flex flex-col gap-10 text-white/85 [&_a]:underline [&_a]:decoration-white/25 [&_a]:underline-offset-4 [&_a:hover]:text-gold [&_h2]:text-xl [&_h2]:text-white [&_h2]:md:text-2xl [&_p]:mt-3 [&_p]:leading-relaxed [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:leading-relaxed"
            style={BODY_STYLE}
          >
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
