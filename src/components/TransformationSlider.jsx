import React, { useState, useRef, useEffect } from 'react';
import { Sliders, Sparkles, Check, ArrowLeftRight } from 'lucide-react';
import './TransformationSlider.css';

export default function TransformationSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleGlobalUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalUp);
    window.addEventListener('touchend', handleGlobalUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalUp);
      window.removeEventListener('touchend', handleGlobalUp);
    };
  }, []);

  return (
    <section className="transformation-section" id="transformations">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Real Client Results</span>
          <h2 className="section-title">
            Witness The <span className="gold-text">Transformation</span>
          </h2>
          <p className="section-desc">
            Drag or swipe the interactive slider to see how our lead artists enhance natural features into glowing, royal perfection.
          </p>
        </div>

        <div className="transformation-card-wrap glass-panel">
          <div className="transformation-grid">
            {/* Interactive Image Slider */}
            <div
              className="slider-container"
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* After Image (Background layer) */}
              <img
                src="/assets/after_makeover.png"
                alt="After HD Bridal Makeup Transformation"
                className="slider-image after-image"
              />
              <span className="slider-label label-after">
                <Sparkles size={13} color="#D4AF37" /> AFTER: Royal HD Glam
              </span>

              {/* Before Image (Clipped overlay) */}
              <div
                className="before-image-wrap"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src="/assets/before_makeover.png"
                  alt="Before Makeup Natural Look"
                  className="slider-image before-image"
                />
                <span className="slider-label label-before">BEFORE: Natural Look</span>
              </div>

              {/* Slider Handle */}
              <div
                className="slider-handle"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
              >
                <div className="handle-line"></div>
                <div className="handle-button">
                  <ArrowLeftRight size={18} color="#0b090c" />
                </div>
                <div className="handle-line"></div>
              </div>
            </div>

            {/* Transformation Highlights */}
            <div className="transformation-details">
              <div className="badge-gold">
                <Sparkles size={13} />
                <span>SIGNATURE BRIDAL MAKEOVER</span>
              </div>

              <h3 className="transform-title">Royal Airbrush & HD Bridal Finish</h3>
              <p className="transform-desc">
                Crafted for bride Priyanka at Attitude Beauty Salon Vadodara. Customized to match her skin undertone, featuring waterproof sweat-resistant base foundation, subtle contouring, soft gold eye glitter, and handcrafted mink eyelashes.
              </p>

              <div className="transform-bullets">
                <div className="bullet-item">
                  <Check size={16} color="#D4AF37" />
                  <span>Custom Color Correcting & Poreless Finish</span>
                </div>
                <div className="bullet-item">
                  <Check size={16} color="#D4AF37" />
                  <span>Waterproof & Sweat-proof 24-Hr Lock</span>
                </div>
                <div className="bullet-item">
                  <Check size={16} color="#D4AF37" />
                  <span>Volumizing Hair Extensions & Crown Hair Updo</span>
                </div>
                <div className="bullet-item">
                  <Check size={16} color="#D4AF37" />
                  <span>Precision Saree Draping & Accessory Pinning</span>
                </div>
              </div>

              <div className="slider-instruction-pill">
                <Sliders size={15} color="#E6C594" />
                <span>Drag the handle left or right to compare before & after</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
