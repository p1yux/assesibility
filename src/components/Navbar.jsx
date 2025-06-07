"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import BookNowModal from '@/components/BookNowModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookNowOpen, setIsBookNowOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleMenuToggle();
    }
  };

  const mainNavLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  const rightNavLinks = [
    { href: "/help", label: "Help" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-gray-200">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-black focus:text-white focus:z-50">
        Skip to main content
      </a>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center h-20 w-32" aria-label="Accessibility - Homepage">
              <img src="/images/websiteLogo.svg" alt="" />
            </Link>
          </div>

          {/* Centered Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-900 hover:text-black focus:text-black focus:underline hover:underline transition-colors px-3 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  aria-label={link.label}
                  style={{ fontSize: "1.1rem", lineHeight: "1.5" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side - Help and Talk to Expert */}
          <div className="hidden md:flex items-center space-x-6">
            {rightNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-900 hover:text-black focus:text-black focus:underline hover:underline transition-colors px-3 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                aria-label={link.label}
                style={{ fontSize: "1.1rem", lineHeight: "1.5" }}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setIsBookNowOpen(true)}
              className="bg-red-800 text-white hover:bg-red-900 focus:bg-red-900 transition-colors px-6 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800"
              aria-label="Talk to an Expert"
              style={{ fontSize: "1.1rem", lineHeight: "1.5" }}
            >
              Talk to an Expert
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-3 rounded-md text-gray-900 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={handleMenuToggle}
              onKeyDown={handleKeyDown}
            >
              <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden mt-4 border-t border-gray-200 pt-4`}
          id="mobile-menu"
        >
          <div className="flex flex-col space-y-4 pb-3">
            {[...mainNavLinks, ...rightNavLinks].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-900 hover:text-black hover:bg-gray-100 px-4 py-3 rounded-md font-medium block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                aria-label={link.label}
                onClick={() => setIsMenuOpen(false)}
                style={{ fontSize: "1.15rem", lineHeight: "1.5" }}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setIsBookNowOpen(true);
              }}
              className="bg-red-800 text-white hover:bg-red-900 text-center px-4 py-3 rounded-lg font-medium block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800"
              aria-label="Talk to an Expert"
              style={{ fontSize: "1.15rem", lineHeight: "1.5" }}
            >
              Talk to an Expert
            </button>
          </div>
        </div>
      </nav>

      <BookNowModal isOpen={isBookNowOpen} onClose={() => setIsBookNowOpen(false)} />
    </header>
  );
};

export default Navbar; 