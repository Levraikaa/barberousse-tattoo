import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { SITE_URL, studio } from '@/data/studio';

export const metadata: Metadata = {
  title: 'Mentions légales | Barberousse Tattoo',
  description: "Mentions légales du site barberousse-tattoo.fr : éditeur, hébergeur, propriété intellectuelle.",
  alternates: { canonical: '/mentions-legales' },
  robots: { index: false, follow: true },
};

const H2_STYLE = { fontFamily: 'var(--font-display), sans-serif', letterSpacing: '0.05em' } as const;

export default function MentionsLegales() {
  const { legal } = studio;
  return (
    <LegalPage eyebrow="Informations légales" title="Mentions légales" updated="15 septembre 2026">
      <section>
        <h2 style={H2_STYLE}>Éditeur du site</h2>
        <p>
          Le site {SITE_URL.replace('https://', '')} est édité par {legal.owner}, {legal.legalForm.toLowerCase()},
          exerçant sous l&apos;enseigne {studio.name}.
        </p>
        <ul>
          <li>SIREN : {legal.siren}</li>
          <li>SIRET : {legal.siret}</li>
          <li>Activité : {legal.activity}</li>
          <li>Immatriculé depuis le {legal.since}</li>
          <li>
            Adresse : {studio.address.street.replace(' — ', ', ')}, {studio.address.zip} {studio.address.city}
          </li>
          <li>
            Téléphone : <a href={`tel:${studio.phone.replace(/\s+/g, '')}`}>{studio.phone}</a>
          </li>
          <li>
            Email : <a href={`mailto:${studio.email}`}>{studio.email}</a>
          </li>
        </ul>
        <p>Directeur de la publication : {legal.owner}.</p>
      </section>

      <section>
        <h2 style={H2_STYLE}>Hébergement</h2>
        <p>
          Le site est hébergé par {legal.host.name}, {legal.host.address}.{' '}
          <a href={legal.host.url} target="_blank" rel="noopener noreferrer">
            {legal.host.url.replace('https://', '')}
          </a>
        </p>
        <p>Le nom de domaine est enregistré auprès d&apos;OVHcloud.</p>
      </section>

      <section>
        <h2 style={H2_STYLE}>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble du contenu de ce site (textes, photographies des tatouages et du salon, logo,
          dessins) est la propriété de {legal.owner}, sauf mention contraire. Les tatouages
          photographiés sont des créations originales. Toute reproduction, représentation ou
          réutilisation, totale ou partielle, sans autorisation écrite préalable est interdite.
        </p>
      </section>

      <section>
        <h2 style={H2_STYLE}>Données personnelles</h2>
        <p>
          Les données transmises par le formulaire de contact sont traitées dans les conditions
          décrites dans la <a href="/confidentialite">politique de confidentialité</a>.
        </p>
      </section>

      <section>
        <h2 style={H2_STYLE}>Réglementation du tatouage</h2>
        <p>
          La pratique du tatouage est encadrée par le Code de la santé publique (articles R1311-1 et
          suivants). Le salon respecte les règles d&apos;hygiène et de salubrité applicables : matériel
          à usage unique, stérilisation, traçabilité. Le tatouage est interdit aux mineurs sans le
          consentement écrit d&apos;un titulaire de l&apos;autorité parentale.
        </p>
      </section>
    </LegalPage>
  );
}
