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

    // ============================================================================
    // INITIALIZATION & RENDERING FUNCTIONS
    // ============================================================================
    function initApp() {
      renderRecentInvestigationsTable();
      openMissionProfile('lunar', false);
      renderExplorerCatalog();
      initComparisonSelectors();
      renderRiskMatrix();
      updatePredictiveLab();
      initFullAssistant();

      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
      });
    }

    // Render the exact Image-1 style table on the Overview screen
    function renderRecentInvestigationsTable() {
      const tbody = document.getElementById('recentInvestigationsTableBody');
      if (!tbody) return;
      const topFive = PSI_INVESTIGATIONS.slice(0, 5);
      tbody.innerHTML = topFive.map(inv => {
        let actionHtml = '';
        if (inv.statusLabel === 'ACTIVE' || inv.statusLabel === 'COMPLETE') {
          actionHtml = `
            <div class="flex items-center justify-center gap-2">
              <button onclick="openInvestigationModal('${inv.id}')" class="btn-pill-action px-4 py-1.5 text-xs">View Data</button>
              <a href="${inv.url}" target="_blank" rel="noopener noreferrer" class="btn-pill-action px-4 py-1.5 text-xs">Full Report</a>
            </div>
          `;
        } else {
          actionHtml = `
            <div class="flex items-center justify-center">
              <button onclick="openInvestigationModal('${inv.id}')" class="btn-pill-action w-full max-w-[210px] py-1.5 text-xs">Details</button>
            </div>
          `;
        }
        return `
          <tr>
            <td class="font-bold text-[#1E170C]">${inv.id}</td>
            <td class="font-semibold text-[#1E170C]">${inv.title}</td>
            <td class="text-[#2B2214]">${inv.pi}</td>
            <td class="font-bold text-[#1E170C] uppercase">${inv.statusLabel}</td>
            <td>${actionHtml}</td>
          </tr>
        `;
      }).join('');
    }

    let telemIdx = 0;
    const TELEM_SAMPLES = [
      { label: "20 cm/s", sub: "SAFFIRE-II", slate: "36,142 52,98 62,28 74,118 92,102 108,136 124,62 142,114 160,96 178,108 196,68 214,104 232,126 250,48 268,94 286,38 304,88 322,64 340,118 358,92 374,62 386,84", tan: "36,125 65,92 95,112 125,115 155,108 185,102 215,96 245,78 275,66 305,74 335,58 365,86 386,75" },
      { label: "30% O₂", sub: "BASS-II", slate: "36,150 60,75 88,42 116,84 144,54 172,92 200,38 228,76 256,50 284,82 312,34 340,68 368,48 386,55", tan: "36,138 75,110 115,94 155,82 195,70 235,62 275,54 315,48 355,44 386,40" },
      { label: "CO₂ 18%", sub: "FLEX-69", slate: "36,48 70,56 105,68 140,85 175,104 210,118 245,126 280,134 315,142 350,148 386,154", tan: "36,64 85,78 135,96 185,114 235,128 285,138 335,145 386,150" }
    ];
    function cycleTelemetrySample() {
      telemIdx = (telemIdx + 1) % TELEM_SAMPLES.length;
      const t = TELEM_SAMPLES[telemIdx];
      document.getElementById('telemCurveSlate')?.setAttribute('points', t.slate);
      document.getElementById('telemCurveTan')?.setAttribute('points', t.tan);
      const txt = document.getElementById('telemCalloutText');
      if (txt) txt.textContent = `${t.label} (${t.sub})`;
    }

    function switchView(viewId) {
      const views = ['overview', 'mission', 'explorer', 'compare', 'assistant', 'risk', 'predictive'];
      views.forEach(v => {
        const el = document.getElementById('view-' + v);
        const btn = document.getElementById('nav-' + v);
        if (el) el.classList.toggle('hidden', v !== viewId);
        if (btn) {
          if (v === viewId) btn.classList.add('nav-tab-active');
          else btn.classList.remove('nav-tab-active');
        }
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function openMissionProfile(missionKey, switchTab = true) {
      if (switchTab) switchView('mission');
      const m = MISSION_PROFILES[missionKey] || MISSION_PROFILES.lunar;

      const cardsContainer = document.getElementById('missionSelectorCards');
      if (cardsContainer) {
        cardsContainer.innerHTML = Object.values(MISSION_PROFILES).map((item, idx) => {
          const active = item.id === m.id;
          const cls = idx % 2 === 0 ? 'card-tan' : 'card-brown';
          return `
            <button onclick="openMissionProfile('${item.id}', false)" class="${cls} p-4 text-left ${active ? 'ring-4 ring-[#5B6B28]' : ''}">
              <div class="flex items-center justify-between">
                <span class="text-sm font-extrabold uppercase">${item.name}</span>
                <span class="status-badge">${active ? 'SELECTED' : 'VIEW'}</span>
              </div>
              <div class="text-xs opacity-85 mt-1 font-medium">${item.badge}</div>
            </button>
          `;
        }).join('');
      }

      const related = ALL_INVESTIGATIONS.filter(inv => inv.missions && inv.missions.includes(m.id));
      const detail = document.getElementById('missionDetailContainer');
      if (!detail) return;

      detail.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div class="lg:col-span-7 space-y-4">
            <div class="flex flex-wrap items-center gap-2">
              <span class="status-badge">${m.riskLevel}</span>
              <span class="text-xs font-bold text-[#52432C]">${related.length} Applicable PSI Investigations</span>
            </div>
            <h2 class="text-2xl font-extrabold uppercase text-[#1E170C]">${m.name} Combustion &amp; Fire Safety Profile</h2>
            <p class="text-xs sm:text-sm text-[#2B2214] leading-relaxed">${m.evaNote}</p>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div class="card-tan p-3">
                <div class="text-[10px] font-bold uppercase text-[#3D311E]">Gravity Regime</div>
                <div class="text-xs font-extrabold text-[#1E170C] mt-1">${m.gravity}</div>
              </div>
              <div class="card-tan p-3">
                <div class="text-[10px] font-bold uppercase text-[#3D311E]">Oxygen Concentration</div>
                <div class="text-xs font-extrabold text-[#1E170C] mt-1">${m.o2}</div>
              </div>
              <div class="card-tan p-3">
                <div class="text-[10px] font-bold uppercase text-[#3D311E]">Cabin Pressure</div>
                <div class="text-xs font-extrabold text-[#1E170C] mt-1">${m.pressure}</div>
              </div>
            </div>

            <div>
              <h3 class="text-xs font-extrabold uppercase tracking-wider text-[#6C3C0E] mb-2">Verified NASA PSI Mission Insights</h3>
              <ul class="space-y-2 text-xs text-[#1E170C]">
                ${m.keyFindings.map(f => `<li class="flex items-start gap-2"><span class="font-bold">•</span><span>${f}</span></li>`).join('')}
              </ul>
            </div>

            <div>
              <h3 class="text-xs font-extrabold uppercase tracking-wider text-[#5B6B28] mb-2">Identified Research Gaps</h3>
              <ul class="space-y-1.5 text-xs text-[#2B2214]">
                ${m.gaps.map(g => `<li class="flex items-start gap-2"><span class="font-bold">▲</span><span>${g}</span></li>`).join('')}
              </ul>
            </div>
          </div>

          <div class="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div class="rounded-2xl overflow-hidden border-2 border-[#4A3B24] relative h-44">
              <img src="${m.image}" alt="${m.name}" class="w-full h-full object-cover" />
              <div class="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between bg-[#F5EFC6]/90 px-3 py-1.5 rounded-xl border border-[#4A3B24]">
                <span class="text-xs font-extrabold text-[#1E170C]">${m.name}</span>
                <button onclick="loadPredictivePreset('${m.id}'); switchView('predictive');" class="btn-pill-action px-3 py-1 text-[11px]">Simulate →</button>
              </div>
            </div>

            <div class="bg-[#F5EFC6] border border-[#4A3B24] rounded-xl p-3.5">
              <div class="text-xs font-extrabold uppercase text-[#1E170C] mb-2">Tailored PSI Investigations (${related.length})</div>
              <div class="space-y-2 max-h-56 overflow-y-auto pr-1">
                ${related.map(inv => `
                  <div onclick="openInvestigationModal('${inv.id}')" class="p-2.5 rounded-lg bg-[#EDE2C4] hover:bg-[#B8935A]/40 border border-[#4A3B24]/30 flex items-center justify-between cursor-pointer">
                    <div>
                      <span class="text-xs font-extrabold text-[#6C3C0E]">${inv.id}</span>
                      <span class="text-xs text-[#1E170C] font-bold ml-1.5">${inv.title}</span>
                      <div class="text-[10px] text-[#52432C]">${inv.fuels}</div>
                    </div>
                    <span class="text-xs font-bold text-[#1E170C]">›</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    function filterExplorerFromKPI(mode) {
      switchView('explorer');
      document.getElementById('expSearch').value = '';
      document.getElementById('expDomain').value = 'ALL';
      document.getElementById('expFuel').value = 'ALL';
      document.getElementById('expGravity').value = 'ALL';
      document.getElementById('expStructured').value = mode === 'structured' ? 'YES' : 'ALL';
      renderExplorerCatalog();
    }

    function resetExplorerFilters() {
      document.getElementById('expSearch').value = '';
      document.getElementById('expDomain').value = 'ALL';
      document.getElementById('expFuel').value = 'ALL';
      document.getElementById('expGravity').value = 'ALL';
      document.getElementById('expStructured').value = 'ALL';
      renderExplorerCatalog();
    }

    function renderExplorerCatalog() {
      const q = (document.getElementById('expSearch')?.value || '').trim().toLowerCase();
      const dom = document.getElementById('expDomain')?.value || 'ALL';
      const fuel = document.getElementById('expFuel')?.value || 'ALL';
      const grav = document.getElementById('expGravity')?.value || 'ALL';
      const struc = document.getElementById('expStructured')?.value || 'ALL';

      const filtered = ALL_INVESTIGATIONS.filter(item => {
        if (dom !== 'ALL' && item.domain !== dom) return false;
        if (fuel !== 'ALL' && item.fuelCategory !== fuel) return false;
        if (grav !== 'ALL' && item.gravity !== grav) return false;
        if (struc === 'YES' && !item.structured) return false;
        if (q) {
          const hay = `${item.id} ${item.code} ${item.title} ${item.subtitle} ${item.fuels} ${item.domain} ${item.pi} ${item.hardware}`.toLowerCase();
          if (!hay.includes(q)) return false;
        }
        return true;
      });

      const banner = document.getElementById('explorerCountBanner');
      if (banner) {
        banner.textContent = `Showing ${filtered.length} of ${ALL_INVESTIGATIONS.length} NASA Physical Sciences Informatics (PSI) combustion investigations`;
      }

      const grid = document.getElementById('explorerGrid');
      if (!grid) return;

      grid.innerHTML = filtered.map((inv, idx) => {
        const cardStyle = idx % 2 === 0 ? 'card-tan' : 'card-brown';
        const subText = idx % 2 === 0 ? 'text-[#2B2214]' : 'text-[#EEDFCA]';
        return `
          <div onclick="openInvestigationModal('${inv.id}')" class="${cardStyle} p-5 flex flex-col justify-between cursor-pointer">
            <div>
              <div class="flex items-center justify-between gap-2 mb-2">
                <span class="text-xs font-extrabold uppercase tracking-wider">${inv.id} • ${inv.gravity}</span>
                <span class="status-badge">${inv.structured ? 'STRUCTURED DATA' : 'METADATA'}</span>
              </div>
              <h3 class="text-base font-extrabold uppercase leading-snug">${inv.title}</h3>
              <p class="text-xs ${subText} mt-1.5 line-clamp-2">${inv.summary}</p>
            </div>
            <div class="mt-4 pt-2.5 border-t border-current/20 flex items-center justify-between text-xs font-bold">
              <span>${inv.domain} • ${inv.fuelCategory}</span>
              <span class="underline">LEARN MORE →</span>
            </div>
          </div>
        `;
      }).join('');
    }

    function initComparisonSelectors() {
      const selA = document.getElementById('compSelectA');
      const selB = document.getElementById('compSelectB');
      const selC = document.getElementById('compSelectC');
      if (!selA || !selB || !selC) return;

      const opts = ALL_INVESTIGATIONS.map(inv => `<option value="${inv.id}">${inv.id} — ${inv.title}</option>`).join('');
      selA.innerHTML = opts;
      selB.innerHTML = opts;
      selC.innerHTML = `<option value="NONE">— None (2-Way Comparison) —</option>` + opts;

      selA.value = "PSI-26";
      selB.value = "PSI-99";
      selC.value = "PSI-69";
      renderComparisonMatrix();
    }

    function renderComparisonMatrix() {
      const idA = document.getElementById('compSelectA')?.value || 'PSI-26';
      const idB = document.getElementById('compSelectB')?.value || 'PSI-99';
      const idC = document.getElementById('compSelectC')?.value || 'NONE';

      const cols = [
        ALL_INVESTIGATIONS.find(x => x.id === idA) || ALL_INVESTIGATIONS[0],
        ALL_INVESTIGATIONS.find(x => x.id === idB) || ALL_INVESTIGATIONS[2]
      ];
      if (idC !== 'NONE') {
        const third = ALL_INVESTIGATIONS.find(x => x.id === idC);
        if (third) cols.push(third);
      }

      const container = document.getElementById('comparisonTableContainer');
      if (!container) return;

      const rows = [
        { label: "Experiment ID", fn: x => `<strong>${x.id}</strong> (${x.code})` },
        { label: "Full Title", fn: x => x.fullTitle },
        { label: "Research Domain", fn: x => x.domain },
        { label: "Gravity Regime", fn: x => x.gravity },
        { label: "Flight Hardware", fn: x => x.hardware },
        { label: "Lead Researcher", fn: x => x.pi },
        { label: "Fuel / Material", fn: x => `${x.fuelCategory}: ${x.fuels}` },
        { label: "Oxygen Range", fn: x => x.o2Range },
        { label: "Cabin Pressure", fn: x => x.pressure },
        { label: "Ventilation Flow", fn: x => x.airflow },
        { label: "Key Hypothesis", fn: x => x.hypothesis },
        { label: "NASA PSI Record", fn: x => `<a href="${x.url}" target="_blank" rel="noopener noreferrer" class="btn-pill-action inline-block px-3 py-1 text-xs">Open ${x.id} ↗</a>` }
      ];

      container.innerHTML = `
        <div class="overflow-x-auto rounded-xl border border-[#4A3B24]">
          <table class="archive-table text-left text-xs">
            <thead>
              <tr>
                <th class="w-44">Parameter</th>
                ${cols.map(c => `<th>${c.title}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${rows.map(r => `
                <tr>
                  <td class="font-bold text-[#1E170C]">${r.label}</td>
                  ${cols.map(c => `<td class="text-[#2B2214] leading-relaxed">${r.fn(c)}</td>`).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    }

    function synthesizeAnswer(queryText) {
      const clean = queryText.trim();
      if (AI_ANSWERS[clean]) return AI_ANSWERS[clean];
      const lower = clean.toLowerCase();
      if (lower.includes('solid') || lower.includes('propagation') || lower.includes('pmma')) {
        return AI_ANSWERS["Which investigations studied solid fuel flame propagation in microgravity?"];
      }
      if (lower.includes('co2') || lower.includes('co₂') || lower.includes('suppress') || lower.includes('extinguish')) {
        return AI_ANSWERS["What experiments studied fire suppression using CO₂?"];
      }
      if (lower.includes('compare') || (lower.includes('bass') && lower.includes('saffire'))) {
        return AI_ANSWERS["Compare BASS and SAFFIRE."];
      }
      if (lower.includes('lunar') || lower.includes('moon') || lower.includes('habitat') || lower.includes('10.2')) {
        return AI_ANSWERS["Which research is relevant to a lunar habitat?"];
      }
      if (lower.includes('cool') || lower.includes('acme') || lower.includes('cfi')) {
        return AI_ANSWERS["Explain cool diffusion flames in ACME CFI-G and FLEX."];
      }
      const matches = ALL_INVESTIGATIONS.filter(inv =>
        `${inv.id} ${inv.code} ${inv.title} ${inv.fuels} ${inv.domain} ${inv.summary}`.toLowerCase().includes(lower)
      ).slice(0, 4);
      if (matches.length > 0) {
        return {
          title: `NASA PSI Synthesis for "${clean}"`,
          citations: matches.map(m => `${m.id} (${m.code})`),
          answer: matches.map(m => `• **${m.id} — ${m.title}**: ${m.summary} (Fuels: ${m.fuels}; O₂: ${m.o2Range}).`).join('\n\n')
        };
      }
      return {
        title: `NASA PSI Combustion Intelligence Overview`,
        citations: ["PSI-159 (ACME CFI-G)", "PSI-26 (BASS)", "PSI-99 (SAFFIRE-II)", "PSI-102 (SAME)", "PSI-69 (FLEX)"],
        answer: `Across the 26 NASA PSI combustion investigations (15 with structured numerical datasets), research spans **Material Flammability (7)**, **Flame Dynamics (6)**, **Smoke & Detection (5)**, **Suppression (5)**, and **Spacecraft Safety (3)**.`
      };
    }

    function formatMarkdownLite(text) {
      return text
        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-[#1E170C]">$1</strong>')
        .replace(/\n\n/g, '<br/><br/>')
        .replace(/\n/g, '<br/>');
    }

    function askAssistantQuestion(questionText) {
      const res = synthesizeAnswer(questionText);
      const body = document.getElementById('miniAssistantBody');
      if (!body) return;
      body.innerHTML = `
        <div class="bg-[#F5EFC6] border border-[#4A3B24] rounded-2xl p-4 space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-extrabold uppercase text-[#6C3C0E]">${res.title}</span>
            <button onclick="document.getElementById('miniAssistantBody').innerHTML=''" class="text-xs font-bold text-[#52432C]">✕ Close</button>
          </div>
          <div class="text-xs text-[#1E170C] leading-relaxed">${formatMarkdownLite(res.answer)}</div>
          <div class="flex flex-wrap gap-1.5 pt-1">
            ${res.citations.map(c => `<span class="status-badge">${c}</span>`).join('')}
          </div>
        </div>
      `;
    }

    function submitMiniAssistantInput() {
      const input = document.getElementById('miniAssistantInput');
      if (!input || !input.value.trim()) return;
      askAssistantQuestion(input.value.trim());
      input.value = '';
    }

    function initFullAssistant() {
      askFullAssistant("Which research is relevant to a lunar habitat?");
    }

    function askFullAssistant(questionText) {
      const res = synthesizeAnswer(questionText);
      const conv = document.getElementById('fullAssistantConversation');
      if (!conv) return;
      const card = document.createElement('div');
      card.className = "space-y-2";
      card.innerHTML = `
        <div class="flex justify-end">
          <div class="bg-[#5B6B28] text-white rounded-2xl px-4 py-2 text-xs font-semibold max-w-lg">
            ${questionText}
          </div>
        </div>
        <div class="bg-[#F5EFC6] border border-[#4A3B24] rounded-2xl p-4 space-y-2">
          <div class="text-xs font-extrabold uppercase text-[#6C3C0E]">${res.title}</div>
          <div class="text-xs text-[#1E170C] leading-relaxed">${formatMarkdownLite(res.answer)}</div>
          <div class="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#4A3B24]/30">
            <span class="text-[10px] font-bold text-[#52432C] mr-1">Verified PSI Sources:</span>
            ${res.citations.map(c => {
              const idMatch = c.split(' ')[0];
              return `<button onclick="openInvestigationModal('${idMatch}')" class="btn-pill-action px-2.5 py-0.5 text-[10px]">${c} ↗</button>`;
            }).join('')}
          </div>
        </div>
      `;
      conv.appendChild(card);
      conv.scrollTop = conv.scrollHeight;
    }

    function submitFullAssistantInput() {
      const inp = document.getElementById('fullAssistantInput');
      if (!inp || !inp.value.trim()) return;
      askFullAssistant(inp.value.trim());
      inp.value = '';
    }

    function renderRiskMatrix() {
      const container = document.getElementById('riskMatrixContainer');
      if (!container) return;
      const pillars = [
        {
          title: "1. Material Flammability & Prevention (NASA-STD-6001 Gap)",
          severity: "STATUS: CRITICAL",
          desc: "NASA-STD-6001 Test #1 screens spacecraft materials via upward 1g burning. However, BASS-II (PSI-25) and Martian/Lunar centrifuge studies confirm that low-speed forced flows (5–30 cm/s) in micro- and partial gravity sustain combustion at lower O₂ concentrations than 1g.",
          investigations: ["PSI-25", "PSI-26", "PSI-99", "PSI-120"]
        },
        {
          title: "2. Early Smoke & Aerosol Detection (Microgravity Particle Shift)",
          severity: "STATUS: HIGH PRIORITY",
          desc: "SAME (PSI-102) and SAME-R (PSI-101) proved that lack of buoyant plume rise increases smoke residence time near pyrolysis sources, driving coagulation into larger aerosol particles that alter detector response.",
          investigations: ["PSI-102", "PSI-101", "PSI-123", "PSI-130"]
        },
        {
          title: "3. Gaseous & Fine-Mist Fire Suppression",
          severity: "STATUS: ACTIVE",
          desc: "FLEX (PSI-69) and ACME CFI-G (PSI-159) revealed that radiative extinction of hot flames can transition into low-temperature cool flames (500–800 K), requiring higher CO₂/He/water-mist concentrations and ventilation shutoff.",
          investigations: ["PSI-69", "PSI-68", "PSI-159", "PSI-121"]
        },
        {
          title: "4. Post-Fire Cabin Toxicity & LiOH Scrubber Recovery",
          severity: "STATUS: VERIFIED",
          desc: "SAFFIRE-IV & V (PSI-140) quantified CO, CO₂, HF, and HCl evolution during large-scale cabin burns at 10.38 psia, validating LiOH scrubber bed capacity (157 g CO₂ removed) for post-fire crew survival.",
          investigations: ["PSI-98", "PSI-99", "PSI-100", "PSI-140"]
        }
      ];

      container.innerHTML = pillars.map((p, i) => `
        <div class="${i % 2 === 0 ? 'card-tan' : 'card-brown'} p-5 flex flex-col justify-between space-y-3">
          <div>
            <div class="flex items-center justify-between gap-2 mb-2">
              <span class="status-badge">${p.severity}</span>
              <span class="text-xs font-bold opacity-80">${p.investigations.length} Linked PSI Records</span>
            </div>
            <h2 class="text-base font-extrabold uppercase">${p.title}</h2>
            <p class="text-xs mt-1.5 leading-relaxed opacity-90">${p.desc}</p>
          </div>
          <div class="pt-3 border-t border-current/20 flex flex-wrap gap-2">
            ${p.investigations.map(id => `<button onclick="openInvestigationModal('${id}')" class="btn-pill-action px-3 py-1 text-xs">${id} Details →</button>`).join('')}
          </div>
        </div>
      `).join('');
    }

    function loadPredictivePreset(preset) {
      if (preset === 'lunar') {
        document.getElementById('predO2').value = 30;
        document.getElementById('predPress').value = 10.2;
        document.getElementById('predFlow').value = 20;
        document.getElementById('predGrav').value = "0.166";
      } else if (preset === 'mars') {
        document.getElementById('predO2').value = 24;
        document.getElementById('predPress').value = 12.0;
        document.getElementById('predFlow').value = 15;
        document.getElementById('predGrav').value = "0";
      } else if (preset === 'rover') {
        document.getElementById('predO2').value = 34;
        document.getElementById('predPress').value = 8.2;
        document.getElementById('predFlow').value = 25;
        document.getElementById('predGrav').value = "0.166";
      } else {
        document.getElementById('predO2').value = 21;
        document.getElementById('predPress').value = 14.7;
        document.getElementById('predFlow').value = 20;
        document.getElementById('predGrav').value = "0";
      }
      updatePredictiveLab();
    }

    function updatePredictiveLab() {
      const o2 = parseFloat(document.getElementById('predO2')?.value || 21);
      const press = parseFloat(document.getElementById('predPress')?.value || 14.7);
      const flow = parseFloat(document.getElementById('predFlow')?.value || 20);
      const grav = parseFloat(document.getElementById('predGrav')?.value || 0);
      const mat = document.getElementById('predMaterial')?.value || 'pmma';

      document.getElementById('predO2Val').textContent = `${o2}% O₂`;
      document.getElementById('predPressVal').textContent = `${press.toFixed(1)} psia`;
      document.getElementById('predFlowVal').textContent = `${flow} cm/s`;
      document.getElementById('predGravVal').textContent = `${grav.toFixed(2)} g`;

      const baseLOI = mat === 'pmma' ? 16.5 : mat === 'sibal' ? 15.8 : mat === 'heptane' ? 14.5 : 18.2;
      const gravPenalty = (grav > 0 && grav < 0.5) ? -1.1 : (grav === 0 ? -0.7 : 0.0);
      const pressFactor = Math.pow(14.7 / press, 0.25);
      const effectiveLOI = +(baseLOI * pressFactor + gravPenalty).toFixed(1);

      const buoyantVel = grav * 32;
      const uEff = Math.max(2, Math.sqrt(flow * flow + buoyantVel * buoyantVel));
      const standoffMm = +(14.5 * Math.sqrt(14.7 / press) / Math.sqrt(uEff)).toFixed(2);

      const o2Margin = Math.max(0, o2 - effectiveLOI);
      const blowoffPenalty = flow > 38 ? Math.max(0.2, 1 - (flow - 38) * 0.05) : 1.0;
      const matMult = mat === 'sibal' ? 1.85 : mat === 'heptane' ? 2.4 : mat === 'pmma' ? 0.65 : 0.42;
      const spreadRate = o2 <= effectiveLOI ? 0 : +(o2Margin * 0.14 * Math.pow(uEff / 15, 0.45) * Math.pow(press / 14.7, 0.4) * matMult * blowoffPenalty).toFixed(2);
      const smokeCmdNm = Math.round(145 * (1 + (1 - Math.min(1, grav)) * 0.68) * (25 / Math.max(8, uEff * 0.6)));

      const kpiContainer = document.getElementById('predictiveKPIs');
      if (kpiContainer) {
        kpiContainer.innerHTML = `
          <div class="card-tan p-3">
            <div class="text-[10px] font-bold uppercase text-[#3D311E]">Spread Rate ($V_f$)</div>
            <div class="text-lg font-extrabold text-[#1E170C] mt-0.5">${spreadRate} mm/s</div>
          </div>
          <div class="card-tan p-3">
            <div class="text-[10px] font-bold uppercase text-[#3D311E]">Limiting $O_2$ (LOI)</div>
            <div class="text-lg font-extrabold text-[#1E170C] mt-0.5">${effectiveLOI}% O₂</div>
          </div>
          <div class="card-tan p-3">
            <div class="text-[10px] font-bold uppercase text-[#3D311E]">Flame Standoff ($d_f$)</div>
            <div class="text-lg font-extrabold text-[#1E170C] mt-0.5">${standoffMm} mm</div>
          </div>
          <div class="card-tan p-3">
            <div class="text-[10px] font-bold uppercase text-[#3D311E]">Smoke Aerosol GMD</div>
            <div class="text-lg font-extrabold text-[#1E170C] mt-0.5">${smokeCmdNm} nm</div>
          </div>
        `;
      }

      const badge = document.getElementById('predRegimeBadge');
      if (badge) {
        badge.textContent = o2 <= effectiveLOI ? "STATUS: QUENCHED (< LOI)" : (flow > 42 ? "STATUS: NEAR BLOWOFF" : "STATUS: SUSTAINED SPREAD");
      }

      const pts = [];
      for (let u = 2; u <= 50; u += 3) {
        const uTotal = Math.max(2, Math.sqrt(u * u + buoyantVel * buoyantVel));
        const bPen = u > 38 ? Math.max(0.2, 1 - (u - 38) * 0.05) : 1.0;
        const vf = o2 <= effectiveLOI ? 0 : (o2Margin * 0.14 * Math.pow(uTotal / 15, 0.45) * Math.pow(press / 14.7, 0.4) * matMult * bPen);
        const x = 40 + ((u - 2) / 48) * 480;
        const y = 165 - Math.min(140, vf * 22);
        pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
      }
      const curX = 40 + ((flow - 2) / 48) * 480;
      const curY = 165 - Math.min(140, spreadRate * 22);

      const chartEl = document.getElementById('predictiveChartSvg');
      if (chartEl) {
        chartEl.innerHTML = `
          <svg viewBox="0 0 550 195" class="w-full h-full">
            <line x1="40" y1="20" x2="40" y2="165" stroke="#8C7046" stroke-width="1.2"/>
            <line x1="40" y1="165" x2="525" y2="165" stroke="#8C7046" stroke-width="1.2"/>
            <line x1="40" y1="92" x2="525" y2="92" stroke="#8C7046" stroke-dasharray="4 4" stroke-width="0.8"/>
            <polyline fill="none" stroke="#0D3456" stroke-width="2.6" points="${pts.join(' ')}"/>
            <circle cx="${curX}" cy="${curY}" r="6" fill="#6C3C0E" stroke="#F5EFC6" stroke-width="2"/>
            <text x="${Math.min(430, curX + 8)}" y="${Math.max(28, curY - 8)}" fill="#1E170C" font-size="10.5" font-weight="700">${spreadRate} mm/s @ ${flow} cm/s</text>
            <text x="280" y="186" text-anchor="middle" fill="#2B2214" font-size="10" font-weight="600">Ventilation Flow Speed U (2 cm/s Quiescent → 50 cm/s Forced Flow)</text>
          </svg>
        `;
      }

      const expEl = document.getElementById('predictiveExplanation');
      if (expEl) {
        expEl.innerHTML = `<strong>Physical Interpretation (PSI-25 / PSI-69 / PSI-102):</strong> At <strong>${o2}% O₂</strong> and <strong>${press.toFixed(1)} psia</strong> under <strong>${grav.toFixed(2)} g</strong>, the viscous boundary-layer standoff distance is <strong>${standoffMm} mm</strong>.`;
      }
    }

    function openInvestigationModal(psiId) {
      const inv = ALL_INVESTIGATIONS.find(x => x.id === psiId) || ALL_INVESTIGATIONS[0];
      document.getElementById('modalBadge').textContent = `${inv.id} • ${inv.gravity} • ${inv.domain}`;
      document.getElementById('modalTitle').textContent = inv.fullTitle;
      document.getElementById('modalContent').innerHTML = `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#F5EFC6] border border-[#4A3B24] rounded-xl p-3.5">
          <div><span class="text-[#52432C]">Lead Researcher:</span> <strong class="text-[#1E170C]">${inv.pi}</strong></div>
          <div><span class="text-[#52432C]">DOI:</span> <strong class="text-[#6C3C0E]">${inv.doi}</strong></div>
          <div><span class="text-[#52432C]">Flight Hardware:</span> <strong class="text-[#1E170C]">${inv.hardware}</strong></div>
          <div><span class="text-[#52432C]">Fuel / Material:</span> <strong class="text-[#1E170C]">${inv.fuels}</strong></div>
          <div><span class="text-[#52432C]">Oxygen &amp; Pressure:</span> <strong class="text-[#1E170C]">${inv.o2Range} @ ${inv.pressure}</strong></div>
          <div><span class="text-[#52432C]">Flow Regime:</span> <strong class="text-[#1E170C]">${inv.airflow}</strong></div>
        </div>
        <div>
          <h4 class="text-xs font-extrabold uppercase tracking-wider text-[#6C3C0E] mb-1">Investigation Summary &amp; Objectives</h4>
          <p>${inv.summary}</p>
        </div>
        <div>
          <h4 class="text-xs font-extrabold uppercase tracking-wider text-[#5B6B28] mb-1">Scientific Hypothesis</h4>
          <p>${inv.hypothesis}</p>
        </div>
        <div class="pt-3 border-t border-[#4A3B24]/30 flex flex-wrap items-center justify-between gap-2">
          <a href="${inv.url}" target="_blank" rel="noopener noreferrer" class="btn-pill-action px-4 py-2 text-xs">
            View Official NASA PSI Record (${inv.id}) ↗
          </a>
          <button onclick="closeModal(); switchView('compare'); document.getElementById('compSelectA').value='${inv.id}'; renderComparisonMatrix();" class="btn-pill-action px-4 py-2 text-xs">
            Compare in Matrix →
          </button>
        </div>
      `;
      document.getElementById('appModal').classList.remove('hidden');
    }

    function openInfoModal(type) {
      document.getElementById('modalBadge').textContent = 'ABOUT PYRONULL';
      document.getElementById('modalTitle').textContent = 'PyroNull — NASA Physical Sciences Informatics Archive';
      document.getElementById('modalContent').innerHTML = `
        <p><strong>PyroNull</strong> transforms 26 NASA microgravity combustion investigations from <a href="https://psi.nasa.gov/physci/repo" target="_blank" class="underline font-bold">psi.nasa.gov</a> into an interactive exploration archive.</p>
      `;
      document.getElementById('appModal').classList.remove('hidden');
    }

    function closeModal() {
      document.getElementById('appModal').classList.add('hidden');
    }

    // ============================================================================
    // 4GB RAM THREE.JS CLOSE-UP STRAIGHT MATCHSTICK + INFERNADO SPREADING VORTEX FIRE
    // ============================================================================
    let matchScene = null;
    let matchCamera = null;
    let matchRenderer = null;
    let matchGroup = null;
    let stickMesh = null;
    let headMesh = null;
    let vortexRibbons = [];
    let coreGlowSprite = null;
    let emberParticles = null;
    let matchAnimId = null;
    let welcomeActive = true;

    let targetMatchX = 0.0;
    let currentMatchX = 0.0;
    let flameSpreadProgress = 0.0; // 0.0 at match head (y = +1.05) -> 1.0 spreading down stick (y = -0.75)
    let welcomeTimers = [];

    function clearWelcomeTimers() {
      welcomeTimers.forEach(t => clearTimeout(t));
      welcomeTimers = [];
    }

    // Procedural Infernado flame streak canvas texture (intense white-hot core -> yellow-gold -> orange-red)
    function createInfernadoStreakTexture() {
      const c = document.createElement('canvas');
      c.width = 64;
      c.height = 128;
      const ctx = c.getContext('2d');
      const g = ctx.createLinearGradient(32, 128, 32, 0);
      g.addColorStop(0.0, 'rgba(255, 255, 245, 0.0)');
      g.addColorStop(0.14, 'rgba(255, 252, 220, 0.98)');
      g.addColorStop(0.38, 'rgba(255, 200, 50, 0.92)');
      g.addColorStop(0.68, 'rgba(255, 102, 10, 0.65)');
      g.addColorStop(0.92, 'rgba(185, 28, 10, 0.18)');
      g.addColorStop(1.0, 'rgba(0, 0, 0, 0.0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 64, 128);

      // Mask horizontal edges smoothly so ribbons have soft glowing edges
      const mask = ctx.createLinearGradient(0, 0, 64, 0);
      mask.addColorStop(0.0, 'rgba(0,0,0,1)');
      mask.addColorStop(0.22, 'rgba(0,0,0,0)');
      mask.addColorStop(0.78, 'rgba(0,0,0,0)');
      mask.addColorStop(1.0, 'rgba(0,0,0,1)');
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = mask;
      ctx.fillRect(0, 0, 64, 128);
      return new THREE.CanvasTexture(c);
    }

    function createCoreHaloTexture() {
      const c = document.createElement('canvas');
      c.width = 64;
      c.height = 64;
      const ctx = c.getContext('2d');
      const g = ctx.createRadialGradient(32, 32, 1, 32, 32, 32);
      g.addColorStop(0.0, 'rgba(255, 255, 240, 1)');
      g.addColorStop(0.28, 'rgba(255, 195, 55, 0.85)');
      g.addColorStop(0.65, 'rgba(234, 88, 12, 0.3)');
      g.addColorStop(1.0, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(c);
    }

    function initMatchstick3D() {
      const canvas = document.getElementById('matchstickCanvas');
      if (!canvas || typeof THREE === 'undefined') return;

      matchScene = new THREE.Scene();
      const w = window.innerWidth || 1024;
      const h = window.innerHeight || 768;
      // Macro close-up camera framing the straight matchstick & spreading fire
      matchCamera = new THREE.PerspectiveCamera(34, w / h, 0.1, 40);
      matchCamera.position.set(0, 0.25, 4.15);

      matchRenderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'low-power'
      });
      matchRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
      matchRenderer.setSize(w, h);

      const ambient = new THREE.AmbientLight(0xffe4b5, 0.65);
      matchScene.add(ambient);
      const fireLight = new THREE.PointLight(0xff8c1a, 2.8, 10);
      fireLight.position.set(0.2, 0.9, 1.4);
      matchScene.add(fireLight);

      matchGroup = new THREE.Group();
      // Perfectly straight vertical matchstick positioned near the bottom of the screen
      matchGroup.rotation.z = 0.0;
      matchGroup.position.y = -1.78;
      matchScene.add(matchGroup);

      // 1. Macro Close-Up Straight Square-Chamfered Wooden Matchstick with dynamic vertex charring
      const stickGeo = new THREE.BoxGeometry(0.21, 3.2, 0.21, 2, 42, 2);
      const sPos = stickGeo.attributes.position;
      const sColors = new Float32Array(sPos.count * 3);
      for (let i = 0; i < sPos.count; i++) {
        // Warm natural aspen wood color (#E0B16CB)
        sColors[i * 3] = 0.88;
        sColors[i * 3 + 1] = 0.68;
        sColors[i * 3 + 2] = 0.42;
      }
      stickGeo.setAttribute('color', new THREE.BufferAttribute(sColors, 3));
      const stickMat = new THREE.MeshLambertMaterial({ vertexColors: true });
      stickMesh = new THREE.Mesh(stickGeo, stickMat);
      stickMesh.position.y = -0.55;
      matchGroup.add(stickMesh);

      // 2. Realistic Porous Chemical Match Head (Top of the straight stick at y = +1.05)
      const headGeo = new THREE.SphereGeometry(0.205, 20, 18);
      headGeo.scale(0.95, 1.38, 0.95);
      // Slight cellular surface irregularity on the sulfur head
      const hPos = headGeo.attributes.position;
      for (let i = 0; i < hPos.count; i++) {
        const vx = hPos.getX(i), vy = hPos.getY(i), vz = hPos.getZ(i);
        const bump = 1.0 + 0.045 * Math.sin(vx * 28) * Math.cos(vy * 24);
        hPos.setXYZ(i, vx * bump, vy * bump, vz * bump);
      }
      headGeo.computeVertexNormals();
      const headMat = new THREE.MeshStandardMaterial({
        color: 0x26120b,
        emissive: 0xff4500,
        emissiveIntensity: 0.9,
        roughness: 0.82
      });
      headMesh = new THREE.Mesh(headGeo, headMat);
      headMesh.position.y = 1.05;
      matchGroup.add(headMesh);

      // 3. Sketchfab "Infernado" Style Swirling Ribbon Vortex Fire (14 helical flame ribbons that spread & swirl)
      const streakTex = createInfernadoStreakTexture();
      vortexRibbons = [];
      const ribbonCount = 14;
      for (let r = 0; r < ribbonCount; r++) {
        const ribGeo = new THREE.PlaneGeometry(0.32, 1.55, 1, 20);
        const ribMat = new THREE.MeshBasicMaterial({
          map: streakTex,
          transparent: true,
          opacity: 0.88,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          side: THREE.DoubleSide
        });
        const ribMesh = new THREE.Mesh(ribGeo, ribMat);
        ribMesh.userData = {
          angleOffset: (r / ribbonCount) * Math.PI * 2,
          speed: 3.2 + (r % 3) * 0.65,
          radiusScale: 0.14 + (r % 4) * 0.055,
          heightScale: 0.9 + (r % 3) * 0.22
        };
        matchGroup.add(ribMesh);
        vortexRibbons.push(ribMesh);
      }

      // 4. White-Hot Core Halo Sprite (Moves along the active flame front)
      const haloMat = new THREE.SpriteMaterial({
        map: createCoreHaloTexture(),
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      coreGlowSprite = new THREE.Sprite(haloMat);
      coreGlowSprite.scale.set(1.65, 2.1, 1);
      coreGlowSprite.position.y = 1.15;
      matchGroup.add(coreGlowSprite);

      // 5. Swirling Infernado Sparks / Ember Vortex Particles (65 glowing sparks)
      const sparkCount = 65;
      const sparkGeo = new THREE.BufferGeometry();
      const sparkPos = new Float32Array(sparkCount * 3);
      const sparkSeeds = new Float32Array(sparkCount * 3); // [angle, heightProgress, radius]
      for (let i = 0; i < sparkCount; i++) {
        const ang = Math.random() * Math.PI * 2;
        const hProg = Math.random();
        const rad = 0.08 + Math.random() * 0.48;
        sparkSeeds[i * 3] = ang;
        sparkSeeds[i * 3 + 1] = hProg;
        sparkSeeds[i * 3 + 2] = rad;
        sparkPos[i * 3] = Math.cos(ang) * rad;
        sparkPos[i * 3 + 1] = 1.0 + hProg * 1.6;
        sparkPos[i * 3 + 2] = Math.sin(ang) * rad;
      }
      sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPos, 3));
      sparkGeo.userData.seeds = sparkSeeds;
      const sparkMat = new THREE.PointsMaterial({
        map: createCoreHaloTexture(),
        color: 0xffd166,
        size: 0.11,
        transparent: true,
        opacity: 0.92,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      emberParticles = new THREE.Points(sparkGeo, sparkMat);
      matchGroup.add(emberParticles);

      window.addEventListener('resize', onWelcomeResize);
      animateMatchstick3D();
    }

    function onWelcomeResize() {
      if (!matchRenderer || !matchCamera) return;
      const w = window.innerWidth || 1024;
      const h = window.innerHeight || 768;
      matchCamera.aspect = w / h;
      matchCamera.updateProjectionMatrix();
      matchRenderer.setSize(w, h);
    }

    function animateMatchstick3D() {
      if (!welcomeActive) return;
      matchAnimId = requestAnimationFrame(animateMatchstick3D);

      const t = performance.now() * 0.001;

      // Smooth horizontal glide (Center -> Left -> Exit Left)
      currentMatchX += (targetMatchX - currentMatchX) * 0.065;
      if (matchGroup) {
        matchGroup.position.x = currentMatchX;
      }

      // Active Flame Spread at the Bottom Matchstick Head:
      // Keeps the burning head anchored near the bottom edge while the fire spreads and intensifies upward
      flameSpreadProgress = Math.min(1.0, flameSpreadProgress + 0.0016);
      const burnFrontY = 1.05 - flameSpreadProgress * 0.42; // Stays near bottom of viewport while charring upper tip

      // Update dynamic wood charring & glowing ember ring on the matchstick shaft
      if (stickMesh) {
        const sPos = stickMesh.geometry.attributes.position;
        const sCol = stickMesh.geometry.attributes.color;
        for (let i = 0; i < sPos.count; i++) {
          const worldY = sPos.getY(i) + stickMesh.position.y;
          if (worldY > burnFrontY + 0.12) {
            // Charred black carbon above the flame front
            sCol.setXYZ(i, 0.08, 0.06, 0.05);
          } else if (worldY > burnFrontY - 0.16) {
            // Glowing orange-red pyrolysis front where fire is actively spreading
            const glow = 0.75 + 0.25 * Math.sin(t * 14 + i);
            sCol.setXYZ(i, 0.98 * glow, 0.36 * glow, 0.06);
          } else {
            // Unburned natural wood below the flame front
            sCol.setXYZ(i, 0.88, 0.68, 0.42);
          }
        }
        sCol.needsUpdate = true;
      }

      // Update Infernado Swirling Flame Ribbons anchored along the spreading burn zone
      const spreadScale = 1.0 + flameSpreadProgress * 0.45;
      for (let r = 0; r < vortexRibbons.length; r++) {
        const rib = vortexRibbons[r];
        const ud = rib.userData;
        const pos = rib.geometry.attributes.position;
        const baseY = burnFrontY + (r / vortexRibbons.length) * (0.55 * flameSpreadProgress);

        for (let i = 0; i < pos.count; i++) {
          const col = i % 2; // 0 = left edge of ribbon, 1 = right edge
          const row = Math.floor(i / 2);
          const vNorm = row / 20; // 0 at bottom of flame, 1 at top of vortex funnel

          // Realistic 1g Earth buoyant flame silhouette (fat, curvy bulbous belly at the bottom, tapering thin & wispy at the top)
          const bellyCurve = Math.pow(Math.sin(Math.min(1, vNorm * 1.45) * Math.PI * 0.5), 0.72) * Math.pow(1 - vNorm, 1.48) * 1.85 + (1 - vNorm) * 0.28;
          const funnelRadius = (0.03 + bellyCurve * ud.radiusScale * 2.35) * spreadScale;
          const swirlAngle = ud.angleOffset + vNorm * 3.8 - t * ud.speed;
          // Curvy S-wave buoyant lick as the flame rises and narrows
          const waveSwayX = Math.sin(vNorm * 5.2 - t * 4.8 + ud.angleOffset * 0.5) * 0.14 * Math.pow(vNorm, 1.25);
          const waveSwayZ = Math.cos(vNorm * 4.6 - t * 4.2 + ud.angleOffset * 0.5) * 0.10 * Math.pow(vNorm, 1.25);
          // Ribbon width is fat across the lower belly and pinches to a fine tip at the top
          const ribbonHalfWidth = (0.22 * Math.pow(1 - vNorm, 1.2) + 0.012) * spreadScale;
          const sideSign = col === 0 ? -1 : 1;

          const cx = Math.cos(swirlAngle) * funnelRadius + waveSwayX;
          const cz = Math.sin(swirlAngle) * funnelRadius + waveSwayZ;
          const perpX = -Math.sin(swirlAngle) * ribbonHalfWidth * sideSign;
          const perpZ = Math.cos(swirlAngle) * ribbonHalfWidth * sideSign;
          const vy = baseY + vNorm * (2.25 * ud.heightScale * spreadScale);

          pos.setXYZ(i, cx + perpX, vy, cz + perpZ);
        }
        pos.needsUpdate = true;
      }

      // Move white-hot core glow with the fat lower belly of the flame
      if (coreGlowSprite) {
        coreGlowSprite.position.y = burnFrontY + 0.34;
        const pulse = (1.75 + flameSpreadProgress * 0.42) + Math.sin(t * 12) * 0.08;
        coreGlowSprite.scale.set(pulse * 1.18, pulse * 1.05, 1);
      }

      // Swirl Ember Sparks hugging the fat lower belly and converging into the thin upper plume tip
      if (emberParticles) {
        const ePos = emberParticles.geometry.attributes.position;
        const seeds = emberParticles.geometry.userData.seeds;
        for (let i = 0; i < ePos.count; i++) {
          let ang = seeds[i * 3] + t * 3.8;
          let hProg = seeds[i * 3 + 1] + 0.012;
          if (hProg > 1.0) hProg -= 1.0;
          seeds[i * 3 + 1] = hProg;

          const baseRad = seeds[i * 3 + 2];
          const emberBelly = Math.sin(Math.min(1, hProg * 1.35) * Math.PI * 0.5) * Math.pow(1 - hProg, 1.25) * 1.6 + 0.06;
          const funnelR = (emberBelly * baseRad * 1.35) * spreadScale;
          const tipSway = Math.sin(hProg * 5.0 - t * 4.8) * 0.12 * hProg;
          ePos.setX(i, Math.cos(ang) * funnelR + tipSway);
          ePos.setY(i, burnFrontY + hProg * (2.55 * spreadScale));
          ePos.setZ(i, Math.sin(ang) * funnelR);
        }
        ePos.needsUpdate = true;
      }

      if (matchRenderer && matchScene && matchCamera) {
        matchRenderer.render(matchScene, matchCamera);
      }
    }

    // ============================================================================
    // 3-STAGE CHOREOGRAPHY CONTROLLER
    // ============================================================================
    function startWelcomeChoreography() {
      clearWelcomeTimers();
      welcomeActive = true;
      flameSpreadProgress = 0.0;

      const overlay = document.getElementById('welcomeOverlay');
      const titleBlock = document.getElementById('welcomeTitleBlock');
      const pointersPanel = document.getElementById('welcomePointersPanel');
      const bottomBar = document.getElementById('welcomeBottomBar');
      const stageInd = document.getElementById('welcomeStageIndicator');
      const shell = document.getElementById('appShellWrapper');

      if (overlay) overlay.classList.remove('welcome-hidden');
      if (shell) {
        shell.classList.add('shell-pre-enter');
        shell.classList.remove('shell-active');
      }

      targetMatchX = 0.0;
      if (titleBlock) titleBlock.classList.remove('zoom-past-face');
      if (pointersPanel) {
        pointersPanel.classList.remove('pointers-visible', 'pointers-exit-right');
        pointersPanel.classList.add('pointers-hidden');
      }
      document.querySelectorAll('#welcomePointersList .pointer-item').forEach(el => {
        el.classList.remove('pointer-in');
      });
      if (bottomBar) {
        bottomBar.classList.remove('bottom-visible');
        bottomBar.classList.add('bottom-hidden');
      }
      if (stageInd) stageInd.textContent = 'Stage 1 • Matchstick Ignition & Spread';

      if (!matchRenderer) {
        initMatchstick3D();
      } else {
        cancelAnimationFrame(matchAnimId);
        animateMatchstick3D();
      }

      // Stage 1 -> After 1.6s, zoom heading straight toward viewer's face
      welcomeTimers.push(setTimeout(() => {
        if (titleBlock) titleBlock.classList.add('zoom-past-face');
        if (stageInd) stageInd.textContent = 'Stage 1 • Spreading Vortex Flame';
      }, 1600));

      // Stage 2 -> After 2.8s, glide matchstick to the LEFT & fade in pure floating typography on the RIGHT
      welcomeTimers.push(setTimeout(() => {
        const isDesktop = (window.innerWidth || 1024) >= 1024;
        targetMatchX = isDesktop ? -1.42 : 0.0;
        if (stageInd) stageInd.textContent = 'Stage 2 • Mission Overview';

        if (pointersPanel) {
          pointersPanel.classList.remove('pointers-hidden', 'pointers-exit-right');
          pointersPanel.classList.add('pointers-visible');
        }

        const items = document.querySelectorAll('#welcomePointersList .pointer-item');
        items.forEach((item, idx) => {
          welcomeTimers.push(setTimeout(() => {
            item.classList.add('pointer-in');
          }, idx * 200));
        });

        welcomeTimers.push(setTimeout(() => {
          if (bottomBar) {
            bottomBar.classList.remove('bottom-hidden');
            bottomBar.classList.add('bottom-visible');
          }
        }, items.length * 200 + 150));
      }, 2800));
    }

    function replayWelcomeSequence() {
      startWelcomeChoreography();
    }

    function openWelcomeFromDashboard() {
      switchView('overview');
      startWelcomeChoreography();
    }

    function triggerStage3CurtainSplit(skipFast = false) {
      clearWelcomeTimers();
      const overlay = document.getElementById('welcomeOverlay');
      const titleBlock = document.getElementById('welcomeTitleBlock');
      const pointersPanel = document.getElementById('welcomePointersPanel');
      const bottomBar = document.getElementById('welcomeBottomBar');
      const stageInd = document.getElementById('welcomeStageIndicator');
      const shell = document.getElementById('appShellWrapper');

      if (stageInd) stageInd.textContent = 'Stage 3 • Opening Overview Archive';
      if (titleBlock) titleBlock.classList.add('zoom-past-face');

      targetMatchX = -6.5;
      if (pointersPanel) {
        pointersPanel.classList.remove('pointers-visible');
        pointersPanel.classList.add('pointers-exit-right');
      }
      if (bottomBar) {
        bottomBar.classList.remove('bottom-visible');
        bottomBar.classList.add('bottom-hidden');
      }

      const seqBlockIds = [
        'seq-block-hero',
        'seq-block-mission',
        'seq-block-kpis',
        'seq-block-domains',
        'seq-block-recent',
        'seq-block-ai'
      ];
      if (!skipFast) {
        seqBlockIds.forEach(id => {
          const el = document.getElementById(id);
          if (el) el.classList.add('seq-waiting');
        });
      }

      const splitDelay = skipFast ? 150 : 600;
      setTimeout(() => {
        if (overlay) overlay.classList.add('welcome-hidden');
        if (shell) {
          shell.classList.remove('shell-pre-enter');
          shell.classList.add('shell-active');
        }
        setTimeout(() => {
          welcomeActive = false;
          if (matchAnimId) cancelAnimationFrame(matchAnimId);
        }, 650);

        if (skipFast) {
          seqBlockIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.remove('seq-waiting', 'seq-typing-active');
          });
        } else {
          runSequentialBlockBuildWithTyping(seqBlockIds);
        }
      }, splitDelay);
    }

    function typeTextElement(el, speedMs = 12) {
      return new Promise(resolve => {
        if (!el) return resolve();
        const fullText = el.getAttribute('data-fulltext') || el.textContent.trim();
        el.setAttribute('data-fulltext', fullText);
        el.textContent = '';
        el.classList.add('typewriter-cursor');
        let idx = 0;
        const step = Math.max(1, Math.ceil(fullText.length / 26));
        const timer = setInterval(() => {
          idx += step;
          if (idx >= fullText.length) {
            el.textContent = fullText;
            el.classList.remove('typewriter-cursor');
            clearInterval(timer);
            resolve();
          } else {
            el.textContent = fullText.slice(0, idx);
          }
        }, speedMs);
      });
    }

    async function runSequentialBlockBuildWithTyping(blockIds) {
      for (let i = 0; i < blockIds.length; i++) {
        const block = document.getElementById(blockIds[i]);
        if (!block) continue;
        block.classList.remove('seq-waiting');
        block.classList.add('seq-typing-active');

        const heading = block.querySelector('h1, h2, h3');
        const sub = block.querySelector('p');
        if (heading && heading.children.length === 0) {
          await typeTextElement(heading, 11);
        }
        if (sub && sub.children.length === 0) {
          await typeTextElement(sub, 9);
        } else {
          await new Promise(r => setTimeout(r, 180));
        }
        block.classList.remove('seq-typing-active');
      }
    }

    window.addEventListener('DOMContentLoaded', () => {
      initApp();
      startWelcomeChoreography();
    });
