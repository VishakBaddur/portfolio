'use client'

import CleanNav from '@/components/CleanNav'
import CleanHero from '@/components/CleanHero'
import PremiumExperience from '@/components/PremiumExperience'
import PremiumProjects from '@/components/PremiumProjects'
import PremiumContact from '@/components/PremiumContact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <CleanNav />
      <CleanHero />
      <PremiumExperience />
      <PremiumProjects />
      <PremiumContact />
    </main>
  )
}