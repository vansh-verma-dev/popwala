import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    q: "How long does it take to receive popularity?",
    a: "Most orders are delivered within 5-10 minutes. Processing starts as soon as your payment is confirmed.",
  },
  {
    q: "Is my game ID safe?",
    a: "Yes, we only need your ID to credit the popularity. We never ask for your password or OTP.",
  },
  {
    q: "What if I don't receive my popularity?",
    a: "You'll get a full refund if delivery doesn't happen within 24 hours — no questions asked.",
  },
  {
    q: "What payment options are available?",
    a: "UPI, debit/credit cards, and popular wallets — we support all major payment methods.",
  },
  {
    q: "How are special offer packages different?",
    a: "Special packages come with bonus popularity or an extra discount, giving you better value than the regular rate.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section id="faq" className="w-full bg-[#0B0E11] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-black uppercase italic tracking-tight text-white sm:text-3xl">
            Frequently Asked <span className="text-[#FF4D2E]">Questions</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.q}
                className={`border bg-[#14181D] transition-colors ${
                  isOpen ? "border-[#FF4D2E]/60" : "border-white/10"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-white sm:text-base">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center border transition-colors ${
                      isOpen
                        ? "border-[#FF4D2E] bg-[#FF4D2E] text-white"
                        : "border-white/15 text-gray-400"
                    }`}
                  >
                    {isOpen ? <FiMinus size={14} /> : <FiPlus size={14} />}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="px-4 pb-4 text-sm leading-relaxed text-gray-400">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;