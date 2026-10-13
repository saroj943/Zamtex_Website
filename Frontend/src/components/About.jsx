import React from "react";
import ZamirFounder from "../../public/assets/ZamirFounder.jpg";
import { LuChevronsLeftRight } from "react-icons/lu";
import { MdOutlineElectricBolt } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FiTarget } from "react-icons/fi";

const About = () => {
  return (
    <>
      <main>
        <section className="py-20 bg-[#fbfcfe] dark:bg-[#131b2e]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
                About
                <span className="text-primary"> Zamtex</span>
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
              <p
                className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                Zamtex is a forward-thinking web development brand committed to
                transforming ideas into powerful digital experiences.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  Zamtex was founded with a simple yet powerful mission: to help
                  businesses thrive in the digital world by delivering
                  high-quality, custom web solutions. We specialize in building
                  clean, responsive websites and web applications tailored to
                  our clients' needs—from startups looking to establish their
                  online presence to growing businesses ready to scale.
                </p>
                <p>
                  What sets us apart is our commitment to agility, quality, and
                  innovation. We don't believe in one-size-fits-all solutions.
                  Every project is unique, and we take the time to understand
                  your goals, your audience, and your vision before writing a
                  single line of code.
                </p>
                <p>
                  Whether you need a high-converting landing page, a fully
                  custom website, or ongoing maintenance and support, Zamtex is
                  your trusted partner in building digital experiences that
                  perform.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#fbfcfe] dark:bg-[#131b2e]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Our Core Values
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Card 1 */}
                <div
                  className="bg-[#fbfcfe] dark:bg-[#131b2e] p-6 rounded-2xl flex flex-col items-center text-center animate-fade-in-up"
                  style={{ animationDelay: "0s" }}
                >
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 shrink-0">
                    <LuChevronsLeftRight size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Clean Code
                  </h3>
                  <p className="text-muted-foreground">
                    We write maintainable, scalable code that stands the test of
                    time.
                  </p>
                </div>

                {/* Card 2 */}
                <div
                  className="bg-[#fbfcfe] dark:bg-[#131b2e] p-6 rounded-2xl flex flex-col items-center text-center animate-fade-in-up"
                  style={{ animationDelay: "0.1s" }}
                >
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 shrink-0">
                    <MdOutlineElectricBolt size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Fast Delivery
                  </h3>
                  <p className="text-muted-foreground">
                    Agile development process ensures quick turnaround without
                    compromising quality.
                  </p>
                </div>

                {/* Card 3 */}
                <div
                  className="bg-[#fbfcfe] dark:bg-[#131b2e] p-6 rounded-2xl flex flex-col items-center text-center animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 shrink-0">
                    <CiHeart size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Client-Focused
                  </h3>
                  <p className="text-muted-foreground">
                    Your success is our success. We build solutions tailored to
                    your specific needs.
                  </p>
                </div>

                {/* Card 4 */}
                <div
                  className="bg-[#fbfcfe] dark:bg-[#131b2e] p-6 rounded-2xl flex flex-col items-center text-center animate-fade-in-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 shrink-0">
                    <FiTarget size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Results-Driven
                  </h3>
                  <p className="text-muted-foreground">
                    Every project is measured by real outcomes: speed,
                    conversions, and user satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Meet The Founder
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="animate-fade-in-up">
                  <div className="aspect-square gradient-card rounded-2xl overflow-hidden">
                    <img
                      src={ZamirFounder}
                      alt="Founder or Zamtex"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div
                  className="animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Developer and Founder
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Zamtex was founded by Joe Zamir, a developer driven by
                      curiosity, persistence, and a passion for solving problems
                      through technology. Rather than following a traditional
                      path, Joe is largely self-taught and continuously
                      learning, building his foundation in full-stack
                      development and system design piece by piece.
                    </p>
                    <p>
                      Joe focuses on practical, reliable solutions rather than
                      flashy gimmicks, treating every project as an opportunity
                      to grow and a collaboration with clients. He believes the
                      web should be accessible, functional, and built with care,
                      and treats each project as a collaboration rather than
                      just a transaction.
                    </p>
                    <p>
                      In his free time, Joe enjoys gaming, diving deep into
                      research rabbit holes, and exploring industry trends and
                      complex topics that expand his understanding of technology
                      and the world. These interests fuel his curiosity and
                      often inspire the creative solutions he brings to his
                      work.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-[#e2e8f0] dark:bg-[#222f44] text-secondary-foreground rounded-lg text-sm font-medium">
                      React Expert
                    </span>
                    <span className="px-4 py-2 bg-[#e2e8f0] dark:bg-[#222f44] text-secondary-foreground rounded-lg text-sm font-medium">
                      Full-Stack Developer
                    </span>
                    <span className="px-4 py-2 bg-[#e2e8f0] dark:bg-[#222f44] text-secondary-foreground rounded-lg text-sm font-medium">
                      UI/UX Enthusiast
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#fbfcfe] dark:bg-[#131b2e]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Build Something Amazing ?{" "}
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's turn your ideas into reality with a website as hard as you
                do.
              </p>
              <button>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b74f4] border border-transparent bg-[#0b74f4] text-white hover:bg-[#0b74f4]/90 hover:shadow-[0_0_20px_rgba(11,116,244,0.6)] hover:scale-105  h-11 rounded-md px-8 "
                >
                  Get in Touch
                </a>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
