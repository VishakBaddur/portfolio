'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

const projects = [
  {
    id: 1,
    title: 'AI-Powered Satellite Image Analysis',
    company: 'ISRO',
    description: 'Developed machine learning pipelines for satellite imagery analysis, achieving 40% efficiency improvements in data processing.',
    longDescription: 'Led the development of advanced ML pipelines for satellite image analysis at ISRO\'s National Remote Sensing Center. Implemented deep learning models using PyTorch and TensorFlow to process terabytes of satellite data. The system achieved 40% efficiency improvements and reduced processing time from hours to minutes.',
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'AWS', 'Docker'],
    image: '/api/placeholder/600/400',
    github: 'https://github.com/VishakBaddur/satellite-analysis',
    live: 'https://satellite-analysis-demo.com',
    featured: true
  },
  {
    id: 2,
    title: 'Intelligent Document Processing System',
    company: 'Cogniron',
    description: 'Built an AI system for automated document processing and data extraction with 95% accuracy.',
    longDescription: 'Designed and implemented an intelligent document processing system that automatically extracts and categorizes information from various document types. The system uses advanced NLP techniques and computer vision to achieve 95% accuracy in data extraction.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
    image: '/api/placeholder/600/400',
    github: 'https://github.com/VishakBaddur/document-processor',
    live: 'https://doc-processor-demo.com',
    featured: true
  },
  {
    id: 3,
    title: 'Real-time Stock Prediction Platform',
    company: 'Personal Project',
    description: 'Created a real-time stock prediction platform using LSTM networks and sentiment analysis.',
    longDescription: 'Developed a comprehensive stock prediction platform that combines technical analysis, sentiment analysis from news and social media, and LSTM neural networks. The platform provides real-time predictions with confidence intervals and risk assessments.',
    technologies: ['Python', 'LSTM', 'Pandas', 'NumPy', 'Streamlit', 'Yahoo Finance API'],
    image: '/api/placeholder/600/400',
    github: 'https://github.com/VishakBaddur/stock-predictor',
    live: 'https://stock-predictor-demo.com',
    featured: false
  },
  {
    id: 4,
    title: 'Autonomous Vehicle Simulation',
    company: 'University Project',
    description: 'Built a simulation environment for autonomous vehicle testing using reinforcement learning.',
    longDescription: 'Created a comprehensive simulation environment for testing autonomous vehicle algorithms. The system uses reinforcement learning to train vehicles to navigate complex traffic scenarios safely and efficiently.',
    technologies: ['Python', 'Unity', 'ML-Agents', 'TensorFlow', 'OpenAI Gym'],
    image: '/api/placeholder/600/400',
    github: 'https://github.com/VishakBaddur/autonomous-sim',
    live: null,
    featured: false
  },
  {
    id: 5,
    title: 'Blockchain-based Supply Chain',
    company: 'Hackathon Winner',
    description: 'Developed a transparent supply chain solution using blockchain and smart contracts.',
    longDescription: 'Won first place in a blockchain hackathon by creating a transparent supply chain solution. The system tracks products from origin to consumer, ensuring authenticity and reducing fraud in the supply chain.',
    technologies: ['Solidity', 'Web3.js', 'React', 'Node.js', 'IPFS', 'Ethereum'],
    image: '/api/placeholder/600/400',
    github: 'https://github.com/VishakBaddur/supply-chain-blockchain',
    live: 'https://supply-chain-demo.com',
    featured: true
  },
  {
    id: 6,
    title: 'AI Chatbot for Customer Service',
    company: 'Freelance',
    description: 'Built an intelligent chatbot using transformer models for customer service automation.',
    longDescription: 'Developed a sophisticated AI chatbot that handles customer inquiries with 90% resolution rate. The system uses fine-tuned transformer models and integrates with existing CRM systems for seamless customer service automation.',
    technologies: ['Python', 'Transformers', 'Hugging Face', 'FastAPI', 'PostgreSQL', 'Redis'],
    image: '/api/placeholder/600/400',
    github: 'https://github.com/VishakBaddur/ai-chatbot',
    live: 'https://chatbot-demo.com',
    featured: false
  }
]

export default function PremiumProjects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

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
            <span className="text-gradient-purple">Featured Projects</span>
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
            >
              <Card className="group glass hover-lift h-full overflow-hidden">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                    <div className="text-4xl">🚀</div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-purple-400 font-medium">
                        {project.company}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 rounded-lg text-xs font-medium border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-white/10 rounded-lg text-xs font-medium border border-white/20">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm" className="group">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader className="pb-4">
                          <DialogTitle className="text-3xl font-bold">{project.title}</DialogTitle>
                          <DialogDescription className="text-purple-400 text-lg">
                            {project.company}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-6">
                          <p className="text-gray-300 text-lg leading-relaxed">{project.longDescription}</p>
                          <div>
                            <h4 className="font-semibold mb-4 text-xl">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-3">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium border border-white/20"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-4 pt-6">
                            {project.github && (
                              <Button variant="outline" size="lg" asChild>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                  <Github className="mr-2 h-5 w-5" />
                                  View Code
                                </a>
                              </Button>
                            )}
                            {project.live && (
                              <Button variant="premium" size="lg" asChild>
                                <a href={project.live} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="mr-2 h-5 w-5" />
                                  Live Demo
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    
                    <div className="flex space-x-2">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 glass rounded-lg hover:shadow-glow transition-all duration-300"
                        >
                          <Github className="h-4 w-4" />
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 glass rounded-lg hover:shadow-glow transition-all duration-300"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="premium" className="group">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
