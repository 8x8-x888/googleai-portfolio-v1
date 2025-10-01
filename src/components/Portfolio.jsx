import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../assets/data';
import ProjectGalleryModal from './ProjectGalleryModal';

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentTitle, setCurrentTitle] = useState('');

  const openGallery = (images = [], title = '') => {
    setCurrentImages(images);
    setCurrentTitle(title);
    setIsOpen(true);
  };

  const closeGallery = () => {
    setIsOpen(false);
    setCurrentImages([]);
    setCurrentTitle('');
  };

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2>PORTFOLIO</h2>
        </div>
        <div className="space-y-16">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
              onDemoClick={() => openGallery(project.images, project.title)}
            />
          ))}
        </div>
      </div>
      <ProjectGalleryModal isOpen={isOpen} onClose={closeGallery} images={currentImages} title={currentTitle} />
    </div>
  );
};

export default Portfolio;