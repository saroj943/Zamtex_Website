import React from "react";
import { TiArrowLeft } from "react-icons/ti";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaShareAltSquare } from "react-icons/fa";

const WebDevelopment = () => {
  const handleShare = async () => {
    const shareData = {
      title: document.title,
      text: "Check out this article!",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        console.log("Sharing cancelled");
        return;
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    } catch (error) {
      console.log("Copy failed:", error);
    }
  };

  return (
    <main className="bg-background text-foreground">
      <article className="pt-4 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 mb-8"
            >
              <TiArrowLeft />
              Back to Blog
            </a>

            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                Web Development
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              How Much Does a Website Cost in Kenya in 2025? Real Prices, Hidden
              Costs &amp; Smart Budgeting
            </h1>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground mb-8 pb-6 border-b border-gray-300 dark:border-white/10">
              <span className="flex items-center gap-2">
                <CiCalendar className="w-4 h-4" />
                September 17, 2025
              </span>
              <span className="flex items-center gap-2">
                <MdOutlineAccessTime className="w-4 h-4" />7 min read
              </span>
              <span>By Zamtex Team</span>
              <button
                className="ml-auto flex items-center gap-2 text-primary hover:text-primary/80 transition-colors cursor-pointer"
                aria-label="Share this blog post"
                onClick={handleShare}
                type="button"
              >
                <FaShareAltSquare className="w-4 h-4" />
                Share
              </button>
            </div>

            <div className="mb-12 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=400&fit=crop&crop=center"
                alt="How Much Does a Website Cost in Kenya in 2025?"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            <div className="max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground mb-5">
                Thinking of building a website for your business in Kenya? One
                of the most common and important questions is: how much does a
                professional website cost in Kenya in 2025?
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-10">
                The honest answer is that website pricing varies widely. While
                cheap options may seem attractive upfront, they often lead to
                higher costs later through poor performance, weak SEO, or costly
                rebuilds. In this guide, we break down real website costs in
                Kenya, what affects pricing, the hidden expenses many businesses
                overlook, and how to budget wisely without compromising
                long-term growth.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                What Determines Website Cost in Kenya
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-8">
                Several factors influence the cost of building a website in
                Kenya. Understanding these components upfront helps you make
                informed decisions and avoid surprises.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3">
                Domain Name
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                Your domain is your website's address, such as{" "}
                <code className="px-1.5 py-0.5 rounded bg-white/5 text-foreground text-sm font-mono">
                  yourbusiness.co.ke
                </code>
                . In Kenya, a{" "}
                <code className="px-1.5 py-0.5 rounded bg-white/5 text-foreground text-sm font-mono">
                  .co.ke
                </code>{" "}
                domain typically costs between KES 1,000–1,800 per year,
                depending on the registrar. This is a recurring annual cost.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3">
                Hosting
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground mb-5">
                Hosting is where your website lives online and directly affects
                speed, reliability, and uptime.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                Shared hosting plans usually cost between KES 3,000–10,000 per
                year. For better performance, reliability, or higher traffic,
                VPS or managed hosting options cost more but provide a stronger
                foundation for growth.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3">
                SSL &amp; Website Security
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground mb-5">
                SSL certificates secure your website and are essential for trust
                and search visibility.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                Basic SSL certificates are often free, while advanced or
                enterprise-level SSL options can cost between KES 25,000–40,000
                per year, depending on your security needs.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3">
                Design &amp; Development
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground mb-5">
                The complexity of your website is the biggest cost driver. A
                simple business website costs significantly less than a custom
                web application.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-muted-foreground leading-relaxed">
                <li>
                  Basic business websites (5–10 pages) in 2025 typically cost
                  KES 30,000–120,000.
                </li>
                <li>
                  Small to medium e-commerce websites usually range from KES
                  40,000–80,000 for basic setups, and from KES 200,000–450,000
                  for more complex platforms.
                </li>
                <li>
                  Custom portals, membership sites, or SaaS platforms can cost
                  several hundred thousand shillings or more, depending on
                  functionality and integrations.
                </li>
              </ul>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3">
                Content &amp; SEO Setup
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground mb-5">
                Content creation and SEO setup are critical if you want your
                website to attract traffic and convert visitors.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                Costs may include writing service pages or blog posts, sourcing
                images, and implementing on-page SEO such as titles, metadata,
                and internal linking. In Kenya, basic SEO setup often ranges
                from KES 8,000–20,000 or more, depending on scope.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3">
                Maintenance &amp; Support
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground mb-5">
                After launch, ongoing website maintenance is essential for
                security and performance.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground mb-10">
                Monthly maintenance in Kenya typically costs between KES
                5,000–20,000, depending on the level of support, updates,
                backups, and monitoring included.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                Website Cost in Kenya (2025): Realistic Price Ranges
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                Based on current market rates, here is a realistic overview of
                website costs in Kenya in 2025:
              </p>

              <div className="overflow-x-auto rounded-xl border border-white/10 mb-10">
                <table className="w-full text-sm text-left">
                  <thead className="bg-white/5 text-foreground">
                    <tr>
                      <th className="px-4 py-3 font-semibold">
                        Type of Website
                      </th>
                      <th className="px-4 py-3 font-semibold">
                        Typical Launch Cost
                      </th>
                      <th className="px-4 py-3 font-semibold">
                        Annual Running Cost
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-t border-gray-300 dark:border-white/10">
                      <td className="px-4 py-3">
                        Basic / Informational (5–10 pages)
                      </td>
                      <td className="px-4 py-3">KES 30,000 – 120,000</td>
                      <td className="px-4 py-3">
                        KES 6,000 – 25,000 (hosting, domain, SSL)
                      </td>
                    </tr>
                    <tr className="border-t border-gray-300 dark:border-white/10">
                      <td className="px-4 py-3">
                        E-commerce (small to medium)
                      </td>
                      <td className="px-4 py-3">KES 40,000 – 450,000+</td>
                      <td className="px-4 py-3">
                        Varies based on traffic, payments, and maintenance
                      </td>
                    </tr>
                    <tr className="border-t border-gray-300 dark:border-white/10">
                      <td className="px-4 py-3">Corporate / Custom Websites</td>
                      <td className="px-4 py-3">KES 45,000 – 450,000+</td>
                      <td className="px-4 py-3">
                        Higher maintenance costs due to complexity
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                Hidden Website Costs Many Businesses Overlook
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-5">
                Focusing only on the build price can be costly. Many businesses
                underestimate the following:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-10 text-muted-foreground leading-relaxed">
                <li>
                  <strong className="text-foreground font-semibold">
                    Poor SEO foundations:
                  </strong>{" "}
                  Cheap builds often lack proper SEO structure, making it harder
                  to rank on Google and more expensive to fix later.
                </li>
                <li>
                  <strong className="text-foreground font-semibold">
                    Unclear maintenance agreements:
                  </strong>{" "}
                  Without clearly defined support terms, unexpected costs and
                  delays can arise.
                </li>
                <li>
                  <strong className="text-foreground font-semibold">
                    Unlicensed images:
                  </strong>{" "}
                  Using images without proper licenses can lead to legal issues
                  or forced replacements.
                </li>
                <li>
                  <strong className="text-foreground font-semibold">
                    Scalability limitations:
                  </strong>{" "}
                  Websites not built for growth often require expensive rebuilds
                  as the business expands.
                </li>
                <li>
                  <strong className="text-foreground font-semibold">
                    Weak mobile optimization:
                  </strong>
                  With mobile-first usage in Kenya, poor mobile performance
                  leads to lost traffic and conversions.
                </li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                Why Cheap Websites Often Cost More in the Long Run
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-5">
                Choosing the cheapest website option may save money initially,
                but it often creates bigger problems later:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-10 text-muted-foreground leading-relaxed">
                <li>
                  Low conversion rates due to poor design or slow performance
                </li>
                <li>Loss of brand trust from unprofessional presentation</li>
                <li>Frequent technical issues and downtime</li>
                <li>Expensive rebuilds when scaling becomes necessary</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                How to Budget Smartly for a Website in Kenya
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-5">
                To avoid costly mistakes, consider these practical budgeting
                strategies:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-10 text-muted-foreground leading-relaxed">
                <li>
                  <strong className="text-foreground font-semibold">
                    Use a phased approach:
                  </strong>{" "}
                  Start with essential pages and features, then expand as your
                  business grows.
                </li>
                <li>
                  <strong className="text-foreground font-semibold">
                    Prioritize revenue-driving features:
                  </strong>{" "}
                  Focus on service pages, contact forms, and lead capture before
                  extras.
                </li>
                <li>
                  <strong className="text-foreground font-semibold">
                    Choose hosting wisely:
                  </strong>{" "}
                  Avoid unreliable cheap hosts, but don't overpay for unused
                  resources.
                </li>
                <li>
                  <strong className="text-foreground font-semibold">
                    Clarify maintenance upfront:
                  </strong>{" "}
                  Ensure you understand what support is included and what costs
                  extra.
                </li>
                <li>
                  <strong className="text-foreground font-semibold">
                    Bundle services where practical:
                  </strong>{" "}
                  Bundled hosting, SSL, and maintenance can simplify management
                  and reduce costs.
                </li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                How Zamtex Helps Businesses Avoid Costly Website Mistakes
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-5">
                At Zamtex, we help Kenyan businesses build websites designed for
                long-term value, not short-term savings.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-10 text-muted-foreground leading-relaxed">
                <li>Transparent pricing with clear cost breakdowns</li>
                <li>Phased website launches aligned with business growth</li>
                <li>Scalable architecture for future features</li>
                <li>Clearly defined maintenance and support plans</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                Conclusion
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-5">
                So, how much does a professional website cost in Kenya in 2025?
                For most businesses, a realistic range is KES 30,000–120,000 for
                a solid professional website, with higher costs for e-commerce
                and custom systems.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground mb-10">
                The goal is not to spend the least, but to spend wisely. If
                you're planning a new website or rethinking your current one,
                reach out to Zamtex and let's build something that actually
                works for your business.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-300 dark:border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Written By
                  </p>
                  <p className="font-semibold text-foreground">Zamtex Team</p>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-300"
                >
                  Start Your Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default WebDevelopment;
