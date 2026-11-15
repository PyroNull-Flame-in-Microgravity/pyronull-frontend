# PyroNull — Combustion Intelligence Frontend

Desktop/laptop-first static frontend (vanilla HTML/CSS/JS, Tailwind CDN, Three.js welcome scene).
This build is the **visual layer only**: no backend is connected and no research data or predictions are generated.

## Files
- `index.html` — entry point (welcome overlay + 8 pages: Overview, Workspace, Investigations, Relevance, Gaps, Burn Time, Reports, Data & Model)
- `styles.css` — original theme and welcome animations, plus an appended `pn-` section for the new pages
- `app.js` — navigation, About modal, init, and the original Three.js 3D welcome code (unchanged)
- `ui.js` — shared helpers (state boxes, modal, escaping)
- `pages.js` — forms, validation, scenario state, action buttons, API status
- `api.js` — backend hook, **disabled** (`API_CONNECTED = false`); set base URL and flag later
- `pyronull_standalone.html` — regenerated single-file build (CSS/JS/images inlined)
- `legacy/` — untouched originals and the extracted hardcoded demo data (not loaded)
- `assets/`, `vercel.json` — unchanged

## Running locally
Open `index.html`, or run `python -m http.server 8000` in this folder and visit `http://localhost:8000`.

See `CHANGES.md` for exactly what changed.
# pyronull-frontend
