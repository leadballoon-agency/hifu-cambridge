import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import './globals.css'
import StructuredData from '@/components/StructuredData'
import FacebookPixel from '@/components/FacebookPixel'
import ConvertBox from '@/components/ConvertBox'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HIFU Cambridge | Non-Surgical Facelift | Diluxe Aesthetics',
  description: 'Transform your look with HIFU at Diluxe Aesthetics Cambridge. Non-surgical facelift from £195. Lift, tighten & rejuvenate without surgery. Experienced practitioner in Cherry Hinton. Natural enhancements, no downtime.',
  keywords: 'HIFU Cambridge, HIFU Cherry Hinton, non-surgical facelift Cambridge, HIFU treatment Cambridge, skin tightening Cambridge, face lift without surgery, Diluxe Aesthetics, Cambridge aesthetics, HIFU Cambridgeshire, ultrasound facelift, jowl lifting Cambridge, neck tightening Cambridge, HIFU UK',
  authors: [{ name: 'Diluxe Aesthetics Cambridge' }],
  creator: 'Diluxe Aesthetics Cambridge',
  publisher: 'Diluxe Aesthetics Cambridge',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hifucambridge.com'),
  alternates: {
    canonical: 'https://hifucambridge.com',
  },
  openGraph: {
    title: 'HIFU Cambridge | Non-Surgical Facelift | Diluxe Aesthetics',
    description: 'Transform your look with HIFU at Diluxe Aesthetics Cambridge. Non-surgical facelift from £195. Lift, tighten & rejuvenate without surgery or downtime. Natural enhancements by experienced practitioner.',
    url: 'https://hifucambridge.com',
    siteName: 'Diluxe Aesthetics Cambridge - HIFU Treatments',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: 'https://storage.googleapis.com/msgsndr/0kfpm8NVBgT1ZEDGRJF3/media/694c0869e889d3cb4749a7dc.png',
        width: 1080,
        height: 1350,
        alt: 'Consolata - Aesthetic Practitioner at Diluxe Aesthetics Cambridge',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HIFU Cambridge | Non-Surgical Facelift | Diluxe Aesthetics',
    description: 'Transform your look with HIFU at Diluxe Aesthetics Cambridge. Non-surgical facelift from £195. Lift & tighten without surgery. No downtime.',
    images: ['https://storage.googleapis.com/msgsndr/0kfpm8NVBgT1ZEDGRJF3/media/694c0869e889d3cb4749a7dc.png'],
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
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'geo.region': 'GB-CAM',
    'geo.placename': 'Cherry Hinton, Cambridge',
    'geo.position': '52.1836;0.1551',
    'ICBM': '52.1836, 0.1551',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <body className={inter.className}>
        <Suspense fallback={null}>
          <FacebookPixel />
          <ConvertBox />
        </Suspense>
        <StructuredData />
        {children}
      </body>
    </html>
  )
}