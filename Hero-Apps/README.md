# Hero IO

**Hero IO** is a responsive app marketplace showcase where users can browse productive apps, view ratings and charts, install apps to local storage, and manage installations with sort and uninstall features.

## Description

Hero IO presents a curated catalog of mobile-style productivity applications. The home page highlights trending apps and platform stats; the apps page supports live case-insensitive search; each app detail page shows install state, a Recharts rating breakdown, and full descriptions. Installed apps persist in `localStorage` and appear on the My Installation page with download-based sorting.

## Technologies

- **React 18** — UI components and hooks
- **Vite** — development and production build
- **React Router** — client-side routing with SPA fallback for deployment
- **Recharts** — horizontal bar chart for star ratings
- **React Toastify** — install / uninstall notifications
- **CSS3** — custom responsive layout (no UI framework)

## Features

- Responsive header with logo, active nav, and GitHub Contribute link
- Home banner with App Store / Play Store links, stats section, top 8 apps
- All Apps page with live search and loading state
- App details with install + localStorage, ratings chart, not-found state
- My Installation page with uninstall and High-Low / Low-High sort
- Custom 404 page and route-level loading animation
- Netlify `_redirects` and Vercel `vercel.json` for SPA reload support

## Run Locally

```bash
cd Hero-Apps
npm install
npm run dev
```

## Build for Production

```bash
npm run build
npm run preview
```

Deploy the `dist` folder to Netlify, Vercel, or Cloudflare Pages.

## Live Demo

Add your deployed URL here after publishing.

## Author

[Nasir Uddin](https://github.com/nasiruddin6)
