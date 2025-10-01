/* src/App.jsx */
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

const AnimatedSection = ({ id, children }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id={id}
      ref={ref}
      className={`py-16 md:py-24 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    >
      {children}
    </section>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
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
      </main>
      <Footer />
    </>
  );
};

export default App;