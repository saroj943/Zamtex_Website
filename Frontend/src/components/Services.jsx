import React from "react";
import { MdOutlinePalette } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";
import { LuChevronsLeftRight } from "react-icons/lu";
import { CiMobile3 } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { FaWrench, FaArrowUp, FaArrowRight } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import ReactImage from "../../public/assets/react.svg";
import Nextjs from "../../public/assets/nextjs.svg";
import JavaScript from "../../public/assets/javascript.svg";
import Nodejs from "../../public/assets/nodejs.svg";
import Tailwindcss from "../../public/assets/tailwindcss.svg";
import TypeScript from "../../public/assets/typescript.svg";
import Postgresql from "../../public/assets/postgresql.svg";


const Services = () => {
  return (
    <main>
      
      <section className="py-20 bg-[#fbfcfe] dark:bg-[#131b2e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
              What We
              <span className="text-primary"> Offer</span>
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
            <p
              className="text-xl text-foreground/85 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Professional web design and development services designed to help
              your business succeed in the digital world.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background dark:bg-[#101729]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Service 1 */}
            <div
              className="grid md:grid-cols-2 gap-8 items-start animate-fade-in-up"
              style={{ animationDelay: "0s" }}
            >
              <div className="bg-[#fbfcfe] dark:bg-[#1c2536] p-8 rounded-2xl h-full">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <MdOutlinePalette size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Custom Website Design
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Professional, responsive website design tailored to your
                  brand. We create stunning, user-friendly web designs that
                  capture attention and drive conversions.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <FaRegCheckCircle size={28} className="text-white" />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Who It's For
                      </h4>
                      <p className="text-foreground/80">
                        Perfect for businesses in Kenya seeking unique,
                        brand-focused website designs that stand out from
                        template-based solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-3">
                    <FaRegCheckCircle size={28} className="text-white" />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Why You Need It
                      </h4>
                      <p className="text-foreground/80">
                        Your website design is the first impression customers
                        have of your business. Professional custom web design
                        ensures your brand is represented beautifully and
                        functionally, with responsive design that works
                        flawlessly across all devices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div
              className=" grid md:grid-cols-2 gap-8 items-start animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="bg-[#fbfcfe] dark:bg-[#1c2536] p-8 rounded-2xl h-full">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <IoIosGlobe size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Responsive Web Design
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Mobile-first web design approach ensuring your website looks
                  perfect on all devices. Beautiful, fast-loading designs
                  optimized for tablets, phones, and desktops.
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <FaRegCheckCircle size={28} className="text-white" />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Who It's For
                      </h4>
                      <p className="text-foreground/80">
                        Essential for all businesses in Kenya as over 80% of
                        users access websites via mobile devices.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-3">
                    <FaRegCheckCircle size={28} className="text-white" />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Why You Need It
                      </h4>
                      <p className="text-foreground/80">
                        Responsive web design is critical for user experience
                        and SEO rankings. Google prioritizes mobile-friendly
                        website design, and users expect seamless experiences
                        across devices. Poor mobile web design leads to lost
                        customers and lower search rankings.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div
              className="grid md:grid-cols-2 gap-8 items-start animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-[#fbfcfe] dark:bg-[#1c2536] p-8 rounded-2xl h-full">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <LuChevronsLeftRight size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Web Development
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Custom web development solutions built with clean code and
                  modern frameworks. From simple websites to complex web
                  applications, we develop powerful digital experiences.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <FaRegCheckCircle size={28} className="text-white" />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Who It's For
                      </h4>
                      <p className="text-foreground/80">
                        Ideal for businesses needing custom functionality,
                        e-commerce solutions, or complex web applications beyond
                        standard website design.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-3">
                    <FaRegCheckCircle size={28} className="text-white" />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Why You Need It
                      </h4>
                      <p className="text-foreground/80">
                        While great web design attracts users, solid web
                        development ensures functionality, security, and
                        scalability. Professional web development supports your
                        website design with robust backend systems and seamless
                        user interactions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div
              className="grid md:grid-cols-2 gap-8 items-start animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="bg-[#fbfcfe] dark:bg-[#1c2536] p-8 rounded-2xl h-full">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <CiMobile3 size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Landing Page Design
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  High-converting landing page designs that capture leads and
                  drive business growth. Strategic web design focused on user
                  experience and performance.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <FaRegCheckCircle size={28} className="text-white" />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Who It's For
                      </h4>
                      <p className="text-foreground/80">
                        Perfect for startups, product launches, marketing
                        campaigns in Kenya, and businesses looking to generate
                        leads through effective web design.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-3">
                    <FaRegCheckCircle size={28} className="text-white" />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Why You Need It
                      </h4>
                      <p className="text-foreground/80">
                        A professionally designed landing page can be the
                        difference between a visitor and a customer. Strategic
                        landing page design with focused messaging, compelling
                        visuals, and clear CTAs maximizes conversions and ROI.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 5 */}
            <div
              className="grid md:grid-cols-2 gap-8 items-start animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-[#fbfcfe] dark:bg-[#1c2536] p-8 rounded-2xl h-full">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <IoSettingsOutline size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  SEO Web Design
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  SEO-optimized web design and development to improve search
                  rankings. We build websites that Google loves and users trust,
                  with technical SEO built into the design.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <FaRegCheckCircle size={28} className="text-white" />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Who It's For
                      </h4>
                      <p className="text-foreground/80">
                        Critical for any business in Kenya looking to increase
                        organic traffic, improve local search visibility for
                        "web design Kenya", and attract more customers through
                        search engines.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-3">
                    <FaRegCheckCircle size={28} className="text-white" />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Why You Need It
                      </h4>
                      <p className="text-foreground/80">
                        Beautiful website design means nothing if no one can
                        find it. SEO web design ensures your site ranks well for
                        relevant keywords like "web design Kenya", while
                        maintaining stunning visual design that converts
                        visitors into customers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 6 */}
            <div
              className="grid md:grid-cols-2 gap-8 items-start animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-[#fbfcfe] dark:bg-[#1c2536] p-8 rounded-2xl h-full">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <FaWrench size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Website Maintenance
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Ongoing website support and maintenance to keep your web
                  design fresh, secure, and performing optimally. Regular
                  updates and monitoring for peace of mind.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <FaRegCheckCircle size={28} className="text-white" />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Who It's For
                      </h4>
                      <p className="text-foreground/80">
                        Essential for businesses with existing website designs
                        who want consistent performance, security updates, and
                        design refinements.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-3">
                    <FaRegCheckCircle size={28} className="text-white" />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Why You Need It
                      </h4>
                      <p className="text-foreground/80">
                        Website design and functionality require regular
                        maintenance to stay secure, fast, and effective.
                        Neglecting your web design can lead to security
                        vulnerabilities, outdated design elements, and lost
                        business opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#fbfcfe] dark:bg-[#131b2e]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our
                <span className="text-primary"> Process</span>
              </h2>
              <div className="w-24 h-1 gradient-primary mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-foreground/85 max-w-3xl mx-auto">
                From concept to launch, we follow a proven web design process to
                deliver exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Step 01 */}
              <div
                className="bg-[#fbfcfe] dark:bg-[#131b2e] p-8 rounded-2xl animate-fade-in-up"
                style={{ animationDelay: "0s" }}
              >
                <div className="text-5xl font-bold text-blue-900/40 mb-4">
                  01
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                  Discovery & Planning
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We start by understanding your business, goals, target
                  audience, and project requirements through detailed
                  consultation.
                </p>
              </div>

              {/* Step 02 */}
              <div
                className="bg-[#fbfcfe] dark:bg-[#131b2e] p-8 rounded-2xl animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="text-5xl font-bold text-blue-900/40 mb-4">
                  02
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                  Design & Prototyping
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We create wireframes and design mockups to visualize the
                  project, ensuring alignment with your brand and vision before
                  development begins.
                </p>
              </div>

              {/* Step 03 */}
              <div
                className="bg-[#fbfcfe] dark:bg-[#131b2e] p-8 rounded-2xl animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="text-5xl font-bold text-blue-900/40 mb-4">
                  03
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                  Development
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our team builds your website or application using modern
                  technologies, writing clean, maintainable code that's built to
                  scale.
                </p>
              </div>

              {/* Step 04 */}
              <div
                className="bg-[#fbfcfe] dark:bg-[#131b2e] p-8 rounded-2xl animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="text-5xl font-bold text-blue-900/40 mb-4">
                  04
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                  Testing & QA
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Rigorous testing across devices and browsers ensures
                  everything works flawlessly before launch.
                </p>
              </div>

              {/* Step 05 */}
              <div
                className="bg-[#fbfcfe] dark:bg-[#131b2e] p-8 rounded-2xl animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="text-5xl font-bold text-blue-900/40 mb-4">
                  05
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                  Launch & Deployment
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We handle the entire launch process, from domain setup to
                  hosting configuration, ensuring a smooth go-live.
                </p>
              </div>

              {/* Step 06 */}
              <div
                className="bg-[#fbfcfe] dark:bg-[#131b2e] p-8 rounded-2xl animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="text-5xl font-bold text-blue-900/40 mb-4">
                  06
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                  Support & Optimization
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Post-launch, we provide ongoing support, updates, and
                  optimization to keep your site performing at its best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our
              <span className="text-primary"> Tech Stack</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-foreground/85 max-w-3xl mx-auto">
              We use modern web design tools and technologies to build fast,
              beautiful, and maintainable solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            <div
              className="bg-[#fbfcfe] dark:bg-[#1c2536] p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:scale-105 transition-transform duration-300 animate-fade-in-up"
              style={{ animationDelay: "0s" }}
            >
              <img
                src={ReactImage}
                alt="React"
                className="w-16 h-16 object-contain"
              />
              <span className="text-sm font-medium text-foreground text-center">
                React
              </span>
            </div>

            <div
              className="bg-[#fbfcfe] dark:bg-[#1c2536] p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:scale-105 transition-transform duration-300 animate-fade-in-up"
              style={{ animationDelay: "0s" }}
            >
              <img
                src={Nextjs}
                alt="React"
                className="w-16 h-16 object-contain"
              />
              <span className="text-sm font-medium text-foreground text-center">
                Next JS
              </span>
            </div>

            <div
              className="bg-[#fbfcfe] dark:bg-[#1c2536] p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:scale-105 transition-transform duration-300 animate-fade-in-up"
              style={{ animationDelay: "0s" }}
            >
              <img
                src={TypeScript}
                alt="React"
                className="w-16 h-16 object-contain"
              />
              <span className="text-sm font-medium text-foreground text-center">
                TypeScript
              </span>
            </div>

            <div
              className="bg-[#fbfcfe] dark:bg-[#1c2536] p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:scale-105 transition-transform duration-300 animate-fade-in-up"
              style={{ animationDelay: "0s" }}
            >
              <img
                src={JavaScript}
                alt="React"
                className="w-16 h-16 object-contain"
              />
              <span className="text-sm font-medium text-foreground text-center">
                JavaScript
              </span>
            </div>

            <div
              className="bg-[#fbfcfe] dark:bg-[#1c2536] p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:scale-105 transition-transform duration-300 animate-fade-in-up"
              style={{ animationDelay: "0s" }}
            >
              <img
                src={Tailwindcss}
                alt="React"
                className="w-16 h-16 object-contain"
              />
              <span className="text-sm font-medium text-foreground text-center">
                Tailwind CSS
              </span>
            </div>

            <div
              className="bg-[#fbfcfe] dark:bg-[#1c2536] p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:scale-105 transition-transform duration-300 animate-fade-in-up"
              style={{ animationDelay: "0s" }}
            >
              <img
                src={Nodejs}
                alt="React"
                className="w-16 h-16 object-contain"
              />
              <span className="text-sm font-medium text-foreground text-center">
                Node JS
              </span>
            </div>

            <div
              className="bg-[#fbfcfe] dark:bg-[#1c2536] p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:scale-105 transition-transform duration-300 animate-fade-in-up"
              style={{ animationDelay: "0s" }}
            >
              <img
                src={Postgresql}
                alt="React"
                className="w-16 h-16 object-contain"
              />
              <span className="text-sm font-medium text-foreground text-center">
                Postgresql
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our
                <span className="text-primary">Packages</span>
              </h2>
              <div className="w-24 h-1 gradient-primary mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-foreground/85 max-w-3xl mx-auto mb-8">
                Flexible web design packages tailored to your project scale and
                budget. From simple landing pages to full e-commerce solutions.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-[#fbfcfe] dark:bg-[#1c2536] p-6 rounded-2xl text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Basic Packages
                </h3>
                <p className="text-3xl font-bold text-primary mb-2">
                  Ksh. 5,000
                </p>
                <p className="text-sm text-muted-foreground">One-page Sites</p>
              </div>

              <div className="bg-[#fbfcfe] dark:bg-[#1c2536] p-6 rounded-2xl text-center border-2 border-primary">
                <div className="text-xs font-semibold text-primary mb-2">
                  LIMITED OFFER
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Standard Packages
                </h3>
                <p className="text-3xl font-bold text-primary mb-2">
                  Ksh. 12,000
                </p>
                <p className="text-sm text-muted-foreground">
                  1-3 page Websites
                </p>
              </div>

              <div className="bg-[#fbfcfe] dark:bg-[#1c2536] p-6 rounded-2xl text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Advanced Packages
                </h3>
                <p className="text-3xl font-bold text-primary mb-2">
                  Ksh. 30,000
                </p>
                <p className="text-sm text-muted-foreground">
                  Complex Websites
                </p>
              </div>

              <div className="bg-[#fbfcfe] dark:bg-[#1c2536] p-6 rounded-2xl text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  E-Commerce
                </h3>
                <p className="text-3xl font-bold text-primary mb-2">
                  Ksh. 45,000
                </p>
                <p className="text-sm text-muted-foreground">Online Stores</p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b74f4] border border-transparent bg-[#0b74f4] dark:text-black text-white hover:bg-[#0b74f4]/90 hover:shadow-[0_0_20px_rgba(11,116,244,0.6)] hover:scale-105  h-11 rounded-md px-8"
              >
                View Full Pricing & Packages <FaArrowUp />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background dark:bg-[#131b2e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to get Started ?
            </h2>
            <p className="text-xl text-foreground/85 mb-8">
              Let's discuss your web design project and create something amazing
              together.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b74f4] border border-transparent bg-[#0b74f4] text-white hover:bg-[#0b74f4]/90 hover:shadow-[0_0_20px_rgba(11,116,244,0.6)] hover:scale-105  h-11 rounded-md px-8 "
            >
              Get a Free Quote <FaArrowRight />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
