import InnerPageLayout from "@/components/InnerPageLayout";

export default function PrivacyPolicyPage() {
  return (
    <InnerPageLayout 
      title="Privacy Policy" 
      description="Last updated: October 2025"
    >
      <h2 style={{ fontSize: "24px", color: "#0A1E5C", marginBottom: "16px" }}>1. Introduction</h2>
      <p style={{ marginBottom: "24px" }}>
        At Ovotech, we are committed to protecting and respecting your privacy. This policy explains when and why we collect personal information, how we use it, the conditions under which we may disclose it to others, and how we keep it secure.
      </p>
      
      <h2 style={{ fontSize: "24px", color: "#0A1E5C", marginBottom: "16px" }}>2. Information We Collect</h2>
      <p style={{ marginBottom: "24px" }}>
        We obtain information about you when you use our website, contact us about products and services, or use our healthcare automation platform. For patient data processed on behalf of GP practices, we act as a Data Processor.
      </p>

      <h2 style={{ fontSize: "24px", color: "#0A1E5C", marginBottom: "16px" }}>3. How We Use Your Information</h2>
      <p style={{ marginBottom: "24px" }}>
        We may use your information to: carry out our obligations arising from any contracts entered into by you and us; seek your views or comments on the services we provide; notify you of changes to our services; send you communications which you have requested and that may be of interest to you.
      </p>
    </InnerPageLayout>
  );
}
