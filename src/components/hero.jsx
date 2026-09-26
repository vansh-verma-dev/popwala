import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const banners = [
  "https://i.pinimg.com/736x/9f/fe/72/9ffe72e2371f8f9580502dc7e1a2e0d2.jpg",
  "https://i.pinimg.com/736x/f6/cc/33/f6cc33a744afdd3ebb032110182c1b34.jpg",
  "https://i.pinimg.com/736x/5a/e3/94/5ae3944c03f0f97838fac28e65288580.jpg",
];

const AUTOPLAY_MS = 3500;

function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  const goTo = (index) => {
    const total = banners.length;
    setCurrent(((index % total) + total) % total);
  };

  const previousSlide = () => goTo(current - 1);
  const nextSlide = () => goTo(current + 1);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => goTo(current + 1), AUTOPLAY_MS);
    return () => clearInterval(interval);
  }, [current, isPaused]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    const SWIPE_THRESHOLD = 40;

    if (delta > SWIPE_THRESHOLD) previousSlide();
    else if (delta < -SWIPE_THRESHOLD) nextSlide();

    touchStartX.current = null;
  };

  return (
    <section className="w-full bg-[#0B0E11] pt-16">
      <div
        className="relative mx-auto w-full overflow-hidden border-b border-white/10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={(e) => {
          setIsPaused(true);
          handleTouchStart(e);
        }}
        onTouchEnd={(e) => {
          handleTouchEnd(e);
          setIsPaused(false);
        }}
      >
        {/* Slide track */}
        <div className="relative h-[180px] w-full sm:h-[240px] md:h-[360px] lg:h-[430px]">
          <div
            className="flex h-full w-full transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {banners.map((banner, index) => (
              <img
                key={banner}
                src={banner}
                alt={`PopWala banner ${index + 1} of ${banners.length}`}
                className="h-full w-full shrink-0 object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                draggable={false}
              />
            ))}
          </div>

          {/* Dark gradient overlay for legibility + gaming mood */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0E11] via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0B0E11]/70 via-transparent to-[#0B0E11]/70" />

          {/* Left Arrow */}
          <button
            onClick={previousSlide}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-white/15 bg-black/50 text-white backdrop-blur-sm transition hover:border-[#FF4D2E]/60 hover:text-[#FF4D2E] active:scale-90 md:left-6 md:h-11 md:w-11"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)",
            }}
          >
            <FiChevronLeft size={20} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-white/15 bg-black/50 text-white backdrop-blur-sm transition hover:border-[#FF4D2E]/60 hover:text-[#FF4D2E] active:scale-90 md:right-6 md:h-11 md:w-11"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)",
            }}
          >
            <FiChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
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