import { defineConfig } from "astro/config";
// Publié sur GitHub Pages sous /gabarit-site-communes-benin/ (BASE permet de tester ailleurs).
export default defineConfig({
  site: "https://stephanebah.github.io",
  base: process.env.BASE || "/gabarit-site-communes-benin",
  trailingSlash: "always",
  build: { format: "directory", inlineStylesheets: "auto" },
  image: { responsiveStyles: false },
  compressHTML: true,
});
