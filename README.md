# Gabarit de site pour les communes du Bénin

Maquette de concours, non officielle. Site [Astro](https://astro.build) généré à l'avance : une page par commune, sans serveur.

- Données d'une commune : `src/data/communes/<id>.js` (identité, couleurs, récit, carte, démarches). Ajouter une commune = ajouter un fichier et son dossier de photos `src/assets/img/<id>/`, puis l'inscrire dans `src/lib/communes.js`.
- Photos déclinées automatiquement en WebP de 480 à 1920 px.
- Mise en ligne automatique sur GitHub Pages à chaque push sur `main` (`.github/workflows/deploy.yml`).

```
npm install
npm run dev     # http://localhost:4321/gabarit-site-communes-benin/
npm run build
```

Faits datés et sources : `SOURCES-ACTUALITE.md`. Images provisoires (droits à obtenir) : `DROITS-IMAGES.md`.
