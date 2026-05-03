/** Workshop & field equipment — searchable on /equipment */
export const equipmentCategories = [
  "All",
  "Automotive",
  "Diagnostics",
  "Lifting & bay",
  "Field & industrial",
];

/** Root-relative paths — files in `public/` */
const imgs = [
  "/carworkshop.jpg",
  "/carworkshop_1.jpg",
  "/carworkshop_2.jpg",
  "/engineeringandfieldservices.jpg",
  "/educationandeventservices.jpg",
];

const baseItems = [
  {
    id: "two-post-lift",
    name: "Two-post hydraulic lift",
    category: "Lifting & bay",
    description:
      "Heavy-duty two-post lift for cars and light commercial vehicles — routine service and underbody access.",
    imagePath: imgs[0],
  },
  {
    id: "four-wheel-aligner",
    name: "Wheel alignment system",
    category: "Automotive",
    description:
      "Precision alignment setup for steering geometry, tyre life, and stable handling after repairs.",
    imagePath: imgs[1],
  },
  {
    id: "diagnostic-scanner",
    name: "OBD / ECU diagnostic scanner",
    category: "Diagnostics",
    description:
      "Read fault codes, live data, and module resets for modern fuel and diesel vehicles.",
    imagePath: imgs[3],
  },
  {
    id: "air-compressor",
    name: "Industrial air compressor",
    category: "Field & industrial",
    description:
      "High-capacity compressor for pneumatic tools and bay operations across shifts.",
    imagePath: imgs[2],
  },
  {
    id: "paint-booth",
    name: "Spray & prep bay",
    category: "Automotive",
    description:
      "Controlled environment for paint prep, finishing, and detailing work.",
    imagePath: imgs[2],
  },
  {
    id: "engine-crane",
    name: "Engine hoist / crane",
    category: "Lifting & bay",
    description:
      "Safe removal and installation support for engine and transmission jobs.",
    imagePath: imgs[0],
  },
  {
    id: "welding-set",
    name: "MIG welding station",
    category: "Field & industrial",
    description:
      "Fabrication and repair support for structural and exhaust-related work.",
    imagePath: imgs[4],
  },
  {
    id: "battery-tester",
    name: "Battery load tester",
    category: "Diagnostics",
    description:
      "Quick state-of-health checks for starting systems and charging circuits.",
    imagePath: imgs[3],
  },
  {
    id: "tyre-changer",
    name: "Tyre changer & balancer",
    category: "Automotive",
    description:
      "Mount, demount, and balance passenger and light truck tyres efficiently.",
    imagePath: imgs[1],
  },
  {
    id: "generator-set",
    name: "Portable generator (site)",
    category: "Field & industrial",
    description:
      "Backup power for remote sites and event support when mains are unavailable.",
    imagePath: imgs[4],
  },
];

const extraNames = [
  "Hydraulic jack (trolley)",
  "Brake lathe (on-car)",
  "AC recovery & recharge unit",
  "Transmission jack",
  "Parts washer (solvent)",
  "Torque wrench set (calibrated)",
  "Endoscope inspection camera",
  "Smoke machine (EVAP leak)",
  "Oscilloscope (automotive)",
  "Fuel pressure test kit",
  "Coolant pressure tester",
  "Vacuum brake bleeder",
  "Spring compressor set",
  "Ball joint press",
  "Puller set (bearing)",
  "Impact wrench (1/2\")",
  "Angle grinder (field kit)",
  "Cut-off saw (metal)",
  "Scissor lift (mid-rise)",
  "Alignment turn plates",
  "Headlamp aim tester",
  "Exhaust gas analyser",
  "Diesel smoke meter",
  "Charging cart (tool EV)",
  "LED bay lighting pack",
  "Creeper seat & tool tray",
  "Floor crane (folding)",
  "Pit jack (where applicable)",
  "Wheel weight assortment",
  "Tyre inflator with gauge",
  "Hand tools (master set)",
  "Feeler gauge & micrometer",
  "Dial indicator set",
  "Compression tester kit",
  "Leak-down tester",
  "Stethoscope (mechanic)",
  "Under-hood work light",
  "Cabin filter tool set",
  "Serpentine belt tool",
  "Hub puller adapter kit",
  "Slide hammer",
  "Pickle fork (ball joint)",
  "Rust penetrant station",
  "Safety cones & signage",
  "Fire extinguisher (bay)",
  "First-aid kit (site)",
];

const extraCats = [
  "Lifting & bay",
  "Automotive",
  "Diagnostics",
  "Field & industrial",
];

const generatedExtras = extraNames.map((name, i) => ({
  id: `eq-gen-${i}`,
  name,
  category: extraCats[i % extraCats.length],
  description: `Standard workshop asset used for ${name.toLowerCase()} during service and field jobs.`,
  imagePath: imgs[i % imgs.length],
}));

export const equipmentItems = [...baseItems, ...generatedExtras];
