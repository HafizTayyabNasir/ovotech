import InnerPageLayout from "@/components/InnerPageLayout";

export default function HelpCentrePage() {
  return (
    <InnerPageLayout 
      title="Help Centre" 
      description="Find answers to common questions, technical documentation, and support resources."
    >
      <div style={{ display: "flex", gap: "20px", marginBottom: "40px" }}>
        <input 
          type="text" 
          placeholder="Search for articles, guides, or FAQs..." 
          style={{ flex: 1, padding: "16px", borderRadius: "12px", border: "1px solid #E0E8F5", fontSize: "16px", outline: "none" }}
        />
        <button style={{ background: "#02ACEA", color: "#fff", padding: "16px 28px", borderRadius: "12px", border: "none", fontWeight: 700, cursor: "pointer" }}>Search</button>
      </div>

      <h2 style={{ fontSize: "24px", color: "#0A1838", marginBottom: "20px" }}>Popular Categories</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        <div style={{ padding: "24px", border: "1px solid #E0E8F5", borderRadius: "16px", background: "#F4F7FC" }}>
          <h3 style={{ fontSize: "18px", color: "#0A1838", marginBottom: "10px" }}>Getting Started</h3>
          <p style={{ fontSize: "14px", color: "#64748B" }}>Guides for onboarding and initial setup.</p>
        </div>
        <div style={{ padding: "24px", border: "1px solid #E0E8F5", borderRadius: "16px", background: "#F4F7FC" }}>
          <h3 style={{ fontSize: "18px", color: "#0A1838", marginBottom: "10px" }}>Integration Guides</h3>
          <p style={{ fontSize: "14px", color: "#64748B" }}>How to connect with EMIS, SystmOne, and others.</p>
        </div>
        <div style={{ padding: "24px", border: "1px solid #E0E8F5", borderRadius: "16px", background: "#F4F7FC" }}>
          <h3 style={{ fontSize: "18px", color: "#0A1838", marginBottom: "10px" }}>Troubleshooting</h3>
          <p style={{ fontSize: "14px", color: "#64748B" }}>Common issues and how to resolve them.</p>
        </div>
      </div>
    </InnerPageLayout>
  );
}
