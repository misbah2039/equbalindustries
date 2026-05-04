/** Blog — used on home, /blog index, and /blog/:slug article pages */
export const blogPosts = [
  {
    id: "workshop-winter-checklist",
    title: "Winter vehicle checklist for fleets",
    excerpt:
      "Battery, coolant, tyres, and lights — what we inspect before peak season so downtime stays low.",
    date: "2026-01-18",
    readTime: "4 min read",
    imagePath: "/carworkshop.jpg",
    tag: "Car services",
    paragraphs: [
      "Cold mornings stress batteries and thick oil — we start every winter prep with a load test, terminal clean, and charging system check so your first start of the day is predictable.",
      "Coolant strength, belt wear, and tyre pressure change with temperature swings. We document baseline readings so fleet managers can compare across depots and plan replacements before failures.",
      "Lights and wipers are easy to ignore until visibility drops. A quick alignment check on headlamps and fresh blades often prevents the small issues that turn into roadside delays.",
    ],
  },
  {
    id: "industrial-safety-sites",
    title: "On-site safety norms we follow every day",
    excerpt:
      "How Equbal aligns field teams with PPE, permits, and clear communication on industrial projects.",
    date: "2025-12-06",
    readTime: "5 min read",
    imagePath: "/onsite.jpeg",
    tag: "Industry",
    paragraphs: [
      "Industrial sites reward consistency: toolbox talks, visible permits, and a single point of contact for the client’s safety officer reduce friction and keep work moving.",
      "We standardise PPE checks at shift start and use simple checklists tied to the job hazard analysis — nothing fancy, just repeatable habits that new team members can follow on day one.",
      "When scopes change, we pause for a quick re-brief instead of improvising in silence. Most incidents we have seen trace back to assumptions, not lack of equipment.",
    ],
  },
  {
    id: "events-that-deliver",
    title: "Planning seminars that actually engage audiences",
    excerpt:
      "From venue flow to AV checks — lessons from our education and event services team.",
    date: "2025-11-22",
    readTime: "3 min read",
    imagePath: "/educationandeventservices.jpg",
    tag: "Events",
    paragraphs: [
      "Engagement starts before the keynote: registration flow, seating sightlines, and breakout room acoustics matter as much as the slide deck.",
      "We run AV dry-runs with the same cables and laptops that will be used live — adapters fail more often than projectors, and we plan spares accordingly.",
      "A realistic run-of-show buffer (not padding every transition to zero) keeps organisers calm and gives speakers room to breathe without dragging the day.",
    ],
  },
];

export function getBlogPostBySlug(slug) {
  return blogPosts.find((p) => p.id === slug) ?? null;
}
