import InnerPageLayout from "@/components/InnerPageLayout";

export default function PrimaryCareNetworksPage() {
  return (
    <InnerPageLayout 
      title="Automation for PCNs" 
      description="Scale your operations efficiently across multiple practices with network-wide automation."
    >
      <h2 style={{ fontSize: "28px", color: "#0A1E5C", marginBottom: "20px" }}>The Challenge</h2>
      <p style={{ marginBottom: "20px" }}>
        Primary Care Networks (PCNs) struggle with standardizing processes across different member practices, managing centralized ARRS (Additional Roles Reimbursement Scheme) staff, and reporting on network-wide targets like IIF.
      </p>
      
      <h2 style={{ fontSize: "28px", color: "#0A1E5C", marginBottom: "20px" }}>How Ovotech Helps</h2>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "40px" }}>
        <li style={{ marginBottom: "10px" }}><strong>Cross-Practice Workflows:</strong> Standardize referral pathways and patient communications across the entire network.</li>
        <li style={{ marginBottom: "10px" }}><strong>Centralized Triage:</strong> Route patients efficiently to the right ARRS professional, regardless of their registered practice.</li>
        <li style={{ marginBottom: "10px" }}><strong>Data Aggregation:</strong> Automated reporting on QOF and IIF targets across all member practices.</li>
        <li style={{ marginBottom: "10px" }}><strong>Scalable Infrastructure:</strong> Deploy automation rules once, apply them network-wide.</li>
      </ul>
    </InnerPageLayout>
  );
}
