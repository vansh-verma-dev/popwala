
import { useEffect, useState } from "react";
import { FiMenu, FiX, FiChevronDown, FiShield, FiFileText, FiRefreshCw, FiHeadphones, FiAlertCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Packages", href: "#packages" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

const MORE_LINKS = [
  { label: "Privacy Policy", path: "/PrivacyPolicy", icon: FiShield },
  { label: "Terms & Conditions", path: "/terms", icon: FiFileText },
  { label: "Refund Policy", path: "/RefundPolicy", icon: FiRefreshCw },
  { label: "Customer Support", path: "/CustomerSupport", icon: FiHeadphones },
  { label: "Report an Issue", path: "/ReportIssue", icon: FiAlertCircle },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full bg-[#0B0E11]/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled
          ? "border-b border-white/10 shadow-[0_2px_20px_rgba(0,0,0,0.4)]"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div
            className="flex h-10 w-10 items-center justify-center bg-[#FF4D2E] text-lg font-black italic text-white"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)",
            }}
          >
            P
          </div>

          <div className="leading-none">
            <h1 className="text-xl font-black italic tracking-tight text-white">
              Pop<span className="text-[#FF4D2E]">Wala</span>
            </h1>
            <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.25em] text-gray-500">
              Gaming Service
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-semibold uppercase tracking-wide text-gray-400 transition hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#FF4D2E] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}

          {/* More Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              onClick={() => setMoreOpen((prev) => !prev)}
              aria-expanded={moreOpen}
              className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-gray-400 transition hover:text-white"
            >
              More
              <FiChevronDown
                size={15}
                className={`transition-transform duration-300 ${
                  moreOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`absolute right-0 top-full w-64 pt-4 transition-all duration-200 ${
                moreOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
            >
              <div className="overflow-hidden border border-white/10 bg-[#11151B] p-2 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
                <div className="mb-2 border-b border-white/10 px-3 py-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF4D2E]">
                    Help & Information
                  </p>
                </div>

                {MORE_LINKS.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMoreOpen(false)}
                      className="group flex items-center gap-3 px-3 py-3 text-sm font-medium text-gray-400 transition hover:bg-white/5 hover:text-white"
                    >
                      <Icon
                        size={17}
                        className="text-gray-500 transition group-hover:text-[#FF4D2E]"
                      />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Order Now */}
          <a
            href="#packages"
            className="border border-[#FF4D2E] bg-[#FF4D2E] px-5 py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-transparent hover:text-[#FF4D2E] active:scale-95"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%)",
            }}
          >
            Order Now
          </a>
        </div>

        {/* Mobile Right Side */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center border border-white/10 bg-[#14181D] text-white transition hover:border-[#FF4D2E]/60 active:scale-95"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)",
            }}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-y-auto border-t bg-[#0B0E11] transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? "max-h-[85vh] border-white/10 opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="space-y-1 px-5 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block border-l-2 border-transparent px-4 py-3 text-sm font-semibold uppercase tracking-wide text-gray-400 transition hover:border-[#FF4D2E] hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}

          {/* Mobile More Selection */}
          <div className="border-t border-white/10 pt-2">
            <button
              onClick={() => setMobileMoreOpen((prev) => !prev)}
              className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold uppercase tracking-wide text-gray-400 transition hover:text-white"
              aria-expanded={mobileMoreOpen}
            >
              <span>Help & Information</span>
              <FiChevronDown
                className={`transition-transform duration-300 ${
                  mobileMoreOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ${
                mobileMoreOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                {MORE_LINKS.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => {
                        setIsOpen(false);
                        setMobileMoreOpen(false);
                      }}
                      className="flex items-center gap-3 border-l-2 border-transparent px-5 py-3 text-sm text-gray-400 transition hover:border-[#FF4D2E] hover:bg-white/5 hover:text-white"
                    >
                      <Icon size={16} className="text-[#FF4D2E]" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
