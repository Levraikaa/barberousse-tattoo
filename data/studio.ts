// Domaine de production. Un nom de domaine définitif est prévu : le changer ICI
// suffit, metadata, canonical, robots.txt, sitemap.xml et JSON-LD le lisent tous.
export const SITE_URL = "https://barberousse-tattoo.vercel.app";

export const studio = {
  name: "Barberousse Tattoo",
  logo: "/images/brand/logo-mark.png",
  tagline: "La ligne fine a son port d'attache, à Gruissan.",
  description:
    "Tatoueur spécialiste de la ligne fine à 15 minutes de Narbonne, à Gruissan. Victor tatoue seul, sur rendez-vous : fine line, japonais, réalisme. 5,0 sur plus de 400 avis.",
  // Sous-titre du hero, en texte réel sous le nom du salon
  heroSubtitle:
    "Spécialiste de la ligne fine, à Gruissan, quinze minutes de Narbonne. Sur rendez-vous.",
  aboutTitle: "Tatouage à Gruissan, face au port",
  aboutStory:
    "Barberousse, c'est d'abord un nom de Gruissan : celui de la tour qui veille sur le village depuis le Moyen Âge. J'en ai gardé l'esprit : sabres croisés au mur, ambiance soignée et paisible. J'ai choisi d'installer mon salon de tatouage face au port, quai du Ponant, rive droite, pour offrir à chacun une expérience agréable et inoubliable. Il est ouvert toute l'année, en saison comme hors saison, à quinze minutes de Narbonne.\n\nJe tatoue seul, sur rendez-vous, depuis l'ouverture en 2019. Je prends autant de plaisir à conseiller et accompagner qu'à réaliser le tatouage lui-même, et c'est une approche que mes clients apprécient : 5,0 étoiles et plus de 400 avis positifs.\n\nLe reste, c'est du soin : matériel à usage unique, hygiène irréprochable, et le temps qu'il faut pour que vous repartiez avec la bonne pièce.",
  stats: [
    { value: "5,0★", label: "Note moyenne" },
    { value: "400+", label: "Avis positifs" },
    { value: "4", label: "Prix en conventions tattoo" },
  ],
  phone: "+33 6 77 39 79 78",
  email: "v.contrepois@gmail.com",
  address: {
    street: "Résidence les Rocailles, Bât. B — Quai du Ponant",
    city: "Gruissan",
    zip: "11430",
    googleMapsUrl: "https://maps.app.goo.gl/jT3kzQSCrwPPdUqp6",
    coordinates: { lat: 43.1079629, lng: 3.0951355 },
  },
  socials: {
    instagram: "https://instagram.com/barberousse_tattoo_gruissan",
    tiktok: "",
  },
  // Fiche Google Business : le signal le plus fort du référencement local.
  // URL canonique par identifiant de lieu, insensible aux renommages.
  googleBusinessUrl: "https://maps.google.com/?cid=2973647338177337317",
  googleBusinessShortUrl: "https://maps.app.goo.gl/NnPZ6c85gzTEYJbW8",
  // Autres présences publiques du salon, recoupées par Google et les moteurs de réponse
  facebookUrl: "https://www.facebook.com/profile.php?id=2093223444303930",
  planityUrl: "https://www.planity.com/barberousse-tatoo-11430-gruissan",
  reviewCount: 443,
  ratingValue: "5.0",

  // Avis Google reproduits tels quels (prénom et initiale), tous notés 5 étoiles.
  // Source : fiche Google Business, relevés le 12/09/2026.
  reviews: [
    {
      author: "Sandii T.",
      date: "2026-08",
      visited: "Visité en juillet 2026",
      text: "Un VRAI tatoueur qui a parfaitement compris mon souhait pour mon tatouage et qui s'applique énormément, un vrai pro. Le tattoo avec des courbes d'une finesse incroyable. Aucune douleur et très bon moment. Merci beaucoup et encore bravo pour ton travail et ton application",
    },
    {
      author: "Candice N.",
      date: "2026-08",
      visited: "Visité en juillet 2026",
      text: "Tatoueur au top, que je recommande vivement ! C'est quelqu'un de très réactif et surtout très professionnel. 2 jours après l'avoir contacté pour un tatouage commun mère/fille, nous avons pu concrétiser notre souhait. J'avais un peu d'appréhension suite à un tatouage réalisé une vingtaine d'années plus tôt et à ma grande surprise, aucune douleur. Je n'ai rien senti. Il nous a donné plein de conseils pour la phase de cicatrisation et a même pris de nos nouvelles le lendemain pour savoir comment ça allait. Ma fille et moi sommes ravies.",
    },
    {
      author: "BliXouuu",
      date: "2026-08",
      visited: "Visité en juillet 2026",
      text: "Une super expérience du début à la fin ! Nous sommes venues à trois, mais seulement deux à nous faire tatouer. L'ambiance était géniale, on a beaucoup rigolé, et le tatoueur a tout de suite su nous mettre à l'aise. Le travail est vraiment magnifique : des lignes fines, un tatouage propre et exactement comme on l'imaginait. On est reparties ravies de nos tatouages et avec de très bons souvenirs de cette journée.",
    },
    {
      author: "Riku C.",
      date: "2026-07",
      visited: "Visité en juin 2026",
      text: "Super tatoueur. Victor a de suite compris ce que je voulais, il est très doux et très professionnel. Aucun problème au niveau des normes d'hygiène. J'ai passé un super moment et aucun problème de cicatrisation par la suite, une fois que le tattoo a dégorgé, on voit bien tous les détails. Un véritable artiste, vous pouvez y aller en toute confiance !",
    },
    {
      author: "Ana D.",
      date: "2026-07",
      visited: "Visité en juin 2026",
      text: "Super expérience ! Nous l'avons contacté hier en fin d'après-midi et avons pu être tatouées dès aujourd'hui. Très professionnel, doux et attentif à notre confort tout au long de la séance. Le salon est impeccable, nous sommes très satisfaites du résultat de nos quatre tatouages et recommandons vivement ce tatoueur !",
    },
    {
      author: "Capucine A.",
      date: "2026-08",
      visited: "Visité en juillet 2026",
      text: "On est venues 2 jours avant pour prendre rendez-vous, puis nous avons pu échanger sur WhatsApp à propos des tatouages. Le salon est facilement trouvable, il fait frais et l'ambiance est paisible et adaptée. Très à l'écoute pour les emplacements et donne de très bons conseils. Super tatouage, merci beaucoup !",
    },
    {
      author: "Djannys",
      date: "2026-08",
      visited: "Visité en août 2026",
      text: "Tatoueur génial, qui met en confiance et qui réalise de sublimes performances, ça se voit qu'il le fait avec passion. Je suis très heureux de mon tatouage, il a été réalisé avec soin. Je recommande vivement !",
    },
    {
      author: "Ana G.",
      date: "2026-08",
      visited: "Visité en juillet 2026",
      text: "J'étais de passage pour les vacances, j'ai voulu me faire tatouer chez lui ! Super accueil, super sympa, s'applique, il est très doux et super agréable ! Je vous le conseille, très bonne expérience.",
    },
  ],

  // Questions que posent les clients. Les réponses ne disent que ce qui est
  // déjà vrai ailleurs sur le site : rien n'est promis ici qui ne le soit pas là-bas.
  faq: [
    {
      question: "Faut-il prendre rendez-vous pour se faire tatouer ?",
      answer:
        "Oui, le salon reçoit uniquement sur rendez-vous, toute l'année, du mardi au samedi. Décrivez votre projet dans le formulaire de contact : je vous réponds sous 48h, par email ou par téléphone, et on fixe ensemble une date.",
    },
    {
      question: "Où se trouve le salon ?",
      answer:
        "À Gruissan, quai du Ponant, rive droite, face au port de plaisance : Résidence les Rocailles, Bât. B, 11430 Gruissan. C'est à quinze minutes de Narbonne en voiture.",
    },
    {
      question: "Combien coûte un tatouage ?",
      answer:
        "Il n'y a pas de tarif fixe : chaque pièce est unique. Le prix dépend de la taille, de la complexité et du style choisi. Après un premier échange sur votre projet, je vous envoie une estimation personnalisée. Le devis est gratuit.",
    },
    {
      question: "Est-ce que vous dessinez le tatouage vous-même ?",
      answer:
        "Oui. Chaque projet est dessiné sur iPad et adapté à votre idée, à votre morphologie et à l'emplacement choisi. On valide le dessin ensemble au salon avant la séance : je ne tatoue rien tant que vous n'êtes pas d'accord avec chaque trait.",
    },
    {
      question: "Un acompte est-il demandé ?",
      answer:
        "Oui, un acompte est demandé pour confirmer votre réservation, une fois le dessin validé et la date fixée.",
    },
    {
      question: "Est-ce que ça fait mal ?",
      answer:
        "Cela dépend de l'emplacement et de la sensibilité de chacun. Je prends le temps qu'il faut et je fais en sorte que vous soyez à l'aise pendant toute la séance. Beaucoup de clients repartent surpris d'avoir si peu senti.",
    },
    {
      question: "Que se passe-t-il après la séance ?",
      answer:
        "Je vous remets un guide de cicatrisation complet et je reste disponible pour vos questions. Si une retouche est nécessaire, elle est gratuite.",
    },
    {
      question: "Quels styles de tatouage pratiquez-vous ?",
      answer:
        "Ma spécialité est la ligne fine. Je travaille aussi le japonais, le manga et l'anime, le réalisme noir et gris, le polynésien, le traditionnel, l'ornemental, le dotwork et le lettering. Si votre projet ne rentre dans aucune case, décrivez-le : on en parle.",
    },
    {
      question: "Quels sont les horaires du salon ?",
      answer:
        "Le salon est ouvert du mardi au samedi, de 13h45 à 16h45, uniquement sur rendez-vous. Il est fermé le dimanche et le lundi. Il reste ouvert toute l'année, en saison comme hors saison.",
    },
  ],
  accentColor: "#b8432c",
  quote: {
    text: "Une ligne fine ne pardonne rien. On la pose une fois, elle reste trente ans.",
    author: "Victor · Barberousse Tattoo",
  },
  establishedYear: 2019,
  heroImage: "/images/hero/victor-tatouage-nb-v2.jpg",
  aboutImage: "/images/about/01-salle-attente.jpg",
  // Chaque photo du salon porte sa description : Google Images lit ces textes
  aboutImages: [
    { src: "/images/about/01-salle-attente.jpg", alt: "Salle d'attente du salon de tatouage Barberousse, à Gruissan" },
    { src: "/images/about/02-cabine.jpg", alt: "Cabine de tatouage équipée du salon Barberousse, à Gruissan" },
    { src: "/images/about/03-comptoir.jpg", alt: "Comptoir d'accueil du salon Barberousse Tattoo, quai du Ponant" },
    { src: "/images/about/04-terrasse-port.jpg", alt: "Terrasse du salon face au port de Gruissan" },
    { src: "/images/about/05-facade.jpg", alt: "Façade du salon de tatouage Barberousse, rive droite du port de Gruissan" },
    { src: "/images/about/06-victor-en-seance.jpg", alt: "Victor en séance de tatouage dans son salon de Gruissan" },
    { src: "/images/about/07-victor-client.jpg", alt: "Victor échangeant avec un client sur son projet de tatouage" },
    { src: "/images/about/08-vue-port.jpg", alt: "Vue sur le port de Gruissan depuis le salon Barberousse Tattoo, quai du Ponant" },
  ],
  heroImageAlt:
    "Victor, tatoueur à Gruissan, en train de tatouer une ligne fine sur un avant-bras",
  ogImage: "/og-barberousse-tattoo.jpg",
  artistsIntro:
    "Tatoueur passionné et à l'écoute, je prends le temps de comprendre votre projet, de vous conseiller et de l'adapter pour obtenir le meilleur résultat possible. Après des années d'étude et de pratique, je travaille aujourd'hui des styles très différents : fine line, japonais, manga, réalisme noir et gris, polynésien, ornemental, dotwork et lettering.",
  galleryIntro:
    "Une sélection de tatouages réalisés au salon, à Gruissan, pour des clients venus de Narbonne et de tout le littoral audois : fine line, japonais, réalisme noir et gris, polynésien, manga, traditionnel. Du petit motif fin aux compositions les plus importantes, je m'adapte à chaque projet et à chaque style, avec la même exigence de précision et de finesse.",
  nav: [
    { label: "Le salon", href: "/#about" },
    { label: "Le tatoueur", href: "/#artists" },
    { label: "Galerie", href: "/#gallery" },
    { label: "Prestations", href: "/#services" },
    { label: "Avis", href: "/#avis" },
    { label: "Contact", href: "/#contact" },
  ],
  ctaLabel: "Prendre rendez-vous",
  // Repli pour la barre fixe mobile, trop étroite pour le libellé complet
  ctaLabelShort: "Prendre RDV",
  artists: [
    {
      name: "Victor",
      specialty: "Spécialiste fine line · Gruissan",
      bio: "Ma signature, c'est la ligne fine : un trait continu, d'une régularité constante, posé une seule fois, sans repasse ni rattrapage. C'est une des disciplines les plus exigeantes du métier, et c'est sur cette maîtrise que j'ai bâti ma réputation à Gruissan, du petit motif discret aux compositions florales et ornementales les plus étendues.",
      instagram: "https://instagram.com/barberousse_tattoo_gruissan",
      photo: "/images/artists/victor-v2.jpg",
    },
  ],
  awards: [
    {
      rank: "1er prix",
      category: "Moyenne & grande pièce couleur",
      event: "Narbonne Tattoo Show #6",
      year: "2024",
      image: "/images/awards/narbonne-2024.jpg",
    },
    {
      rank: "1er prix",
      category: "Asiatique",
      event: "Béziers Tattoo Show",
      year: "",
      image: "/images/awards/beziers-asiatique.jpg",
    },
    {
      rank: "2e prix",
      category: "Petite pièce couleur",
      event: "Narbonne Tattoo Show",
      year: "2023",
      image: "/images/awards/narbonne-2023.jpg",
    },
    {
      rank: "3e prix",
      category: "Graphique",
      event: "Convention Tattoo Béziers",
      year: "2023",
      image: "/images/awards/beziers-graphique.jpg",
    },
  ],
  certifications: [
    {
      title: "Réalisme noir et gris",
      detail:
        "Techniques du tatouage réaliste et photoréaliste",
      issuer: "Séminaire Laura Ink",
      year: "2021",
      image: "/images/certifications/seminaire-laura-ink.jpg",
    },
  ],
  services: [
    {
      name: "Tatouage fine line, la signature du salon",
      description:
        "Le tatouage en ligne fine est la discipline sur laquelle j'ai bâti ma réputation : un trait fin, régulier et maîtrisé, du petit motif discret aux compositions florales et ornementales les plus élaborées.\n\nC'est une technique exigeante, et peu de salons du bassin de Narbonne en font leur spécialité. J'adapte cette précision à chaque projet, à chaque style et à chaque emplacement. L'objectif : un tatouage fin, propre et pensé pour bien évoluer dans le temps.",
      priceRange: "Sur devis",
    },
    {
      name: "Tatouage japonais, manga et anime",
      description:
        "L'univers japonais occupe une place particulière dans mon travail : je réalise aussi des peintures japonaises à l'aquarelle, une pratique qui nourrit directement ma façon de composer mes tatouages. Du japonais traditionnel (carpe koï, dragon, masque hannya, chrysanthèmes) au manga et à l'anime, chaque pièce est composée spécialement pour vous. Un style qui m'a valu un 1er prix Asiatique au Béziers Tattoo Show.",
      priceRange: "Sur devis",
    },
    {
      name: "Réalisme noir et gris",
      description:
        "Portraits, visages et scènes figuratives : je travaille le réalisme principalement en noir et gris, avec une attention particulière portée aux dégradés, aux contrastes et aux détails. J'ai suivi un séminaire et obtenu un certificat de formation en réalisme noir et gris auprès de Laura Ink, pour approfondir les techniques utilisées par les grands tatoueurs réalistes. Un savoir-faire que je continue de perfectionner.",
      priceRange: "Sur devis",
    },
    {
      name: "Tatouage sur-mesure, dessiné pour vous",
      description:
        "Chaque projet est travaillé sur iPad et adapté à votre idée, votre morphologie et l'emplacement choisi. Je n'hésite pas à vous guider et à vous donner mon avis : taille, niveau de détail, lisibilité et vieillissement sont pris en compte pour éviter un motif trop petit ou, au contraire, inutilement trop grand. Premier tatouage discret ou manchette entière, c'est la même main et la même rigueur du premier trait au dernier.",
      priceRange: "Devis gratuit en DM",
    },
  ],
  galleryStyles: [
    "Fine line",
    "Noir et gris",
    "Réalisme",
    "Japonais",
    "Polynésien",
    "Manga",
    "Traditionnel",
    // Fourre-tout pour les pièces qui ne rentrent dans aucune case : le filtre
    // n'apparaît que si au moins une réalisation porte ce style.
    "Autre",
  ],
  gallery: [
    {
      src: "/images/gallery/phenix-soleil.jpg",
      alt: "Phénix aux ailes déployées devant un soleil, tatoué en ligne fine et dotwork sur le bras, à Gruissan",
      style: "Fine line",
    },
    {
      src: "/images/gallery/joker-harley-quinn.jpg",
      alt: "Joker et Harley Quinn en réalisme noir et gris, lettering « Why so serious ? », tatoués sur le mollet",
      style: "Réalisme",
    },
    {
      src: "/images/gallery/bracelet-pivoines.jpg",
      alt: "Pivoines tatouées en ligne fine au-dessus d'un bracelet, sur l'avant-bras, à Gruissan",
      style: "Fine line",
    },
    {
      src: "/images/gallery/creation-adam.jpg",
      alt: "La Création d'Adam revisitée en ligne fine, mains et étoile tatouées sur le bras",
      style: "Fine line",
    },
    {
      src: "/images/gallery/mandala-coude.jpg",
      alt: "Mandala ornemental en noir et gris tatoué autour du coude, travail en dotwork",
      style: "Noir et gris",
    },
    {
      src: "/images/gallery/cerisier-rose.jpg",
      alt: "Branche de cerisier en fleurs roses tatouée en ligne fine sur la hanche",
      style: "Fine line",
    },
    {
      src: "/images/gallery/dragon-hannya.jpg",
      alt: "Tatouage japonais dragon et masque hannya réalisé sur la cuisse, à Gruissan",
      style: "Japonais",
    },
    {
      src: "/images/gallery/mere-et-enfants.jpg",
      alt: "Mère et ses deux enfants entourés de pivoines, réalisme dotwork tatoué sur le bras",
      style: "Réalisme",
    },
    {
      src: "/images/gallery/tortue-maori.jpg",
      alt: "Tatouage polynésien maori, tortue et soleil marquisien sur l'épaule",
      style: "Polynésien",
    },
    {
      src: "/images/gallery/saint-michel.jpg",
      alt: "Saint Michel en armure tatoué en réalisme noir et gris sur le bras",
      style: "Réalisme",
    },
    {
      src: "/images/gallery/manga-chaines.jpg",
      alt: "Tatouage manga, visages et chaînes en encre noire et rouge, sur la cuisse",
      style: "Manga",
    },
    {
      src: "/images/gallery/rose-ancre.jpg",
      alt: "Ancre et rose tatouées sur le mollet, tatouage de style traditionnel",
      style: "Traditionnel",
    },
    {
      src: "/images/gallery/deux-hirondelles.jpg",
      alt: "Deux hirondelles en vol tatouées en ligne fine sur la cuisse",
      style: "Fine line",
    },
    {
      src: "/images/gallery/carpe-koi.jpg",
      alt: "Carpe koï tatouée en noir et rouge sur les côtes, style japonais traditionnel",
      style: "Japonais",
    },
    {
      src: "/images/gallery/raie-polynesienne.jpg",
      alt: "Raie manta aux motifs polynésiens tatouée sur le haut du dos",
      style: "Polynésien",
    },
    {
      src: "/images/gallery/cerfs-mains.jpg",
      alt: "Cerfs en forêt tatoués en dotwork noir et gris sur le dos des mains",
      style: "Noir et gris",
    },
    {
      src: "/images/gallery/crane-cowboy.jpg",
      alt: "Crâne au chapeau et fer à cheval, tatouage traditionnel en couleur réalisé au salon",
      style: "Traditionnel",
    },
    {
      src: "/images/gallery/paysage-montagne.jpg",
      alt: "Paysage de montagne en ligne fine et dotwork tatoué sur le mollet",
      style: "Fine line",
    },
    {
      src: "/images/gallery/chrysanthemes-dotwork.jpg",
      alt: "Chrysanthèmes japonais tatoués en dotwork sur le bras, au salon de Gruissan",
      style: "Japonais",
    },
    {
      src: "/images/gallery/tortue-tiki.jpg",
      alt: "Tortue et masque tiki polynésiens tatoués sur la jambe",
      style: "Polynésien",
    },
    {
      src: "/images/gallery/pharaon-egyptien.jpg",
      alt: "Divinité égyptienne à tête de faucon tatouée en réalisme noir et gris sur le bras",
      style: "Réalisme",
    },
    {
      src: "/images/gallery/ancre-corde.jpg",
      alt: "Ancre et cordage marins tatoués sur la cuisse, tatouage traditionnel à Gruissan",
      style: "Traditionnel",
    },
    {
      src: "/images/gallery/papillon-fine-line.jpg",
      alt: "Papillon tatoué en ligne fine sur la cuisse, spécialité fine line du salon",
      style: "Fine line",
    },
    {
      src: "/images/gallery/hirondelle-polynesienne.jpg",
      alt: "Hirondelle aux motifs polynésiens tatouée sur le bras",
      style: "Polynésien",
    },
    {
      src: "/images/gallery/horloge-oiseaux.jpg",
      alt: "Horloge et envol d'oiseaux tatoués en noir et gris sur la cuisse",
      style: "Noir et gris",
    },
    {
      src: "/images/gallery/cerisier-fine-line.jpg",
      alt: "Fleurs de cerisier tatouées en ligne fine sur les côtes",
      style: "Fine line",
    },
    {
      src: "/images/gallery/mandala-epaule.jpg",
      alt: "Mandala ornemental tatoué sur l'épaule en noir et gris",
      style: "Noir et gris",
    },
    {
      src: "/images/gallery/loup-triskel.jpg",
      alt: "Loup hurlant et triskèle celtique tatoués en noir et gris sur le mollet",
      style: "Noir et gris",
    },
    {
      src: "/images/gallery/branches-fine-line.jpg",
      alt: "Rameaux tatoués en ligne fine sur la cuisse, tatouage floral discret",
      style: "Fine line",
    },
    {
      src: "/images/gallery/rose-des-vents.jpg",
      alt: "Rose des vents et flèches tatouées en ligne fine sur le bras",
      style: "Noir et gris",
    },
    {
      src: "/images/gallery/portrait-couronne.jpg",
      alt: "Portrait de femme couronnée tatoué en réalisme noir et gris sur le bras",
      style: "Réalisme",
    },
    {
      src: "/images/gallery/hirondelle-fine-line.jpg",
      alt: "Hirondelle en vol tatouée en ligne fine sur l'omoplate, à Gruissan",
      style: "Fine line",
    },
    {
      src: "/images/gallery/rose-banderole.jpg",
      alt: "Rose et banderole tatouées en dotwork sur l'avant-bras",
      style: "Noir et gris",
    },
    {
      src: "/images/gallery/oeil-horus.jpg",
      alt: "Œil d'Horus et croix ankh tatoués en noir et gris sur le haut du dos",
      style: "Noir et gris",
    },
    {
      src: "/images/gallery/rose-cou.jpg",
      alt: "Rose tatouée en noir et gris dans le cou, réalisée au salon de Gruissan",
      style: "Noir et gris",
    },
    {
      src: "/images/gallery/lettering-ancree.jpg",
      alt: "Lettering manuscrit tatoué en ligne fine dans la nuque",
      style: "Fine line",
    },
  ],
} as const;
