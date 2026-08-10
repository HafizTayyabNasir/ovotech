import "./globals.css";

export const metadata = {
  title: "Ovotech - Healthcare Automation Platform",
  description:
    "Ovotech helps GP practices and healthcare providers automate repetitive admin tasks using AI and RPA. Save time. Reduce costs. Improve patient care.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
