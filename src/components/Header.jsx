import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../assets/data';
import { MenuIcon, CloseIcon } from '../assets/Icons';
import CalendlyTrigger from './CalendlyTrigger';

const NavItem = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="block lg:inline-block py-2 text-gray-300 hover:text-white transition-colors duration-300"
  >
    {children}
  </a>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-bg/80 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <a href="/" onClick={handleLogoClick} className="flex items-center gap-3">
          <img
            src="/assets/Portfolio-Logo.png"
            alt="NextGen VA Logo"
            className="w-12 h-12 rounded-md"
          />
          <div className="flex flex-col leading-none">
            <span className="gradient-text text-xl md:text-2xl font-extrabold tracking-wider uppercase">
              MARK ANGEL FERNANDEZ
            </span>
            <span className="text-accent-cyan text-sm md:text-base font-medium">NextGen VA</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavItem key={link.name} href={link.href}>
              {link.name}
            </NavItem>
          ))}
          <CalendlyTrigger url={calendlyUrl} className="btn-primary btn-secondary-pulse ml-4">
            Book a Call
          </CalendlyTrigger>
        </nav>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
            {isOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-dark-bg/95 backdrop-blur-lg border-t border-gray-800">
          <nav className="flex flex-col items-center space-y-4 px-4 py-8">
            {NAV_LINKS.map((link) => (
              <NavItem key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
                {link.name}
              </NavItem>
            ))}
            <CalendlyTrigger
              url={calendlyUrl}
              className="btn-primary btn-secondary-pulse w-full mt-4"
            >
              Book a Call
            </CalendlyTrigger>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
