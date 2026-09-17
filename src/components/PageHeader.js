import TopBar from "./TopBar";
import Navbar from "./Navbar";
import ParticlesBackground from "./ParticlesBackground";

export default function PageHeader({ title, description }) {
  return (
    <>
      <TopBar />
      <Navbar />
      <header style={{ background: "#0F1E36", color: "#FFFFFF", padding: "64px 0", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", position: "relative", overflow: "hidden" }}>
        <ParticlesBackground color="#02ACEA" />
        <div className="site-container" style={{ textAlign: "center", position: "relative", zIndex: 10 }}>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#FFFFFF", marginBottom: "16px" }}>{title}</h1>
          {description && <p style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.75)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>{description}</p>}
        </div>
      </header>
    </>
  );
}
