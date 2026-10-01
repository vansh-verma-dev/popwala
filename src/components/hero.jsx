import { useCallback, useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const banners = [
  "https://i.pinimg.com/736x/f9/93/21/f9932194077fbb95540a6c541673cfa9.jpg",
  "https://i.pinimg.com/736x/9e/76/79/9e767964dd11d976ff98408e301d698b.jpg",
  "https://i.pinimg.com/736x/58/54/96/5854966eb8338b04772f0f8a068ccdb1.jpg",
];

const AUTOPLAY_MS = 3500;
const SWIPE_THRESHOLD = 40;
const ARROW_CLIP =
  "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)";

const arrowClass =
  "absolute top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center " +
  "border border-white/15 bg-black/50 text-white backdrop-blur-sm transition " +
  "hover:border-[#FF4D2E]/60 hover:text-[#FF4D2E] active:scale-90 " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF4D2E] " +
  "md:h-11 md:w-11";

function Hero() {
  const total = banners.length;
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  const goTo = useCallback(
    (index) => setCurrent(((index % total) + total) % total),
    [total]
  );
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + total) % total),
    [total]
  );

  // Autoplay (restarts whenever the slide changes, so manual clicks reset the timer)
  useEffect(() => {
    if (isPaused) return;
    const id = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [current, isPaused, next]);

  // Touch swipe
  const onTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current !== null) {
      const delta = e.changedTouches[0].clientX - touchStartX.current;
      if (delta > SWIPE_THRESHOLD) prev();
      else if (delta < -SWIPE_THRESHOLD) next();
      touchStartX.current = null;
    }
    setIsPaused(false);
  };

  // Keyboard arrows
  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  return (
    <section
      className="w-full bg-[#0B0E11] pt-16"
      aria-roledescription="carousel"
      aria-label="PopWala banners"
    >
      <div
        className="relative w-full overflow-hidden border-b border-white/10 outline-none"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Slide track */}
        <div className="relative h-[220px] w-full sm:h-[300px] md:h-[420px] lg:h-[480px]">
          <div
            className="flex h-full w-full transition-transform duration-700 ease-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {banners.map((banner, index) => (
              <div
                key={banner}
                className="relative h-full w-full shrink-0 overflow-hidden bg-[#0B0E11]"
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${total}`}
                aria-hidden={current !== index}
              >
                <img
                  src={banner}
                  alt={`PopWala banner ${index + 1} of ${total}`}
                  className="h-full w-full object-cover object-center"
                  loading={index === 0 ? "eager" : "lazy"}
                  draggable={false}
                />
              </div>
            ))}
          </div>

          {/* Bottom gradient for dot legibility */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-20 bg-gradient-to-t from-[#0B0E11]/80 to-transparent" />

          {/* Arrows */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className={`${arrowClass} left-3 md:left-6`}
            style={{ clipPath: ARROW_CLIP }}
          >
            <FiChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className={`${arrowClass} right-3 md:right-6`}
            style={{ clipPath: ARROW_CLIP }}
          >
            <FiChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={current === index}
                className={`h-1.5 transition-all duration-300 ${
                  current === index
                    ? "w-6 bg-[#FF4D2E]"
                    : "w-1.5 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;