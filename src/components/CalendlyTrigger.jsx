import React from 'react';

const CalendlyTrigger = ({ url, className = '', children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (window.Calendly && typeof window.Calendly.initPopupWidget === 'function') {
      window.Calendly.initPopupWidget({ url });
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
      aria-label={typeof children === 'string' ? children : 'Open Calendly scheduling pop-up'}
    >
      {children}
    </button>
  );
};

export default CalendlyTrigger;