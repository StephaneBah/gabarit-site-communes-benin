// Les communes du gabarit : un fichier de données par commune (src/data/communes/<id>.js).
const fichiers = import.meta.glob("../data/communes/*.js", { eager: true, import: "default" });
export const ORDRE = ["abomey", "ouidah", "porto-novo", "cotonou", "parakou", "natitingou", "nikki"];
export const COMMUNES = ORDRE.map((id) => fichiers[`../data/communes/${id}.js`]);
export const commune = (id) => COMMUNES.find((c) => c.id === id);
export const voyelle = (s) => /^[AEIOUÉÈ]/i.test(s);
export const de = (s) => (voyelle(s) ? "d'" : "de ");
export const BASE = import.meta.env.BASE_URL.replace(/\/?$/, "/");
// adresse d'une page : /<commune>/, /<commune>/demarches/, /<commune>/decouvrir/
export const lien = (id, page = "index", ancre = "") => `${BASE}${id}/${page === "index" ? "" : page + "/"}${ancre}`;
export const logo = (src) => BASE + "logos/" + src.split("/").pop();
