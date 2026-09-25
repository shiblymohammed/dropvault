'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsLoading(true);
    const scriptURL = "https://script.google.com/macros/s/AKfycbzMVybd6oKepxRfWmCMCIQSzyWcCBfviAEaCv7zeLtRcuS0EunSOzFSHCjG0vsUpJYF/exec";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', phone: '' });
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 4000);
      }
    } catch (error) {
      console.error("Error submitting to Google Sheets:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="main-container">
      {/* Left Column - Information */}
      <div className="left-column">
        <div className="logo-container">
          <Image 
            src="/logo.png" 
            alt="DropVault Logo" 
            width={250} 
            height={80} 
            style={{ objectFit: 'contain', width: 'auto', height: 'auto', maxHeight: '60px' }}
            priority 
          />
        </div>

        <div className="section-label">
          <div className="red-line"></div>
          GET IN TOUCH
        </div>

        <h1 className="hero-title">
          Let's Build<br />
          Something<br />
          <span>Great</span> Together
        </h1>
        <p className="hero-subtitle">
          Have a project in mind, a question, or just want to say hello? We'd love to hear from you. Drop us a message and we'll get back to you as soon as possible.
        </p>

        <div className="contact-details">
          <div className="contact-item">
            <div className="icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div>
              <div className="contact-item-title">Email</div>
              <div className="contact-item-desc">saadpopz12@gmail.com</div>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div>
              <div className="contact-item-title">Phone</div>
              <div className="contact-item-desc">+91 7592956227<br/>Mon - Sat, 9AM - 6PM</div>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div>
              <div className="contact-item-title">Location</div>
              <div className="contact-item-desc">Calicut, Kerala, India</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="right-column">
        <div className="form-card">
          <div className="form-header">
            SEND A MESSAGE
            <div className="red-line"></div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Your Name <span>*</span></label>
              <div className="input-wrapper">
                <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  autoComplete="name"
                  enterKeyHint="next"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone Number <span>*</span></label>
              <div className="input-wrapper">
                <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <input
                  type="tel"
                  id="phone"
                  className="form-input"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  autoComplete="tel"
                  enterKeyHint="send"
                />
              </div>
            </div>

            <button type="submit" className="submit-btn" disabled={isLoading} style={{ opacity: isLoading ? 0.7 : 1 }}>
              {isLoading ? 'Sending...' : 'Send Message'}
              <div className="submit-icon-wrapper">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </button>
          </form>

          {isSubmitted && (
            <div className="success-message">
              Message sent successfully!
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
