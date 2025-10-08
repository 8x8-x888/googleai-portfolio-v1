import React from 'react';

const ProjectCard = ({ project, reverse = false, onDemoClick }) => {
  const direction = reverse ? 'md:flex-row-reverse' : 'md:flex-row';
  const PrimaryToolIcon = project.primaryTool?.icon;

  return (
    <article className={`glass-card flex flex-col ${direction} gap-8 p-6 md:p-8 items-center transition-transform duration-500 ease-out hover:scale-105`}>
      
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
          {project.primaryTool && typeof onDemoClick === 'function' && (
            <button
              onClick={onDemoClick}
              className="flex items-center gap-2 bg-gray-900/50 border border-gray-700 rounded-lg px-3 py-1.5 text-sm font-semibold hover:bg-gray-800/70 transition-colors btn-subtle-pulse"
              aria-label={`Open screenshots for ${project.title}`}
            >
              <PrimaryToolIcon className="w-5 h-5" />
              <span>{`View ${project.primaryTool.name} Screenshots`}</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
