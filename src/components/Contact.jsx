import React, { useState } from 'react';
import { SendIcon, CheckIcon, ErrorIcon } from '../assets/Icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', message: '',
  });
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState('');

  const API_URL = import.meta.env.VITE_CONTACT_API_URL;
  const API_SECRET = import.meta.env.VITE_CONTACT_API_SECRET;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!API_URL || !API_SECRET) {
      alert("Note: The contact form backend is not configured.");
      return;
    }
    
    setStatus('submitting');
    setMessage('Sending your request...');

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-API-Secret': API_SECRET },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        setStatus('success');
        setMessage(result.message || 'Success! Your message has been sent.');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
        setMessage(result.error || 'Failed to send message.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Failed to connect to the server.');
    }
  };

  const renderStatusMessage = () => {
    if (!status || status === 'submitting') return null;
    const isSuccess = status === 'success';
    const Icon = isSuccess ? CheckIcon : ErrorIcon;
    const bgColor = isSuccess ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300';
    return (
      <div role="alert" className={`flex items-center gap-3 p-4 rounded-lg font-semibold mb-6 ${bgColor}`}>
        <Icon className="w-5 h-5" /> {message}
      </div>
    );
  };

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2>LET’S BUILD TOGETHER</h2>
        </div>
        <div className="glass-card p-8 md:p-12">
          <p className="text-center text-lg text-gray-400 mb-8">
            Ready to automate? Fill out the form or book a call directly.
          </p>
          
          {renderStatusMessage()}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <fieldset disabled={status === 'submitting'}>
              <div className="grid sm:grid-cols-2 gap-6">
                <input type="text" name="firstName" placeholder="First Name" className="input-field" value={formData.firstName} onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last Name" className="input-field" value={formData.lastName} onChange={handleChange} required />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <input type="email" name="email" placeholder="Email Address" className="input-field" value={formData.email} onChange={handleChange} required />
                <input type="tel" name="phone" placeholder="Phone (Optional)" className="input-field" value={formData.phone} onChange={handleChange} />
              </div>
              <textarea name="message" rows="6" placeholder="Tell me about your project's biggest manual headache..." className="input-field" value={formData.message} onChange={handleChange} required></textarea>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : <><SendIcon className="w-5 h-5" />Send Request</>}
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;