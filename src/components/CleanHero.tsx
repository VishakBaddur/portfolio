'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react'

export default function CleanHero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-8"
        >
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-green-400 text-sm font-medium">Available for opportunities</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          <div className="text-white mb-2">Hi, I&apos;m</div>
          <div className="text-purple-400 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Vishak Baddur
          </div>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl font-semibold text-purple-300 mb-8"
        >
          AI Engineer & Future Billionaire
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Building the future with AI, one algorithm at a time. Passionate about creating 
          intelligent systems that solve real-world problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
        >
          <button 
            onClick={() => {
              const element = document.querySelector('#projects');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex items-center px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
          >
            View My Work
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Let&apos;s Connect
            <Mail className="ml-2 h-5 w-5" />
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center justify-center space-x-4"
        >
          <a
            href="https://github.com/VishakBaddur"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-110 hover:shadow-lg"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/vishakbaddur/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-110 hover:shadow-lg"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:vishak@example.com"
            className="p-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-110 hover:shadow-lg"
          >
            <Mail className="h-6 w-6" />
          </a>
          <button className="p-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-110 hover:shadow-lg">
            <Download className="h-6 w-6" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
