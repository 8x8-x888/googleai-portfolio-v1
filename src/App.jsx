import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

const AnimatedSection = ({ id, children, className = '' }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      id={id}
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {children}
    </div>
  );
};

const App = () => {
  return (
    <div className="relative bg-dark-bg">
      <Header />
      <Hero />
      <main id="main-content" className="relative z-10 bg-dark-bg">
        {/*
          A dot-grid background is added here to apply to sections below the hero
        */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(200, 200, 200, 0.1) 1px, transparent 0)',
            backgroundSize: '2.5rem 2.5rem'
          }}
        ></div>
        <div className="relative z-10">
          <AnimatedSection id="about-me">
            <About />
          </AnimatedSection>
          <AnimatedSection id="services">
            <Services />
          </AnimatedSection>
          <AnimatedSection id="portfolio-gallery">
            <Portfolio />
          </AnimatedSection>
          <AnimatedSection id="contact-form">
            <Contact />
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;