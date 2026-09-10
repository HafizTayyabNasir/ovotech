import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About Ovotech" 
        description="We are on a mission to revolutionize healthcare administration through intelligent automation, giving medical professionals more time for what matters most — patient care." 
      />
      
      <section className="container" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", fontSize: "16px", color: "#475569", lineHeight: "1.8" }}>
          <h2 style={{ fontSize: "32px", color: "#0A1838", marginBottom: "24px" }}>Our Story</h2>
          <p style={{ marginBottom: "20px" }}>
            Founded in 2023, Ovotech was born from a simple observation: doctors and medical staff were spending too much time on paperwork and not enough time with patients. We realized that many of these repetitive tasks could be automated using modern AI and Robotic Process Automation (RPA) technologies.
          </p>
          <p style={{ marginBottom: "40px" }}>
            Today, we partner with GP practices, Primary Care Networks, and NHS Healthcare Providers across the UK to streamline their operations, reduce administrative burden, and ultimately improve the quality of patient care.
          </p>
          
          <h2 style={{ fontSize: "32px", color: "#0A1838", marginBottom: "24px" }}>Our Mission</h2>
          <p>
            To empower healthcare providers with cutting-edge automation solutions that eliminate manual admin work, reduce costs, and enhance the patient experience.
          </p>
        </div>
      </section>

      <Cta />
      <Footer />
    </>
  );
}
