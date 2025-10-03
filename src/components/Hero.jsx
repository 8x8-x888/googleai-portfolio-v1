import React from 'react';
import { HERO_TAGS } from '../assets/data';
import { PhoneCallIcon } from '../assets/Icons';
import CalendlyTrigger from './CalendlyTrigger';

const Hero = () => {
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL;

  return (
    <section 
      id="hero" 
      // Main container with relative positioning to act as an anchor for overlayed elements
      className="relative pt-32 pb-20 md:pt-48 md:pb-28 overflow-hidden" 
      role="region" 
      aria-label="Hero Section"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero.webp"
          alt="Professional portrait background"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* A very subtle tint to harmonize the image with the dark theme */}
        <div className="absolute inset-0 bg-dark-bg/30"></div>
      </div>

      {/* Gradient Overlay for Text Readability */}
      <div 
        className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(to right, rgba(17, 24, 39, 0.95) 30%, rgba(17, 24, 39, 0.5) 60%, transparent 100%)' }}
      ></div>
      
      {/* Content Layer */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <div className="space-y-6">
            
            {/* Pill Style (Unchanged) */}
            <span className="pill-tech">
              Automation &bull; CRM &bull; Integrations
            </span>

            {/* YOUR Headline Information */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
              BUILD &bull; AUTOMATE <br className="hidden md:block" /> &bull; <span className="gradient-text">SCALE</span>
            </h1>

            {/* YOUR Paragraph Information */}
            <p className="text-lg text-gray-300">
              Turn manual tasks into scalable systems. I help businesses grow smarter with automation,
              CRM integrations, and optimized workflows.
            </p>

            {/* --- NEW, MORE APPEALING BUTTON STYLES --- */}
            <div className="flex flex-wrap gap-4 pt-4">
              <CalendlyTrigger
                url={calendlyUrl}
                className="flex items-center gap-2 bg-accent-cyan text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-accent-cyan/20 hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 btn-pulse"
              >
                <PhoneCallIcon className="w-5 h-5" />
                Book a Call Now
              </CalendlyTrigger>
              <a
                href="#portfolio-gallery"
                className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-300 flex items-center"
              >
                View Case Studies
              </a>
            </div>
            
            {/* YOUR Tags */}
            <div className="flex flex-wrap gap-3 pt-6">
              {HERO_TAGS.map((tag) => (
                <a 
                  key={tag.name} 
                  href={tag.href} 
                  className="border border-gray-700 rounded-full px-4 py-1 text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
                >
                  {tag.name}
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;