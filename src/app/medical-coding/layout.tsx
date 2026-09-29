import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OvoTech Medical Coding',
  description: 'OvoTech is the AI operating layer for UK primary care, starting with AI-assisted Medical Coding. More time for care, less time on admin.',
  openGraph: {
    title: 'OvoTech Medical Coding',
    description: 'OvoTech is the AI operating layer for UK primary care, starting with AI-assisted Medical Coding. More time for care, less time on admin.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
