#!/usr/bin/env bash
# Construit le site et le publie sur la branche gh-pages (GitHub Pages la sert telle quelle).
set -e
cd "$(dirname "$0")"
rm -rf dist && MSYS_NO_PATHCONV=1 npx astro build && touch dist/.nojekyll
T=$(mktemp -d); cp -r dist/. "$T"; cd "$T"
git init -q -b gh-pages && git add -A && git commit -q -m "Site construit depuis main ($(date +%F))"
git push -q -f https://github.com/StephaneBah/gabarit-site-communes-benin.git gh-pages
echo "Publié : https://stephanebah.github.io/gabarit-site-communes-benin/"
