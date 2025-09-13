'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const blogPosts = [
  {
    id: 1,
    title: 'Building Production-Ready AI Systems: Lessons from ISRO',
    excerpt: 'A deep dive into the challenges and solutions when deploying machine learning models at scale in real-world applications.',
    content: 'In this comprehensive guide, I share my experience building production-ready AI systems during my internship at ISRO. From data preprocessing to model deployment, learn the key principles that make AI systems reliable and scalable.',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'AI/ML',
    tags: ['Machine Learning', 'Production', 'ISRO', 'Python'],
    featured: true,
    image: '/api/placeholder/600/300'
  },
  {
    id: 2,
    title: 'The Future of AI: From Research to Reality',
    excerpt: 'Exploring the latest trends in artificial intelligence and how they\'re shaping the future of technology.',
    content: 'An analysis of current AI trends and their potential impact on various industries. From transformer models to quantum computing, discover what\'s next in the world of artificial intelligence.',
    date: '2024-01-08',
    readTime: '6 min read',
    category: 'AI/ML',
    tags: ['AI Trends', 'Future Tech', 'Innovation'],
    featured: true,
    image: '/api/placeholder/600/300'
  },
  {
    id: 3,
    title: 'From Student to Software Engineer: My Journey',
    excerpt: 'Reflecting on the key lessons learned while transitioning from academia to professional software development.',
    content: 'A personal reflection on the journey from being a computer science student to working as a software engineer. Learn about the skills, mindset, and experiences that shaped my career path.',
    date: '2024-01-01',
    readTime: '5 min read',
    category: 'Career',
    tags: ['Career', 'Learning', 'Growth'],
    featured: false,
    image: '/api/placeholder/600/300'
  },
  {
    id: 4,
    title: 'Optimizing Machine Learning Pipelines for Performance',
    excerpt: 'Best practices for building efficient ML pipelines that can handle large-scale data processing.',
    content: 'Technical deep-dive into optimizing machine learning pipelines for better performance. Covering data preprocessing, model training, and inference optimization techniques.',
    date: '2023-12-20',
    readTime: '10 min read',
    category: 'AI/ML',
    tags: ['Performance', 'Optimization', 'MLOps'],
    featured: false,
    image: '/api/placeholder/600/300'
  },
  {
    id: 5,
    title: 'Building Scalable Web Applications with Modern Tech Stack',
    excerpt: 'A guide to building modern, scalable web applications using React, Node.js, and cloud technologies.',
    content: 'Comprehensive guide to building scalable web applications. From frontend architecture to backend design, learn the best practices for creating robust and maintainable applications.',
    date: '2023-12-10',
    readTime: '7 min read',
    category: 'Web Development',
    tags: ['React', 'Node.js', 'Scalability', 'Architecture'],
    featured: false,
    image: '/api/placeholder/600/300'
  },
  {
    id: 6,
    title: 'The Art of Problem Solving in Software Engineering',
    excerpt: 'Developing a systematic approach to solving complex technical problems in software development.',
    content: 'Learn how to approach complex problems systematically in software engineering. From debugging to architecture decisions, discover the mindset and techniques that lead to effective solutions.',
    date: '2023-11-28',
    readTime: '6 min read',
    category: 'Engineering',
    tags: ['Problem Solving', 'Debugging', 'Architecture'],
    featured: false,
    image: '/api/placeholder/600/300'
  }
]

export default function PremiumBlog() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 3)

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
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
            <span className="text-gradient-purple">Latest Articles</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Thoughts on AI, technology, and the journey of building the future, one line of code at a time.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8">Featured Articles</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group glass hover-lift h-full overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                    <div className="text-4xl">📝</div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">Featured</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white/10 rounded-md text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Button variant="ghost" size="sm" className="group w-full">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-8">Recent Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group glass hover-lift h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-1 bg-white/10 rounded text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-purple-400 transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300 line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="group w-full">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View All Posts Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="premium" className="group">
            View All Articles
            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
