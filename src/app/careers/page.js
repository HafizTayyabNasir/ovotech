import InnerPageLayout from "@/components/InnerPageLayout";

export default function CareersPage() {
  return (
    <InnerPageLayout 
      title="Careers at Ovotech" 
      description="Join our team of innovators building the future of healthcare automation."
    >
      <h2 style={{ fontSize: "28px", color: "#0A1E5C", marginBottom: "20px" }}>Why Join Us?</h2>
      <p style={{ marginBottom: "20px" }}>
        At Ovotech, we are passionate about making a real difference in the healthcare sector. By building intelligent automation tools, we are directly helping doctors, nurses, and practice managers reclaim their time to focus on patient care.
      </p>
      <p style={{ marginBottom: "40px" }}>
        We offer competitive salaries, flexible remote working options, and a collaborative environment where your ideas can shape the product.
      </p>
      
      <h2 style={{ fontSize: "28px", color: "#0A1E5C", marginBottom: "20px" }}>Open Positions</h2>
      <div style={{ border: "1px solid #eee", padding: "24px", borderRadius: "8px", marginBottom: "16px" }}>
        <h3 style={{ fontSize: "20px", color: "#0A1E5C", marginBottom: "8px" }}>Senior Frontend Developer (Next.js/React)</h3>
        <p style={{ color: "#777", marginBottom: "16px", fontSize: "14px" }}>Remote (UK) • Full-time</p>
        <button className="btn btn-outline" style={{ padding: "8px 16px" }}>Apply Now</button>
      </div>
      <div style={{ border: "1px solid #eee", padding: "24px", borderRadius: "8px", marginBottom: "16px" }}>
        <h3 style={{ fontSize: "20px", color: "#0A1E5C", marginBottom: "8px" }}>RPA Engineer (UiPath/Automation Anywhere)</h3>
        <p style={{ color: "#777", marginBottom: "16px", fontSize: "14px" }}>Manchester / Hybrid • Full-time</p>
        <button className="btn btn-outline" style={{ padding: "8px 16px" }}>Apply Now</button>
      </div>
    </InnerPageLayout>
  );
}
