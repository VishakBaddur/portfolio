'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight, ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-800/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-slate-300">Available for opportunities</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-light text-white mb-6"
          >
            Hi, I&apos;m{' '}
            <span className="font-medium bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
              Vishak Baddur
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            AI Engineer & Future Billionaire
          </motion.p>

          {/* Executive Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 mb-12 max-w-4xl mx-auto"
          >
            <h2 className="text-lg font-medium text-slate-200 mb-4">Executive Summary</h2>
            <p className="text-slate-300 leading-relaxed">
              A well-rounded AI engineer with a perfect 4.0 GPA from the University of Illinois at Chicago, 
              specializing in machine learning systems and production-scale AI applications. Proven track record 
              at ISRO&apos;s National Remote Sensing Center, delivering 40% efficiency improvements through 
              innovative ML pipelines. Beyond technical expertise, brings unique perspective as a basketball player, 
              Spanish learner, and chess strategist. Currently pursuing ambitious goals of building billion-dollar 
              technology solutions while maintaining a balanced, human-centered approach to innovation.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button
              className="group flex items-center justify-center space-x-2 px-8 py-4 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
            
            <motion.button
              className="flex items-center justify-center space-x-2 px-8 py-4 border border-slate-600 text-slate-300 rounded-lg font-medium hover:border-slate-500 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Let&apos;s Connect</span>
              <Mail className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href="https://github.com/VishakBaddur"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white hover:border-slate-600 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/vishakbaddur/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white hover:border-slate-600 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              href="mailto:vishakbaddurs@gmail.com"
              className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white hover:border-slate-600 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-slate-400"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
