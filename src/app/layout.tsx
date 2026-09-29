import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = { metadataBase: new URL('https://www.ovotech.co.uk'),
  title: "OvoTech: the AI operating layer for primary care",
  description: "OvoTech is the AI operating layer for UK primary care. It codes clinical correspondence to SNOMED CT UK, with every code approved by your team.",
  openGraph: { title: 'OvoTech: the AI operating layer for primary care', description: 'OvoTech is the AI operating layer for UK primary care. It codes clinical correspondence to SNOMED CT UK, with every code approved by your team.', images: ['/images/og-image.jpg'] }, twitter: { card: 'summary_large_image' }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}




