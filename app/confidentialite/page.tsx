import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { SITE_URL, studio } from '@/data/studio';

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Barberousse Tattoo',
  description: "Quelles données le site barberousse-tattoo.fr collecte, pourquoi, combien de temps, et vos droits.",
  alternates: { canonical: '/confidentialite' },
  robots: { index: false, follow: true },
};

const H2_STYLE = { fontFamily: 'var(--font-display), sans-serif', letterSpacing: '0.05em' } as const;

export default function Confidentialite() {
  const { legal } = studio;
  return (
    <LegalPage eyebrow="Vos données" title="Politique de confidentialité" updated="15 septembre 2026">
      <section>
        <h2 style={H2_STYLE}>Qui est responsable</h2>
        <p>
          Le responsable du traitement des données collectées sur {SITE_URL.replace('https://', '')} est{' '}
          {legal.owner}, {studio.address.street.replace(' — ', ', ')}, {studio.address.zip} {studio.address.city},
          joignable à <a href={`mailto:${studio.email}`}>{studio.email}</a>.
        </p>
      </section>

      <section>
        <h2 style={H2_STYLE}>Ce que le site collecte</h2>
        <p>
          Le site ne demande des données personnelles qu&apos;à un seul endroit : le formulaire de
          contact. Vous y renseignez votre nom, votre email, éventuellement votre téléphone, et la
          description de votre projet de tatouage. Vous cochez une case pour accepter d&apos;être
          recontacté : c&apos;est votre consentement qui autorise le traitement.
        </p>
        <p>
          Le site ne crée pas de compte, ne dépose aucun cookie de suivi publicitaire et n&apos;utilise
          aucun outil de mesure d&apos;audience qui vous identifie.
        </p>
      </section>

      <section>
        <h2 style={H2_STYLE}>Pourquoi</h2>
        <p>
          Uniquement pour répondre à votre demande, échanger sur votre projet et, si vous le
          souhaitez, fixer un rendez-vous. Vos coordonnées ne sont ni vendues, ni louées, ni
          utilisées pour vous envoyer des messages commerciaux.
        </p>
      </section>

      <section>
        <h2 style={H2_STYLE}>Qui y a accès</h2>
        <ul>
          <li>{legal.owner}, qui reçoit et traite votre demande.</li>
          <li>
            {legal.host.name}, qui héberge le site et achemine techniquement le formulaire
            ({legal.host.address}).
          </li>
          <li>Le prestataire d&apos;envoi d&apos;emails qui transmet votre message à la boîte du salon.</li>
        </ul>
        <p>Aucun autre destinataire.</p>
      </section>

      <section>
        <h2 style={H2_STYLE}>Combien de temps</h2>
        <p>
          Le temps nécessaire au traitement de votre demande et au suivi de votre projet de
          tatouage. Vous pouvez demander la suppression de vos données à tout moment.
        </p>
      </section>

      <section>
        <h2 style={H2_STYLE}>Vos droits</h2>
        <p>
          Conformément au Règlement général sur la protection des données (RGPD) et à la loi
          Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification,
          d&apos;effacement, de limitation et d&apos;opposition sur vos données, ainsi que du droit de
          retirer votre consentement. Pour l&apos;exercer, écrivez à{' '}
          <a href={`mailto:${studio.email}`}>{studio.email}</a>. Si vous estimez que vos droits ne
          sont pas respectés, vous pouvez saisir la CNIL (
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
            cnil.fr
          </a>
          ).
        </p>
      </section>

      <section>
        <h2 style={H2_STYLE}>Services tiers intégrés</h2>
        <p>
          La page de contact intègre une carte Google Maps. En s&apos;affichant, elle peut déposer des
          cookies de Google, soumis à la{' '}
          <a href="https://policies.google.com/privacy?hl=fr" target="_blank" rel="noopener noreferrer">
            politique de confidentialité de Google
          </a>
          . Les liens vers Instagram, Facebook et Google Maps vous emmènent sur ces services, qui
          ont leurs propres règles. Les polices de caractères sont servies par le site lui-même,
          sans appel à un service extérieur.
        </p>
      </section>
    </LegalPage>
  );
}
