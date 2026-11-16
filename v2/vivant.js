// Mouvement : menu plein écran, en-tête collant, diaporama du héros, apparitions au défilement.
// Appelé par commun.js une fois la page chargée.
function vivant(C) {
  const calme = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const q = `?c=${C.id}`, page = location.pathname.split("/").pop() || "index.html";
  const NOMS = { abomey: "Abomey", ouidah: "Ouidah", "porto-novo": "Porto-Novo", cotonou: "Cotonou", parakou: "Parakou", natitingou: "Natitingou", nikki: "Nikki" };

  // 1. bouton Menu toujours visible + volet plein écran
  const top = document.querySelector(".top");
  if (top) {
    top.insertAdjacentHTML("beforeend", `<button class="burger" aria-expanded="false" aria-controls="volet"><span>Menu</span><i aria-hidden="true"></i></button>`);
    const liens = [
      ["index.html", "", "Accueil", "Le portail de la commune"],
      ["demarches.html", "", "Démarches", "Actes, certificats, autorisations"],
      ["decouvrir.html", "", "Découvrir", C.accroche || "Histoire et lieux"],
      ["index.html", "#mairie", "La mairie", "Adresse, carte, accès"]
    ];
    document.body.insertAdjacentHTML("beforeend", `<div class="volet" id="volet" role="dialog" aria-modal="true" aria-label="Menu" hidden>
      <img src="${C.img + (C.hero.mobile && matchMedia("(max-width:819px)").matches ? C.hero.mobile : C.hero.img)}" alt="" aria-hidden="true">
      <div class="volet-in">
        <p class="volet-t">${C.nom}<small>Mairie · ${C.departement}</small></p>
        <nav>${liens.map(([h, ancre, t, s], i) => `<a href="${h + q + ancre}" style="--i:${i}"${page === h && !ancre ? ' aria-current="page"' : ""}><b>${t}</b><small>${s}</small></a>`).join("")}</nav>
        <p class="volet-c">Autres communes : ${(window.COMMUNES || []).filter((id) => id !== C.id).map((id) => `<a href="${page}?c=${id}">${NOMS[id]}</a>`).join(" ")}</p>
      </div>
      <button class="fermer" aria-label="Fermer le menu">Fermer</button>
    </div>`);
    const volet = document.getElementById("volet"), b = top.querySelector(".burger");
    const ouvrir = (o) => {
      b.setAttribute("aria-expanded", o);
      document.documentElement.classList.toggle("menu-ouvert", o);
      if (o) { volet.hidden = false; requestAnimationFrame(() => requestAnimationFrame(() => volet.classList.add("ouvert"))); volet.querySelector("nav a").focus({ preventScroll: true }); }
      else { volet.classList.remove("ouvert"); setTimeout(() => (volet.hidden = true), calme ? 0 : 500); b.focus({ preventScroll: true }); }
    };
    b.addEventListener("click", () => ouvrir(true));
    volet.querySelector(".fermer").addEventListener("click", () => ouvrir(false));
    volet.addEventListener("click", (e) => { if (e.target.closest("nav a")) ouvrir(false); });
    addEventListener("keydown", (e) => { if (e.key === "Escape" && !volet.hidden) ouvrir(false); });
    // en-tête collant : disparaît quand on descend, revient dès qu'on remonte
    let y0 = 0;
    addEventListener("scroll", () => {
      const y = scrollY;
      top.classList.toggle("fixe", y > 120);
      if (y > 400 && y > y0 + 4) top.classList.add("cache");
      else if (y < y0 - 4 || y <= 400) top.classList.remove("cache");
      y0 = y;
    }, { passive: true });
  }
  // jauge de lecture tricolore
  document.body.insertAdjacentHTML("afterbegin", '<div class="jauge" aria-hidden="true"></div>');
  if (!CSS.supports("animation-timeline: scroll()") && !calme) {
    const j = document.querySelector(".jauge");
    addEventListener("scroll", () => { const h = document.documentElement.scrollHeight - innerHeight; j.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`; }, { passive: true });
  }
  // fin de l'ouverture : on rend la main
  if (document.documentElement.classList.contains("intro")) setTimeout(() => document.documentElement.classList.remove("intro"), 3400);
  // mouvement réduit (réglage du système) : on garde les fondus, sans zoom ni déplacement

  // 2. accueil : diaporama en fondu sur le héros
  const hero = document.getElementById("heroImg");
  if (hero) {
    const srcs = [hero.getAttribute("src").slice(C.img.length), C.plein && C.plein.img, ...(C.vitrine ? C.vitrine.imgs.map((m) => m.src) : [])]
      .filter(Boolean).filter((v, i, a) => a.indexOf(v) === i).slice(0, 4);
    const boite = hero.parentElement;
    const calques = srcs.slice(1).map((src) => {
      const im = new Image(); im.dataset.src = C.img + src; im.alt = ""; im.className = "diapo"; im.setAttribute("aria-hidden", "true");
      hero.after(im); return im;
    });
    // la photo d'accueil d'abord, les suivantes une fois qu'elle est affichée
    const suite = () => setTimeout(() => calques.forEach((im) => (im.src = im.dataset.src)), 900);
    hero.complete ? suite() : hero.addEventListener("load", suite, { once: true });
    hero.classList.add("diapo");
    const tous = [hero, ...calques];
    const pts = document.createElement("div"); pts.className = "points"; pts.setAttribute("aria-hidden", "true");
    pts.innerHTML = tous.map(() => "<i></i>").join(""); boite.appendChild(pts);
    let k = 0;
    const montre = () => {
      tous.forEach((im, j) => im.classList.toggle("vue", j === k));
      [...pts.children].forEach((p, j) => p.classList.toggle("on", j === k));
    };
    montre();
    if (tous.length > 1) setInterval(() => { if (document.hidden) return; k = (k + 1) % tous.length; montre(); }, 5500);
  }

  // A. défilement fluide (souris et pavé tactile ; le téléphone garde son défilement natif)
  if (!calme && matchMedia("(pointer:fine)").matches) {
    document.querySelectorAll(".volet, .rois, .map, .lieux").forEach((el) => el.setAttribute("data-lenis-prevent", ""));
    const sc = document.createElement("script");
    sc.src = "https://cdn.jsdelivr.net/npm/lenis@1.1.13/dist/lenis.min.js";
    sc.onload = () => {
      const lenis = new Lenis({ lerp: 0.14, wheelMultiplier: 1 });
      const boucle = (t) => { lenis.raf(t); requestAnimationFrame(boucle); }; requestAnimationFrame(boucle);
      new MutationObserver(() => document.documentElement.classList.contains("menu-ouvert") ? lenis.stop() : lenis.start())
        .observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
      document.addEventListener("click", (e) => { const a = e.target.closest('a[href^="#"]'); if (a && a.getAttribute("href").length > 1) { const c = document.querySelector(a.getAttribute("href")); if (c) { e.preventDefault(); lenis.scrollTo(c, { duration: 1.6 }); } } });
    };
    document.head.appendChild(sc);
  }

  // images : apparition en fondu une fois chargées (pas de « clignotement »)
  document.querySelectorAll('img[loading="lazy"]').forEach((i) => {
    if (i.complete && i.naturalWidth) return;
    i.classList.add("attend"); i.addEventListener("load", () => i.classList.remove("attend"), { once: true });
  });

  // 3 bis. titres : chaque mot monte de derrière un cache, comme le nom de la ville
  document.querySelectorAll(".sec h2, .chap h2, .frise h2, .recit-tete h1").forEach((h) => {
    if (h.querySelector(".mot") || !h.textContent.trim()) return;
    h.setAttribute("aria-label", h.textContent.trim());
    h.innerHTML = h.textContent.trim().split(/\s+/).map((m, i) => `<span class="mot" aria-hidden="true"><span style="--i:${i}">${m}</span></span>`).join(" ");
    h.classList.add("titre-mots");
  });
  const io2 = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("leve"); io2.unobserve(e.target); } }), { rootMargin: "0px 0px -12% 0px" });
  document.querySelectorAll(".titre-mots").forEach((h) => io2.observe(h));

  // 3. apparitions au défilement
  const cibles = document.querySelectorAll(".sec .chapo, .entrees a, .archives figure, .roi, .lien, .chap .t p, .chap .voir, .lieux li, .recit-tete p, .pied > *");
  cibles.forEach((el, i) => { el.classList.add("rv"); el.style.setProperty("--d", `${(i % 4) * 80}ms`); });
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("vu"); io.unobserve(e.target); }
  }), { rootMargin: "0px 0px -8% 0px" });
  cibles.forEach((el) => io.observe(el));

  // 4. vitrine : le carrousel avance seul sur téléphone, jusqu'au premier toucher
  const vit = document.querySelector(".archives");
  if (vit && matchMedia("(max-width:819px)").matches) {
    let stop = false;
    ["pointerdown", "wheel", "touchstart"].forEach((ev) => vit.addEventListener(ev, () => (stop = true), { passive: true }));
    const t = setInterval(() => {
      if (stop) return clearInterval(t);
      const r = vit.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight || !vit.children[0]) return;
      const pas = vit.children[0].offsetWidth + 10, fin = vit.scrollWidth - vit.clientWidth - 5;
      vit.scrollTo({ left: vit.scrollLeft >= fin ? 0 : vit.scrollLeft + pas, behavior: "smooth" });
    }, 3200);
  }
}
