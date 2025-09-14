'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'AI-Powered Satellite Image Analysis',
    company: 'ISRO',
    description: 'Developed machine learning pipelines for satellite imagery analysis, achieving 40% efficiency improvements in data processing.',
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'AWS', 'Docker'],
    github: 'https://github.com/VishakBaddur/satellite-analysis',
    live: 'https://satellite-analysis-demo.com',
    featured: true
  },
  {
    id: 2,
    title: 'Intelligent Document Processing System',
    company: 'Cogniron',
    description: 'Built an AI system for automated document processing and data extraction with 95% accuracy.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
    github: 'https://github.com/VishakBaddur/document-processor',
    live: 'https://doc-processor-demo.com',
    featured: true
  },
  {
    id: 3,
    title: 'Real-time Stock Prediction Platform',
    company: 'Personal Project',
    description: 'Created a real-time stock prediction platform using LSTM networks and sentiment analysis.',
    technologies: ['Python', 'LSTM', 'Pandas', 'NumPy', 'Streamlit', 'Yahoo Finance API'],
    github: 'https://github.com/VishakBaddur/stock-predictor',
    live: 'https://stock-predictor-demo.com',
    featured: false
  },
  {
    id: 4,
    title: 'Autonomous Vehicle Simulation',
    company: 'University Project',
    description: 'Built a simulation environment for autonomous vehicle testing using reinforcement learning.',
    technologies: ['Python', 'Unity', 'ML-Agents', 'TensorFlow', 'OpenAI Gym'],
    github: 'https://github.com/VishakBaddur/autonomous-sim',
    live: null,
    featured: false
  },
  {
    id: 5,
    title: 'Blockchain-based Supply Chain',
    company: 'Hackathon Winner',
    description: 'Developed a transparent supply chain solution using blockchain and smart contracts.',
    technologies: ['Solidity', 'Web3.js', 'React', 'Node.js', 'IPFS', 'Ethereum'],
    github: 'https://github.com/VishakBaddur/supply-chain-blockchain',
    live: 'https://supply-chain-demo.com',
    featured: true
  },
  {
    id: 6,
    title: 'AI Chatbot for Customer Service',
    company: 'Freelance',
    description: 'Built an intelligent chatbot using transformer models for customer service automation.',
    technologies: ['Python', 'Transformers', 'Hugging Face', 'FastAPI', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/VishakBaddur/ai-chatbot',
    live: 'https://chatbot-demo.com',
    featured: false
  }
]

export default function CleanProjects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-purple-400">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my most impactful work, from AI research at ISRO to innovative solutions 
            that solve real-world problems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-full hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                {/* Project Header */}
                <div className="mb-4">
                  {project.featured && (
                    <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      Featured
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-purple-400 font-medium text-sm">
                    {project.company}
                  </p>
                </div>

                {/* Project Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/10 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-white/10 rounded text-xs font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                  
                  <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
