'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Lightbulb, Rocket, Users } from 'lucide-react'

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: Code,
      title: 'AI & Machine Learning',
      description: 'Building intelligent systems with PyTorch, TensorFlow, and cutting-edge AI technologies.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Problem Solving',
      description: 'Creating solutions that matter - from MCP servers to neural networks that actually work.',
    },
    {
      icon: Rocket,
      title: 'Real-World Impact',
      description: 'Proven results at ISRO and beyond - 40% efficiency improvements and scalable systems.',
    },
    {
      icon: Users,
      title: 'Well-Rounded Genius',
      description: 'Basketball player, Spanish learner, chess strategist, and future billionaire! 🏀♟️💰',
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-gradient bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A well-rounded tech genius who&apos;s passionate about AI, basketball, Spanish, chess, and dreaming big! 
            Building innovative solutions while having fun along the way. 🚀
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Hey there! I&apos;m Vishak, a tech enthusiast with a 4.0 GPA from UIC who&apos;s passionate about 
                building intelligent systems. My journey started with curiosity about how AI can solve 
                real-world problems, and it&apos;s led me to some incredible experiences at ISRO and beyond.
              </p>
              <p>
                When I&apos;m not diving deep into machine learning algorithms or building production-scale systems, 
                you&apos;ll find me shooting hoops on the basketball court, practicing my Spanish (¡Hola!), or 
                trying to improve my chess game. I believe the best engineers are well-rounded individuals 
                who bring diverse perspectives to problem-solving.
              </p>
              <p>
                My goal? To become a billionaire through innovation and impact! 💰 But seriously, I&apos;m driven 
                by the desire to create technology that makes a real difference. Whether it&apos;s building AI 
                systems that help organizations make better decisions or contributing to open-source projects, 
                I&apos;m always looking for ways to push boundaries and dream bigger.
              </p>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96 glass rounded-2xl p-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl"></div>
              <motion.div
                className="text-center relative z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Code className="w-16 h-16 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Code & Create</h4>
                <p className="text-gray-300">Building the future, one line at a time</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="glass rounded-xl p-6 hover-lift group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
