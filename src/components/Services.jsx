import React from 'react';
import { SERVICE_CARDS } from '../assets/data';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <div id="services" className="py-16 md:py-24">
      <div className="section-header">
        <h2>SERVICES</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {SERVICE_CARDS.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;