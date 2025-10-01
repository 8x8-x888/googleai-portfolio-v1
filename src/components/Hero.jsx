import React from "react";
import { HERO_TAGS } from "../assets/data";
import { PhoneCallIcon } from "../assets/Icons";
import CalendlyTrigger from "./CalendlyTrigger";

const Hero = () => {
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL;

  return (
    <section
      id="hero"
      className="pt-20 pb-16 md:pt-28 md:pb-28"
      role="region"
      aria-label="Hero Section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*
          The outer glowing frame div has been removed.
          This div is now the main container for the hero content.
        */}
        <div className="relative bg-[#071018] rounded-2xl overflow-hidden shadow-2xl">
          {/* Background portrait positioned to the right */}
          <div className="absolute inset-0">
            <img
              src="/assets/hero.webp"
              alt="Mark Angel Fernandez portrait"
              className="absolute right-0 top-0 h-full w-1/2 min-w-[420px] object-cover object-top"
              width="1200"
              height="1200"
              loading="eager"
              style={{
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.02)"
              }}
            />

            {/* Dark gradient on left for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071018]/95 via-[#071018]/75 to-transparent" />

            {/* Faint connected-nodes vector graphic */}
            <svg
              className="absolute left-0 bottom-0 max-w-[60%] opacity-40 pointer-events-none"
              viewBox="0 0 900 500"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              style={{ transform: "translateY(8%)" }}
            >
              <g stroke="rgba(20,220,230,0.55)" strokeWidth="1.1" strokeLinecap="round">
                <line x1="30" y1="320" x2="210" y2="200" />
                <line x1="210" y1="200" x2="380" y2="340" />
                <line x1="210" y1="200" x2="300" y2="80" />
                <line x1="380" y1="340" x2="540" y2="240" />
                <line x1="540" y1="240" x2="800" y2="260" />
              </g>
              <g fill="#6EF7FF" opacity="0.95">
                <circle cx="30" cy="320" r="4.6" />
                <circle cx="210" cy="200" r="5.2" />
                <circle cx="380" cy="340" r="4.4" />
                <circle cx="300" cy="80" r="4.6" />
                <circle cx="540" cy="240" r="4.1" />
                <circle cx="800" cy="260" r="3.8" />
              </g>
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="grid md:grid-cols-2 items-center">
              {/* Left column: text content */}
              <div className="p-8 md:p-12 lg:px-16 lg:py-20">
                <span
                  className="inline-block text-sm font-semibold px-4 py-1 rounded-md"
                  style={{
                    background: "rgba(6,85,100,0.55)",
                    color: "#A7FBFF",
                    backdropFilter: "blur(6px)"
                  }}
                >
                  Automation &bull; CRM &bull; Integrations
                </span>

                <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-wide uppercase text-white leading-tight">
                  BUILD &bull; AUTOMATE
                  <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-white to-cyan-200">
                    SCALE
                  </span>
                </h1>

                <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
                  Turn manual tasks into scalable systems. I help businesses grow smarter with
                  automation, CRM integrations, and optimized workflows across Zapier, Make, and
                  GoHighLevel.
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-wrap gap-4 items-center">
                  <CalendlyTrigger
                    url={calendlyUrl}
                    className="flex items-center gap-3 px-6 py-3 rounded-md font-semibold transition-all duration-250 shadow-sm btn-pulse"
                  >
                    <span
                      className="flex items-center justify-center w-9 h-9 rounded-md"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.05)"
                      }}
                    >
                      <PhoneCallIcon className="w-4 h-4 text-white" />
                    </span>
                    <span className="text-white">Book a Call Now</span>
                  </CalendlyTrigger>

                  <a
                    href="#portfolio-gallery"
                    className="px-6 py-3 rounded-md font-semibold bg-white text-[#071018] hover:opacity-95 transition"
                  >
                    View Case Studies
                  </a>
                </div>

                {/* Tags pills */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {HERO_TAGS.map((tag) => (
                    <a
                      key={tag.name}
                      href={tag.href}
                      aria-label={`Learn more about ${tag.name}`}
                      className="inline-flex items-center justify-center rounded-full px-4 py-1 text-sm border"
                      style={{
                        color: "rgba(200,220,230,0.95)",
                        borderColor: "rgba(120,140,160,0.18)",
                        background: "transparent"
                      }}
                    >
                      {tag.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="hidden md:block" aria-hidden />
            </div>
          </div>

          <div className="border-t border-t-[rgba(255,255,255,0.03)]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;