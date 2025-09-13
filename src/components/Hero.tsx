'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight, Sparkles, Brain, Rocket, Target, Star } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Stunning animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-purple-500/30 rounded-full px-4 py-2 mb-8"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Available for opportunities</span>
            </motion.div>

            {/* Main Title with Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-7xl md:text-9xl font-black mb-6 leading-[0.9]"
            >
              <span className="block text-white/90 font-light">Hi, I&apos;m</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent font-black tracking-tight">
                Vishak
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-black tracking-tight">
                Baddur
              </span>
            </motion.h1>

            {/* Enhanced Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-4xl font-bold mb-12"
            >
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-full px-4 py-2 border border-purple-400/30">
                  <Brain className="w-6 h-6 text-purple-400" />
                  <span className="text-white font-semibold">AI Engineer</span>
                </div>
                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                <div className="flex items-center space-x-2 bg-gradient-to-r from-pink-600/20 to-orange-600/20 backdrop-blur-xl rounded-full px-4 py-2 border border-pink-400/30">
                  <Rocket className="w-6 h-6 text-pink-400" />
                  <span className="text-white font-semibold">Future Billionaire</span>
                </div>
              </div>
            </motion.div>

            {/* Premium Executive Summary */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 mb-12 shadow-2xl"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-3xl blur-xl"></div>
              
              <div className="relative">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Executive Summary</h3>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-200 leading-relaxed text-xl font-light">
                  A <span className="text-purple-400 font-semibold">well-rounded AI engineer</span> with a perfect 4.0 GPA from the University of Illinois at Chicago, 
                  specializing in <span className="text-pink-400 font-semibold">machine learning systems</span> and production-scale AI applications. 
                  Proven track record at <span className="text-cyan-400 font-semibold">ISRO&apos;s National Remote Sensing Center</span>, delivering 
                  <span className="text-yellow-400 font-semibold"> 40% efficiency improvements</span> through innovative ML pipelines. 
                  Beyond technical expertise, brings unique perspective as a <span className="text-green-400 font-semibold">basketball player</span>, 
                  <span className="text-blue-400 font-semibold"> Spanish learner</span>, and <span className="text-orange-400 font-semibold">chess strategist</span>. 
                  Currently pursuing ambitious goals of building <span className="text-gradient bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-bold">billion-dollar technology solutions</span> 
                  while maintaining a balanced, human-centered approach to innovation.
                </p>
              </div>
            </motion.div>

            {/* Premium CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
              <motion.button
                className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white rounded-2xl font-bold text-lg shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-3">
                  <span>Explore My Work</span>
                  <Rocket className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </motion.button>
              
              <motion.button
                className="group relative px-10 py-5 border-2 border-purple-400/50 text-purple-300 rounded-2xl font-bold text-lg backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="flex items-center space-x-3">
                  <span>Let&apos;s Connect</span>
                  <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Advanced Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            {/* Main 3D Card */}
            <div className="relative h-[600px]">
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-purple-600/30 via-pink-600/20 to-cyan-600/30 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 flex items-center justify-center shadow-2xl"
                animate={{ 
                  y: [0, -30, 0],
                  rotateY: [0, 5, 0],
                }}
                transition={{ duration: 6, repeat: Infinity }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="text-center">
                  <div className="relative mb-6">
                    <Brain className="w-20 h-20 text-purple-400 mx-auto" />
                    <motion.div
                      className="absolute inset-0 bg-purple-400/20 rounded-full blur-xl"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">AI Innovation</h3>
                  <p className="text-gray-300 text-lg">Building the future with intelligent systems</p>
                </div>
              </motion.div>

              {/* Floating Tech Elements */}
              <motion.div
                className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center shadow-xl"
                animate={{ 
                  y: [0, 20, 0], 
                  rotate: [0, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <span className="text-3xl">🏀</span>
              </motion.div>

              <motion.div
                className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-green-500/30 to-emerald-500/30 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center shadow-xl"
                animate={{ 
                  y: [0, -20, 0], 
                  rotate: [0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              >
                <span className="text-3xl">♟️</span>
              </motion.div>

              <motion.div
                className="absolute bottom-16 right-16 w-24 h-24 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center shadow-xl"
                animate={{ 
                  y: [0, 15, 0], 
                  rotate: [0, 8, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              >
                <span className="text-3xl">💰</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Premium Social Links */}
        <motion.div
          className="flex justify-center space-x-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/VishakBaddur"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-5 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/20 hover:border-purple-400/50 transition-all duration-300 shadow-xl"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-8 h-8 text-white group-hover:text-purple-400 transition-colors duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/vishakbaddur/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-5 rounded-2xl bg-gradient-to-br from-blue-800/50 to-blue-900/50 backdrop-blur-xl border border-white/20 hover:border-blue-400/50 transition-all duration-300 shadow-xl"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-8 h-8 text-white group-hover:text-blue-400 transition-colors duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.a>
          
          <motion.a
            href="mailto:vishakbaddurs@gmail.com"
            className="group relative p-5 rounded-2xl bg-gradient-to-br from-green-800/50 to-green-900/50 backdrop-blur-xl border border-white/20 hover:border-green-400/50 transition-all duration-300 shadow-xl"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-8 h-8 text-white group-hover:text-green-400 transition-colors duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
