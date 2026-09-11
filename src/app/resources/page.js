import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import Link from "next/link";

export default function ResourcesPage() {
  return (
    <>
      <PageHeader 
        title="Resources & Insights" 
        description="Explore guides, clinical coding insights, and workflow resources for UK GP practices." 
      />
      
      <section className="container" style={{ padding: "80px 24px" }}>
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", color: "#0A1838", marginBottom: "20px" }}>Resource Center</h2>
          <p style={{ color: "#475569", marginBottom: "40px" }}>
            Explore our knowledge base to learn how clinical document processing, SNOMED CT coding, and EMIS Web write-back optimize practice workflows.
          </p>
          
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/blog" style={{ background: "#02ACEA", color: "#fff", padding: "14px 28px", borderRadius: "12px", fontWeight: 600, fontSize: "14px" }}>Visit Our Blog</Link>
            <Link href="/help-centre" style={{ background: "#0A1838", color: "#fff", padding: "14px 28px", borderRadius: "12px", fontWeight: 600, fontSize: "14px" }}>Help Centre</Link>
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </>
  );
}
