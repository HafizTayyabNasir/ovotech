import InnerPageLayout from "@/components/InnerPageLayout";

export default function InvoiceAutomationPage() {
  return (
    <InnerPageLayout 
      title="Invoice Automation" 
      description="Automate invoice generation, validation, and processing for private services and NHS claims."
    >
      <h2 style={{ fontSize: "28px", color: "#0A1E5C", marginBottom: "20px" }}>Overview</h2>
      <p style={{ marginBottom: "20px" }}>
        Streamline your practice's financial operations. Our Invoice Automation solution handles the end-to-end billing process, from generating invoices for non-NHS services (like medical reports or travel vaccines) to reconciling payments.
      </p>
      
      <h2 style={{ fontSize: "28px", color: "#0A1E5C", marginBottom: "20px" }}>Key Features</h2>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "40px" }}>
        <li style={{ marginBottom: "10px" }}>Automatic invoice generation triggered by specific clinical codes.</li>
        <li style={{ marginBottom: "10px" }}>Integration with standard accounting software (Xero, QuickBooks).</li>
        <li style={{ marginBottom: "10px" }}>Automated payment chasing and reminders.</li>
        <li style={{ marginBottom: "10px" }}>Detailed financial reporting and forecasting.</li>
      </ul>
    </InnerPageLayout>
  );
}
