"use client";
import { useState } from "react";
import Link from "next/link";

export default function ROICalculator() {
  const [listSize, setListSize] = useState(12000);
  const [dailyLetters, setDailyLetters] = useState(65);

  // Calculations:
  // Average manual review + SNOMED coding time: ~6 mins per document.
  // Ovotech assisted time: ~1.5 mins per document.
  // Time saved per letter: 4.5 minutes.
  const weeklyHoursSaved = Math.round((dailyLetters * 5 * 4.5) / 60);
  const fteReleased = (weeklyHoursSaved / 37.5).toFixed(1);
  const annualSavings = Math.round(weeklyHoursSaved * 52 * 18);

  return (
    <section style={{ padding: "100px 0", background: "#FFFFFF", position: "relative", overflow: "hidden" }}>
      <div className="site-container">
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span style={{ display: "inline-block", background: "rgba(0,168,232,0.1)", color: "#00A8E8", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", padding: "6px 18px", borderRadius: "20px", textTransform: "uppercase", marginBottom: "14px" }}>
            PRACTICE IMPACT &amp; SAVINGS CALCULATOR
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#0A1838", lineHeight: 1.15 }}>
            Calculate Your Practice Capacity &amp; Time Released
          </h2>
          <p style={{ color: "#475569", fontSize: "16px", marginTop: "12px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
            See how much administrative staff time and capacity Ovotech releases for your GP practice.
          </p>
        </div>

        <div style={{ background: "#F4F7FC", borderRadius: "24px", padding: "48px 36px", border: "1px solid #E0E8F5", boxShadow: "0 16px 40px rgba(0,168,232,0.06)", maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "48px", alignItems: "center" }}>

            {/* Left Controls Sliders */}
            <div>
              {/* Slider 1: List Size */}
              <div style={{ marginBottom: "36px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <label style={{ fontSize: "15px", fontWeight: 700, color: "#0A1838" }}>Practice Patient List Size</label>
                  <span style={{ fontSize: "18px", fontWeight: 800, color: "#00A8E8" }}>{listSize.toLocaleString()} Patients</span>
                </div>
                <input
                  type="range"
                  min="3000"
                  max="40000"
                  step="1000"
                  value={listSize}
                  onChange={(e) => setListSize(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "#00A8E8", cursor: "pointer", height: "8px", borderRadius: "4px" }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#8896AB", marginTop: "6px" }}>
                  <span>3,000</span>
                  <span>40,000+</span>
                </div>
              </div>

              {/* Slider 2: Daily Letters */}
              <div style={{ marginBottom: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <label style={{ fontSize: "15px", fontWeight: 700, color: "#0A1838" }}>Daily Clinical Letters Received</label>
                  <span style={{ fontSize: "18px", fontWeight: 800, color: "#00A8E8" }}>{dailyLetters} Docs / Day</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="200"
                  step="5"
                  value={dailyLetters}
                  onChange={(e) => setDailyLetters(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "#00A8E8", cursor: "pointer", height: "8px", borderRadius: "4px" }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#8896AB", marginTop: "6px" }}>
                  <span>15 docs</span>
                  <span>200+ docs</span>
                </div>
              </div>
            </div>

            {/* Right Calculated Results */}
            <div style={{ background: "#09132B", borderRadius: "20px", padding: "36px 30px", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 12px 30px rgba(0,0,0,0.2)" }}>
              <div style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "#38BDF8", marginBottom: "20px" }}>
                ESTIMATED PRACTICE IMPACT
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "32px" }}>
                <div>
                  <div style={{ fontSize: "38px", fontWeight: 800, color: "#FFFFFF", lineHeight: 1 }}>{weeklyHoursSaved} Hours</div>
                  <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", marginTop: "4px" }}>Time Saved Per Week</div>
                </div>

                <div>
                  <div style={{ fontSize: "32px", fontWeight: 800, color: "#38BDF8", lineHeight: 1 }}>{fteReleased} FTE</div>
                  <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", marginTop: "4px" }}>Staff Admin Capacity Released</div>
                </div>

                <div>
                  <div style={{ fontSize: "28px", fontWeight: 800, color: "#16a34a", lineHeight: 1 }}>£{annualSavings.toLocaleString()}</div>
                  <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", marginTop: "4px" }}>Estimated Annual Capacity Savings</div>
                </div>
              </div>

              <Link href="/contact" style={{ display: "block", textAlign: "center", background: "#00A8E8", color: "#FFFFFF", fontWeight: 700, fontSize: "14px", padding: "14px", borderRadius: "12px", boxShadow: "0 4px 14px rgba(0,168,232,0.3)", transition: "all 0.3s" }}>
                Get Detailed Practice ROI Report →
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
