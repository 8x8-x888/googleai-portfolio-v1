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

<<<<<<< HEAD
export default About;
=======
export default About;```
/*
  You can now apply this same pattern to your Services, Portfolio, and Contact sections
  for a consistent effect.
*/

#### **Enhancement 2: Add Smooth Transitions to the Gallery Images**

**Observation:** In the gallery, the images change instantly.
**Enhancement:** Let's add a subtle cross-fade effect when navigating between screenshots for a more polished feel.

**Action:** Update the `ProjectGalleryModal.jsx` component.

```jsx
// src/components/ProjectGalleryModal.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from '../assets/Icons';

const ProjectGalleryModal = ({ isOpen, onClose, images = [], title = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // ... existing useEffect for resetting index ...

  const navigate = useCallback((direction) => {
    setIsAnimating(true);
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      } else {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      }
      setIsAnimating(false);
    }, 150); // Duration should match the CSS transition
  }, [images.length]);

  const goToPrevious = () => navigate('prev');
  const goToNext = () => navigate('next');

  // ... existing useEffect for keyboard navigation (use navigate functions) ...
  
  if (!isOpen) return null;

  return (
    // ... modal container
      // ... header
      <div className="relative w-full h-full flex items-center justify-center">
        {/* ... navigation buttons ... */}
        
        {/* Image Display with Transition */}
        <div className="w-full h-full flex items-center justify-center p-4">
          <img
            // Use the key to force re-render, but control visibility with opacity
            key={currentIndex} 
            src={images[currentIndex]}
            alt={`${title} screenshot ${currentIndex + 1}`}
            className={`max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-opacity duration-150 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
          />
        </div>

        {/* ... navigation buttons ... */}
      </div>
    // ...
  );
};

export default ProjectGalleryModal;
# changes from GitHub
>>>>>>> origin/main
