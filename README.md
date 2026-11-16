# Gabarit de site pour les communes du Bénin

**Voir le site : https://stephanebah.github.io/gabarit-site-communes-benin/**

Démo par commune : [Abomey](https://stephanebah.github.io/gabarit-site-communes-benin/abomey/) · [Ouidah](https://stephanebah.github.io/gabarit-site-communes-benin/ouidah/) · [Porto-Novo](https://stephanebah.github.io/gabarit-site-communes-benin/porto-novo/) · [Cotonou](https://stephanebah.github.io/gabarit-site-communes-benin/cotonou/) · [Parakou](https://stephanebah.github.io/gabarit-site-communes-benin/parakou/) · [Natitingou](https://stephanebah.github.io/gabarit-site-communes-benin/natitingou/) · [Nikki](https://stephanebah.github.io/gabarit-site-communes-benin/nikki/)

Maquette de concours, non officielle. Site [Astro](https://astro.build) généré à l'avance : une page par commune, sans serveur.

- Données d'une commune : `src/data/communes/<id>.js` (identité, couleurs, récit, carte, démarches). Ajouter une commune = ajouter un fichier et son dossier de photos `src/assets/img/<id>/`, puis l'inscrire dans `src/lib/communes.js`.
- Photos déclinées automatiquement en WebP de 480 à 1920 px.
- Mise en ligne : `npm run publier` construit le site et l'envoie sur la branche `gh-pages`, servie par GitHub Pages.

```
npm install
npm run dev     # http://localhost:4321/gabarit-site-communes-benin/
npm run build
```

Faits datés et sources : `SOURCES-ACTUALITE.md`. Images provisoires (droits à obtenir) : `DROITS-IMAGES.md`.
