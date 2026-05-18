# SupplyTech Presentation Deck

Route-based Next.js presentation for SupplyTech's DominAite Accelerator technical discussion. Each slide is implemented as an App Router page and uses fixed viewport presentation styling.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS is available globally, though most slide styling is scoped inline per route
- Font Awesome CDN for slide icons
- Chart.js CDN for the Market Opportunity chart

## Running Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build And Checks

```bash
npm run lint
npm run build
```

On Windows, if PowerShell blocks `npm.ps1`, run:

```bash
npm.cmd run lint
npm.cmd run build
```

## Slide Routes

The deck navigation flow is:

1. `/` - Cover: AI-Native Warehouse Infrastructure
2. `/vision` - Vision & Why Now
3. `/problem-solve` - The Problem We Solve
4. `/opportunity` - Market Opportunity
5. `/solution` - AI-Native WaaS Platform
6. `/how-it-works` - Transaction Lifecycle
7. `/built-for-saudi` - Built for Saudi Arabia
8. `/ai-intelligence` - AI Operational Intelligence
9. `/readiness` - Product Maturity & Readiness
10. `/why-wins` - Why This Wins
11. `/optimizing-network` - Self-Optimizing Network
12. `/accelerator-opportunity` - Accelerator Opportunity
13. `/lets-build` - Let's Build Together

Each slide includes left/right navigation buttons. The final slide keeps the right button disabled.

## Project Structure

- `app/page.tsx` - Cover slide
- `app/*/page.tsx` - Individual slide routes
- `app/components/SupplyTechLogo.tsx` - Shared SVG logo used across slides
- `app/opportunity/GrowthChart.tsx` - Client-side Chart.js component for the market growth chart
- `app/layout.tsx` - App metadata and shared external stylesheets
- `app/globals.css` - Tailwind import and global theme defaults
- `*.html` - Original static slide sources used to build the routed deck

## Notes

- Slides are designed to fit inside `100vh`; avoid adding vertical content without tightening spacing.
- Most CSS is intentionally scoped inside each slide page to preserve fidelity with the original static HTML.
- The chart on `/opportunity` is initialized in a client component so it works during client-side navigation without requiring a reload.
