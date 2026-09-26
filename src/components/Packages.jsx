import { useState } from "react";
import popularityData from "../data/popularityData";
import CheckoutModal from "../pages/checkout";

function Packages() {
  const [selectedPack, setSelectedPack] = useState(null);

  return (
    <section id="packages" className="w-full bg-[#0B0E11] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-black uppercase italic tracking-tight text-white sm:text-3xl">
            Buy <span className="text-[#FF4D2E]">Popularity</span>
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            ₹10 per 1K popularity — instant delivery
          </p>
        </div>

        {/* Cards Grid: 2 per row on mobile, more on larger screens */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {popularityData.map((pack) => (
            <PackageCard
              key={pack.id}
              pack={pack}
              onBuyNow={() => setSelectedPack(pack)}
            />
          ))}
        </div>
      </div>

      {/* Checkout Modal - opens with the clicked package's details */}
      {selectedPack && (
        <CheckoutModal
          pack={selectedPack}
          onClose={() => setSelectedPack(null)}
        />
      )}
    </section>
  );
}

function PackageCard({ pack, onBuyNow }) {
  const { image, popularity, price, oldPrice, discount, isSpecial, offer } = pack;

  return (
    <div
      className={`relative flex flex-col overflow-hidden bg-[#14181D] transition duration-300 hover:-translate-y-1 ${
        isSpecial
          ? "border border-[#FF4D2E]/70 shadow-[0_0_20px_rgba(255,77,46,0.15)]"
          : "border border-white/10"
      }`}
      style={{
        clipPath:
          "polygon(0 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%)",
      }}
    >
      {/* Special Offer Tag - top left */}
      {isSpecial && (
        <span className="absolute left-0 top-3 z-10 bg-[#FF4D2E] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
          {offer || "Special Offer"}
        </span>
      )}

      {/* Discount Tag - top right */}
      {discount && (
        <span className="absolute right-2 top-2 z-10 border border-white/20 bg-black/60 px-2 py-0.5 text-[9px] font-bold text-[#FF4D2E]">
          {discount}
        </span>
      )}

      {/* Image */}
      <div className="aspect-square w-full bg-[#1E242B]">
        <img
          src={image}
          alt={`${popularity} PUBG Popularity`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-1 border-t border-white/10 p-3">
        <h3 className="text-sm font-bold text-white sm:text-base">
          {popularity} Popularity
        </h3>

        {/* Price Row */}
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-lg font-black text-[#FF4D2E] sm:text-xl">
            ₹{price}
          </span>
          {oldPrice && (
            <span className="text-xs text-gray-500 line-through">
              ₹{oldPrice}
            </span>
          )}
        </div>

        {/* Buy Now Button */}
        <button
          onClick={onBuyNow}
          className="mt-2 w-full border border-[#FF4D2E] bg-[#FF4D2E] py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-transparent hover:text-[#FF4D2E] active:scale-95 sm:text-sm"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Packages;