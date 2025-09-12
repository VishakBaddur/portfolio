'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Brain, Database, TrendingUp, Users } from 'lucide-react'

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'AI-Powered Market Intelligence Platform',
      description: 'Revolutionary platform implementing MCP (Model Context Protocol) server for real-time market data processing and AI-powered business intelligence.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'MCP', 'RAG', 'AI/ML', 'Real-time APIs', 'Sentiment Analysis'],
      features: [
        'MCP server for AI model data access',
        'RAG system for dynamic content generation',
        'Real-time market trend detection',
        'AI-powered validation engine',
        'Scalable data processing architecture'
      ],
      github: 'https://github.com/VishakBaddur/Launcher',
      live: 'https://launcher-frontend.onrender.com',
      icon: Brain,
      category: 'AI/ML',
      status: 'Live'
    },
    {
      title: 'Predictive Analytics for Employee Retention',
      description: 'Advanced ML model using ensemble learning to predict employee turnover with 85% accuracy, helping organizations optimize retention strategies.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'NumPy', 'MLOps'],
      features: [
        'XGBoost classification model (85% accuracy)',
        'Feature importance analysis',
        'Hypothesis testing for attrition factors',
        'Robust data validation pipelines',
        'Comprehensive model documentation'
      ],
      github: 'https://github.com/VishakBaddur/Predictive-Analytics-for-Employee-Retention-Using-Ensemble-Learning-Models',
      live: null,
      icon: TrendingUp,
      category: 'Machine Learning',
      status: 'Research'
    },
    {
      title: 'DistributedDB - High-Performance Database System',
      description: 'Enterprise-grade distributed database system supporting ACID transactions with 10M+ operations per second and full data durability.',
      image: '/api/placeholder/600/400',
      technologies: ['Java', 'Distributed Systems', 'ACID', 'Write-Ahead Logging', 'Multi-threading', 'Concurrency'],
      features: [
        'ACID transaction support',
        '10M+ operations per second',
        'Write-Ahead Logging implementation',
        'Multi-threaded architecture',
        'Concurrent data processing'
      ],
      github: 'https://github.com/VishakBaddur/Custom_Database',
      live: null,
      icon: Database,
      category: 'Systems Engineering',
      status: 'Development'
    },
    {
      title: 'SkillSwap: AI-Powered Matching Platform',
      description: 'Full-stack platform using clustering-based ML algorithms for intelligent user matching with real-time capabilities and secure authentication.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'Machine Learning', 'Clustering', 'REST APIs', 'Authentication'],
      features: [
        'Clustering-based matching algorithm',
        'ML-optimized user pairing',
        'Real-time matching capabilities',
        'Secure authentication system',
        'RESTful API architecture'
      ],
      github: 'https://github.com/VishakBaddur/SkillSwap',
      live: 'https://skill-swap-lovat.vercel.app',
      icon: Users,
      category: 'Full-Stack',
      status: 'Live'
    },
    {
      title: 'Neural Style Fusion with VGG19',
      description: 'Advanced computer vision project implementing neural style transfer using VGG19 for geometric and color transfer in images.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'PyTorch', 'VGG19', 'Computer Vision', 'Neural Networks', 'Image Processing'],
      features: [
        'VGG19-based style transfer',
        'Geometric transformation algorithms',
        'Color transfer optimization',
        'High-quality image processing',
        'Neural network optimization'
      ],
      github: 'https://github.com/VishakBaddur/Neural-Style-Fusion-Using-VGG19-for-Geometric-and-Color-Transfer',
      live: null,
      icon: Brain,
      category: 'Computer Vision',
      status: 'Research'
    },
    {
      title: 'Interactive Task Management System',
      description: 'Comprehensive task management platform with advanced analytics, real-time collaboration, and intelligent task prioritization.',
      image: '/api/placeholder/600/400',
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Real-time', 'Analytics'],
      features: [
        'Real-time task collaboration',
        'Intelligent task prioritization',
        'Advanced analytics dashboard',
        'User-friendly interface',
        'Scalable architecture'
      ],
      github: 'https://github.com/VishakBaddur/Interactive-Task-Management-System',
      live: null,
      icon: TrendingUp,
      category: 'Full-Stack',
      status: 'Development'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'Development': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'Research': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-gradient bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative solutions showcasing expertise in AI/ML, distributed systems, and full-stack development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden hover-lift group"
            >
              {/* Project Header */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-400">{project.category}</span>
                        <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.05 + 0.3 }}
                        className="flex items-start text-gray-300 text-sm"
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 + 0.5 }}
                        className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-white text-sm hover:scale-105 transition-transform duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </motion.a>
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/VishakBaddur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
