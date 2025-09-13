import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vishak Baddur - AI Engineer & Future Billionaire | Premium Portfolio',
  description: 'World-class AI Engineer specializing in machine learning systems and production-scale AI applications. Building the future with intelligent technology. Perfect 4.0 GPA, ISRO experience, and future billionaire mindset.',
  keywords: [
    'AI Engineer', 'Machine Learning', 'Artificial Intelligence', 'Software Engineer', 
    'Future Billionaire', 'ISRO', 'Cogniron', 'University of Illinois', 'Basketball', 
    'Spanish', 'Chess', 'PyTorch', 'TensorFlow', 'React', 'Node.js', 'AWS', 'Docker',
    'Portfolio', 'Premium', 'World-class', 'Innovation', 'Technology'
  ],
  authors: [{ name: 'Vishak Baddur Sadanand' }],
  creator: 'Vishak Baddur Sadanand',
  publisher: 'Vishak Baddur Sadanand',
  metadataBase: new URL('https://vishak-portfolio.onrender.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Vishak Baddur - AI Engineer & Future Billionaire | Premium Portfolio',
    description: 'World-class AI Engineer specializing in machine learning systems and production-scale AI applications. Building the future with intelligent technology.',
    url: 'https://vishak-portfolio.onrender.com',
    siteName: 'Vishak Baddur Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vishak Baddur - AI Engineer & Future Billionaire',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vishak Baddur - AI Engineer & Future Billionaire',
    description: 'World-class AI Engineer building the future with intelligent technology. Perfect 4.0 GPA, ISRO experience, and future billionaire mindset.',
    images: ['/og-image.jpg'],
    creator: '@vishakbaddur',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}