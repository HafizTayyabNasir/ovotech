import PageHeader from "@/components/PageHeader";
import Trusted from "@/components/Trusted";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader 
        title="Case Studies & Success Stories" 
        description="See how healthcare providers are transforming their operations and saving thousands of hours with Ovotech." 
      />
      
      {/* Reuse the Trusted component which has case studies and stats */}
      <div style={{ paddingTop: "40px" }}>
        <Trusted />
      </div>

      <Cta />
      <Footer />
    </>
  );
}
