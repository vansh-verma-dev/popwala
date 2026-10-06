import { useEffect, useRef, useState } from "react";
import { FiGift, FiSend, FiInstagram, FiCamera } from "react-icons/fi";

const TELEGRAM_USERNAME = "BGMI_PopWala";
const INSTAGRAM_USERNAME = "bgmipopwala";
const STORAGE_KEY = "popwala_scratch_v1";

const clipCorner = {
  clipPath:
    "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)",
};

// Reward tiers: [min, max, chance %]. Edit these to control how rare big rewards are.
const TIERS = [[1000, 3000, 100]];

const pickReward = () => {
  let roll = Math.random() * 100;
  for (const [min, max, chance] of TIERS) {
    if (roll < chance) {
      const raw = min + Math.random() * (max - min);
      return Math.round(raw / 1000) * 1000; // round to nearest 1K
    }
    roll -= chance;
  }
  return 2000;
};

const makeCode = () =>
  "POP-" + Math.random().toString(36).slice(2, 8).toUpperCase();

const formatDate = (ts) =>
  new Date(ts).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

const loadOrCreateCard = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && saved.amount && saved.code) return saved;
  } catch (e) {
    // ignore
  }
  const card = {
    amount: pickReward(),
    code: makeCode(),
    time: Date.now(),
    revealed: false,
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(card));
  } catch (e) {
    // ignore
  }
  return card;
};

function ScratchOffer() {
  const [card] = useState(loadOrCreateCard);
  const [revealed, setRevealed] = useState(card.revealed);
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const drawing = useRef(false);
  const moves = useRef(0);

  // Paint the silver scratch layer
  useEffect(() => {
    if (revealed) return;
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const { width, height } = wrap.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);

    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, "#9aa0a6");
    grad.addColorStop(0.5, "#d4d8dc");
    grad.addColorStop(1, "#8b9096");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "rgba(20,24,29,0.65)";
    ctx.font = "900 22px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("SCRATCH HERE", width / 2, height / 2 - 10);
    ctx.font = "600 13px sans-serif";
    ctx.fillText("Use your finger", width / 2, height / 2 + 16);
  }, [revealed]);

  const scratchAt = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext("2d");
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(e.clientX - rect.left, e.clientY - rect.top, 22, 0, Math.PI * 2);
    ctx.fill();
  };

  const checkProgress = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let cleared = 0;
    let total = 0;
    for (let i = 3; i < data.length; i += 64) {
      total++;
      if (data[i] === 0) cleared++;
    }
    if (cleared / total > 0.5) {
      setRevealed(true);
      try {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ ...card, revealed: true })
        );
      } catch (e) {
        // ignore
      }
    }
  };

  const onDown = (e) => {
    drawing.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    scratchAt(e);
  };
  const onMove = (e) => {
    if (!drawing.current) return;
    scratchAt(e);
    moves.current += 1;
    if (moves.current % 8 === 0) checkProgress();
  };
  const onUp = () => {
    drawing.current = false;
    checkProgress();
  };

  const amountLabel = `${card.amount / 1000}K`;

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B0E11] p-4">
      <div
        className="w-full max-w-md border border-white/10 bg-[#14181D] p-5"
        style={clipCorner}
      >
        <div className="mb-4 flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center border border-[#FF4D2E]/40 bg-[#FF4D2E]/10 text-[#FF4D2E]"
            style={clipCorner}
          >
            <FiGift size={18} />
          </div>
          <div>
            <h1 className="text-lg font-black uppercase italic text-white">
              Scratch & Win
            </h1>
            <p className="text-xs text-gray-400">
              Win 2K to 50K extra popularity on your order
            </p>
          </div>
        </div>

        {/* Voucher */}
        <div
          ref={wrapRef}
          className="relative h-52 w-full select-none overflow-hidden border border-white/10 bg-[#0B0E11]"
          style={clipCorner}
        >
          {/* Reward underneath */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              You won extra
            </p>
            <p className="text-5xl font-black text-[#FF4D2E]">
              +{amountLabel}
            </p>
            <p className="text-sm font-bold text-white">Popularity</p>
            <p className="mt-3 font-mono text-xs text-gray-300">
              Code: {card.code}
            </p>
            <p className="text-[11px] text-gray-500">
              {formatDate(card.time)}
            </p>
          </div>

          {/* Scratch layer */}
          {!revealed && (
            <canvas
              ref={canvasRef}
              onPointerDown={onDown}
              onPointerMove={onMove}
              onPointerUp={onUp}
              onPointerCancel={onUp}
              className="absolute inset-0 h-full w-full cursor-pointer"
              style={{ touchAction: "none" }}
            />
          )}
        </div>

        {!revealed ? (
          <p className="mt-4 text-center text-xs text-gray-500">
            Scratch the silver card to reveal your offer.
          </p>
        ) : (
          <div className="mt-4">
            <div className="flex items-start gap-3 border border-[#FF4D2E]/30 bg-[#FF4D2E]/10 p-3">
              <FiCamera size={16} className="mt-0.5 shrink-0 text-[#FF4D2E]" />
              <p className="text-xs text-gray-300">
                Take a <span className="font-semibold text-white">screenshot</span>{" "}
                of this card (code and time must be visible) and send it in
                chat when you place your order.
              </p>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <a
                href={`https://t.me/${TELEGRAM_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-white/15 bg-white/5 py-3 text-xs font-bold uppercase tracking-wide text-white transition hover:border-[#FF4D2E]/60 hover:text-[#FF4D2E]"
              >
                <FiSend size={14} /> Telegram
              </a>
              <a
                href={`https://ig.me/m/${INSTAGRAM_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-white/15 bg-white/5 py-3 text-xs font-bold uppercase tracking-wide text-white transition hover:border-[#FF4D2E]/60 hover:text-[#FF4D2E]"
              >
                <FiInstagram size={14} /> Instagram
              </a>
            </div>
            <p className="mt-3 text-center text-[11px] text-gray-500">
              One scratch card per device.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ScratchOffer;