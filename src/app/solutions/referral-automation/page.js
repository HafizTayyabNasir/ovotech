import InnerPageLayout from "@/components/InnerPageLayout";

export default function ReferralAutomationPage() {
  return (
    <InnerPageLayout 
      title="Referral Automation" 
      description="Automate incoming referrals, triage, and smart routing communications to specialist departments."
    >
      <h2 style={{ fontSize: "28px", color: "#0A1E5C", marginBottom: "20px" }}>Overview</h2>
      <p style={{ marginBottom: "20px" }}>
        Managing incoming and outgoing patient referrals involves complex coordination. Ovotech's Referral Automation module reads, parses, and routes referral documents accurately, eliminating manual data entry and reducing delays in patient care pathways.
      </p>
      
      <h2 style={{ fontSize: "28px", color: "#0A1E5C", marginBottom: "20px" }}>Key Features</h2>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "40px" }}>
        <li style={{ marginBottom: "10px" }}>AI-driven extraction of patient data from referral letters.</li>
        <li style={{ marginBottom: "10px" }}>Automated clinical coding assistance.</li>
        <li style={{ marginBottom: "10px" }}>Smart routing based on urgency and department capacity.</li>
        <li style={{ marginBottom: "10px" }}>Real-time dashboard for tracking referral status.</li>
      </ul>
    </InnerPageLayout>
  );
}
