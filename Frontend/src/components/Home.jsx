import React, { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";

const Home = () => {
  const [service, setService] = useState("");

  // Smooth scroll handler
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <section
        className="relative bg-cover bg-center bg-no-repeat py-9"
        style={{ backgroundImage: "url('/assets/hero-background.jpg')" }}
      >
        
        <div className="absolute inset-0 bg-[#e2e8f0]/45 dark:bg-black/30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 pt-5 leading-[1.1] md:leading-[1.05] text-black dark:text-white">
              Transforming Ideas into
              <span className="block text-[#0f4d95] dark:text-primary">
                Powerful Digital Experiences
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-black dark:text-white/80">
              Expert web design and development services delivering modern,
              high-performance websites tailored to your brand. From custom
              website design to full-stack web applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="/pricing">
                <button
                  name="get-a-quote"
                  className="group inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b74f4] border border-transparent bg-[#0b74f4] text-white dark:text-black hover:bg-[#0b74f4]/90 hover:shadow-[0_0_20px_rgba(11,116,244,0.6)] hover:scale-105 h-11 rounded-md px-8"
                >
                  See Pricing
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </a>

              <button
                type="button"
                name="view-our-work"
                onClick={() => scrollToSection("portfolio")}
                className="group inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b74f4] border border-transparent bg-background dark:bg-[#242f43] text-black dark:text-white hover:shadow-[0_0_20px_rgba(11,116,244,0.6)] hover:scale-105 h-11 rounded-md px-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-play group-hover:scale-110 transition-transform duration-300"
                >
                  <polygon points="6 3 20 12 6 21 6 3"></polygon>
                </svg>
                View Our Work
              </button>
            </div>
          </div>
        </div>

        <div className="relative z-10 w-6 h-10 border-2 border-[#131b2e]/30 dark:border-white/30 rounded-full flex justify-center mx-auto mt-8 animate-bounce">
          <div className="w-1 h-3 bg-[#131b2e]/60 dark:bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background dark:bg-[#131b2e]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                What We <span className="text-primary">Offer</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive web development services to help your business
                succeed in the digital world
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                className="bg-background dark:bg-[#182130] border border-gray-300 dark:border-white/10 group animate-fade-in-up p-8 rounded-3xl"
                style={{ animationDelay: "0s" }}
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-globe text-white"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  Landing Page Development
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  High-converting landing pages designed to capture leads and
                  drive business growth with modern design and optimized
                  performance.
                </p>
              </div>
              <div
                className="bg-background dark:bg-[#182130] border border-gray-300 dark:border-white/10 group animate-fade-in-up p-8 rounded-3xl"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-code text-white"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  Custom Website Design &amp; Development
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fully tailored websites built around your brand's goals,
                  combining modern design with robust functionality.
                </p>
              </div>
              <div
                className="bg-background dark:bg-[#182130] border border-gray-300 dark:border-white/10 group animate-fade-in-up p-8 rounded-3xl"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-wrench text-white"
                  >
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  Website Maintenance
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ongoing support, updates, and maintenance to keep your website
                  secure, fast, and performing at its best.
                </p>
              </div>
              <div
                className="bg-background dark:bg-[#182130] border border-gray-300 dark:border-white/10 group animate-fade-in-up p-8 rounded-3xl"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-palette text-white"
                  >
                    <circle
                      cx="13.5"
                      cy="6.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                    <circle
                      cx="17.5"
                      cy="10.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                    <circle
                      cx="8.5"
                      cy="7.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                    <circle
                      cx="6.5"
                      cy="12.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  Creative Design Services
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Professional and eye-catching designs for your brand. From
                  business cards to custom social media templates, we help your
                  brand look sharp, consistent, and memorable.
                </p>
              </div>
              <div
                className="bg-background dark:bg-[#182130] border border-gray-300 dark:border-white/10 group animate-fade-in-up p-8 rounded-3xl"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-smartphone text-white"
                  >
                    <rect
                      width="14"
                      height="20"
                      x="5"
                      y="2"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M12 18h.01"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  Web App Development
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Scalable, responsive applications built to solve real problems
                  and streamline your workflows.
                </p>
              </div>
              <div
                className="bg-background dark:bg-[#182130] border border-gray-300 dark:border-white/10 group animate-fade-in-up p-8 rounded-3xl"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-settings text-white"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  SEO &amp; Performance Optimization
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Technical SEO implementation and performance optimization to
                  improve search rankings and user experience.
                </p>
              </div>
            </div>
            <div className="text-center mt-16 animate-fade-in-up">
              <p className="text-lg text-muted-foreground mb-6">
                Ready to get started on your project?
              </p>
              <button
                type="button"
                name="go-to-contact-section"
                onClick={() => scrollToSection("contact")}
                className="group inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b74f4] border border-transparent bg-[#0b74f4] text-white hover:bg-[#0b74f4]/90 hover:shadow-[0_0_20px_rgba(11,116,244,0.6)] hover:scale-105 h-11 rounded-md px-8"
              >
                Let's Work Together
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-background dark:bg-[#101729]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Portfolio</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Showcasing our latest projects and the digital experiences we've
                crafted for our clients
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              <div
                className="bg-background dark:bg-[#182130] border border-gray-300 dark:border-white/10 group animate-fade-in-up rounded-3xl "
                style={{ animationDelay: "0s" }}
              >
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img
                    src="/assets/sunset.jpg"
                    alt="Southerners Travel"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-external-link text-white"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 text-white text-sm rounded-full">
                      Travel &amp; Tourism
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    Southerners Travel
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Full website for a Mombasa-based travel agency featuring
                    booking systems, tour packages, and destination galleries.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-[#e2e8f0] dark:bg-[#222f44] text-secondary-foreground text-xs rounded-md">
                      React
                    </span>
                    <span className="px-2 py-1 bg-[#e2e8f0] dark:bg-[#222f44] text-secondary-foreground text-xs rounded-md">
                      Talwind
                    </span>
                    <span className="px-2 py-1 bg-[#e2e8f0] dark:bg-[#222f44] text-secondary-foreground text-xs rounded-md">
                      Node.js
                    </span>
                    <span className="px-2 py-1 bg-[#e2e8f0] dark:bg-[#222f44] text-secondary-foreground text-xs rounded-md">
                      MongoDB
                    </span>
                  </div>
                  <button
                    type="button"
                    name="view-project"
                    className="flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 font-medium"
                  >
                    View Project
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div
                className="bg-background dark:bg-[#182130] border border-gray-300 dark:border-white/10 group animate-fade-in-up rounded-3xl"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img
                    src="/assets/primestone.webp"
                    alt="Primestone Builders"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-external-link text-white"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 text-white text-sm rounded-full">
                      Construction
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    Primestone Builders
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Landing page for a construction materials brand with product
                    catalogs, project showcases, and contact integration.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-[#e2e8f0] dark:bg-[#222f44] text-secondary-foreground text-xs rounded-md">
                      React
                    </span>
                    <span className="px-2 py-1 bg-[#e2e8f0] dark:bg-[#222f44] text-secondary-foreground text-xs rounded-md">
                      Tailwind CSS
                    </span>
                    <span className="px-2 py-1 v text-secondary-foreground text-xs rounded-md">
                      TypeScript
                    </span>
                  </div>
                  <button
                    type="button"
                    name="view-project"
                    className="flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 font-medium"
                  >
                    View Project
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div
                className="bg-background dark:bg-[#182130] border border-gray-300 dark:border-white/10 group animate-fade-in-up rounded-3xl"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img
                    src="/assets/vantempire.webp"
                    alt="Vantempire Global"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-external-link text-white"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 text-white text-sm rounded-full">
                      Business Support
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    Vantempire Global
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    A professional landing page for a Virtual Assistant service
                    provider, designed with clarity and trust in mind,
                    highlighting productivity solutions for growing businesses.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-[#e2e8f0] dark:bg-[#222f44] text-secondary-foreground text-xs rounded-md">
                      React
                    </span>
                    <span className="px-2 py-1 bg-[#e2e8f0] dark:bg-[#222f44] text-secondary-foreground text-xs rounded-md">
                      Tailwindcss
                    </span>
                    <span className="px-2 py-1 bg-[#e2e8f0] dark:bg-[#222f44] text-secondary-foreground text-xs rounded-md">
                      TypeScript
                    </span>
                  </div>
                  <button
                    type="button"
                    name="view-project"
                    className="flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 font-medium"
                  >
                    View Project
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center mt-16 animate-fade-in-up">
              <p className="text-lg text-muted-foreground mb-6">
                Want to see more of our work?
              </p>
              <button
                type="button"
                name="go-to-contact"
                onClick={() => scrollToSection("contact")}
                className="group inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b74f4] border border-transparent text-black dark:text-white bg-[#e0e7ef] dark:bg-[#222f44] hover:scale-105 h-11 rounded-md px-8 shadow-sm"
              >
                Let's Discuss Your Project
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-[#fbfcfe] dark:bg-[#131b2e]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About <span className="text-primary">Zamtex</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-fade-in-up">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  <span className="text-primary">Zamtex</span> is a
                  forward-thinking web development brand founded on a passion
                  for code and creativity. We specialize in turning ideas into
                  functional, scalable, and visually striking digital products.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  With a focus on agility, quality, and innovation, we partner
                  with businesses of all sizes to design solutions that deliver
                  results. Whether it's a landing page, a custom web app, or
                  ongoing website maintenance, we bring clarity, performance,
                  and style to your digital presence.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-code text-white"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Our Mission
                    </h3>
                    <p className="text-muted-foreground">
                      Empowering businesses through exceptional digital
                      experiences
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div
                  className="dark:bg-[#182130] border border-white/10 rounded-2xl p-6 text-center transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl "
                  style={{ animationDelay: "0s" }}
                >
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-code text-white"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Code &amp; Creativity
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Founded by a self-taught developer with a passion for clean,
                    efficient code
                  </p>
                </div>
                <div
                  className="dark:bg-[#182130] border border-white/10 rounded-2xl p-6 text-center transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl"
                  style={{ animationDelay: "0.1s" }}
                >
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-zap text-white"
                    >
                      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Agility &amp; Speed
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Fast turnaround times without compromising on quality or
                    attention to detail
                  </p>
                </div>
                <div
                  className="dark:bg-[#182130] border border-white/10 rounded-2xl p-6 text-center transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-target text-white"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Quality Focus
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Every project is built with precision, tested thoroughly,
                    and optimized for performance
                  </p>
                </div>
                <div
                  className="dark:bg-[#182130] border border-white/10 rounded-2xl p-6 text-center transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl"
                  style={{ animationDelay: "0.3s" }}
                >
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-users text-white"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Client-Centered
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Tailored solutions that grow with your business and exceed
                    expectations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background dark:bg-[#101729]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                From Our <span className="text-primary">Blog</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Stay updated with the latest insights, tips, and trends in web
                development and digital strategy
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <article
                className="dark:bg-[#182130] border border-gray-300 dark:border-white/10 group animate-fade-in-up rounded-3xl"
                style={{ animationDelay: "0s" }}
              >
                <div className="relative overflow-hidden h-48 rounded-t-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center"
                    alt="5 Signs Your Business Needs a Website Redesign"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-calendar"
                      >
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                      Jan 15
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-clock"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      6 min read
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                    5 Signs Your Business Needs a Website Redesign
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    Discover the key indicators that it's time to refresh your
                    website for better performance and conversions.
                  </p>
                  <a
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 font-medium"
                    href="/blog/website-redesign-signs"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </article>
              <article
                className="dark:bg-[#182130] border border-gray-300 dark:border-white/10 group animate-fade-in-up rounded-3xl"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="relative overflow-hidden h-48 rounded-t-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&crop=center"
                    alt="How Website Speed Affects Your Google Ranking"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-calendar"
                      >
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                      Jan 5
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-clock"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      7 min read
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                    How Website Speed Affects Your Google Ranking
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    Learn why site speed is crucial for SEO performance and user
                    experience in today's digital landscape.
                  </p>
                  <a
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 font-medium"
                    href="/blog/website-speed-seo"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </article>
              <article
                className="dark:bg-[#182130] border border-gray-300 dark:border-white/10 group animate-fade-in-up rounded-3xl"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="relative overflow-hidden h-48 rounded-t-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=250&fit=crop&crop=center"
                    alt="Why Startups Should Invest Early in Professional Web Development"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-calendar"
                      >
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                      Jan 1
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-clock"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      5 min read
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                    Why Startups Should Invest Early in Professional Web
                    Development
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    Understand the long-term benefits of professional web
                    development for early-stage businesses.
                  </p>
                  <a
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 font-medium"
                    href="/blog/startup-web-development"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </article>
            </div>
            <div className="text-center animate-fade-in-up">
              <a
                className="group inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b74f4] border border-transparent text-black dark:text-white dark:bg-[#222f44] hover:scale-105 h-11 rounded-md px-8 bg-[#e0e7ef]"
                href="/blog"
              >
                View All Posts
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Got questions? We've got answers. Here are some of the most
                common questions we receive.
              </p>
            </div>
            <div className="animate-fade-in-up">
              <Accordion.Root type="single" collapsible className="space-y-4">
                <Accordion.Item
                  value="item-1"
                  className="border-b border-gray-200 dark:border-gray-700 bg-[#fbfcfe] dark:bg-[#111a2b] px-6 rounded-xl"
                >
                  <Accordion.Header className="flex">
                    <Accordion.Trigger className="group flex flex-1 w-full items-center justify-between py-4 font-medium transition-all text-left text-foreground hover:text-primary hover:no-underline">
                      How long does it take to build a website with Zamtex?
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden text-sm text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="pb-4">
                      Most websites take 2–6 weeks depending on complexity.
                      Landing pages can be delivered in 1–2 weeks, while larger
                      custom sites and web apps may take longer.
                    </div>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item
                  value="item-2"
                  className="border-b border-gray-200 dark:border-gray-700 bg-[#fbfcfe] dark:bg-[#111a2b] px-6 rounded-xl"
                >
                  <Accordion.Header className="flex">
                    <Accordion.Trigger className="group flex flex-1 w-full items-center justify-between py-4 font-medium transition-all text-left text-foreground hover:text-primary hover:no-underline">
                      Do you offer ongoing support after the website launch?
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden text-sm text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="pb-4">
                      Yes. We offer maintenance and support packages to keep
                      your site updated, secure, and performing at its best
                      after launch.
                    </div>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item
                  value="item-3"
                  className="border-b border-gray-200 dark:border-gray-700 bg-[#fbfcfe] dark:bg-[#111a2b] px-6 rounded-xl"
                >
                  <Accordion.Header className="flex">
                    <Accordion.Trigger className="group flex flex-1 w-full items-center justify-between py-4 font-medium transition-all text-left text-foreground hover:text-primary hover:no-underline">
                      What platforms and technologies do you use?
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden text-sm text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="pb-4">
                      We build with modern stacks such as React, Next.js,
                      Tailwind CSS, and various CMS platforms — chosen to match
                      your project goals.
                    </div>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item
                  value="item-4"
                  className="border-b border-gray-200 dark:border-gray-700 bg-[#fbfcfe] dark:bg-[#111a2b] px-6 rounded-xl"
                >
                  <Accordion.Header className="flex">
                    <Accordion.Trigger className="group flex flex-1 w-full items-center justify-between py-4 font-medium transition-all text-left text-foreground hover:text-primary hover:no-underline">
                      Can you redesign my existing website?
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden text-sm text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="pb-4">
                      Absolutely. We can refresh your current design, improve
                      performance, and modernize the site while preserving your
                      brand identity.
                    </div>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item
                  value="item-5"
                  className="border-b border-gray-200 dark:border-gray-700 bg-[#fbfcfe] dark:bg-[#111a2b] px-6 rounded-xl"
                >
                  <Accordion.Header className="flex">
                    <Accordion.Trigger className="group flex flex-1 w-full items-center justify-between py-4 font-medium transition-all text-left text-foreground hover:text-primary hover:no-underline">
                      Do you provide hosting and domain setup?
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden text-sm text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="pb-4">
                      Yes — we can handle domain registration, hosting setup,
                      and deployment so your site goes live without hassle.
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </div>
            <div className="text-center mt-12 animate-fade-in-up">
              <p className="text-lg text-muted-foreground mb-6">
                Still have questions? We'd love to hear from you.
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="group inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b74f4] border border-transparent bg-[#0b74f4] text-white hover:bg-[#0b74f4]/90 hover:shadow-[0_0_20px_rgba(11,116,244,0.6)] hover:scale-105 h-11 rounded-md px-8"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-[#fbfcfe] dark:bg-[#0e1629]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
              Let&apos;s <span className="text-primary">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
            <p
              className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Ready to transform your ideas into powerful digital experiences?
              Get in touch with us today.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Get In Touch
                </h2>
                <div className="space-y-6 mb-8">
                  <a
                    href="https://www.linkedin.com/company/zamtex"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-gray-200 hover:shadow-md transition-all duration-300 group dark:bg-[#1d2637] dark:hover:border-gray-700"
                  >
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-linkedin text-white"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <p className="text-foreground font-medium">ZamTex</p>
                    </div>
                  </a>
                  <a
                    href="tel:+254769548875"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-gray-200 hover:shadow-md transition-all duration-300 group dark:bg-[#1d2637] dark:hover:border-gray-700"
                  >
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-phone text-white"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="text-foreground font-medium">
                        +254769548875
                      </p>
                    </div>
                  </a>
                  <a
                    href="mailto:zamtexdigital@outlook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-gray-200 hover:shadow-md transition-all duration-300 group dark:bg-[#1d2637] dark:hover:border-gray-700"
                  >
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-mail text-white"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground font-medium">
                        zamtexdigital@outlook.com
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://Facebook.com/@zamtexke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-gray-200 hover:shadow-md transition-all duration-300 group dark:bg-[#1d2637] dark:hover:border-gray-700"
                  >
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-facebook text-white"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Facebook</p>
                      <p className="text-foreground font-medium">Zamtex</p>
                    </div>
                  </a>
                  <a
                    href="https://instagram.com/zamtex_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-gray-200 hover:shadow-md transition-all duration-300 group dark:bg-[#1d2637] dark:hover:border-gray-700"
                  >
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-instagram text-white"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Instagram</p>
                      <p className="text-foreground font-medium">@Zamtex_</p>
                    </div>
                  </a>
                  <a
                    href="https://tiktok.com/@zamtex_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-gray-200 hover:shadow-md transition-all duration-300 group dark:bg-[#1d2637] dark:hover:border-gray-700"
                  >
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        role="img"
                        viewBox="0 0 24 24"
                        className="text-white"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">TikTok</p>
                      <p className="text-foreground font-medium">@Zamtex_</p>
                    </div>
                  </a>
                </div>
                <div className="bg-background dark:bg-[#1d2637] p-6 rounded-2xl">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Why Choose Zamtex?
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Fast turnaround times
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Clean, professional code
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Ongoing support &amp; maintenance
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Responsive design guaranteed
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <form className="bg-[#fefefe] dark:bg-[#1b2435] p-8 rounded-2xl space-y-6">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Send us a message
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="name"
                      >
                        Name *
                      </label>
                      <input
                        className="flex h-10 w-full rounded-lg border border-gray-300 dark:border-white/10 px-3 py-2 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary/50 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-colors bg-background"
                        id="name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="email"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        className="flex h-10 w-full rounded-lg border border-gray-300 dark:border-white/10 px-3 py-2 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary/50 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-colors bg-background"
                        id="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="phone"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="flex h-10 w-full rounded-lg border border-gray-300 dark:border-white/10 px-3 py-2 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary/50 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-colors bg-background"
                      id="phone"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="service"
                    >
                      Select Service *
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        required
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="flex h-10 w-full appearance-none rounded-lg border border-gray-300 dark:border-white/10 px-3 py-2 pr-9 text-sm text-foreground bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary/50 transition-colors cursor-pointer"
                      >
                        <option value="" disabled hidden>
                          Choose a service
                        </option>
                        <option value="Landing Page Development">
                          Landing Page Development
                        </option>
                        <option value="Custom Website Design & Development">
                          Custom Website Design &amp; Development
                        </option>
                        <option value="Website Maintenance">
                          Website Maintenance
                        </option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Web App Development">
                          Web App Development
                        </option>
                        <option value="SEO & Performance Optimization">
                          SEO &amp; Performance Optimization
                        </option>
                      </select>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-down pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="budget"
                      >
                        Budget (Optional)
                      </label>
                      <input
                        className="flex h-10 w-full rounded-lg border border-gray-300 dark:border-white/10 px-3 py-2 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary/50 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-colors bg-background"
                        id="budget"
                        placeholder="e.g., $2,000 - $5,000"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-1 gap-4">
                    <div className="space-y-3">
                      <label className="text-sm font-medium leading-none">
                        Do you have existing branding, content, or website?
                      </label>

                      <div className="space-y-0.5">
                        
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="existing-branding"
                            value="yes"
                            className="w-3 h-3 accent-[#0b74f4] cursor-pointer"
                          />
                          <span className="text-sm text-foreground">Yes</span>
                        </label>

                        
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="existing-branding"
                            value="no"
                            defaultChecked
                            className="w-3 h-3 accent-[#0b74f4] cursor-pointer"
                          />
                          <span className="text-sm text-foreground">No</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="message"
                    >
                      Message *
                    </label>
                    <textarea
                      className="flex w-full rounded-lg border border-gray-300 dark:border-white/10 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary/50 disabled:cursor-not-allowed disabled:opacity-50 bg-background min-h-37.5 transition-colors"
                      id="message"
                      placeholder="Tell us about your project or ask a question..."
                      required
                    ></textarea>
                  </div>
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary-hover shadow-soft h-10 px-4 py-2 w-full text-white dark:text-black"
                    type="submit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-send mr-2"
                    >
                      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                      <path d="m21.854 2.147-10.94 10.939"></path>
                    </svg>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
