// Base rate: ₹10 per 1K popularity
// Regular packages priced exactly on that rate.
// Special packages get a bit of bonus/discount to make them attractive.

const popularityData = [
  // ---------- Regular Packages ----------
  {
    id: 1,
    image: "https://i.pinimg.com/736x/f7/ad/3c/f7ad3c4fb74cc20008296543fa6eff22.jpg",
    popularity: "1K",
    price: 10,
    oldPrice: null,
    discount: null,
    isSpecial: false,
  },
  {
    id: 2,
    image: "https://i.pinimg.com/736x/f1/36/4d/f1364de7843e70b548cfb1c488015f9b.jpg",
    popularity: "10K",
    price: 95,
    oldPrice: null,
    discount: null,
    isSpecial: false,
  },
  {
    id: 3,
    image: "https://i.pinimg.com/736x/44/75/9f/44759f905358dbf06d2de26569b55352.jpg",
    popularity: "50K",
    price: 420,
    oldPrice: null,
    discount: null,
    isSpecial: false,
  },
  {
    id: 4,
    image: "https://i.pinimg.com/736x/67/c0/a0/67c0a02e368eeb59d0e1cef030e48aa0.jpg",
    popularity: "75K",
    price: 650,
    oldPrice: null,
    discount: null,
    isSpecial: false,
  },

  // ---------- Special Packages ----------
  {
    id: 5,
    image: "http://i.pinimg.com/736x/35/b5/21/35b5218c88041838b7cb83533505df3f.jpg",
    popularity: "100K",
    price: 930,
    oldPrice: 1200,
    discount: "SAVE 13%",
    isSpecial: true,
    offer: "Special Offer",
  },
  {
    id: 6,
    image: "https://i.pinimg.com/736x/63/76/20/637620265c1e933766ef4d3d59821c18.jpg",
    popularity: "1.25Lakh",
    price: 1150,
    oldPrice: 1500,
    discount: "SAVE 17%",
    isSpecial: true,
    offer: "Hot Deal",
  },
  {
    id: 7,
    image: "https://i.pinimg.com/736x/b5/ef/7d/b5ef7d831d95af865cad5ad067efe83a.jpg",
    popularity: "MIX 1M",
    price: 8500,
    oldPrice: 10000,
    discount: "SAVE 13%",
    isSpecial: true,
    offer: "Best Value",
  },
  {
    id: 8,
    image: "https://i.pinimg.com/736x/94/91/b9/9491b97e794b5494a797a9538bbe1d13.jpg",
    popularity: "Coustom",
    price: 850,
    oldPrice: 1000,
    discount: "SAVE 15%",
    isSpecial: true,
    offer: "Mega Deal",
  },
];

export default popularityData;