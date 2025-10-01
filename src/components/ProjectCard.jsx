/* src/components/ProjectCard.jsx */
import React from 'react';

const ProjectCard = ({ project, reverse = false, onDemoClick }) => {
  const direction = reverse ? 'md:flex-row-reverse' : 'md:flex-row';
  const PrimaryToolIcon = project.primaryTool?.icon;

  return (
    <article className={`glass-card flex flex-col ${direction} gap-8 p-6 md:p-8 items-center`}>
      
      <div className="md:w-1/2 rounded-lg overflow-hidden border-2 border-gray-700/50 group">
        <img
          src={project.image}
          alt={project.alt}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          width="960"
          height="540"
        />
      </div>

      <div className="md:w-1/2 flex flex-col justify-center space-y-5">
        <h3 className="text-2xl font-bold text-primary-blue">
          {project.title}
        </h3>
        
        <blockquote className="text-lg italic text-gray-300 border-l-4 border-accent-cyan pl-4">
          {project.quote}
        </blockquote>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <span key={tool.name} className="pill-tech">
                {Icon && <Icon className="w-4 h-4" />}
                {tool.name}
              </span>
            );
          })}
        </div>
        
        <div className="flex flex-wrap items-center gap-4 pt-4">
          {typeof onDemoClick === 'function' && (
            <button
              onClick={onDemoClick}
              className="font-semibold text-accent-cyan hover:text-white transition-colors self-start"
              aria-label={`Open screenshots for ${project.title}`}
            >
              View Screenshots &rarr;
            </button>
          )}

          {project.primaryTool && (
            <div className="flex items-center gap-2 bg-gray-900/50 border border-gray-700 rounded-lg px-3 py-1.5 text-sm font-semibold">
              <PrimaryToolIcon className="w-5 h-5" />
              <span>{project.primaryTool.name}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;```

#### `ProjectGalleryModal.jsx`

```jsx
/* src/components/ProjectGalleryModal.jsx */
import React, { useState, useEffect, useCallback } from 'react';
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from '../assets/Icons';

const ProjectGalleryModal = ({ isOpen, onClose, images = [], title = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen]);

  const navigate = useCallback((direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        if (direction === 'next') {
          return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
        } else {
          return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
        }
      });
      setTimeout(() => setIsAnimating(false), 150);
    }, 150);
  }, [images.length, isAnimating]);

  const goToPrevious = useCallback(() => navigate('prev'), [navigate]);
  const goToNext = useCallback(() => navigate('next'), [navigate]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') goToPrevious();
      if (event.key === 'ArrowRight') goToNext();
      if (event.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, goToPrevious, goToNext, onClose]);
  
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} gallery`}
      onClick={onClose}
    >
      <div 
        className="w-full max-w-7xl flex justify-between items-center p-4 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          {images.length > 1 && (
            <span className="text-gray-400">{currentIndex + 1} / {images.length}</span>
          )}
        </div>
        <button onClick={onClose} aria-label="Close gallery" className="p-2 hover:bg-white/10 rounded-full">
          <CloseIcon className="w-8 h-8" />
        </button>
      </div>
      <div 
        className="relative w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="w-8 h-8 text-white" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRightIcon className="w-8 h-8 text-white" />
            </button>
          </>
        )}
        <div className="w-full h-full flex items-center justify-center p-4">
          <img
            key={currentIndex} 
            src={images[currentIndex]}
            alt={`${title} screenshot ${currentIndex + 1}`}
            className={`max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-opacity duration-150 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectGalleryModal;