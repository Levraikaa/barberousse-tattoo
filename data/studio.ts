// Domaine de production. Un nom de domaine définitif est prévu : le changer ICI
// suffit, metadata, canonical, robots.txt, sitemap.xml et JSON-LD le lisent tous.
export const SITE_URL = "https://barberousse-tattoo.vercel.app";

export const studio = {
  name: "Barberousse Tattoo",
  logo: "/images/brand/logo-mark.png",
  tagline: "La ligne fine a son port d'attache, à Gruissan.",
  description:
    "Salon de tatouage face au port de Gruissan, à 15 km de Narbonne. Victor tatoue seul : fine line, japonais, réalisme. Sur RDV, ouvert toute l'année.",
  // Sous-titre du hero, en texte réel sous le nom du salon
  heroSubtitle:
    "Tatoueur à Gruissan, spécialiste de la ligne fine. Sur rendez-vous.",
  aboutTitle: "Tatouage à Gruissan, face au port",
  aboutStory:
    "Barberousse, c'est d'abord un nom de Gruissan : celui de la tour qui veille sur le village depuis le Moyen Âge. J'en ai gardé l'esprit : sabres croisés au mur, ambiance soignée et paisible. J'ai choisi d'installer mon salon de tatouage face au port, quai du Ponant, rive droite, pour offrir à chacun une expérience agréable et inoubliable. Il est ouvert toute l'année, saison comme hors saison.\n\nJe tatoue seul, sur rendez-vous, depuis l'ouverture en 2019. Je prends autant de plaisir à conseiller et accompagner qu'à réaliser le tatouage lui-même, et c'est une approche que mes clients apprécient : 5,0 étoiles et plus de 400 avis positifs.\n\nLe reste, c'est du soin : matériel à usage unique, hygiène irréprochable, et le temps qu'il faut pour que vous repartiez avec la bonne pièce.",
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
  accentColor: "#b8432c",
  quote: {
    text: "Une ligne fine ne pardonne rien. On la pose une fois, elle reste trente ans.",
    author: "Victor · Barberousse Tattoo",
  },
  establishedYear: 2019,
  heroImage: "/images/hero/victor-tatouage-nb-v2.jpg",
  aboutImage: "/images/about/01-salle-attente.jpg",
  aboutImages: [
    "/images/about/01-salle-attente.jpg",
    "/images/about/02-cabine.jpg",
    "/images/about/03-comptoir.jpg",
    "/images/about/04-terrasse-port.jpg",
    "/images/about/05-facade.jpg",
    "/images/about/06-victor-en-seance.jpg",
    "/images/about/07-victor-client.jpg",
  ],
  artistsIntro:
    "Tatoueur passionné et à l'écoute, je prends le temps de comprendre votre projet, de vous conseiller et de l'adapter pour obtenir le meilleur résultat possible. Après des années d'étude et de pratique, je travaille aujourd'hui des styles très différents : fine line, japonais, manga, réalisme noir et gris, polynésien, ornemental, dotwork et lettering.",
  galleryIntro:
    "Une sélection de tatouages réalisés au salon, à Gruissan : fine line, japonais, réalisme noir et gris, polynésien, manga, traditionnel. Du petit motif fin aux compositions les plus importantes, je m'adapte à chaque projet et à chaque style, avec la même exigence de précision et de finesse.",
  nav: [
    { label: "Le salon", href: "#about" },
    { label: "Le tatoueur", href: "#artists" },
    { label: "Galerie", href: "#gallery" },
    { label: "Prestations", href: "#services" },
    { label: "Contact", href: "#contact" },
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
        "Le tatouage en ligne fine est la discipline sur laquelle j'ai bâti ma réputation : un trait fin, régulier et maîtrisé, du petit motif discret aux compositions florales et ornementales les plus élaborées.\n\nJ'adapte cette précision à chaque projet, à chaque style et à chaque emplacement. L'objectif : un tatouage fin, propre et pensé pour bien évoluer dans le temps.",
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
  ],
  gallery: [
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
