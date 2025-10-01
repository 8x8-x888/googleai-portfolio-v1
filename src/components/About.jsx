/* src/components/About.jsx */
import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="section-header">
        <h2>ABOUT ME</h2>
      </div>
      <div className="space-y-8 text-center">
        <p className="text-xl md:text-2xl text-light-text leading-relaxed">
          I build the digital engines that drive efficiency. My expertise lies in transforming complex manual processes into seamless, automated systems using 
          <strong className="text-primary-blue font-semibold"> Zapier</strong>, 
          <strong className="text-accent-cyan font-semibold"> Make</strong>, and 
          <strong className="text-primary-blue font-semibold"> n8n</strong>. 
          I architect solutions that save time, eliminate errors, and unlock scalable growth.
        </p>
        <blockquote className="border-l-4 border-accent-cyan pl-6 text-left italic text-gray-400 max-w-2xl mx-auto">
          "The goal of automation is not to eliminate work, but to elevate human effort to more valuable, creative, and strategic tasks."
        </blockquote>
      </div>
    </div>
  );
};

export default About;