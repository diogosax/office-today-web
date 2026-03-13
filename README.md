# Office Today Website

Official website for **Office Today**, rebuilt with **Next.js** and deployed on **Vercel**.

This project replaces the previous website hosted on **Duda**, with the goal of reducing recurring platform costs while preserving performance, SEO, visual identity, and commercial effectiveness.

---

## Project Goal

Rebuild the Office Today website using a modern web stack while keeping the strongest parts of the legacy site:

- brand identity
- service messaging
- B2B credibility
- sales-oriented structure
- SEO and marketing foundations

The legacy Duda site is stored in this repository as a **sanitized reference backup** and must be treated as a source of inspiration only, not as implementation code.

---

## Current Stack

- **Next.js** (App Router)
- **React**
- **Tailwind CSS**
- **Vercel**
- **GitHub**

---

## Repository Purpose

This repository is the main codebase for the new Office Today website.

It includes:

- the current Next.js application
- the sanitized legacy Duda backup for reference
- project context for design and implementation decisions

---

## Legacy Reference

The folder `backup-duda/` contains a sanitized export of the previous Office Today website from Duda.

It is included only as a **reference source** for:

- homepage structure
- visual hierarchy
- marketing copy
- service categories
- illustrations
- partner/manufacturer logos
- general brand direction

### Important

The Duda code must **not** be copied literally into the new application.

Do **not** reuse:

- Duda runtime scripts
- Duda widgets
- Duda-specific layout/runtime logic
- legacy implementation patterns

Use the backup only to extract:

- content
- hierarchy
- section order
- messaging
- design cues
- available assets

---

## Key Legacy Files

### Homepage reference
- `backup-duda/Pages/home/index.html`
- `backup-duda/Pages/home/style.css`

### Main brand asset
- `backup-duda/Resources/images/Office Today Header Logo v2.svg`

### Supporting visual assets
The `backup-duda/Resources/images/` folder contains:
- Office Today illustrations
- manufacturer/partner logos
- other useful visual references

---

## Development Workflow

This project follows a collaborative workflow across planning and implementation.

### Strategy and architecture
Handled through:
- Diogo Santana
- ChatGPT

Typical responsibilities:
- project direction
- site structure
- content strategy
- UX and business positioning
- technical planning

### Code implementation
Handled through:
- Claude Code

Typical responsibilities:
- frontend implementation
- component architecture
- Tailwind styling
- responsive behavior
- page reconstruction from approved references

---

## Language Rules

To keep the workflow consistent:

- **Strategic discussions:** Portuguese
- **Technical prompts for Claude:** English
- **Code:** English
- **Commit messages:** English
- **Website content/UI:** Portuguese

---

## Rebuild Principles

The new website should:

- feel modern and trustworthy
- be fully responsive
- maintain strong B2B service positioning
- use clean semantic HTML
- prioritize performance
- be easy to expand into internal pages later
- avoid dependence on old builder/platform patterns

---

## Expected Evolution

This repository will evolve from a homepage rebuild into a broader website structure, including future internal pages such as:

- service pages
- product or solution pages
- contact flows
- SEO landing pages
- institutional/company pages

---

## Deployment

The project is connected to **Vercel**.

Each push to the main branch can trigger a new deployment, depending on the configured Vercel settings.

---

## Production Domain

- `https://www.office-today.com`

---

## Notes

If legacy assets are reused in the new implementation, they should be migrated intentionally into the appropriate Next.js public asset structure instead of being consumed directly from legacy runtime assumptions.

This repository should remain clean, modern, and implementation-focused, while using the legacy backup only as a controlled reference source.
