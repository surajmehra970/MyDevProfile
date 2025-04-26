import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechNova',
    content: 'Suraj delivered our web application on time and with exceptional quality. His attention to detail and problem-solving skills made him stand out. We will definitely work with him again!',
    avatar: '/images/testimonials/avatar1.png',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CEO',
    company: 'StartUp Canvas',
    content: 'Working with Suraj was a game-changer for our startup. He understood our vision and transformed it into a beautiful, functional website that exceeded our expectations.',
    avatar: '/images/testimonials/avatar2.png',
    rating: 5
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Marketing Director',
    company: 'BrandFlow',
    content: 'The mobile app Suraj built for us has significantly increased our customer engagement. His technical expertise combined with an eye for design makes him a truly valuable developer.',
    avatar: '/images/testimonials/avatar3.png',
    rating: 5
  },
  {
    id: 4,
    name: 'Alex Rodriguez',
    role: 'CTO',
    company: 'DataSphere',
    content: "Suraj's work on our dashboard was exceptional. He delivered a complex system with clean code and intuitive UI. His communication throughout the project was excellent.",
    avatar: '/images/testimonials/avatar4.png',
    rating: 4
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-gray-50 dark:bg-gray-900/50">
      {/* Curved background with subtle gradient */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent dark:from-gray-800 dark:to-transparent"></div>
      
      {/* Background elements */}
      <div className="absolute top-40 right-20 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl"></div>
      
      <Container className="relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Testimonials
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl font-bold mt-6 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What My <span className="text-primary relative">Clients
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5C20 2.5 60 1 100 1C140 1 180 3 199 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary/40"/>
              </svg>
              </span> Say
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Feedback from clients I've collaborated with on various projects
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* 3D Testimonial Carousel */}
          <div className="relative h-[400px] perspective">
            {testimonials.map((testimonial, index) => {
              // Calculate position relative to active index
              const position = (index - activeIndex + testimonials.length) % testimonials.length;
              
              // Define different transforms based on position
              let transform = '';
              let zIndex = 0;
              let opacity = 0;
              
              if (position === 0) {
                // Active card
                transform = 'rotateY(0deg) translateZ(0) scale(1)';
                zIndex = 30;
                opacity = 1;
              } else if (position === 1 || position === testimonials.length - 1) {
                // Cards to the sides
                const direction = position === 1 ? 1 : -1;
                transform = `rotateY(${direction * 40}deg) translateZ(-100px) translateX(${direction * 40}%)`;
                zIndex = 20;
                opacity = 0.7;
              } else {
                // Cards further out
                const direction = position <= Math.floor(testimonials.length / 2) ? 1 : -1;
                transform = `rotateY(${direction * 60}deg) translateZ(-200px) translateX(${direction * 60}%)`;
                zIndex = 10;
                opacity = 0.4;
              }
              
              return (
                <motion.div
                  key={testimonial.id}
                  className="absolute inset-0 w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 backface-hidden"
                  style={{
                    transform,
                    zIndex,
                    opacity,
                    transition: 'all 0.7s ease-out'
                  }}
                  initial={false}
                >
                  {/* Quote icon */}
                  <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179zM16.583 17.321C15.553 16.227 15 15 15 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179z" />
                    </svg>
                  </div>
                  
                  <div className="mt-4">
                    {/* Stars rating */}
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    {/* Testimonial content */}
                    <p className="text-gray-600 dark:text-gray-300 text-lg italic mb-6">"{testimonial.content}"</p>
                    
                    {/* Author info */}
                    <div className="flex items-center mt-8">
                      <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-primary/30 to-purple-500/30 flex items-center justify-center text-primary/70 font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-center items-center mt-10 gap-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary hover:shadow-lg transition-all"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeIndex
                      ? "bg-primary w-8"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary hover:shadow-lg transition-all"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection; 