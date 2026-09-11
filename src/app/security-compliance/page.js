import InnerPageLayout from "@/components/InnerPageLayout";

export default function SecurityCompliancePage() {
  return (
    <InnerPageLayout 
      title="Security & Compliance" 
      description="Ovotech adheres to UK primary care information governance, security, and data protection standards."
    >
      <h2 style={{ fontSize: "28px", color: "#0A1838", marginBottom: "20px" }}>DSPT &amp; DTAC Compliance</h2>
      <p style={{ marginBottom: "20px", color: "#475569" }}>
        Ovotech maintains full compliance with the NHS Data Security and Protection Toolkit (DSPT) standards and is evaluated under the Digital Technology Assessment Criteria (DTAC) to ensure enterprise-grade security and information governance for UK GP practices.
      </p>
      
      <h2 style={{ fontSize: "28px", color: "#0A1838", marginBottom: "20px" }}>ISO 27001 &amp; Cyber Essentials</h2>
      <p style={{ marginBottom: "20px", color: "#475569" }}>
        Our infrastructure operates under ISO 27001 certified Information Security Management processes and Cyber Essentials standards, ensuring patient data is encrypted both in transit and at rest with strict role-based access controls.
      </p>

      <h2 style={{ fontSize: "28px", color: "#0A1838", marginBottom: "20px" }}>UK GDPR &amp; Clinical Governance</h2>
      <p style={{ marginBottom: "20px", color: "#475569" }}>
        All clinical correspondence processing complies with UK GDPR and the Data Protection Act 2018. Designed around assisted workflows, Ovotech maintains full reviewer auditability and clinician sign-off prior to EMIS Web record entry.
      </p>
    </InnerPageLayout>
  );
}
