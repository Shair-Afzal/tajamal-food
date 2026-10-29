// ===== SHOP CONFIG =====
export const SHOP = {
  name: "Tajamal Fried Chicken",
  tagline: "Taste Jo Deewana Karde",
  address: "Ghoray Shah Road, Opposite PSO Petrol Pump, Lahore",
  phones: ["0314-4308301", "0322-4068031"],
  whatsappNumber: "923144308301", // country code ke saath, + aur 0 ke baghair
  currency: "Rs.",
  deliveryNote: "Free Home Delivery",
  social: "Tajammal Fried Chicken (Facebook / Instagram / TikTok)",
};

// CATEGORY ORDER
export const CATEGORIES = [
  "Deals",
  "Burgers",
  "Pizzas",
  "Shawarma",
  "Parathas",
  "Wraps",
  "Wings & Nuggets",
  "Sandwiches",
  "Loaded Fries",
  "Simple Fries",
  "Dips",
];

// App config mapping
export const CONFIG = {
  shopName: SHOP.name,
  shortName: "TFC",
  tagline: SHOP.tagline,
  phone: SHOP.phones[0],
  phoneAlt: SHOP.phones[1],
  whatsappNumber: SHOP.whatsappNumber,
  address: SHOP.address,
  city: "Lahore",
  googleMapsUrl: "https://maps.google.com/?q=Ghoray+Shah+Road+Opposite+PSO+Petrol+Pump+Lahore",
  currency: SHOP.currency,
  currencyCode: "PKR",
  deliveryFee: 100,
  freeDeliveryThreshold: 1500,
  openingHours: {
    days: "Monday - Sunday",
    time: "1:00 PM - 3:00 AM",
    status: "Open Now"
  },
  socialLinks: {
    facebook: "https://facebook.com/tajammalfriedchicken",
    instagram: "https://instagram.com/tajammalfriedchicken",
    tiktok: "https://tiktok.com/@tajammalfriedchicken"
  },
  features: [
    { title: "100% Fresh Chicken", desc: "Zabiha halal, fresh daily cut marinated in secret TFC spices" },
    { title: "Super Crispy & Hot", desc: "Fried and baked to order, sealed hot and delivered fast" },
    { title: "Crazy Good Deals", desc: "Unbeatable value family & combo deals everyday" },
    { title: "Free Home Delivery", desc: "Doorstep delivery in Lahore with instant WhatsApp order slip" }
  ]
};
