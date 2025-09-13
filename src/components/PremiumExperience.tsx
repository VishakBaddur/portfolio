'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, Users } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const experiences = [
  {
    id: 1,
    title: 'AI Research Intern',
    company: 'ISRO - National Remote Sensing Center',
    location: 'Hyderabad, India',
    duration: 'June 2023 - August 2023',
    type: 'Internship',
    description: 'Developed machine learning pipelines for satellite imagery analysis, achieving 40% efficiency improvements in data processing.',
    achievements: [
      'Led development of ML pipelines for satellite image analysis',
      'Achieved 40% efficiency improvements in data processing',
      'Reduced processing time from hours to minutes',
      'Collaborated with senior scientists on research projects'
    ],
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'AWS', 'Docker'],
    icon: '🚀'
  },
  {
    id: 2,
    title: 'Software Development Intern',
    company: 'Cogniron',
    location: 'Remote',
    duration: 'January 2023 - May 2023',
    type: 'Internship',
    description: 'Built intelligent document processing systems and AI-powered automation tools for enterprise clients.',
    achievements: [
      'Developed AI system for automated document processing',
      'Achieved 95% accuracy in data extraction',
      'Implemented real-time processing capabilities',
      'Reduced manual processing time by 80%'
    ],
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
    icon: '🤖'
  },
  {
    id: 3,
    title: 'Computer Science Student',
    company: 'University of Illinois at Chicago',
    location: 'Chicago, IL',
    duration: 'August 2021 - May 2025',
    type: 'Education',
    description: 'Pursuing Bachelor of Science in Computer Science with focus on AI/ML and software engineering.',
    achievements: [
      'Maintaining perfect 4.0 GPA',
      'Specializing in AI/ML and software engineering',
      'Active in computer science clubs and competitions',
      'Completed advanced coursework in algorithms and data structures'
    ],
    technologies: ['Java', 'Python', 'C++', 'JavaScript', 'React', 'Node.js'],
    icon: '🎓'
  }
]

const skills = [
  { name: 'Python', level: 95, category: 'Programming' },
  { name: 'Machine Learning', level: 90, category: 'AI/ML' },
  { name: 'PyTorch', level: 88, category: 'AI/ML' },
  { name: 'TensorFlow', level: 85, category: 'AI/ML' },
  { name: 'React', level: 90, category: 'Frontend' },
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'AWS', level: 80, category: 'Cloud' },
  { name: 'Docker', level: 85, category: 'DevOps' },
  { name: 'PostgreSQL', level: 88, category: 'Database' },
  { name: 'Git', level: 92, category: 'Tools' }
]

export default function PremiumExperience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
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
            <span className="text-gradient-purple">Experience & Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey in technology, from academic excellence to real-world impact at leading organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Professional Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Line */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-purple-600 to-pink-600"></div>
                  )}
                  
                  <Card className="glass hover-lift ml-12">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-2xl">
                            {exp.icon}
                          </div>
                          <div>
                            <CardTitle className="text-xl">{exp.title}</CardTitle>
                            <p className="text-purple-400 font-semibold">{exp.company}</p>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{exp.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Award className="h-4 w-4 mr-2" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-gray-300 flex items-start">
                              <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-white/10 rounded-md text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded">
                        {skill.category}
                      </span>
                    </div>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12"
            >
              <h4 className="font-semibold mb-4">Additional Skills & Interests</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass rounded-lg p-4">
                  <h5 className="font-medium mb-2">Languages</h5>
                  <div className="flex flex-wrap gap-2">
                    {['English', 'Spanish (Learning)', 'Hindi', 'Telugu'].map((lang) => (
                      <span key={lang} className="px-2 py-1 bg-white/10 rounded text-xs">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="glass rounded-lg p-4">
                  <h5 className="font-medium mb-2">Interests</h5>
                  <div className="flex flex-wrap gap-2">
                    {['Basketball', 'Chess', 'AI Research', 'Startups'].map((interest) => (
                      <span key={interest} className="px-2 py-1 bg-white/10 rounded text-xs">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
