// Swap these per prospect. Single source of truth for the entire landing page.
export const brand = {
  name: "Aurelia Residences",
  shortName: "Aurelia",
  location: "Lekki, Lagos",
  tagline: "Quiet luxury, served daily.",
  heroHeadline: "Live softly in the heart of Lagos.",
  heroSub:
    "A collection of serviced apartments designed for the kind of stay you'd rather not end. Hand-finished interiors, 24-hour concierge, and a private rooftop above the city.",
  phone: "+234 800 000 0000",
  whatsapp: "+2348000000000", // digits only for wa.me
  email: "stay@aureliaresidences.ng",
  address: "12 Admiralty Way, Lekki Phase 1, Lagos",
  mapsQuery: "Lekki Phase 1, Lagos, Nigeria",
  socials: {
    instagram: "https://instagram.com/",
    twitter: "https://twitter.com/",
    facebook: "https://facebook.com/",
  },
  nearby: [
    { name: "Murtala Muhammed Int'l Airport", distance: "32 min" },
    { name: "Lekki Conservation Centre", distance: "8 min" },
    { name: "The Palms Shopping Mall", distance: "12 min" },
    { name: "Victoria Island business district", distance: "18 min" },
    { name: "Tarkwa Bay Beach", distance: "25 min" },
  ],
};

export type Brand = typeof brand;
