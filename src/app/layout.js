import "./globals.css";

export const metadata = {
  title: "Ovotech - Clinical Document Processing & Coding Platform",
  description:
    "Ovotech is a clinical document processing and coding workflow platform designed specifically for UK GP practices, from intake to EMIS Web write-back.",
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
