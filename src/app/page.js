import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import GuideVideoSection from "../components/GuideVideoSection";
import Solutions from "../components/Solutions";
import InteractiveBenefits from "../components/InteractiveBenefits";
import FeatureHighlights from "../components/FeatureHighlights";
import InteractiveWorkflowShowcase from "../components/InteractiveWorkflowShowcase";
import ComplianceSection from "../components/ComplianceSection";
import BeforeAfter from "../components/BeforeAfter";
import Testimonials from "../components/Testimonials";
import TagsInfo from "../components/TagsInfo";
import SpecialtyChips from "../components/SpecialtyChips";
import FAQ from "../components/FAQ";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import FloatingElements from "../components/FloatingElements";
export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <GuideVideoSection />
      <Solutions />
      <InteractiveBenefits />
      <FeatureHighlights />
      <InteractiveWorkflowShowcase />
      <ComplianceSection />
      <BeforeAfter />
      <Testimonials />
      <TagsInfo />
      <SpecialtyChips />
      <FAQ />
      <Newsletter />
      <Footer />
      <FloatingElements />
    </>
  );
}
