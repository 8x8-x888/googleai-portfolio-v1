// src/components/ProjectGalleryModal.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from '../assets/Icons';

const ProjectGalleryModal = ({ isOpen, onClose, images = [], title = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when the modal opens with a new set of images
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen]);

  const goToPrevious = useCallback(() => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

  const goToNext = useCallback(() => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      } else if (event.key === 'Escape') {
        onClose();
      }
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
      {/* Header: Title, Counter, and Close Button */}
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

      {/* Main Content: Image and Navigation Arrows */}
      <div 
        className="relative w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Arrow */}
        {images.length > 1 && (
          <button
            onClick={goToPrevious}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeftIcon className="w-8 h-8 text-white" />
          </button>
        )}

        {/* Image Display */}
        <div className="w-full h-full flex items-center justify-center p-4">
          <img
            src={images[currentIndex]}
            alt={`${title} screenshot ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </div>

        {/* Right Arrow */}
        {images.length > 1 && (
          <button
            onClick={goToNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Next image"
          >
            <ChevronRightIcon className="w-8 h-8 text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectGalleryModal;