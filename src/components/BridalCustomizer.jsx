import React, { useState } from 'react';
import { Crown, Sparkles, CheckCircle2, ChevronRight, Gift, Calendar, HelpCircle } from 'lucide-react';
import './BridalCustomizer.css';

export default function BridalCustomizer({ onOpenBooking }) {
  const [selectedMakeup, setSelectedMakeup] = useState('hd_bridal');
  const [selectedPreBridal, setSelectedPreBridal] = useState(['radiance_facial', 'hair_spa']);
  const [guestCount, setGuestCount] = useState(2);

  const makeupOptions = [
    {
      id: 'hd_bridal',
      title: 'Royal HD Bridal Makeup',
      desc: 'Flawless camera-ready finish, customized lashes, hairstyle & dupatta draping.',
      price: 15000
    },
    {
      id: 'airbrush_bridal',
      title: 'Ultra Airbrush Celebrity Makeup',
      desc: 'Sweat-proof, featherlight 24-hr perfection with 3D mink lashes & VIP setting.',
      price: 22000
    },
    {
      id: 'engagement_glam',
      title: 'Engagement / Sagan Royal Glam',
      desc: 'Soft glowing skin base, romantic updo hair styling & jewel accentuation.',
      price: 8500
    }
  ];

  const preBridalOptions = [
    { id: 'radiance_facial', title: '24K Gold Radiance Facial', price: 4500 },
    { id: 'hair_spa', title: 'Moroccan Hair Spa & Keratin Polish', price: 3500 },
    { id: 'body_spa', title: 'Full Body Organic Scrub & Waxing Spa', price: 5000 },
    { id: 'nail_art', title: 'Bridal Gel Extensions + Foil Nail Art', price: 2800 }
  ];

  const guestPricePerPerson = 3500;

  const togglePreBridal = (id) => {
    if (selectedPreBridal.includes(id)) {
      setSelectedPreBridal(selectedPreBridal.filter((item) => item !== id));
    } else {
      setSelectedPreBridal([...selectedPreBridal, id]);
    }
  };

  const makeupObj = makeupOptions.find((m) => m.id === selectedMakeup);
  const preBridalSum = selectedPreBridal.reduce((acc, currId) => {
    const item = preBridalOptions.find((p) => p.id === currId);
    return acc + (item ? item.price : 0);
  }, 0);

  const guestsTotal = guestCount * guestPricePerPerson;
  const packageTotal = (makeupObj ? makeupObj.price : 0) + preBridalSum + guestsTotal;

  // Perks unlocked based on total
  const perksUnlocked = [
    'Complimentary Bridal Makeup Trial & Consultation',
    'Free High-End Eyelashes & Hair Extension Styling',
    'Exclusive Pre-wedding VIP Vanity Suite Access'
  ];
  if (packageTotal > 25000) {
    perksUnlocked.push('Free Gift Box: Emergency Touch-up & Lipstick Kit');
  }

  return (
    <section className="bridal-section" id="bridal">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">For The Bride-To-Be</span>
          <h2 className="section-title">
            Bespoke <span className="gold-text">Bridal Package</span> Builder
          </h2>
          <p className="section-desc">
            Customize your dream wedding makeover. Choose your makeup style, pre-wedding rituals, and bridesmaid glam to unlock royal privileges.
          </p>
        </div>

        <div className="bridal-builder-grid">
          {/* Left Customizer Column */}
          <div className="builder-controls">
            {/* Step 1: Makeup Style */}
            <div className="builder-step glass-card">
              <div className="step-header">
                <span className="step-num">01</span>
                <div>
                  <h3 className="step-title">Select Primary D-Day Makeup Style</h3>
                  <span className="step-sub">High Definition HD vs Ultra Airbrush</span>
                </div>
              </div>

              <div className="makeup-options-grid">
                {makeupOptions.map((opt) => (
                  <div
                    key={opt.id}
                    className={`option-card ${selectedMakeup === opt.id ? 'active' : ''}`}
                    onClick={() => setSelectedMakeup(opt.id)}
                  >
                    <div className="option-header">
                      <h4 className="option-title">{opt.title}</h4>
                      <span className="option-price">₹{opt.price.toLocaleString('en-IN')}</span>
                    </div>
                    <p className="option-desc">{opt.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Pre-Bridal Rituals */}
            <div className="builder-step glass-card">
              <div className="step-header">
                <span className="step-num">02</span>
                <div>
                  <h3 className="step-title">Pre-Wedding Skin & Hair Rituals</h3>
                  <span className="step-sub">Select treatments for your wedding countdown</span>
                </div>
              </div>

              <div className="prebridal-options-grid">
                {preBridalOptions.map((opt) => {
                  const isChecked = selectedPreBridal.includes(opt.id);
                  return (
                    <div
                      key={opt.id}
                      className={`checkbox-option ${isChecked ? 'active' : ''}`}
                      onClick={() => togglePreBridal(opt.id)}
                    >
                      <div className="checkbox-icon">
                        {isChecked ? <CheckCircle2 size={20} color="#D4AF37" /> : <div className="empty-check"></div>}
                      </div>
                      <div className="checkbox-info">
                        <span className="checkbox-title">{opt.title}</span>
                        <span className="checkbox-price">+ ₹{opt.price.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Bridesmaid & Family Glam */}
            <div className="builder-step glass-card">
              <div className="step-header">
                <span className="step-num">03</span>
                <div>
                  <h3 className="step-title">Mother & Bridesmaid Party Glam</h3>
                  <span className="step-sub">Include party makeup & saree draping for guests</span>
                </div>
              </div>

              <div className="guest-counter-row">
                <div>
                  <span className="guest-label">Number of Family / Bridesmaid Makeovers</span>
                  <span className="guest-sub">₹3,500 per additional person</span>
                </div>

                <div className="counter-controls">
                  <button
                    onClick={() => setGuestCount(Math.max(0, guestCount - 1))}
                    className="counter-btn"
                  >
                    -
                  </button>
                  <span className="counter-val">{guestCount}</span>
                  <button
                    onClick={() => setGuestCount(guestCount + 1)}
                    className="counter-btn"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Summary Column */}
          <div className="builder-summary-col">
            <div className="summary-card glass-panel">
              <div className="summary-header">
                <Crown size={28} color="#D4AF37" />
                <h3>Your Royal Package Breakdown</h3>
              </div>

              <div className="summary-line-items">
                <div className="summary-line">
                  <span>{makeupObj?.title}</span>
                  <span className="gold-text">₹{makeupObj?.price.toLocaleString('en-IN')}</span>
                </div>

                {selectedPreBridal.map((pId) => {
                  const pItem = preBridalOptions.find((p) => p.id === pId);
                  return (
                    <div key={pId} className="summary-line sub-line">
                      <span>+ {pItem?.title}</span>
                      <span>₹{pItem?.price.toLocaleString('en-IN')}</span>
                    </div>
                  );
                })}

                {guestCount > 0 && (
                  <div className="summary-line sub-line">
                    <span>+ {guestCount} Bridesmaid Makeovers</span>
                    <span>₹{guestsTotal.toLocaleString('en-IN')}</span>
                  </div>
                )}
              </div>

              <div className="summary-total-box">
                <span className="total-label">Estimated Royal Bridal Package</span>
                <span className="total-val">₹{packageTotal.toLocaleString('en-IN')}</span>
              </div>

              {/* Complimentary Perks Box */}
              <div className="perks-box">
                <div className="perks-title">
                  <Gift size={16} color="#E5A9B4" />
                  <span>Complimentary Bridal Perks Included:</span>
                </div>
                <ul className="perks-list">
                  {perksUnlocked.map((perk, i) => (
                    <li key={i}>
                      <Sparkles size={13} color="#D4AF37" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button onClick={onOpenBooking} className="btn-primary w-full summary-book-btn">
                <Calendar size={18} />
                <span>Reserve Bridal Dates Now</span>
              </button>

              <span className="summary-footer-text">
                *Includes free consultation with lead artist at our Vadodara studio.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
