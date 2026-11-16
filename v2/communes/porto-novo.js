// Porto-Novo (Ouémé), capitale. Images : Wikimedia Commons, voir assets/img/credits-communes.json.
window.COMMUNE = {
  id: "porto-novo",
  nom: "Porto-Novo",
  departement: "Ouémé",
  devise: "Hogbonou, Adjatchè, Porto-Novo : trois noms, une capitale",
  titre: "Porto-Novo, capitale du Bénin",
  img: "../assets/img/porto-novo/",
  blason: { src: "../assets/logos/porto-novo-logo.png", taille: "auto 128%", position: "3% 40%", ratio: "1" },
  couleurs: { argile: "#1d6f5f", "argile-f": "#0e4238", terre: "#0b1a16", "terre-rgb": "11 26 22", lumiere: "#e8b04a" },
  marche: "marché Ouando",
  phrase: "Capitale du Bénin, entre lagune et plateau. Hogbonou pour les Goun, Adjatchè pour les Yoruba, Porto-Novo pour les navigateurs portugais.",
  hero: { img: "mosquee-grande.webp", mobile: "mosquee-haut.webp", alt: "Façade rouge et ocre de la Grande Mosquée de Porto-Novo, de style afro-brésilien", credit: "Grande Mosquée de Porto-Novo. Image Pinterest, auteur à identifier, droits à obtenir.", position: "50% 45%" },
  symboles: ["case", "sceau"],
  accroche: "Mosquée, palais royal, maisons afro-brésiliennes",
  chapoDecouvrir: "De la Grande Mosquée au jardin des plantes : quatre lieux pour comprendre la capitale.",

  vitrine: {
    titre: "Un air de Bahia",
    texte: "Au XIXe siècle, des Afro-Brésiliens revenus de Bahia bâtissent à leur manière : façades à colonnes, portes sculptées, couleurs vives. La ville en garde la trace à chaque coin de rue.",
    lien: "Parcourir Porto-Novo en images",
    imgs: [
      { src: "escaliers.webp", alt: "Escalier monumental décoré de mosaïques, murs rouges et statues", legende: "Les escaliers décorés du centre. Photo Africa Smart Travel (Pinterest), droits à obtenir." },
      { src: "adjinan.webp", alt: "Mur rouge orné de bustes et de bas-reliefs, place Adjinan", legende: "Place Adjinan. Photo Guide Travel Bénin (Pinterest), droits à obtenir." },
      { src: "bayol.webp", alt: "Statue blanche au centre d'un jardin circulaire, place Bayol", legende: "Place Bayol. Photo kamaroutessilimi (Pinterest), droits à obtenir." },
      { src: "rue.webp", alt: "Façades colorées et ornées de la Grande Mosquée vues depuis la rue", legende: "Façades de la vieille ville. Photo Salamath Ogountola, CC BY-SA 4.0." },
      { src: "porte.webp", alt: "Porte verte sculptée encadrée de colonnes ocre", legende: "Une entrée de la Grande Mosquée. Photo Adoscam, CC BY-SA 4.0." },
      { src: "bas-relief2.webp", alt: "Bas-relief doré : un homme porte une lourde charge", legende: "Bas-relief du musée Da Silva. Photo Rachad Sanoussi, CC BY-SA 4.0." }
    ]
  },
  plein: { img: "jardin.webp", alt: "Racines géantes d'un arbre centenaire dans la pénombre du jardin", titre: "Une forêt en pleine ville", texte: "Au Jardin des plantes et de la nature, arbres centenaires, plantes médicinales et singes vivent à deux pas du centre.", credit: "Jardin des plantes et de la nature. Photo Padonou Dotou, Wikimedia Commons, CC BY-SA 4.0." },

  decouvrir: [
    { titre: "La Grande Mosquée", lieu: "mosquee",
      texte: "Bâtie au début du XXe siècle sur le modèle des églises baroques de Bahia, elle surprend : clochers, frontons, couleurs de brique et d'ocre. C'est l'emblème de la ville.",
      grande: { src: "mosquee2.webp", alt: "La Grande Mosquée et sa rue, vue de profil", credit: "Joseph Hervé Ahissou, CC BY-SA 4.0" },
      petite: { src: "honme-cour.webp", alt: "Cour intérieure d'un bâtiment royal, piliers noirs et blancs", credit: "Rachad Sanoussi, CC BY-SA 4.0" } },
    { titre: "Le musée Honmè", lieu: "honme",
      texte: "Ancien palais du roi Toffa, il raconte la royauté de Hogbonou : cours successives, chambres royales, autels et objets du pouvoir. À l'entrée de la ville, le Musée international du Vodun est en chantier.",
      grande: { src: "honme.webp", alt: "Cour en terre rouge du musée Honmè", credit: "Kulttuurinavigaattori, CC BY-SA 4.0" },
      petite: { src: "honme-statue.webp", alt: "Statue de femme en bronze dans une cour du musée Honmè", credit: "Ji-Elle, CC BY-SA 3.0", portrait: true } },
    { titre: "Le musée Da Silva", lieu: "dasilva",
      texte: "Installé dans une grande maison afro-brésilienne, il raconte le retour des descendants d'esclaves partis au Brésil, et la ville qu'ils ont façonnée.",
      grande: { src: "dasilva.webp", alt: "Bâtiment blanc du musée Da Silva", credit: "Ksperentos, CC BY-SA 4.0" },
      petite: { src: "bas-relief.webp", alt: "Bas-relief doré sur la traite négrière", credit: "Rachad Sanoussi, CC BY-SA 4.0" } },
    { titre: "Le jardin des plantes", lieu: "jardin",
      texte: "Un ancien bois sacré devenu jardin public : on y suit des sentiers ombragés entre les plantes médicinales, les fromagers et les familles de singes.",
      grande: { src: "singes.webp", alt: "Deux singes assis sur un muret dans le jardin", credit: "Adoscam, CC BY-SA 4.0" },
      petite: { src: "nouvelle-mosquee.webp", alt: "La nouvelle Grande Mosquée de Porto-Novo, jaune et blanche", credit: "Rachad Sanoussi, CC BY-SA 4.0" } }
  ],

  carte: { centre: [6.4725, 2.628], zoom: 14 },
  lieux: [
    { id: "mosquee", nom: "Grande Mosquée", d: "Rue Victor Ballot, quartier Avassa.", coords: [6.471739, 2.628109], couleur: "#c8102e" },
    { id: "honme", nom: "Musée Honmè, palais du roi Toffa", d: "Avenue Liotard.", coords: [6.469328, 2.625162], couleur: "#1f7a3a" },
    { id: "dasilva", nom: "Musée Da Silva", d: "Arts et culture afro-brésiliens.", coords: [6.470725, 2.620295], couleur: "#d9a31f" },
    { id: "jardin", nom: "Jardin des plantes et de la nature", d: "Quartier Gbèdji.", coords: [6.474487, 2.615216], couleur: "#7a4fb0" },
    { id: "ouando", nom: "Marché de Ouando", d: "Nouveau marché ouvert le 26 avril 2026 : plus de 4 000 places.", coords: [6.506048, 2.611165], couleur: "#e06a2c" },
    { id: "mairie", nom: "Mairie de Porto-Novo", d: "Horaires à confirmer auprès de la mairie.", coords: [6.473178, 2.64193], couleur: "#3fa9d8", mairie: true }
  ],
  arrondissements: ["1er", "2e", "3e", "4e", "5e"],
  acces: "À 30 km à l'est de Cotonou, au bord de la lagune.",
  creditsPied: "Photos Wikimedia Commons : Gildaskiki, Joseph Hervé Ahissou, Adoscam, Rachad Sanoussi, Kulttuurinavigaattori, Ksperentos, Padonou Dotou, Salamath Ogountola (CC BY-SA 4.0), Ji-Elle (CC BY-SA 3.0). Images de maquette, droits à obtenir : Africa Smart Travel, Guide Travel Bénin, kamaroutessilimi, mytravelaffairs (via Pinterest)."
};
