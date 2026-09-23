import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { SITE_URL, studio } from '@/data/studio';

export const metadata: Metadata = {
  title: 'Politique de cookies | Barberousse Tattoo',
  description: "Ce site ne dépose aucun cookie de suivi et n'affiche donc pas de bandeau de consentement. Explication détaillée.",
  alternates: { canonical: '/cookies' },
  robots: { index: false, follow: true },
};

const H2_STYLE = { fontFamily: 'var(--font-display), sans-serif', letterSpacing: '0.05em' } as const;

export default function Cookies() {
  return (
    <LegalPage eyebrow="Traceurs" title="Politique de cookies" updated="23 septembre 2026">
      <section>
        <h2 style={H2_STYLE}>En résumé</h2>
        <p>
          Ce site <strong>ne dépose aucun cookie</strong> sur votre appareil : ni cookie publicitaire,
          ni cookie de mesure d&apos;audience, ni cookie de réseau social. C&apos;est pour cette raison
          que vous ne voyez aucun bandeau de consentement en arrivant : il n&apos;y a rien à accepter
          ni à refuser.
        </p>
      </section>

      <section>
        <h2 style={H2_STYLE}>Ce qu&apos;est un cookie</h2>
        <p>
          Un cookie est un petit fichier déposé sur votre appareil par un site que vous visitez. Il
          permet de vous reconnaître d&apos;une visite à l&apos;autre, parfois d&apos;un site à l&apos;autre.
          En France, l&apos;article 82 de la loi Informatique et Libertés impose de recueillir votre
          accord avant de déposer un cookie qui n&apos;est pas strictement nécessaire au fonctionnement
          du site. Seuls les cookies indispensables en sont dispensés.
        </p>
      </section>

      <section>
        <h2 style={H2_STYLE}>La mesure d&apos;audience</h2>
        <p>
          Le site compte ses visites avec Vercel Web Analytics. Cet outil fonctionne{' '}
          <strong>sans cookie et sans identifiant persistant</strong> : il enregistre la page
          consultée, la provenance (moteur de recherche, réseau social, lien direct), le type
          d&apos;appareil et le pays, sans jamais vous identifier ni suivre votre navigation d&apos;un
          site à l&apos;autre. Aucune donnée n&apos;est conservée sur votre appareil, et rien ne permet
          de relier deux visites entre elles.
        </p>
        <p>
          C&apos;est précisément cette absence de traceur qui permet à ce site de se passer de bandeau.
        </p>
      </section>

      <section>
        <h2 style={H2_STYLE}>Les services extérieurs</h2>
        <p>
          Le site ne charge aucun service tiers susceptible de déposer un cookie. En particulier :
        </p>
        <ul>
          <li>
            <strong>Aucune carte Google intégrée.</strong> La section contact affiche une photo du
            salon et un lien : c&apos;est seulement si vous cliquez que Google Maps s&apos;ouvre, dans
            un nouvel onglet, sous la responsabilité de Google.
          </li>
          <li>
            <strong>Les polices de caractères sont servies par le site lui-même</strong>, sans appel
            à Google Fonts.
          </li>
          <li>
            <strong>Aucun bouton de réseau social intégré.</strong> Les liens vers Instagram et
            Google vous y emmènent sans rien charger au préalable.
          </li>
        </ul>
        <p>
          Si vous suivez l&apos;un de ces liens, le site de destination applique sa propre politique,
          qui échappe à notre contrôle.
        </p>
      </section>

      <section>
        <h2 style={H2_STYLE}>Le stockage technique</h2>
        <p>
          Le formulaire de contact conserve ce que vous saisissez dans la mémoire de votre navigateur
          le temps que la page reste ouverte, afin d&apos;afficher vos réponses. Rien n&apos;est écrit
          sur votre appareil et tout disparaît dès que vous fermez l&apos;onglet.
        </p>
      </section>

      <section>
        <h2 style={H2_STYLE}>Si cela change</h2>
        <p>
          Si un outil déposant des cookies devait être ajouté un jour, un bandeau de consentement
          serait mis en place et cette page mise à jour avant toute collecte. Pour toute question,
          écrivez à <a href={`mailto:${studio.email}`}>{studio.email}</a>.
        </p>
        <p>
          Voir aussi la <a href="/confidentialite">politique de confidentialité</a> et les{' '}
          <a href="/mentions-legales">mentions légales</a> du site {SITE_URL.replace('https://', '')}.
        </p>
      </section>
    </LegalPage>
  );
}
