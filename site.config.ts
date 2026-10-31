import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Chef Mavra's Cuisine",
  tagline: "Halal homemade food, party catering, and healthy meal prep in Milton, Ontario.",
  category: "Halal catering and meal prep",
  schemaType: "FoodEstablishment",
  area: "Milton, ON",
  siteUrl: "https://chef-mavras-cuisine.vercel.app",

  theme: {
    preset: "catering-events",
    colors: { accent: "#6b7a5e" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Halal food caterer in Milton, ON",
    headline: "Homemade halal food, made with passion",
    subhead: "Chicken mandi, biryani, roasts, party trays, and healthy meal prep, freshly prepared with premium halal ingredients. Send us a message to book your order.",
    images: [
      { src: "/images/post-4.jpg", alt: "Chicken mandi trays by Chef Mavra's Cuisine" },
      { src: "/images/post-5.jpg", alt: "Beef biryani tray" },
      { src: "/images/post-3.jpg", alt: "Mutton leg roast" },
    ],
    secondaryCta: { label: "See the food", href: "#gallery" },
  },

  highlights: ["Halal ingredients", "Homemade and hygienic", "Party catering", "Healthy meal prep"],

  about: {
    title: "Cooking is our passion",
    body: [
      "Chef Mavra's Cuisine is a halal food caterer in Milton, Ontario, run by a chef by profession with an extreme passion for cooking.",
      "Everything is freshly prepared with premium halal ingredients, authentic flavours, and homemade quality you can trust, from family trays to lighter high protein meals.",
    ],
    image: { src: "/images/post-1.jpg", alt: "Chicken mandi with rice" },
  },

  menu: {
    title: "Popular dishes",
    intro: "A few favourites from our kitchen. Send us a message for availability and a quote.",
    variant: "cards",
    showPrices: false,
    groups: [
      {
        title: "Mains and trays",
        items: [
          { name: "Chicken Mandi", description: "Full or quarter.", image: { src: "/images/post-7.jpg", alt: "Chicken mandi quarter" }, href: "https://www.instagram.com/p/DeyNQoahauR/" },
          { name: "Beef Biryani", image: { src: "/images/post-5.jpg", alt: "Beef biryani" }, href: "https://www.instagram.com/p/De0WwCbtqeN/" },
          { name: "Fish Biryani", image: { src: "/images/post-6.jpg", alt: "Fish biryani" }, href: "https://www.instagram.com/p/DeyNdVlhCX6/" },
          { name: "Mutton Leg Roast", image: { src: "/images/post-3.jpg", alt: "Mutton leg roast" }, href: "https://www.instagram.com/p/De-NaQBB20L/" },
          { name: "Egg and Veg Fried Rice", image: { src: "/images/post-8.jpg", alt: "Egg and veg fried rice" }, href: "https://www.instagram.com/p/DeyM0mAhSCQ/" },
          { name: "Chicken Club Sandwich", image: { src: "/images/post-2.jpg", alt: "Chicken club sandwiches" }, href: "https://www.instagram.com/p/DfGMfwEhSAr/" },
        ],
      },
      {
        title: "Healthy meal prep",
        items: [
          { name: "High protein halal meal plans", description: "Low carb, high protein meals with lean cuts, baked, grilled, or stir fried.", image: { src: "/images/post-9.jpg", alt: "Pan seared beef with green beans and mashed potato" }, href: "https://www.instagram.com/p/DdsIPBmhpD3/" },
        ],
      },
      {
        title: "Catering",
        items: [
          { name: "Party and event catering", description: "Trays for family gatherings, parties, and events. Message us with your date and guest count." },
        ],
      },
    ],
  },

  gallery: {
    title: "Fresh from our kitchen",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 1440, alt: "Chicken mandi", caption: "Chicken Mandi", href: "https://www.instagram.com/p/DfIyc7vh9Gs/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1440, alt: "Chicken club sandwich", caption: "Chicken Club Sandwich", href: "https://www.instagram.com/p/DfGMfwEhSAr/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1440, alt: "Mutton leg roast", caption: "Mutton Leg Roast", href: "https://www.instagram.com/p/De-NaQBB20L/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1440, alt: "Chicken mandi full", caption: "Chicken Mandi Full", href: "https://www.instagram.com/p/De5ZnEINab6/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1440, alt: "Beef biryani", caption: "Beef Biryani", href: "https://www.instagram.com/p/De0WwCbtqeN/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1399, alt: "Fish biryani", caption: "Fish Biryani", href: "https://www.instagram.com/p/DeyNdVlhCX6/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1440, alt: "Chicken mandi quarter", caption: "Chicken Mandi Quarter", href: "https://www.instagram.com/p/DeyNQoahauR/" },
      { src: "/images/post-8.jpg", width: 1080, height: 1440, alt: "Egg and veg fried rice", caption: "Egg and Veg Fried Rice", href: "https://www.instagram.com/p/DeyM0mAhSCQ/" },
      { src: "/images/post-9.jpg", width: 1080, height: 1440, alt: "Pan seared beef meal prep", caption: "Pan Seared Beef meal prep", href: "https://www.instagram.com/p/DdsIPBmhpD3/" },
    ],
  },

  instagram: {
    handle: "chefmavrascuisine",
    embeds: ["https://www.instagram.com/p/DfIyc7vh9Gs/"],
    embedsTitle: "Latest from our kitchen",
  },

  order: {
    title: "Book your order",
    intro: "Orders are booked by message. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi Chef Mavra's Cuisine! I would like to book an order.\nDate needed:\nServings or tray size:\nDishes or flavours:\nOccasion or ideas:\nPickup or delivery:",
    links: [{ label: "Message us on Facebook", href: "https://www.facebook.com/chefmavrascuisine" }],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send us a message with your date, servings, and the dishes you would like, and we will get back to you to confirm." },
    { q: "Is the food halal?", a: "Yes. Everything is made with halal ingredients, homemade and hygienic." },
    { q: "Do you cater parties?", a: "Yes, we cater parties and events. Message us with your date and guest count." },
  ],

  contact: {
    area: "Milton, Ontario",
    socials: [{ label: "Facebook", href: "https://www.facebook.com/chefmavrascuisine" }],
  },

  seo: {
    title: "Chef Mavra's Cuisine | Halal catering and meal prep in Milton",
    description: "Halal homemade food in Milton, ON: chicken mandi, biryani, party catering, and healthy high protein meal prep. Book your order with a quick message.",
    keywords: ["halal catering Milton", "halal food Milton", "meal prep Milton", "chicken mandi Milton", "biryani Milton"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
