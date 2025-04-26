import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Container from '../layout/Container';

const codeSnippet = `function createApp() {
  const state = reactive({});
  const app = {
    mount(selector) {
      const root = document.querySelector(selector);
      createEffect(() => { render(root); });
      return this;
    }
  };
  return app;
}`;

// Tech logos for the floating tech stack
const techLogos = [
  { name: 'React', icon: '⚛️', color: 'bg-blue-500/20 text-blue-600' },
  { name: 'Flutter', icon: '📱', color: 'bg-cyan-500/20 text-cyan-600' },
  { name: 'Firebase', icon: '🔥', color: 'bg-amber-500/20 text-amber-600' },
  { name: 'Node.js', icon: '🟢', color: 'bg-green-500/20 text-green-600' },
  { name: 'TypeScript', icon: '🔷', color: 'bg-blue-400/20 text-blue-500' },
  { name: 'MongoDB', icon: '🍃', color: 'bg-green-400/20 text-green-500' }
];

const HeroSection: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  
  // Create animated particles effect
  useEffect(() => {
    if (!particlesRef.current) return;
    
    const createParticle = () => {
      const particle = document.createElement('div');
      const size = Math.random() * 8 + 2;
      const speedX = (Math.random() - 0.5) * 2;
      const speedY = Math.random() * -3 - 1;
      const opacity = Math.random() * 0.5 + 0.2;
      const duration = Math.random() * 10 + 5;
      
      // Position in the bottom half of the screen
      const startPosX = Math.random() * window.innerWidth;
      const startPosY = window.innerHeight + size;
      
      // Random color from primary color palette
      const colors = ['#3B82F6', '#60A5FA', '#93C5FD', '#818CF8', '#A78BFA', '#6366F1'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      particle.style.position = 'absolute';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = color;
      particle.style.borderRadius = '50%';
      particle.style.left = `${startPosX}px`;
      particle.style.top = `${startPosY}px`;
      particle.style.opacity = `${opacity}`;
      particle.style.pointerEvents = 'none';
      
      particlesRef.current?.appendChild(particle);
      
      // Animate the particle
      const animation = particle.animate(
        [
          { transform: 'translate(0, 0)', opacity: opacity },
          { transform: `translate(${speedX * 100}px, ${speedY * 100}px)`, opacity: 0 }
        ],
        {
          duration: duration * 1000,
          easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
        }
      );
      
      animation.onfinish = () => {
        particle.remove();
      };
    };
    
    // Create particles at intervals
    const interval = setInterval(createParticle, 300);
    
    return () => {
      clearInterval(interval);
      if (particlesRef.current) {
        particlesRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <section id="home" className="pt-20 pb-20 md:pt-28 md:pb-28 overflow-hidden relative">
      {/* Particles container */}
      <div ref={particlesRef} className="absolute inset-0 z-0 overflow-hidden"></div>
      
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-primary/20 rounded-full filter blur-[80px]"></div>
        <div className="absolute bottom-20 left-[5%] w-72 h-72 bg-indigo-500/20 rounded-full filter blur-[80px]"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full filter blur-[80px]"></div>
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]"></div>
      
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 text-primary font-medium text-sm"
            >
              Full-Stack Developer
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Crafting <span className="text-primary relative">
                digital experiences
              </span> for the modern web
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I transform ideas into exceptional web & mobile applications with cutting-edge technology and pixel-perfect design.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link to="projects" smooth={true} duration={500} className="group">
                <div className="relative inline-flex items-center justify-center h-12 px-6 bg-primary text-white rounded-lg font-medium shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:translate-y-[-2px]">
                  <span>Explore Portfolio</span>
                  <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <div className="relative inline-flex items-center justify-center h-12 px-6 border-2 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-medium transition-all duration-300 hover:border-primary hover:text-primary">
                  <span>Contact Me</span>
                  <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary animate-ping"></div>
                </div>
              </Link>
            </motion.div>

            {/* Tech stack showcase */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Tech Stack</p>
              <div className="flex flex-wrap gap-3">
                {techLogos.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${tech.color} cursor-pointer`}
                    whileHover={{ y: -3, scale: 1.05 }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  >
                    <span className="text-lg">{tech.icon}</span>
                    <span className="text-xs font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="relative">
              {/* Terminal window */}
              <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden transform rotate-1 group hover:rotate-0 transition-transform duration-500">
                {/* Terminal header */}
                <div className="flex items-center p-3 bg-gray-800 border-b border-gray-700">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-400 font-mono ml-auto">~/projects/app</div>
                </div>
                
                {/* Terminal content */}
                <div className="font-mono text-sm text-gray-300 p-4 h-72 relative overflow-hidden">
                  <div className="flex gap-2 mb-4">
                    <span className="text-green-400">$</span>
                    <span>npm run dev</span>
                  </div>
                  
                  <div className="text-blue-400 mb-3">▶ Starting development server...</div>
                  
                  <div className="text-green-400 mb-3">✓ Ready in 382ms</div>

                  <div className="text-xs text-gray-400 mt-2">⠀</div>
                  
                  <pre className="mt-2 overflow-hidden pb-16 whitespace-pre bg-gray-800/60 p-3 rounded-md">
                    <code className="text-xs lg:text-sm text-gray-300">
                      <span className="text-blue-400">const</span> <span className="text-green-400">app</span> = <span className="text-yellow-400">{codeSnippet}</span>
                    </code>
                  </pre>
                  
                  {/* Blinking cursor */}
                  <div className="absolute bottom-6 left-7 h-4 w-2 bg-white opacity-75 animate-blink"></div>

                  {/* Fancy terminal typing effect */}
                  <div className="absolute top-24 left-4 mt-2 flex items-center">
                    <span className="text-green-400">$</span>
                    <motion.div 
                      className="ml-2 h-4"
                      initial={{ width: 0 }}
                      animate={{ width: "auto" }}
                      transition={{ duration: 1.5, delay: 1 }}
                    >
                      <motion.span 
                        className="text-white whitespace-nowrap overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.1, delay: 1 }}
                      >
                        Building amazing web experiences...
                      </motion.span>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-primary/10 dark:bg-primary/20 rounded-lg shadow-lg flex items-center justify-center text-primary border border-primary/20 transform rotate-12 animate-float z-10">
                <svg className="w-12 h-12 opacity-80" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25v4.7z" fill="currentColor"/>
                </svg>
              </div>
              
              <div className="absolute -top-6 left-10 w-24 h-10 bg-yellow-400/10 dark:bg-yellow-400/20 rounded-md border border-yellow-400/30 flex items-center justify-center text-yellow-500 transform -rotate-6 animate-float-reverse shadow-md">
                <span className="text-xs font-semibold">TypeScript</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500 dark:text-gray-400"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-5 h-9 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 