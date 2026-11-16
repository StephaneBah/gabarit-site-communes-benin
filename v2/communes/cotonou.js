// Cotonou (Littoral). Images : Wikimedia Commons, voir assets/img/credits-communes.json.
window.COMMUNE = {
  id: "cotonou",
  nom: "Cotonou",
  departement: "Littoral",
  devise: "Entre la lagune et l'océan",
  titre: "Cotonou, capitale économique du Bénin",
  img: "../assets/img/cotonou/",
  blason: { src: "../assets/logos/cotonou-logo.jpg", taille: "auto 92%", position: "50% 50%", ratio: "1" },
  couleurs: { argile: "#0a5a8a", "argile-f": "#053955", terre: "#06141f", "terre-rgb": "6 20 31", lumiere: "#f2b632" },
  marche: "marché Tokpa Yôyô",
  phrase: "Capitale économique du Bénin, bâtie sur un cordon de sable entre le lac Nokoué et l'océan. En fongbe, Kútɔ̀nú : « l'embouchure du fleuve de la mort ».",
  hero: { img: "amazone-tour.webp", mobile: "amazone-allee.webp", alt: "La statue de l'Amazone, trente mètres de bronze, sur l'esplanade du front de mer", credit: "Esplanade de l'Amazone, Tour cycliste du Bénin 2026. Photo Fawaz.tairou, Wikimedia Commons, CC BY 4.0.", position: "60% 35%" },
  symboles: ["bateau", "cauri"],
  accroche: "L'Amazone, la Marina, Tokpa, l'océan",
  chapoDecouvrir: "De l'esplanade de l'Amazone à la plage de Fidjrossè : cinq lieux pour comprendre Cotonou.",

  vitrine: {
    titre: "Les bons coins",
    texte: "Haie Vive le soir, le front de mer de la Marina, les buvettes de Fidjrossè le dimanche : Cotonou se vit dehors.",
    lien: "Parcourir Cotonou en images",
    imgs: [
      { src: "cote-ciel.webp", alt: "Cotonou vu du ciel : la ville serrée entre l'océan, sa plage et la lagune", legende: "Cotonou vu du ciel, entre océan et lagune. Image Gangwaze (Pinterest), droits à obtenir." },
      { src: "hotel-ocean.webp", alt: "Piscine bordée de palmiers d'un hôtel face à l'océan, vue d'en haut", legende: "Bord de mer, côté hôtels. Photo Filippo (Pinterest), droits à obtenir." },
      { src: "mur-graphique.webp", alt: "Tricycles rouges devant une immense fresque colorée", legende: "Le mur graphique de Cotonou. Photo Smillie (Pinterest), droits à obtenir." },
      { src: "amazone-ciel.webp", alt: "L'esplanade de l'Amazone et le front de mer vus d'en haut", legende: "L'Amazone et le front de mer. Image Africa Views Facts (Pinterest), droits à obtenir." },
      { src: "nuit-haut.webp", alt: "Cotonou la nuit vue d'en haut : la rue de la Sonaec éclairée en orange, voitures et néons", legende: "Cotonou la nuit, rue de la Sonaec. Photo Olchaffa (Pinterest), droits à obtenir." },
      { src: "pont-soir.webp", alt: "La lagune au crépuscule depuis l'ancien pont, lumières de la ville sur l'eau", legende: "Le soir sur l'ancien pont. Photo Renaud Adido (Pinterest), droits à obtenir." },
      { src: "haievive.webp", alt: "Façades éclairées et palmiers dans une rue de Haie Vive, la nuit", legende: "Haie Vive, la nuit. Photo Tohinde, CC BY 4.0." },
      { src: "sofitel.webp", alt: "Le Sofitel Cotonou Marina, façade blanche et vitrée sous un ciel bleu", legende: "Le Sofitel, sur le boulevard de la Marina. Photo Freed Armel, CC BY-SA 4.0." },
      { src: "fidjrosse-jeunes.webp", alt: "Deux jeunes femmes en pagnes assises dans le sable de Fidjrossè", legende: "Dimanche à Fidjrossè. Photo Saliousoft, CC BY-SA 4.0." },
      { src: "ganhi-haut.webp", alt: "Vue d'en haut du centre de Cotonou, ses tours et ses avenues", legende: "Le centre vu d'en haut. Photo kamaroutessilimi (Pinterest), droits à obtenir." }
    ]
  },
  plein: { img: "lagune.webp", alt: "Coucher de soleil sur l'embouchure de la lagune de Cotonou", titre: "Le soir, sur la lagune", texte: "Là où la lagune rejoint l'océan, la ville s'arrête et le ciel prend toute la place.", credit: "Embouchure de la lagune. Photo Alacoolwiki, Wikimedia Commons, CC BY 4.0." },

  decouvrir: [
    { titre: "L'Amazone", lieu: "amazone",
      texte: "Haute d'une trentaine de mètres, la statue rend hommage aux Agoodjié, les guerrières du royaume du Danxomè. Elle domine l'esplanade du front de mer, face à l'océan.",
      grande: { src: "amazone-jardins.webp", alt: "L'Amazone au bout des allées fleuries de l'esplanade", credit: "Fawaz.tairou, CC BY 4.0" },
      petite: { src: "amazone-aube.webp", alt: "Silhouette de l'Amazone au lever du soleil, sur l'esplanade", credit: "Fawaz.tairou, CC BY-SA 4.0" } },
    { titre: "La Marina", lieu: "marina",
      texte: "Le long du boulevard de la Marina, face à la mer, le palais de la Marina abrite la présidence de la République. En face du palais des Congrès, la Cité ministérielle réunit depuis octobre 2025 seize ministères sur cinq hectares.",
      grande: { src: "presidence.webp", alt: "Le palais de la Marina, bâtiments vitrés et pelouses, drapeaux du Bénin", credit: "Adoscam, CC BY-SA 4.0" },
      petite: { src: "cite-ministerielle.webp", alt: "La Cité ministérielle, bâtiments blancs et palmiers, vue depuis un hôtel voisin", credit: "Basile Ayina (Pinterest), droits à obtenir", portrait: true } },
    { titre: "Tokpa, le grand marché", lieu: "tokpa",
      texte: "Dantokpa, le plus grand marché d'Afrique de l'Ouest, change d'adresse depuis 2026. Pagnes, cosmétiques et bijoux ont rejoint Tokpa Yôyô, près du stade de l'Amitié ; les grossistes de l'alimentation partent à Tokpa Daho, à Akassato. Le transfert se poursuit, et l'ancien site, au bord de la lagune, reste en partie actif.",
      grande: { src: "dantokpa-ciel.webp", alt: "Dantokpa vu du ciel, entre la lagune et le pont, avant le transfert", credit: "Dantokpa vu du ciel, avant 2026. Guide Travel Bénin (Pinterest), droits à obtenir" },
      petite: { src: "pirogue.webp", alt: "Pirogue chargée de marchandises sur la lagune", credit: "Adoscam, CC BY-SA 4.0" } },
    { titre: "La cathédrale Notre-Dame", lieu: "cathedrale",
      texte: "Ses rayures rouges et blanches se voient de loin. Notre-Dame-de-Miséricorde veille sur le quartier de Xwlacodji, tout près du pont et du marché.",
      grande: { src: "cathedrale.webp", alt: "La cathédrale rayée rouge et blanc et son clocher, vue de la rue", credit: "Saliousoft, CC BY-SA 4.0" },
      petite: { src: "cathedrale2.webp", alt: "Façade rayée de la cathédrale Notre-Dame", credit: "MVN, CC BY 2.0", portrait: true } },
    { titre: "La plage de Fidjrossè", lieu: "plage",
      texte: "Le week-end, Cotonou descend à la mer : buvettes, sièges en pneus recyclés, parties de foot et baignades, même si la barre reste dangereuse.",
      grande: { src: "fidjrosse.webp", alt: "Vagues sur le sable doré de Fidjrossè, ciel bleu et nuages", credit: "MyLady333, CC0" },
      petite: { src: "pneus.webp", alt: "Tables et sièges en pneus peints, sous les palmiers de la plage", credit: "Adoscam, CC BY-SA 4.0" } }
  ],

  carte: { centre: [6.36, 2.41], zoom: 13 },
  lieux: [
    { id: "amazone", nom: "Esplanade de l'Amazone", d: "Front de mer, 12e arrondissement.", coords: [6.3492, 2.407564], couleur: "#c8102e" },
    { id: "marina", nom: "Palais de la Marina", d: "Boulevard de la Marina.", coords: [6.351575, 2.409128], couleur: "#d9a31f" },
    { id: "tokpa", nom: "Tokpa Yôyô", d: "Galerie marchande ouverte le 9 mai 2026, stade de l'Amitié, Kouhounou.", coords: [6.385965, 2.380003], couleur: "#e06a2c" },
    { id: "dantokpa", nom: "Ancien marché Dantokpa", d: "Au bord de la lagune. Transfert en cours vers Tokpa Yôyô et Tokpa Daho.", coords: [6.372711, 2.433508], couleur: "#8a6a4a" },
    { id: "cathedrale", nom: "Cathédrale Notre-Dame", d: "Avenue Clozel, Xwlacodji.", coords: [6.356337, 2.439151], couleur: "#1f7a3a" },
    { id: "plage", nom: "Plage de Fidjrossè", d: "Route des Pêches.", coords: [6.349162, 2.365768], couleur: "#7a4fb0" },
    { id: "mairie", nom: "Mairie de Cotonou", d: "Sainte-Rita. Adresse et horaires à confirmer auprès de la mairie.", coords: [6.376031, 2.413093], couleur: "#3fa9d8", mairie: true }
  ],
  arrondissements: Array.from({ length: 13 }, (_, i) => `${i + 1}e`),
  acces: "Aéroport international et port autonome : la porte d'entrée du pays.",
  creditsPied: "Photos Wikimedia Commons : MyLady333 (CC0), Adoscam, Saliousoft, Fawaz.tairou, Charbel1719, Freed Armel (CC BY-SA 4.0), Tohinde, Fawaz.tairou, Alacoolwiki (CC BY 4.0), MVN (CC BY 2.0). Images de maquette, droits à obtenir : Olchaffa, Renaud Adido, Guide Travel Bénin, kamaroutessilimi, Gangwaze, Filippo, Smillie, Africa Views Facts, Basile Ayina (via Pinterest)."
};
