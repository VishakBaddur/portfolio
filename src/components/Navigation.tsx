'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

interface NavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(scrollY, [0, 100], ['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)'])

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    setIsOpen(false)
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm"
      style={{ backgroundColor }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Elegant Logo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              onClick={() => handleTabChange('home')}
              className="text-2xl font-light text-white hover:text-slate-300 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              V
            </motion.button>
          </motion.div>

          {/* Clean Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {['home', 'about', 'experience', 'projects', 'contact'].map((tab, index) => (
                <motion.button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`relative text-sm font-medium transition-colors duration-200 capitalize ${
                    activeTab === tab 
                      ? 'text-white' 
                      : 'text-slate-400 hover:text-slate-300'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                      layoutId="activeNavTab"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Clean Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-400 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Clean Mobile Navigation */}
      <motion.div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          height: isOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-slate-900/95 backdrop-blur-sm border-t border-slate-800/50">
          {['home', 'about', 'experience', 'projects', 'contact'].map((tab, index) => (
            <motion.button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors duration-200 capitalize ${
                activeTab === tab 
                  ? 'text-white' 
                  : 'text-slate-400 hover:text-slate-300'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {tab}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}
