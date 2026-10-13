import React from "react";
import { TiArrowLeft } from "react-icons/ti";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaShareAltSquare } from "react-icons/fa";

const AI = () => {
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
                AI
              </span>
            </div>

            
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              AI Can Build Your Site — But Can It Build Your Business?
            </h1>

            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground mb-8 pb-6 border-b border-gray-300 dark:border-white/10">
              <span className="flex items-center gap-2">
                <CiCalendar className="w-4 h-4" />
                September 17, 2025
              </span>
              <span className="flex items-center gap-2">
                <MdOutlineAccessTime className="w-4 h-4" />
                7 min read
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
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center"
                alt="AI Can Build Your Site — But Can It Build Your Business?"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            
            <div className="max-w-none">

              <p className="text-lg leading-relaxed text-muted-foreground mb-5">
                AI tools can now spin up websites in minutes. That's exciting —
                and understandably, many businesses ask:{" "}
                <em className="italic">
                  "Why pay for a developer when AI can build me a site?"
                </em>
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-10">
                The short answer:{" "}
                <strong className="text-foreground font-semibold">
                  AI is powerful, but it isn't perfect.
                </strong>{" "}
                It can be a great starting point, but it also comes with hidden
                pitfalls that can affect your business in the long run. Here's
                a closer look.
              </p>

              {/* Section 1 */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                Where AI Shines For You
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-5">
                AI makes website creation easier than ever, especially if your
                needs are simple. Here's what you can expect:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-5 text-muted-foreground leading-relaxed">
                <li>
                  <strong className="text-foreground font-semibold">
                    Speed:
                  </strong>{" "}
                  You can have a basic site live in hours instead of weeks.
                </li>
                <li>
                  <strong className="text-foreground font-semibold">
                    Cost-Savings:
                  </strong>{" "}
                  Many AI tools are cheaper than hiring a professional.
                </li>
                <li>
                  <strong className="text-foreground font-semibold">
                    Convenience:
                  </strong>{" "}
                  Templates and auto-generated content mean less
                  decision-making.
                </li>
                <li>
                  <strong className="text-foreground font-semibold">
                    Good for quick projects:
                  </strong>{" "}
                  A simple portfolio, event site, or temporary landing page can
                  be handled well by AI.
                </li>
              </ul>
              <p className="text-base leading-relaxed text-muted-foreground mb-10">
                For many small, one-time projects, AI may be{" "}
                <em className="italic">all you need.</em>
              </p>

              {/* Section 2 */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                The Pitfalls of Going AI-Only
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-5">
                But websites are more than pretty pages. They need to serve
                your brand, your customers, and your long-term goals. Here's
                where AI often struggles:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-10 text-muted-foreground leading-relaxed">
                <li>
                  <strong className="text-foreground font-semibold">
                    Generic results:
                  </strong>{" "}
                  AI sites often look and feel the same, which can weaken your
                  brand identity.
                </li>
                <li>
                  <strong className="text-foreground font-semibold">
                    Limited flexibility:
                  </strong>{" "}
                  Once you need something beyond the basics — like
                  integrations, custom features, or scalability — AI quickly
                  hits a wall.
                </li>
                <li>
                  <strong className="text-foreground font-semibold">
                    SEO risks:
                  </strong>{" "}
                  Auto-generated content can be duplicated across many sites,
                  which hurts search rankings.
                </li>
                <li>
                  <strong className="text-foreground font-semibold">
                    Maintenance issues:
                  </strong>{" "}
                  Many AI tools lock you into their platform, making future
                  updates or migrations difficult.
                </li>
                <li>
                  <strong className="text-foreground font-semibold">
                    No real oversight:
                  </strong>{" "}
                  AI doesn't understand your business strategy, audience, or
                  long-term vision — it just generates what looks right on the
                  surface.
                </li>
              </ul>

              <p className="text-base leading-relaxed text-muted-foreground mb-10">
                In other words, AI can get you online, but it can't guarantee
                that your website will actually{" "}
                <strong className="text-foreground font-semibold">
                  work for your business goals.
                </strong>
              </p>

              {/* Section 3 */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                Why the Human Touch Still Matters
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-10">
                A developer adds what AI can't: judgment, creativity, and
                alignment with your brand and strategy. Think of AI as a
                capable assistant — it can handle the heavy lifting, but it
                still needs{" "}
                <strong className="text-foreground font-semibold">
                  a human touch to ensure quality, originality, and
                  effectiveness.
                </strong>
              </p>

              {/* Section 4 */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                Where Zamtex Fits In
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-5">
                At Zamtex, we see AI as an opportunity, not a threat. We use it
                where it helps — for speed and efficiency — but combine it with
                human insight to deliver websites that are{" "}
                <strong className="text-foreground font-semibold">
                  unique, scalable, and aligned with your business goals.
                </strong>
              </p>

              <p className="text-base leading-relaxed text-muted-foreground mb-5">
                <strong className="text-foreground font-semibold">
                  In short: AI can get you online. Zamtex helps you grow
                  online.
                </strong>
              </p>

              <p className="text-base leading-relaxed text-muted-foreground italic mb-10">
                If you'd like to explore how AI and human expertise can work
                together for your next project, reach out to the Zamtex team
                today.
              </p>
            </div>

            
            <div className="mt-12 pt-8 border-t border-gray-300 dark:border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Written By
                  </p>
                  <p className="font-semibold text-foreground">
                    Zamtex Team
                  </p>
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

export default AI;