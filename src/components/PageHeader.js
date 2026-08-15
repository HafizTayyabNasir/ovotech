import TopBar from "./TopBar";
import Navbar from "./Navbar";

export default function PageHeader({ title, description }) {
  return (
    <>
      <TopBar />
      <Navbar />
      <header style={{ background: "linear-gradient(135deg, #362D7E 0%, #2a2265 100%)", color: "#fff", padding: "80px 0" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, marginBottom: "16px" }}>{title}</h1>
          {description && <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>{description}</p>}
        </div>
      </header>
    </>
  );
}
