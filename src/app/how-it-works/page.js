import PageHeader from "@/components/PageHeader";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader 
        title="How It Works" 
        description="Implementing Ovotech is a seamless process designed to minimize disruption to your daily operations while maximizing efficiency." 
      />
      
      {/* Reuse the HowItWorks component from the homepage */}
      <div style={{ paddingTop: "20px" }}>
        <HowItWorks />
      </div>

      <Cta />
      <Footer />
    </>
  );
}
