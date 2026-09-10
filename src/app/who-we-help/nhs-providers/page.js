import InnerPageLayout from "@/components/InnerPageLayout";

export default function NHSProvidersPage() {
  return (
    <InnerPageLayout 
      title="Automation for NHS Providers" 
      description="Enterprise-grade automation solutions that meet strict NHS security and compliance standards."
    >
      <h2 style={{ fontSize: "28px", color: "#0A1838", marginBottom: "20px" }}>The Challenge</h2>
      <p style={{ marginBottom: "20px", color: "#475569" }}>
        Large NHS Trusts and healthcare providers handle massive volumes of data and complex patient pathways. Legacy systems, siloed departments, and extensive compliance requirements create significant bottlenecks.
      </p>
      
      <h2 style={{ fontSize: "28px", color: "#0A1838", marginBottom: "20px" }}>How Ovotech Helps</h2>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "40px", color: "#475569" }}>
        <li style={{ marginBottom: "10px" }}><strong style={{ color: "#0A1838" }}>High-Volume Processing:</strong> Enterprise RPA bots capable of handling thousands of transactions per minute.</li>
        <li style={{ marginBottom: "10px" }}><strong style={{ color: "#0A1838" }}>Interoperability:</strong> Connect disparate hospital systems (EPR, PAS, LIMS) without complex API development.</li>
        <li style={{ marginBottom: "10px" }}><strong style={{ color: "#0A1838" }}>Clinical Coding:</strong> AI-assisted coding to improve accuracy and optimize funding.</li>
        <li style={{ marginBottom: "10px" }}><strong style={{ color: "#0A1838" }}>Stringent Security:</strong> fully compliant with NHS Data Security and Protection Toolkit (DSPT) and DCB0129/0160.</li>
      </ul>
    </InnerPageLayout>
  );
}
