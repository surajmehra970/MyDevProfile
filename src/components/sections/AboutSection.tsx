import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'mobile' | 'cloud';
  icon?: string;
}

const skills: Skill[] = [
  { name: 'React', level: 92, category: 'frontend', icon: '⚛️' },
  { name: 'TypeScript', level: 88, category: 'frontend', icon: '🔷' },
  { name: 'Flutter', level: 85, category: 'mobile', icon: '📱' },
  { name: 'Firebase', level: 90, category: 'backend', icon: '🔥' },
  { name: 'Node.js', level: 86, category: 'backend', icon: '🟢' },
  { name: 'MongoDB', level: 82, category: 'backend', icon: '🍃' },
  { name: 'React Native', level: 84, category: 'mobile', icon: '📲' },
  { name: 'AWS', level: 78, category: 'cloud', icon: '☁️' },
  { name: 'UI/UX Design', level: 86, category: 'frontend', icon: '🎨' },
  { name: 'RESTful APIs', level: 88, category: 'backend', icon: '🔌' }
];

const AboutSection: React.FC = () => {
  const experienceYears = 3;
  const projectsCompleted = 11;
  const clientsSatisfied = 6;
  
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-primary/10 to-indigo-500/10 rounded-full filter blur-3xl opacity-70"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-purple-400/10 rounded-full filter blur-3xl opacity-70"></div>
      
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
      
      <Container className="relative z-10">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-16"
        >
          <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
            About Me
          </span>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="w-full lg:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative mx-auto max-w-sm perspective">
              {/* 3D Card Effect */}
              <motion.div 
                className="relative w-full aspect-[4/5] bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl z-10 p-1.5 transform-gpu"
                initial={{ rotateY: 25 }}
                whileHover={{ rotateY: 0, scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-2xl opacity-80 overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
                </div>
                
                <div className="h-full w-full relative rounded-xl overflow-hidden bg-white dark:bg-gray-900 backdrop-blur-sm">
                  {/* Profile image here */}
                  <div className="h-3/4 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center relative overflow-hidden">
                    {/* Modern skill showcase background elements */}
                    <div className="absolute inset-0 overflow-hidden">
                      {/* Tech pattern background */}
                      <div className="absolute inset-0 opacity-5">
                        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <pattern id="circuit-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                              <path d="M 0 10 L 5 10 M 15 10 L 20 10 M 10 0 L 10 5 M 10 15 L 10 20" stroke="currentColor" strokeWidth="0.5" fill="none" />
                              <circle cx="10" cy="10" r="2" fill="currentColor" />
                            </pattern>
                          </defs>
                          <rect width="100" height="100" fill="url(#circuit-pattern)" />
                        </svg>
                      </div>
                      
                      {/* Floating skill icons */}
                      <div className="absolute top-1/4 left-5 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-600 animate-float-slow">
                        <span className="text-lg">⚛️</span>
                      </div>
                      <div className="absolute bottom-1/4 left-10 w-7 h-7 bg-green-500/20 rounded-lg flex items-center justify-center text-green-600 animate-float-slower">
                        <span className="text-lg">🔥</span>
                      </div>
                      <div className="absolute top-1/3 right-8 w-9 h-9 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-600 animate-float">
                        <span className="text-lg">📱</span>
                      </div>
                      <div className="absolute bottom-1/3 right-5 w-6 h-6 bg-yellow-500/20 rounded-lg flex items-center justify-center text-yellow-600 animate-float-medium">
                        <span className="text-sm">JS</span>
                      </div>
                    </div>
                    
                    {/* Modern glowing circular background for profile */}
                    <div className="relative">
                      {/* Multi-layered backdrop for the profile */}
                      <div className="absolute inset-[-20%] rounded-full bg-gradient-to-br from-primary/30 to-blue-500/30 animate-pulse-slow"></div>
                      <div className="absolute inset-[-15%] rounded-full bg-gradient-to-br from-violet-500/20 to-blue-400/20 blur-sm"></div>
                      <div className="absolute inset-[-10%] rounded-full bg-gradient-to-br from-primary/20 to-blue-500/10 rotate-45 blur-sm"></div>
                      
                      {/* Profile image with modern styling */}
                      <div className="relative w-36 h-36 rounded-full flex items-center justify-center shadow-xl overflow-hidden border-4 border-white/90 dark:border-gray-700/90 z-10 bg-gradient-to-b from-blue-100 to-indigo-50 dark:from-blue-900 dark:to-indigo-900">
                        {/* Modern abstract avatar illustration */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          {/* Abstract geometric background */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20"></div>
                          
                          {/* Abstract avatar shape - head */}
                          <div className="relative w-24 h-24">
                            <div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg left-2 top-0"></div>
                            
                            {/* Geometric details */}
                            <div className="absolute w-8 h-2 bg-white/90 rounded-full transform rotate-6 top-8 left-7"></div>
                            <div className="absolute w-6 h-6 rounded-full border-2 border-white/90 top-6 left-5"></div>
                            <div className="absolute w-6 h-6 rounded-full border-2 border-white/90 top-6 right-5"></div>
                            
                            {/* Abstract face elements */}
                            <div className="absolute w-4 h-1 bg-white/80 rounded-full top-14 left-8"></div>
                            
                            {/* Decorative elements */}
                            <div className="absolute w-3 h-3 rounded-full bg-primary top-2 right-5 animate-pulse-slow"></div>
                            <div className="absolute w-2 h-2 rounded-full bg-purple-500 bottom-2 left-4 animate-pulse"></div>
                            <div className="absolute w-10 h-1 bg-indigo-300/50 rounded-full bottom-4 left-5 transform -rotate-12"></div>
                          </div>
                        </div>
                        
                        {/* Animated particle effects */}
                        <div className="absolute w-2 h-2 rounded-full bg-blue-400 top-5 right-10 animate-float-slow"></div>
                        <div className="absolute w-1.5 h-1.5 rounded-full bg-indigo-500 bottom-6 right-7 animate-float-medium"></div>
                        <div className="absolute w-1 h-1 rounded-full bg-purple-300 top-10 left-8 animate-float-slower"></div>
                      </div>
                      
                      {/* Circular skill indicator */}
                      <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-primary rounded-full border-2 border-white dark:border-gray-800 shadow-lg flex items-center justify-center text-white font-semibold text-xs z-20">
                        <span>3+ YRS</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Profile info */}
                  <div className="px-6 py-4 flex flex-col items-center">
                    <h3 className="text-xl font-bold mb-1">Suraj Mehra</h3>
                    <p className="text-primary text-sm font-medium">Full-Stack Developer</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 h-24 w-24 bg-gradient-to-br from-primary/30 to-blue-500/30 rounded-xl -rotate-6 -z-10 shadow-lg"></div>
              <div className="absolute top-1/4 -left-6 h-16 w-16 bg-gradient-to-br from-yellow-400/30 to-red-500/30 rounded-lg rotate-12 -z-10 shadow-lg"></div>
              <div className="absolute bottom-10 -left-10 h-20 w-20 bg-gradient-to-br from-green-400/30 to-blue-500/30 rounded-lg rotate-45 -z-10 shadow-lg"></div>
            </div>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 mt-12 mx-auto max-w-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="stat-card bg-white dark:bg-gray-800/60 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700/50 flex flex-col items-center">
                <motion.div 
                  className="text-2xl font-bold text-primary mb-1"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {experienceYears}+
                </motion.div>
                <span className="text-xs text-gray-500 dark:text-gray-400 text-center">Years Experience</span>
              </div>
              
              <div className="stat-card bg-white dark:bg-gray-800/60 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700/50 flex flex-col items-center">
                <motion.div 
                  className="text-2xl font-bold text-primary mb-1"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {projectsCompleted}
                </motion.div>
                <span className="text-xs text-gray-500 dark:text-gray-400 text-center">Projects</span>
              </div>
              
              <div className="stat-card bg-white dark:bg-gray-800/60 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700/50 flex flex-col items-center">
                <motion.div 
                  className="text-2xl font-bold text-primary mb-1"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {clientsSatisfied}
                </motion.div>
                <span className="text-xs text-gray-500 dark:text-gray-400 text-center">Happy Clients</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-8">
              <div>
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold mb-6 relative inline-block"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Transforming <span className="text-primary relative">Ideas
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5.5C36.5 2.5 103.5 1 150 1C196.5 1 262 3 299 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary/40"/>
                  </svg>
                  </span> into Reality
                  
                </motion.h2>
                
                <motion.p 
                  className="text-gray-600 dark:text-gray-400 mb-6 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  I'm a passionate Full-Stack Developer based in Hyderabad, specializing in creating seamless 
                  web and mobile experiences. With {experienceYears}+ years of experience across various domains, 
                  I've developed a keen understanding of how to translate complex requirements into elegant, user-friendly solutions.
                </motion.p>
                
                <motion.p 
                  className="text-gray-600 dark:text-gray-400 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  My development approach focuses on creating scalable, maintainable applications 
                  built with modern technologies like React, Flutter, and Firebase. I'm passionate about 
                  crafting intuitive interfaces backed by robust architectures that solve real-world 
                  problems and deliver exceptional user experiences.
                </motion.p>
              </div>
              
              <div>
                <motion.h3 
                  className="text-xl font-semibold mb-6 flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <span className="inline-block w-8 h-8 bg-primary/10 dark:bg-primary/20 rounded-lg mr-3 flex items-center justify-center text-primary">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  Technical Expertise
                </motion.h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="bg-white dark:bg-gray-800/50 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group border border-gray-100 dark:border-gray-700/50"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                      whileHover={{ y: -2 }}
                    >
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-blue-500 opacity-70"></div>
                      <div className="pl-3 flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="mr-2 text-xl">{skill.icon}</span>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="mt-2 pl-3 bg-gray-100 dark:bg-gray-700 h-2 rounded-full w-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-primary/10 dark:bg-primary/20 text-primary font-medium rounded-lg hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors group"
              >
                <span>Let's work together</span>
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection; 