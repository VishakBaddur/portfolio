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
      title: 'Machine Learning Engineering',
      description: 'Building production-scale ML systems with expertise in PyTorch, TensorFlow, and MLOps.',
    },
    {
      icon: Lightbulb,
      title: 'AI Innovation',
      description: 'Pioneering AI solutions including MCP servers, RAG systems, and neural style transfer.',
    },
    {
      icon: Rocket,
      title: 'Enterprise Experience',
      description: 'Proven track record at ISRO and tech companies, delivering 40% efficiency improvements.',
    },
    {
      icon: Users,
      title: 'Technical Leadership',
      description: 'Leading ML projects, mentoring teams, and building scalable data processing systems.',
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
            I'm a passionate developer with a founder's mindset, dedicated to creating innovative solutions that make a real impact.
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
                As a Machine Learning Engineer with a 4.0 GPA from the University of Illinois at Chicago, I've 
                dedicated my career to building innovative AI solutions that solve real-world problems. My journey 
                began with a curiosity about artificial intelligence and how it can transform industries.
              </p>
              <p>
                With experience at ISRO's National Remote Sensing Center and Cogniron Technology Solutions, I've 
                developed expertise in end-to-end ML pipelines, production-scale forecasting systems, and 
                enterprise-grade AI applications. My founder mentality drives me to think beyond just algorithms 
                – I focus on creating products that deliver measurable business value.
              </p>
              <p>
                I believe in the power of continuous learning and staying at the forefront of AI/ML trends. 
                Whether it's implementing cutting-edge models, contributing to open-source projects, or building 
                scalable data pipelines, I'm always looking for ways to push the boundaries of what's possible 
                with technology.
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
