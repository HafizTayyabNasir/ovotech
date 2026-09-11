import PageHeader from "@/components/PageHeader";
import Trusted from "@/components/Trusted";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader 
        title="Practice Operational Impact" 
        description="Explore how Ovotech releases administrative capacity, speeds document turnaround, and maintains clinical record quality in UK GP practices." 
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
