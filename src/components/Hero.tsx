'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Sparkles, Brain, Rocket, Target } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full px-4 py-2 mb-8"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Available for opportunities</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-white">Hi, I&apos;m </span>
              <br />
              <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Vishak Baddur
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              className="text-2xl md:text-3xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="flex items-center justify-center lg:justify-start space-x-2">
                <Brain className="w-8 h-8 text-purple-400" />
                <span>AI Engineer</span>
                <span className="text-gray-500">•</span>
                <Rocket className="w-8 h-8 text-pink-400" />
                <span>Future Billionaire</span>
              </span>
            </motion.div>

            {/* Research Paper Style Abstract */}
            <motion.div
              className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <Target className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">Executive Summary</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
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
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover-lift transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore My Work</span>
                <Rocket className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Let&apos;s Connect</span>
                <Mail className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Floating Cards */}
            <div className="relative h-96">
              {/* Main Card */}
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex items-center justify-center"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="text-center">
                  <Brain className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">AI Innovation</h3>
                  <p className="text-gray-300 text-sm">Building the future with intelligent systems</p>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center"
                animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <span className="text-2xl">🏀</span>
              </motion.div>

              <motion.div
                className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center"
                animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              >
                <span className="text-2xl">♟️</span>
              </motion.div>

              <motion.div
                className="absolute bottom-8 right-8 w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center"
                animate={{ y: [0, 10, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <span className="text-2xl">💰</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/VishakBaddur"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full glass hover:bg-purple-600 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="w-6 h-6 text-white" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/vishakbaddur/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full glass hover:bg-blue-600 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="w-6 h-6 text-white" />
          </motion.a>
          <motion.a
            href="mailto:vishakbaddurs@gmail.com"
            className="p-4 rounded-full glass hover:bg-green-600 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail className="w-6 h-6 text-white" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
