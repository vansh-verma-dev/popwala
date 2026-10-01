import Footer from "../components/footer";
import Navbar from "../components/navbar";
function PrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      body: "When you place an order, we collect your BGMI game ID, contact details (email or Telegram handle), and payment information needed to process your purchase. We do not collect your game account password or OTP at any point.",
    },
    {
      title: "How We Use Your Information",
      body: "Your game ID is used solely to credit the purchased popularity to the correct account. Contact details are used to send order updates and respond to support requests. We do not sell or rent your data to third parties.",
    },
    {
      title: "Payment Security",
      body: "All payments are processed through trusted third-party payment gateways. We do not store your card, UPI, or banking credentials on our servers.",
    },
    {
      title: "Data Retention",
      body: "Order records are retained only as long as necessary for support, refunds, and legal compliance. You can request deletion of your data by contacting our support team.",
    },
    {
      title: "Cookies",
      body: "Our website may use basic cookies to remember your cart and preferences. These do not track you across other websites.",
    },
    {
      title: "Third-Party Links",
      body: "Our site may link to external platforms such as Telegram or Instagram. We are not responsible for the privacy practices of those platforms.",
    },
    {
      title: "Changes to This Policy",
      body: "We may update this policy from time to time. Continued use of our service after changes means you accept the updated terms.",
    },
    {
      title: "Contact Us",
      body: "For any privacy-related questions, reach out to us via Telegram support linked in the footer.",
    },
  ];

  return (
  <>
  <Navbar/>
  <section id="privacy" className="w-full bg-[#0B0E11] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-2xl font-black uppercase italic tracking-tight text-white sm:text-3xl">
            Privacy <span className="text-[#FF4D2E]">Policy</span>
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-5">
          {sections.map((s, i) => (
            <div
              key={s.title}
              className="border border-white/10 bg-[#14181D] p-5"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)",
              }}
            >
              <h2 className="mb-2 flex items-center gap-2 text-sm font-bold text-white sm:text-base">
                <span className="font-mono text-xs text-[#FF4D2E]">
                  0{i + 1}
                </span>
                {s.title}
              </h2>
              <p className="text-sm leading-relaxed text-gray-400">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  <Footer/>
  </>
  );
}

export default PrivacyPolicy;