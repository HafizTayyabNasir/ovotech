import PageHeader from "@/components/PageHeader";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";

const detailedSteps = [
  {
    step: "01",
    title: "Document Intake & Ingestion",
    desc: "Incoming clinical correspondence (clinic letters, discharge summaries, diagnostic reports) enters the Ovotech workflow from hospital system feeds or document repositories.",
  },
  {
    step: "02",
    title: "Information Extraction & Parsing",
    desc: "The platform parses the document content to extract clinical entities, diagnoses, procedures, medications, and patient identification numbers.",
  },
  {
    step: "03",
    title: "Review Queue Placement",
    desc: "Incoming items enter a central Review Queue, giving practice teams complete visibility over document volume, processing status, and priority.",
  },
  {
    step: "04",
    title: "Clinical Review & Patient History",
    desc: "Opening a item loads the Clinical Review workspace, presenting original document, extracted facts, proposed SNOMED CT codes, and contextual Patient History side-by-side.",
  },
  {
    step: "05",
    title: "Human Approval & Verification",
    desc: "An authorised practice staff member or clinician checks extracted details and SNOMED codes, making any required amendments before final sign-off.",
  },
  {
    step: "06",
    title: "EMIS Web Record Write-Back",
    desc: "Upon final approval, Ovotech writes structured clinical data and SNOMED CT codes directly into the patient's record via EMIS Web clinical system integration.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader 
        title="How Ovotech Works" 
        description="An end-to-end, human-assisted clinical document processing workflow built specifically for UK GP practices." 
      />
      
      <div style={{ paddingTop: "20px" }}>
        <HowItWorks />
      </div>

      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#02ACEA", textTransform: "uppercase" }}>Step-by-Step Workflow</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 800, color: "#0A1838", marginTop: "8px" }}>The Core 6-Stage Document Processing Workflow</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "28px", maxWidth: "1000px", margin: "0 auto" }}>
            {detailedSteps.map((s) => (
              <div key={s.step} style={{ background: "#F4F7FC", padding: "32px", borderRadius: "20px", border: "1px solid #E0E8F5" }}>
                <span style={{ fontSize: "28px", fontWeight: 800, color: "#02ACEA", display: "block", marginBottom: "12px" }}>{s.step}</span>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#0A1838", marginBottom: "8px" }}>{s.title}</h3>
                <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </>
  );
}
