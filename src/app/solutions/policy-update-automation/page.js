import InnerPageLayout from "@/components/InnerPageLayout";

export default function PolicyUpdateAutomationPage() {
  return (
    <InnerPageLayout 
      title="Policy Update Automation" 
      description="Automate policy verifying, notifications, and updates to ensure continuous compliance."
    >
      <h2 style={{ fontSize: "28px", color: "#0A1E5C", marginBottom: "20px" }}>Overview</h2>
      <p style={{ marginBottom: "20px" }}>
        Staying compliant with constantly changing NHS regulations and internal protocols is challenging. Ovotech automates the distribution and tracking of policy updates, ensuring every staff member has read and acknowledged the latest procedures.
      </p>
      
      <h2 style={{ fontSize: "28px", color: "#0A1E5C", marginBottom: "20px" }}>Key Features</h2>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "40px" }}>
        <li style={{ marginBottom: "10px" }}>Centralized document repository with version control.</li>
        <li style={{ marginBottom: "10px" }}>Automated alerts for expiring policies or certifications.</li>
        <li style={{ marginBottom: "10px" }}>Read-receipt tracking and compliance reporting for CQC inspections.</li>
        <li style={{ marginBottom: "10px" }}>Integration with national NHS guideline databases.</li>
      </ul>
    </InnerPageLayout>
  );
}
