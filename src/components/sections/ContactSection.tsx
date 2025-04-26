import React, { useState, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../layout/Container';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

interface InputFieldProps {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  required?: boolean;
  textarea?: boolean;
  rows?: number;
}

const InputField: React.FC<InputFieldProps> = ({ 
  label, 
  id, 
  type = 'text', 
  value, 
  onChange, 
  placeholder,
  required = true,
  textarea = false,
  rows = 4
}) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <motion.div 
      className="mb-6 relative"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <label 
        htmlFor={id} 
        className={`block text-sm transition-all duration-200 ${
          isFocused || value 
            ? "text-primary font-medium transform -translate-y-1" 
            : "text-gray-600 dark:text-gray-400"
        }`}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      <div className="mt-2 relative group">
        {textarea ? (
          <textarea
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            rows={rows}
            className="w-full p-3 bg-white/5 backdrop-blur-sm dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
            placeholder={isFocused ? placeholder : ""}
            required={required}
          />
        ) : (
          <input
            type={type}
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full p-3 bg-white/5 backdrop-blur-sm dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
            placeholder={isFocused ? placeholder : ""}
            required={required}
          />
        )}
        
        <div 
          className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-blue-500 transition-all duration-300 ${
            isFocused ? "w-full" : "w-0"
          }`}
        ></div>
      </div>
    </motion.div>
  );
};

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };
  
  const contactInfo = [
    { 
      icon: <EnvelopeIcon className="w-5 h-5" />, 
      title: 'Email', 
      value: 'Surajmehra2000@gmail.com',
      link: 'mailto:Surajmehra2000@gmail.com',
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      icon: <PhoneIcon className="w-5 h-5" />, 
      title: 'Phone', 
      value: '+917909055170',
      link: 'tel:+917909055170',
      color: 'from-green-500 to-teal-500'
    },
    { 
      icon: <MapPinIcon className="w-5 h-5" />, 
      title: 'Location', 
      value: 'Hyderabad, India',
      link: null,
      color: 'from-red-500 to-orange-500'
    }
  ];
  
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-primary/10 to-indigo-500/10 rounded-full filter blur-3xl opacity-70"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-purple-400/10 rounded-full filter blur-3xl opacity-70"></div>
      
      {/* Dot pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]"></div>
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-4"
        >
          <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Let's Connect
          </span>
        </motion.div>
        
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-6 relative inline-block mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="relative z-10">Get In </span>
          <span className="text-primary relative z-10">Touch</span>
          <svg className="absolute -bottom-2 left-0 w-full opacity-10" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5.5C36.5 2.5 103.5 1 150 1C196.5 1 262 3 299 7" stroke="currentColor" strokeWidth="8" strokeLinecap="round" className="text-primary"/>
          </svg>
        </motion.h2>
        
        <motion.p 
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-center text-lg mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Have a project in mind or want to discuss a potential collaboration? 
          I'm always open to new opportunities and challenges.
        </motion.p>
        
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <motion.div 
            className="w-full lg:w-1/3 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="sticky top-24 space-y-8">
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700/40 p-8 space-y-6">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <span className="inline-block w-8 h-8 bg-primary/10 dark:bg-primary/20 rounded-lg mr-3 flex items-center justify-center text-primary">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.div 
                      key={item.title}
                      className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300 group relative overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                      whileHover={{ y: -2 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                      <div className="flex items-center relative z-10">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-md`}>
                          {item.icon}
                        </div>
                        <div className="ml-4">
                          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{item.title}</p>
                          {item.link ? (
                            <a 
                              href={item.link} 
                              className="font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="font-medium text-gray-800 dark:text-gray-200">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <motion.div 
                className="glass rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <p className="text-gray-600 dark:text-gray-300 mb-4">Follow me on social media</p>
                <div className="flex justify-center space-x-3">
                  <a 
                    href="https://www.linkedin.com/in/suraj-mehra-276b94189" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#0A66C2]/10 flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://github.com/surajmehra970" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#181717]/10 flex items-center justify-center text-[#181717] dark:text-white hover:bg-[#181717] hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-2/3 order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700/40 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-blue-500 to-indigo-500"></div>
              
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="text-center max-w-md p-6">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Thank you for reaching out! I'll get back to you as soon as possible.
                      </p>
                      <button 
                        className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                        onClick={() => setSubmitSuccess(false)}
                      >
                        Send Another Message
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Fill out the form below with some information about your project or inquiry and I'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField
                    label="Your Name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                  
                  <InputField
                    label="Your Email"
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                  />
                </div>
                
                <InputField
                  label="Subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                />
                
                <InputField
                  label="Your Message"
                  id="message"
                  textarea={true}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, goals, or questions..."
                  rows={5}
                />
                
                <motion.button 
                  type="submit" 
                  className="group relative overflow-hidden px-8 py-4 bg-primary text-white rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/30 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 font-medium">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  {!isSubmitting && (
                    <motion.span 
                      className="relative z-10 ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <PaperAirplaneIcon className="w-5 h-5 transform rotate-45" />
                    </motion.span>
                  )}
                  {isSubmitting && (
                    <span className="relative z-10 ml-2">
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </span>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection; 