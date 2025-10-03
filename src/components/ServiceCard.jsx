import React from 'react';

const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  return (
    <div className="glass-card p-6 md:p-8 h-full">
      <Icon className="w-10 h-10 object-contain mb-5" />
      <h3 className="text-2xl font-bold text-light-text mb-3">{service.title}</h3>
      <p className="text-gray-400 mb-5 min-h-[5rem]">{service.description}</p>
      <ul className="space-y-2 text-gray-300 border-t border-gray-700 pt-4">
        {service.details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-accent-cyan mr-3 mt-1 text-lg leading-none">&rarr;</span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;