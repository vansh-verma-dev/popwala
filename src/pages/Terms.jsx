import Footer from "../components/footer";
import Navbar from "../components/navbar";

function Terms() {
  const sections = [
    {
      title: "Service Overview",
      body: "PopWala provides BGMI popularity top-up services. By placing an order, you agree to the terms outlined on this page.",
    },
    {
      title: "Order Accuracy",
      body: "You are responsible for entering the correct game ID at checkout. We are not liable for popularity delivered to a wrong ID caused by incorrect information provided by you.",
    },
    {
      title: "Delivery Time",
      body: "Orders are typically delivered within 5-10 minutes of payment confirmation. In rare cases involving high demand or maintenance, delivery may take up to 24 hours.",
    },
    {
      title: "Refund Policy",
      body: "If your order is not delivered within 24 hours, you are eligible for a full refund. Refund requests must be raised through Telegram support with your order details.",
    },
    {
      title: "Prohibited Use",
      body: "Our service must not be used for fraudulent activity, chargebacks, or violation of the game publisher's terms of service. Accounts found misusing the service may be denied further orders.",
    },
    {
      title: "Pricing",
      body: "Prices are listed per package and may change without prior notice. The price shown at checkout is the final price for that order.",
    },
    {
      title: "Independent Service Disclaimer",
      body: "PopWala is an independent, third-party service and is not affiliated with, endorsed by, or officially connected to the publisher of BGMI/PUBG.",
    },
    {
      title: "Limitation of Liability",
      body: "We are not responsible for any indirect loss, account action taken by the game publisher, or service interruption beyond our reasonable control.",
    },
    {
      title: "Changes to Terms",
      body: "These terms may be updated periodically. Continued use of our service after updates constitutes acceptance of the revised terms.",
    },
    {
      title: "Contact",
      body: "For questions regarding these terms, please reach out via Telegram support linked in the footer.",
    },
  ];

  return (
  <>
  <Navbar/>
  <section id="terms" className="w-full bg-[#0B0E11] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-2xl font-black uppercase italic tracking-tight text-white sm:text-3xl">
            Terms & <span className="text-[#FF4D2E]">Conditions</span>
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
                  {i + 1 < 10 ? `0${i + 1}` : i + 1}
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

export default Terms;