import TopBar from "./TopBar";
import Navbar from "./Navbar";

export default function PageHeader({ title, description }) {
  return (
    <>
      <TopBar />
      <Navbar />
      <header style={{ background: "linear-gradient(135deg, #F4F7FC 0%, #FFFFFF 100%)", color: "#0A1838", padding: "64px 0", borderBottom: "1px solid #E0E8F5" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#0A1838", marginBottom: "16px" }}>{title}</h1>
          {description && <p style={{ fontSize: "16px", color: "#475569", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>{description}</p>}
        </div>
      </header>
    </>
  );
}
