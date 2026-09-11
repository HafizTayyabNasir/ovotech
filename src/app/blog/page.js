import InnerPageLayout from "@/components/InnerPageLayout";
import Link from "next/link";

export default function BlogPage() {
  return (
    <InnerPageLayout 
      title="Ovotech Blog" 
      description="Insights, updates, and news from the forefront of healthcare automation."
    >
      <div style={{ display: "grid", gap: "40px" }}>
        
        <article style={{ borderBottom: "1px solid #E0E8F5", paddingBottom: "30px" }}>
          <span style={{ fontSize: "12px", color: "#02ACEA", fontWeight: "700", textTransform: "uppercase" }}>Clinical Coding</span>
          <h2 style={{ fontSize: "28px", color: "#0A1838", margin: "10px 0" }}>Standardising SNOMED CT Concept Mapping in Primary Care</h2>
          <p style={{ color: "#64748B", marginBottom: "16px" }}>How assisted clinical entity recognition helps UK GP practices achieve uniform SNOMED CT coding across hospital correspondence.</p>
          <Link href="/solutions" style={{ color: "#02ACEA", fontWeight: "600", fontSize: "14px" }}>Read Article &rarr;</Link>
        </article>

        <article style={{ borderBottom: "1px solid #E0E8F5", paddingBottom: "30px" }}>
          <span style={{ fontSize: "12px", color: "#02ACEA", fontWeight: "700", textTransform: "uppercase" }}>Workflow Feature</span>
          <h2 style={{ fontSize: "28px", color: "#0A1838", margin: "10px 0" }}>Optimising Practice Correspondence with Review Queues</h2>
          <p style={{ color: "#64748B", marginBottom: "16px" }}>Explore how structured Review Queues give practice teams complete visibility over document intake and pending clinical reviews.</p>
          <Link href="/solutions#review-queue" style={{ color: "#02ACEA", fontWeight: "600", fontSize: "14px" }}>Read Article &rarr;</Link>
        </article>

        <article>
          <span style={{ fontSize: "12px", color: "#02ACEA", fontWeight: "700", textTransform: "uppercase" }}>Clinical Governance</span>
          <h2 style={{ fontSize: "28px", color: "#0A1838", margin: "10px 0" }}>Human Review Centrality in EMIS Web Write-Back</h2>
          <p style={{ color: "#64748B", marginBottom: "16px" }}>Why mandatory clinician and coder verification protects data integrity and patient safety during clinical record commit.</p>
          <Link href="/how-it-works" style={{ color: "#02ACEA", fontWeight: "600", fontSize: "14px" }}>Read Article &rarr;</Link>
        </article>

      </div>
    </InnerPageLayout>
  );
}
