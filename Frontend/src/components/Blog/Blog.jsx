import React from 'react'
import { TiArrowLeft } from "react-icons/ti";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";



const Bog = () => {
  return (
    <main>
      <section className='pt-4 pb-16 bg-linear-to-b from-background to-background/80 dark:bg-[#101729]'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <a href="/" className='inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 mb-6'><TiArrowLeft />Back To Home</a>
            <h1 className='text-4xl md:text-6xl font-bold text-foreground mb-6'>Zamtex
              <span className='text-primary'>Blog</span>
            </h1>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Insights, tips, and expert advice on web development, design, and digital strategy
            </p>
          </div>
        </div>
      </section>


      <section className='p-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              
              < article className='rounded-2xl overflow-hidden bg-background dark:bg-[#182130] border border-gray-300 dark:border-white/10 group animate-fade-in-up' style={{animationDelay:"0s"}}>
                <div className='relative overflow-hidden h-48'>
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center" alt="5 signs Your Business Needs a Website Redsign" className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' />
                  <div className='absolute top-4 left-4'>
                    <span className='px-3 py-1 bg-primary/90 text-white text-sm rounded-full'>Web Design</span>
                  </div>
                </div>
                <div className='p-6'>
                  <div className='flex items-center gap-4 text-sm text-muted-foreground mb-3'>
                    <span className='flex items-center gap-1'>
                      <CiCalendar /> &copy; {new Date().getFullYear()}
                    </span>
                    <span className='flex items-center gap-1'><MdOutlineAccessTime />6 min read</span>
                  </div>
                  <h2 className='text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-tight'>5 Signs Your Business Needs a Website Redesign</h2>
                  <p className='text-muted-foreground mb-4 leading-relaxed'>Discover the key indicators that it's time to refresh your website for better performance and conversions.</p>
                  <a href="/blog/web-design" className='inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 font-medium'>Read Full Article
                  <TiArrowLeft /></a>
                </div>
              </article>

              <article className='rounded-2xl overflow-hidden bg-background dark:bg-[#182130] border border-gray-300 dark:border-white/10 group animate-fade-in-up' style={{animationDelay:"0s"}}>
                <div className='relative overflow-hidden h-48'>
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center" alt="Custom Web Apps vs. Off-the-Shelf Software: Which is Right for You?" className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' />
                  <div className='absolute top-4 left-4'>
                    <span className='px-3 py-1 bg-primary/90 text-white text-sm rounded-full'>Development</span>
                  </div>
                </div>
                <div className='p-6'>
                  <div className='flex items-center gap-4 text-sm text-muted-foreground mb-3'>
                    <span className='flex items-center gap-1'>
                      <CiCalendar /> &copy; {new Date().getFullYear()}
                    </span>
                    <span className='flex items-center gap-1'><MdOutlineAccessTime />6 min read</span>
                  </div>
                  <h2 className='text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-tight'>Custom Web Apps vs. Off-the-Shelf Software: Which is Right for You?</h2>
                  <p className='text-muted-foreground mb-4 leading-relaxed'>A comprehensive comparison of custom development versus ready-made solutions for your business needs.</p>
                  <a href="/blog/development" className='inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 font-medium'>Read Full Article
                  <TiArrowLeft /></a>
                </div>
              </article>

              <article className='rounded-2xl overflow-hidden bg-background dark:bg-[#182130] border border-gray-300 dark:border-white/10 group animate-fade-in-up' style={{animationDelay:"0s"}}>
                <div className='relative overflow-hidden h-48'>
                  <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=center" alt="Custom Web Apps vs. Off-the-Shelf Software: Which is Right for You?" className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' />
                  <div className='absolute top-4 left-4'>
                    <span className='px-3 py-1 bg-primary/90 text-white text-sm rounded-full'>SEO</span>
                  </div>
                </div>
                <div className='p-6'>
                  <div className='flex items-center gap-4 text-sm text-muted-foreground mb-3'>
                    <span className='flex items-center gap-1'>
                      <CiCalendar /> &copy; {new Date().getFullYear()}
                    </span>
                    <span className='flex items-center gap-1'><MdOutlineAccessTime />6 min read</span>
                  </div>
                  <h2 className='text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-tight'>How Website Speed Affects Your Google Ranking and Conversions</h2>
                  <p className='text-muted-foreground mb-4 leading-relaxed'>Learn why site speed is crucial for SEO performance and user experience in today's digital landscape.</p>
                  <a href="/blog/seo" className='inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 font-medium'>Read Full Article
                  <TiArrowLeft /></a>
                </div>
              </article>

              <article className='rounded-2xl overflow-hidden bg-background dark:bg-[#182130] border border-gray-300 dark:border-white/10 group animate-fade-in-up' style={{animationDelay:"0s"}}>
                <div className='relative overflow-hidden h-48'>
                  <img src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop&crop=center" alt="Custom Web Apps vs. Off-the-Shelf Software: Which is Right for You?" className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' />
                  <div className='absolute top-4 left-4'>
                    <span className='px-3 py-1 bg-primary/90 text-white text-sm rounded-full'>Business</span>
                  </div>
                </div>
                <div className='p-6'>
                  <div className='flex items-center gap-4 text-sm text-muted-foreground mb-3'>
                    <span className='flex items-center gap-1'>
                      <CiCalendar /> &copy; {new Date().getFullYear()}
                    </span>
                    <span className='flex items-center gap-1'><MdOutlineAccessTime />6 min read</span>
                  </div>
                  <h2 className='text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-tight'>Why Startups Invest Early in Professional Web Development</h2>
                  <p className='text-muted-foreground mb-4 leading-relaxed'>Understanding the long benefits of professional web development for early-stage businesses.</p>
                  <a href="/blog/business" className='inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 font-medium'>Read Full Article
                  <TiArrowLeft /></a>
                </div>
              </article>

              <article className='rounded-2xl overflow-hidden bg-background dark:bg-[#182130] border border-gray-300 dark:border-white/10 group animate-fade-in-up' style={{animationDelay:"0s"}}>
                <div className='relative overflow-hidden h-48'>
                  <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center" alt="Custom Web Apps vs. Off-the-Shelf Software: Which is Right for You?" className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' />
                  <div className='absolute top-4 left-4'>
                    <span className='px-3 py-1 bg-primary/90 text-white text-sm rounded-full'>AI</span>
                  </div>
                </div>
                <div className='p-6'>
                  <div className='flex items-center gap-4 text-sm text-muted-foreground mb-3'>
                    <span className='flex items-center gap-1'>
                      <CiCalendar /> &copy; {new Date().getFullYear()}
                    </span>
                    <span className='flex items-center gap-1'><MdOutlineAccessTime />6 min read</span>
                  </div>
                  <h2 className='text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-tight'>AI Can Build Your Site -- But Can It Build Your Business ?</h2>
                  <p className='text-muted-foreground mb-4 leading-relaxed'>Explore how AI can quickly create websites, the pitfalls of relying on AI alone, and why humn oversight is still essential for business impact.</p>
                  <a href="/blog/ai" className='inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 font-medium'>Read Full Article
                  <TiArrowLeft /></a>
                </div>
              </article>

              <article className='rounded-2xl overflow-hidden bg-background dark:bg-[#182130] border border-gray-300 dark:border-white/10 group animate-fade-in-up' style={{animationDelay:"0s"}}>
                <div className='relative overflow-hidden h-48'>
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center" alt="Custom Web Apps vs. Off-the-Shelf Software: Which is Right for You?" className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' />
                  <div className='absolute top-4 left-4'>
                    <span className='px-3 py-1 bg-primary/90 text-white text-sm rounded-full'>Web Design</span>
                  </div>
                </div>
                <div className='p-6'>
                  <div className='flex items-center gap-4 text-sm text-muted-foreground mb-3'>
                    <span className='flex items-center gap-1'>
                      <CiCalendar /> &copy; {new Date().getFullYear()}
                    </span>
                    <span className='flex items-center gap-1'><MdOutlineAccessTime />6 min read</span>
                  </div>
                  <h2 className='text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-tight'>Top 10 Website Design Companies in Kenya</h2>
                  <p className='text-muted-foreground mb-4 leading-relaxed'>Discover the best web design companies in kenya, including Zamtex, RatifiedTech and others redefining how design and development drive business success.</p>
                  <a href="/blog/website-design" className='inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 font-medium'>Read Full Article
                  <TiArrowLeft /></a>
                </div>
              </article>

              <article className='rounded-2xl overflow-hidden bg-background dark:bg-[#182130] border border-gray-300 dark:border-white/10 group animate-fade-in-up' style={{animationDelay:"0s"}}>
                <div className='relative overflow-hidden h-48'>
                  <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center" alt="Custom Web Apps vs. Off-the-Shelf Software: Which is Right for You?" className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' />
                  <div className='absolute top-4 left-4'>
                    <span className='px-3 py-1 bg-primary/90 text-white text-sm rounded-full'>Web Development</span>
                  </div>
                </div>
                <div className='p-6'>
                  <div className='flex items-center gap-4 text-sm text-muted-foreground mb-3'>
                    <span className='flex items-center gap-1'>
                      <CiCalendar /> &copy; {new Date().getFullYear()}
                    </span>
                    <span className='flex items-center gap-1'><MdOutlineAccessTime />6 min read</span>
                  </div>
                  <h2 className='text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-tight'>How Much Does a Professional Website Cost in Kenya in 2025 ?</h2>
                  <p className='text-muted-foreground mb-4 leading-relaxed'>Learn the real cost of building a website in kenya in 2025, including domains, hosting, design and hidden expenses that most businesses overlook. Find out how budget wisely and avoid costly mistakes.</p>
                  <a href="/blog/website-development" className='inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 font-medium'>Read Full Article
                  <TiArrowLeft /></a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Bog
