// Nikki (Borgou). Pas de blason trouvé : monogramme. Images : Wikimedia Commons, voir assets/img/credits-communes.json.
export default {
  id: "nikki",
  nom: "Nikki",
  departement: "Borgou",
  devise: "Terre de la Gaani",
  titre: "Nikki, cité royale baatonu",
  img: "../assets/img/nikki/",
  blason: null,
  couleurs: { argile: "#9a2a2a", "argile-f": "#5e1717", terre: "#1a0b0a", "terre-rgb": "26 11 10", lumiere: "#f0b85a" },
  marche: "marché de Nikki",
  phrase: "Capitale historique du royaume baatonu. Chaque année, la Gaani rassemble cavaliers, griots et princes autour du Sina Boko, roi de Nikki.",
  hero: { img: "cavaliers.jpg", alt: "Cavaliers baatonu en tenue d'apparat, chevaux harnachés de rouge, pendant la Gaani", credit: "Cavaliers baatonu, Gaani 2026. Photo Mhope2010, Wikimedia Commons, CC BY-SA 4.0.", position: "50% 40%" },
  symboles: ["trone", "cauri"],
  accroche: "La Gaani, le palais, les cavaliers",
  chapoDecouvrir: "De l'arène au palais : quatre lieux pour comprendre Nikki.",

  vitrine: {
    titre: "L'arène de la Gaani",
    texte: "Le nouveau palais royal et son arène de 3 500 places ont accueilli leur première Gaani en septembre 2025. Tribunes couvertes, piste de terre rouge : tout est bâti pour l'entrée des cavaliers au galop.",
    lien: "Parcourir Nikki en images",
    imgs: [
      { src: "entree.jpg", alt: "Entrée principale de l'arène, foule massée derrière les barrières", legende: "L'entrée principale des cavaliers. Photo Step may, CC0." },
      { src: "cavalier.jpg", alt: "Cavalier en boubou bleu sur un cheval harnaché", legende: "Un cavalier en boubou bleu. Photo Mhope2010, CC BY-SA 4.0." },
      { src: "place.jpg", alt: "Piste de terre rouge et tribunes vides de l'arène", legende: "La place de la fête, avant la foule. Photo Mohamed Agnide, CC BY-SA 4.0." }
    ]
  },
  plein: { img: "gani.jpg", alt: "Deux cavaliers lancés au galop devant la foule", titre: "Au galop devant le roi", texte: "Les chevaux harnachés traversent l'arène sous les cris de la foule et le son des tambours.", credit: "Gaani à Nikki. Photo Degan Gabin, Wikimedia Commons, CC BY-SA 4.0." },

  decouvrir: [
    { titre: "La Gaani", lieu: "palais",
      texte: "La grande fête du peuple baatonu : pendant trois jours, princes, cavaliers et fidèles rendent hommage au Sina Boko dans l'arène du nouveau palais. L'édition 2026 était annoncée du 25 au 27 août.",
      grande: { src: "arene.jpg", alt: "Une cavalière passe sous l'arche rouge et blanche de l'arène", credit: "Mhope2010, CC BY-SA 4.0" },
      petite: { src: "cavaliers2.jpg", alt: "Cavaliers en tenue rayée dans l'arène", credit: "Mhope2010, CC BY-SA 4.0" } },
    { titre: "Le musée royal Danri", lieu: "musee",
      texte: "Cases rondes de terre, toits de paille, objets du pouvoir : le musée garde la mémoire de la dynastie. Les griots y récitent la généalogie des rois.",
      grande: { src: "musee.jpg", alt: "Bâtiment en terre ocre du musée royal Danri", credit: "Saliousoft, CC BY-SA 4.0" },
      petite: { src: "griot.jpg", alt: "Un griot en boubou blanc entre dans une case du palais", credit: "Mohamed Agnide, CC BY-SA 4.0" } },
    { titre: "Le salut au roi", lieu: null,
      texte: "Devant le roi, on se prosterne. Les fidèles venus de tout le Borgou, du Nigeria et du Niger saluent ainsi le Sina Boko pendant la fête.",
      grande: { src: "salut.jpg", alt: "Fidèles en boubous bleus prosternés sur la terre rouge", credit: "MIA20102, CC0" },
      petite: { src: "salut2.jpg", alt: "Un dignitaire en pagne tissé tient une canne", credit: "MIA20102, CC0", portrait: true } },
    { titre: "Le palais et sa mosquée", lieu: "palais",
      texte: "Autour du palais, la mosquée et les cases royales dessinent le cœur de la cité. Ici, islam et royauté baatonu marchent ensemble.",
      grande: { src: "mosquee.jpg", alt: "Mosquée au minaret jaune, à côté du palais royal", credit: "Mohamed Agnide, CC BY-SA 4.0" },
      petite: { src: "case.jpg", alt: "Case ronde en terre et toit de paille", credit: "Saliousoft, CC BY-SA 4.0" } }
  ],

  carte: { centre: [9.9308, 3.2092], zoom: 15 },
  lieux: [
    { id: "palais", nom: "Palais royal", d: "Résidence du Sina Boko, sur la RN 10.", coords: [9.935917, 3.21013], couleur: "#c8102e" },
    { id: "musee", nom: "Musée royal Danri", d: "Quartier Danri.", coords: [9.925742, 3.208111], couleur: "#d9a31f" },
    { id: "mairie", nom: "Mairie de Nikki", d: "Sur la RN 10. Horaires à confirmer auprès de la mairie.", coords: [9.934331, 3.210104], couleur: "#3fa9d8", mairie: true }
  ],
  arrondissements: ["Biro", "Gnonkourokali", "Nikki", "Ouénou", "Sérékalé", "Suya", "Tasso"],
  acces: "À environ 110 km à l'est de Parakou, près de la frontière du Nigeria.",
  creditsPied: "Photos Wikimedia Commons : Mhope2010, Saliousoft, Mohamed Agnide, Degan Gabin (CC BY-SA 4.0), MIA20102, Step may (CC0)."
};
