"use client";

const testimonials = [
  {
    name: "Dr Christian Hornung",
    role: "Clinical Director - Taunton Vale Healthcare",
    text: `"Collaboration with ApolloIQ has been a great experience for our GP business. The expertise from both pharmacists Raz and Vlad and their Automation and AI team was instrumental in developing solutions. Piloting and testing services did not affect daily operations. Continuous feedback loops ensured both safety and a personalised approach from ApolloIQ."`,
    avatar: "NHS"
  },
  {
    name: "Dr. Valeed Ghafoor",
    role: "CEO of GP Practice Specialists",
    text: `"Working with ApolloIQ has been an excellent experience, they are very responsive and attentive to detail. We never hesitate to work with them or recommend their services to our clients."`,
    avatar: "VG"
  },
  {
    name: "James Roberts",
    role: "Digital & Transformation Lead Taunton Central & Tone Valley PCN",
    text: `"ApolloIQ Automation solutions are improving efficiency and safety of our Practices. Their attention to details around clinical safety and information governance is second to none."`,
    avatar: "NHS"
  },
  {
    name: "Chris Miller",
    role: "Data Team Lead French Weir Medical Centre, Taunton Central PCN",
    text: `"Documents Automation has reduced our workload by 50%!"`,
    avatar: "NHS"
  }
];

export default function Testimonials() {
  return (
    <section style={{ padding: "100px 0", background: "#ffffff", overflow: "hidden" }}>
      <div className="site-container">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.5px" }}>
            What Our <span style={{ color: "#02ACEA" }}>Clients</span> Say
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "24px" }}>
          {testimonials.map((t, idx) => (
            <div key={idx} style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f5",
              borderRadius: "16px",
              padding: "40px 32px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}>
              <p style={{
                fontStyle: "italic",
                color: "#475569",
                fontSize: "15px",
                lineHeight: 1.7,
                marginBottom: "32px"
              }}>
                {t.text}
              </p>
              
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                {t.avatar === "NHS" ? (
                  <div style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "#005EB8",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "14px",
                    letterSpacing: "1px",
                    flexShrink: 0
                  }}>
                    NHS
                  </div>
                ) : (
                  <div style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "#0f172a",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "18px",
                    flexShrink: 0
                  }}>
                    {t.avatar}
                  </div>
                )}
                
                <div>
                  <h4 style={{ fontSize: "16px", fontWeight: 800, color: "#0f172a", marginBottom: "4px" }}>{t.name}</h4>
                  <p style={{ fontSize: "12px", color: "#64748B", lineHeight: 1.4 }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

