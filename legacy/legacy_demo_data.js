// LEGACY DEMO DATA — extracted from the original app.js. NOT loaded by index.html.
// Hardcoded records; not verified NASA data. Kept only so nothing is lost.
// ============================================================================
    // GROUNDED NASA PSI COMBUSTION DATASET
    // ============================================================================
    const IMG_FLAME = "assets/flame_chamber.jpg";
    const IMG_HERO  = "assets/earth_flame_hero.jpg";
    const IMG_LUNAR = "assets/lunar_outpost.jpg";
    const IMG_MARS  = "assets/mars_orbital.jpg";

    const PSI_INVESTIGATIONS = [
      {
        id: "PSI-159",
        code: "ACME CFI-G",
        title: "ACME CFI-G – Cool Flames with Gases",
        subtitle: "High oxygen concentrations and gaseous fuels",
        fullTitle: "Advanced Combustion via Microgravity Experiments / Cool Flames Investigation with Gases (ACME CFI-G)",
        gravity: "Microgravity",
        domain: "Flame Dynamics",
        fuelCategory: "Gaseous",
        fuels: "Propane, n-Butane, n-Pentane",
        structured: true,
        statusLabel: "ACTIVE",
        doi: "10.60555/cyt1-kh64",
        url: "https://psi.nasa.gov/physci/repo/data/investigations/PSI-159",
        hardware: "ISS Combustion Integrated Rack (CIR) — Spherical Porous Burner",
        pi: "Dr. Peter B. Sunderland",
        o2Range: "15% – 40% O₂ (with N₂/CO₂ dilutions)",
        pressure: "0.5 – 1.5 atm (7.3 – 22.0 psia)",
        airflow: "Quiescent / Radial spherical diffusion flow",
        thumb: IMG_FLAME,
        missions: ["iss", "lunar", "mars"],
        summary: "Demonstrates steady-state cool diffusion flames on spherical porous burners aboard the ISS for propane, n-butane, and n-pentane across normal and inverse flame configurations.",
        hypothesis: "Testing aboard the ISS demonstrates steady-state gaseous cool diffusion flames for the first time, resolving low-temperature alkane oxidation kinetics without buoyant plume disruption."
      },
      {
        id: "PSI-26",
        code: "BASS",
        title: "BASS – Burning and Suppression of Solids",
        subtitle: "Solid material flammability and extinction",
        fullTitle: "Burning and Suppression of Solids (BASS)",
        gravity: "Microgravity",
        domain: "Material Flammability",
        fuelCategory: "Solid",
        fuels: "PMMA rods/sheets, cotton fabrics, Nomex, solid polymers",
        structured: true,
        statusLabel: "ACTIVE",
        doi: "10.60555/bass-psi26",
        url: "https://psi.nasa.gov/physci/repo/data/investigations/PSI-26",
        hardware: "ISS Microgravity Science Glovebox (MSG) Flow Duct",
        pi: "Dr. Sandra L. Olson",
        o2Range: "15% – 21% O₂",
        pressure: "14.7 psia (1.0 atm)",
        airflow: "1 – 55 cm/s forced concurrent & opposed flow",
        thumb: IMG_LUNAR,
        missions: ["lunar", "iss", "rover"],
        summary: "Examines burning and extinction characteristics of wide variety of solid fuel geometries in low-velocity ventilation airflows inside the ISS Microgravity Science Glovebox.",
        hypothesis: "In microgravity with low-speed ventilation (5–30 cm/s), solid fuels can sustain combustion at lower oxygen concentrations than in normal gravity upward flammability screening."
      },
      {
        id: "PSI-99",
        code: "SAFFIRE-II",
        title: "SAFFIRE-II – Fire Growth and Flammability",
        subtitle: "Spacecraft fire behavior",
        fullTitle: "Spacecraft Fire Experiment-II (SAFFIRE-II)",
        gravity: "Microgravity",
        domain: "Spacecraft Safety",
        fuelCategory: "Solid",
        fuels: "9 Samples (5×29 cm): SIBAL, Silicone, Structured PMMA, Flat PMMA, PMMA+Nomex",
        structured: true,
        statusLabel: "COMPLETE",
        doi: "10.60555/2chp-m469",
        url: "https://psi.nasa.gov/physci/repo/data/investigations/PSI-99",
        hardware: "Orbital Sciences Cygnus Resupply Vehicle (Autonomous Flow Duct)",
        pi: "Dr. Gary A. Ruff",
        o2Range: "21% O₂ Cabin Atmosphere",
        pressure: "14.7 psia (1.0 atm)",
        airflow: "20 cm/s and 30 cm/s concurrent & opposed flow",
        thumb: IMG_HERO,
        missions: ["mars", "lunar", "iss"],
        summary: "Large-scale spacecraft fire growth and material flammability limits conducted inside an uncrewed Cygnus cargo vehicle after ISS deberthing using a 9-panel sample card.",
        hypothesis: "Terrestrial 1g fire standards (NASA-STD-6001) introduce uncertainty for exploration vehicles; full-scale uncrewed spacecraft burns validate low-g flame spread and O₂ consumption."
      },
      {
        id: "PSI-102",
        code: "SAME",
        title: "SAME – Smoke and Aerosol Measurement",
        subtitle: "Smoke particle characteristics",
        fullTitle: "Smoke and Aerosol Measurement Experiment (SAME)",
        gravity: "Microgravity",
        domain: "Smoke & Detection",
        fuelCategory: "Mixed",
        fuels: "Overheated Spacecraft Materials: Lamp wick, Kapton, Silicone, Teflon, Cellulose",
        structured: true,
        statusLabel: "ACTIVE",
        doi: "10.60555/gd4k-8h62",
        url: "https://psi.nasa.gov/physci/repo/data/investigations/PSI-102",
        hardware: "ISS Microgravity Science Glovebox (MSG) + Thermophoretic TEM Samplers",
        pi: "Dr. David L. Urban",
        o2Range: "21% O₂",
        pressure: "14.7 psia",
        airflow: "Controlled low-speed aging chamber flow (15–60s pyrolysis)",
        thumb: IMG_MARS,
        missions: ["iss", "mars", "rover"],
        summary: "Quantifies smoke particle size distributions and detector sensitivity in microgravity from smoldering/overheated spacecraft wiring and polymers.",
        hypothesis: "Without buoyant convection in 0g, longer residence time near pyrolysis sources increases nucleation, condensation, and coagulation—producing larger smoke particles."
      },
      {
        id: "PSI-69",
        code: "FLEX",
        title: "FLEX – Flame Extinguishment Experiment",
        subtitle: "Suppression with CO₂ and Helium",
        fullTitle: "Flame Extinguishment Experiment (FLEX)",
        gravity: "Microgravity",
        domain: "Suppression",
        fuelCategory: "Liquid",
        fuels: "n-Heptane & Methanol Droplets with CO₂, He, N₂, and SF₆ Suppressants",
        structured: true,
        statusLabel: "PLANNING",
        doi: "10.60555/mbq8-0451",
        url: "https://psi.nasa.gov/physci/repo/data/investigations/PSI-69",
        hardware: "ISS Combustion Integrated Rack (CIR) — MDCA",
        pi: "Dr. Forman A. Williams",
        o2Range: "13% – 30% O₂",
        pressure: "0.5 – 3.0 atm",
        airflow: "Quiescent & slow sub-buoyant droplet translation",
        thumb: IMG_FLAME,
        missions: ["iss", "lunar", "mars"],
        summary: "Over 200 ISS droplet combustion tests mapping liquid fuel Limiting Oxygen Index (LOI), radiative extinction, cool-flame transitions, and gaseous fire suppressant efficacy (CO₂, He, SF₆).",
        hypothesis: "Lack of buoyant convection in microgravity fundamentally alters species transport and radiative loss, shifting flammability boundaries and required gaseous suppressant concentrations."
      },
      {
        id: "PSI-25",
        code: "BASS-II",
        title: "BASS-II – Burning and Suppression of Solids II",
        subtitle: "Bridging NASA-STD-6001 Test 1 to microgravity limits",
        fullTitle: "Burning and Suppression of Solids - II (BASS-II)",
        gravity: "Microgravity",
        domain: "Material Flammability",
        fuelCategory: "Solid",
        fuels: "PMMA sheets/rods, SIBAL cotton-fiberglass composite, Nomex",
        structured: true,
        statusLabel: "ACTIVE",
        doi: "10.60555/4qc4-de67",
        url: "https://psi.nasa.gov/physci/repo/data/investigations/PSI-25",
        hardware: "ISS Microgravity Science Glovebox (MSG) + CSA-CP & CDM Sensors",
        pi: "Dr. Sandra L. Olson",
        o2Range: "15% – 28% O₂",
        pressure: "8.2 – 14.7 psia",
        airflow: "1 – 50 cm/s forced flow",
        thumb: IMG_LUNAR,
        missions: ["lunar", "mars", "rover"],
        summary: "Maps blowoff and quenching extinction limits of thermally intermediate PMMA and composite fabrics in forced microgravity flow, providing baseline data for SoFIE.",
        hypothesis: "Materials in microgravity with forced ventilation burn at lower oxygen mole fractions than in normal-gravity upward screening (NASA-STD-6001 Test #1)."
      },
      {
        id: "PSI-98",
        code: "SAFFIRE-I",
        title: "SAFFIRE-I – Spacecraft Fire Safety Experiment I",
        subtitle: "Large-scale 0.4 m × 1.0 m SIBAL cloth burn on Cygnus",
        fullTitle: "Spacecraft Fire Safety Experiment-I (SAFFIRE-I)",
        gravity: "Microgravity",
        domain: "Spacecraft Safety",
        fuelCategory: "Solid",
        fuels: "SIBAL (75% Cotton / 25% Fiberglass) 0.4 m × 1.0 m panel",
        structured: true,
        statusLabel: "COMPLETE",
        doi: "10.60555/0t15-1z43",
        url: "https://psi.nasa.gov/physci/repo/data/investigations/PSI-98",
        hardware: "Cygnus Pressurized Cargo Module after ISS Departure",
        pi: "Dr. Gary A. Ruff",
        o2Range: "21% O₂",
        pressure: "14.7 psia",
        airflow: "20 cm/s ventilation duct flow",
        thumb: IMG_HERO,
        missions: ["mars", "iss"],
        summary: "First large-scale intentional fire aboard an uncrewed spacecraft to measure flame spread stability, radiometer flux, and cabin pressure/oxygen changes.",
        hypothesis: "Large-scale microgravity flames reach quasi-steady spread rates governed by ventilation oxygen supply and radiative loss."
      },
      {
        id: "PSI-101",
        code: "SAME-R",
        title: "SAME-R – Smoke Aerosol Measurement Reflight",
        subtitle: "Extended smoke aging and detector calibration in 0g",
        fullTitle: "Smoke Aerosol Measurement Experiment-Reflight (SAME-R)",
        gravity: "Microgravity",
        domain: "Smoke & Detection",
        fuelCategory: "Mixed",
        fuels: "Pyrolyzing spacecraft elastomers, silicone, Kapton, lamp wick",
        structured: true,
        statusLabel: "COMPLETE",
        doi: "10.60555/2np7-jv14",
        url: "https://psi.nasa.gov/physci/repo/data/investigations/PSI-101",
        hardware: "ISS Microgravity Science Glovebox (MSG)",
        pi: "Dr. David L. Urban",
        o2Range: "21% O₂",
        pressure: "14.7 psia",
        airflow: "Controlled duct flow",
        thumb: IMG_MARS,
        missions: ["iss", "mars", "rover"],
        summary: "Reflight expanding particle size moment statistics and evaluating ISS versus Orion/Lunar multi-wavelength smoke detectors.",
        hypothesis: "Microgravity aerosol coagulation requires tailored optical scattering angles to avoid false negatives during early wire-insulation overheating."
      },
      {
        id: "PSI-68",
        code: "FLEX-2",
        title: "FLEX-2 – Bi-Component Droplet Combustion",
        subtitle: "Liquid-phase mixing and convective droplet arrays",
        fullTitle: "Flame Extinguishment Experiment - 2 (FLEX-2)",
        gravity: "Microgravity",
        domain: "Suppression",
        fuelCategory: "Liquid",
        fuels: "Bi-component n-Alkane & Alcohol Droplet Arrays",
        structured: true,
        statusLabel: "ACTIVE",
        doi: "10.60555/byp8-h018",
        url: "https://psi.nasa.gov/physci/repo/data/investigations/PSI-68",
        hardware: "ISS CIR — Multi-User Droplet Combustion Apparatus (MDCA)",
        pi: "Dr. Forman A. Williams",
        o2Range: "15% – 30% O₂",
        pressure: "0.5 – 3.0 atm",
        airflow: "Controlled droplet translation velocity",
        thumb: IMG_FLAME,
        missions: ["iss", "mars"],
        summary: "Extends FLEX-1 to bi-component fuel droplets, droplet translation velocities, and binary linear droplet arrays to validate real combustor and suppression models.",
        hypothesis: "Liquid-phase internal circulation and preferential vaporization govern radiative and stretch extinction in bi-component microgravity droplets."
      },
      {
        id: "PSI-142",
        code: "COOL-TRANS",
        title: "PSI-142 – Cool Flame Transitions & Extinction",
        subtitle: "Ozone-sensitized counterflow & elevated-pressure DME/Alkane flames",
        fullTitle: "Quantitative Studies of Cool Flame Transitions at Radiation / Stretch Extinction Using Counterflow Flames",
        gravity: "1g Ground",
        domain: "Flame Dynamics",
        fuelCategory: "Gaseous",
        fuels: "n-Heptane, Dimethyl Ether (DME), Ozone-sensitized O₂/N₂ mixtures",
        structured: true,
        statusLabel: "ACTIVE",
        doi: "10.60555/80qf-vj95",
        url: "https://psi.nasa.gov/physci/repo/data/investigations/PSI-142",
        hardware: "Counterflow Burner & Arc-Length Continuation Numerical Suite",
        pi: "Dr. Yiguang Ju",
        o2Range: "12% – 35% O₂",
        pressure: "1 – 20 atm",
        airflow: "Variable counterflow stretch rate",
        thumb: IMG_FLAME,
        missions: ["lunar", "mars"],
        summary: "Maps warm-flame double reaction zones and hot-to-cool flame transitions using FLEX flight benchmarks and counterflow experiments.",
        hypothesis: "Oxygen concentration, dilution, pressure, and transport stretch govern transitions between hot flames, warm flames, and cool diffusion flames."
      },
      {
        id: "PSI-117",
        code: "CFD-COOL",
        title: "PSI-117 – 3-D OpenFOAM Droplet Cool Flames",
        subtitle: "Thermo-convective perturbations in n-alkane droplets",
        fullTitle: "3-D CFD Modeling of Externally Imposed Thermal & Convective Perturbations on FLEX Droplet Cool Flames",
        gravity: "Microgravity",
        domain: "Flame Dynamics",
        fuelCategory: "Liquid",
        fuels: "n-Alkane droplets (n-Heptane, n-Decane)",
        structured: true,
        statusLabel: "ACTIVE",
        doi: "10.60555/psi-117",
        url: "https://psi.nasa.gov/physci/repo/data/investigations/PSI-117",
        hardware: "OpenFOAM 3-D Reacting Navier-Stokes + FLEX CIR Flight Data",
        pi: "Dr. Tanvir Farouk",
        o2Range: "15% – 21% O₂",
        pressure: "1.0 atm",
        airflow: "Sub-buoyant drift convection",
        thumb: IMG_FLAME,
        missions: ["iss", "mars"],
        summary: "Resolves run-to-run variability in ISS droplet cool flames by isolating igniter heating gradients and residual drift convection.",
        hypothesis: "External thermo-convective perturbations shift residence time and scalar dissipation, governing cool-flame oscillation and hot re-ignition."
      },
      {
        id: "PSI-62",
        code: "BASS-MODEL",
        title: "PSI-62 – Solid Fuel Microgravity Modeling",
        subtitle: "Computational benchmark against BASS and BASS-II",
        fullTitle: "Numerical Modeling of Solid Fuel Combustion and Extinction in Microgravity",
        gravity: "Microgravity",
        domain: "Material Flammability",
        fuelCategory: "Solid",
        fuels: "PMMA & thin cellulose sheets",
        structured: true,
        statusLabel: "COMPLETE",
        doi: "10.60555/psi-62",
        url: "https://psi.nasa.gov/physci/repo/data/investigations/PSI-62",
        hardware: "Coupled Gas/Solid Phase Radiative CFD",
        pi: "Dr. Subrata Bhattacharjee",
        o2Range: "16% – 30% O₂",
        pressure: "8.2 – 14.7 psia",
        airflow: "1 – 40 cm/s",
        thumb: IMG_LUNAR,
        missions: ["lunar", "rover"],
        summary: "Validates numerical flame spread and radiative quenching models against BASS and BASS-II flight datasets.",
        hypothesis: "Coupled surface radiation and viscous boundary-layer standoff thickness predict microgravity quenching limits."
      }
    ];

    const ADDITIONAL_PSI_RECORDS = [
      { id: "PSI-100", code: "SAFFIRE-III", title: "SAFFIRE-III – Large-Scale Flow Duct Flammability", subtitle: "Elevated flow rate & oxygen depletion burn", fullTitle: "Spacecraft Fire Experiment-III (SAFFIRE-III)", gravity: "Microgravity", domain: "Spacecraft Safety", fuelCategory: "Solid", fuels: "SIBAL & PMMA", structured: true, statusLabel: "COMPLETE", doi: "10.60555/psi-100", url: "https://psi.nasa.gov/physci/repo", hardware: "Cygnus Cargo Vehicle", pi: "Dr. Gary A. Ruff", o2Range: "21% O₂", pressure: "14.7 psia", airflow: "30 cm/s", thumb: IMG_HERO, missions: ["mars", "iss"], summary: "Evaluates large-scale flame spread and CO2 scrubber interactions on Cygnus.", hypothesis: "Large sample widths exhibit 3D edge effects in low-velocity spacecraft ventilation." },
      { id: "PSI-148", code: "ACME-BRE", title: "ACME BRE – Burner Reactor Experiments", subtitle: "Long-duration spacecraft material flammability", fullTitle: "Advanced Combustion via Microgravity Experiments: Burning Rate Emulator (BRE)", gravity: "Microgravity", domain: "Material Flammability", fuelCategory: "Gaseous", fuels: "Ethylene & Methane emulating vaporized solids", structured: true, statusLabel: "ACTIVE", doi: "10.60555/psi-148", url: "https://psi.nasa.gov/physci/repo", hardware: "ISS CIR", pi: "Dr. James G. Quintiere", o2Range: "17% – 30% O₂", pressure: "10.2 – 14.7 psia", airflow: "Quiescent / Low flow", thumb: IMG_FLAME, missions: ["lunar", "rover"], summary: "Emulates condensed-phase fuel burning rates using calibrated flat porous gas burners.", hypothesis: "Stagnant and low-speed B-number mass transfer governs polymer flammability." },
      { id: "PSI-149", code: "ACME-Coflow", title: "ACME Coflow – Soot & Radiation in Laminar Flames", subtitle: "Spherical and coflow non-premixed soot inception", fullTitle: "Advanced Combustion via Microgravity Experiments: Coflow Laminar Diffusion Flames", gravity: "Microgravity", domain: "Flame Dynamics", fuelCategory: "Gaseous", fuels: "Methane, Ethylene, Nitrogen-diluted hydrocarbons", structured: true, statusLabel: "ACTIVE", doi: "10.60555/psi-149", url: "https://psi.nasa.gov/physci/repo", hardware: "ISS CIR", pi: "Dr. Marshall B. Long", o2Range: "21% – 35% O₂", pressure: "1.0 atm", airflow: "Laminar coflow", thumb: IMG_FLAME, missions: ["iss"], summary: "Measures soot volume fraction and radiative loss in buoyancy-free laminar coflow flames.", hypothesis: "Absence of buoyant acceleration extends soot residence times and radiative quenching." },
      { id: "PSI-150", code: "ACME-E-FIELD", title: "ACME E-FIELD – Electric Field Flame Control", subtitle: "Ion-driven convection for soot-free burning", fullTitle: "Advanced Combustion via Microgravity Experiments: Electric-Field Effects on Laminar Diffusion Flames", gravity: "Microgravity", domain: "Suppression", fuelCategory: "Gaseous", fuels: "Methane & Ethylene", structured: false, statusLabel: "PAUSED", doi: "10.60555/psi-150", url: "https://psi.nasa.gov/physci/repo", hardware: "ISS CIR High-Voltage Electrode Mesh", pi: "Dr. Derek Dunn-Rankin", o2Range: "21% O₂", pressure: "1.0 atm", airflow: "Ion-wind induced convection", thumb: IMG_FLAME, missions: ["iss", "lunar"], summary: "Uses chemi-ionization electric fields to control flame shape, soot, and extinction without fans.", hypothesis: "Body forces on flame ions can replace gravitational buoyancy in spacecraft burners." },
      { id: "PSI-151", code: "ACME-s-Flame", title: "ACME s-Flame – Spherical Diffusion Flame Extinction", subtitle: "Radiative vs kinetic extinction boundaries", fullTitle: "Structure and Response of Spherical Diffusion Flames (s-Flame)", gravity: "Microgravity", domain: "Flame Dynamics", fuelCategory: "Gaseous", fuels: "Hydrogen, Methane, Ethylene", structured: false, statusLabel: "COMPLETE", doi: "10.60555/psi-151", url: "https://psi.nasa.gov/physci/repo", hardware: "ISS CIR Spherical Burner", pi: "Dr. Chung K. Law", o2Range: "15% – 30% O₂", pressure: "0.5 – 1.5 atm", airflow: "Spherical radial diffusion", thumb: IMG_FLAME, missions: ["iss", "mars"], summary: "Investigates unsteady pulsation and radiative extinction in 1D spherical diffusion flames.", hypothesis: "Lewis number instabilities trigger pulsating modes prior to radiative extinction." },
      { id: "PSI-112", code: "SLICE", title: "SLICE – Structure & Liftoff In Combustion", subtitle: "Jet diffusion flame liftoff and stabilization", fullTitle: "Structure and Liftoff In Combustion Experiment (SLICE)", gravity: "Microgravity", domain: "Flame Dynamics", fuelCategory: "Gaseous", fuels: "Methane, Propane, Nitrogen-diluted jets", structured: false, statusLabel: "COMPLETE", doi: "10.60555/psi-112", url: "https://psi.nasa.gov/physci/repo", hardware: "ISS Microgravity Science Glovebox (MSG)", pi: "Dr. Marshall B. Long", o2Range: "21% O₂", pressure: "14.7 psia", airflow: "Co-flowing laminar jet", thumb: IMG_FLAME, missions: ["iss"], summary: "ACME precursor characterizing lifted diffusion flame base stabilization in microgravity.", hypothesis: "Triple-flame propagation speed balances local velocity gradient at liftoff height." },
      { id: "PSI-120", code: "SoFIE-GEL", title: "SoFIE-GEL – Growth and Extinction Limit", subtitle: "Thick solid fuel flammability in exploration atmospheres", fullTitle: "Solid Fuel Ignition and Extinction — Growth and Extinction Limit (SoFIE-GEL)", gravity: "Partial Gravity", domain: "Material Flammability", fuelCategory: "Solid", fuels: "Thick PMMA Cylinders & Spheres", structured: false, statusLabel: "ACTIVE", doi: "10.60555/psi-120", url: "https://psi.nasa.gov/physci/repo", hardware: "ISS CIR SoFIE Chamber", pi: "Dr. James S. T'ien", o2Range: "21% – 35% O₂", pressure: "8.2 – 14.7 psia", airflow: "1 – 40 cm/s", thumb: IMG_LUNAR, missions: ["lunar", "rover"], summary: "Studies flame growth and extinction over thermally thick solid fuels in Lunar/Exploration atmospheres.", hypothesis: "Solid interior heat conduction controls quenching limits during long-duration burns." },
      { id: "PSI-121", code: "SoFIE-MIST", title: "SoFIE-MIST – Material Ignition and Suppression", subtitle: "Fine water-mist suppression in exploration cabin", fullTitle: "Solid Fuel Ignition and Extinction — Material Ignition and Suppression Test (SoFIE-MIST)", gravity: "Partial Gravity", domain: "Suppression", fuelCategory: "Solid", fuels: "PMMA Rods with Fine Water Mist Suppressant", structured: false, statusLabel: "ACTIVE", doi: "10.60555/psi-121", url: "https://psi.nasa.gov/physci/repo", hardware: "ISS CIR SoFIE Wind Tunnel", pi: "Dr. Fletcher J. Miller", o2Range: "21% – 34% O₂", pressure: "8.2 – 14.7 psia", airflow: "5 – 35 cm/s", thumb: IMG_LUNAR, missions: ["lunar", "rover"], summary: "Quantifies piloted ignition and water-mist extinguishment of cylindrical polymers.", hypothesis: "Fine water mist droplets drift with ventilation flow to suppress concurrent solid flames." },
      { id: "PSI-122", code: "SoFIE-RTF", title: "SoFIE-RTF – Residence Time Driven Flame Spread", subtitle: "Thin fuel thickness & flow residence effects", fullTitle: "Solid Fuel Ignition and Extinction — Residence Time Driven Flame Spread (SoFIE-RTF)", gravity: "Partial Gravity", domain: "Material Flammability", fuelCategory: "Solid", fuels: "Thin & Intermediate PMMA / Cellulose", structured: false, statusLabel: "PLANNING", doi: "10.60555/psi-122", url: "https://psi.nasa.gov/physci/repo", hardware: "ISS CIR SoFIE", pi: "Dr. Subrata Bhattacharjee", o2Range: "17% – 34% O₂", pressure: "8.2 – 14.7 psia", airflow: "1 – 30 cm/s", thumb: IMG_LUNAR, missions: ["lunar", "mars"], summary: "Isolates Damköhler and radiative residence time effects on opposed-flow flame spread.", hypothesis: "Microgravity opposed flame spread peaks at intermediate ventilation velocities." },
      { id: "PSI-123", code: "SoFIE-SMOLDER", title: "SoFIE-SMOLDER – Smoldering & Transition to Flaming", subtitle: "Porous foam smolder propagation in low gravity", fullTitle: "Smoldering Combustion and Transition to Flaming in Microgravity", gravity: "Microgravity", domain: "Smoke & Detection", fuelCategory: "Mixed", fuels: "Polyurethane Foam & Porous Insulation", structured: false, statusLabel: "PAUSED", doi: "10.60555/psi-123", url: "https://psi.nasa.gov/physci/repo", hardware: "ISS MSG / CIR", pi: "Dr. Carlos Fernandez-Pello", o2Range: "18% – 34% O₂", pressure: "10.2 – 14.7 psia", airflow: "0.5 – 10 cm/s", thumb: IMG_MARS, missions: ["mars", "rover"], summary: "Investigates non-flaming smolder propagation and sudden transition to flaming in spacecraft foam.", hypothesis: "Reduced heat loss in 0g permits self-sustained smoldering at ultra-low airflow velocities." },
      { id: "PSI-130", code: "DAFT", title: "DAFT – Dust Aerosol Fire & Lunar Abatement", subtitle: "Nuisance lunar regolith vs combustion smoke", fullTitle: "Characterization of Nuisance Particulates vs Space Smoke Aerosols", gravity: "Partial Gravity", domain: "Smoke & Detection", fuelCategory: "Mixed", fuels: "Lunar Dust Simulant vs Pyrolysis Smoke", structured: false, statusLabel: "PLANNING", doi: "10.60555/psi-130", url: "https://psi.nasa.gov/physci/repo", hardware: "NASA GRC Aerosol Chamber & ISS Air Monitor", pi: "Dr. David L. Urban", o2Range: "30% O₂", pressure: "10.2 psia", airflow: "Cabin HVAC", thumb: IMG_MARS, missions: ["lunar", "rover"], summary: "Discriminates lunar surface dust intrusion from genuine pyrolysis smoke signatures.", hypothesis: "Dual-wavelength polarization scatter separates mineral regolith from spherical smoke droplets." },
      { id: "PSI-131", code: "FFFT", title: "FFFT – Forced Flow Flame Spread Test", subtitle: "Low-speed concurrent flow over flat & cylindrical fuels", fullTitle: "Forced Flow Flame Spread Test (FFFT)", gravity: "Microgravity", domain: "Material Flammability", fuelCategory: "Solid", fuels: "Thin Paper & Polymer Rods", structured: false, statusLabel: "COMPLETE", doi: "10.60555/psi-131", url: "https://psi.nasa.gov/physci/repo", hardware: "Space Shuttle / ISS Glovebox", pi: "Dr. Sandra L. Olson", o2Range: "21% O₂", pressure: "14.7 psia", airflow: "1 – 20 cm/s", thumb: IMG_LUNAR, missions: ["iss"], summary: "Foundational microgravity forced-flow flammability study showing low-velocity flame survival.", hypothesis: "Ventilation flows below 1g buoyant speeds (~20 cm/s) dictate spacecraft material risk." },
      { id: "PSI-135", code: "WATER-MIST-0G", title: "WATER-MIST – Fine Mist Extinguishment in 0g", subtitle: "Non-toxic replacement for Halon in crew cabins", fullTitle: "Microgravity Fine Water Mist Fire Suppression Investigation", gravity: "Microgravity", domain: "Suppression", fuelCategory: "Liquid", fuels: "Polymers & Liquid Pool Fires + Water Mist", structured: false, statusLabel: "ACTIVE", doi: "10.60555/psi-135", url: "https://psi.nasa.gov/physci/repo", hardware: "NASA GRC Zero-G Facility & ISS Portable Extinguisher", pi: "Dr. Angel Abbud-Madrid", o2Range: "21% – 30% O₂", pressure: "10.2 – 14.7 psia", airflow: "10 – 30 cm/s", thumb: IMG_FLAME, missions: ["lunar", "rover"], summary: "Evaluates droplet Sauter mean diameter for rapid latent-heat cooling of cabin fires.", hypothesis: "Sub-50 micron water mist droplets follow streamlines into recessed avionics racks." },
      { id: "PSI-140", code: "SAFFIRE-IV-V", title: "SAFFIRE-IV & V – Post-Fire Gas Scrubbing & Toxicity", subtitle: "CO, CO₂, HF, HCl monitoring and LiOH scrubber beds", fullTitle: "Spacecraft Fire Experiment IV & V: Combustion Products & Scrubber Verification", gravity: "Partial Gravity", domain: "Smoke & Detection", fuelCategory: "Mixed", fuels: "PMMA, SIBAL, Silicone, Wiring Insulation (8.2–10.38 psi)", structured: false, statusLabel: "ACTIVE", doi: "10.60555/psi-140", url: "https://psi.nasa.gov/physci/repo", hardware: "Cygnus NG-13 / NG-14 + LiOH Scrubber Beds", pi: "Dr. Gary A. Ruff", o2Range: "26.5% – 34% O₂", pressure: "8.2 – 10.38 psia", airflow: "20 – 30 cm/s", thumb: IMG_HERO, missions: ["lunar", "mars", "rover"], summary: "Measures acid gas (HF, HCl), CO, and CO₂ removal capacity (157 g removed on Saffire-IV) at exploration pressures (10.38 psia).", hypothesis: "Reduced pressure and elevated O₂ accelerate flame spread and require rapid LiOH/charcoal scrubbing." }
    ];

    const ALL_INVESTIGATIONS = [...PSI_INVESTIGATIONS, ...ADDITIONAL_PSI_RECORDS];

    const MISSION_PROFILES = {
      lunar: {
        id: "lunar",
        name: "Lunar Habitat",
        badge: "1/6 g • 30% O₂ • 10.2 psi",
        gravity: "0.166 g (Lunar Partial Gravity)",
        o2: "30% – 34% O₂ (Space Exploration Atmosphere)",
        pressure: "8.2 – 10.2 psia (56.5 – 70.3 kPa)",
        evaNote: "Reduces EVA pre-breathe time for rapid suitport egress (NASA TP-2010-216134 & OCHMO-TB-003).",
        riskLevel: "STATUS: ACTIVE • HIGH FLAMMABILITY SHIFT",
        image: IMG_LUNAR,
        keyFindings: [
          "Elevated 30%–34% O₂ at 10.2 psia significantly lowers the Upward Limiting Oxygen Index (ULOI) and Maximum Oxygen Concentration (MOC) compared to 21% O₂ ISS air.",
          "BASS (PSI-26) and BASS-II (PSI-25) demonstrate that materials passing 1g NASA-STD-6001 Test #1 can sustain flame spread under low-speed forced ventilation (5–30 cm/s) and partial gravity.",
          "SAFFIRE-IV/V (PSI-140) tested 10.38 psia cabin environments and verified LiOH scrubber removal of CO₂ (157 g) and acid gases (HF) after PMMA/SIBAL fires."
        ],
        gaps: [
          "Long-duration (>60 s) buoyant + forced mixed convection curves at 1/6 g (centrifuge drop tests are limited to ~5.18 s).",
          "Lunar regolith dust false-alarm discrimination vs. SAME (PSI-102) pyrolysis smoke aerosols."
        ]
      },
      mars: {
        id: "mars",
        name: "Mars Transit",
        badge: "Microgravity • Long duration",
        gravity: "0.00 g (Deep-Space Microgravity Transit) → 0.38 g Surface",
        o2: "21% – 34% O₂",
        pressure: "10.2 – 14.7 psia",
        evaNote: "Multi-month transit with zero immediate Earth-return abort capability; cabin atmosphere must self-recover after any fire event.",
        riskLevel: "STATUS: IN DEVELOPMENT • AUTONOMOUS RECOVERY",
        image: IMG_MARS,
        keyFindings: [
          "SAFFIRE-II (PSI-99) and SAFFIRE-I (PSI-98) proved that large-scale microgravity flames in sealed vehicle volumes consume O₂ and generate thermal plumes governed by HVAC fan speed (20–30 cm/s).",
          "SAME (PSI-102) and SAME-R (PSI-101) show that microgravity smoke particles grow larger via coagulation due to longer residence times near overheated electronics.",
          "FLEX (PSI-69) and ACME CFI-G (PSI-159) reveal that extinguished hot flames can transition into low-temperature cool diffusion flames (500–800 K) that re-ignite."
        ],
        gaps: [
          "Closed-loop post-fire atmosphere revitalization without expendable gas venting during a 9-month Mars cruise.",
          "Martian 0.38 g partial-gravity mixed-convection blowoff and quenching boundaries."
        ]
      },
      rover: {
        id: "rover",
        name: "Pressurized Rover",
        badge: "Variable • Compact cabin",
        gravity: "0.166 g (Moon) / 0.38 g (Mars)",
        o2: "30% – 34% O₂ (Exploration Suitport Match)",
        pressure: "8.2 psia (56.5 kPa)",
        evaNote: "Compact net habitable volume with high-density avionics, lithium battery packs, and direct suitport locks.",
        riskLevel: "STATUS: PLANNING • COMPACT CABIN RISK",
        image: IMG_LUNAR,
        keyFindings: [
          "In a compact pressurized rover cabin, smoke and toxic pyrolysis products (CO, HF, HCl) reach hazardous concentrations within 60–120 seconds (SAFFIRE-V / PSI-140 & SAME / PSI-102).",
          "BASS-II (PSI-25) and SoFIE-MIST (PSI-121) provide fine water-mist and ventilation-shutoff protocols to quench polymer fires rapidly."
        ],
        gaps: [
          "High-concentration 34% O₂ / 8.2 psia wire-bundle arc-tracking ignition and fine water-mist dispersion in cramped rover cockpits."
        ]
      },
      iss: {
        id: "iss",
        name: "Space Stations",
        badge: "Microgravity • ISS",
        gravity: "0.00 g (Low Earth Orbit Microgravity)",
        o2: "21% O₂ (Earth Sea-Level Standard)",
        pressure: "14.7 psia (101.3 kPa)",
        evaNote: "Baseline orbital laboratory hosting the Combustion Integrated Rack (CIR) and Microgravity Science Glovebox (MSG).",
        riskLevel: "STATUS: COMPLETE • BASELINE FLIGHT VERIFIED",
        image: IMG_MARS,
        keyFindings: [
          "All 5 primary flight suites—ACME CFI-G (PSI-159), BASS (PSI-26), BASS-II (PSI-25), SAME (PSI-102), and FLEX (PSI-69)—were executed on the ISS or departing ISS cargo vehicles.",
          "Established that shutting off cabin ventilation fans is the fastest primary step to starve microgravity flames of oxygen transport."
        ],
        gaps: [
          "Transitioning from 14.7 psia / 21% O₂ ISS fire safety protocols to commercial LEO stations and variable-pressure Lunar Gateway modules."
        ]
      }
    };

    const AI_ANSWERS = {
      "Which investigations studied solid fuel flame propagation in microgravity?": {
        title: "Solid Fuel Flame Propagation in Microgravity",
        citations: ["PSI-26 (BASS)", "PSI-25 (BASS-II)", "PSI-99 (SAFFIRE-II)", "PSI-98 (SAFFIRE-I)", "PSI-62"],
        answer: "Four primary NASA PSI flight investigations and one modeling benchmark directly studied solid fuel flame propagation in microgravity:\n\n• **PSI-26 (BASS) & PSI-25 (BASS-II)**: Conducted inside the ISS Microgravity Science Glovebox (MSG), burning PMMA rods/sheets, SIBAL (cotton-fiberglass), and Nomex under forced airflows (1–55 cm/s). They proved that low-speed ventilation allows solid fuels to burn at lower O₂ concentrations in 0g than in 1g.\n• **PSI-99 (SAFFIRE-II) & PSI-98 (SAFFIRE-I)**: Conducted inside uncrewed Cygnus cargo spacecraft after ISS deberthing. SAFFIRE-II tested 9 samples (5 cm × 29 cm) including structured/flat PMMA, silicone, and SIBAL at 20 and 30 cm/s airflow.\n• **PSI-62**: Coupled gas/solid radiative CFD modeling validated against BASS and BASS-II extinction limits."
      },
      "What experiments studied fire suppression using CO₂?": {
        title: "Fire Suppression Using CO₂ and Inert Diluents",
        citations: ["PSI-69 (FLEX)", "PSI-68 (FLEX-2)", "PSI-26 (BASS)", "PSI-159 (ACME CFI-G)"],
        answer: "NASA PSI investigations evaluating **CO₂** and gaseous suppressants include:\n\n• **PSI-69 (FLEX — Flame Extinguishment Experiment)**: Conducted over 200 droplet tests in the ISS Combustion Integrated Rack (CIR) quantifying the effectiveness of **CO₂, Helium (He), N₂, and SF₆** on n-heptane and methanol droplets, mapping the Limiting Oxygen Index (LOI) and radiative extinction.\n• **PSI-26 (BASS)**: Tested nitrogen and CO₂ dilution alongside airflow velocity step-downs to extinguish burning solid polymer geometries in the MSG.\n• **PSI-159 (ACME CFI-G)**: Examined CO₂ and N₂ reactant dilutions on spherical porous-burner gaseous cool diffusion flames."
      },
      "Compare BASS and SAFFIRE.": {
        title: "Comparison: BASS (PSI-26 / PSI-25) vs. SAFFIRE (PSI-98 / PSI-99)",
        citations: ["PSI-26 (BASS)", "PSI-25 (BASS-II)", "PSI-99 (SAFFIRE-II)"],
        answer: "**BASS / BASS-II** and **SAFFIRE-I / II** are complementary small-scale vs. vehicle-scale solid combustion campaigns:\n\n1. **Experimental Scale & Facility**: BASS ran inside the crewed ISS Microgravity Science Glovebox (76-liter sealed work volume, cm-scale samples) with astronaut real-time flow adjustments. SAFFIRE ran autonomously aboard uncrewed Orbital Sciences **Cygnus** cargo vehicles after undocking, burning large panels (up to 0.4 m × 1.0 m in SAFFIRE-I and nine 5 × 29 cm strips in SAFFIRE-II).\n2. **Airflow & Environment**: BASS swept forced flows from 1 to 55 cm/s to pinpoint low-velocity quenching and blowoff limits. SAFFIRE-II tested realistic spacecraft HVAC duct speeds (20 and 30 cm/s) and measured vehicle-wide O₂ depletion, CO₂ buildup, and radiometer heat flux.\n3. **Key Takeaway**: BASS discovered the fundamental low-g flammability limits (df ~ dv boundary layer scaling), while SAFFIRE validated how a realistic fire grows and interacts with cabin pressure and LiOH scrubbers in an exploration vehicle."
      },
      "Which research is relevant to a lunar habitat?": {
        title: "NASA PSI Research Relevant to a Lunar Habitat (1/6 g • 30% O₂ • 10.2 psi)",
        citations: ["PSI-25 (BASS-II)", "PSI-26 (BASS)", "PSI-99 (SAFFIRE-II)", "PSI-102 (SAME)", "PSI-69 (FLEX)"],
        answer: "A Lunar Habitat operates under NASA's **Space Exploration Atmosphere (SEA)**—typically **1/6 g, 30%–34% O₂, at 8.2–10.2 psia**—to minimize astronaut decompression sickness during EVAs. Key relevant investigations:\n\n• **PSI-25 (BASS-II) & PSI-26 (BASS)**: Critical for lunar material selection; showed that elevated O₂% and low-speed ventilation lower the Maximum Oxygen Concentration (MOC) at which PMMA, Nomex, and SIBAL self-extinguish.\n• **PSI-99 (SAFFIRE-II) & PSI-140 (SAFFIRE-IV/V)**: Tested large-scale material panels and cabin CO₂/HF scrubbing at reduced pressure (10.38 psia).\n• **PSI-102 (SAME) & PSI-130**: Essential for designing lunar habitat smoke detectors that account for reduced-gravity aerosol coagulation without triggering false alarms from lunar regolith dust."
      },
      "Explain cool diffusion flames in ACME CFI-G and FLEX.": {
        title: "Cool Diffusion Flames in Microgravity (PSI-159, PSI-69, PSI-142)",
        citations: ["PSI-159 (ACME CFI-G)", "PSI-69 (FLEX)", "PSI-142", "PSI-117"],
        answer: "First discovered during **PSI-69 (FLEX)** n-heptane droplet tests on the ISS, **cool flames** are low-temperature (500–800 K), faint flames sustained by peroxy-radical ($RO_2$) chemistry after a hot flame radiatively extinguishes.\n\n• **PSI-159 (ACME CFI-G)** extended this discovery to steady-state gaseous fuels (propane, n-butane, n-pentane) on a spherical porous burner in the ISS CIR.\n• **PSI-142 & PSI-117** modeled how cool flames transition back into hot flames when flow stretch or oxygen concentration shifts."
      }
    };
