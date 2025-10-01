/* src/components/About.jsx */
import React from 'react';

const About = () => {
  return (
    <div className="py-16 md:py-24">
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
    </div>
  );
};

export default About;```

#### `Services.jsx`

```jsx
/* src/components/Services.jsx */
import React from 'react';
import { SERVICE_CARDS } from '../assets/data';

const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  return (
    <div className="glass-card p-6 md:p-8">
      <Icon className="w-10 h-10 text-accent-cyan mb-5" />
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

const Services = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2>SERVICES</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICE_CARDS.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;