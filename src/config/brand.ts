// Swap these per prospect. Single source of truth for the entire landing page.
export const brand = {
  name: "Golden Moon Apartment",
  shortName: "Golden Moon",
  location: "Asaba, Delta State, Nigeria",
  tagline: "Premium Luxury Directly Opposite Asaba Airport",
  heroHeadline: "Experience Premium Luxury Directly Opposite Asaba Airport",
  heroSub:
    "A stunning 5-bedroom fully detached luxury shortlet duplex featuring a private pool, rooftop bar, and 24/7 uninterrupted power.",
  phone: "+234 816 703 5010",
  whatsapp: "+2348167035010", // digits only for wa.me
  email: "bookings@goldenmoonapartment.com",
  address: "No. 4 Chukwuani Samuel Okechukwu Close, Asaba, Delta State",
  mapsQuery: "No. 4 Chukwuani Samuel Okechukwu Close, Asaba, Delta State",
  socials: {
    instagram: "https://instagram.com/goldenmoonapartment",
    twitter: "https://twitter.com/",
    facebook: "https://facebook.com/",
  },
  nearby: [
    { name: "Asaba International Airport", distance: "3 min drive / directly opposite" },
    { name: "Shoprite Asaba Mall", distance: "5 min drive" },
    { name: "Secure Gated Close", distance: "On-site" },
  ],
};

export type Brand = typeof brand;