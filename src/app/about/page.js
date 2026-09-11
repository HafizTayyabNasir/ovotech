import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About Ovotech" 
        description="Empowering UK GP practices with a clinical document processing and coding workflow platform designed to streamline correspondence and protect practice capacity." 
      />
      
      <section className="container" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", fontSize: "16px", color: "#475569", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "32px", color: "#0A1838", marginBottom: "24px" }}>Our Story</h2>
          <p style={{ marginBottom: "20px" }}>
            Ovotech was founded to address a critical challenge facing UK primary care: administrative coders and clinicians spending valuable hours manually reading hospital correspondence, navigating complex clinical systems, and searching for SNOMED CT codes.
          </p>
          <p style={{ marginBottom: "40px" }}>
            We designed Ovotech specifically around the clinical document lifecycle of UK GP practices—bringing document intake, entity extraction, review queues, clinical review, patient history context, and EMIS Web write-back together into one seamless, human-assisted workspace.
          </p>
          
          <h2 style={{ fontSize: "32px", color: "#0A1838", marginBottom: "24px" }}>Our Mission</h2>
          <p>
            To empower UK GP practices with structured, assisted clinical correspondence workflows that eliminate document backlogs, enhance coding accuracy, and keep human reviewers in control of every record entry.
          </p>
        </div>
      </section>

      <Cta />
      <Footer />
    </>
  );
}
