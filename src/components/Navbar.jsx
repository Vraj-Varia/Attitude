import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Bridal Studio', href: '#bridal' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Transformations', href: '#transformations' },
    { label: 'Beauty Quiz', href: '#quiz' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`floating-nav-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container nav-pill-wrapper">
        <div className="nav-pill-glass">
          {/* Brand Logo matching reference.jpeg */}
          <a href="#" className="nav-brand-text">
            ATTITUDE SALON
          </a>

          {/* Center Links matching reference.jpeg */}
          <nav className="nav-center-links">
            {navItems.map((item, index) => (
              <a key={index} href={item.href} className="nav-pill-link">
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button matching reference.jpeg */}
          <div className="nav-right-action">
            <button onClick={onOpenBooking} className="nav-book-pill-btn">
              Book Appointment
            </button>

            <button 
              className="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={22} color="#FFFFFF" /> : <Menu size={22} color="#FFFFFF" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-pill-drawer">
          <div className="mobile-drawer-content container">
            {navItems.map((item, index) => (
              <a 
                key={index} 
                href={item.href} 
                className="mobile-pill-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }} 
              className="nav-book-pill-btn w-full-mobile"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
