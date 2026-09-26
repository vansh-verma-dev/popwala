import { useState } from "react";
import {
  FiX,
  FiUser,
  FiPhone,
  FiHash,
  FiCreditCard,
  FiSmartphone,
  FiCheckCircle,
} from "react-icons/fi";

const paymentMethods = [
  { id: "upi", label: "UPI", icon: FiSmartphone },
  { id: "card", label: "Card", icon: FiCreditCard },
];

// Replace with your actual Telegram username (without the @)
const TELEGRAM_USERNAME = "BGMI_PopWala";

const clipCorner = {
  clipPath:
    "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)",
};

function CheckoutModal({ pack, onClose }) {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [uid, setUid] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [errors, setErrors] = useState({});
  const [isPlaced, setIsPlaced] = useState(false);

  const validate = () => {
    const next = {};
    if (!fullName.trim()) next.fullName = "Full name is required.";
    if (!/^\d{10}$/.test(mobile.trim()))
      next.mobile = "Enter a valid 10-digit mobile number.";
    if (!uid.trim()) next.uid = "BGMI UID is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Build a prefilled order summary message
    const message = [
      "New Order - PopWala",
      `Package: ${pack.popularity} Popularity (₹${pack.price})`,
      `Full Name: ${fullName}`,
      `Mobile: ${mobile}`,
      `BGMI UID: ${uid}`,
      `Payment Method: ${paymentMethod.toUpperCase()}`,
    ].join("\n");

    const telegramUrl = `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(
      message
    )}`;

    window.open(telegramUrl, "_blank", "noopener,noreferrer");
    setIsPlaced(true);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md max-h-[90vh] overflow-y-auto border border-white/10 bg-[#14181D]"
        style={clipCorner}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center border border-white/15 bg-black/40 text-gray-300 transition hover:border-[#FF4D2E]/60 hover:text-[#FF4D2E]"
        >
          <FiX size={16} />
        </button>

        {isPlaced ? (
          /* ---------- Success State ---------- */
          <div className="p-8 text-center">
            <div
              className="mx-auto mb-5 flex h-14 w-14 items-center justify-center border border-[#FF4D2E]/40 bg-[#FF4D2E]/10 text-[#FF4D2E]"
              style={clipCorner}
            >
              <FiCheckCircle size={26} />
            </div>
            <h2 className="text-xl font-black uppercase italic text-white">
              Almost Done
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              We've opened Telegram with your order details pre-filled. Just
              hit <span className="font-semibold text-white">Send</span> to
              confirm your order for{" "}
              <span className="font-mono text-[#FF4D2E]">{uid}</span>.
            </p>
            <p className="mt-2 text-xs text-gray-500">
              Didn't open?{" "}
              <a
                href={`https://t.me/${TELEGRAM_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#FF4D2E] hover:underline"
              >
                Open Telegram manually
              </a>
            </p>
            <button
              onClick={onClose}
              className="mt-6 w-full border border-white/15 bg-white/5 py-3 text-xs font-bold uppercase tracking-wide text-white transition hover:border-[#FF4D2E]/60 hover:text-[#FF4D2E]"
              style={clipCorner}
            >
              Done
            </button>
          </div>
        ) : (
          /* ---------- Package Details + Form ---------- */
          <>
            {/* Package Details */}
            <div className="flex items-center gap-4 border-b border-white/10 bg-[#0B0E11] p-5">
              <img
                src={pack.image}
                alt={pack.popularity}
                className="h-16 w-16 shrink-0 object-cover"
              />
              <div className="min-w-0">
                <p className="text-base font-bold text-white">
                  {pack.popularity} Popularity
                </p>
                {pack.isSpecial && (
                  <span className="text-xs font-semibold text-[#FF4D2E]">
                    {pack.offer}
                  </span>
                )}
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-lg font-black text-[#FF4D2E]">
                    ₹{pack.price}
                  </span>
                  {pack.oldPrice && (
                    <span className="text-xs text-gray-500 line-through">
                      ₹{pack.oldPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-5">
              {/* Full Name */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Full Name
                </label>
                <div className="flex items-center gap-3 border border-white/10 bg-[#0B0E11] px-4 py-3">
                  <FiUser size={15} className="shrink-0 text-gray-500" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full bg-transparent text-sm text-white placeholder:text-gray-600 focus:outline-none"
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-xs font-medium text-[#FF4D2E]">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Mobile Number */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Mobile Number
                </label>
                <div className="flex items-center gap-3 border border-white/10 bg-[#0B0E11] px-4 py-3">
                  <FiPhone size={15} className="shrink-0 text-gray-500" />
                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) =>
                      setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
                    }
                    placeholder="10-digit mobile number"
                    className="w-full bg-transparent text-sm text-white placeholder:text-gray-600 focus:outline-none"
                  />
                </div>
                {errors.mobile && (
                  <p className="mt-1 text-xs font-medium text-[#FF4D2E]">
                    {errors.mobile}
                  </p>
                )}
              </div>

              {/* BGMI UID */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-400">
                  BGMI UID
                </label>
                <div className="flex items-center gap-3 border border-white/10 bg-[#0B0E11] px-4 py-3">
                  <FiHash size={15} className="shrink-0 text-gray-500" />
                  <input
                    type="text"
                    value={uid}
                    onChange={(e) => setUid(e.target.value)}
                    placeholder="e.g. 5123456789"
                    className="w-full bg-transparent font-mono text-sm text-white placeholder:text-gray-600 focus:outline-none"
                  />
                </div>
                {errors.uid && (
                  <p className="mt-1 text-xs font-medium text-[#FF4D2E]">
                    {errors.uid}
                  </p>
                )}
              </div>

              {/* Payment Method */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Payment Method
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {paymentMethods.map((method) => {
                    const Icon = method.icon;
                    const isActive = paymentMethod === method.id;
                    return (
                      <button
                        type="button"
                        key={method.id}
                        onClick={() => setPaymentMethod(method.id)}
                        className={`flex items-center justify-center gap-2 border p-3 text-sm font-semibold transition ${
                          isActive
                            ? "border-[#FF4D2E] bg-[#FF4D2E]/10 text-[#FF4D2E]"
                            : "border-white/10 bg-white/5 text-gray-300 hover:border-white/25"
                        }`}
                      >
                        <Icon size={16} />
                        {method.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-2 w-full border border-[#FF4D2E] bg-[#FF4D2E] py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-transparent hover:text-[#FF4D2E] active:scale-[0.98]"
                style={clipCorner}
              >
                Confirm & Pay ₹{pack.price}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default CheckoutModal;