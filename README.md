# ChaosTech Defense Website

Frontend marketing site for **ChaosTech Defense LLC**, built to present the Neuro Swarm Disruptor (NSD) platform, company mission, founder profile, and contact path for defense, government, and investor audiences.

## Overview

This repository contains the public-facing website for ChaosTech Defense LLC. The current site is a Vite + React + TypeScript frontend with Tailwind styling and a tactical dark-theme presentation.

The homepage is structured to communicate:

- The counter-UAS problem space
- The NSD system and capabilities
- A live prototype section
- Mission and founder credibility
- Contact and briefing request path

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Lucide React icons

## Repo structure

```text
.
├── src/                # Main React frontend source
├── client/             # Legacy/alternate app files from earlier build phases
├── server/             # Legacy server-side files from earlier architecture
├── shared/             # Shared code/config from earlier architecture
├── patches/            # Patch artifacts from prior setup
├── index.html          # Vite entry HTML
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── wrangler.toml
```

## Current direction

The current site is being refined into a cleaner defense-tech marketing frontend focused on:

- SBIR / DIU / JCO reviewer readability
- Investor-ready storytelling
- A more credible presentation of the NSD prototype
- Cleaner public-facing messaging without overexposing development hardware details

## Required public assets

Make sure these files exist in the `public/` directory for the current homepage build:

- `logo.jpg`
- `nsd-dashboard-1.jpg`
- `nsd-dashboard-demo.mp4`

If these are missing, the hero and live prototype sections will not render correctly.

## Local development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

This repo is configured as a static frontend deployment and has active deployment history in GitHub.[page:31]

Typical workflow:

```bash
git add .
git commit -m "update site"
git push origin main
```

After push, verify that the deployed site:

- Loads all media assets correctly
- Renders the homepage sections in the intended order
- Opens the live NSD console link properly
- Preserves working navigation anchors
- Keeps the contact form / mailto flow intact

## Content priorities

The current homepage is designed around this narrative flow:

1. Hero
2. Threat Landscape
3. System
4. Technology
5. Live Prototype
6. Mission
7. About
8. Contact

This order is intentional and should generally be preserved unless the messaging strategy changes.

## Cleanup notes

There are still some legacy folders from earlier project iterations (`client`, `server`, `shared`, `patches`). If they are no longer needed for the current static site, consider removing or archiving them in a separate branch to keep the repo cleaner for collaborators.

## Maintainer

**Daivon Brown**  
CEO & Founder, ChaosTech Defense LLC

For website, briefing, or partnership inquiries, use the contact path on the live site or the direct email configured in the app.

## Status

Active build in progress. Messaging, visuals, and repository hygiene are being refined for external-facing use.
