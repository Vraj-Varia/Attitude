import React from 'react';
import { Crown, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './SocialIcons';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-main-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <Crown size={28} color="#D4AF37" />
              <div>
                <span className="footer-brand-title">ATTITUDE</span>
                <span className="footer-brand-sub">BEAUTY SALON & MAKE-UP STUDIO</span>
              </div>
            </div>

            <p className="footer-brand-desc">
              Vadodara’s premier destination for luxury HD & Airbrush bridal makeovers, hair spa couture, and royal skin pampering.
            </p>

            <div className="social-links-row">
              <a
                href="https://www.instagram.com/attitudebeautysalon_/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-title">Quick Navigation</h4>
            <ul className="footer-links">
              <li><a href="#services">Services & Menu</a></li>
              <li><a href="#bridal">Bridal Package Builder</a></li>
              <li><a href="#transformations">Before & After Makeovers</a></li>
              <li><a href="#quiz">Beauty Consultation Quiz</a></li>
              <li><a href="#gallery">Salon Ambiance Gallery</a></li>
              <li><a href="#contact">Location & Hours</a></li>
            </ul>
          </div>

          {/* Popular Services */}
          <div className="footer-col">
            <h4 className="footer-title">Popular Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Royal HD Bridal Makeup</a></li>
              <li><a href="#services">Airbrush Celebrity Glam</a></li>
              <li><a href="#services">Keratin Hair Smoothing</a></li>
              <li><a href="#services">Botoplex Hair Therapy</a></li>
              <li><a href="#services">7-in-1 HydraFacial Glow</a></li>
              <li><a href="#services">Luxury Gel Extensions</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col">
            <h4 className="footer-title">Visit Salon</h4>
            <div className="footer-contact-info">
              <p className="contact-item">
                <MapPin size={16} color="#D4AF37" />
                <span>Shop No. 7, Kanha City, Ajwa Road, Vadodara</span>
              </p>
              <p className="contact-item">
                <Phone size={16} color="#D4AF37" />
                <a href="tel:+919316022497">+91 93160 22497</a>
              </p>
              <p className="contact-item">
                <InstagramIcon size={16} color="#E5A9B4" />
                <a href="https://www.instagram.com/attitudebeautysalon_/" target="_blank" rel="noreferrer">
                  @attitudebeautysalon_
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Attitude Beauty Salon & Make-up Studio. All Rights Reserved.</p>

          <button onClick={scrollToTop} className="back-to-top-btn" title="Back to Top">
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
