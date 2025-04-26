import React from 'react';

const DesignShowcaseSection: React.FC = () => {
  return (
    <section id="design-showcase" className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 text-sm font-medium rounded-full mb-4">Design Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Bringing <span className="text-primary relative">
            Designs
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5C20 2.5 60 1 100 1C140 1 180 3 199 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary/40"/>
            </svg>
            </span> to Life
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Modern interfaces that captivate users and drive engagement. See how I combine aesthetics with functionality.
          </p>
        </div>

        {/* Feature Cards with Modern Design Elements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1 - Modern Layouts */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2">
            <div className="h-3 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            <div className="p-6">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7V5Z" fill="currentColor" opacity="0.5"/>
                  <path d="M4 11C4 10.4477 4.44772 10 5 10H11C11.5523 10 12 10.4477 12 11V19C12 19.5523 11.5523 20 11 20H5C4.44772 20 4 19.5523 4 19V11Z" fill="currentColor"/>
                  <path d="M16 11C16 10.4477 16.4477 10 17 10H19C19.5523 10 20 10.4477 20 11V19C20 19.5523 19.5523 20 19 20H17C16.4477 20 16 19.5523 16 19V11Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Responsive Layouts</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Crafting interfaces that adapt perfectly to any device size while maintaining visual harmony.</p>
              <span className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 group-hover:translate-x-1 transition-transform duration-300">
                Learn more
                <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </div>
          </div>

          {/* Card 2 - UI Elements */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2">
            <div className="h-3 bg-gradient-to-r from-purple-500 to-pink-600"></div>
            <div className="p-6">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.5" d="M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z" fill="currentColor"/>
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="currentColor"/>
                  <path d="M6 10C6 10.5523 5.55228 11 5 11C4.44772 11 4 10.5523 4 10C4 9.44772 4.44772 9 5 9C5.55228 9 6 9.44772 6 10Z" fill="currentColor"/>
                  <path d="M6 14C6 14.5523 5.55228 15 5 15C4.44772 15 4 14.5523 4 14C4 13.4477 4.44772 13 5 13C5.55228 13 6 13.4477 6 14Z" fill="currentColor"/>
                  <path d="M20 10C20 10.5523 19.5523 11 19 11C18.4477 11 18 10.5523 18 10C18 9.44772 18.4477 9 19 9C19.5523 9 20 9.44772 20 10Z" fill="currentColor"/>
                  <path d="M20 14C20 14.5523 19.5523 15 19 15C18.4477 15 18 14.5523 18 14C18 13.4477 18.4477 13 19 13C19.5523 13 20 13.4477 20 14Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Modern UI Elements</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Interactive components that enhance user experience while maintaining accessibility standards.</p>
              <span className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 group-hover:translate-x-1 transition-transform duration-300">
                Learn more
                <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </div>
          </div>

          {/* Card 3 - Animations */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2">
            <div className="h-3 bg-gradient-to-r from-green-500 to-teal-600"></div>
            <div className="p-6">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.5" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"/>
                  <path d="M15.9299 8.7129L13.0755 11.5673C12.9299 11.7129 12.9299 11.9497 13.0755 12.0952L15.9299 14.9497" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M8.07092 8.7129L10.9254 11.5673C11.0709 11.7129 11.0709 11.9497 10.9254 12.0952L8.07092 14.9497" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Smooth Animations</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Thoughtful motion design that guides users through interfaces and enhances brand personality.</p>
              <span className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 group-hover:translate-x-1 transition-transform duration-300">
                Learn more
                <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Design Process Timeline */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">My Design Process</h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            
            {/* Timeline Items */}
            <div className="relative z-10">
              {/* Step 1 */}
              <div className="mb-8 flex items-center w-full">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full md:w-1/2 md:pr-8">
                      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">Discovery</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Understanding your brand, goals, and target audience to establish project direction.</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center left-1/2 transform -translate-x-1/2">
                    <div className="rounded-full bg-indigo-500 w-8 h-8 flex items-center justify-center text-white shadow-md">
                      <span>1</span>
                    </div>
                  </div>
                  <div className="md:flex md:justify-end md:w-1/2 md:pl-8"></div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="mb-8 flex items-center w-full">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:flex md:justify-end md:w-1/2 md:pr-8"></div>
                  <div className="absolute flex items-center justify-center left-1/2 transform -translate-x-1/2">
                    <div className="rounded-full bg-purple-500 w-8 h-8 flex items-center justify-center text-white shadow-md">
                      <span>2</span>
                    </div>
                  </div>
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full md:w-1/2 md:pl-8">
                      <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">Wireframing</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Creating the structural blueprint that defines layout, functionality, and user flow.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="mb-8 flex items-center w-full">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full md:w-1/2 md:pr-8">
                      <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">Visual Design</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Transforming wireframes into pixel-perfect designs with your brand identity and modern aesthetics.</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center left-1/2 transform -translate-x-1/2">
                    <div className="rounded-full bg-green-500 w-8 h-8 flex items-center justify-center text-white shadow-md">
                      <span>3</span>
                    </div>
                  </div>
                  <div className="md:flex md:justify-end md:w-1/2 md:pl-8"></div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="mb-8 flex items-center w-full">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:flex md:justify-end md:w-1/2 md:pr-8"></div>
                  <div className="absolute flex items-center justify-center left-1/2 transform -translate-x-1/2">
                    <div className="rounded-full bg-amber-500 w-8 h-8 flex items-center justify-center text-white shadow-md">
                      <span>4</span>
                    </div>
                  </div>
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full md:w-1/2 md:pl-8">
                      <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">Development</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Bringing designs to life with clean, efficient, and responsive code that performs flawlessly.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="flex items-center w-full">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full md:w-1/2 md:pr-8">
                      <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">Launch & Support</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Deployment with thorough testing and ongoing support to ensure long-term success.</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center left-1/2 transform -translate-x-1/2">
                    <div className="rounded-full bg-red-500 w-8 h-8 flex items-center justify-center text-white shadow-md">
                      <span>5</span>
                    </div>
                  </div>
                  <div className="md:flex md:justify-end md:w-1/2 md:pl-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Design Skills */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:w-1/2 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">Design Skills & Tools</h3>
              <p className="mb-4 text-indigo-100">Leveraging modern design tools and methodologies to create exceptional user experiences.</p>
              <button className="inline-flex items-center px-5 py-2.5 bg-white text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors">
                View Portfolio
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 w-full md:w-1/2">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center hover:bg-white/20 transition-colors">
                <span className="block text-white font-medium">Figma</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center hover:bg-white/20 transition-colors">
                <span className="block text-white font-medium">React</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center hover:bg-white/20 transition-colors">
                <span className="block text-white font-medium">Tailwind</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center hover:bg-white/20 transition-colors">
                <span className="block text-white font-medium">UI/UX</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center hover:bg-white/20 transition-colors">
                <span className="block text-white font-medium">TypeScript</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center hover:bg-white/20 transition-colors">
                <span className="block text-white font-medium">Animation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignShowcaseSection; 