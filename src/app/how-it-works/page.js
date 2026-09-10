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
    desc: "The platform reads and processes the incoming document to automatically extract key clinical entities, diagnoses, procedures, medications, and patient identification numbers.",
  },
  {
    step: "03",
    title: "Review Queue Placement",
    desc: "Documents requiring action are organized into a central Review Queue, allowing practice teams to see pending document volume, processing status, and urgency.",
  },
  {
    step: "04",
    title: "Clinical Review Workspace Access",
    desc: "Opening a document loads the Clinical Review workspace, presenting the original document side-by-side with extracted clinical entities and proposed actions.",
  },
  {
    step: "05",
    title: "Patient History Contextualization",
    desc: "Relevant patient medical history and current active conditions are displayed alongside the document so the reviewer has complete context.",
  },
  {
    step: "06",
    title: "SNOMED CT Code Suggestion",
    desc: "Ovotech maps identified clinical concepts to standard UK SNOMED CT terms and presents suggested codes for reviewer verification.",
  },
  {
    step: "07",
    title: "Human Review & Verification",
    desc: "An authorised practice staff member or clinician checks the extracted details and SNOMED codes, making any required amendments before final sign-off.",
  },
  {
    step: "08",
    title: "Clinical Record Write-Back (EMIS Web)",
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
            <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 800, color: "#0A1838", marginTop: "8px" }}>The 8-Stage Document Processing Workflow</h2>
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
