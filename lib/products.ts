export type Product = {
  id: number;
  title: string;
  price: number;
  slug: string;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    title: "Eco-Friendly Toothbrush",
    price: 9.99,
    slug: "eco-friendly-toothbrush",
    image: "/images/toothbrush.jpg",
    description:
      "A biodegradable bamboo toothbrush designed for sustainable living and a clean smile.",
  },
  {
    id: 2,
    title: "Reusable Water Bottle",
    price: 19.99,
    slug: "reusable-water-bottle",
    image: "/images/bottle.jpg",
    description:
      "A sleek and durable water bottle made of stainless steel to reduce single-use plastic.",
  },
  {
    id: 3,
    title: "Organic Soap Bar",
    price: 6.99,
    slug: "organic-soap-bar",
    image: "/images/soap.jpg",
    description:
      "A handcrafted soap bar made with natural ingredients to keep your skin soft and chemical-free.",
  },
];
