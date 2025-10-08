import React, { useEffect } from 'react';

const CalendlyTrigger = ({ url, className = '', children }) => {
  const isUrlMissing = !url;

  /*
    Log a clear warning during development if the URL is not provided.
    This makes debugging much easier.
  */
  useEffect(() => {
    if (isUrlMissing && process.env.NODE_ENV === 'development') {
      console.warn(
        'CalendlyTrigger component is missing the `url` prop. ' +
          'Please ensure the VITE_CALENDLY_URL environment variable is set.'
      );
    }
  }, [isUrlMissing]);

  const handleClick = (e) => {
    e.preventDefault();

    // Do not proceed if the URL is missing
    if (isUrlMissing) {
      return;
    }

    // Check if the Calendly script is loaded on the window object
    if (window.Calendly && typeof window.Calendly.initPopupWidget === 'function') {
      window.Calendly.initPopupWidget({ url });
    } else {
      // Fallback if the script hasn't loaded: open in a new tab.
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  /*
    If the URL is missing, we render a disabled button with a helpful title.
    This provides clear feedback in the UI that something is wrong.
  */
  if (isUrlMissing) {
    return (
      <button
        type="button"
        className={`${className} opacity-50 cursor-not-allowed`}
        disabled
        title="Calendly URL is not configured. Please set VITE_CALENDLY_URL."
      >
        {children}
      </button>
    );
  }

  /*
    If the URL is present, render the fully functional button.
  */
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
