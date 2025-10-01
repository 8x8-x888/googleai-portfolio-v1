import React from 'react';
import { HERO_TAGS } from '../assets/data';
import { PhoneCallIcon } from '../assets/Icons';
import CalendlyTrigger from './CalendlyTrigger';

const Hero = () => {
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL;

  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24" role="region" aria-label="Hero Section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Glowing Frame Container --- */}
        <div className="p-1 bg-gradient-to-br from-accent-cyan/80 via-primary-blue/50 to-dark-bg rounded-2xl">
          <div className="bg-dark-bg p-8 md:p-12 rounded-xl">
            
            {/* --- Main Content Grid --- */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              {/* --- Left Column: Text Content --- */}
              <div className="space-y-8">
                <span className="inline-block bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan px-4 py-1 rounded-full text-sm font-semibold">
                  Automation &bull; CRM &bull; Integrations
                </span>

                <h1 className="text-5xl md:text-6xl font-extrabold tracking-wider uppercase">
                  BUILD &bull; AUTOMATE <br /> <span className="gradient-text">SCALE</span>
                </h1>

                <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                  Turn manual tasks into scalable systems. I help businesses grow smarter with automation,
                  CRM integrations, and optimized workflows.
                </p>

                {/* --- Buttons with Original Info & New Styles --- */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <CalendlyTrigger
                    url={calendlyUrl}
                    className="flex items-center gap-2 bg-gray-800/50 border-2 border-gray-500 text-gray-200 px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-dark-bg hover:border-white transition-all duration-300 btn-pulse"
                  >
                    <PhoneCallIcon className="w-5 h-5" />
                    Book a Call Now
                  </CalendlyTrigger>
                  <a
                    href="#portfolio-gallery"
                    className="bg-gray-200 text-dark-bg px-6 py-2 rounded-md font-semibold hover:bg-white transition-colors duration-300 flex items-center"
                  >
                    View Case Studies
                  </a>
                </div>

                {/* --- Tech Tags with New Styles --- */}
                <div className="flex flex-wrap gap-3 pt-6">
                  {HERO_TAGS.map((tag) => (
                    <a
                      key={tag.name}
                      href={tag.href}
                      className="border border-gray-600 rounded-full px-4 py-1 text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
                      aria-label={`Learn more about ${tag.name}`}
                    >
                      {tag.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* --- Right Column: Image --- */}
              <div className="hidden md:block">
                <img
                  src="/assets/hero.webp"
                  alt="Mark Angel Fernandez - Automation Specialist"
                  className="rounded-xl w-full max-w-md mx-auto object-cover"
                  width="500"
                  height="500"
                  loading="eager"
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;