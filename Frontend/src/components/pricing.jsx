import React from "react";
import { FaCheck, FaArrowRight } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
const pricing = () => {
  return (
    <main className="min-h-screen font-sans">
      <section className="py-20 bg-[#f4f7fb] dark:bg-[#131b2e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6 animate-fade-in-up">
              Simple, Honest
              <span className="text-[#2b7fff]"> Pricing</span>
            </h1>
            <div className="w-24 h-1 bg-[#2b7fff] mx-auto mb-8 rounded-full"></div>
            <p
              className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Start small, grow confidently. Our packages are designed to meet
              you where you are and scale as your business grows.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#fbfcfe] dark:bg-[#101729] transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#182130] text-gray-900 dark:text-white shadow-lg relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 flex flex-col"
                style={{ animationDelay: "0s" }}
              >
                <div className="flex flex-col space-y-1.5 p-6 pb-2">
                  <h3 className="font-semibold text-black dark:text-white text-xl mb-2">
                    Starter Presence
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 h-10">
                    Ideal for individuals, startups, and simple online presence
                  </p>
                  <div className="">
                    <span className="text-3xl font-bold text-black dark:text-white">
                      Ksh. 10,000
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">~$75</span>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Starting From</p>
                  </div>
                </div>
                <div className="p-6 pt-0 flex-1 flex flex-col">
                  <ul className="space-y-3 mb-8 flex-1">
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Single-page Website Design
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Mobile-responsive layout
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Basic on-page SEO (titles & meta)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Contact form integration
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        1 round of revisions
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        14-day post-launch support
                      </span>
                    </li>
                  </ul>
                  <a href="/contact" className="mt-auto">
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2b7fff] border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-[#2b7fff] h-10 px-4 py-2 w-full">
                      Get Started <FaArrowRight className="text-xs" />
                    </button>
                  </a>
                </div>
              </div>
              {/* Card 2 */}
              <div
                className="rounded-xl border border-[#2b7fff] bg-white dark:bg-[#182130] text-gray-900 dark:text-white shadow-lg relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 flex flex-col"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="absolute top-0 right-0 bg-[#2b7fff] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wide">
                  Most Popular
                </div>
                <div className="flex flex-col space-y-1.5 p-6 pb-2">
                  <h3 className="font-semibold tracking-tight text-xl mb-2 text-gray-900 dark:text-white">
                    Business Foundation
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 h-10">
                    Perfect for small businesses that need credibility and
                    visibility
                  </p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      Ksh. 25,000
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">~$190</span>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Starting From</p>
                  </div>
                </div>
                <div className="p-6 pt-0 flex-1 flex flex-col">
                  <ul className="space-y-3 mb-8 flex-1">
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Up to 5-page Website
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Fully Responsive Design
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        On-page SEO Optimization
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Contact forms & Basic integration
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Social Media Links
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        3 Rounds of Revisions
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        30-Day Support
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Google Analytics & Search Console Setup
                      </span>
                    </li>
                  </ul>
                  <a href="/contact" className="mt-auto">
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2b7fff] bg-[#2b7fff] hover:bg-blue-600 text-white h-10 px-4 py-2 w-full">
                      Get Started <FaArrowRight className="text-xs" />
                    </button>
                  </a>
                </div>
              </div>
              {/* Card 3 */}
              <div
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#182130] text-gray-900 dark:text-white shadow-lg relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 flex flex-col"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="flex flex-col space-y-1.5 p-6 pb-2">
                  <h3 className="font-semibold tracking-tight text-xl mb-2 text-gray-900 dark:text-white">
                    Growth Platform
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 h-10">
                    Design for growing Businesses that need flexibility and
                    performance
                  </p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      Ksh. 45,000
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">~$340</span>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Starting From</p>
                  </div>
                </div>
                <div className="p-6 pt-0 flex-1 flex flex-col">
                  <ul className="space-y-3 mb-8 flex-1">
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Multi-Page Website
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Custom Functionality
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        CMS Integration
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Advanced On-Page SEO
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Third-Party Integrations
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        5 Rounds of Revisions
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        60-Day Support
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Performance Optimization
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Analytics & Search Console Configurations
                      </span>
                    </li>
                  </ul>
                  <a href="/contact" className="mt-auto">
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e60c4] border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-blue-700 h-10 px-4 py-2 w-full">
                      Get Started <FaArrowRight className="text-xs" />
                    </button>
                  </a>
                </div>
              </div>
              {/* Card 4 */}
              <div
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#182130] text-gray-900 dark:text-white shadow-lg relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 flex flex-col"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="flex flex-col space-y-1.5 p-6 pb-2">
                  <h3 className="font-semibold tracking-tight text-xl mb-2 text-gray-900 dark:text-white">
                    Commerce Foundation
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 h-10">
                    Entry-level e-commerce solution built for selling online
                  </p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      Ksh. 60,000
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">~$450</span>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Starting From</p>
                  </div>
                </div>
                <div className="p-6 pt-0 flex-1 flex flex-col">
                  <ul className="space-y-3 mb-8 flex-1">
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Full e-commerce website
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Product catalog setup
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Shopping cart & checkout
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Payment gateway integration (e.g. M-Pesa)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Basic inventory management
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Customer accounts
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Defined revision scope
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        90-day support
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-[#2b7fff] mt-1 shrink-0 text-xs" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Sales & traffic analytics
                      </span>
                    </li>
                  </ul>
                  <a href="/contact" className="mt-auto">
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2b7fff] border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-[#2b7fff] h-10 px-4 py-2 w-full">
                      Get Started <FaArrowRight className="text-xs" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      <section className="py-12 bg-[#f4f7fb] dark:bg-[#131b2e] transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg border border-gray-200 dark:border-gray-700 border-l-4 border-l-[#2b7fff] bg-white dark:bg-[#161f30] p-6 transition-colors duration-300">
              <div className="flex gap-4">
                <IoMdInformationCircleOutline className="text-[#2b7fff] text-2xl shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Hosting & Domain Costs
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">
                    Package prices cover design and development only. Hosting,
                    domains, and third-party services are billed separately.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    We guide you in choosing reliable hosting and assist with
                    setup to ensure stability and performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      <section className="py-12 bg-white dark:bg-[#0b1120] transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Working with International Clients
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              We work with clients worldwide. Prices in KES can be paid in USD
              or other major currencies at current exchange rates.
            </p>
            <a href="/contact">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2b7fff] border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-500 h-11 rounded-md px-8">
                Discuss Your Project <FaArrowRight className="text-xs" />
              </button>
            </a>
          </div>
        </div>
      </section>
      

      <section className="py-16 bg-[#f4f7fb] dark:bg-[#101729] transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Need Something More Custom?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Larger platforms, integrations, or long-term builds require proper
              scoping. Let's talk.
            </p>
            <a href="/contact">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b74f4] border border-transparent bg-[#0b74f4] text-white hover:bg-[#0b74f4]/90 hover:shadow-[0_0_20px_rgba(11,116,244,0.6)] hover:scale-105  h-11 rounded-md px-8">
                Get a Custom Quote <FaArrowRight className="text-xs" />
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
export default pricing;
