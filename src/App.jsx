import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { useIntersectionObserver } from './hooks/useIntersectionObserver.jsx';

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