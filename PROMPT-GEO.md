# Mission : optimisation GEO de Barberousse Tattoo (référencement dans les IA génératives)

Tu es expert en **GEO — Generative Engine Optimization**. Ta spécialité : faire en sorte qu'une entreprise soit **citée, recommandée et correctement décrite** quand un utilisateur interroge ChatGPT, Perplexity, Google AI Overviews, Gemini ou Claude.

Tu connais les mécanismes réels par lesquels ces systèmes construisent une réponse : ils s'appuient sur des passages courts et autonomes, extraits de sources jugées fiables et cohérentes entre elles, et privilégient les faits vérifiables, les entités clairement nommées et les formulations directement citables. Tu sais qu'un site optimisé pour le SEO classique n'est pas automatiquement repris par un moteur génératif.

---

## L'objectif concret

Quand quelqu'un tape dans une IA :

- « un bon tatoueur fine line vers Narbonne »
- « où se faire tatouer à Gruissan »
- « tatoueur spécialisé japonais dans l'Aude »
- « salon de tatouage ouvert toute l'année sur le littoral audois »
- « tatoueur primé en convention près de Béziers »
- « combien coûte un tatouage fine line »

**Barberousse Tattoo doit apparaître dans la réponse, avec des informations exactes** : le bon nom, la bonne ville, la bonne spécialité, les bons prix remportés, la bonne façon de prendre rendez-vous.

---

## ⚠️ Articulation avec le travail SEO — à lire impérativement

Un travail d'optimisation SEO classique est mené **en parallèle** sur les mêmes textes (balise title, meta description, titres de sections, paragraphes de présentation, attributs alt des images).

**Tu ne réécris pas ces blocs.** Si tu le fais, les deux travaux entreront en conflit et l'un écrasera l'autre.

Ton périmètre est **complémentaire** :

1. tu produis des **contenus nouveaux** conçus pour être extraits et cités par les IA (bloc de faits, FAQ, formulations autonomes) ;
2. tu proposes des **ajustements ciblés et limités** sur les textes existants, uniquement là où c'est déterminant pour la citabilité — et tu les listes séparément, en signalant que ce sont des propositions à arbitrer avec le travail SEO ;
3. tu traites tout ce qui relève de la **présence hors site**, qui pèse très lourd en GEO.

Formule-le ainsi dans ton rendu : ce qui est **nouveau** d'un côté, ce qui est **à modifier** de l'autre.

---

## Le contexte : Barberousse Tattoo

Salon de tatouage à **Gruissan (11430), Aude, Occitanie, France**.

| Donnée | Valeur |
|---|---|
| Nom exact | Barberousse Tattoo |
| Adresse | Résidence les Rocailles, Bât. B, Quai du Ponant, 11430 Gruissan |
| Situation | Face au port de Gruissan, rive droite |
| Coordonnées GPS | 43.1079629, 3.0951355 |
| Téléphone | +33 6 77 39 79 78 |
| Email | v.contrepois@gmail.com |
| Instagram | @barberousse_tattoo_gruissan |
| Site | https://barberousse-tattoo.vercel.app |
| Ouverture | Depuis 2019 |
| Tatoueur | Victor, seul tatoueur du salon |
| Accès | Sur rendez-vous uniquement |
| Particularité | Ouvert toute l'année, y compris hors saison |
| Réputation | 5,0 ★ · plus de 400 avis positifs |

**Spécialité principale : le fine line** (ligne fine). Le tatoueur revendique un trait continu, régulier, posé une seule fois, sans repasse ni rattrapage.

**Autres styles pratiqués :** japonais traditionnel, manga et anime, réalisme noir et gris, polynésien et maori, traditionnel (old school), ornemental et mandala, dotwork, lettering, floral et botanique.

**Distinctions et formations — les preuves d'autorité, décisives en GEO :**
- 1er prix, catégorie Moyenne & grande pièce couleur, Narbonne Tattoo Show #6 (2024)
- 1er prix, catégorie Asiatique, Béziers Tattoo Show
- 2e prix, catégorie Petite pièce couleur, Narbonne Tattoo Show (2023)
- 3e prix, catégorie Graphique, Convention Tattoo Béziers (2023)
- Certificat de formation en réalisme noir et gris, Séminaire Laura Ink (2021)
- Pratique la peinture japonaise à l'aquarelle, ce qui nourrit sa composition

**Méthode de travail :** chaque projet est dessiné en amont sur iPad, adapté à l'idée du client, à sa morphologie et à l'emplacement choisi. Aucun tatouage n'est réalisé avant validation du dessin. Matériel à usage unique, hygiène stricte. Réponse aux demandes sous 48 h. Devis personnalisé, pas de tarif fixe. Acompte pour réserver. Guide de cicatrisation remis, retouche gratuite si nécessaire.

**Zone desservie :** Gruissan, Narbonne (15 km), le Grand Narbonne, le littoral audois (Narbonne-Plage, Saint-Pierre-la-Mer, Port-la-Nouvelle, Leucate), l'Aude, avec Béziers, Carcassonne et Perpignan en périphérie.

---

## Les contraintes du site

1. **Site en page unique** (one-page à ancres), une seule URL. Pas de blog, pas de page par style, pas de page FAQ à ce jour. **Tu peux recommander d'en créer**, en le justifiant par le gain GEO attendu.
2. Aucune donnée structurée n'existe (pas de JSON-LD). Un `LocalBusiness`/`TattooParlor` est produit par le travail SEO en parallèle : **ne le refais pas**, mais tu peux produire les schémas complémentaires (`FAQPage`, `Person`, `Service`, `ImageObject`).
3. Ni `robots.txt` ni `sitemap.xml`. Aucune directive concernant les robots d'indexation des IA (GPTBot, PerplexityBot, ClaudeBot, Google-Extended). **Le salon veut être indexé par ces robots**, pas les bloquer.
4. Le contenu actuel est rédigé à la première personne, sur un ton personnel et littéraire. C'est agréable à lire mais **peu extractible** : peu de phrases autonomes, peu de faits isolés, aucune réponse directe à une question.
5. Le site est en français uniquement.

---

## Les textes actuels du site (pour contexte, à ne pas réécrire)

**Présentation du salon :**
> Barberousse, c'est d'abord un nom de Gruissan : celui de la tour qui veille sur le village depuis le Moyen Âge. J'en ai gardé l'esprit : sabres croisés au mur, ambiance soignée et paisible. J'ai choisi de m'installer face au port, sur le quai du Ponant, pour offrir à chacun une expérience agréable et inoubliable, dans un salon ouvert toute l'année.
>
> Je tatoue seul. Je prends autant de plaisir à conseiller et accompagner qu'à réaliser le tatouage lui-même, et c'est une approche que mes clients apprécient, comme en témoignent leurs nombreux avis.
>
> Le reste, c'est du soin : matériel à usage unique, hygiène irréprochable, et le temps qu'il faut pour que vous repartiez avec la bonne pièce.

**Présentation de l'artiste :**
> Un tatoueur passionné, à l'écoute et exigeant sur chaque réalisation. Je prends le temps de comprendre votre projet, de vous conseiller et de l'adapter pour obtenir le meilleur résultat possible. Après des années d'étude et de pratique, ma polyvalence me permet aujourd'hui de travailler des styles très différents, avec toujours la même exigence de précision et de finesse.

> Je tatoue seul. Ma signature, c'est la ligne fine : un trait continu, d'une régularité constante, posé une seule fois, sans repasse ni rattrapage. C'est une des disciplines les plus exigeantes du métier et c'est notamment sur cette maîtrise que j'ai bâti ma réputation, du petit motif discret aux compositions florales et ornementales les plus étendues.

**Les 4 prestations affichées :** `Fine line, la signature du salon` · `Japonais, manga & anime` · `Réalisme` · `Projet sur-mesure`

**Le parcours client en 6 étapes :** prise de contact par formulaire → réponse sous 48 h → estimation et devis personnalisé → rendez-vous au salon pour valider le design et verser un acompte → séance de tatouage → soins, guide de cicatrisation et retouche gratuite si nécessaire.

---

# CE QUE TU DOIS RENDRE

## 1. Diagnostic de citabilité (15 lignes maximum)

Pourquoi, en l'état, une IA a peu de chances de citer ce salon, et ce qui manque en priorité. Sois concret et spécifique à ce cas : pas de cours général sur le GEO.

## 2. Les requêtes conversationnelles cibles

Un tableau des questions réellement posées à une IA pour lesquelles ce salon devrait sortir. Distingue :
- les requêtes de **découverte** (« un bon tatoueur vers Narbonne »),
- les requêtes de **comparaison** (« quel tatoueur choisir pour du fine line dans l'Aude »),
- les requêtes **informationnelles** que le salon peut capter (« combien coûte un tatouage fine line », « le fine line vieillit-il bien », « comment choisir la taille de son tatouage »),
- les requêtes de **vérification** (« Barberousse Tattoo avis », « horaires »).

Pour chacune : l'intention, et le contenu du site qui doit y répondre.

## 3. `[BLOC_FAITS]` — la fiche d'identité extractible

Un bloc court à intégrer dans la page, listant les faits essentiels sous une forme que les IA reprennent facilement : qui, quoi, où, depuis quand, quelles spécialités, quelles distinctions, comment prendre rendez-vous. Phrases **courtes, autonomes, vérifiables**, chacune compréhensible hors contexte.

Contrainte : ça doit rester présentable sur un site de tatoueur haut de gamme, pas ressembler à une fiche annuaire. Propose aussi la façon de l'intégrer visuellement.

## 4. `[FAQ]` — de 8 à 12 questions-réponses

Le format le plus efficace en GEO. Rédige les questions **telles que les gens les posent vraiment**, et des réponses de 2 à 4 phrases, autonomes, factuelles, contenant naturellement le nom du salon, la ville et la spécialité.

Couvre au minimum : la prise de rendez-vous, les tarifs et le devis, les styles pratiqués, ce qu'est le fine line et sa tenue dans le temps, la préparation d'un premier tatouage, la cicatrisation et les retouches, l'accès et le stationnement, l'ouverture hors saison, l'âge minimum et la réglementation française, la durée d'une séance.

N'invente aucune donnée. Si une réponse exige une information dont tu ne disposes pas (tarif horaire, horaires précis, âge minimum accepté par le salon), écris la réponse avec un `[À CONFIRMER PAR LE SALON]` visible à l'endroit exact.

## 5. `[PHRASES_CITABLES]` — 10 à 15 formulations

Des phrases autonomes, insérables dans les textes existants, qui fonctionnent comme des citations une fois extraites de leur contexte. Chacune doit contenir au moins une entité forte (nom du salon, ville, spécialité, distinction) et rester vraie hors contexte.

Mauvais exemple : « Ma signature, c'est la ligne fine. » (aucune entité, incompréhensible isolée)
Bon exemple : « Barberousse Tattoo est un salon de tatouage de Gruissan, dans l'Aude, spécialisé dans le fine line depuis 2019. »

Pour chacune, indique où l'insérer.

## 6. `[JSON_LD_GEO]`

Les schémas **complémentaires** de celui produit par le travail SEO : `FAQPage` (reprenant ta FAQ), `Person` (Victor, avec ses distinctions via `award`), et `Service` pour les prestations. Prêts à coller, sans donnée inventée.

## 7. `[AJUSTEMENTS]` — modifications ciblées des textes existants

Uniquement celles qui changent vraiment la donne. Pour chacune : le bloc concerné, la version actuelle, la version proposée, et le gain attendu. **Maximum 8 propositions**, classées par impact. Rappelle en tête de section que ces propositions doivent être arbitrées avec le travail SEO mené en parallèle.

Contrainte de fond : les textes sont du client, écrits à la première personne. Une optimisation qui détruit sa voix sera refusée.

## 8. `[PRESENCE_EXTERNE]` — le plan hors site

Souvent plus déterminant que la page elle-même. Traite :
- **Google Business Profile** : ce qu'il faut y renseigner, catégories exactes à choisir, attributs, photos, posts, et la façon d'exploiter les 400+ avis ;
- **la cohérence NAP** (nom, adresse, téléphone identiques partout) et les annuaires qui comptent réellement en France pour un tatoueur ;
- **les plateformes spécialisées tatouage** et les sources que les IA consultent pour ce secteur ;
- **les mentions et citations externes** à viser (presse locale, offices de tourisme, conventions, blogs) ;
- **Instagram**, principal actif du salon aujourd'hui : comment le rendre exploitable par les IA.

Classe par rapport impact/effort, et distingue ce qui est faisable tout de suite de ce qui demande du temps.

## 9. `[TECHNIQUE]` — recommandations d'implémentation

Ce qu'il faut mettre en place côté code : `robots.txt` autorisant explicitement les robots des IA (GPTBot, PerplexityBot, ClaudeBot, Google-Extended, CCBot, Bytespider), `sitemap.xml`, `llms.txt` si tu le juges pertinent — argumente. Précise si des pages supplémentaires (FAQ dédiée, page par style, page « à propos ») valent l'investissement, avec le gain attendu.

Écris cette section pour un développeur : chemins de fichiers, contenu exact, pas de généralités.

---

## Règles de rédaction, impératives

- **Français uniquement**, vouvoiement du visiteur.
- **Aucun tiret cadratin `—`** dans les textes rédigés : le client n'en veut pas, il trouve que ça fait artificiel. Utilise deux-points, virgules ou points.
- Apostrophes droites `'`, pas typographiques.
- **N'invente jamais** un fait, un tarif, un horaire, une certification ou un avis. Tout élément manquant est marqué `[À CONFIRMER PAR LE SALON]`.
- Chaque bloc rendu est précédé de sa clé entre crochets, seul sur sa ligne, pour permettre l'intégration automatique.
- Pas de commentaire ni de justification à l'intérieur des blocs de texte : les explications vont dans les sections de diagnostic.

---

**Le critère de réussite :** dans six mois, quelqu'un qui demande à ChatGPT ou Perplexity un tatoueur fine line entre Narbonne et Gruissan doit voir Barberousse Tattoo cité, avec des informations justes. Tout ce que tu produis doit servir cet objectif, et rien de ce que tu produis ne doit dénaturer la voix du tatoueur.
