import React, { useState } from 'react';
import { Mail, MapPin, Clock, Bell, Phone, Globe } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      fullName: contactForm.name,
      email: contactForm.email,
      subject: contactForm.subject,
      message: contactForm.message
    };

    emailjs.send(
      'service_hcfhpph',         // <-- NEW Service ID
      'template_3mml45f',        // Contact Us Template ID
      templateParams,
      'LmwRMvkKI1kpJdxH0'        // Public Key
    )
    .then((response) => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setContactForm({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    })
    .catch((error) => {
      setIsSubmitting(false);
      alert('Failed to send message. Please try again.');
      console.error('EmailJS error:', error);
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['Hyderabad, Telangana, India', 'Hitex']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['yodaratana@gmail.com']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 8501887794', '+91 7989083605']
    },
    {
      icon: Clock,
      title: 'Event Hours',
      details: ['August 23, 2025', '9:00 AM - 1:00 PM', 'Registration: 9:00 AM']
    },
    {
      icon: Globe,
      title: 'Website',
      details: ['www.yodaratna.com']
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-black to-purple-950/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have questions? We're here to help make your Fashion Week experience unforgettable
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Column */}
          <div className="animate-on-scroll">
            <div className="space-y-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-300">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Embedded Google Map */}
            <div className="mt-8 rounded-xl overflow-hidden aspect-video shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.25176871577!2d78.40804555!3d17.4123487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1750327148193!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            {/* Google Maps Link */}
            <div className="mt-4 text-center">
              <a
                href="https://maps.app.goo.gl/ZwSWA4GPz8kf2gvx8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-pink-500 hover:text-yellow-400 font-semibold underline text-lg transition-colors duration-300"
              >
                View on Google Maps
              </a>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="animate-on-scroll">
            <div className="bg-black/50 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bell size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-300">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-300"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-300"
                  />
                  <select
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-pink-500 focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select Subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="registration">Registration Help</option>
                    <option value="press">Press & Media</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="technical">Technical Support</option>
                  </select>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-300 resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-pink-500/30 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://www.instagram.com/yoda_ratna_awards_2025/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75h9A3.75 3.75 0 0120.25 7.5v9a3.75 3.75 0 01-3.75 3.75h-9A3.75 3.75 0 013.75 16.5v-9A3.75 3.75 0 017.5 3.75z" />
                <circle cx="12" cy="12" r="3.5" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>
            <a
              href="https://x.com/yodaratna8877"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
              aria-label="X"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.75 4.75l14.5 14.5M19.25 4.75l-14.5 14.5" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/YodaratnaAwards/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@yodaratna"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
              aria-label="YouTube"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                <path d="M23.498 6.186a2.994 2.994 0 00-2.112-2.12C19.204 3.5 12 3.5 12 3.5s-7.204 0-9.386.566a2.994 2.994 0 00-2.112 2.12C0 8.374 0 12 0 12s0 3.626.502 5.814a2.994 2.994 0 002.112 2.12C4.796 20.5 12 20.5 12 20.5s7.204 0 9.386-.566a2.994 2.994 0 002.112-2.12C24 15.626 24 12 24 12s0-3.626-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
          <p className="text-gray-500">
            © 2025 Yoda Ratna Awards . All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
