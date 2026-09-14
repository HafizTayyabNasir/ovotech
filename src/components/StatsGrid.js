"use client";

const stats = [
  {
    value: "High Volume",
    label: "Clinical Document Intake",
  },
  {
    value: "Sub-2 Min",
    label: "Letter Turnaround Time",
  },
  {
    value: "FTE Released",
    label: "Admin Capacity Recovered",
  },
  {
    value: "SNOMED CT",
    label: "Assisted Coding Precision",
  },
];

export default function StatsGrid() {
  return (
    <section style={{ padding: "80px 0", background: "#FFFFFF" }}>
      <div className="site-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "24px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF",
                borderRadius: "20px",
                padding: "40px 24px",
                textAlign: "center",
                transition: "all 0.3s ease-in-out",
                border: "1px solid #E2E8F5",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 14px 30px rgba(2, 172, 234, 0.12)";
                e.currentTarget.style.borderColor = "#02ACEA";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.02)";
                e.currentTarget.style.borderColor = "#E2E8F5";
              }}
            >
              <div
                style={{
                  fontSize: "clamp(32px, 3.5vw, 44px)",
                  fontWeight: 800,
                  color: "#02ACEA",
                  lineHeight: 1,
                  marginBottom: "12px",
                  letterSpacing: "-0.5px",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#475569",
                  lineHeight: 1.4,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
