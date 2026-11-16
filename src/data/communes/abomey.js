// Tout ce qui est propre à Abomey. Pour une autre commune : copier ce fichier, changer les valeurs et les images.
export default {
  id: "abomey",
  nom: "Abomey",
  departement: "Zou",
  devise: "Union, Solidarité, Développement",
  img: "../assets/img/abomey/",
  blason: { src: "../assets/logos/abomey-logo.png", taille: "329.7% auto", position: "14% 0", ratio: "696/666" },
  marche: "marché Houndjro",
  phrase: "Capitale du royaume du Danxomè de 1625 à 1894. Ses palais royaux sont inscrits au patrimoine mondial de l'UNESCO.",
  titre: "Abomey, cité royale du Danxomè",
  hero: { img: "mur.jpg", alt: "Mur d'enceinte en terre rouge des palais royaux d'Abomey", credit: "Mur d'enceinte des palais royaux. Photo Adam Jones, Wikimedia Commons, CC BY-SA 3.0." },
  symboles: ["trone", "poisson"],
  accroche: "Les rois, les palais, les tentures",
  chapoDecouvrir: "Six lieux pour comprendre Abomey, du palais des rois aux forêts sacrées.",

  // Trois images d'archive ou de détail, juste après les accès rapides.
  vitrine: {
    titre: "Abomey, 1930",
    texte: "Cette année-là, Frédéric Gadmer photographie en couleurs les bas-reliefs des palais. Les lions de Glèlè gardent toujours l'entrée.",
    lien: "Parcourir Abomey en images", archive: true,
    imgs: [
      { src: "1930-glele.jpg", alt: "Entrée principale du palais de Glèlè, deux bas-reliefs de lions encadrent la porte", legende: "Entrée principale (honuwa) du palais de Glèlè, le roi lion." },
      { src: "1930-amazone.jpg", alt: "Bas-relief en terre représentant une amazone armée", legende: "Une amazone, guerrière du roi." },
      { src: "1930-elephant.jpg", alt: "Bas-relief en terre représentant un éléphant chargeant un arbre", legende: "L'éléphant qui déracine l'arbre." }
    ]
  },
  frise: { titre: "Chaque roi, son emblème", texte: "Sur le mur de la place Goho, chaque souverain garde son médaillon : l'animal ou l'objet qui résume son règne." },
  plein: { img: "ceremonie.jpg", alt: "Hommes en pagnes colorés dansant en cercle lors d'une cérémonie traditionnelle", titre: "Une culture qui danse encore", texte: "Tambours, pagnes et cérémonies : Abomey ne se visite pas seulement, elle se vit.", credit: "Cérémonie traditionnelle au Bénin. Photo Abdias Gbetokpanou, Pexels." },
  creditsPied: "Photos : Frédéric Gadmer, 1930 (Archives de la Planète, musée Albert-Kahn, CC BY-SA 4.0) ; Adam Jones (CC BY-SA 3.0) ; médaillons de la place Goho, Adoscam (CC BY-SA 4.0) ; Abdias Gbetokpanou (licence Pexels).",

  rois: [
    { nom: "Akaba", regne: "1685 – 1708", img: "roi-akaba.jpg", d: "Le caméléon : avancer lentement, mais sûrement." },
    { nom: "Tegbessou", regne: "1740 – 1774", img: "roi-tegbessou.jpg", d: "Le buffle vêtu, qu'on ne peut dévêtir." },
    { nom: "Guézo", regne: "1818 – 1858", img: "roi-guezo.jpg", d: "Le buffle, force qui traverse le pays." },
    { nom: "Glèlè", regne: "1858 – 1889", img: "roi-glele.jpg", d: "Le lion aux dents redoutables, gardien des portes." },
    { nom: "Béhanzin", regne: "1889 – 1894", img: "roi-behanzin.jpg", d: "Le requin en colère qui trouble la barre. Le dernier à tenir tête aux colons." },
    { nom: "Agoli-Agbo", regne: "1894 – 1900", img: "roi-agoli.jpg", d: "Le pied heurte la pierre : le royaume trébuche mais ne tombe pas." }
  ],
  roisCredit: "Médaillons du mur de la place Goho. Photos Adoscam, Wikimedia Commons, CC BY-SA 4.0.",

  // Le récit « Découvrir » : une grande image, une image superposée, un texte.
  decouvrir: [
    { titre: "Les palais royaux", lieu: "palais",
      texte: "Sur 47 hectares, douze rois ont bâti chacun son palais à côté de celui de son père. Murs de terre rouge, cours successives, toits de tôle qui ont remplacé la paille : c'est la cité royale, inscrite au patrimoine mondial depuis 1985.",
      grande: { src: "0.jpg", alt: "Cour des palais royaux d'Abomey, bâtiments de terre rouge", credit: "Karalyn Monteil, CC BY-SA 3.0 IGO" },
      petite: { src: "1930-glele.jpg", alt: "Entrée du palais de Glèlè en 1930, bas-reliefs de lions", credit: "Frédéric Gadmer, 1930, CC BY-SA 4.0", zoom: 1 } },
    { titre: "Le musée historique", lieu: "palais",
      texte: "Les palais de Guézo et de Glèlè abritent le musée : trônes, récades, tentures et bas-reliefs d'origine. Le site est en réhabilitation et, à côté, le musée des Rois et des Amazones du Danxomè (MuRAD) se construit pour accueillir les 26 trésors royaux rendus par la France en 2021.",
      grande: { src: "palais-guezo.jpg", alt: "Entrée du musée historique dans le palais du roi Guézo", credit: "Gildaskiki, CC BY-SA 4.0" },
      petite: { src: "1930-poisson.jpg", alt: "Bas-relief de 1930 : un poisson avale un navire européen", credit: "Frédéric Gadmer, 1930, CC BY-SA 4.0", zoom: 1 } },
    { titre: "La place Goho", lieu: "goho",
      texte: "À l'entrée de la ville, la statue de Béhanzin lève la main. Autour de la place, les médaillons des rois rappellent à chaque passant l'emblème de leur règne.",
      grande: { src: "goho-place.jpg", alt: "La place Goho, arche et statue du roi Béhanzin", credit: "Romario Coffi, CC BY-SA 4.0" },
      petite: { src: "goho-statue.jpg", alt: "Statue du roi Béhanzin, main levée", credit: "Romario Coffi, CC BY-SA 4.0", portrait: true } },
    { titre: "Les tentures appliquées", lieu: "marche",
      texte: "Des familles d'artisans cousent depuis trois siècles les emblèmes des rois sur des toiles de couleur. Bonnets, tentures, parasols : on les trouve encore dans les ateliers et au marché.",
      grande: { src: "2.jpg", alt: "Étal de bonnets et tentures appliqués aux couleurs vives", credit: "Ji-Elle, CC BY-SA" },
      petite: { src: "1.jpg", alt: "Deux hommes portant des bonnets brodés en appliqué", credit: "Karalyn Monteil, CC BY-SA 3.0 IGO", portrait: true } },
    { titre: "Le palais d'Agoli-Agbo", lieu: "palais",
      texte: "Dernier roi du Danxomè, Agoli-Agbo règne sous l'administration coloniale. Son palais, plus modeste, ferme la lignée des souverains d'Abomey.",
      grande: { src: "agoli.jpg", alt: "Façade du palais du roi Agoli-Agbo", credit: "Ji-Elle, CC BY-SA 4.0" },
      petite: { src: "statues-branly.jpg", alt: "Statues royales du Danxomè, dont l'homme-requin de Béhanzin", credit: "Domaine public" } },
    { titre: "Le vodun et les forêts sacrées", lieu: null,
      texte: "Autels, statuettes, forêts où l'on n'entre qu'accompagné : le vodun reste une religion vivante. Le 10 janvier, la fête nationale des religions endogènes rassemble tout le pays.",
      grande: { src: "3.jpg", alt: "Arbre aux racines enchevêtrées dans une forêt sacrée", credit: "jbdodane, CC BY 2.0" },
      petite: { src: "vodun.jpg", alt: "Statuettes vodun en bois", credit: "jbdodane, CC BY 2.0" } }
  ],

  carte: { centre: [7.1872, 1.9965], zoom: 14 },
  lieux: [
    { id: "palais", nom: "Palais royaux et musée historique", d: "En réhabilitation : renseignez-vous avant de venir.", coords: [7.18666, 1.99438], couleur: "#c8102e" },
    { id: "goho", nom: "Place Goho, statue de Béhanzin", d: "À l'entrée de la ville, côté Bohicon.", coords: [7.18444, 2.00755], couleur: "#1f7a3a" },
    { id: "marche", nom: "Marché Houndjro", d: "Marché moderne inauguré fin 2025. Tentures, pagnes, produits du Zou.", coords: [7.18077, 1.99171], couleur: "#d9a31f" },
    { id: "mairie", nom: "Mairie d'Abomey", d: "Route de la Préfecture. Lundi au vendredi, 8 h – 12 h 30 et 15 h – 18 h 30.", coords: [7.19716, 1.98219], couleur: "#3fa9d8", mairie: true }
  ],
  stats: { superficie: "142 km²", population: "92 266 habitants (RGPH-4, 2013)" },
  arrondissements: ["Agbokpa", "Détohou", "Djègbè", "Hounli", "Sèhoun", "Vidolè", "Zounzonmè"],
  acces: "Chef-lieu du Zou, à 2 h 30 de Cotonou par la route du Nord."
};
