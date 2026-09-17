"use client";

import { motion } from "framer-motion";

export default function GuideVideoSection() {
  return (
    <section style={{ position: "relative", padding: "100px 0", background: "#301A65", overflow: "hidden" }}>
      {/* Background Glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "1000px", height: "500px", background: "radial-gradient(ellipse, rgba(138, 96, 229, 0.1) 0%, transparent 60%)", pointerEvents: "none", zIndex: 0 }} />
      
      {/* Background Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(138, 96, 229, 0.1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
          opacity: 0.5,
          zIndex: 0
        }}
      />

      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8" style={{ position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: "inline-block", background: "rgba(138, 96, 229, 0.15)", color: "#8A60E5", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", padding: "6px 20px", borderRadius: "30px", textTransform: "uppercase", marginBottom: "16px", border: "1px solid rgba(138, 96, 229, 0.3)" }}
          >
            Watch the Guide
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.5px", marginBottom: "16px" }}
          >
            See Ovotech in Action
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.7)", maxWidth: "600px", margin: "0 auto" }}
          >
            Discover how our intelligent automation seamlessly processes clinical documents into your EMIS system in seconds.
          </motion.p>
        </div>

        {/* Video Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ 
            maxWidth: "1000px", 
            margin: "0 auto", 
            position: "relative",
            borderRadius: "24px",
            padding: "8px",
            background: "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
            boxShadow: "0 30px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(138, 96, 229, 0.2)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)"
          }}
        >
          {/* Faux Window Controls */}
          <div style={{ display: "flex", gap: "8px", padding: "16px", background: "rgba(0,0,0,0.3)", borderRadius: "16px 16px 0 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f56", boxShadow: "0 0 10px rgba(255,95,86,0.5)" }} />
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ffbd2e", boxShadow: "0 0 10px rgba(255,189,46,0.5)" }} />
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#27c93f", boxShadow: "0 0 10px rgba(39,201,63,0.5)" }} />
          </div>

          {/* Video Player */}
          <div style={{ position: "relative", paddingTop: "56.25%", borderRadius: "0 0 16px 16px", overflow: "hidden", background: "#000" }}>
            <video
              controls
              autoPlay
              loop
              muted
              playsInline
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              <source src="/HomeBanner.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

