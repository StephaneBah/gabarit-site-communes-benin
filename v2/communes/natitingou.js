// Natitingou (Atacora). Images : Wikimedia Commons, voir assets/img/credits-communes.json.
window.COMMUNE = {
  id: "natitingou",
  nom: "Natitingou",
  departement: "Atacora",
  devise: "Union, Justice, Prospérité",
  titre: "Natitingou, au pied de l'Atacora",
  img: "../assets/img/natitingou/",
  blason: { src: "../assets/logos/natitingou-logo.png", taille: "auto 104%", position: "1% 40%", ratio: "1" },
  couleurs: { argile: "#3d5a2a", "argile-f": "#223518", terre: "#10170b", "terre-rgb": "16 23 11", lumiere: "#e0a64a" },
  marche: "marché central",
  phrase: "Au pied de la chaîne de l'Atacora, la capitale du Nord-Ouest. Pays des tata somba, maisons-forteresses en terre, et porte de la Pendjari.",
  hero: { img: "atacora.webp", alt: "Collines boisées de la chaîne de l'Atacora à perte de vue", credit: "Chaîne de l'Atacora. Photo Abdoul-Azize Boukary, Wikimedia Commons, CC BY-SA 4.0.", position: "50% 60%" },
  symboles: ["case", "lion"],
  accroche: "Tata somba, chutes de Kota, Atacora",
  chapoDecouvrir: "Des tata somba aux chutes de Kota : quatre lieux pour comprendre Natitingou.",

  vitrine: {
    titre: "Autour de Natitingou",
    texte: "À moins de deux heures de route : les cascades de Tanougou et le parc national de la Pendjari, l'une des dernières grandes réserves de faune d'Afrique de l'Ouest.",
    lien: "Parcourir Natitingou en images",
    imgs: [
      { src: "takienta.webp", alt: "Une tata somba à tourelles coiffées de chaume, murs de terre", legende: "Une tata somba (takienta). Image Black Architectural History (Pinterest), droits à obtenir." },
      { src: "tata-cour.webp", alt: "Cour d'une tata somba, greniers de terre et toits de paille", legende: "Au pays des tata somba. Image Evaneos (Pinterest), droits à obtenir." },
      { src: "tanougou.webp", alt: "Cascades de Tanougou tombant dans un bassin rocheux", legende: "Les cascades de Tanougou, commune de Tanguiéta. Photo Ji-Elle, CC BY-SA 4.0." },
      { src: "saut.webp", alt: "Un jeune homme saute dans le vide depuis la falaise de la cascade", legende: "Plongeon à Tanougou. Photo Fawaz.tairou, CC BY-SA 4.0." },
      { src: "pendjari2.webp", alt: "Savane verte du parc de la Pendjari", legende: "La savane de la Pendjari. Photo Martin Wegmann, CC BY-SA 3.0." }
    ]
  },
  plein: { img: "pendjari.webp", alt: "Antilopes et oiseaux autour d'un point d'eau dans la Pendjari", titre: "La Pendjari, à deux heures", texte: "Lions, éléphants, buffles, antilopes : le parc national commence au nord de Tanguiéta. Natitingou est la dernière grande ville avant la piste.", credit: "Parc national de la Pendjari. Photo Gregor Rom, Wikimedia Commons, CC BY-SA 4.0." },

  decouvrir: [
    { titre: "Les tata somba", lieu: "musee",
      texte: "Tourelles-greniers, terrasse pour dormir, rez-de-chaussée pour les bêtes : la maison des Otammari est un petit château de terre, bâti à la main et refait après chaque saison des pluies.",
      grande: { src: "tata.webp", alt: "Village de tata somba, maisons de terre à tourelles coiffées de paille", credit: "Dominik Schwarz, CC BY-SA 3.0" },
      petite: { src: "tata2.webp", alt: "Tata somba à étage, au pied d'un grand baobab", credit: "Justin Abadjaye, CC BY-SA 4.0" } },
    { titre: "Kaba, le résistant", lieu: "kaba",
      texte: "En 1916 et 1917, Kaba mena la résistance des peuples de l'Atacora contre la conquête coloniale. Sa statue veille sur le musée qui porte son nom.",
      grande: { src: "kaba-musee.webp", alt: "Façade rouge du musée Kaba, toits coniques et statue au sommet", credit: "Barke11, CC BY-SA 4.0" },
      petite: { src: "kaba.webp", alt: "Statue de bronze de Kaba, arc à l'épaule", credit: "Barke11, CC BY-SA 4.0", portrait: true } },
    { titre: "Les chutes de Kota", lieu: "kota",
      texte: "À une quinzaine de kilomètres de la ville, l'eau tombe d'une falaise de grès dans un bassin où l'on se baigne. Un campement accueille les visiteurs.",
      grande: { src: "kota.webp", alt: "Bassin vert au pied de la falaise des chutes de Kota", credit: "Ji-Elle, CC BY-SA 4.0" },
      petite: { src: "passerelle.webp", alt: "Passerelle métallique au-dessus du ruisseau de Kota", credit: "Ji-Elle, CC BY-SA 4.0" } },
    { titre: "Une ville dans la vallée", lieu: null,
      texte: "Natitingou s'étire au creux des collines de l'Atacora, à plus de 400 mètres d'altitude. En saison sèche, l'harmattan voile les crêtes dès le matin.",
      grande: { src: "ville.webp", alt: "Maisons de Natitingou dans la verdure, collines à l'horizon", credit: "Baliola, CC BY-SA 3.0" },
      petite: { src: "charbon.webp", alt: "Champs secs et collines de l'Atacora", credit: "Ji-Elle, CC BY-SA 4.0" } }
  ],

  carte: { centre: [10.262, 1.408], zoom: 12 },
  lieux: [
    { id: "musee", nom: "Musée régional, arts et traditions", d: "Rue du Musée, Yokossi.", coords: [10.3109, 1.380389], couleur: "#c8102e" },
    { id: "kaba", nom: "Musée Kaba", d: "Sur la RNIE 3, au sud de la ville.", coords: [10.25457, 1.381467], couleur: "#d9a31f" },
    { id: "kota", nom: "Chutes de Kota", d: "À 15 km, piste praticable en saison sèche.", coords: [10.21117, 1.446998], couleur: "#1f7a3a" },
    { id: "mairie", nom: "Hôtel de ville de Natitingou", d: "Rue de l'Hôpital, Yokossi. Horaires à confirmer auprès de la mairie.", coords: [10.31111, 1.379358], couleur: "#3fa9d8", mairie: true }
  ],
  arrondissements: ["Natitingou 1", "Natitingou 2", "Natitingou 3", "Perma", "Kouandata", "Tchoumi-Tchoumi", "Kotopounga", "Péporiyakou", "Kouaba"],
  acces: "À environ 540 km au nord-ouest de Cotonou, par la RNIE 3 via Djougou.",
  creditsPied: "Photos Wikimedia Commons : Abdoul-Azize Boukary, Ji-Elle, Justin Abadjaye, Barke11, Fawaz.tairou, Gregor Rom (CC BY-SA 4.0), Dominik Schwarz, Baliola, Martin Wegmann (CC BY-SA 3.0). Images de maquette, droits à obtenir (via Pinterest), voir a-integrer/LISEZ-MOI-DROITS.md."
};
