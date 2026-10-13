import Zamtex from "../../public/assets/Zamtex.webp";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const handlePortfolioClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);

    if (location.pathname === "/") {
      const portfolio = document.getElementById("portfolio");

      if (portfolio) {
        portfolio.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");

      setTimeout(() => {
        const portfolio = document.getElementById("portfolio");

        if (portfolio) {
          portfolio.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 left-0 right-0 z-50 bg-background/95 border-border/20 backdrop-blur-md shadow-mn transition-all duration-300">
        <div className="mx-1 px-2 py-2">
          <div className="flex items-center justify-between gap-2">

            
            <a
              className="flex items-center gap-2 sm:gap-3 min-w-0"
              href="/"
              onClick={handleMenuClose}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shrink-0">
                <img
                  src={Zamtex}
                  alt="Zamtex Logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="font-bold flex flex-col gap-1 min-w-0">
                <span className="text-xl sm:text-2xl text-primary">
                  Zamtex
                </span>

                <span className="text-foreground text-xs sm:text-lg whitespace-nowrap">
                  Web & Software Solutions
                </span>
              </div>
            </a>

            
            <div className="hidden md:flex items-center justify-end gap-4 lg:gap-6">
              <a
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                href="/"
              >
                Home
              </a>

              <a
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                href="/about"
              >
                About
              </a>

              <a
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium whitespace-nowrap"
                href="/services"
              >
                What We Offer
              </a>

              <a
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                href="/pricing"
              >
                Pricing
              </a>

              <a
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                href="/#portfolio"
                onClick={handlePortfolioClick}
              >
                Portfolio
              </a>

              <a
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                href="/blog"
              >
                Blog
              </a>

              <a
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                href="/contact"
              >
                Contact
              </a>

              <ThemeToggle />
            </div>

            
            <div className="flex md:hidden items-center gap-2 shrink-0">
              <ThemeToggle />

              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-foreground hover:bg-primary/10 transition-colors duration-300"
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
              >
                {menuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 6h16" />
                    <path d="M4 12h16" />
                    <path d="M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

          </div>

          {menuOpen && (
            <div
              id="mobile-navigation"
              className="md:hidden mt-3 pb-3 border-t border-gray-900"
            >
              <div className="flex flex-col gap-1 pt-3">

                <a
                  className="px-3 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300 font-medium"
                  href="/"
                  onClick={handleMenuClose}
                >
                  Home
                </a>

                <a
                  className="px-3 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300 font-medium"
                  href="/about"
                  onClick={handleMenuClose}
                >
                  About
                </a>

                <a
                  className="px-3 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300 font-medium"
                  href="/services"
                  onClick={handleMenuClose}
                >
                  What We Offer
                </a>

                <a
                  className="px-3 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300 font-medium"
                  href="/pricing"
                  onClick={handleMenuClose}
                >
                  Pricing
                </a>

                <a
                  className="px-3 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300 font-medium"
                  href="/#portfolio"
                  onClick={handlePortfolioClick}
                >
                  Portfolio
                </a>

                <a
                  className="px-3 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300 font-medium"
                  href="/blog"
                  onClick={handleMenuClose}
                >
                  Blog
                </a>

                <a
                  className="px-3 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300 font-medium"
                  href="/contact"
                  onClick={handleMenuClose}
                >
                  Contact
                </a>

              </div>
            </div>
          )}

        </div>
      </nav>
    </>
  );
};

export default Navbar;
