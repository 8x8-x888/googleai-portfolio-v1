import React from 'react';
import { HERO_TAGS } from '../assets/data';
import { PhoneCallIcon } from '../assets/Icons';
import CalendlyTrigger from './CalendlyTrigger';

const Hero = () => {
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL;

  return (
    <section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24" role="region" aria-label="Hero Section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="pill-tech">
              Automation &bull; CRM &bull; Integrations
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              BUILD &bull; AUTOMATE <br className="hidden md:block" /> &bull; <span className="gradient-text">SCALE</span>
            </h1>

            <p className="text-lg text-gray-300 max-w-lg">
              Turn manual tasks into scalable systems. I help businesses grow smarter with automation,
              CRM integrations, and optimized workflows.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <CalendlyTrigger
                url={calendlyUrl}
                className="btn-primary flex items-center gap-2 btn-pulse"
              >
                <PhoneCallIcon className="w-5 h-5" />
                Book a Call Now
              </CalendlyTrigger>
              <a href="#portfolio-gallery" className="btn-secondary">
                View Case Studies
              </a>
            </div>
            
            <div className="flex flex-wrap gap-3 pt-6">
              {HERO_TAGS.map((tag) => (
                <a key={tag.name} href={tag.href} className="border border-gray-700 rounded-full px-4 py-1 text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">
                  {tag.name}
                </a>
              ))}
            </div>
          </div>

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
    </section>
  );
};

export default Hero;