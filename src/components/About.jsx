import React from 'react';

const About = () => {
  return (
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
  );
};

export default About;