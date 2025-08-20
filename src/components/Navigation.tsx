import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- THIS IS THE CHANGE ---
  // All nav items are now in a single array to guarantee the correct order.
  // "Gallery" is placed before "Contact" to ensure "Contact" is the last item.
  const navLinks = [
    { type: 'scroll', href: '#home', label: 'Home' },
    { type: 'scroll', href: '#about', label: 'About' },
    { type: 'scroll', href: '#award-categories', label: 'Events' },
    { type: 'scroll', href: '#founders', label: 'Founders' },
    { type: 'scroll', href: '#agenda', label: 'Agenda' },
    { type: 'scroll', href: '#registration', label: 'Register' },
    { type: 'link', href: '/gallery', label: 'Gallery' },
    { type: 'scroll', href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const element = document.querySelector(href);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        });
      });
    } else {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isMobileMenuOpen ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img src="/images/yodara.png" alt="Yodha Ratna Logo" className="h-12 md:h-14 object-contain" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {/* Desktop navigation now reads from the single navLinks array */}
            {navLinks.map((item) => {
              const commonClasses = "text-white hover:text-pink-400 transition-colors duration-300 relative group";
              const underline = <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>;

              if (item.type === 'link') {
                return (
                  <Link key={item.href} to={item.href} className={commonClasses}>
                    {item.label}
                    {underline}
                  </Link>
                );
              }
              return (
                <button key={item.href} onClick={() => scrollToSection(item.href)} className={commonClasses}>
                  {item.label}
                  {underline}
                </button>
              );
            })}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:text-pink-400 transition-colors duration-300">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md">
            <div className="px-6 py-4 space-y-4">
              {/* Mobile navigation also reads from the single navLinks array */}
              {navLinks.map((item) => {
                const commonClasses = "block w-full text-left text-white hover:text-pink-400 transition-colors duration-300 py-2";
                if (item.type === 'link') {
                  return (
                    <Link key={item.href} to={item.href} onClick={() => setIsMobileMenuOpen(false)} className={commonClasses}>
                      {item.label}
                    </Link>
                  );
                }
                return (
                  <button key={item.href} onClick={() => scrollToSection(item.href)} className={commonClasses}>
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;