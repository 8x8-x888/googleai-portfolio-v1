import React from 'react';
import { HERO_TAGS, SERVICE_CARDS } from '../assets/data';
import { PhoneCallIcon } from '../assets/Icons';
import CalendlyTrigger from './CalendlyTrigger';
import ServiceCard from './ServiceCard';

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
        
        {/* --- PART 1: HERO CONTENT --- */}
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
              
              {/* --- ADDED BACK: Technology Tags --- */}
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
              {/* ------------------------------------ */}
            </div>
          </div>
        </div>

        {/* --- PART 2: ABOUT ME CONTENT (INTEGRATED) --- */}
        <div id="about-me" className="py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="section-header">
              <h2>ABOUT ME</h2>
            </div>
            <div className="mt-8 space-y-8">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                I build the digital engines that drive efficiency. My expertise lies in
                transforming complex manual processes into seamless, automated
                systems using <strong className="font-semibold text-primary-blue">Zapier</strong>, <strong className="font-semibold text-accent-cyan">Make</strong>, and <strong className="font-semibold text-primary-blue">n8n</strong>. I architect solutions that save
                time, eliminate errors, and unlock scalable growth.
              </p>
              <blockquote className="max-w-3xl text-left text-lg italic text-gray-400 border-l-4 border-accent-cyan pl-6">
                "The goal of automation is not to eliminate work, but to elevate human effort to
                more valuable, creative, and strategic tasks."
              </blockquote>
            </div>
          </div>
        </div>

        {/* --- PART 3: SERVICES (INTEGRATED) --- */}
        <div id="services" className="py-16 md:py-24">
          <div className="section-header">
            <h2>SERVICES</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {SERVICE_CARDS.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;