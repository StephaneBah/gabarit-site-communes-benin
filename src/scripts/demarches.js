// Démarches : phrase-recherche, situations, fiche avec pièces à cocher (gardées dans le navigateur).
const { id, D, CATEGORIES, SITUATIONS } = JSON.parse(document.getElementById("donnees-dem").textContent);
const $ = (s) => document.querySelector(s), reduit = matchMedia("(prefers-reduced-motion: reduce)").matches;
const byId = Object.fromEntries(D.map((d) => [d.id, d]));
const VAR = { civil: "--t1", attest: "--t4", foncier: "--t2", taxes: "--t3" };
const couleur = (cat) => getComputedStyle(document.documentElement).getPropertyValue(VAR[cat]).trim();
const rang = (d) => `<li class="rang" style="--c:var(${VAR[d.cat]})"><button data-id="${d.id}"><b>${d.t}</b><span class="meta">${d.court}</span></button></li>`;

// phrase-recherche : une proposition lisible qui défile, cliquable pour ouvrir la fiche
const PROPOS = [["un acte de naissance", "naissance"], ["un certificat de résidence", "residence"], ["construire ma maison", "permis"], ["une place au marché", "marche"], ["légaliser un document", "legal"], ["déclarer une naissance", "declaration"], ["me marier", "mariage"]];
let ex = 0, pause = false;
const montre = () => { const [t, i] = PROPOS[ex % PROPOS.length]; $("#sugg").innerHTML = `<span>${t}</span>`; $("#sugg").dataset.id = i; $("#sugg").setAttribute("aria-label", `Ouvrir : ${t}`); };
montre();
setInterval(() => { if (!pause && !$("#q").value) { ex++; montre(); } }, reduit ? 5000 : 2400);
["mouseenter", "focus"].forEach((e) => $("#sugg").addEventListener(e, () => (pause = true)));
["mouseleave", "blur"].forEach((e) => $("#sugg").addEventListener(e, () => (pause = false)));
$("#derouler").addEventListener("click", () => {
  const ouvert = $("#derouler").getAttribute("aria-expanded") === "true";
  $("#derouler").setAttribute("aria-expanded", !ouvert); $("#menu").hidden = ouvert;
});

const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const MOTS = { maison: "construire permis", terrain: "convention foncier", bebe: "naissance", enfant: "naissance", marier: "mariage", vendre: "marche", commerce: "marche", signature: "legaliser", document: "legaliser" };
$("#q").addEventListener("input", () => {
  const q = norm($("#q").value.trim());
  if (!q) { $("#resultats").innerHTML = ""; return; }
  const extra = Object.entries(MOTS).filter(([k]) => q.includes(k)).map(([, v]) => v).join(" ");
  const termes = (q + " " + extra).split(/\s+/).filter((w) => w.length > 2 && !["une", "des", "les", "pour", "faire", "obtenir"].includes(w));
  const l = D.map((d) => [d, termes.filter((w) => norm(d.t + " " + CATEGORIES[d.cat].nom + " " + d.p.join(" ")).includes(w)).length])
    .filter(([, n]) => n).sort((a, b) => b[1] - a[1]).map(([d]) => d);
  $("#resultats").innerHTML = l.length ? l.slice(0, 5).map(rang).join("") : `<li class="vide">Rien trouvé. Essayez « naissance », « résidence », « permis »… ou appelez la mairie.</li>`;
});

// situations : le panneau s'insère après la rangée où se trouve la pièce
$("#situations").addEventListener("click", (e) => {
  const b = e.target.closest(".sit"); if (!b) return;
  const ouvert = b.getAttribute("aria-expanded") === "true";
  document.querySelectorAll(".sit").forEach((x) => x.setAttribute("aria-expanded", "false"));
  $(".sous")?.remove();
  if (ouvert) return;
  b.setAttribute("aria-expanded", "true");
  const s = SITUATIONS.find((x) => x.id === b.dataset.sit);
  const tous = [...document.querySelectorAll(".sit")], cols = getComputedStyle($("#situations")).gridTemplateColumns.split(" ").length;
  const fin = tous[Math.min(tous.length - 1, Math.floor(tous.indexOf(b) / cols) * cols + cols - 1)];
  fin.insertAdjacentHTML("afterend", `<div class="sous" id="sous-${s.id}"><ul>${s.ids.map((i) => rang(byId[i])).join("")}</ul></div>`);
});

// fiche
const KEY = `${id}-dossier`;
const lire = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } };
const ecrire = (v) => { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch {} };
const progres = (d) => {
  const n = (lire()[d.id] || []).filter(Boolean).length;
  $("#ficheR").textContent = n === d.p.length ? "Dossier complet. Vous pouvez vous présenter au guichet." : `${n} pièce${n > 1 ? "s" : ""} sur ${d.p.length} prête${n > 1 ? "s" : ""}.`;
};
document.addEventListener("click", (e) => {
  const b = e.target.closest("button[data-id]"); if (!b) return;
  const d = byId[b.dataset.id], coches = lire()[d.id] || [];
  $("#ficheB").style.background = couleur(d.cat);
  $("#ficheC").textContent = CATEGORIES[d.cat].nom;
  $("#ficheT").textContent = d.t;
  $("#ficheD").innerHTML = `<dt>Délai</dt><dd>${d.delai}</dd><dt>Coût</dt><dd>${d.cout}</dd>`;
  $("#ficheP").innerHTML = d.p.map((p, i) => `<li><label><input type="checkbox" data-i="${i}"${coches[i] ? " checked" : ""}>${p}</label></li>`).join("");
  $("#ficheO").innerHTML = `<b>Où :</b> ${d.ou}`;
  $("#ficheP").onchange = (ev) => { const s = lire(); s[d.id] = s[d.id] || []; s[d.id][ev.target.dataset.i] = ev.target.checked; ecrire(s); progres(d); };
  progres(d);
  $("#fiche").showModal();
});
$("#fiche").addEventListener("click", (e) => { if (e.target === e.currentTarget) e.currentTarget.close(); });
