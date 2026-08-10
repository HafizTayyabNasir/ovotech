import InnerPageLayout from "@/components/InnerPageLayout";

export default function PrescriptionAutomationPage() {
  return (
    <InnerPageLayout 
      title="Prescription Automation" 
      description="Automate repeat prescriptions, reduce manual effort, and ensure 100% accuracy in processing."
    >
      <h2 style={{ fontSize: "28px", color: "#0A1E5C", marginBottom: "20px" }}>Overview</h2>
      <p style={{ marginBottom: "20px" }}>
        Handling repeat prescriptions is one of the most time-consuming tasks for GP practices. Our RPA bots seamlessly integrate with your existing clinical systems (like EMIS or SystmOne) to automatically process these requests.
      </p>
      
      <h2 style={{ fontSize: "28px", color: "#0A1E5C", marginBottom: "20px" }}>Key Features</h2>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "40px" }}>
        <li style={{ marginBottom: "10px" }}>Automatic validation of patient details and medication history.</li>
        <li style={{ marginBottom: "10px" }}>Smart flagging of requests that require GP review.</li>
        <li style={{ marginBottom: "10px" }}>Direct integration with pharmacy systems for electronic routing.</li>
        <li style={{ marginBottom: "10px" }}>Automated SMS notifications to patients when prescriptions are ready.</li>
      </ul>
    </InnerPageLayout>
  );
}
