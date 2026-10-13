import React, { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";

const contact = () => {
  const [service, setService] = useState("");

  return (
    <main>
      <section className="py-20 bg-[#fbfcfe] dark:bg-[#0e1629]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
              Let&apos;s <span className="text-primary">Connect</span>
            </h1>
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
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
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
                    className="flex items-center gap-4 p-4  rounded-xl hover:shadow-medium transition-all duration-300 group bg-[#fbfcfe] dark:bg-[#1d2637]"
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
                    className="flex items-center gap-4 p-4 rounded-xl hover:shadow-medium transition-all duration-300 group bg-[#fbfcfe] dark:bg-[#1d2637]"
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
                    className="flex items-center gap-4 p-4  rounded-xl hover:shadow-medium transition-all duration-300 group bg-[#fbfcfe] dark:bg-[#1d2637]"
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
                    className="flex items-center gap-4 p-4 rounded-xl hover:shadow-medium transition-all duration-300 group bg-[#fbfcfe] dark:bg-[#1d2637]"
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
                    className="flex items-center gap-4 p-4 rounded-xl hover:shadow-medium transition-all duration-300 group bg-[#fbfcfe] dark:bg-[#1d2637]"
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
                    className="flex items-center gap-4 p-4 rounded-xl hover:shadow-medium transition-all duration-300 group bg-[#fbfcfe] dark:bg-[#1d2637]"
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
                <div className="bg-[#fbfcfe] dark:bg-[#1d2637] p-6 rounded-2xl mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
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
                      className="lucide lucide-clock text-primary"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    Response Time
                  </h3>
                  <p className="text-muted-foreground">
                    We typically respond to all inquiries within 24 hours during
                    business days.
                  </p>
                </div>
                <div className="bg-[#fbfcfe] dark:bg-[#1d2637] p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
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
                      className="lucide lucide-map-pin text-primary"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    Serving Clients Worldwide
                  </h3>
                  <p className="text-muted-foreground">
                    Based in Nakuru, Kenya, working with clients globally
                    through seamless remote collaboration.
                  </p>
                </div>
              </div>

              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}>
                <form className="bg-background dark:bg-[#1b2435] p-8 rounded-2xl space-y-6">
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
                  <div className="grid md:grid-cols-2 gap-4">
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
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="timeline"
                      >
                        Timeline (Optional)
                      </label>
                      <input
                        className="flex h-10 w-full rounded-lg border border-gray-300 dark:border-white/10 px-3 py-2 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary/50 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-colors bg-background"
                        id="timeline"
                        placeholder="e.g., 2-4 weeks"
                      />
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
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-white dark:text-black hover:bg-primary-hover shadow-soft h-10 px-4 py-2 w-full"
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

      <section className="py-20 bg-[#fbfcfe] dark:bg-[#131b2e]">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
        <div className="w-24 h-1 gradient-primary mx-auto mb-8 rounded-full"></div>
        <p className="text-xl text-muted-foreground">
          Find answers to common questions about our services and process
        </p>
      </div>

      <Accordion.Root type="single" collapsible className="space-y-4">
        <Accordion.Item
          value="item-1"
          className="border-b bg-white dark:bg-[#1c2536] px-6 rounded-xl border-none"
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
              Most websites take 2–6 weeks depending on complexity. Landing
              pages can be delivered in 1–2 weeks, while larger custom sites
              and web apps may take longer.
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          value="item-2"
          className="border-b bg-white dark:bg-[#1c2536] px-6 rounded-xl border-none"
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
              Yes. We offer maintenance and support packages to keep your site
              updated, secure, and performing at its best after launch.
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          value="item-3"
          className="border-b bg-white dark:bg-[#1c2536] px-6 rounded-xl border-none"
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
              We build with modern stacks such as React, Next.js, Tailwind
              CSS, and various CMS platforms — chosen to match your project
              goals.
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          value="item-4"
          className="border-b bg-white dark:bg-[#1c2536] px-6 rounded-xl border-none"
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
              performance, and modernize the site while preserving your brand
              identity.
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          value="item-5"
          className="border-b bg-white dark:bg-[#1c2536] px-6 rounded-xl border-none"
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
              Yes — we can handle domain registration, hosting setup, and
              deployment so your site goes live without hassle.
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          value="item-6"
          className="border-b bg-white dark:bg-[#1c2536] px-6 rounded-xl border-none"
        >
          <Accordion.Header className="flex">
            <Accordion.Trigger className="group flex flex-1 w-full items-center justify-between py-4 font-medium transition-all text-left text-foreground hover:text-primary hover:no-underline">
              What is your pricing structure?
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
              Pricing depends on scope. We offer fixed-price quotes for
              well-defined projects and hourly rates for ongoing work. Contact
              us for a custom quote.
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          value="item-7"
          className="border-b bg-white dark:bg-[#1c2536] px-6 rounded-xl border-none"
        >
          <Accordion.Header className="flex">
            <Accordion.Trigger className="group flex flex-1 w-full items-center justify-between py-4 font-medium transition-all text-left text-foreground hover:text-primary hover:no-underline">
              Do you work with clients outside Kenya?
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
              Yes. While we're based in Nakuru, Kenya, we work with clients
              worldwide through remote collaboration.
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          value="item-8"
          className="border-b bg-white dark:bg-[#1c2536] px-6 rounded-xl border-none"
        >
          <Accordion.Header className="flex">
            <Accordion.Trigger className="group flex flex-1 w-full items-center justify-between py-4 font-medium transition-all text-left text-foreground hover:text-primary hover:no-underline">
              What information do you need to start a project?
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
              A brief description of your project, your goals, any reference
              sites you like, a budget range, and your desired timeline.
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>

      <div className="text-center mt-12">
        <p className="text-muted-foreground mb-4">Still have questions?</p>
        <a
          href="mailto:zamtexdigital@outlook.com"
          className="text-primary font-medium hover:underline"
        >
          Email us directly at zamtexdigital@outlook.com
        </a>
      </div>
    </div>
  </div>
</section>
    </main>
  );
};

export default contact;