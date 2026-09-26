import { FaTelegramPlane, FaInstagram, FaGamepad } from "react-icons/fa";

const clipCorner = {
  clipPath:
    "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)",
};

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B0E11] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center bg-[#FF4D2E] text-lg font-black italic text-white"
                style={clipCorner}
              >
                P
              </div>

              <div>
                <h2 className="text-xl font-black italic tracking-tight">
                  Pop<span className="text-[#FF4D2E]">Wala</span>
                </h2>
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-gray-500">
                  Gaming Service
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-6 text-gray-500">
              Your simple destination for BGMI popularity services. Choose
              your package and connect with us on Telegram to place your
              order.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://t.me/PopWala"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                style={clipCorner}
                className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/5 text-gray-400 transition hover:border-[#FF4D2E]/60 hover:text-[#FF4D2E]"
              >
                <FaTelegramPlane size={16} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                style={clipCorner}
                className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/5 text-gray-400 transition hover:border-[#FF4D2E]/60 hover:text-[#FF4D2E]"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-white">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Packages", href: "#packages" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-gray-500 transition hover:text-[#FF4D2E]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-white">
              Support
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { label: "Telegram Support", href: "https://t.me/PopWala", external: true },
                { label: "Contact Us", href: "#contact" },
                { label: "Privacy Policy", href: "#privacy" },
                { label: "Terms & Conditions", href: "#terms" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="w-fit text-sm text-gray-500 transition hover:text-[#FF4D2E]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Order CTA */}
        <div
          className="mt-12 flex flex-col items-start justify-between gap-5 border border-[#FF4D2E]/30 bg-[#14181D] p-6 sm:flex-row sm:items-center"
          style={clipCorner}
        >
          <div className="flex items-center gap-4">
            <div
              className="flex h-11 w-11 items-center justify-center border border-[#FF4D2E]/40 bg-[#FF4D2E]/10 text-[#FF4D2E]"
              style={clipCorner}
            >
              <FaGamepad size={19} />
            </div>

            <div>
              <h3 className="font-bold text-white">Ready to order?</h3>
              <p className="text-sm text-gray-500">
                Connect with us on Telegram.
              </p>
            </div>
          </div>

          <a
            href="https://t.me/BGMI_PopWala"
            target="_blank"
            rel="noopener noreferrer"
            style={clipCorner}
            className="inline-flex items-center gap-2 border border-[#FF4D2E] bg-[#FF4D2E] px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-transparent hover:text-[#FF4D2E]"
          >
            <FaTelegramPlane size={16} />
            Order on Telegram
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} PopWala. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Independent gaming service • Not affiliated with any game
            publisher.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;