export const img = (name: string) => `/figma-assets/${name}`;

export const navItems = ["Home", "Plants Type", "More", "Contact"];

export type Plant = {
  name: string;
  text: string;
  price: string;
  image: string;
};

export const plants: Plant[] = [
  {
    name: "Aglaonema plant",
    text: "The Aglaonema plant, commonly known as Chinese Evergreen, is known for attractive foliage and easy care.",
    price: "Rs. 300/-",
    image: "plant-aglaonema.png",
  },
  {
    name: "Plantain Lilies",
    text: "Hostas are grown for lush decorative leaves that come in a wide variety of shapes and sizes.",
    price: "Rs. 380/-",
    image: "plant-lilies.png",
  },
  {
    name: "Cactus",
    text: "Known for the ability to thrive in bright, dry rooms and compact spaces.",
    price: "Rs. 259/-",
    image: "plant-cactus.png",
  },
  {
    name: "Swiss cheese Plant",
    text: "A popular tropical houseplant known for its distinctive perforated leaves.",
    price: "Rs. 400/-",
    image: "desk-plant-2.png",
  },
  {
    name: "Sansevieria plant",
    text: "A popular indoor plant admired for its striking appearance and low-maintenance nature.",
    price: "Rs. 450/-",
    image: "plant-sansevieria.png",
  },
  {
    name: "Agave plant",
    text: "A succulent plant known for rosettes of thick fleshy leaves and architectural forms.",
    price: "Rs. 359/-",
    image: "plant-lilies.png",
  },
];

export type Review = {
  name: string;
  image: string;
  text: string;
};

export const reviews: Review[] = [
  {
    name: "Shelly Russel",
    image: "review-1.png",
    text: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
  },
  {
    name: "Lula Rolfson",
    image: "review-2.png",
    text: "Each one has its own unique charm and personality. The vibrant colors and fresh greenery make such a huge difference in my home.",
  },
  {
    name: "Carol Huels",
    image: "review-3.png",
    text: "It's like bringing a little piece of nature indoors. Definitely worth the investment.",
  },
];
