// Images à la bonne taille : chaque photo est déclinée en WebP 480 à 1920 px, le navigateur choisit.
import { getImage } from "astro:assets";
const IMGS = import.meta.glob("/src/assets/img/*/*.{jpg,jpeg,png,webp,JPG}", { eager: true, import: "default" });
const cache = new Map();
export async function photo(id, fichier, { largeurs = [480, 800, 1200, 1600, 1920], qualite = 70 } = {}) {
  const cle = `${id}/${fichier}/${largeurs}`;
  if (cache.has(cle)) return cache.get(cle);
  const meta = IMGS[`/src/assets/img/${id}/${fichier}`];
  if (!meta) throw new Error(`Image introuvable : ${id}/${fichier}`);
  const w = largeurs.filter((x) => x <= meta.width);
  if (!w.length) w.push(meta.width);
  const r = await getImage({ src: meta, widths: w, format: "webp", quality: qualite });
  const res = { src: r.src, srcset: r.srcSet.attribute, width: meta.width, height: meta.height };
  cache.set(cle, res);
  return res;
}
