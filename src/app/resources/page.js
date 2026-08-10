import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import Link from "next/link";

export default function ResourcesPage() {
  return (
    <>
      <PageHeader 
        title="Resources & Insights" 
        description="Latest news, product updates, and insights on healthcare automation." 
      />
      
      <section className="container" style={{ padding: "80px 24px" }}>
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", color: "#0A1E5C", marginBottom: "20px" }}>Resource Center</h2>
          <p style={{ color: "#666", marginBottom: "40px" }}>
            Explore our knowledge base to learn more about how RPA and AI are shaping the future of healthcare.
          </p>
          
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/blog" className="btn btn-primary">Visit Our Blog</Link>
            <Link href="/help-centre" className="btn btn-outline dark">Help Centre</Link>
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </>
  );
}
