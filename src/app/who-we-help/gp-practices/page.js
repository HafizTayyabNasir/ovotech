import InnerPageLayout from "@/components/InnerPageLayout";

export default function GPPracticesPage() {
  return (
    <InnerPageLayout 
      title="Workflow Platform for GP Practices" 
      description="Clinical document processing and coding workflow solutions designed specifically for UK GP practices."
    >
      <h2 style={{ fontSize: "28px", color: "#0A1838", marginBottom: "20px" }}>The Challenge</h2>
      <p style={{ marginBottom: "20px", color: "#475569" }}>
        UK GP practices face heavy correspondence volumes. Administrative coders and clinicians spend hours reading hospital letters, switching between screens, looking up SNOMED CT codes, and entering details into patient records—creating processing backlogs and operational strain.
      </p>
      
      <h2 style={{ fontSize: "28px", color: "#0A1838", marginBottom: "20px" }}>How Ovotech Helps</h2>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "40px", color: "#475569" }}>
        <li style={{ marginBottom: "10px" }}><strong style={{ color: "#0A1838" }}>Structured Review Queue:</strong> Centralized visibility over incoming document status, urgency, and practice workload.</li>
        <li style={{ marginBottom: "10px" }}><strong style={{ color: "#0A1838" }}>Clinical Review Workspace:</strong> Unified single-screen view displaying original document, extracted facts, and suggested SNOMED CT terms.</li>
        <li style={{ marginBottom: "10px" }}><strong style={{ color: "#0A1838" }}>Patient History Context:</strong> Displays relevant medical history side-by-side to verify coding appropriateness.</li>
        <li style={{ marginBottom: "10px" }}><strong style={{ color: "#0A1838" }}>EMIS Web Write-Back:</strong> Authorized reviewers verify and approve details with structured write-back to EMIS Web patient records.</li>
      </ul>
    </InnerPageLayout>
  );
}
