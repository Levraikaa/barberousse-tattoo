import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { SITE_URL, studio } from '@/data/studio';

export const metadata: Metadata = {
  title: "Conditions d'utilisation | Barberousse Tattoo",
  description: "Les règles d'usage du site barberousse-tattoo.fr : rôle du site, demandes de rendez-vous, propriété des photos, responsabilité.",
  alternates: { canonical: '/conditions-utilisation' },
  robots: { index: false, follow: true },
};

const H2_STYLE = { fontFamily: 'var(--font-display), sans-serif', letterSpacing: '0.05em' } as const;

export default function ConditionsUtilisation() {
  const { legal } = studio;
  return (
    <LegalPage eyebrow="Règles d'usage" title="Conditions d'utilisation" updated="23 septembre 2026">
      <section>
        <h2 style={H2_STYLE}>Objet</h2>
        <p>
          Les présentes conditions régissent l&apos;utilisation du site{' '}
          {SITE_URL.replace('https://', '')}, édité par {legal.owner} sous l&apos;enseigne{' '}
          {studio.name}. Naviguer sur le site vaut acceptation de ces conditions. Elles peuvent être
          modifiées à tout moment ; la version applicable est celle publiée sur cette page.
        </p>
      </section>

      <section>
        <h2 style={H2_STYLE}>Ce que le site est, et ce qu&apos;il n&apos;est pas</h2>
        <p>
          Ce site est une vitrine. Il présente le salon, le travail réalisé et les prestations
          proposées. <strong>Il ne vend rien en ligne</strong> : aucun paiement, aucune réservation
          ferme et aucun achat ne peut y être effectué. Il n&apos;y a donc ni commande, ni livraison,
          ni droit de rétractation, ni remboursement à prévoir au titre du site.
        </p>
        <p>
          Le formulaire de contact permet uniquement d&apos;envoyer une demande. Cette demande
          n&apos;engage personne : ni vous à venir, ni le salon à vous recevoir. Un rendez-vous n&apos;existe
          qu&apos;après un échange direct et l&apos;accord des deux parties.
        </p>
      </section>

      <section>
        <h2 style={H2_STYLE}>Devis, acompte et prestations</h2>
        <p>
          Les prestations de tatouage font l&apos;objet d&apos;un devis personnalisé, discuté au salon.
          Aucun tarif n&apos;est affiché sur le site, et les informations qui y figurent ne constituent
          pas une offre de prix. Les conditions de réservation, notamment l&apos;acompte demandé pour
          confirmer une date, sont convenues directement avec le salon, en dehors du site.
        </p>
      </section>

      <section>
        <h2 style={H2_STYLE}>Le tatouage, un acte encadré</h2>
        <p>
          Le tatouage est irréversible et soumis au Code de la santé publique (articles R1311-1 et
          suivants). Il est interdit aux mineurs sans le consentement écrit d&apos;un titulaire de
          l&apos;autorité parentale. Les informations publiées sur ce site, notamment celles
          concernant la cicatrisation ou les soins, sont données à titre indicatif et ne remplacent
          pas un avis médical. En cas de doute sur une réaction cutanée, consultez un médecin.
        </p>
      </section>

      <section>
        <h2 style={H2_STYLE}>Propriété intellectuelle</h2>
        <p>
          Les textes, les photographies des tatouages et du salon, le logo et les dessins présentés
          sont la propriété de {legal.owner}. Les tatouages photographiés sont des créations
          originales. Toute reproduction, diffusion ou réutilisation, totale ou partielle, sans
          autorisation écrite, est interdite. En particulier, <strong>un dessin présenté sur ce site
          ne peut pas être copié ni porté par une autre personne</strong>, ni reproduit par un autre
          tatoueur.
        </p>
      </section>

      <section>
        <h2 style={H2_STYLE}>Usage attendu</h2>
        <p>En utilisant ce site, vous vous engagez à ne pas :</p>
        <ul>
          <li>en perturber le fonctionnement, ni tenter d&apos;y accéder par un moyen détourné ;</li>
          <li>utiliser le formulaire pour envoyer des messages publicitaires, injurieux ou automatisés ;</li>
          <li>collecter massivement le contenu du site pour le republier ailleurs.</li>
        </ul>
        <p>
          La consultation du site par des robots d&apos;indexation et des assistants conversationnels
          est en revanche autorisée : les règles applicables figurent dans le fichier robots.txt.
        </p>
      </section>

      <section>
        <h2 style={H2_STYLE}>Disponibilité et responsabilité</h2>
        <p>
          Le site est fourni tel quel. Nous nous efforçons de maintenir les informations exactes et
          à jour, sans pouvoir le garantir en permanence : horaires, prestations et réalisations
          peuvent évoluer. Le site peut être momentanément indisponible pour maintenance ou pour une
          raison technique indépendante de notre volonté. Notre responsabilité ne saurait être
          engagée pour un dommage résultant de l&apos;utilisation du site ou de l&apos;impossibilité d&apos;y
          accéder.
        </p>
        <p>
          Les liens vers des sites extérieurs (Google, Instagram) sont proposés pour votre commodité.
          Leur contenu ne relève pas de notre responsabilité.
        </p>
      </section>

      <section>
        <h2 style={H2_STYLE}>Données personnelles</h2>
        <p>
          Le traitement des données transmises par le formulaire est décrit dans la{' '}
          <a href="/confidentialite">politique de confidentialité</a>. L&apos;absence de traceur est
          expliquée dans la <a href="/cookies">politique de cookies</a>.
        </p>
      </section>

      <section>
        <h2 style={H2_STYLE}>Droit applicable</h2>
        <p>
          Ces conditions sont soumises au droit français. En cas de différend, une solution amiable
          sera recherchée en priorité : écrivez à{' '}
          <a href={`mailto:${studio.email}`}>{studio.email}</a>. À défaut d&apos;accord, les tribunaux
          français sont compétents.
        </p>
      </section>
    </LegalPage>
  );
}
