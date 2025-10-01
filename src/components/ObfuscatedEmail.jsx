import React from 'react';

const ObfuscatedEmail = ({ email, className = '' }) => {
  const reversedEmail = email.split('').reverse().join('');

  return (
    <a 
      href={`mailto:${email}`}
      className={className}
      style={{ unicodeBidi: 'bidi-override', direction: 'rtl' }}
    >
      {reversedEmail}
    </a>
  );
};

export default ObfuscatedEmail;