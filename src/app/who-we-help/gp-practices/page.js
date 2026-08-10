import InnerPageLayout from "@/components/InnerPageLayout";

export default function GPPracticesPage() {
  return (
    <InnerPageLayout 
      title="Automation for GP Practices" 
      description="Tailored RPA and AI solutions designed specifically for the unique workflows of local GP surgeries."
    >
      <h2 style={{ fontSize: "28px", color: "#0A1E5C", marginBottom: "20px" }}>The Challenge</h2>
      <p style={{ marginBottom: "20px" }}>
        GP practices are facing unprecedented demand, while administrative burdens continue to grow. Staff spend hours on repetitive tasks like processing repeat prescriptions, managing referrals, and handling patient queries, taking time away from direct patient care.
      </p>
      
      <h2 style={{ fontSize: "28px", color: "#0A1E5C", marginBottom: "20px" }}>How Ovotech Helps</h2>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "40px" }}>
        <li style={{ marginBottom: "10px" }}><strong>Reduce Admin Workload:</strong> Automate up to 70% of routine paperwork.</li>
        <li style={{ marginBottom: "10px" }}><strong>Improve Patient Access:</strong> Digital triage and automated booking systems reduce phone queue wait times.</li>
        <li style={{ marginBottom: "10px" }}><strong>Staff Retention:</strong> Remove the tedious tasks that lead to staff burnout.</li>
        <li style={{ marginBottom: "10px" }}><strong>Seamless Integration:</strong> Works quietly in the background with EMIS Web, SystmOne, and Vision.</li>
      </ul>
    </InnerPageLayout>
  );
}
