
import React, { useState } from "react";
import {
  FiAlertTriangle,
  FiSend,
  FiShoppingBag,
  FiCreditCard,
  FiClock,
  FiShield,
  FiArrowLeft,
  FiCheckCircle,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const TELEGRAM_LINK = "https://t.me/BGMI_PopWala";

const ReportIssue = () => {
  const [form, setForm] = useState({
    issueType: "Order Delay",
    orderId: "",
    paymentReference: "",
    description: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.issueType || !form.description.trim()) {
      setError("Please select an issue and describe your problem.");
      return;
    }

    const message = `Hi PopWala Support,

I want to report an issue.

Issue Type: ${form.issueType}
Order ID: ${form.orderId.trim() || "Not provided"}
Payment Reference: ${form.paymentReference.trim() || "Not provided"}

Issue Description:
${form.description.trim()}

Please help me resolve this issue.

Thank you.`;

    const telegramUrl = `${TELEGRAM_LINK}?text=${encodeURIComponent(message)}`;

    window.open(telegramUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-[#0B0E11] px-4 py-12 text-white sm:px-6">
      <div className="mx-auto max-w-5xl">

        {/* Back Link */}
        <Link
          to="/customer-support"
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-[#FF4D2E]"
        >
          <FiArrowLeft />
          Back to Support
        </Link>

        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center bg-[#FF4D2E]/10 text-3xl text-[#FF4D2E]">
            <FiAlertTriangle />
          </div>

          <span className="text-sm font-bold tracking-[0.2em] text-[#FF4D2E]">
            POPWALA SUPPORT
          </span>

          <h1 className="mt-3 text-4xl font-black sm:text-5xl">
            Report an <span className="text-[#FF4D2E]">Issue.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Facing a problem with your order or payment? Tell us what
            happened and contact our support team through Telegram.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="border border-white/10 bg-[#11161B] p-5 sm:p-8"
          >
            <h2 className="mb-7 text-xl font-bold">Issue Details</h2>

            {/* Issue Type */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-semibold text-gray-300">
                Issue Type <span className="text-[#FF4D2E]">*</span>
              </label>

              <select
                name="issueType"
                value={form.issueType}
                onChange={handleChange}
                required
                className="w-full border border-white/10 bg-[#0B0E11] px-4 py-3 text-sm text-white outline-none transition focus:border-[#FF4D2E]"
              >
                <option>Order Delay</option>
                <option>Payment Issue</option>
                <option>Wrong Package</option>
                <option>Popularity Not Received</option>
                <option>Order Cancellation</option>
                <option>Other Issue</option>
              </select>
            </div>

            {/* Order ID */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-semibold text-gray-300">
                Order ID <span className="text-gray-500">(Optional)</span>
              </label>

              <div className="relative">
                <FiShoppingBag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

                <input
                  type="text"
                  name="orderId"
                  value={form.orderId}
                  onChange={handleChange}
                  placeholder="Enter your order ID"
                  maxLength={80}
                  className="w-full border border-white/10 bg-[#0B0E11] py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#FF4D2E]"
                />
              </div>
            </div>

            {/* Payment Reference */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-semibold text-gray-300">
                Payment Reference
                <span className="text-gray-500"> (Optional)</span>
              </label>

              <div className="relative">
                <FiCreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

                <input
                  type="text"
                  name="paymentReference"
                  value={form.paymentReference}
                  onChange={handleChange}
                  placeholder="UPI / Transaction reference"
                  maxLength={100}
                  className="w-full border border-white/10 bg-[#0B0E11] py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#FF4D2E]"
                />
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-semibold text-gray-300">
                Describe Your Issue{" "}
                <span className="text-[#FF4D2E]">*</span>
              </label>

              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                required
                minLength={10}
                maxLength={1500}
                rows={6}
                placeholder="Please explain what happened..."
                className="w-full resize-y border border-white/10 bg-[#0B0E11] px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-gray-600 focus:border-[#FF4D2E]"
              />

              <p className="mt-2 text-right text-xs text-gray-500">
                {form.description.length}/1500
              </p>
            </div>

            {error && (
              <p role="alert" className="mb-5 text-sm text-red-400">
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 bg-[#FF4D2E] px-6 py-4 font-bold text-white transition hover:bg-[#e63f22]"
            >
              <FiSend className="text-lg" />
              Continue on Telegram
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-gray-500">
              Your report will open as a pre-filled Telegram message.
              You must press Send in Telegram to submit it.
            </p>
          </form>

          {/* Side Information */}
          <aside className="space-y-5">

            <div className="border border-[#FF4D2E]/30 bg-[#11161B] p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center bg-[#FF4D2E]/10 text-xl text-[#FF4D2E]">
                <FiSend />
              </div>

              <h3 className="text-lg font-bold">Telegram Support</h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Send your issue directly to our support username.
              </p>

              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-[#FF4D2E] hover:text-white"
              >
                @BGMI_PopWala
                <FiSend />
              </a>
            </div>

            <div className="border border-white/10 bg-[#11161B] p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center bg-[#FF4D2E]/10 text-xl text-[#FF4D2E]">
                <FiClock />
              </div>

              <h3 className="font-bold">What Happens Next?</h3>

              <ul className="mt-4 space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="mt-0.5 shrink-0 text-[#FF4D2E]" />
                  Fill in your issue details.
                </li>

                <li className="flex items-start gap-3">
                  <FiCheckCircle className="mt-0.5 shrink-0 text-[#FF4D2E]" />
                  Continue to Telegram.
                </li>

                <li className="flex items-start gap-3">
                  <FiCheckCircle className="mt-0.5 shrink-0 text-[#FF4D2E]" />
                  Press Send to submit your report.
                </li>
              </ul>
            </div>

            <div className="border border-white/10 bg-[#11161B] p-6">
              <FiShield className="mb-4 text-2xl text-[#FF4D2E]" />

              <h3 className="font-bold">Account Safety</h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Never share your password, OTP, recovery code or
                account login credentials.
              </p>
            </div>
          </aside>
        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} PopWala. All rights reserved.
        </div>
      </div>
    </main>
  );
};

export default ReportIssue;
