import { FiPackage, FiCreditCard, FiUser, FiCheckCircle } from "react-icons/fi";

const steps = [
  {
    icon: FiPackage,
    title: "Choose Package",
    desc: "Select the popularity amount you need — 1K to 50K, or grab a special deal.",
  },
  {
    icon: FiUser,
    title: "Enter Game ID",
    desc: "Type in your BGMI in-game ID (e.g. Tag*Vansh) so we know where to deliver.",
  },
  {
    icon: FiCreditCard,
    title: "Make Payment",
    desc: "Pay securely via UPI, card, or wallet — checkout takes under a minute.",
  },
  {
    icon: FiCheckCircle,
    title: "Get Delivered",
    desc: "Popularity is credited to your account instantly, no waiting around.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full bg-[#0B0E11] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-black uppercase italic tracking-tight text-white sm:text-3xl">
            How It <span className="text-[#FF4D2E]">Works</span>
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Four steps between you and your popularity boost
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative border border-white/10 bg-[#14181D] p-4 sm:p-5"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%)",
                }}
              >
                {/* Step number */}
                <span className="absolute right-3 top-3 font-mono text-xs text-white/20">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div
                  className="mb-3 flex h-10 w-10 items-center justify-center border border-[#FF4D2E]/40 bg-[#FF4D2E]/10 text-[#FF4D2E]"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%)",
                  }}
                >
                  <Icon size={18} />
                </div>

                <h3 className="text-sm font-bold text-white sm:text-base">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-gray-400 sm:text-sm">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;