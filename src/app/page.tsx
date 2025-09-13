'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Projects } from '@/components/Projects'
import { Experience } from '@/components/Experience'
import { Skills } from '@/components/Skills'
import { Contact } from '@/components/Contact'
import { Navigation } from '@/components/Navigation'
import { ParticleBackground } from '@/components/ParticleBackground'
import { User, Code, Briefcase, Mail, Award } from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('home')

  const tabs = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Hero />
      case 'about':
        return <About />
      case 'experience':
        return <Experience />
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
      default:
        return <Hero />
    }
  }

  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Elegant Tab Navigation */}
      <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex space-x-1 bg-slate-900/80 backdrop-blur-sm rounded-lg p-1 border border-slate-800/50">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-3 rounded-md flex items-center space-x-2 transition-all duration-200 font-medium ${
                activeTab === tab.id
                  ? 'text-white'
                  : 'text-slate-400 hover:text-slate-300'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white/10 rounded-md"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <tab.icon className={`w-4 h-4 relative z-10 ${activeTab === tab.id ? 'text-white' : 'text-slate-400'}`} />
              <span className="relative z-10 text-sm">{tab.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="pt-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  )
}