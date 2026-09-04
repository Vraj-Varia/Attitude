import React from 'react';
import { Scissors, Sparkles, Droplets } from 'lucide-react';
import './Hero.css';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="reference-hero-section">
      {/* Full-bleed Editorial Background matching reference.jpeg */}
      <div className="hero-bg-wrapper">
        <img 
          src="/assets/salon_interior.png" 
          alt="Luxury Salon Interior" 
          className="hero-full-bg-img"
        />
        <div className="hero-dark-overlay"></div>
      </div>

      {/* Centered Editorial Content matching reference.jpeg */}
      <div className="container hero-center-content">
        <h1 className="hero-main-heading">
          Where Style<br />Meets Perfection
        </h1>

        <p className="hero-main-sub">
          Expert hair styling, coloring, treatments, and personalized beauty services designed to enhance your unique look.
        </p>

        <button onClick={onOpenBooking} className="hero-book-now-pill">
          Book Now
        </button>
      </div>

      {/* 3 Overlapping Frosted Glass Cards matching reference.jpeg */}
      <div className="container feature-cards-container">
        <div className="feature-cards-grid">
          {/* Card 1 */}
          <div className="reference-glass-card">
            <div className="card-icon-circle">
              <Scissors size={20} color="#1F1A17" />
            </div>
            <h3 className="card-feature-title">Hair Styling</h3>
            <p className="card-feature-desc">
              Expert hair styling, colorants, and personalized beauty service designed to enhance your unique look.
            </p>
          </div>

          {/* Card 2 (Highlighted/Active center card in reference.jpeg) */}
          <div className="reference-glass-card card-featured">
            <div className="card-icon-circle">
              <Sparkles size={20} color="#1F1A17" />
            </div>
            <h3 className="card-feature-title">Hair Coloring & Bridal</h3>
            <p className="card-feature-desc">
              Expert hair styling, coloring, treatments, and personalized beauty service designed to enhance your unique look.
            </p>
          </div>

          {/* Card 3 */}
          <div className="reference-glass-card">
            <div className="card-icon-circle">
              <Droplets size={20} color="#1F1A17" />
            </div>
            <h3 className="card-feature-title">Hair Treatments</h3>
            <p className="card-feature-desc">
              Short hair styling, treatments, and personalized beauty service designed to enhance your unique look.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
