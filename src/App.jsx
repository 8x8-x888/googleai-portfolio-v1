import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

const AnimatedSection = ({ id, children }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      id={id}
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {children}
    </div>
  );
};

const App = () => {
  return (
    <>
      <Header />
      {/* The Hero component now contains the Hero, About, and Services sections */}
      <Hero />
      
      {/* The main content starts AFTER the unified hero block */}
      <main id="main-content">
        <AnimatedSection id="portfolio-gallery">
          <Portfolio />
        </AnimatedSection>
        <AnimatedSection id="contact-form">
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
};

export default App;