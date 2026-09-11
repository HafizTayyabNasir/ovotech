import InnerPageLayout from "@/components/InnerPageLayout";

export default function PrimaryCareNetworksPage() {
  return (
    <InnerPageLayout 
      title="Workflow Solutions for PCNs" 
      description="Standardize clinical document processing and SNOMED CT coding workflows across member practices."
    >
      <h2 style={{ fontSize: "28px", color: "#0A1838", marginBottom: "20px" }}>The Challenge</h2>
      <p style={{ marginBottom: "20px", color: "#475569" }}>
        Primary Care Networks (PCNs) often struggle with coding variations across member surgeries, managing backlogs when shared admin staff are absent, and maintaining record quality standards across multiple practice sites.
      </p>
      
      <h2 style={{ fontSize: "28px", color: "#0A1838", marginBottom: "20px" }}>How Ovotech Helps</h2>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "40px", color: "#475569" }}>
        <li style={{ marginBottom: "10px" }}><strong style={{ color: "#0A1838" }}>Network Review Queues:</strong> Centralized workload management across member GP practices.</li>
        <li style={{ marginBottom: "10px" }}><strong style={{ color: "#0A1838" }}>Standardized SNOMED Coding:</strong> Uniform concept suggestions to eliminate coding variance between practices.</li>
        <li style={{ marginBottom: "10px" }}><strong style={{ color: "#0A1838" }}>Shared Capacity Resilience:</strong> Enable centralized practice coders to support multiple sites seamlessly.</li>
        <li style={{ marginBottom: "10px" }}><strong style={{ color: "#0A1838" }}>Structured EMIS Write-Back:</strong> Direct write-back to patient clinical records with reviewer approval audit trails.</li>
      </ul>
    </InnerPageLayout>
  );
}
