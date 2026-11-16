// Démarches communes à toutes les mairies (procédures nationales). {marche} est remplacé par le nom du marché de la commune.
// Pièces, coûts et délais : exemples à valider par chaque mairie.
window.CATEGORIES = {
  civil:   { nom: "État civil", sym: "enfant" },
  foncier: { nom: "Foncier et construction", sym: "case" },
  taxes:   { nom: "Commerce et marchés", sym: "cauri" },
  attest:  { nom: "Attestations", sym: "sceau" }
};
window.SITUATIONS = [
  { id: "naissance", titre: "Un enfant est né", d: "Déclarer, obtenir l'acte", sym: "enfant", ids: ["declaration", "naissance"] },
  { id: "installe", titre: "Je m'installe ici", d: "Résidence, légalisation", sym: "sceau", ids: ["residence", "legal"] },
  { id: "construis", titre: "Je construis", d: "Terrain, permis", sym: "case", ids: ["convention", "permis"] },
  { id: "commerce", titre: "Je vends au marché", d: "Place, occupation", sym: "cauri", ids: ["marche", "occupation"] }
];
window.DEMARCHES = [
  { id: "naissance", cat: "civil", t: "Obtenir un acte de naissance", top: 1, court: "48 h", delai: "48 heures", cout: "500 FCFA", ou: "Service de l'état civil, ou centre d'état civil de votre arrondissement.", p: ["Pièce d'identité du demandeur", "Date et lieu de naissance de la personne concernée", "Numéro de l'acte, si vous le connaissez"] },
  { id: "declaration", cat: "civil", t: "Déclarer une naissance", court: "Le jour même", delai: "Immédiat", cout: "Gratuit", ou: "Centre d'état civil du lieu de naissance, dans les 21 jours.", p: ["Fiche de naissance délivrée par la maternité", "Pièces d'identité des deux parents", "Acte de mariage des parents, s'il existe"] },
  { id: "mariage", cat: "civil", t: "Se marier à la mairie", court: "10 jours", delai: "10 jours de publication des bans", cout: "Selon délibération communale", ou: "Service de l'état civil, sur rendez-vous.", p: ["Actes de naissance des futurs époux", "Certificats de résidence", "Pièces d'identité des époux et de deux témoins", "Certificat prénuptial"] },
  { id: "deces", cat: "civil", t: "Déclarer un décès", court: "Le jour même", delai: "Immédiat", cout: "Gratuit", ou: "Centre d'état civil du lieu du décès.", p: ["Certificat de décès établi par un médecin", "Pièce d'identité du défunt", "Pièce d'identité du déclarant"] },
  { id: "residence", cat: "attest", t: "Demander un certificat de résidence", top: 2, court: "24 h", delai: "24 heures", cout: "1 000 FCFA", ou: "Mairie centrale ou bureau de votre arrondissement.", p: ["Pièce d'identité", "Attestation du chef de quartier ou de village", "Une photo d'identité"] },
  { id: "legal", cat: "attest", t: "Faire légaliser une signature", top: 3, court: "Sur place", delai: "Immédiat", cout: "200 FCFA par document", ou: "Bureau des légalisations, mairie centrale.", p: ["Document original à légaliser", "Pièce d'identité du signataire, présent en personne"] },
  { id: "permis", cat: "foncier", t: "Déposer un permis de construire", top: 4, court: "30 jours", delai: "30 jours", cout: "Selon la surface construite", ou: "Service des affaires domaniales et de l'urbanisme.", p: ["Formulaire de demande signé", "Plans de situation, de masse et de façades", "Titre foncier ou attestation de détention", "Pièce d'identité du demandeur"] },
  { id: "convention", cat: "foncier", t: "Faire affirmer une convention de vente", court: "7 jours", delai: "7 jours", cout: "Selon la valeur du terrain", ou: "Service des affaires domaniales.", p: ["Convention de vente en trois exemplaires", "Pièces d'identité du vendeur et de l'acheteur", "Levé topographique du terrain", "Présence des deux parties et de deux témoins"] },
  { id: "marche", cat: "taxes", t: "Obtenir une place au {marche}", court: "Selon place", delai: "Selon disponibilité", cout: "Ticket journalier ou abonnement mensuel", ou: "Régie du {marche}.", p: ["Pièce d'identité", "Description de l'activité", "Carte d'artisan ou de commerçant, si vous l'avez"] },
  { id: "occupation", cat: "taxes", t: "Occuper le domaine public", court: "7 jours", delai: "7 jours", cout: "Redevance selon la surface", ou: "Service des recettes de la mairie.", p: ["Demande adressée au Maire", "Plan ou croquis de l'emplacement", "Pièce d'identité ou statuts de l'entreprise"] }
];
