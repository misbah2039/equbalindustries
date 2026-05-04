/** Workshop & field equipment — searchable on /equipment */
export const equipmentCategories = ["All", "Washing", "Denting And Painting"];

/** Root-relative paths — files in `public/` */
const imgs = [
  "/companylogomain.png",
  "/companylogomain.png",
  "/companylogomain.png",
  "/companylogomain.png",
  "/companylogomain.png",
];

const washingItems = [
  "High Pressure Washer",
  "Vacuum Cleaner",
  "Washing Scissor Lift",
  "Polisher",
  "Hose Pipe",
  "Nut Cleaner",
  "Domestic Portable Car Wash",
  "Under Body Lens Gun",
  "Dual Side Micro Fibre Gloves",
  "Detailing Brush Set",
  "Foam Bottle",
  "Polish Pad",
  "Polish Applicator",
  "Tyre Polish Brush",
  "Ceramic Applicator",
];

const dentingPaintingItems = [
  "Air Compressor 5HP",
  "2 Post Lift Base Metal",
  "Car Tools Trolley",
  "Paint Gun And Cup Gun",
  "Digital Dent Cooler",
  "Mig Welding",
  "Paint Gun Pipe",
  "Battery Charger",
  "Welding Cylinder",
  "Grinder",
  "Mask For Worker Ppe From Our Side",
  "Extra Tools For Tyre Removing Work And Jack",
  "1 Extra Jack For Small Work",
  "Trolley For Material Handling",
  "Rotatory Pad",
];

const buildRows = (names, category, seed) =>
  names.map((name, i) => ({
    id: `${seed}-${i + 1}`,
    name,
    category,
    description: `${name} used in ${category.toLowerCase()} workflow and workshop delivery.`,
    imagePath: imgs[i % imgs.length],
  }));

export const equipmentItems = [
  ...buildRows(washingItems, "Washing", "wash"),
  ...buildRows(dentingPaintingItems, "Denting And Painting", "dp"),
];
