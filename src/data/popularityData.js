// POPWALA — Updated Pricing
// Starting rate: ₹6 per 1K
// Bulk packages include promotional discounts.

const popularityData = [
  // ---------- Regular Packages ----------
  {
    id: 1,
    image: "https://i.pinimg.com/736x/f7/ad/3c/f7ad3c4fb74cc20008296543fa6eff22.jpg",
    popularity: "1K",
    price: 6,
    oldPrice: 10,
    discount: "SAVE 40%",
    isSpecial: false,
  },
  {
    id: 2,
    image: "https://i.pinimg.com/736x/f1/36/4d/f1364de7843e70b548cfb1c488015f9b.jpg",
    popularity: "10K",
    price: 55,
    oldPrice: 100,
    discount: "SAVE 45%",
    isSpecial: false,
  },
  {
    id: 3,
    image: "https://i.pinimg.com/736x/44/75/9f/44759f905358dbf06d2de26569b55352.jpg",
    popularity: "50K",
    price: 250,
    oldPrice: 500,
    discount: "SAVE 50%",
    isSpecial: false,
  },
  {
    id: 4,
    image: "https://i.pinimg.com/736x/67/c0/a0/67c0a02e368eeb59d0e1cef030e48aa0.jpg",
    popularity: "75K",
    price: 360,
    oldPrice: 750,
    discount: "SAVE 52%",
    isSpecial: false,
  },

  // ---------- Special Packages ----------
  {
    id: 5,
    image: "https://i.pinimg.com/736x/35/b5/21/35b5218c88041838b7cb83533505df3f.jpg",
    popularity: "100K",
    price: 450,
    oldPrice: 1000,
    discount: "SAVE 55%",
    isSpecial: true,
    offer: "Special Offer",
  },
  {
    id: 6,
    image: "https://i.pinimg.com/736x/b1/22/b1/b122b1aee31ffd887235901f0ce719c7.jpg",
    popularity: "1.25Lakh",
    price: 550,
    oldPrice: 1250,
    discount: "SAVE 56%",
    isSpecial: true,
    offer: "Hot Deal",
  },
  {
    id: 7,
    image: "https://i.pinimg.com/736x/b5/ef/7d/b5ef7d831d95af865cad5ad067efe83a.jpg",
    popularity: "MIX 1M",
    price: 3800,
    oldPrice: 10000,
    discount: "SAVE 62%",
    isSpecial: true,
    offer: "Best Value",
  },

  // ---------- Custom Amount Package ----------
  {
    id: 8,
    image: "https://i.pinimg.com/736x/94/91/b9/9491b97e794b5494a797a9538bbe1d13.jpg",
    popularity: "Custom",
    isSpecial: true,
    isCustom: true,
    offer: "Your Choice",

    // Custom orders use ₹6 per 1K.
    // Bulk package rates are lower per unit.
    ratePerK: 6,

    minAmount: 1000,
    maxAmount: 90000,
  },
];

export default popularityData;