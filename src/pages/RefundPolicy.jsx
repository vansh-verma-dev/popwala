
import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiRefreshCw,
  FiCheckCircle,
  FiXCircle,
  FiClock,
  FiAlertCircle,
  FiMessageCircle,
  FiShield,
  FiCreditCard,
} from "react-icons/fi";

const WHATSAPP_NUMBER = "91XXXXXXXXXX"; // Apna business WhatsApp number

const refundSections = [
  {
    icon: FiCheckCircle,
    title: "Refund Eligibility",
    color: "text-green-400",
    items: [
      "Payment successful hone ke baad order fulfill na ho sake.",
      "Customer se duplicate payment receive hui ho.",
      "Payment deduct hui ho lekin order confirm na hua ho.",
      "Verified technical issue ki wajah se service provide na ho paayi ho.",
    ],
  },
  {
    icon: FiXCircle,
    title: "Non-Refundable Situations",
    color: "text-red-400",
    items: [
      "Order successfully complete hone ke baad change of mind.",
      "Customer ne galat package select kiya ho aur fulfillment complete ho chuka ho.",
      "Customer ki taraf se incorrect details provide ki gayi hon.",
      "Service successfully complete hone ke baad personal preference change ho.",
    ],
  },
];

function RefundPolicy() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello PopWala, I need help regarding my refund or cancellation."
  )}`;

  return (
    <div className="min-h-screen bg-[#0B0E11] text-white">

      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF4D2E]/10 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">

          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition hover:text-[#FF4D2E]"
          >
            <FiArrowLeft />
            Back to Home
          </Link>

          <div className="mb-5 flex h-14 w-14 items-center justify-center border border-[#FF4D2E]/30 bg-[#FF4D2E]/10 text-[#FF4D2E]">
            <FiRefreshCw size={27} />
          </div>

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#FF4D2E]">
            POPWALA • CUSTOMER POLICY
          </p>

          <h1 className="text-3xl font-black tracking-tight sm:text-5xl">
            Refund & <span className="text-[#FF4D2E]">Cancellation</span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Our refund and cancellation guidelines are designed to keep
            the ordering process clear and transparent for every customer.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-400">
            <FiClock className="text-[#FF4D2E]" />
            Last Updated: [Add Date]
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="mx-auto max-w-5xl space-y-8 px-5 py-10 sm:px-8 sm:py-14">

        {/* Important Notice */}
        <div className="flex gap-4 border border-[#FF4D2E]/20 bg-[#FF4D2E]/5 p-5 sm:p-6">
          <FiAlertCircle
            className="mt-1 shrink-0 text-[#FF4D2E]"
            size={22}
          />
          <div>
            <h2 className="font-bold text-white">Important Information</h2>
            <p className="mt-2 text-sm leading-7 text-gray-400">
              Please check your selected package, order details and final
              amount before confirming payment. Refund requests are reviewed
              according to the actual order status and applicable law.
            </p>
          </div>
        </div>

        {/* General Policy */}
        <section className="border border-white/10 bg-[#11151B] p-5 sm:p-7">
          <h2 className="flex items-center gap-3 text-xl font-bold">
            <FiShield className="text-[#FF4D2E]" />
            01. General Refund Policy
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-400">
            PopWala aims to provide clear order information and customer
            assistance. Refund eligibility depends on whether the order
            has been confirmed, started, completed or affected by a
            verified payment or technical issue.
          </p>

          <p className="mt-3 text-sm leading-7 text-gray-400">
            No refund request will be rejected where a refund is required
            under applicable law.
          </p>
        </section>

        {/* Eligibility */}
        <section>
          <h2 className="mb-4 text-xl font-bold">
            02. When Can You Request a Refund?
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {refundSections.map((section, index) => {
              const Icon = section.icon;

              return (
                <div
                  key={index}
                  className="border border-white/10 bg-[#11151B] p-5 sm:p-6"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <Icon size={22} className={section.color} />
                    <h3 className="font-bold">{section.title}</h3>
                  </div>

                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm leading-6 text-gray-400"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF4D2E]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Cancellation */}
        <section className="border border-white/10 bg-[#11151B] p-5 sm:p-7">
          <h2 className="flex items-center gap-3 text-xl font-bold">
            <FiXCircle className="text-[#FF4D2E]" />
            03. Order Cancellation
          </h2>

          <div className="mt-5 space-y-4 text-sm leading-7 text-gray-400">
            <p>
              Customers can contact support to request cancellation before
              order fulfillment begins.
            </p>

            <p>
              If fulfillment has already started, cancellation will depend
              on the order status and whether the service can reasonably
              be stopped.
            </p>

            <p>
              If an order cannot be fulfilled, the customer will be
              informed about the available resolution, including an
              applicable refund.
            </p>
          </div>
        </section>

        {/* Payment */}
        <section className="border border-white/10 bg-[#11151B] p-5 sm:p-7">
          <h2 className="flex items-center gap-3 text-xl font-bold">
            <FiCreditCard className="text-[#FF4D2E]" />
            04. Payment Issues
          </h2>

          <ul className="mt-5 space-y-4 text-sm leading-7 text-gray-400">
            <li>
              <strong className="text-white">Failed Payment:</strong>{" "}
              If payment is deducted but the order is not confirmed,
              contact support with the transaction reference.
            </li>

            <li>
              <strong className="text-white">Duplicate Payment:</strong>{" "}
              Verified duplicate payments will be reviewed for refund.
            </li>

            <li>
              <strong className="text-white">Incorrect Payment:</strong>{" "}
              Share the payment reference and order details so the issue
              can be checked.
            </li>
          </ul>
        </section>

        {/* Refund Process */}
        <section className="border border-white/10 bg-[#11151B] p-5 sm:p-7">
          <h2 className="flex items-center gap-3 text-xl font-bold">
            <FiRefreshCw className="text-[#FF4D2E]" />
            05. Refund Process
          </h2>

          <div className="mt-5 space-y-4">
            {[
              "Contact PopWala support with your Order ID.",
              "Provide the payment transaction reference and issue details.",
              "Our team will review the order and payment status.",
              "If approved, the refund will be initiated through the applicable payment method.",
              "The actual credit time may depend on the payment provider or bank.",
            ].map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#FF4D2E]/30 bg-[#FF4D2E]/10 text-xs font-bold text-[#FF4D2E]">
                  {index + 1}
                </div>
                <p className="pt-1 text-sm leading-6 text-gray-400">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="border border-[#FF4D2E]/20 bg-gradient-to-br from-[#FF4D2E]/10 to-[#11151B] p-6 sm:p-8">
          <div className="flex h-12 w-12 items-center justify-center bg-[#FF4D2E] text-white">
            <FiMessageCircle size={23} />
          </div>

          <h2 className="mt-5 text-2xl font-black">
            Need Help With a Refund?
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-7 text-gray-400">
            Contact our support team with your Order ID and payment
            details. Never share your password or OTP.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-[#FF4D2E] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#e94327] active:scale-95"
          >
            <FiMessageCircle size={18} />
            Contact Support
          </a>
        </section>

        {/* Footer Note */}
        <p className="border-t border-white/10 pt-6 text-center text-xs leading-6 text-gray-500">
          PopWala is an independent service and is not affiliated with
          or endorsed by KRAFTON or BGMI. This policy does not limit
          any rights available to customers under applicable law.
        </p>

      </main>
    </div>
  );
}

export default RefundPolicy;
