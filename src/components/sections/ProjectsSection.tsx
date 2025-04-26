import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../layout/Container';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  category: 'Mobile' | 'Web' | 'Backend';
  link?: string;
  status: string;
  features?: string[];
}

const projects: Project[] = [
  {
    title: 'UrbanRestLeather',
    description: 'A modern e-commerce site for a leather goods company showcasing their premium products with a focus on user experience and mobile responsiveness.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    image: '/images/projects/urbanrest-showcase.webp',
    category: 'Web',
    link: 'https://urbanrestleather.com/',
    status: 'Completed',
    features: [
      'Seamless checkout experience',
      'Product customization',
      'Responsive product galleries',
      'Customer reviews integration'
    ]
  },
  {
    title: 'CodeMaster App',
    description: 'A coding education platform that provides interactive learning experiences for programming enthusiasts at all levels.',
    techStack: ['React', 'Firebase', 'Redux', 'Material UI'],
    image: '/images/projects/codemaster-platform.webp',
    category: 'Web',
    link: 'https://codemastersm--codemastersm.asia-east1.hosted.app/',
    status: 'Completed',
    features: [
      'Interactive code editor',
      'Progress tracking system',
      'Learning path customization',
      'Community challenges'
    ]
  },
  {
    title: 'AutoPMSprint Web App',
    description: 'A project management web application that helps printing businesses track orders, manage workflow, and improve operational efficiency.',
    techStack: ['React', 'Firebase', 'Material UI', 'Cloud Functions'],
    image: '/images/projects/autopm-dashboard.webp',
    category: 'Web',
    link: 'https://autopmsprint.web.app/',
    status: 'Completed',
    features: [
      'Real-time order tracking',
      'Workflow automation',
      'Customer management system',
      'Analytics dashboard'
    ]
  },
  {
    title: 'SyncMyStore Mobile App',
    description: 'A Flutter-based mobile application for store synchronization. Currently a work in progress.',
    techStack: ['Flutter', 'Dart', 'Firebase', 'Mobile Development'],
    image: '/images/projects/syncmystore-app.webp',
    category: 'Mobile',
    link: 'https://github.com/surajmehra970/SyncMyStore',
    status: 'In Progress',
    features: [
      'Inventory management',
      'Multi-store synchronization',
      'Offline capabilities',
      'Real-time updates'
    ]
  }
];

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const filters = ['All', 'Mobile', 'Web', 'Backend'];
  const containerRef = useRef<HTMLDivElement>(null);
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
    
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
  };
  
  return (
    <section id="projects" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-primary/5 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute top-1/3 left-0 w-60 h-60 bg-purple-100 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-20"></div>
      
      <Container>
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-3"
          >
            <span className="px-6 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Projects
            </span>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My <span className="text-primary relative">
              Projects
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5C20 2.5 60 1 100 1C140 1 180 3 199 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary/40"/>
              </svg>
              </span> & Portfolio
          </motion.h2>
          <motion.p 
            className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Delivering innovative solutions that showcase technical excellence and creative problem-solving in digital applications
          </motion.p>
          
          {/* Filter tabs */}
          <motion.div 
            className="flex justify-center flex-wrap gap-2 mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          ref={containerRef}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative bg-white dark:bg-gray-800/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 transition-all duration-500"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5 }
                }
              }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Status badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                  project.status === 'Completed' 
                    ? 'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-400' 
                    : 'bg-amber-100/80 text-amber-800 dark:bg-amber-900/50 dark:text-amber-400'
                }`}>
                  {project.status}
                </span>
              </div>
              
              {/* Category badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                  project.category === 'Mobile' 
                    ? 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-400' 
                    : project.category === 'Web' 
                      ? 'bg-purple-100/80 text-purple-800 dark:bg-purple-900/50 dark:text-purple-400' 
                      : 'bg-orange-100/80 text-orange-800 dark:bg-orange-900/50 dark:text-orange-400'
                }`}>
                  {project.category}
                </span>
              </div>
              
              {/* Project image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>
                <motion.div 
                  className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative h-full w-full">
                    {project.category === 'Mobile' && (
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="w-40 h-[28rem] bg-gray-800 dark:bg-gray-900 rounded-3xl border-8 border-gray-700 dark:border-gray-800 p-1 relative shadow-lg transform -rotate-6 hover:rotate-0 transition-all duration-500">
                          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-gray-700 dark:bg-gray-600 rounded-full"></div>
                          <div className="h-full w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                            <div className="h-full w-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {project.category === 'Web' && (
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <div className="w-full max-w-md h-56 bg-gray-800 dark:bg-gray-900 rounded-lg border-4 border-gray-700 dark:border-gray-800 overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500">
                          <div className="h-6 bg-gray-700 dark:bg-gray-800 flex items-center px-2">
                            <div className="flex space-x-1.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                            </div>
                          </div>
                          <div className="p-4 bg-white dark:bg-gray-800 h-full">
                            <div className="w-full h-5 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
                            <div className="flex space-x-2 mb-3">
                              <div className="w-12 h-5 bg-primary/20 rounded"></div>
                              <div className="w-12 h-5 bg-primary/20 rounded"></div>
                              <div className="w-12 h-5 bg-primary/20 rounded"></div>
                            </div>
                            <div className="w-full h-24 bg-gray-100 dark:bg-gray-700/50 rounded mb-3"></div>
                            <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
              
              <div className="p-6 relative">
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700/70 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary font-medium hover:underline hover:text-primary-dark transition-colors duration-300"
                    >
                      Visit Project 
                      <svg className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  
                  <button
                    onClick={() => handleViewProject(project)}
                    className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary font-medium text-sm transition-colors duration-300"
                  >
                    Details
                    <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a 
            href="https://github.com/surajmehra970" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 group"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V19c0 .27.16.59.67.5C17.14 18.16 20 14.42 20 10A10 10 0 0 0 10 0z" clipRule="evenodd"/>
            </svg>
            View more on GitHub
            <span className="ml-1 text-gray-500 dark:text-gray-400 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </motion.div>
      </Container>
      
      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="h-60 md:h-80 bg-gradient-to-r from-blue-600 via-purple-600 to-primary relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {selectedProject.category === 'Mobile' && (
                      <div className="w-40 md:w-56 h-80 bg-gray-800 dark:bg-gray-900 rounded-3xl border-8 border-gray-700 dark:border-gray-800 p-1 relative shadow-2xl transform hover:rotate-0 -rotate-6 transition-all duration-500">
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-gray-700 dark:bg-gray-600 rounded-full"></div>
                        <div className="h-full w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                          <div className="h-full w-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
                        </div>
                      </div>
                    )}
                    
                    {selectedProject.category === 'Web' && (
                      <div className="w-full max-w-xl h-64 md:h-72 bg-gray-800 dark:bg-gray-900 rounded-lg border-4 border-gray-700 dark:border-gray-800 overflow-hidden shadow-2xl mx-4 transform hover:scale-105 transition-transform duration-500">
                        <div className="h-6 bg-gray-700 dark:bg-gray-800 flex items-center px-2">
                          <div className="flex space-x-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 h-full p-4">
                          <div className="w-full h-6 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                          <div className="flex space-x-2 mb-4">
                            <div className="w-16 h-6 bg-primary/20 rounded"></div>
                            <div className="w-16 h-6 bg-primary/20 rounded"></div>
                            <div className="w-16 h-6 bg-primary/20 rounded"></div>
                          </div>
                          <div className="w-full h-32 bg-gray-100 dark:bg-gray-700/50 rounded mb-4"></div>
                          <div className="w-3/4 h-5 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                          <div className="w-1/2 h-5 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <button
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">{selectedProject.title}</h2>
                  <div className="flex space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      selectedProject.status === 'Completed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                        : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400'
                    }`}>
                      {selectedProject.status}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      selectedProject.category === 'Mobile' 
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' 
                        : selectedProject.category === 'Web' 
                          ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400' 
                          : 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400'
                    }`}>
                      {selectedProject.category}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                  {selectedProject.description}
                </p>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-primary">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700/70 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {selectedProject.features && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 text-primary">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProject.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start group">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-0.5 mr-3 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors duration-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedProject.link && (
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-105 transform transition-all duration-300 mt-4"
                  >
                    Visit Project
                    <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection; 