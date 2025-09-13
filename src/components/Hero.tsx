'use client'

import { Github, Linkedin, Mail, Brain, Rocket, Target, Star } from 'lucide-react'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2 mb-8">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-sm text-slate-300">Available for opportunities</span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
          Hi, I&apos;m{' '}
          <span className="text-purple-400">
            Vishak Baddur
          </span>
        </h1>

        {/* Subtitle */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <div className="flex items-center space-x-2 bg-slate-800/50 rounded-full px-4 py-2">
            <Brain className="w-5 h-5 text-purple-400" />
            <span className="text-white font-medium">AI Engineer</span>
          </div>
          <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
          <div className="flex items-center space-x-2 bg-slate-800/50 rounded-full px-4 py-2">
            <Rocket className="w-5 h-5 text-pink-400" />
            <span className="text-white font-medium">Future Billionaire</span>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-8 mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Target className="w-5 h-5 text-purple-400" />
            <h2 className="text-xl font-bold text-white">Executive Summary</h2>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
          <p className="text-slate-300 leading-relaxed text-lg">
            A well-rounded AI engineer with a perfect 4.0 GPA from the University of Illinois at Chicago, 
            specializing in machine learning systems and production-scale AI applications. Proven track record 
            at ISRO&apos;s National Remote Sensing Center, delivering 40% efficiency improvements through 
            innovative ML pipelines. Beyond technical expertise, brings unique perspective as a basketball player, 
            Spanish learner, and chess strategist. Currently pursuing ambitious goals of building 
            <span className="text-blue-400 font-semibold"> billion-dollar technology solutions</span> 
            while maintaining a balanced, human-centered approach to innovation.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="flex items-center justify-center space-x-2 px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
            <span>Explore My Work</span>
            <Rocket className="w-4 h-4" />
          </button>
          <button className="flex items-center justify-center space-x-2 px-8 py-4 border border-slate-600 text-slate-300 rounded-lg font-semibold hover:border-slate-500 hover:text-white transition-colors">
            <span>Let&apos;s Connect</span>
            <Mail className="w-4 h-4" />
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/VishakBaddur"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/vishakbaddur/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:vishakbaddurs@gmail.com"
            className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
