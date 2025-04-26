import React from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaCode, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';
import Container from './Container';

const techStack = [
  { name: 'React', icon: 'https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black' },
  { name: 'JavaScript', icon: 'https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black' },
  { name: 'TypeScript', icon: 'https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white' },
  { name: 'Flutter', icon: 'https://img.shields.io/badge/-Flutter-02569B?style=flat-square&logo=flutter&logoColor=white' },
  { name: 'Firebase', icon: 'https://img.shields.io/badge/-Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black' },
  { name: 'Spring Boot', icon: 'https://img.shields.io/badge/-Spring%20Boot-6DB33F?style=flat-square&logo=spring-boot&logoColor=white' },
  { name: 'AWS', icon: 'https://img.shields.io/badge/-AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white' },
];

const services = [
  { name: 'Web Development', icon: <FaLaptopCode className="w-5 h-5" /> },
  { name: 'Mobile Development', icon: <FaMobileAlt className="w-5 h-5" /> },
  { name: 'Custom Solutions', icon: <FaCode className="w-5 h-5" /> },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-20 pb-12 overflow-hidden bg-gray-50 dark:bg-gray-900/95">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl opacity-50 translate-x-1/4 translate-y-1/4"></div>
      
      <Container>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 pb-12 border-b border-gray-200 dark:border-gray-800/50">
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Dev<span className="text-gray-800 dark:text-white">Portfolio</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Turning ideas into powerful websites & mobile applications with modern technologies and best practices.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700/50 hover:bg-primary hover:border-primary hover:text-white transform hover:scale-110 transition-all duration-300 shadow-sm"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/surajmehra970"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700/50 hover:bg-primary hover:border-primary hover:text-white transform hover:scale-110 transition-all duration-300 shadow-sm"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-2.5 bg-white dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700/50 hover:bg-primary hover:border-primary hover:text-white transform hover:scale-110 transition-all duration-300 shadow-sm"
                aria-label="Email"
              >
                <FaEnvelope className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name} className="flex items-center group">
                  <div className="p-2 mr-3 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
                    {service.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2 mb-2">
              {techStack.map((tech) => (
                <img
                  key={tech.name}
                  src={tech.icon}
                  alt={tech.name}
                  className="h-6 hover:scale-110 transition-transform duration-300 transform shadow-sm"
                />
              ))}
            </div>
            <a 
              href="#projects" 
              className="mt-4 text-primary font-medium hover:text-primary-dark flex items-center transition-colors duration-300"
            >
              View my projects
              <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} DevPortfolio. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
            Designed and developed with <span className="text-red-500">❤</span> by Suraj Mehra
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 