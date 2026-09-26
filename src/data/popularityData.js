// Base rate: ₹10 per 1K popularity
// Regular packages priced exactly on that rate.
// Special packages get a bit of bonus/discount to make them attractive.

const popularityData = [
  // ---------- Regular Packages ----------
  {
    id: 1,
    image: "/packages/1k.jpg",
    popularity: "1K",
    price: 10,
    oldPrice: null,
    discount: null,
    isSpecial: false,
  },
  {
    id: 2,
    image: "/packages/10k.jpg",
    popularity: "10K",
    price: 100,
    oldPrice: null,
    discount: null,
    isSpecial: false,
  },
  {
    id: 3,
    image: "/packages/20k.jpg",
    popularity: "20K",
    price: 200,
    oldPrice: null,
    discount: null,
    isSpecial: false,
  },
  {
    id: 4,
    image: "/packages/50k.jpg",
    popularity: "50K",
    price: 500,
    oldPrice: null,
    discount: null,
    isSpecial: false,
  },

  // ---------- Special Packages ----------
  {
    id: 5,
    image: "/packages/special-15k.jpg",
    popularity: "15K",
    price: 130,
    oldPrice: 150,
    discount: "SAVE 13%",
    isSpecial: true,
    offer: "Special Offer",
  },
  {
    id: 6,
    image: "/packages/special-30k.jpg",
    popularity: "30K",
    price: 250,
    oldPrice: 300,
    discount: "SAVE 17%",
    isSpecial: true,
    offer: "Hot Deal",
  },
  {
    id: 7,
    image: "/packages/special-75k.jpg",
    popularity: "75K",
    price: 650,
    oldPrice: 750,
    discount: "SAVE 13%",
    isSpecial: true,
    offer: "Best Value",
  },
  {
    id: 8,
    image: "https://i.pinimg.com/736x/ad/8f/e2/ad8fe2d2d7fe4a59dddfbf69d4027a28.jpg",
    popularity: "100K",
    price: 850,
    oldPrice: 1000,
    discount: "SAVE 15%",
    isSpecial: true,
    offer: "Mega Deal",
  },
];

export default popularityData;