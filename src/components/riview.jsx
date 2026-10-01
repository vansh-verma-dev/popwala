import { FiStar } from "react-icons/fi";
import reviewsData from "../data/reviewsData";

function Reviews() {
  return (
    <section className="w-full bg-[#0B0E11] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-black uppercase italic tracking-tight text-white sm:text-3xl">
            Squad <span className="text-[#FF4D2E]">Reviews</span>
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Verified players who topped up their popularity
          </p>
        </div>

        {/* Horizontal Scroll Row */}
        <div className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {reviewsData.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }) {
  const { name, gameId, rating, review: text } = review;

  return (
    <div
      className="relative w-64 shrink-0 border border-white/10 bg-[#14181D] p-4 sm:w-72"
      style={{
        clipPath:
          "polygon(0 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%)",
      }}
    >
      {/* Top accent line */}
      <div className="absolute left-0 top-0 h-[2px] w-10 bg-[#FF4D2E]" />

      {/* Stars */}
      <div className="mb-3 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <FiStar
            key={i}
            size={13}
            className={
              i < rating
                ? "fill-[#FF4D2E] text-[#FF4D2E]"
                : "text-white/15"
            }
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-sm leading-relaxed text-gray-300">{text}</p>

      {/* User Info */}
      <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#1E242B] text-xs font-bold text-[#FF4D2E]">
          {name.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-white">{name}</p>
         
        </div>
      </div>
    </div>
  );
}

export default Reviews;