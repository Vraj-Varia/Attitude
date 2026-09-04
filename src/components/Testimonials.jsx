import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import './Testimonials.css';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: 'Riddhi Patel',
      role: 'Bride (Dec 2025 Wedding)',
      rating: 5,
      comment: 'Attitude Beauty Salon made my D-Day so incredibly special! The Airbrush makeup lasted through 12+ hours of rituals without a single touchup. My family was awestruck. Lead artist is a magician!',
      tag: 'Bridal Makeover'
    },
    {
      id: 2,
      name: 'Sneha Shah',
      role: 'Regular Client, Vadodara',
      rating: 5,
      comment: 'I got the Botoplex Collagen hair treatment done here. My damaged hair feels like silk now! Super clean salon, polite staff, and genuine branded products used every time.',
      tag: 'Hair Couture'
    },
    {
      id: 3,
      name: 'Kinjal Joshi',
      role: 'Engagement Makeover',
      rating: 5,
      comment: 'The soft glam engagement look was beyond expectation. She understood exactly what I wanted—subtle, elegant, and glowing. The nail extension art was also stunning!',
      tag: 'Engagement Glam'
    },
    {
      id: 4,
      name: 'Pooja Parmar',
      role: 'HydraFacial Ritual',
      rating: 5,
      comment: 'Best HydraFacial experience in Vadodara! My skin felt hydrated and noticeably brightened immediately. The salon environment feels so luxurious and peaceful.',
      tag: 'Skin Radiance'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Real Client Praise</span>
          <h2 className="section-title">
            Words From Our <span className="gold-text">Beautiful Clients</span>
          </h2>
          <p className="section-desc">
            Discover why brides and beauty enthusiasts across Vadodara trust Attitude Beauty Salon & Make-up Studio for their most important moments.
          </p>
        </div>

        <div className="reviews-carousel-wrap">
          {/* Main Active Testimonial Card */}
          <div className="active-review-card glass-panel">
            <Quote size={40} className="quote-icon" />

            <div className="review-rating-row">
              {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={18} fill="#D4AF37" color="#D4AF37" />
              ))}
              <span className="review-tag">{reviews[currentIndex].tag}</span>
            </div>

            <p className="review-comment">"{reviews[currentIndex].comment}"</p>

            <div className="review-author-info">
              <div>
                <h4 className="author-name">{reviews[currentIndex].name}</h4>
                <span className="author-role">{reviews[currentIndex].role}</span>
              </div>
              <div className="verified-badge">
                <CheckCircle2 size={15} color="#22c55e" />
                <span>Verified Client</span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="carousel-nav-controls">
            <button onClick={prevReview} className="nav-arrow-btn glass-card">
              <ChevronLeft size={20} />
            </button>

            <div className="carousel-dots">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${currentIndex === i ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(i)}
                ></button>
              ))}
            </div>

            <button onClick={nextReview} className="nav-arrow-btn glass-card">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
