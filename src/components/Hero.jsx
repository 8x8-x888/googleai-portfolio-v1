import React from 'react';
import { HERO_TAGS } from '../assets/data';
import { PhoneCallIcon } from '../assets/Icons';
import CalendlyTrigger from './CalendlyTrigger';
import About from './About';
import Services from './Services';

const Hero = () => {
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL;

  return (
    <section 
      id="hero-container" 
      className="relative bg-dark-bg overflow-hidden"
    >
      {/* Background Image & Overlay Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero.webp"
          alt="Professional portrait background of Mark Angel Fernandez"
          className="w-full h-full object-cover object-top"
          loading="eager"
        />
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(17, 24, 39, 1) 25%, rgba(17, 24, 39, 0.7) 55%, transparent 85%)' }}
        ></div>
      </div>
      
      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- PART 1: HERO INTRO CONTENT --- */}
        <div id="hero" className="min-h-[90vh] flex items-center pt-24 pb-20">
          <div className="max-w-xl">
            <div className="space-y-6">
              <span className="pill-tech">
                Automation &bull; CRM &bull; Integrations
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
                BUILD &bull; AUTOMATE <br className="hidden md:block" /> &bull; <span className="gradient-text">SCALE</span>
              </h1>
              <p className="text-lg text-gray-300">
                Turn manual tasks into scalable systems. I help businesses grow smarter with automation,
                CRM integrations, and optimized workflows.
              </p>
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
              <div className="flex flex-wrap gap-3 pt-6">
                {HERO_TAGS.map((tag) => (
                  <a 
                    key={tag.name} 
                    href={tag.href} 
                    className="bg-gray-800/70 text-gray-300 font-medium px-4 py-1.5 rounded-full text-sm hover:bg-gray-700 hover:text-white transition-colors duration-200"
                  >
                    {tag.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- PART 2: ABOUT ME COMPONENT --- */}
        <About />

        {/* --- PART 3: SERVICES COMPONENT --- */}
        <Services />

      </div>
    </section>
  );
};

export default Hero;