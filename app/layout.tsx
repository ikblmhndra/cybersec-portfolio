import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://ikblmhndra-portfolio.vercel.app/'),
  title: {
    default: 'Ikbal Mahendra | Infrastructure Security Lead',
    template: '%s | Ikbal Mahendra',
  },
  description:
    'Infrastructure Security Lead specializing in network security, security automation, infrastructure hardening, and cyber defense engineering.',
  keywords: [
    'cybersecurity',
    'infrastructure security',
    'network security',
    'security automation',
    'DevSecOps',
    'Kubernetes security',
    'hardening',
    'penetration testing',
  ],
  authors: [{ name: 'Ikbal Mahendra' }],
  creator: 'Ikbal Mahendra',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ikblmhndra-portfolio.vercel.app/',
    title: 'Ikbal Mahendra | Infrastructure Security Lead',
    description:
      'Infrastructure Security Lead specializing in network security, security automation, infrastructure hardening, and cyber defense engineering.',
    siteName: 'Ikbal Mahendra Security Lab',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ikbal Mahendra - Infrastructure Security Lead',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ikbal Mahendra | Infrastructure Security Lead',
    description:
      'Infrastructure Security Lead specializing in network security, security automation and cyber defense.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="bg-terminal-bg text-terminal-text antialiased scanlines noise-overlay">
        <div className="bg-grid min-h-screen">
          <Navigation />
          <main className="relative">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
