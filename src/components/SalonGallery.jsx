import React, { useState } from 'react';
import { Eye, Sparkles, X } from 'lucide-react';
import './SalonGallery.css';

export default function SalonGallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImg, setLightboxImg] = useState(null);

  const galleryItems = [
    {
      id: 1,
      category: 'bridal',
      title: 'VIP Bridal Suite & Dressing Vanity',
      desc: 'Private air-conditioned suite for brides and entourage.',
      img: '/assets/hero_bridal.png'
    },
    {
      id: 2,
      category: 'interior',
      title: 'Luxury Styling Stations & Warm Illumination',
      desc: 'Ergonomic plush velvet seating with ring vanity mirrors.',
      img: '/assets/salon_interior.png'
    },
    {
      id: 3,
      category: 'hair',
      title: 'Keratin Hair Spa & Treatment Zone',
      desc: 'Deep steam hydration and relaxed shampoo bowls.',
      img: '/assets/hair_spa.png'
    },
    {
      id: 4,
      category: 'nail',
      title: 'Chic Nail Extension & Manicure Bar',
      desc: 'UV gel curing and bespoke gold leaf nail artistry.',
      img: '/assets/nail_art.png'
    },
    {
      id: 5,
      category: 'bridal',
      title: 'Celebrity Makeup & Airbrush Studio',
      desc: 'Professional color balancing lighting for true HD tones.',
      img: '/assets/after_makeover.png'
    },
    {
      id: 6,
      category: 'interior',
      title: 'Hygienic Sterilization & Sanctuary',
      desc: 'Medical-grade autoclaved equipment for 100% safety.',
      img: '/assets/salon_interior.png'
    }
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Visual Tour</span>
          <h2 className="section-title">
            The <span className="gold-text">Attitude Ambiance</span>
          </h2>
          <p className="section-desc">
            Step inside our Kanha City, Vadodara studio designed for absolute comfort, privacy, and ultra-hygienic luxury pampering.
          </p>
        </div>

        {/* Category Filters */}
        <div className="gallery-filters">
          <button
            className={`gallery-filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Spaces
          </button>
          <button
            className={`gallery-filter-btn ${activeFilter === 'bridal' ? 'active' : ''}`}
            onClick={() => setActiveFilter('bridal')}
          >
            Bridal Suites
          </button>
          <button
            className={`gallery-filter-btn ${activeFilter === 'interior' ? 'active' : ''}`}
            onClick={() => setActiveFilter('interior')}
          >
            Salon Interior
          </button>
          <button
            className={`gallery-filter-btn ${activeFilter === 'hair' ? 'active' : ''}`}
            onClick={() => setActiveFilter('hair')}
          >
            Hair Spa Zone
          </button>
          <button
            className={`gallery-filter-btn ${activeFilter === 'nail' ? 'active' : ''}`}
            onClick={() => setActiveFilter('nail')}
          >
            Nail Studio
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="gallery-card glass-card"
              onClick={() => setLightboxImg(item)}
            >
              <div className="gallery-img-wrapper">
                <img src={item.img} alt={item.title} className="gallery-img" />
                <div className="gallery-hover-overlay">
                  <div className="gallery-zoom-icon">
                    <Eye size={22} color="#D4AF37" />
                  </div>
                  <h4 className="gallery-item-title">{item.title}</h4>
                  <p className="gallery-item-desc">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="lightbox-overlay" onClick={() => setLightboxImg(null)}>
          <div className="lightbox-modal glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxImg(null)}>
              <X size={24} />
            </button>
            <img src={lightboxImg.img} alt={lightboxImg.title} className="lightbox-full-img" />
            <div className="lightbox-caption">
              <h3>{lightboxImg.title}</h3>
              <p>{lightboxImg.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
