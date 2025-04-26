import React from 'react';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Pricing Plans
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the perfect service package for your needs. Custom quotes available for specific requirements.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            📦 Service Packages
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white">Starter Website Package</h4>
                <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mt-4">₹7,000</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">1-page responsive static website (Landing page)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Mobile & desktop optimized</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Contact form (Email integration)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Basic SEO setup</span>
                  </li>
                  <li className="flex items-center mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <svg className="w-5 h-5 text-indigo-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300"><strong>Delivery:</strong> 3–5 days</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Standard Package */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform scale-105 border-2 border-indigo-500 relative transition-transform hover:scale-110">
              <div className="absolute top-0 right-0 bg-indigo-500 text-white py-1 px-4 text-sm font-bold">
                POPULAR
              </div>
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white">Standard Website Package</h4>
                <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mt-4">₹20,000</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Up to 5 responsive pages</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Custom design layout</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Contact form with email</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Basic admin panel (for content updates)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Hosting & domain setup assistance</span>
                  </li>
                  <li className="flex items-center mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <svg className="w-5 h-5 text-indigo-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300"><strong>Delivery:</strong> 7–10 days</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Premium Package */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white">Premium Website Package</h4>
                <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mt-4">₹45,000+</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Up to 10 pages</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Admin panel (CMS/custom)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">E-commerce functionality (optional)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Payment gateway integration</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">SEO optimization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Free 1-month support/maintenance</span>
                  </li>
                  <li className="flex items-center mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <svg className="w-5 h-5 text-indigo-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300"><strong>Delivery:</strong> 14–20 days</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services - UPDATED UI */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            🛠️ Additional Services (Add-ons)
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-750">
                <h4 className="font-semibold text-gray-800 dark:text-white">Monthly Maintenance</h4>
              </div>
              <div className="p-5">
                <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400">₹2,000 – ₹10,000</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-750">
                <h4 className="font-semibold text-gray-800 dark:text-white">Hosting & Domain Setup</h4>
              </div>
              <div className="p-5">
                <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400">₹2,000 <span className="text-sm font-normal text-gray-500 dark:text-gray-400">(one-time)</span></p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-750">
                <h4 className="font-semibold text-gray-800 dark:text-white">Logo Design</h4>
              </div>
              <div className="p-5">
                <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400">₹1,500</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-750">
                <h4 className="font-semibold text-gray-800 dark:text-white">SEO Setup</h4>
              </div>
              <div className="p-5">
                <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400">₹3,000 – ₹7,000</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-750">
                <h4 className="font-semibold text-gray-800 dark:text-white">WhatsApp Chat Integration</h4>
              </div>
              <div className="p-5">
                <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400">₹1,000</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-750">
                <h4 className="font-semibold text-gray-800 dark:text-white">Google Maps Integration</h4>
              </div>
              <div className="p-5">
                <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400">₹500</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Terms - UPDATED UI */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            💳 Payment Terms
          </h3>
          
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20 mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">50% Advance</h4>
                <p className="text-sm text-white/80">Required to start the work</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20 mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">50% on Delivery</h4>
                <p className="text-sm text-white/80">Due upon final delivery</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20 mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Payment Methods</h4>
                <p className="text-sm text-white/80">UPI / Bank Transfer / Razorpay</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Me - UPDATED UI */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            ✨ Why Choose Me?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900 mb-4">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Fast Turnaround</h4>
              <p className="text-gray-600 dark:text-gray-300">High-quality work delivered within agreed timeframes</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900 mb-4">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Clear Communication</h4>
              <p className="text-gray-600 dark:text-gray-300">Transparent and regular updates throughout the project</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900 mb-4">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Clean Code</h4>
              <p className="text-gray-600 dark:text-gray-300">Secure, responsive, and well-structured codebase</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900 mb-4">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Free Support</h4>
              <p className="text-gray-600 dark:text-gray-300">Consultation and 1-month post-delivery maintenance</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900 mb-4">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Cross-Platform Skills</h4>
              <p className="text-gray-600 dark:text-gray-300">Experienced in both web and mobile app development</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900 mb-4">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Security Focus</h4>
              <p className="text-gray-600 dark:text-gray-300">Built-in security best practices for all projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 