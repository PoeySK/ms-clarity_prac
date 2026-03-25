import { useState } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import DashboardPreviewSection from "./components/sections/DashboardPreviewSection";
import DemoModal from "./components/sections/DemoModal";
import FaqSection from "./components/sections/FaqSection";
import FinalCtaSection from "./components/sections/FinalCtaSection";
import HeroSection from "./components/sections/HeroSection";
import InteractiveSection from "./components/sections/InteractiveSection";
import LeadFormSection from "./components/sections/LeadFormSection";
import ScrollAndPricingSection from "./components/sections/ScrollAndPricingSection";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header onOpenDemo={() => setShowModal(true)} />

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2">
          <HeroSection onOpenDemo={() => setShowModal(true)} />
          <DashboardPreviewSection />
        </section>

        <InteractiveSection />
        <ScrollAndPricingSection />
        <FaqSection />
        <LeadFormSection />
        <FinalCtaSection />
      </main>

      <Footer />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 rounded-full border border-blue-700 bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-700"
      >
        ↑ TOP
      </button>

      <DemoModal open={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
