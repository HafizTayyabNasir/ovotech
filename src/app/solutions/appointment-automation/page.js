import InnerPageLayout from "@/components/InnerPageLayout";

export default function AppointmentAutomationPage() {
  return (
    <InnerPageLayout 
      title="Appointment Automation" 
      description="Automate scheduling, reminders, and patient communication to reduce DNAs (Did Not Attend)."
    >
      <h2 style={{ fontSize: "28px", color: "#0A1E5C", marginBottom: "20px" }}>Overview</h2>
      <p style={{ marginBottom: "20px" }}>
        Missed appointments cost practices valuable time and resources. Our Appointment Automation system provides an intelligent virtual assistant that manages bookings, handles cancellations, and sends timely reminders via SMS or email.
      </p>
      
      <h2 style={{ fontSize: "28px", color: "#0A1E5C", marginBottom: "20px" }}>Key Features</h2>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "40px" }}>
        <li style={{ marginBottom: "10px" }}>24/7 automated booking and rescheduling.</li>
        <li style={{ marginBottom: "10px" }}>Smart triage system to prioritize urgent cases.</li>
        <li style={{ marginBottom: "10px" }}>Multi-channel patient reminders.</li>
        <li style={{ marginBottom: "10px" }}>Automatic waitlist management to fill cancelled slots.</li>
      </ul>
    </InnerPageLayout>
  );
}
