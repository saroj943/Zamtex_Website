import React from "react";
import { TiArrowLeft } from "react-icons/ti";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaShareAltSquare } from "react-icons/fa";

const WebDesign = () => {
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
    <section className="bg-background text-foreground">
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
              5 Signs Your Business Needs a Website Redesign
            </h1>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground mb-8 pb-6 border-b border-gray-300 dark:border-white/10">
              <span className="flex items-center gap-2">
                <CiCalendar className="w-4 h-4" />
                August 25, 2025
              </span>
              <span className="flex items-center gap-2">
                <MdOutlineAccessTime className="w-4 h-4" />6 min read
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&crop=center"
                alt="5 Signs Your Business Needs a Website Redesign"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            <div className="max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground mb-10">
                Your website is often the first impression potential customers
                have of your business. If it's not performing at its best, you
                could be losing valuable opportunities. Here are five clear
                signs that indicate it's time for a website redesign.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                1. Your Website Loads Slowly
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-5">
                Page speed is crucial for both user experience and SEO. If your
                website takes more than 3 seconds to load, you're likely losing
                visitors. Studies show that a 1-second delay in page response
                can result in a 7% reduction in conversions.
              </p>
              <p className="font-semibold text-foreground mb-3">
                What to look for:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-10 text-muted-foreground leading-relaxed">
                <li>Pages that take longer than 3 seconds to load</li>
                <li>High bounce rates in your analytics</li>
                <li>Complaints from users about slow performance</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                2. Your Design Looks Outdated
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-5">
                Web design trends evolve rapidly. What looked modern five years
                ago may now appear dated and unprofessional. An outdated design
                can hurt your brand credibility and user trust.
              </p>
              <p className="font-semibold text-foreground mb-3">
                Signs of outdated design:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-10 text-muted-foreground leading-relaxed">
                <li>Flash elements or outdated animations</li>
                <li>Non-responsive design that doesn't work on mobile</li>
                <li>Cluttered layouts with too much information</li>
                <li>Old-fashioned color schemes and typography</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                3. It's Not Mobile-Friendly
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-10">
                With over 60% of web traffic coming from mobile devices, having
                a mobile-responsive website isn't optional—it's essential.
                Google also prioritizes mobile-friendly sites in search
                rankings.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                4. Your Conversion Rates Are Declining
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-10">
                If you're seeing fewer leads, sales, or sign-ups despite
                maintaining your marketing efforts, your website design might be
                the culprit. Poor user experience directly impacts conversion
                rates.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                5. Your Website Doesn't Reflect Your Current Brand
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-10">
                As businesses evolve, their websites should too. If your site no
                longer represents your current services, values, or brand
                positioning, it's time for an update.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                The Bottom Line
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-10">
                A website redesign is an investment in your business's future.
                At Zamtex, we specialize in creating modern, fast-loading, and
                conversion-optimized websites that help businesses grow. If
                you're experiencing any of these signs, let's discuss how we can
                help transform your online presence.
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
    </section>
  );
};

export default WebDesign;
