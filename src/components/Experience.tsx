'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: 'Machine Learning Engineer Intern',
      company: 'National Remote Sensing Center, ISRO',
      location: 'Hyderabad, India',
      period: 'Mar 2024 - Jul 2024',
      description: 'Engineered end-to-end ML pipelines for large-scale hyperspectral data processing and real-time sensor analysis at India\'s premier space research organization.',
      achievements: [
        'Built automated data processing systems improving insight extraction efficiency by 40%',
        'Implemented feature engineering and PCA dimensionality reduction for hyperspectral data',
        'Developed production-ready ML models with comprehensive testing and documentation',
        'Collaborated on deploying scalable ML solutions for enterprise geospatial intelligence',
      ],
      technologies: ['Python', 'PyTorch', 'ML Pipelines', 'Feature Engineering', 'PCA', 'Geospatial Data'],
      link: 'https://www.isro.gov.in',
    },
    {
      title: 'Software Development Intern',
      company: 'Cogniron Technology Solutions',
      location: 'Hyderabad, India',
      period: 'Oct 2023 - Nov 2023',
      description: 'Implemented CI/CD pipelines and developed backend services for AI applications with robust data integration capabilities.',
      achievements: [
        'Implemented CI/CD pipelines reducing release cycle time for ML model deployment',
        'Developed backend services and APIs for AI applications with robust data integration',
        'Maintained high-quality, well-tested codebase through rigorous code reviews',
        'Contributed to automated testing and deployment processes',
      ],
      technologies: ['Python', 'CI/CD', 'Backend APIs', 'AI Applications', 'Data Integration', 'Testing'],
      link: 'https://cogniron.com',
    },
    {
      title: 'Graduate Research Assistant',
      company: 'University of Illinois at Chicago',
      location: 'Chicago, IL',
      period: '2023 - Present',
      description: 'Conducting cutting-edge research in machine learning and artificial intelligence while maintaining a perfect 4.0 GPA in Computer Science.',
      achievements: [
        'Maintaining perfect 4.0 GPA while conducting advanced ML research',
        'Developing novel algorithms for predictive analytics and ensemble learning',
        'Contributing to academic publications and research papers',
        'Mentoring undergraduate students in machine learning projects',
      ],
      technologies: ['Machine Learning', 'Research', 'Academic Writing', 'Mentoring', 'Algorithm Development'],
      link: 'https://www.uic.edu',
    },
    {
      title: 'Undergraduate Research',
      company: 'Mahatma Gandhi Institute of Technology',
      location: 'Hyderabad, India',
      period: '2019 - 2023',
      description: 'Completed B.Tech in Computer Science and Engineering with perfect 4.0 GPA while conducting research in neural networks and computer vision.',
      achievements: [
        'Graduated with perfect 4.0 GPA in Computer Science and Engineering',
        'Conducted research in neural style transfer using VGG19',
        'Developed predictive models for employee retention analysis',
        'Built distributed database systems with ACID transaction support',
      ],
      technologies: ['Computer Science', 'Neural Networks', 'Computer Vision', 'Database Systems', 'Research'],
      link: 'https://www.mgit.ac.in',
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work <span className="text-gradient bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A journey of growth, learning, and making an impact through technology
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-start"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-slate-900 z-10"></div>

                {/* Content */}
                <div className="ml-16 flex-1">
                  <motion.div
                    className="glass rounded-2xl p-8 hover-lift"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <div className="flex items-center text-purple-400 font-semibold mb-2">
                          <span>{exp.company}</span>
                          {exp.link && (
                            <a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-2 hover:text-pink-400 transition-colors duration-300"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end text-gray-400 text-sm">
                        <div className="flex items-center mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6">{exp.description}</p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, delay: index * 0.2 + achIndex * 0.1 + 0.3 }}
                            className="flex items-start text-gray-300"
                          >
                            <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, delay: index * 0.2 + techIndex * 0.1 + 0.5 }}
                            className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-white text-sm hover:scale-105 transition-transform duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
