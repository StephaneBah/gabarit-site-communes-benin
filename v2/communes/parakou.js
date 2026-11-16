// Parakou (Borgou). Images : Wikimedia Commons, voir assets/img/credits-communes.json.
window.COMMUNE = {
  id: "parakou",
  nom: "Parakou",
  departement: "Borgou",
  devise: "Construisons ensemble",
  titre: "Parakou, la grande ville du Nord",
  img: "../assets/img/parakou/",
  blason: { src: "../assets/logos/parakou-logo.png", taille: "88%", position: "50% 50%", ratio: "1" },
  couleurs: { argile: "#1d6b45", "argile-f": "#0e3f28", terre: "#0a1810", "terre-rgb": "10 24 16", lumiere: "#e3a72f" },
  marche: "marché Arzèkè",
  phrase: "Chef-lieu du Borgou, au carrefour des routes du Niger, du Nigeria et du Togo. Une cité royale, marchande et étudiante.",
  hero: { img: "festival.webp", mobile: "bioguerra-bronze.webp", alt: "Danseurs en tenue rouge, jaune et verte pendant le Benin Roots Festival de Parakou", credit: "Danse tèkè au Benin Roots Festival. Photo Benin Roots Festival (Pinterest), droits à obtenir.", position: "50% 35%" },
  symboles: ["cauri", "case"],
  accroche: "Le palais royal, les marchés, Bio Guerra",
  chapoDecouvrir: "Du palais royal aux marchés : quatre lieux pour comprendre Parakou.",

  vitrine: {
    titre: "Parakou, carrefour du Nord",
    texte: "Zémidjans au carrefour, minarets au bout de la rue, Bio Guerra à cheval sur sa place : Parakou vit au rythme des routes qui s'y croisent.",
    lien: "Parcourir Parakou en images",
    imgs: [
      { src: "bioguerra-bronze.webp", alt: "Statue équestre en bronze de Bio Guerra, cheval cabré sur fond de ciel bleu", legende: "Bio Guerra en bronze. Photo Etoile Salariat (Pinterest), droits à obtenir." },
      { src: "tambours.webp", alt: "Joueurs de tambour en chemise bleue au Benin Roots Festival", legende: "Tambours au Benin Roots Festival. Photo Benin Roots Festival (Pinterest), droits à obtenir." },
      { src: "bioguera.webp", alt: "Statue équestre de Bio Guerra sur son socle blanc, place Bio Guerra", legende: "Bio Guerra à cheval, sur sa place. Photo Dowomiche, CC BY-SA 4.0." },
      { src: "obelisque.webp", alt: "Zémidjans et voitures au carrefour de l'obélisque marqué « Parakou »", legende: "Le carrefour de l'obélisque. Photo UXrocks, CC BY 3.0." },
      { src: "rue.webp", alt: "Rue animée de Parakou, piétons, camion et minarets au fond", legende: "Rue du centre, minarets au fond. Photo UXrocks, CC BY 3.0." }
    ]
  },
  plein: { img: "marche2.webp", alt: "Entrée du marché Dépôt, parasols et étals de fruits", titre: "La ville qui commerce", texte: "Dépôt, Arzèkè, Guéma, Zongo : chaque quartier a son marché. Guéma, reconstruit, a rouvert en novembre 2025 avec plus de 500 places.", credit: "Marché Dépôt. Photo Aimeabibis, Wikimedia Commons, CC BY-SA 4.0." },

  decouvrir: [
    { titre: "Le palais royal", lieu: "palais",
      texte: "Siège de la royauté baatonu de Parakou, le palais garde ses murs blancs et ses bas-reliefs. On y vient saluer le roi lors des grandes fêtes.",
      grande: { src: "palais.webp", alt: "Le palais royal de Parakou et ses bas-reliefs, vue de la cour", credit: "Aboudouraman, CC BY-SA 4.0" },
      petite: { src: "palais-mur.webp", alt: "Portrait peint sur un mur du palais royal", credit: "Aboudouraman, CC BY-SA 4.0" } },
    { titre: "Les marchés", lieu: "marche",
      texte: "Arzèkè au centre, Zongo près de la mosquée, Dépôt près de l'ancienne gare : les produits du Nord y croisent ceux du Nigeria et de Cotonou.",
      grande: { src: "ville.webp", alt: "Rue animée du centre de Parakou", credit: "UXrocks, CC BY 3.0" },
      petite: { src: "zongo.webp", alt: "Panneau « marché » et minaret dans le quartier Zongo", credit: "Aboudouraman, CC BY-SA 4.0", portrait: true } },
    { titre: "La place Bio Guerra", lieu: "bioguerra",
      texte: "Bio Guerra mena en 1916 la résistance des Baatonu contre l'administration coloniale. La place qui porte son nom marque l'entrée de la ville.",
      grande: { src: "bioguerra-bronze.webp", alt: "Statue équestre en bronze de Bio Guerra", credit: "Etoile Salariat (Pinterest), droits à obtenir" },
      petite: { src: "colombe.webp", alt: "Monument de la Colombe", credit: "Dowomiche, CC BY-SA 4.0" } },
    { titre: "La mosquée centrale", lieu: null,
      texte: "Ses minarets blancs dominent le centre. À Parakou, la prière du vendredi rythme la semaine autant que les jours de marché.",
      grande: { src: "mosquee.webp", alt: "Minarets de la mosquée de Parakou", credit: "UXrocks, CC BY 3.0" },
      petite: { src: "kobourou.webp", alt: "Palais royal de Kobourou", credit: "Africasounvi, CC BY-SA 4.0" } }
  ],

  carte: { centre: [9.3357, 2.6295], zoom: 14 },
  lieux: [
    { id: "palais", nom: "Palais royal", d: "Rue des Cheminots, Boundarou.", coords: [9.332562, 2.623267], couleur: "#c8102e" },
    { id: "marche", nom: "Marché Arzèkè", d: "Carrefour de la Colombe.", coords: [9.337173, 2.628738], couleur: "#d9a31f" },
    { id: "bioguerra", nom: "Place Bio Guerra", d: "Sur la RNIE 6.", coords: [9.33864, 2.636703], couleur: "#1f7a3a" },
    { id: "mairie", nom: "Mairie de Parakou", d: "Carrefour de la Colombe. Horaires à confirmer auprès de la mairie.", coords: [9.339005, 2.629183], couleur: "#3fa9d8", mairie: true }
  ],
  arrondissements: ["1er", "2e", "3e"],
  acces: "À un peu plus de 400 km au nord de Cotonou par la RNIE 2.",
  creditsPied: "Photos Wikimedia Commons : Africasounvi, Aimeabibis, Aboudouraman, Dowomiche, Fawaz.tairou (CC BY-SA 4.0), UXrocks (CC BY 3.0). Images de maquette, droits à obtenir : Benin Roots Festival, Etoile Salariat (via Pinterest)."
};
