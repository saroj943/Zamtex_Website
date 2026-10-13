import React from "react";
import { TiArrowLeft } from "react-icons/ti";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaShareAltSquare } from "react-icons/fa";

const SEO = () => {
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
                SEO
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              How Website Speed Affects Your Google Ranking and Conversions
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
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop&crop=center"
                alt="How Website Speed Affects Your Google Ranking and Conversions"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            <div className="max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground mb-10">
                Website speed isn't just about user experience—it's a critical
                factor that directly impacts your search engine rankings and
                conversion rates. In today's fast-paced digital world, every
                second counts.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                The SEO Connection
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-5">
                Google has officially confirmed that page speed is a ranking
                factor for both desktop and mobile searches. The search giant
                introduced the "Speed Update" in 2018, making page loading speed
                a ranking factor for mobile searches.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3">
                Core Web Vitals
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground mb-5">
                Google's Core Web Vitals measure three key aspects of user
                experience:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-10 text-muted-foreground leading-relaxed">
                <li>
                  <strong className="text-foreground font-semibold">
                    Largest Contentful Paint (LCP):
                  </strong>{" "}
                  Measures loading performance (should be 2.5 seconds or
                  faster).
                </li>
                <li>
                  <strong className="text-foreground font-semibold">
                    First Input Delay (FID):
                  </strong>{" "}
                  Measures interactivity (should be 100 milliseconds or less).
                </li>
                <li>
                  <strong className="text-foreground font-semibold">
                    Cumulative Layout Shift (CLS):
                  </strong>{" "}
                  Measures visual stability (should be 0.1 or less).
                </li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                Impact on Conversions
              </h2>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3">
                The Numbers Don't Lie
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground mb-5">
                Research consistently shows the dramatic impact of speed on
                business results:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-10 text-muted-foreground leading-relaxed">
                <li>A 1-second delay decreases conversions by 7%</li>
                <li>
                  40% of users abandon a website that takes more than 3 seconds
                  to load
                </li>
                <li>
                  A 1-second improvement in mobile site speed can boost
                  conversions by up to 27%
                </li>
              </ul>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3">
                User Expectations
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground mb-10">
                Modern users expect websites to load in 2 seconds or less. When
                sites don't meet these expectations, users quickly bounce to
                competitors, resulting in lost revenue and decreased brand
                trust.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                Common Speed Killers
              </h2>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3">
                Large, Unoptimized Images
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground mb-5">
                Images often account for 60–70% of a webpage's total size. Using
                high-resolution images without proper optimization can severely
                impact loading times.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3">
                Excessive HTTP Requests
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground mb-5">
                Each element on your page (images, scripts, stylesheets)
                requires a separate HTTP request. Too many requests can slow
                down your site significantly.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3">
                Poor Hosting Performance
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground mb-5">
                Cheap hosting solutions often come with slow server response
                times and limited resources, directly affecting your site's
                speed.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3">
                Unminified Code
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground mb-10">
                CSS and JavaScript files with unnecessary whitespace, comments,
                and formatting can add unnecessary bulk to your pages.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                Speed Optimization Strategies
              </h2>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3">
                Image Optimization
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-10 text-muted-foreground leading-relaxed">
                <li>Use modern formats like WebP for better compression</li>
                <li>Implement responsive images with appropriate sizing</li>
                <li>Use lazy loading for images below the fold</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3">
                Code Optimization
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-10 text-muted-foreground leading-relaxed">
                <li>Minify CSS, JavaScript, and HTML</li>
                <li>Remove unused code and plugins</li>
                <li>Optimize critical rendering path</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3">
                Caching and CDN
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-10 text-muted-foreground leading-relaxed">
                <li>Implement browser caching</li>
                <li>Use a content delivery network (CDN)</li>
                <li>Enable server-side caching</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                Measuring Your Performance
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-5">
                Use these tools to monitor and improve your website speed:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-10 text-muted-foreground leading-relaxed">
                <li>
                  <strong className="text-foreground font-semibold">
                    Google PageSpeed Insights:
                  </strong>{" "}
                  Free tool providing detailed performance metrics.
                </li>
                <li>
                  <strong className="text-foreground font-semibold">
                    GTmetrix:
                  </strong>{" "}
                  Comprehensive speed testing with actionable recommendations.
                </li>
                <li>
                  <strong className="text-foreground font-semibold">
                    Google Search Console:
                  </strong>{" "}
                  Monitor Core Web Vitals for your entire site.
                </li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                The Zamtex Approach
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-5">
                At Zamtex, we build speed optimization into every website from
                the ground up. Our development process includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-10 text-muted-foreground leading-relaxed">
                <li>Performance-first coding practices</li>
                <li>Optimized images and assets</li>
                <li>Clean, efficient code structure</li>
                <li>Regular performance monitoring and optimization</li>
              </ul>

              <p className="text-base leading-relaxed text-muted-foreground mb-10">
                Don't let slow loading times hurt your SEO rankings and
                conversions. Contact us to learn how we can optimize your
                website for maximum speed and performance.
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

export default SEO;
