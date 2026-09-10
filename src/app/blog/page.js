import InnerPageLayout from "@/components/InnerPageLayout";
import Link from "next/link";

export default function BlogPage() {
  return (
    <InnerPageLayout 
      title="Ovotech Blog" 
      description="Insights, updates, and news from the forefront of healthcare automation."
    >
      <div style={{ display: "grid", gap: "40px" }}>
        
        <article style={{ borderBottom: "1px solid #E0E8F5", paddingBottom: "30px" }}>
          <span style={{ fontSize: "12px", color: "#02ACEA", fontWeight: "700", textTransform: "uppercase" }}>Industry News</span>
          <h2 style={{ fontSize: "28px", color: "#0A1838", margin: "10px 0" }}>How AI is Transforming Primary Care in 2025</h2>
          <p style={{ color: "#64748B", marginBottom: "16px" }}>Discover the latest trends in healthcare technology and how artificial intelligence is helping practices manage patient demand.</p>
          <Link href="#" style={{ color: "#02ACEA", fontWeight: "600", fontSize: "14px" }}>Read Article &rarr;</Link>
        </article>

        <article style={{ borderBottom: "1px solid #E0E8F5", paddingBottom: "30px" }}>
          <span style={{ fontSize: "12px", color: "#02ACEA", fontWeight: "700", textTransform: "uppercase" }}>Product Update</span>
          <h2 style={{ fontSize: "28px", color: "#0A1838", margin: "10px 0" }}>New Feature: Enhanced Referral Triage</h2>
          <p style={{ color: "#64748B", marginBottom: "16px" }}>We've updated our referral automation engine to better handle complex, multi-department referral documents.</p>
          <Link href="#" style={{ color: "#02ACEA", fontWeight: "600", fontSize: "14px" }}>Read Article &rarr;</Link>
        </article>

        <article>
          <span style={{ fontSize: "12px", color: "#02ACEA", fontWeight: "700", textTransform: "uppercase" }}>Case Study Highlight</span>
          <h2 style={{ fontSize: "28px", color: "#0A1838", margin: "10px 0" }}>Saving 40 Hours a Week on Prescriptions</h2>
          <p style={{ color: "#64748B", marginBottom: "16px" }}>Learn how a busy London GP practice reclaimed an entire full-time equivalent role by automating their repeat prescriptions.</p>
          <Link href="#" style={{ color: "#02ACEA", fontWeight: "600", fontSize: "14px" }}>Read Article &rarr;</Link>
        </article>

      </div>
    </InnerPageLayout>
  );
}
