import { FiHome, FiAlertTriangle } from "react-icons/fi";

const clipCorner = {
  clipPath:
    "polygon(0 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%)",
};

function NotFound() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-[#0B0E11] px-4 py-16">
      <div
        className="w-full max-w-md border border-white/10 bg-[#14181D] p-8 text-center sm:p-10"
        style={clipCorner}
      >
        {/* Icon */}
        <div
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-[#FF4D2E]/40 bg-[#FF4D2E]/10 text-[#FF4D2E]"
          style={clipCorner}
        >
          <FiAlertTriangle size={28} />
        </div>

        {/* Code */}
        <h1 className="text-6xl font-black italic tracking-tight text-white sm:text-7xl">
          4<span className="text-[#FF4D2E]">0</span>4
        </h1>

        <h2 className="mt-3 text-lg font-bold uppercase tracking-wide text-white">
          Zone Not Found
        </h2>
        <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-gray-400">
          Looks like you dropped outside the map. This page doesn't exist or
          may have been moved.
        </p>

        {/* Back Home */}
        <a
          href="/"
          className="mt-7 inline-flex w-full items-center justify-center gap-2 border border-[#FF4D2E] bg-[#FF4D2E] py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-transparent hover:text-[#FF4D2E] active:scale-[0.98]"
          style={clipCorner}
        >
          <FiHome size={16} />
          Back to Home
        </a>
      </div>
    </section>
  );
}

export default NotFound;