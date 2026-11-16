// Choisit la commune d'après l'adresse (?c=ouidah). Liste fermée : on ne charge que nos propres fichiers.
(() => {
  const LISTE = ["abomey", "ouidah", "porto-novo", "cotonou", "parakou", "natitingou", "nikki"];
  let c = new URLSearchParams(location.search).get("c");
  if (!LISTE.includes(c)) c = "abomey";
  window.COMMUNES = LISTE;
  // ouverture « blason » : une fois par visite, sur l'accueil seulement
  try {
    const accueil = /(^|\/)(index\.html)?$/.test(location.pathname);
    if (accueil && !sessionStorage.getItem("vu-" + c) && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.classList.add("intro");
      sessionStorage.setItem("vu-" + c, "1");
    }
  } catch (e) {}
  document.write(`<script src="communes/${c}.js?v=27"><\/script>`);
})();
