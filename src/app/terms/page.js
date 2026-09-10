import InnerPageLayout from "@/components/InnerPageLayout";

export default function TermsPage() {
  return (
    <InnerPageLayout 
      title="Terms & Conditions" 
      description="Last updated: October 2025"
    >
      <h2 style={{ fontSize: "24px", color: "#0A1838", marginBottom: "16px" }}>1. Acceptance of Terms</h2>
      <p style={{ marginBottom: "24px", color: "#475569" }}>
        By accessing and using the Ovotech website and platform, you accept and agree to be bound by the terms and provision of this agreement.
      </p>
      
      <h2 style={{ fontSize: "24px", color: "#0A1838", marginBottom: "16px" }}>2. Use License</h2>
      <p style={{ marginBottom: "24px", color: "#475569" }}>
        Permission is granted to temporarily download one copy of the materials (information or software) on Ovotech's website for personal, non-commercial transitory viewing only.
      </p>

      <h2 style={{ fontSize: "24px", color: "#0A1838", marginBottom: "16px" }}>3. Limitations</h2>
      <p style={{ marginBottom: "24px", color: "#475569" }}>
        In no event shall Ovotech or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Ovotech's website.
      </p>
    </InnerPageLayout>
  );
}
