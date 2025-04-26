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

        {/* Additional Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            🛠️ Additional Services (Add-ons)
          </h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="py-3 px-6 text-left text-gray-800 dark:text-white font-bold">Service</th>
                  <th className="py-3 px-6 text-left text-gray-800 dark:text-white font-bold">Price (INR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-3 px-6 text-gray-700 dark:text-gray-300">Monthly Maintenance</td>
                  <td className="py-3 px-6 text-gray-700 dark:text-gray-300">₹2,000 – ₹10,000</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-3 px-6 text-gray-700 dark:text-gray-300">Hosting & Domain Setup</td>
                  <td className="py-3 px-6 text-gray-700 dark:text-gray-300">₹2,000 (one-time)</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-3 px-6 text-gray-700 dark:text-gray-300">Logo Design</td>
                  <td className="py-3 px-6 text-gray-700 dark:text-gray-300">₹1,500</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-3 px-6 text-gray-700 dark:text-gray-300">SEO Setup</td>
                  <td className="py-3 px-6 text-gray-700 dark:text-gray-300">₹3,000 – ₹7,000</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-3 px-6 text-gray-700 dark:text-gray-300">WhatsApp Chat Integration</td>
                  <td className="py-3 px-6 text-gray-700 dark:text-gray-300">₹1,000</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-3 px-6 text-gray-700 dark:text-gray-300">Google Maps Integration</td>
                  <td className="py-3 px-6 text-gray-700 dark:text-gray-300">₹500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Payment Terms */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            💳 Payment Terms
          </h3>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-indigo-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">50% advance to start the work</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-indigo-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">50% on final delivery</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-indigo-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Payments accepted via <strong>UPI / Bank Transfer / Razorpay</strong></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Why Choose Me */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            ✨ Why Choose Me?
          </h3>
          
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg p-8 text-white">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-yellow-300 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <span>Fast turnaround with high-quality work</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-yellow-300 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <span>Transparent and regular communication</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-yellow-300 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <span>Clean, secure, and responsive code</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-yellow-300 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <span>Free consultation and 1-month post-delivery support</span>
              </li>
              <li className="flex items-start md:col-span-2">
                <svg className="w-5 h-5 text-yellow-300 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <span>Experienced in both web and mobile app development</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 