import PageHeader from "./PageHeader";
import Footer from "./Footer";
import Cta from "./Cta";

export default function InnerPageLayout({ title, description, children }) {
  return (
    <>
      <PageHeader title={title} description={description} />
      
      <section className="container" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", fontSize: "16px", color: "#555", lineHeight: "1.8" }}>
          {children}
        </div>
      </section>

      <Cta />
      <Footer />
    </>
  );
}
