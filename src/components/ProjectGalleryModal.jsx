// src/components/ProjectGalleryModal.jsx
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
    if (isAnimating) return; // Prevent rapid clicking
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        if (direction === 'next') {
          return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
        } else {
          return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
        }
      });
      // Allow the animation to finish before enabling clicks again
      setTimeout(() => setIsAnimating(false), 150);
    }, 150);
  }, [images.length, isAnimating]);

  const goToPrevious = () => navigate('prev');
  const goToNext = () => navigate('next');

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