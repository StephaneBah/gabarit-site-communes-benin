// Briques communes à toutes les pages : identité de la commune, liens, onglets mobile, carte des lieux.
(() => {
  const C = window.COMMUNE, r = document.documentElement.style;
  if (C.blason) {
    r.setProperty("--blason-src", `url("${C.blason.src}")`);
    r.setProperty("--blason-taille", C.blason.taille || "contain");
    r.setProperty("--blason-pos", C.blason.position || "center");
    r.setProperty("--blason-ratio", C.blason.ratio || "1");
  }
  else document.documentElement.classList.add("sans-blason");
  // couleurs propres à la commune (sinon : argile d'Abomey)
  Object.entries(C.couleurs || {}).forEach(([k, v]) => r.setProperty(`--${k}`, v));
  const de = /^[AEIOUÉÈ]/i.test(C.nom) ? "d'" : "de ";
  window.DE = de;
  document.addEventListener("DOMContentLoaded", () => {
    // blason absent : monogramme
    if (!C.blason) document.querySelectorAll(".blason").forEach((b) => { b.classList.add("mono"); b.textContent = C.nom[0]; });
    document.querySelectorAll(".blason").forEach((b) => b.setAttribute("aria-label", `Blason de la commune ${de}${C.nom}`));
    // chaque lien interne garde la commune choisie
    document.querySelectorAll("a[href]").forEach((a) => {
      const m = a.getAttribute("href").match(/^(index|demarches|decouvrir)\.html(#.*)?$/);
      if (m) a.setAttribute("href", `${m[1]}.html?c=${C.id}${m[2] || ""}`);
    });
    // favicon : initiale sur la couleur de la commune
    const f = getComputedStyle(document.documentElement).getPropertyValue("--argile").trim();
    const ico = document.querySelector("link[rel=icon]");
    if (ico) ico.href = "data:image/svg+xml," + encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='${f}'/><text x='50' y='74' font-size='70' text-anchor='middle' fill='#f4e9dc' font-family='Impact'>${C.nom[0]}</text></svg>`);
    // les autres communes du gabarit
    const pied = document.querySelector(".pied");
    if (pied && window.COMMUNES) {
      const page = location.pathname.split("/").pop() || "index.html";
      const NOMS = { abomey: "Abomey", ouidah: "Ouidah", "porto-novo": "Porto-Novo", cotonou: "Cotonou", parakou: "Parakou", natitingou: "Natitingou", nikki: "Nikki" };
      pied.insertAdjacentHTML("beforeend", `<nav class="autres" aria-label="Le même site pour d'autres communes"><span>Même gabarit</span>${COMMUNES.map((id) =>
        `<a href="${page}?c=${id}"${id === C.id ? ' aria-current="page"' : ""}>${NOMS[id]}</a>`).join("")}</nav>`);
    }
    // signature de la marque-pays (texte seul : le logo officiel demande l'accord de l'émetteur)
    if (pied) pied.insertAdjacentHTML("beforeend", `<p class="pays"><i aria-hidden="true"></i>République du Bénin · <b>Un monde de splendeurs</b></p>`);
    // maquette de concours : on le dit clairement, en haut de chaque page
    document.body.insertAdjacentHTML("afterbegin", `<p class="maquette">Maquette de concours, site non officiel : ce n'est pas le site de la mairie ${C.nom.match(/^[AEIOUÉ]/i) ? "d'" : "de "}${C.nom}.</p>`);
    document.body.classList.add("avec-maquette");
    vivant(C);
  });
})();

window.reduit = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

// Carte : liste de lieux à gauche, la carte vole vers le lieu choisi.
window.carte = (hote) => {
  const C = window.COMMUNE;
  hote.innerHTML = `<ol class="lieux">${C.lieux.map((l, i) =>
    `<li><button data-i="${i}" style="--c:${l.couleur}"><i>${l.mairie ? "M" : i + 1}</i><span><b>${l.nom}</b><small>${l.d}</small></span></button></li>`).join("")}</ol>
    <div class="map" role="region" aria-label="Carte de ${C.nom}"></div>`;
  const el = hote.querySelector(".map");
  if (!window.L) { el.innerHTML = `<p style="padding:20px">Carte indisponible hors connexion.</p>`; return; }
  // la carte part du pays entier et descend sur la commune quand on arrive dessus
  const vol = !reduit() && "IntersectionObserver" in window;
  const map = L.map(el, { scrollWheelZoom: false, zoomControl: true }).setView(vol ? [9.3, 2.3] : C.carte.centre, vol ? 7 : C.carte.zoom);
  if (vol) {
    el.classList.add("en-vol");
    const io = new IntersectionObserver((es) => { if (!es[0].isIntersecting) return; io.disconnect();
      setTimeout(() => { map.flyTo(C.carte.centre, C.carte.zoom, { duration: 2.6, easeLinearity: 0.2 }); map.once("moveend", () => el.classList.replace("en-vol", "posee")); }, 250);
    }, { threshold: 0.45 });
    io.observe(el);
  }
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "&copy; OpenStreetMap" }).addTo(map);
  const pins = C.lieux.map((l, i) => L.marker(l.coords, {
    icon: L.divIcon({ className: "pin", html: `<span style="--c:${l.couleur}">${l.mairie ? "M" : i + 1}</span>`, iconSize: [34, 34], iconAnchor: [17, 34] }),
    title: l.nom
  }).addTo(map).bindPopup(`<b>${l.nom}</b><br>${l.d}`));
  const boutons = [...hote.querySelectorAll(".lieux button")];
  const choisir = (i) => {
    boutons.forEach((b, j) => b.setAttribute("aria-pressed", i === j));
    const l = C.lieux[i];
    reduit() ? map.setView(l.coords, 17) : map.flyTo(l.coords, 17, { duration: 0.9 });
    pins[i].openPopup();
  };
  boutons.forEach((b, i) => b.addEventListener("click", () => choisir(i)));
  pins.forEach((p, i) => p.on("click", () => boutons.forEach((b, j) => b.setAttribute("aria-pressed", i === j))));
  window.choisirLieu = (id) => { const i = C.lieux.findIndex((l) => l.id === id); if (i >= 0) choisir(i); };
};
