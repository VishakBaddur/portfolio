'use client'

import { useState, useEffect } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import CustomCursor from '@/components/CustomCursor'
import StunningNav from '@/components/StunningNav'
import StunningHero from '@/components/StunningHero'
import PremiumProjects from '@/components/PremiumProjects'
import PremiumExperience from '@/components/PremiumExperience'
import PremiumBlog from '@/components/PremiumBlog'
import PremiumContact from '@/components/PremiumContact'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <StunningNav />
      
      <StunningHero />
      <PremiumExperience />
      <PremiumProjects />
      <PremiumBlog />
      <PremiumContact />
    </main>
  )
}