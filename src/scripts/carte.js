// Carte des lieux : liste à gauche, la carte part du pays entier et descend sur la commune.
// Leaflet n'est chargé que lorsque la carte approche de l'écran.
const reduit = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
let leaflet;
const chargeLeaflet = () => leaflet || (leaflet = new Promise((ok, ko) => {
  const s = document.createElement("script"); s.src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js"; s.onload = ok; s.onerror = ko; document.head.appendChild(s);
}));
export function carte(hote) {
  const D = JSON.parse(document.getElementById("donnees-carte").textContent);
  const el = hote.querySelector(".map"), boutons = [...hote.querySelectorAll(".lieux button")];
  let choisir = () => {};
  window.choisirLieu = (id) => { const i = D.lieux.findIndex((l) => l.id === id); if (i >= 0) choisir(i); };
  new IntersectionObserver(async (es, o) => {
    if (!es[0].isIntersecting) return; o.disconnect();
    try { await chargeLeaflet(); } catch { el.innerHTML = `<p style="padding:20px">Carte indisponible hors connexion.</p>`; return; }
    const L = window.L, vol = !reduit();
    const map = L.map(el, { scrollWheelZoom: false, zoomControl: true }).setView(vol ? [9.3, 2.3] : D.carte.centre, vol ? 7 : D.carte.zoom);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "&copy; OpenStreetMap" }).addTo(map);
    if (vol) {
      el.classList.add("en-vol");
      new IntersectionObserver((e2, o2) => { if (!e2[0].isIntersecting) return; o2.disconnect();
        setTimeout(() => { map.flyTo(D.carte.centre, D.carte.zoom, { duration: 2.6, easeLinearity: 0.2 }); map.once("moveend", () => el.classList.replace("en-vol", "posee")); }, 250);
      }, { threshold: 0.45 }).observe(el);
    }
    const pins = D.lieux.map((l, i) => L.marker(l.coords, {
      icon: L.divIcon({ className: "pin", html: `<span style="--c:${l.couleur}">${l.mairie ? "M" : i + 1}</span>`, iconSize: [34, 34], iconAnchor: [17, 34] }), title: l.nom
    }).addTo(map).bindPopup(`<b>${l.nom}</b><br>${l.d}`));
    choisir = (i) => { boutons.forEach((b, j) => b.setAttribute("aria-pressed", i === j)); reduit() ? map.setView(D.lieux[i].coords, 17) : map.flyTo(D.lieux[i].coords, 17, { duration: 0.9 }); pins[i].openPopup(); };
    pins.forEach((p, i) => p.on("click", () => boutons.forEach((b, j) => b.setAttribute("aria-pressed", i === j))));
  }, { rootMargin: "600px" }).observe(el);
  boutons.forEach((b, i) => b.addEventListener("click", () => choisir(i)));
}
