import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  CloudIcon, 
  CommandLineIcon, 
  PaintBrushIcon, 
  LightBulbIcon 
} from '@heroicons/react/24/outline';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  progress: number;
  color: string;
  benefits: string[];
}

const services: Service[] = [
  {
    title: 'Custom Website Development',
    description: 'End-to-end web development services to build responsive, fast, and scalable websites tailored to your business needs.',
    icon: <CodeBracketIcon className="w-8 h-8" />,
    progress: 98,
    color: 'from-blue-500 to-indigo-600',
    benefits: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Cross-browser Compatible']
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.',
    icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
    progress: 95,
    color: 'from-cyan-500 to-blue-500',
    benefits: ['Native Performance', 'Offline Capabilities', 'Push Notifications', 'App Store Optimization']
  },
  {
    title: 'Cloud Integration',
    description: 'Seamless integration with cloud services like Firebase and AWS to ensure your applications are scalable and secure.',
    icon: <CloudIcon className="w-8 h-8" />,
    progress: 90,
    color: 'from-amber-400 to-orange-500',
    benefits: ['Scalable Infrastructure', 'Real-time Database', 'Secure Authentication', 'Automated Backups']
  },
  {
    title: 'API Development',
    description: 'Building robust and secure APIs to connect your applications with third-party services and data sources.',
    icon: <CommandLineIcon className="w-8 h-8" />,
    progress: 93,
    color: 'from-green-500 to-emerald-600',
    benefits: ['RESTful Architecture', 'GraphQL Solutions', 'Authentication', 'Rate Limiting']
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually appealing user interfaces that enhance user experience and drive engagement.',
    icon: <PaintBrushIcon className="w-8 h-8" />,
    progress: 96,
    color: 'from-purple-500 to-indigo-500',
    benefits: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
  },
  {
    title: 'Tech Consulting',
    description: 'Expert advice on technology choices, architecture decisions, and best practices for your digital projects.',
    icon: <LightBulbIcon className="w-8 h-8" />,
    progress: 92,
    color: 'from-pink-500 to-rose-500',
    benefits: ['Technology Selection', 'Architecture Planning', 'Code Review', 'Performance Optimization']
  }
];

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900/90 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-primary/10 to-purple-400/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-l from-blue-400/10 to-indigo-500/10 rounded-full filter blur-3xl"></div>
      
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
      
      <Container className="relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 mb-4 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 text-primary font-medium text-sm"
          >
            Services
          </motion.div>
          
          <motion.h2 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My <span className="text-primary relative">
              Services
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5C20 2.5 60 1 100 1C140 1 180 3 199 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary/40"/>
              </svg>
            </span> & Expertise
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Delivering quality digital solutions that help businesses grow and succeed in the digital landscape
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className="group relative bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700/40 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedService(service)}
            >
              {/* Colored accent */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}></div>
              
              {/* Icon with glow effect */}
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-20 blur-xl rounded-full transform group-hover:scale-125 transition-transform duration-500`}></div>
                <div className={`relative z-10 w-14 h-14 rounded-lg flex items-center justify-center bg-gradient-to-r ${service.color} text-white`}>
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
              
              {/* Progress bar */}
              <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                <motion.div 
                  className={`h-full bg-gradient-to-r ${service.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${service.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                />
              </div>
              <p className="text-xs text-right text-gray-500 dark:text-gray-400 mb-4">Proficiency {service.progress}%</p>
              
              {/* View details button */}
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">View details</span>
                <svg 
                  className="w-5 h-5 text-primary transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              
              {/* Hover overlay with benefits */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-sm flex flex-col justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <h4 className="text-white font-bold mb-4 text-xl">Key Benefits:</h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center text-white/90"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                    >
                      <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Service detail modal */}
        {selectedService && (
          <motion.div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-3 bg-gradient-to-r ${selectedService.color}`}></div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r ${selectedService.color} text-white mr-4`}>
                      {selectedService.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{selectedService.title}</h3>
                  </div>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-8">{selectedService.description}</p>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4">Key Benefits</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedService.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r ${selectedService.color} text-white mr-3 flex-shrink-0`}>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-medium">{benefit}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Expertise Level</h4>
                  <div className="w-full h-2.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full bg-gradient-to-r ${selectedService.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedService.progress}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>Beginner</span>
                    <span>Intermediate</span>
                    <span>Expert</span>
                  </div>
                </div>
                
                <button 
                  className={`w-full py-3 mt-4 bg-gradient-to-r ${selectedService.color} text-white rounded-lg font-medium`}
                  onClick={() => {
                    setSelectedService(null);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Request This Service
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </Container>
    </section>
  );
};

export default ServicesSection; 