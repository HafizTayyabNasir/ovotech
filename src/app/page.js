import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsGrid from "../components/StatsGrid";
import Solutions from "../components/Solutions";
import InteractiveBenefits from "../components/InteractiveBenefits";
import FeatureHighlights from "../components/FeatureHighlights";
import InteractiveWorkflowShowcase from "../components/InteractiveWorkflowShowcase";
import ComplianceSection from "../components/ComplianceSection";
import BeforeAfter from "../components/BeforeAfter";
import Testimonials from "../components/Testimonials";
import Trusted from "../components/Trusted";
import TagsInfo from "../components/TagsInfo";
import SpecialtyChips from "../components/SpecialtyChips";
import FAQ from "../components/FAQ";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import FloatingElements from "../components/FloatingElements";
import ParticlesBackground from "../components/ParticlesBackground";

export default function Home() {
  return (
    <>
      {/* Global Fixed Particles Animation */}
      <div style={{ position: "fixed", inset: 0, zIndex: 9999, pointerEvents: "none" }}>
        <ParticlesBackground color="#02ACEA" />
      </div>

      <TopBar />
      <Navbar />
      <Hero />
      <StatsGrid />
      <Solutions />
      <InteractiveBenefits />
      <FeatureHighlights />
      <InteractiveWorkflowShowcase />
      <ComplianceSection />
      <BeforeAfter />
      <Testimonials />
      <Trusted />
      <TagsInfo />
      <SpecialtyChips />
      <FAQ />
      <Newsletter />
      <Footer />
      <FloatingElements />
    </>
  );
}
