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
                background: "#F4F5F9",
                borderRadius: "20px",
                padding: "48px 24px",
                textAlign: "center",
                transition: "all 0.3s ease-in-out",
                border: "1px solid #E8E8EF",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.02)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(54, 45, 126, 0.08)";
                e.currentTarget.style.borderColor = "rgba(54, 45, 126, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.02)";
                e.currentTarget.style.borderColor = "#E8E8EF";
              }}
            >
              <div
                style={{
                  fontSize: "clamp(34px, 4vw, 46px)",
                  fontWeight: 800,
                  color: "#0B1437",
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
