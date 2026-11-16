// Mouvement : menu plein écran, en-tête collant, diaporama du héros, apparitions au défilement.
// Le HTML est déjà complet (généré par Astro) : ce script n'ajoute que le mouvement.
const calme = matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const pose = (im) => { if (!im.dataset.src) return; if (im.dataset.srcset) im.srcset = im.dataset.srcset; im.src = im.dataset.src; delete im.dataset.src; delete im.dataset.srcset; };

// 1. menu plein écran
const top = $(".top"), volet = $("#volet"), b = top && $(".burger", top);
if (volet && b) {
  const ouvrir = (o) => {
    b.setAttribute("aria-expanded", o);
    document.documentElement.classList.toggle("menu-ouvert", o);
    if (o) { volet.hidden = false; requestAnimationFrame(() => requestAnimationFrame(() => volet.classList.add("ouvert"))); $("nav a", volet).focus({ preventScroll: true }); }
    else { volet.classList.remove("ouvert"); setTimeout(() => (volet.hidden = true), calme ? 0 : 500); b.focus({ preventScroll: true }); }
  };
  b.addEventListener("click", () => ouvrir(true));
  $(".fermer", volet).addEventListener("click", () => ouvrir(false));
  volet.addEventListener("click", (e) => { if (e.target.closest("nav a")) ouvrir(false); });
  addEventListener("keydown", (e) => { if (e.key === "Escape" && !volet.hidden) ouvrir(false); });
}
// en-tête collant : disparaît quand on descend, revient dès qu'on remonte (une lecture par image affichée)
if (top) {
  let y0 = 0, attente = false;
  addEventListener("scroll", () => {
    if (attente) return; attente = true;
    requestAnimationFrame(() => {
      const y = scrollY; attente = false;
      top.classList.toggle("fixe", y > 120);
      if (y > 400 && y > y0 + 4) top.classList.add("cache");
      else if (y < y0 - 4 || y <= 400) top.classList.remove("cache");
      y0 = y;
    });
  }, { passive: true });
}
// jauge de lecture (navigateurs sans animations liées au défilement)
if (!CSS.supports("animation-timeline: scroll()") && !calme) {
  const j = $(".jauge");
  if (j) addEventListener("scroll", () => { const h = document.documentElement.scrollHeight - innerHeight; j.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`; }, { passive: true });
}
if (document.documentElement.classList.contains("intro")) setTimeout(() => document.documentElement.classList.remove("intro"), 3400);

// 2. accueil : diaporama en fondu ; les photos suivantes ne se chargent qu'après la première
const hero = $("#heroImg");
if (hero) {
  const boite = hero.closest(".hero"), calques = $$(".hero img.diapo[data-src]");
  const tous = [hero, ...calques];
  hero.classList.add("diapo");
  const suite = () => setTimeout(() => calques.forEach(pose), 900);
  hero.complete ? suite() : hero.addEventListener("load", suite, { once: true });
  const pts = document.createElement("div"); pts.className = "points"; pts.setAttribute("aria-hidden", "true");
  pts.innerHTML = tous.map(() => "<i></i>").join(""); boite.appendChild(pts);
  let k = 0, visible = true;
  const montre = () => { tous.forEach((im, j) => im.classList.toggle("vue", j === k)); [...pts.children].forEach((p, j) => p.classList.toggle("on", j === k)); };
  montre();
  // hors écran, le héros s'arrête : rien ne tourne pour rien
  new IntersectionObserver((es) => { visible = es[0].isIntersecting; boite.classList.toggle("au-repos", !visible); }).observe(boite);
  if (tous.length > 1) setInterval(() => { if (document.hidden || !visible) return; k = (k + 1) % tous.length; montre(); }, 5500);
}

// 3. images : fondu à l'arrivée
$$('img[loading="lazy"]').forEach((i) => {
  if (i.complete && i.naturalWidth) return;
  i.classList.add("attend"); i.addEventListener("load", () => i.classList.remove("attend"), { once: true });
});

// 4. titres : chaque mot monte de derrière un cache
$$(".sec h2, .chap h2, .frise h2, .recit-tete h1").forEach((h) => {
  if (h.querySelector(".mot") || !h.textContent.trim()) return;
  h.setAttribute("aria-label", h.textContent.trim());
  h.innerHTML = h.textContent.trim().split(/\s+/).map((m, i) => `<span class="mot" aria-hidden="true"><span style="--i:${i}">${m}</span></span>`).join(" ");
  h.classList.add("titre-mots");
});
const io2 = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("leve"); io2.unobserve(e.target); } }), { rootMargin: "0px 0px -12% 0px" });
$$(".titre-mots").forEach((h) => io2.observe(h));

// 5. apparitions au défilement
const cibles = $$(".sec .chapo, .entrees a, .archives figure, .roi, .lien, .chap .t p, .chap .voir, .lieux li, .recit-tete p, .pied > *");
cibles.forEach((el, i) => { el.classList.add("rv"); el.style.setProperty("--d", `${(i % 4) * 80}ms`); });
const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("vu"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
cibles.forEach((el) => io.observe(el));

// 6. vitrine d'archives (Abomey) : avance seule sur téléphone, jusqu'au premier toucher
const vit = $(".archives");
if (vit && matchMedia("(max-width:819px)").matches && !calme) {
  let stop = false;
  ["pointerdown", "wheel", "touchstart"].forEach((ev) => vit.addEventListener(ev, () => (stop = true), { passive: true }));
  const t = setInterval(() => {
    if (stop) return clearInterval(t);
    const r = vit.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight || !vit.children[0]) return;
    const pas = vit.children[0].offsetWidth + 10, fin = vit.scrollWidth - vit.clientWidth - 5;
    vit.scrollTo({ left: vit.scrollLeft >= fin ? 0 : vit.scrollLeft + pas, behavior: "smooth" });
  }, 3200);
}

// 7. vitrine en trios : avance seule, flèches discrètes ; chaque groupe charge ses photos juste avant d'apparaître
const car = $(".carrousel");
if (car) {
  const ts = $$(".trio", car); let k = 0, minuteur;
  const charge = (j) => $$("img[data-src]", ts[(j + ts.length) % ts.length]).forEach(pose);
  const montre = (n) => { k = (n + ts.length) % ts.length; charge(k); charge(k + 1);
    ts.forEach((t, j) => { t.classList.toggle("on", j === k); t.toggleAttribute("aria-hidden", j !== k); });
    $(".compte b", car).textContent = String(k + 1).padStart(2, "0"); };
  const lance = () => { clearInterval(minuteur); if (ts.length > 1) minuteur = setInterval(() => { if (!document.hidden && !car.matches(":hover, :focus-within") && car.dataset.visible) montre(k + 1); }, 6000); };
  $(".prec", car).addEventListener("click", () => { montre(k - 1); lance(); });
  $(".suiv", car).addEventListener("click", () => { montre(k + 1); lance(); });
  new IntersectionObserver((es) => { if (es[0].isIntersecting) { car.dataset.visible = "1"; charge(1); } else delete car.dataset.visible; }, { rootMargin: "300px" }).observe(car);
  lance();
}
