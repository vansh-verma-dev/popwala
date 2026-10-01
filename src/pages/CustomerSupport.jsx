
import React from "react";
import {
  FiSend,
  FiShoppingBag,
  FiCreditCard,
  FiAlertCircle,
  FiMessageCircle,
  FiShield,
  FiArrowUpRight,
  FiClock,
  FiCheckCircle,
  FiHeadphones
} from "react-icons/fi";
import { Link } from "react-router-dom";

const TELEGRAM_USERNAME = "BGMI_PopWala";
const TELEGRAM_LINK = `https://t.me/${TELEGRAM_USERNAME}`;

const supportOptions = [
  {
    icon: FiShoppingBag,
    title: "Order Support",
    description: "Order status, delivery updates ya order se related help.",
    message: "Hi PopWala, I need help with my order.",
  },
  {
    icon: FiCreditCard,
    title: "Payment Issue",
    description: "Payment successful hai lekin order update nahi hua?",
    message: "Hi PopWala, I need help with a payment issue.",
  },
  {
    icon: FiAlertCircle,
    title: "Report an Issue",
    description: "Service ya order mein koi problem hai? Humein batayein.",
    message: "Hi PopWala, I want to report an issue.",
  },
];

const CustomerSupport = () => {
  const openTelegram = (message = "Hi PopWala, I need customer support.") => {
    const url = `${TELEGRAM_LINK}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-[#0B0E11] text-white px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center gap-2 border border-[#FF4D2E]/30 bg-[#FF4D2E]/10 px-4 py-2 text-sm font-semibold text-[#FF4D2E]">
            <FiHeadphones />
            POPWALA SUPPORT
          </span>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            We're Here to{" "}
            <span className="text-[#FF4D2E]">Help You.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Order, payment ya kisi bhi issue ke liye humse Telegram par
            contact karein. Apni problem clearly explain karein.
          </p>
        </div>

        {/* Telegram Main Card */}
        <section className="relative mb-12 overflow-hidden border border-[#FF4D2E]/30 bg-[#11161B] p-7 sm:p-10">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#FF4D2E]/10 blur-3xl" />

          <div className="relative flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="text-center md:text-left">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center bg-[#FF4D2E] text-2xl">
                <FiSend />
              </div>

              <h2 className="text-2xl font-bold sm:text-3xl">
                Contact Us on Telegram
              </h2>

              <p className="mt-3 text-gray-400">
                Official support username
              </p>

              <p className="mt-2 text-xl font-bold text-[#FF4D2E]">
                @{TELEGRAM_USERNAME}
              </p>
            </div>

            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 bg-[#FF4D2E] px-7 py-4 font-bold text-white transition hover:bg-[#e63f22] sm:w-auto"
            >
              <FiSend className="text-xl" />
              Chat on Telegram
              <FiArrowUpRight />
            </a>
          </div>
        </section>

        {/* Support Options */}
        <div className="mb-5">
          <h2 className="text-2xl font-bold sm:text-3xl">
            How Can We Help?
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Select your issue to start a Telegram conversation.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {supportOptions.map((option, index) => {
            const Icon = option.icon;

            return (
              <div
                key={index}
                className="group border border-white/10 bg-[#11161B] p-6 transition hover:-translate-y-1 hover:border-[#FF4D2E]/50"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center bg-[#FF4D2E]/10 text-xl text-[#FF4D2E]">
                  <Icon />
                </div>

                <h3 className="text-lg font-bold">{option.title}</h3>

                <p className="mt-3 min-h-14 text-sm leading-6 text-gray-400">
                  {option.description}
                </p>

                <button
                  onClick={() => openTelegram(option.message)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#FF4D2E] transition hover:gap-3"
                >
                  Get Help <FiArrowUpRight />
                </button>
              </div>
            );
          })}
        </div>

        {/* Important Note */}
        <section className="mt-12 border border-white/10 bg-[#11161B] p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <FiShield className="mt-1 shrink-0 text-xl text-[#FF4D2E]" />

            <div>
              <h3 className="font-bold">Your Account Safety Matters</h3>

              <p className="mt-2 text-sm leading-7 text-gray-400">
                Apna BGMI password, OTP ya account login credentials kisi
                ke saath share na karein. Support ke liye sirf zaroori
                order details aur payment reference share karein.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="mb-6 text-2xl font-bold">Quick Help</h2>

          <div className="space-y-3">
            <details className="group border border-white/10 bg-[#11161B] p-5">
              <summary className="cursor-pointer list-none font-semibold">
                <span className="flex items-center justify-between">
                  How can I contact PopWala?
                  <span className="text-[#FF4D2E]">+</span>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-gray-400">
                Telegram par @Bgmipopwala ko message karein.
              </p>
            </details>

            <details className="group border border-white/10 bg-[#11161B] p-5">
              <summary className="cursor-pointer list-none font-semibold">
                <span className="flex items-center justify-between">
                  What details should I provide?
                  <span className="text-[#FF4D2E]">+</span>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-gray-400">
                Order reference, issue ka short description aur zaroorat
                padne par payment reference share karein. Password ya OTP
                kabhi share na karein.
              </p>
            </details>

            <details className="group border border-white/10 bg-[#11161B] p-5">
              <summary className="cursor-pointer list-none font-semibold">
                <span className="flex items-center justify-between">
                  Can I report a payment issue?
                  <span className="text-[#FF4D2E]">+</span>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-gray-400">
                Haan, Telegram par payment issue explain karein aur
                transaction reference provide karein.
              </p>
            </details>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <FiCheckCircle className="mx-auto mb-4 text-3xl text-[#FF4D2E]" />

          <h2 className="text-2xl font-bold">Still Need Help?</h2>

          <p className="mt-2 text-sm text-gray-400">
            PopWala support se Telegram par connect karein.
          </p>

          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-[#FF4D2E] px-7 py-3 font-bold transition hover:bg-[#e63f22]"
          >
            <FiMessageCircle />
            Message @Bgmipopwala
          </a>
        </div>

        {/* Footer Links */}
        <div className="mt-14 flex flex-wrap justify-center gap-5 border-t border-white/10 pt-6 text-sm text-gray-500">
          <Link className="transition hover:text-[#FF4D2E]" to="/privacy-policy">
            Privacy Policy
          </Link>

          <Link
            className="transition hover:text-[#FF4D2E]"
            to="/terms-and-conditions"
          >
            Terms & Conditions
          </Link>

          <Link
            className="transition hover:text-[#FF4D2E]"
            to="/refund-policy"
          >
            Refund Policy
          </Link>
        </div>
      </div>
    </main>
  );
};

export default CustomerSupport;
