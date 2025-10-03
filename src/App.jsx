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

export default App;```

#### **File: `src/styles/index.css`**
We need to remove the `height: 100%` rule and put the dot-grid background back on the `body`.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* REMOVE the html, body, #root block */

/* Base HTML and Body Styles */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

body {
  /* PUT THE DOT-GRID BACKGROUND BACK */
  background-color: #111827;
  background-image: radial-gradient(circle at 1px 1px, rgba(200, 200, 200, 0.1) 1px, transparent 0);
  background-size: 2.5rem 2.5rem;
}

/* ... (the rest of your CSS file remains the same) ... */