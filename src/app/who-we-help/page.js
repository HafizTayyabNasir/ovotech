import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import Link from "next/link";

export default function WhoWeHelpPage() {
  return (
    <>
      <PageHeader 
        title="Who We Help" 
        description="Ovotech provides tailored automation solutions for various healthcare organizations across the UK." 
      />
      
      <section className="container" style={{ padding: "80px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
          
          <div style={{ padding: "40px", border: "1px solid #e8edfb", borderRadius: "16px", background: "#f8faff" }}>
            <h3 style={{ fontSize: "24px", color: "#0A1E5C", marginBottom: "16px" }}>GP Practices</h3>
            <p style={{ color: "#666", marginBottom: "24px", lineHeight: "1.6" }}>
              Streamline daily operations, manage patient flow, and reduce the burden on your administrative staff with our specialized GP automation suite.
            </p>
            <Link href="/who-we-help/gp-practices" style={{ color: "#42B1E5", fontWeight: "600" }}>Learn more &rarr;</Link>
          </div>

          <div style={{ padding: "40px", border: "1px solid #e8edfb", borderRadius: "16px", background: "#f8faff" }}>
            <h3 style={{ fontSize: "24px", color: "#0A1E5C", marginBottom: "16px" }}>Primary Care Networks</h3>
            <p style={{ color: "#666", marginBottom: "24px", lineHeight: "1.6" }}>
              Scale your operations efficiently across multiple practices. Standardize processes and improve data visibility across your entire network.
            </p>
            <Link href="/who-we-help/primary-care-networks" style={{ color: "#42B1E5", fontWeight: "600" }}>Learn more &rarr;</Link>
          </div>

          <div style={{ padding: "40px", border: "1px solid #e8edfb", borderRadius: "16px", background: "#f8faff" }}>
            <h3 style={{ fontSize: "24px", color: "#0A1E5C", marginBottom: "16px" }}>NHS Providers</h3>
            <p style={{ color: "#666", marginBottom: "24px", lineHeight: "1.6" }}>
              Enterprise-grade automation solutions that meet strict NHS security and compliance standards, designed for large-scale healthcare delivery.
            </p>
            <Link href="/who-we-help/nhs-providers" style={{ color: "#42B1E5", fontWeight: "600" }}>Learn more &rarr;</Link>
          </div>

        </div>
      </section>

      <Cta />
      <Footer />
    </>
  );
}
