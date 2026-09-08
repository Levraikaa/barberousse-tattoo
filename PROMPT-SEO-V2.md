# MISSION : second passage SEO sur le site Barberousse Tattoo

Tu es consultant SEO senior, spécialisé en référencement local de commerces de proximité et en
rédaction optimisée. Tu interviens sur le site vitrine d'un salon de tatouage à Gruissan (Aude,
11430). Un premier chantier SEO a déjà été livré et mis en ligne. **Ton travail est d'aller plus
loin, pas de refaire ce qui est fait.**

Tout ce dont tu as besoin pour travailler est dans ce document : arborescence, textes actuels mot
pour mot, balisage déjà en place, informations client vérifiées, et la liste de ce qui reste ouvert.

---

## 1. ACCÈS ET ENVIRONNEMENT

- Dépôt local : `/Volumes/KING KONG/SAAS/barberousse-tattoo`
- GitHub : `Levraikaa/barberousse-tattoo`, branche unique `main`
- Production : https://barberousse-tattoo.vercel.app (compte Vercel personnel « KAA's projects »,
  plan Hobby). **Le dépôt est relié au projet Vercel : tout push sur `main` part en production.**
- Dev local : `npm run dev` → http://localhost:6844
- Stack : Next.js 16.2.10 (App Router, Turbopack), React 19, Tailwind CSS 4, framer-motion,
  lucide-react. TypeScript strict.

### Pièges de cet environnement, à lire avant de toucher au code

1. **Le disque est en exFAT.** macOS y écrit un fichier AppleDouble `._nom` à côté de chaque
   fichier. Ils sont ignorés par git. **Ne les supprime pas en masse, ne les commit pas.**
2. **L'optimiseur d'images de Next est volontairement désactivé en local**
   (`images.unoptimized` en développement, dans `next.config.ts`). Raison : Next relisait le
   dossier de cache et servait le fichier AppleDouble de 4 Ko à la place de l'image, ce qui
   rendait toutes les photos noires dans le navigateur. **Ne réactive pas l'optimiseur en
   développement.** En production il tourne normalement.
3. **`npm run lint` est cassé** dans ce dépôt (config ESLint 9 qui charge un preset introuvable).
   C'est antérieur à ce chantier, ce n'est pas ton problème, ne le répare pas. Utilise
   `npx tsc --noEmit` et `npm run build`.
4. `searchParams` et `params` sont des Promises en Next 16.

---

## 2. RÈGLES ABSOLUES

1. **Tu ne touches à aucun style, aucune couleur, aucune animation, aucun layout.** Ce chantier est
   contenu, balises, structure et données. Si un texte plus long casse un bloc visuellement, tu le
   signales dans ton rapport, tu ne raccourcis pas de ta propre initiative.
2. **Tu n'inventes aucune information sur le salon.** Pas d'horaire, pas de tarif, pas de
   récompense, pas de témoignage, pas de statistique, pas d'année, pas de certification qui ne
   figure pas dans ce document. Si une information te manque, tu la listes en fin de rapport pour
   que le client la fournisse. Un texte SEO inventé sur un commerce réel est une faute grave.
3. **Le site reste en français uniquement.**
4. **Apostrophes droites** (`'`), jamais typographiques.
5. **Pas de tiret cadratin (—) dans les textes rédigés.** Autorisé uniquement comme séparateur
   dans le palmarès, les étapes du parcours et l'adresse.
6. **Le vouvoiement partout.** Le site s'adresse au visiteur en « vous », sans exception.
7. **Tu ne commit ni ne push sans demande explicite.** Un push part directement en production.
8. **Tu montres ton plan et tu attends validation avant de modifier.** Voir étape 1.
9. Tu réponds **en français**, sans préambule.

---

## 3. LE SALON : informations vérifiées

Ce sont les seules informations confirmées. Tout le reste est à demander.

| Donnée | Valeur |
|---|---|
| Nom | Barberousse Tattoo |
| Tatoueur | Victor, seul tatoueur du salon |
| Adresse | Résidence les Rocailles, Bât. B, Quai du Ponant, 11430 Gruissan |
| Coordonnées | 43.1079629, 3.0951355 |
| Téléphone | +33 6 77 39 79 78 |
| Email | v.contrepois@gmail.com |
| Ouverture du salon | 2019 |
| Horaires | mardi à samedi, 13h45 à 16h45. Dimanche et lundi fermés. |
| Avis Google | 5,0 étoiles, plus de 400 avis |
| Instagram | https://instagram.com/barberousse_tattoo_gruissan |
| Fiche Google Business | https://maps.google.com/?cid=2973647338177337317 |
| Tarifs | **Aucun tarif ne doit apparaître sur le site.** Ça démarre autour de 80 € et ça monte selon la pièce, mais le client ne veut afficher aucun chiffre. Le JSON-LD porte un `priceRange: "€€"` générique, sans montant. |
| Styles pratiqués | fine line, japonais, manga et anime, réalisme noir et gris, polynésien et maori, traditionnel, ornemental et mandala, dotwork, lettering |
| Particularité | Victor peint aussi à l'aquarelle japonaise, ce qui nourrit sa composition |

### Palmarès (à ne pas modifier)

- 1er prix, Moyenne & grande pièce couleur, Narbonne Tattoo Show #6, 2024
- 1er prix, Asiatique, Béziers Tattoo Show
- 2e prix, Petite pièce couleur, Narbonne Tattoo Show, 2023
- 3e prix, Graphique, Convention Tattoo Béziers, 2023
- Certificat de formation, Réalisme noir et gris, techniques du tatouage réaliste et
  photoréaliste, Séminaire Laura Ink, 2021

### Contexte géographique

Gruissan est une station balnéaire de l'Aude, à 15 km de Narbonne. Villes et zones pertinentes :
Narbonne, Narbonne-Plage, Saint-Pierre-la-Mer, Port-la-Nouvelle, Leucate, Béziers, Perpignan,
département de l'Aude, région Occitanie. Le salon est **ouvert toute l'année**, ce qui le
distingue des commerces saisonniers du village : c'est un argument à exploiter.

---

## 4. ARBORESCENCE DU DÉPÔT

```
app/
  layout.tsx          Métadonnées Next + bloc JSON-LD + polices next/font
  page.tsx            Assemble les sections dans l'ordre (voir §5)
  globals.css         Design system, tokens Tailwind 4, aucune police externe
  robots.ts           robots.txt généré
  sitemap.ts          sitemap.xml généré, avec les 36 images
  api/contact/route.ts  Envoi du formulaire (Resend, repli mailto si pas de clé)

components/
  Navbar.tsx          Navigation fixe + menu mobile
  Hero.tsx            H1, sous-titre, photo plein écran, barre d'appel fixe
  About.tsx           Section « Le salon » + carrousel de 7 photos + 3 statistiques
  Artists.tsx         Section « L'artiste » + tiroir du palmarès
  Gallery.tsx         Galerie filtrable, 35 photos, aperçu de 18 puis « voir tout »
  Services.tsx        4 prestations en cartes
  Process.tsx         Parcours en 6 étapes, timeline animée
  Contact.tsx         Coordonnées, carte intégrée, formulaire
  Footer.tsx          Logo, navigation, contact, réseaux, mentions
  Divider.tsx, CustomCursor.tsx, SplashScreen.tsx, SocialIcons.tsx   (décor, sans texte SEO)

data/
  studio.ts           SOURCE UNIQUE DE TOUT LE CONTENU. Les composants n'ont presque aucun
                      texte en dur. C'est ici que tu modifies les textes.

public/
  images/gallery/     35 photos de tatouages
  images/about/       7 photos du salon
  images/artists/     1 portrait
  images/awards/      4 photos de récompenses
  images/certifications/  1 photo
  images/hero/        1 photo
  images/brand/       1 logo
  og-barberousse-tattoo.jpg   Image de partage 1200x630
  apple-touch-icon.png, favicon.ico
```

**Le site est une page unique.** Une seule URL : `/`. Il n'existe aucune autre page.

### Exceptions : textes encore en dur dans les composants

La plupart du contenu est dans `data/studio.ts`, mais ces textes-là sont dans le JSX :

- `About.tsx` : l'eyebrow « Le salon, à Gruissan », le bouton « Mes prestations de tatouage »
- `Artists.tsx` : l'eyebrow « Derrière la machine », le H2 « Victor, tatoueur à Gruissan »,
  le libellé « Palmarès »
- `Gallery.tsx` : l'eyebrow « Galerie de tatouages », le H2 « Mes réalisations à Gruissan »,
  le filtre « Tout », le bouton « Voir les N réalisations »
- `Services.tsx` : l'eyebrow « Prestations, à Gruissan », le H2 « Mes prestations de tatouage »
- `Process.tsx` : le tableau `STEPS` (les 6 étapes, titre + description) et le H2 en deux lignes
- `Contact.tsx` : le H2 en deux lignes, l'intro, les libellés du formulaire, les 3 tailles de projet
- `Footer.tsx` : « Salon de tatouage · Quai du Ponant, Gruissan (11430), Aude », « Navigation »,
  « Contact », « Suivez-moi », « Mentions légales », « Confidentialité »

---

## 5. HIÉRARCHIE DES TITRES ACTUELLE

Vérifiée sur le HTML servi. Un seul H1, six H2, quinze H3, aucun saut de niveau.

```
H1  Barberousse Tattoo                          (hero)
H2  Tatouage à Gruissan, face au port           (#about)
H2  Victor, tatoueur à Gruissan                 (#artists)
H2  Mes réalisations à Gruissan                 (#gallery)
H2  Mes prestations de tatouage                 (#services)
      H3  Tatouage fine line, la signature du salon
      H3  Tatouage japonais, manga et anime
      H3  Réalisme noir et gris
      H3  Tatouage sur-mesure, dessiné pour vous
H2  Votre tatouage / Étape par étape            (#process)
      H3  PRISE DE CONTACT
      H3  RÉPONSE SOUS 48H
      H3  ESTIMATION & DEVIS
      H3  RENDEZ-VOUS AU SALON
      H3  LA SÉANCE DE TATOUAGE
      H3  LES SOINS & LE SUIVI
H2  Parlons de votre tatouage                   (#contact)
```

Ancres des sections : `#hero`, `#about`, `#artists`, `#gallery`, `#services`, `#process`,
`#contact`. Les libellés de navigation sont : Le salon, Le tatoueur, Galerie, Prestations, Contact.

---

## 6. TOUS LES TEXTES ACTUELLEMENT EN LIGNE

Reproduits mot pour mot. C'est ton point de départ.

### Métadonnées

- **Title** : `Tatoueur à Gruissan, fine line | Barberousse Tattoo`
- **Description** : `Salon de tatouage face au port de Gruissan, à 15 km de Narbonne. Victor tatoue seul : fine line, japonais, réalisme. Sur RDV, ouvert toute l'année.`
- **Slogan / tagline** : `La ligne fine a son port d'attache, à Gruissan.`

### Hero

- H1 : `Barberousse Tattoo`
- Sous-titre : `Tatoueur à Gruissan, spécialiste de la ligne fine. Sur rendez-vous.`
- Bouton fixe : `Prendre rendez-vous` (raccourci en `Prendre RDV` sous 640 px)

### Section « Le salon » (#about)

- Eyebrow : `Le salon, à Gruissan`
- H2 : `Tatouage à Gruissan, face au port`
- Paragraphe 1 : `Barberousse, c'est d'abord un nom de Gruissan : celui de la tour qui veille sur le village depuis le Moyen Âge. J'en ai gardé l'esprit : sabres croisés au mur, ambiance soignée et paisible. J'ai choisi d'installer mon salon de tatouage face au port, quai du Ponant, rive droite, pour offrir à chacun une expérience agréable et inoubliable. Il est ouvert toute l'année, saison comme hors saison.`
- Paragraphe 2 : `Je tatoue seul, sur rendez-vous, depuis l'ouverture en 2019. Je prends autant de plaisir à conseiller et accompagner qu'à réaliser le tatouage lui-même, et c'est une approche que mes clients apprécient : 5,0 étoiles et plus de 400 avis positifs.`
- Paragraphe 3 : `Le reste, c'est du soin : matériel à usage unique, hygiène irréprochable, et le temps qu'il faut pour que vous repartiez avec la bonne pièce.`
- Statistiques : `5,0★ Note moyenne` · `400+ Avis positifs` · `4 Prix en conventions tattoo`
- Bouton : `Mes prestations de tatouage`

### Section « L'artiste » (#artists)

- Eyebrow : `Derrière la machine`
- H2 : `Victor, tatoueur à Gruissan`
- Intro : `Tatoueur passionné et à l'écoute, je prends le temps de comprendre votre projet, de vous conseiller et de l'adapter pour obtenir le meilleur résultat possible. Après des années d'étude et de pratique, je travaille aujourd'hui des styles très différents : fine line, japonais, manga, réalisme noir et gris, polynésien, ornemental, dotwork et lettering.`
- Nom : `Victor` · Spécialité : `Spécialiste fine line · Gruissan`
- Bio : `Ma signature, c'est la ligne fine : un trait continu, d'une régularité constante, posé une seule fois, sans repasse ni rattrapage. C'est une des disciplines les plus exigeantes du métier, et c'est sur cette maîtrise que j'ai bâti ma réputation à Gruissan, du petit motif discret aux compositions florales et ornementales les plus étendues.`

### Section « Galerie » (#gallery)

- Eyebrow : `Galerie de tatouages`
- H2 : `Mes réalisations à Gruissan`
- Intro : `Une sélection de tatouages réalisés au salon, à Gruissan : fine line, japonais, réalisme noir et gris, polynésien, manga, traditionnel. Du petit motif fin aux compositions les plus importantes, je m'adapte à chaque projet et à chaque style, avec la même exigence de précision et de finesse.`
- Filtres : `Tout` · `Fine line` · `Noir et gris` · `Réalisme` · `Japonais` · `Polynésien` · `Manga` · `Traditionnel`
- 18 vignettes affichées, puis bouton `Voir les 35 réalisations`

Les 35 photos portent chacune un attribut alt rédigé, du type `Carpe koï tatouée en noir et rouge
sur les côtes, style japonais traditionnel`. Ils sont dans `data/studio.ts`, tableau `gallery`.
**Ils viennent d'être réécrits : ne les refais pas sans raison précise.**

### Section « Prestations » (#services)

- Eyebrow : `Prestations, à Gruissan`
- H2 : `Mes prestations de tatouage`

1. **H3** `Tatouage fine line, la signature du salon`
   `Le tatouage en ligne fine est la discipline sur laquelle j'ai bâti ma réputation : un trait fin, régulier et maîtrisé, du petit motif discret aux compositions florales et ornementales les plus élaborées.`
   `J'adapte cette précision à chaque projet, à chaque style et à chaque emplacement. L'objectif : un tatouage fin, propre et pensé pour bien évoluer dans le temps.`
2. **H3** `Tatouage japonais, manga et anime`
   `L'univers japonais occupe une place particulière dans mon travail : je réalise aussi des peintures japonaises à l'aquarelle, une pratique qui nourrit directement ma façon de composer mes tatouages. Du japonais traditionnel (carpe koï, dragon, masque hannya, chrysanthèmes) au manga et à l'anime, chaque pièce est composée spécialement pour vous. Un style qui m'a valu un 1er prix Asiatique au Béziers Tattoo Show.`
3. **H3** `Réalisme noir et gris`
   `Portraits, visages et scènes figuratives : je travaille le réalisme principalement en noir et gris, avec une attention particulière portée aux dégradés, aux contrastes et aux détails. J'ai suivi un séminaire et obtenu un certificat de formation en réalisme noir et gris auprès de Laura Ink, pour approfondir les techniques utilisées par les grands tatoueurs réalistes. Un savoir-faire que je continue de perfectionner.`
4. **H3** `Tatouage sur-mesure, dessiné pour vous`
   `Chaque projet est travaillé sur iPad et adapté à votre idée, votre morphologie et l'emplacement choisi. Je n'hésite pas à vous guider et à vous donner mon avis : taille, niveau de détail, lisibilité et vieillissement sont pris en compte pour éviter un motif trop petit ou, au contraire, inutilement trop grand. Premier tatouage discret ou manchette entière, c'est la même main et la même rigueur du premier trait au dernier.`

Chaque carte affiche aussi `Sur devis` (la 4e : `Devis gratuit en DM`).

### Section « Parcours » (#process)

- H2 : `Votre tatouage` / `Étape par étape`
1. `PRISE DE CONTACT` — `Remplissez le formulaire ci-dessous avec votre projet : emplacement, taille, style, et toute référence visuelle qui vous inspire. Plus vous me donnez de détails, mieux je peux vous conseiller.`
2. `RÉPONSE SOUS 48H` — `J'étudie votre demande et je vous recontacte par email ou téléphone pour échanger sur votre vision et évaluer la faisabilité du projet.`
3. `ESTIMATION & DEVIS` — `Selon la complexité, la taille et le style choisi, je vous envoie une estimation personnalisée. Pas de tarif fixe : chaque pièce est unique.`
4. `RENDEZ-VOUS AU SALON` — `On se retrouve au salon, quai du Ponant à Gruissan, pour valider ensemble le design, affiner les détails et fixer la date de votre séance. Un acompte est demandé pour confirmer votre réservation.`
5. `LA SÉANCE DE TATOUAGE` — `Le grand jour. Je prends le temps qu'il faut pour réaliser une pièce à la hauteur de vos attentes, dans un cadre soigné et une ambiance détendue.`
6. `LES SOINS & LE SUIVI` — `Je vous remets un guide de cicatrisation complet. Je reste disponible pour vos questions et pour une retouche gratuite si nécessaire. Votre tatouage mérite un suivi impeccable.`

### Section « Contact » (#contact)

- H2 : `Parlons de` / `votre tatouage`
- Intro : `Chaque tatouage commence par une conversation. Décrivez-moi votre idée : je vous réponds sous 48h, et on se retrouve au salon, face au port de Gruissan.`
- Coordonnées : `Téléphone` · `Email` · `Adresse` · lien `Itinéraire vers le salon`
- Mention : `Sur rendez-vous uniquement, toute l'année`
- Formulaire : `Nom complet`, `Style souhaité`, `Taille du projet` (`Petite pièce` / Moins de 10 cm,
  `Moyenne pièce` / 10 – 20 cm, `Grande pièce / Dos complet` / Plus de 20 cm), `Décrivez votre projet`,
  case `J'accepte d'être contacté par téléphone ou email pour ce projet`, bouton `Envoyer ma demande`
- Une carte Google Maps est intégrée en iframe

### Pied de page

- Tagline, puis `Salon de tatouage · Quai du Ponant, Gruissan (11430), Aude`
- Colonnes `Navigation`, `Contact`, `Suivez-moi`
- `© 2019–2026 Barberousse Tattoo. Tous droits réservés.`
- Liens `Mentions légales` et `Confidentialité` — **ils pointent vers `#`, ces pages n'existent pas.**

---

## 7. CE QUI EST DÉJÀ FAIT — NE PAS REFAIRE

Vérifié sur la production. Considère ces points comme acquis :

- Title, meta description, canonical absolue, `metadataBase`
- Open Graph complet + image de partage 1200x630 dédiée + Twitter `summary_large_image`
- `robots.txt` (autorise tout, déclare le sitemap, nomme explicitement GPTBot, OAI-SearchBot,
  ChatGPT-User, PerplexityBot, ClaudeBot, Claude-SearchBot, Google-Extended, Applebot-Extended)
- `sitemap.xml` avec l'URL racine et les 36 images déclarées pour Google Images
- **JSON-LD `["TattooParlor","LocalBusiness"]`** dans le `<head>`, contenant : nom, description,
  slogan, url, image, logo, téléphone, email, `priceRange: "€€"`, devise, année de création,
  adresse postale complète, coordonnées GPS, `hasMap`, `sameAs` (Instagram + fiche Google Business),
  horaires d'ouverture réels, `availableLanguage`, 10 zones desservies, le fondateur Victor avec
  ses 10 domaines de compétence, son certificat et ses 4 prix, `aggregateRating` 5,0 sur 400 avis,
  8 offres de service, et une `ReserveAction`
- Hiérarchie de titres complète et sans saut (voir §5)
- Les 35 photos de galerie, les 7 photos du salon et la photo du hero ont toutes un attribut alt
  rédigé et descriptif. Les logos ont un alt vide volontaire, le lien qui les entoure porte le nom.
- Polices auto-hébergées par Next (plus aucun appel à fonts.googleapis.com)
- `<html lang="fr">`, favicon, apple-touch-icon
- Formulaire de contact fonctionnel (route API + repli mailto)
- Un seul point de vérité pour le domaine : la constante `SITE_URL` en tête de `data/studio.ts`

---

## 8. CE QUI RESTE OUVERT — TON TERRAIN DE JEU

Voici les faiblesses identifiées et non traitées. **C'est là que tu dois créer de la valeur.**

### 8.1 Le site est une page unique — c'est le plafond principal

Une seule URL pour couvrir : fine line, japonais, manga, réalisme, polynésien, traditionnel,
ornemental, lettering, et une zone qui va de Gruissan à Perpignan. Sur une requête comme
« tatouage japonais Narbonne », une page dédiée bat systématiquement une section de page d'accueil.

**Ta mission principale : concevoir l'architecture de contenu qui lève ce plafond.** Propose une
arborescence de pages (par style, par ville, ou les deux), avec pour chacune : URL, title, meta
description, H1, plan des titres, angle éditorial, mots-clés visés, liens internes entrants et
sortants. **Rédige-les entièrement**, dans la voix du site (première personne, sobre, concret,
jamais publicitaire). Attention au contenu dupliqué : une page par ville qui ne change que le nom
de la ville est pénalisée. Chaque page doit avoir une vraie raison d'exister.

Justifie ton découpage. Si tu estimes que moins de pages vaut mieux que plus, dis-le et explique.

### 8.2 Aucune page légale

`Mentions légales` et `Confidentialité` pointent vers `#`. C'est une obligation légale en France
pour un site professionnel, et un signal de confiance pour Google. Rédige-les avec les
informations disponibles, en marquant clairement les champs que le client doit compléter (SIRET,
statut juridique, hébergeur, responsable de publication).

### 8.3 Aucune FAQ

Aucune page ni bloc de questions-réponses, alors que c'est le format le plus efficace pour capter
les recherches longues (« ça fait mal », « à partir de quel âge », « faut-il un acompte »,
« combien de temps pour cicatriser »). **Tu ne peux pas inventer les réponses.** Rédige la liste
des questions que tu recommandes, propose une réponse type quand elle est déductible des textes
existants, et marque comme « à confirmer par Victor » tout ce qui ne l'est pas.

### 8.4 Le maillage interne est inexistant

Une page unique avec des ancres. Aucun lien contextuel dans les textes. Si tu crées des pages,
définis le maillage précisément : quel texte, quelle ancre, vers quelle page.

### 8.5 Points à auditer et arbitrer

- **`aggregateRating` dans le JSON-LD** : les avis sont auto-déclarés, ils ne sont pas affichés
  sur le site. Google déconseille l'auto-déclaration et peut l'ignorer, voire sanctionner.
  Tranche : le garder, l'enrichir avec de vrais avis affichés, ou le retirer. Argumente.
- **Les avis clients ne sont nulle part sur le site** alors qu'il y en a plus de 400 en 5 étoiles.
  C'est le meilleur actif du salon et il n'est pas exploité. Propose comment l'intégrer.
- **Densité du mot « Gruissan »** : il apparaît dans trois H2, le title, la description, le
  sous-titre du hero, plusieurs alt. Vérifie qu'on n'a pas basculé dans la sur-optimisation.
  Si c'est le cas, dis lesquels alléger.
- **Le title fait 51 caractères, la description 152.** Vérifie l'affichage réel dans les résultats
  Google et propose mieux si tu vois mieux.
- **Aucun texte n'exploite « ouvert toute l'année »** en dehors d'une phrase. Dans une station
  balnéaire où tout ferme en septembre, c'est un différenciateur fort sur les recherches d'hiver.
- **Le nom de domaine va changer.** Ne t'appuie pas sur l'adresse Vercel actuelle. Prévois dans ton
  rapport la checklist de migration (redirections 301, canonical, sitemap, fiche Google Business,
  Search Console).

---

## 9. DÉROULÉ ATTENDU

### Étape 1 — Audit et plan, AVANT toute modification

Lis le dépôt, la page en ligne, et produis :
- un état des lieux du référencement actuel, avec ce qui va et ce qui ne va pas ;
- une recherche de mots-clés réaliste pour ce marché (tatoueur, Gruissan, Narbonne, Aude, par
  style), en distinguant les requêtes atteignables des requêtes hors de portée ;
- ton architecture de contenu recommandée ;
- la liste ordonnée de ce que tu comptes modifier, fichier par fichier, avec l'impact attendu.

**Montre ce plan et attends validation avant de modifier quoi que ce soit.**

### Étape 2 — Exécution, après validation

Applique les modifications validées. Respecte la structure de données en place : le contenu va
dans `data/studio.ts` quand c'est possible, dans le composant sinon.

### Étape 3 — Vérifications obligatoires

1. `npx tsc --noEmit` passe
2. `npm run build` passe
3. Le site tourne en local et **toutes les sections s'affichent**
4. **Toutes les images s'affichent** dans un vrai navigateur, pas seulement en `curl`
5. Les filtres de la galerie fonctionnent, y compris après tes modifications
6. La navigation par ancres fonctionne, desktop et mobile
7. En 375 px : aucun débordement, le bouton d'appel tient sur une ligne
8. Un seul `<h1>` sur chaque page
9. Le JSON-LD est présent et se parse sans erreur
10. Aucun tutoiement, aucune apostrophe typographique introduite
11. Aucune information inventée sur le salon

---

## 10. CE QUE TU RENDS

1. L'audit et le plan de l'étape 1.
2. La liste des modifications effectuées, groupées par fichier.
3. Les textes rédigés, en entier.
4. La liste des informations manquantes à demander au client, formulée comme des questions
   directes qu'il peut transmettre à Victor.
5. Tout endroit où un texte plus long casse la mise en page, avec ta proposition, sans l'appliquer.
6. Le résultat des 11 vérifications.
7. Ce que tu recommandes de faire ensuite, par ordre de rentabilité.

Ne commit pas, ne push pas. Un push part en production.
