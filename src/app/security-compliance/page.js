import InnerPageLayout from "@/components/InnerPageLayout";

export default function SecurityCompliancePage() {
  return (
    <InnerPageLayout 
      title="Security & Compliance" 
      description="We take data security seriously. Ovotech is built to meet and exceed NHS standards."
    >
      <h2 style={{ fontSize: "28px", color: "#0A1838", marginBottom: "20px" }}>NHS Accredited & DSPT Compliant</h2>
      <p style={{ marginBottom: "20px", color: "#475569" }}>
        Ovotech is fully compliant with the NHS Data Security and Protection Toolkit (DSPT). We understand the critical nature of patient data and have implemented robust security measures at every layer of our infrastructure.
      </p>
      
      <h2 style={{ fontSize: "28px", color: "#0A1838", marginBottom: "20px" }}>GDPR Compliance</h2>
      <p style={{ marginBottom: "20px", color: "#475569" }}>
        We process all data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. Our systems are designed with privacy-by-design principles, ensuring data is encrypted both in transit and at rest.
      </p>

      <h2 style={{ fontSize: "28px", color: "#0A1838", marginBottom: "20px" }}>Clinical Safety</h2>
      <p style={{ marginBottom: "20px", color: "#475569" }}>
        Our software development lifecycle adheres to DCB0129 standards for clinical risk management in the manufacture of health IT systems. We work closely with clinical safety officers to ensure our automation rules are safe and reliable.
      </p>
    </InnerPageLayout>
  );
}
