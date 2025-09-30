// src/components/ObfuscatedEmail.jsx
import React from 'react';

const ObfuscatedEmail = ({ email }) => {
  const reversedEmail = email.split('').reverse().join('');

  return (
    <a 
      href={`mailto:${email}`}
      style={{ unicodeBidi: 'bidi-override', direction: 'rtl' }}
    >
      {reversedEmail}
    </a>
  );
};

export default ObfuscatedEmail;