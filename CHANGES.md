# What changed (vs. the original zip)

## Removed from the live app (originals kept in `legacy/`)
- COMPARE and AI SEARCH tabs/sections, the Overview AI bar (backend routes are NOT_IMPLEMENTED stubs)
- Fake Overview stats (26 / 15 / 73%), telemetry chart, orbit diagram, "Download Data", "View Full Report", "View Safety Report"
- Predictive Lab (invented physics), Fire Risk matrix (risk/CRITICAL labels)
- Hardcoded PSI data as a runtime source (now `legacy/legacy_demo_data.js`, not loaded)
- "Verified NASA" wording and count claims, including in the welcome overlay text

## Added
- Nav: OVERVIEW, WORKSPACE, INVESTIGATIONS, RELEVANCE, GAPS, BURN TIME, REPORTS, DATA & MODEL (+ API status pill)
- Mission Workspace: profile selector, scenario form with units and inline validation, scenario summary, Edit / Reset / Continue
- Investigations, Relevance, Research Gaps, Reports: action buttons with loading / empty / error / offline / "Backend not connected" states, active-scenario strip
- Burn Time Estimator: the 8 PSI-159 inputs in model order, README sample loader, metrics card, required limitation text
- Data & Model Info: demo-data disclosure, provenance labels, model description

## Preserved unchanged
Theme classes, nav pill, modal, hero, mission-card styling, all Three.js welcome code (only the Overview block-ID list it types through was shortened to the blocks that still exist), assets, fonts, vercel.json.

## Wiring a backend later
Edit only `api.js` (`API_BASE`, `API_CONNECTED`), then map field names in `pages.js` (`SCENARIO_FIELDS`, `BURN_FIELDS`) against the backend `/docs`.
