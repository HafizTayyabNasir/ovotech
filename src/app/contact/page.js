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
            <h2 style={{ fontSize: "32px", color: "#0A1E5C", marginBottom: "20px" }}>Get in Touch</h2>
            <p style={{ color: "#666", marginBottom: "40px", lineHeight: "1.6" }}>
              Fill out the form to schedule a personalized demo of the Ovotech platform. Our experts will show you exactly how our automation can save your practice time and money.
            </p>
            
            <div style={{ marginBottom: "24px" }}>
              <h4 style={{ fontSize: "16px", color: "#0A1E5C", marginBottom: "8px" }}>Phone</h4>
              <p style={{ color: "#555" }}>0161 820 1123</p>
            </div>
            
            <div style={{ marginBottom: "24px" }}>
              <h4 style={{ fontSize: "16px", color: "#0A1E5C", marginBottom: "8px" }}>Email</h4>
              <p style={{ color: "#555" }}>ovotech.services@nhs.net</p>
            </div>
            
            <div>
              <h4 style={{ fontSize: "16px", color: "#0A1E5C", marginBottom: "8px" }}>Office</h4>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Tameside Business Park<br />
                Manchester, UK M34 3QS
              </p>
            </div>
          </div>
          
          <div style={{ flex: "1 1 400px", background: "#f8faff", padding: "40px", borderRadius: "16px", border: "1px solid #e8edfb" }}>
            <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "600", color: "#333" }}>Full Name</label>
                <input type="text" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #ddd" }} placeholder="Dr. Jane Doe" />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "600", color: "#333" }}>Practice Name</label>
                <input type="text" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #ddd" }} placeholder="City Medical Centre" />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "600", color: "#333" }}>Email Address</label>
                <input type="email" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #ddd" }} placeholder="jane@example.com" />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "600", color: "#333" }}>Message (Optional)</label>
                <textarea rows="4" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #ddd" }} placeholder="How can we help?"></textarea>
              </div>
              <button type="button" className="btn btn-primary" style={{ justifyContent: "center", width: "100%", marginTop: "10px" }}>
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
