import React from "react";
import { TiArrowLeft } from "react-icons/ti";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaShareAltSquare } from "react-icons/fa";

const Development = () => {
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
                Development
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              Custom Web Apps vs. Off-the-Shelf Software: Which is Right for
              You?
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=center"
                alt="Custom Web Apps vs. Off-the-Shelf Software: Which is Right for You?"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            <div className="max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground mb-10">
                When expanding your business operations, you'll eventually face
                the decision: should you invest in custom software development
                or purchase an off-the-shelf solution? This choice can
                significantly impact your business efficiency, costs, and growth
                potential.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                Understanding Your Options
              </h2>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3">
                Off-the-Shelf Software
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground mb-5">
                Ready-made software solutions are pre-built applications
                designed to serve common business needs. Examples include
                Shopify for e-commerce, Slack for communication, or QuickBooks
                for accounting.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3">
                Custom Web Applications
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground mb-10">
                Custom solutions are built specifically for your business
                requirements, offering unique functionality tailored to your
                exact processes and goals.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                Cost Considerations
              </h2>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3">
                Initial Investment
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground mb-5">
                <strong className="text-foreground font-semibold">
                  Off-the-shelf:
                </strong>{" "}
                Lower upfront costs, typically involving monthly or annual
                subscription fees ranging from $10 to $500+ per user.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground mb-5">
                <strong className="text-foreground font-semibold">
                  Custom development:
                </strong>{" "}
                Higher initial investment, typically ranging from $10,000 to
                $100,000+ depending on complexity.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3">
                Long-term Costs
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground mb-10">
                While custom solutions require higher upfront investment, they
                often prove more cost-effective over time, especially for
                growing businesses with specific needs.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                Scalability and Flexibility
              </h2>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3">
                Off-the-Shelf Limitations
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-10 text-muted-foreground leading-relaxed">
                <li>Limited customization options</li>
                <li>Vendor lock-in dependencies</li>
                <li>Scaling costs can become expensive</li>
                <li>May not adapt to unique business processes</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3">
                Custom Solution Advantages
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-10 text-muted-foreground leading-relaxed">
                <li>Built to scale with your business</li>
                <li>Complete control over features and functionality</li>
                <li>No vendor dependencies</li>
                <li>Adapts to your existing workflows</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                When to Choose Off-the-Shelf
              </h2>
              <p className="font-semibold text-foreground mb-3">
                Consider ready-made solutions when:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-10 text-muted-foreground leading-relaxed">
                <li>You have standard business processes</li>
                <li>Budget constraints require immediate deployment</li>
                <li>You need a quick solution to market</li>
                <li>Your requirements match common industry needs</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                When Custom Development Makes Sense
              </h2>
              <p className="font-semibold text-foreground mb-3">
                Invest in custom development when:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-10 text-muted-foreground leading-relaxed">
                <li>Your business has unique processes or requirements</li>
                <li>You need competitive advantages through technology</li>
                <li>Integration with existing systems is complex</li>
                <li>You're planning for significant long-term growth</li>
                <li>Data security and control are paramount</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                Making the Right Choice
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-5">
                The decision ultimately depends on your specific business needs,
                budget, timeline, and growth plans. At Zamtex, we help
                businesses evaluate their options and choose the path that best
                supports their objectives.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground mb-10">
                Whether you need a custom web application or guidance on
                selecting the right off-the-shelf solution, our team can provide
                expert consultation to ensure you make the best decision for
                your business.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">
                The Bottom Line
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-10">
                Choosing between custom development and off-the-shelf software
                is a strategic decision that shapes how your business operates
                for years to come. At Zamtex, we specialize in building modern,
                scalable, and tailored web applications that help businesses
                grow. If you're unsure which path is right for you, let's
                discuss how we can help you move forward with confidence.
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

export default Development;
