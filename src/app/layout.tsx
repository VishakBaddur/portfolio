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
  title: 'Vishak Baddur - AI Engineer & Future Billionaire 🚀',
  description: 'Well-rounded tech genius building intelligent systems. AI engineer, basketball player, Spanish learner, chess strategist, and future billionaire. 4.0 GPA from UIC, ISRO experience.',
  keywords: ['AI engineer', 'machine learning', 'full-stack developer', 'basketball', 'Spanish', 'chess', 'future billionaire', 'ISRO', 'UIC', 'portfolio', 'innovation'],
  authors: [{ name: 'Vishak Baddur' }],
  creator: 'Vishak Baddur',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vishakbaddur.dev',
    title: 'Vishak Baddur - AI Engineer & Future Billionaire 🚀',
    description: 'Well-rounded tech genius building intelligent systems. AI engineer, basketball player, Spanish learner, chess strategist, and future billionaire. 4.0 GPA from UIC, ISRO experience.',
    siteName: 'Vishak Baddur Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vishak Baddur - AI Engineer & Future Billionaire 🚀',
    description: 'Well-rounded tech genius building intelligent systems. AI engineer, basketball player, Spanish learner, chess strategist, and future billionaire. 4.0 GPA from UIC, ISRO experience.',
    creator: '@vishakbaddur',
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          {children}
        </div>
      </body>
    </html>
  )
}