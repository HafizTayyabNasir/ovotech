import InnerPageLayout from "@/components/InnerPageLayout";

export default function NHSProvidersPage() {
  return (
    <InnerPageLayout 
      title="Clinical Correspondence Solutions for Primary Care" 
      description="Clinical document processing platforms engineered to meet strict UK information governance standards."
    >
      <h2 style={{ fontSize: "28px", color: "#0A1838", marginBottom: "20px" }}>The Challenge</h2>
      <p style={{ marginBottom: "20px", color: "#475569" }}>
        Primary care organizations and healthcare providers handle extensive clinical correspondence. Inconsistent document formatting, manual coding entry, and system fragmentation slow turnaround times and strain practice capacity.
      </p>
      
      <h2 style={{ fontSize: "28px", color: "#0A1838", marginBottom: "20px" }}>How Ovotech Helps</h2>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "40px", color: "#475569" }}>
        <li style={{ marginBottom: "10px" }}><strong style={{ color: "#0A1838" }}>Document Processing:</strong> Structured parsing of clinic letters, discharge summaries, and diagnostic correspondence.</li>
        <li style={{ marginBottom: "10px" }}><strong style={{ color: "#0A1838" }}>SNOMED CT Coding:</strong> Assisted concept recognition and code mapping to ensure uniform clinical coding standards.</li>
        <li style={{ marginBottom: "10px" }}><strong style={{ color: "#0A1838" }}>EMIS Web Write-Back:</strong> Direct structured write-back to patient records following reviewer verification.</li>
        <li style={{ marginBottom: "10px" }}><strong style={{ color: "#0A1838" }}>Confirmed Security:</strong> Fully compliant with DSPT, DTAC, ISO 27001, and Cyber Essentials.</li>
      </ul>
    </InnerPageLayout>
  );
}
