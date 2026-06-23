# SODEX - Site Web Vitrine

Site web vitrine pour **Sodex**, entreprise spécialisée dans les travaux en hauteur et accès difficile.

## 🚀 Technologies

- **React 19** + **Vite 8** — Framework front-end moderne
- **React Router v7** — Navigation SPA
- **Framer Motion** — Animations fluides
- **Swiper.js** — Carrousels interactifs
- **Leaflet** — Cartes interactives OpenStreetMap
- **CSS pur** — Design responsive sans framework CSS

## 📦 Installation

```bash
npm install
npm run dev
```

## 🏗️ Build

```bash
npm run build
npm run preview
```

## 🚀 Déploiement sur Vercel

1. Pousser le projet sur GitHub/GitLab
2. Importer le dépôt sur [Vercel](https://vercel.com)
3. Les paramètres sont déjà configurés (`vercel.json`)
4. Déployer !

### Configuration Vercel automatique :
- Framework : Vite
- Build command : `npm run build`
- Output directory : `dist`
- Routes SPA : gérées via `vercel.json`

## 📁 Structure du projet

```
sodex-website/
├── public/
│   ├── flyers/          # Placez vos PDFs ici
│   ├── images/          # Placez vos images ici
│   └── videos/          # Placez votre vidéo hero ici (hero-bg.mp4)
├── src/
│   ├── components/      # Composants réutilisables
│   ├── pages/           # Pages de l'application
│   ├── data/
│   │   └── sectors.js   # Données des secteurs et entreprise
│   └── App.jsx          # Configuration des routes
```

## 🎬 Média

- **Vidéo hero** : Placez `hero-bg.mp4` dans `public/videos/`
- **Images** : Placez vos images dans `public/images/`
- **Flyers PDF** : Placez les fichiers PDF dans `public/flyers/`

## 🎨 Personnalisation

Les couleurs et styles sont gérés via les variables CSS dans `src/index.css` :
- `--primary` : Couleur principale (fonds sombres)
- `--secondary` : Couleur d'accent (orange Sodex)
- Modifiez les données dans `src/data/sectors.js`
