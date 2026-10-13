import React from "react";
import { TiArrowLeft } from "react-icons/ti";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaShareAltSquare } from "react-icons/fa";

const WebDesign2 = () => {
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
                Web Design
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              Top 10 Website Design Companies in Kenya
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
                alt="Top 10 Website Design Companies in Kenya"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            <div className="max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground mb-10">
                Looking for the best web design companies in Kenya? Whether
                you're launching a startup or upgrading an existing site,
                choosing the right agency matters. Here is a curated list of ten
                web design firms across Kenya, including Zamtex as a standout,
                and RatifiedTech as a notable player — plus eight more worth
                your attention.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                1. Zamtex (You're Here)
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-10">
                <strong className="text-foreground font-semibold">
                  Zamtex
                </strong>{" "}
                is a growing web design and development studio that places{" "}
                <strong className="text-foreground font-semibold">
                  web design first
                </strong>
                , backed by development skills under the hood. Here, design
                isn't just about how a site looks — it's about clarity,
                usability, responsiveness, and how well it helps your business
                achieve goals. We deliver clean, modern, performance-driven
                websites with the flexibility to scale. Each project is a
                partnership, not just a transaction.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                2.{" "}
                <a
                  href="https://www.ratifiedtech.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  RatifiedTech
                </a>
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-10">
                RatifiedTech specializes in{" "}
                <strong className="text-foreground font-semibold">
                  high-converting websites
                </strong>{" "}
                and SEO strategies. Their approach blends psychology-driven
                design, persuasive copy, and technical SEO behind the scenes.
                They not only build attractive sites, but sites that get results
                — turning traffic into leads and clients.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                3.{" "}
                <a
                  href="https://urbankreative.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Urban Kreative
                </a>
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-10">
                Based in Nairobi, Urban Kreative offers full-service web design
                and development across East Africa. They emphasize handcrafted
                websites and work through every phase — strategy, design, build,
                and launch.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                4.{" "}
                <a
                  href="https://www.designrush.com/agency/website-design-development/ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Bluxel Africa
                </a>{" "}
                (via DesignRush listing)
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-10">
                Bluxel Africa appears on Kenya's top web design agency lists for
                their creative approach, empowering entrepreneurs and
                integrating design with brand messaging.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                5.{" "}
                <a
                  href="https://www.designrush.com/agency/website-design-development/ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Webpinn
                </a>
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-10">
                Webpinn is featured among Kenya's top web agencies for
                delivering responsive websites and solid client communication.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                6.{" "}
                <a
                  href="https://questdesigners.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Quest Website Developers Ltd
                </a>
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-10">
                Quest is well-known in Kenya for combining design, development,
                and SEO. Their clients often praise them for turning ideas into
                fully functional, mobile-friendly websites.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                7.{" "}
                <a
                  href="https://devopswebdesigners.co.ke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  DevOps Web Designers
                </a>
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-10">
                Operating out of Nairobi, DevOps Web Designers offers
                full-service design, development, and SEO. They highlight their
                ability to produce affordable yet polished websites for small to
                mid-sized businesses.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                8.{" "}
                <a
                  href="https://kenyawebdesign.co.ke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Kenya Web Design
                </a>
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-10">
                Kenya Web Design positions itself as a one-stop-shop for both
                web design and development services across Kenya.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                9.{" "}
                <a
                  href="https://www.sortlist.com/web-design/kenya-ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Morph Visuals / Sortlist-listed agencies
                </a>
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-10">
                Sortlist's directory lists agencies like Morph Visuals,
                3techagency, and Weis Web Developers as active web design firms
                in Kenya. These agencies vary in size and specialty, giving
                businesses options based on budget and scope.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                10.{" "}
                <a
                  href="https://teracreations.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Tera Creations
                </a>
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-10">
                Tera Creations is known for building conversion-focused
                websites. They blend SEO, mobile-first design, and performance
                optimization, and are often ranked among Kenya's top web design
                firms.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                How to Use This List
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-10">
                Use this list to explore portfolios, check client reviews, and
                compare pricing. No one size fits all — the best agency for you
                will depend on industry fit, communication style, and alignment
                with your goals.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                Conclusion
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-10">
                Kenya has a thriving web design scene, with firms large and
                small doing meaningful work. Zamtex's mission is to combine the{" "}
                <strong className="text-foreground font-semibold">
                  design-first approach
                </strong>{" "}
                with the technical depth to build sites that not only look good
                but perform well. If you'd like help navigating this landscape
                and picking the right partner (or seeing how Zamtex stacks up
                for your project),{" "}
                <a
                  href="https://zamtex.co.ke/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  get in touch
                </a>{" "}
                — we'd be glad to help you choose.
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

export default WebDesign2;
