import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { SITE_URL, studio } from '@/data/studio';

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Barberousse Tattoo',
  description:
    "Quelles données le site barberousse-tattoo.fr collecte, pourquoi, combien de temps, qui y a accès, et comment exercer vos droits.",
  alternates: { canonical: '/confidentialite' },
  robots: { index: false, follow: true },
};

const H2_STYLE = { fontFamily: 'var(--font-display), sans-serif', letterSpacing: '0.05em' } as const;

export default function Confidentialite() {
  const { legal } = studio;
  return (
    <LegalPage eyebrow="Vos données" title="Politique de confidentialité" updated="23 septembre 2026">
      <section>
        <h2 style={H2_STYLE}>En résumé</h2>
        <p>
          Ce site ne collecte qu&apos;une seule chose : ce que vous écrivez dans le formulaire de
          contact, quand vous choisissez de l&apos;envoyer. Pas de compte, pas de cookie, pas de
          profilage, pas de revente. Vous pouvez demander la suppression de vos données à tout moment
          en écrivant à <a href={`mailto:${studio.email}`}>{studio.email}</a>.
        </p>
      </section>

      <section>
        <h2 style={H2_STYLE}>Qui est responsable du traitement</h2>
        <p>
          {legal.owner}, {legal.legalForm.toLowerCase()} exerçant sous l&apos;enseigne {studio.name},
          SIRET {legal.siret}, {studio.address.street.replace(' — ', ', ')}, {studio.address.zip}{' '}
          {studio.address.city}. Contact :{' '}
          <a href={`mailto:${studio.email}`}>{studio.email}</a> ·{' '}
          <a href={`tel:${studio.phone.replace(/\s+/g, '')}`}>{studio.phone}</a>.
        </p>
        <p>
          Compte tenu de la taille de l&apos;activité et de la nature des données traitées, la
          désignation d&apos;un délégué à la protection des données n&apos;est pas requise.
        </p>
      </section>

      <section>
        <h2 style={H2_STYLE}>Ce qui est collecté, et pourquoi</h2>
        <p>
          <strong>Le formulaire de contact.</strong> Vous y renseignez votre nom, votre adresse
          email, éventuellement votre téléphone, le style et la taille envisagés, et la description
          de votre projet. Ces informations servent uniquement à vous répondre, à échanger sur votre
          projet et, si vous le souhaitez, à convenir d&apos;un rendez-vous.
        </p>
        <ul>
          <li>
            <strong>Base légale :</strong> votre consentement, donné en cochant la case avant
            l&apos;envoi (article 6.1.a du RGPD). Vous pouvez le retirer à tout moment.
          </li>
          <li>
            <strong>Champs facultatifs :</strong> seuls le nom, l&apos;email et la description sont
            nécessaires pour vous répondre. Le téléphone, le style et la taille sont facultatifs.
          </li>
          <li>
            <strong>Ne nous envoyez pas de données sensibles</strong> par ce formulaire : pas
            d&apos;information de santé, pas de document d&apos;identité. Décrivez votre projet, cela
            suffit.
          </li>
        </ul>
        <p>
          <strong>La mesure d&apos;audience.</strong> Le site compte ses visites avec Vercel Web
          Analytics, sans cookie et sans identifiant : page consultée, provenance, type d&apos;appareil,
          pays. Ces données sont agrégées et ne permettent pas de vous identifier. Base légale :
          l&apos;intérêt légitime à connaître la fréquentation de son site, sans suivi individuel.
          Détail dans la <a href="/cookies">politique de cookies</a>.
        </p>
        <p>
          <strong>Les journaux techniques.</strong> L&apos;hébergeur conserve automatiquement, pour
          des raisons de sécurité et de bon fonctionnement, des traces techniques de connexion
          (adresse IP, date, page demandée). Elles ne sont pas exploitées à d&apos;autres fins.
        </p>
      </section>

      <section>
        <h2 style={H2_STYLE}>Qui y a accès</h2>
        <ul>
          <li>{legal.owner}, qui reçoit et traite votre demande.</li>
          <li>
            {legal.host.name} ({legal.host.address}), qui héberge le site et achemine le formulaire.
          </li>
          <li>
            Le prestataire d&apos;envoi d&apos;emails, qui transmet votre message à la boîte du salon.
          </li>
        </ul>
        <p>
          Aucun autre destinataire. Vos données ne sont ni vendues, ni louées, ni utilisées pour vous
          envoyer de la publicité.
        </p>
        <p>
          <strong>Transferts hors Union européenne.</strong> L&apos;hébergeur est une société
          américaine. Le site est servi depuis ses centres de données, et certaines opérations
          techniques peuvent impliquer un transfert vers les États-Unis. Ces transferts sont encadrés
          par les clauses contractuelles types de la Commission européenne et par le cadre de
          protection des données UE–États-Unis.
        </p>
      </section>

      <section>
        <h2 style={H2_STYLE}>Combien de temps</h2>
        <ul>
          <li>
            <strong>Demandes restées sans suite :</strong> supprimées au plus tard un an après le
            dernier échange.
          </li>
          <li>
            <strong>Demandes ayant abouti à un rendez-vous :</strong> conservées le temps du suivi du
            projet et de la cicatrisation, puis pendant la durée nécessaire aux obligations
            comptables et légales.
          </li>
          <li>
            <strong>Mesure d&apos;audience :</strong> données agrégées conservées douze mois par
            l&apos;outil, sans lien avec une personne.
          </li>
        </ul>
        <p>Vous pouvez demander une suppression avant ces échéances, à tout moment.</p>
      </section>

      <section>
        <h2 style={H2_STYLE}>Vos droits</h2>
        <p>
          Conformément au Règlement général sur la protection des données et à la loi Informatique et
          Libertés, vous disposez des droits suivants sur vos données : <strong>accès</strong>,{' '}
          <strong>rectification</strong>, <strong>effacement</strong>,{' '}
          <strong>limitation du traitement</strong>, <strong>opposition</strong>,{' '}
          <strong>portabilité</strong>, et <strong>retrait de votre consentement</strong> à tout
          moment. Vous pouvez également définir des directives sur le sort de vos données après votre
          décès.
        </p>
        <p>
          Pour les exercer, écrivez à <a href={`mailto:${studio.email}`}>{studio.email}</a>. Une
          réponse vous sera apportée dans un délai d&apos;un mois. Si vous estimez que vos droits ne
          sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL, 3 place de
          Fontenoy, TSA 80715, 75334 Paris Cedex 07, ou sur{' '}
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
            cnil.fr
          </a>
          .
        </p>
      </section>

      <section>
        <h2 style={H2_STYLE}>Sécurité</h2>
        <p>
          Le site est servi exclusivement en HTTPS : les informations que vous envoyez circulent
          chiffrées. L&apos;accès aux demandes reçues est limité au salon. Aucune base de données de
          clients n&apos;est constituée à partir du site.
        </p>
      </section>

      <section>
        <h2 style={H2_STYLE}>Mineurs</h2>
        <p>
          Ce site s&apos;adresse à un public majeur. Le tatouage est interdit aux mineurs sans le
          consentement écrit d&apos;un titulaire de l&apos;autorité parentale. Si vous avez moins de
          quinze ans, n&apos;utilisez pas le formulaire sans l&apos;accord de vos parents.
        </p>
      </section>

      <section>
        <h2 style={H2_STYLE}>Modifications</h2>
        <p>
          Cette politique peut évoluer. La date de dernière mise à jour figure en haut de page. Voir
          aussi les <a href="/mentions-legales">mentions légales</a>, les{' '}
          <a href="/conditions-utilisation">conditions d&apos;utilisation</a> et la{' '}
          <a href="/cookies">politique de cookies</a> du site{' '}
          {SITE_URL.replace('https://', '')}.
        </p>
      </section>
    </LegalPage>
  );
}
