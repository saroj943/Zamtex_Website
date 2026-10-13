import React from 'react';
import Zamtex2 from '../../public/assets/Zamtex2.webp'
import { FaFacebookF, FaArrowUp, FaLinkedinIn, FaTiktok, FaInstagram  } from "react-icons/fa";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <footer className='bg-background  border-border/20 relative pt-16 pb-8'>
        
        
        <button 
            onClick={scrollToTop}
            className='fixed bottom-8 right-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-large hover:shadow-glow transition-all duration-300 hover:scale-110 z-40' aria-label='Scroll to top' >
            <FaArrowUp size={14} />
        </button>

        <div className='container mx-auto px-2 py-2'>
          <div className='max-w-6xl mx-auto'>
            
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-10 mb-12'>
              
              
              <div className='lg:col-span-4 pr-4'>
                <div className='flex items-center space-x-3 mb-6'>
                    <div className='w-40 h-24 bg-primary rounded-xl flex items-center justify-center overflow-hidden'>
                        <img src={Zamtex2} alt="Zamtex footer logo" className='h-full w-full object-contain' />
                    </div>
                    <span className='text-2xl font-bold text-foreground'>
                      Zam<span className='text-primary'>Tex</span>
                    </span> 
                   
                </div>
                <p className='text-muted-foreground mb-8 text-sm leading-relaxed'>
                  Transforming ideas into powerful digital experiences. We specialize in building clean, responsive websites and web applications tailored to your needs.
                </p>

                
                <div className='flex space-x-3'>
                    <a href="https://www.linkedin.com/company/Zamtex" target='_blank' rel='noopener noreferrer' className='w-10 h-10 bg-[#e2e8f0] dark:bg-[#222f44] hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group text-muted-foreground hover:text-white' aria-label='LinkedIn'>
                        <FaLinkedinIn size={20} />
                    </a>
                    <a href="https://www.instagram.com/" target='_blank' rel='noopener noreferrer' className='w-10 h-10 bg-[#e2e8f0] dark:bg-[#222f44] hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group text-muted-foreground hover:text-white' aria-label='Instagram'>
                        <FaInstagram size={20} />
                    </a>
                    <a href="https://www.tiktok.com/" target='_blank' rel='noopener noreferrer' className='w-10 h-10 bg-[#e2e8f0] dark:bg-[#222f44] hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group text-muted-foreground hover:text-white' aria-label='TikTok'>
                        <FaTiktok size={20} /> 
                    </a>
                    <a href="https://www.facebook.com/" target='_blank' rel='noopener noreferrer' className='w-10 h-10 bg-[#e2e8f0] dark:bg-[#222f44] hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group text-muted-foreground hover:text-white' aria-label='Facebook'>
                        <FaFacebookF size={20} />
                    </a>
                </div>
              </div>

              
              <div className='lg:col-span-2'>
                <h3 className='text-foreground text-lg font-bold mb-6'>Quick Links</h3>
                <ul className='space-y-3 text-sm'>
                    <li><a href="/home" className='text-muted-foreground hover:text-primary transition-colors'>Home</a></li>
                    <li><a href="/services" className='text-muted-foreground hover:text-primary transition-colors'>Services</a></li>
                    <li><a href="/pricing" className='text-muted-foreground hover:text-primary transition-colors'>Pricing</a></li>
                    <li><a href="#portfolio" className='text-muted-foreground hover:text-primary transition-colors'>Portfolio</a></li>
                    <li><a href="/contact" className='text-muted-foreground hover:text-primary transition-colors'>Contact</a></li>
                    <li><a href="/blog" className='text-muted-foreground hover:text-primary transition-colors'>Blog</a></li>
                </ul>
              </div>

              
              <div className='lg:col-span-2'>
                <h3 className='text-foreground text-lg font-bold mb-6'>Contact</h3>
                <ul className='space-y-3 text-sm'>
                    <li>
                        <a href="mailto:zamtexdigital@outlook.com" className='text-muted-foreground hover:text-primary transition-colors break-all'>
                            zamtexdigital@outlook.com
                        </a>
                    </li>
                    <li>
                        <a href="tel:+254769548875" className='text-muted-foreground hover:text-primary transition-colors'>
                            +254 769 548 875
                        </a>
                    </li>
                </ul>
              </div>

              
              <div className='lg:col-span-2'>
                <h3 className='text-foreground text-lg font-bold mb-6'>Legal</h3>
                <ul className='space-y-3 text-sm'>
                    <li><a href="/privacy" className='text-muted-foreground hover:text-primary transition-colors'>Privacy Policy</a></li>
                    <li><a href="/terms" className='text-muted-foreground hover:text-primary transition-colors'>Terms of Service</a></li>
                </ul>
              </div>

            </div>

            
            <div className='border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground'>
                <p>&copy; {new Date().getFullYear()} Zamtex. All rights reserved.</p>
                <p className='mt-2 md:mt-0'>Built with passion by the Zamtex team</p>
            </div>

          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;