import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Contact Us & Book a Demo" 
        description="Ready to transform your administrative workflows? Get in touch with our team today." 
      />
      
      <section className="container" style={{ padding: "80px 24px" }}>
        <div style={{ display: "flex", gap: "60px", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 400px" }}>
            <h2 style={{ fontSize: "32px", color: "#0A1838", marginBottom: "20px" }}>Get in Touch</h2>
            <p style={{ color: "#475569", marginBottom: "40px", lineHeight: "1.6" }}>
              Fill out the form to schedule a personalized demo of the Ovotech platform. Our experts will show you exactly how our automation can save your practice time and money.
            </p>
            
            <div style={{ marginBottom: "24px" }}>
              <h4 style={{ fontSize: "16px", color: "#0A1838", marginBottom: "8px" }}>Phone</h4>
              <p style={{ color: "#475569" }}>0161 820 1123</p>
            </div>
            
            <div style={{ marginBottom: "24px" }}>
              <h4 style={{ fontSize: "16px", color: "#0A1838", marginBottom: "8px" }}>Email</h4>
              <p style={{ color: "#475569" }}>ovotech.services@nhs.net</p>
            </div>
            
            <div>
              <h4 style={{ fontSize: "16px", color: "#0A1838", marginBottom: "8px" }}>Office</h4>
              <p style={{ color: "#475569", lineHeight: "1.6" }}>
                Tameside Business Park<br />
                Manchester, UK M34 3QS
              </p>
            </div>
          </div>
          
          <div style={{ flex: "1 1 400px", background: "#F4F7FC", padding: "40px", borderRadius: "16px", border: "1px solid #E0E8F5" }}>
            <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "600", color: "#0A1838" }}>Full Name</label>
                <input type="text" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #E0E8F5", background: "#fff" }} placeholder="Dr. Jane Doe" />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "600", color: "#0A1838" }}>Practice Name</label>
                <input type="text" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #E0E8F5", background: "#fff" }} placeholder="City Medical Centre" />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "600", color: "#0A1838" }}>Email Address</label>
                <input type="email" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #E0E8F5", background: "#fff" }} placeholder="jane@example.com" />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "600", color: "#0A1838" }}>Message (Optional)</label>
                <textarea rows="4" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #E0E8F5", background: "#fff" }} placeholder="How can we help?"></textarea>
              </div>
              <button type="button" style={{ justifyContent: "center", width: "100%", marginTop: "10px", background: "#00A8E8", color: "#fff", padding: "14px", borderRadius: "12px", border: "none", fontWeight: 700, cursor: "pointer" }}>
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
