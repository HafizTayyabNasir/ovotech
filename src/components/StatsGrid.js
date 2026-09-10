"use client";

const stats = [
  {
    value: "250+",
    label: "Practices served",
  },
  {
    value: "3M+",
    label: "Documents processed",
  },
  {
    value: "100k+",
    label: "Hours saved",
  },
  {
    value: "10M+",
    label: "Codes added",
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
                background: "#f8fafc",
                borderRadius: "20px",
                padding: "48px 24px",
                textAlign: "center",
                transition: "all 0.3s ease-in-out",
                border: "1px solid #e2e8f5",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.02)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(2, 172, 234, 0.15)";
                e.currentTarget.style.borderColor = "rgba(2, 172, 234, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.02)";
                e.currentTarget.style.borderColor = "#e2e8f5";
              }}
            >
              <div
                style={{
                  fontSize: "clamp(34px, 4vw, 46px)",
                  fontWeight: 800,
                  color: "#02ACEA",
                  lineHeight: 1,
                  marginBottom: "12px",
                  letterSpacing: "-1px",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#555555",
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
