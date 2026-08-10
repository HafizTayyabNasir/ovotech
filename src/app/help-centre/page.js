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
          style={{ flex: 1, padding: "16px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "16px" }}
        />
        <button className="btn btn-primary">Search</button>
      </div>

      <h2 style={{ fontSize: "24px", color: "#0A1E5C", marginBottom: "20px" }}>Popular Categories</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        <div style={{ padding: "24px", border: "1px solid #eee", borderRadius: "8px", background: "#f8faff" }}>
          <h3 style={{ fontSize: "18px", color: "#0A1E5C", marginBottom: "10px" }}>Getting Started</h3>
          <p style={{ fontSize: "14px", color: "#666" }}>Guides for onboarding and initial setup.</p>
        </div>
        <div style={{ padding: "24px", border: "1px solid #eee", borderRadius: "8px", background: "#f8faff" }}>
          <h3 style={{ fontSize: "18px", color: "#0A1E5C", marginBottom: "10px" }}>Integration Guides</h3>
          <p style={{ fontSize: "14px", color: "#666" }}>How to connect with EMIS, SystmOne, and others.</p>
        </div>
        <div style={{ padding: "24px", border: "1px solid #eee", borderRadius: "8px", background: "#f8faff" }}>
          <h3 style={{ fontSize: "18px", color: "#0A1E5C", marginBottom: "10px" }}>Troubleshooting</h3>
          <p style={{ fontSize: "14px", color: "#666" }}>Common issues and how to resolve them.</p>
        </div>
      </div>
    </InnerPageLayout>
  );
}
