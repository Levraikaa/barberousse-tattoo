# Barberousse Tattoo

Site vitrine du salon de tatouage **Barberousse Tattoo**, sur le port de Gruissan.
One-page Next.js, entièrement piloté par un seul fichier de contenu.

En ligne : https://barberousse-tattoo.vercel.app

## Stack

| Paquet | Version |
|---|---|
| `next` | `16.2.10` (App Router + Turbopack) |
| `react` / `react-dom` | `19.2.4` |
| `tailwindcss` | `^4` (config CSS-first, pas de `tailwind.config`) |
| `framer-motion` | `^12` |
| `lucide-react` | `^1.24` |
| `typescript` | `^5` (strict) |

## Démarrer

```bash
npm install
npm run dev      # http://localhost:6844
npm run build    # build de production
```

## Structure

```
app/
  layout.tsx       Métadonnées, splash, curseur custom, thème
  page.tsx         Assemblage des sections
  globals.css      Design system : tokens, grain, ken burns, polices
components/
  Navbar.tsx       Nav fixe, se rétracte au scroll, menu mobile
  Hero.tsx         Plein écran, nom éclaté ligne par ligne + barre CTA fixe
  About.tsx        Récit du salon, chiffres clés, carrousel de photos
  Artists.tsx      Cartes tatoueur + tiroir latéral du palmarès
  Gallery.tsx      Mosaïque filtrable par style
  Services.tsx     Les 4 prestations
  Process.tsx      Timeline des 6 étapes, ligne qui se remplit au scroll
  Contact.tsx      Coordonnées, carte Google, formulaire de demande
  Footer.tsx       Navigation, contact, réseaux
  Divider.tsx      Séparateur animé entre les sections
  CustomCursor.tsx Curseur rond qui suit la souris (souris uniquement)
  SplashScreen.tsx Écran d'ouverture, une fois par session
data/
  studio.ts        TOUT le contenu du site : textes, photos, prix, coordonnées
public/images/     Photos (hero, salon, artiste, galerie, prix)
```

## Modifier le contenu

Presque tout se change dans **`data/studio.ts`** — sans toucher aux composants :
textes, coordonnées, réseaux, couleur d'accent (`accentColor`), photos du salon,
palmarès, prestations, styles et pièces de la galerie.

Ajouter une pièce à la galerie : déposer l'image dans `public/images/gallery/`,
puis ajouter une entrée `{ src, alt, style }` dans `gallery`. Le `style` doit
faire partie de `galleryStyles` pour apparaître dans les filtres.

## À savoir

- Le **formulaire de contact n'envoie rien** : il affiche l'écran de confirmation
  côté client, sans backend ni email. À brancher (Resend, Formspree, route API…)
  pour être exploitable.
- Le **filtre de la galerie** met bien à jour son état, mais les vignettes
  masquées restent affichées : les enfants d'`AnimatePresence` portent un
  `whileInView` qui neutralise leur animation de sortie. Retirer le `whileInView`
  des vignettes (ou le remplacer par `animate`) corrige le comportement.
- Les liens « Mentions légales » et « Confidentialité » du footer pointent sur `#`.
