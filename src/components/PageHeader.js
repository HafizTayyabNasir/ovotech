import TopBar from "./TopBar";
import Navbar from "./Navbar";

export default function PageHeader({ title, description }) {
  return (
    <>
      <TopBar />
      <Navbar />
      <header style={{ background: "radial-gradient(ellipse at top, #F0F9FF 0%, #FFFFFF 80%)", color: "#0F172A", padding: "72px 0", borderBottom: "1px solid #E2E8F5" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#0F172A", marginBottom: "16px", letterSpacing: "-0.5px" }}>{title}</h1>
          {description && <p style={{ fontSize: "16px", color: "#475569", maxWidth: "620px", margin: "0 auto", lineHeight: 1.6 }}>{description}</p>}
        </div>
      </header>
    </>
  );
}
