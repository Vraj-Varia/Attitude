import React from 'react';
import { MapPin, Phone, Clock, MessageSquare, Navigation, Calendar, ShieldCheck, Mail } from 'lucide-react';
import './LocationHours.css';

export default function LocationHours({ onOpenBooking }) {
  const currentDayIndex = new Date().getDay(); // 0 = Sun, 1 = Mon ...
  const days = [
    { name: 'Monday', time: '10:00 AM – 8:00 PM', dayNum: 1 },
    { name: 'Tuesday', time: '10:00 AM – 8:00 PM', dayNum: 2 },
    { name: 'Wednesday', time: '10:00 AM – 8:00 PM', dayNum: 3 },
    { name: 'Thursday', time: '10:00 AM – 8:00 PM', dayNum: 4 },
    { name: 'Friday', time: '10:00 AM – 8:00 PM', dayNum: 5 },
    { name: 'Saturday', time: '10:00 AM – 8:00 PM', dayNum: 6 },
    { name: 'Sunday', time: '10:00 AM – 8:00 PM', dayNum: 0 }
  ];

  return (
    <section className="location-section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Visit Us In Vadodara</span>
          <h2 className="section-title">
            Location & <span className="gold-text">Operating Hours</span>
          </h2>
          <p className="section-desc">
            We are conveniently located in Kanha City on Ajwa Road, Vadodara. Drop by for a consultation or book your appointment in advance.
          </p>
        </div>

        <div className="location-grid">
          {/* Left Column: Salon Contact Info Card */}
          <div className="location-card glass-panel">
            <h3 className="card-heading">Attitude Beauty Salon & Studio</h3>
            <p className="card-subhead">Vadodara’s Destination for Bridal & Beauty Excellence</p>

            <div className="info-list">
              <div className="info-row">
                <div className="info-icon-box">
                  <MapPin size={20} color="#D4AF37" />
                </div>
                <div>
                  <h4 className="info-title">Studio Address</h4>
                  <p className="info-text">
                    Ground Floor, Shop No. 7, Kanha City, Ajwa Road,<br />
                    Opposite Kailash Party Plot, Vadodara, Gujarat – 390019
                  </p>
                </div>
              </div>

              <div className="info-row">
                <div className="info-icon-box">
                  <Phone size={20} color="#D4AF37" />
                </div>
                <div>
                  <h4 className="info-title">Direct Phone & Inquiry</h4>
                  <a href="tel:+919316022497" className="info-link">
                    +91 93160 22497
                  </a>
                </div>
              </div>

              <div className="info-row">
                <div className="info-icon-box">
                  <MessageSquare size={20} color="#22c55e" />
                </div>
                <div>
                  <h4 className="info-title">WhatsApp Desk</h4>
                  <a
                    href="https://wa.me/919316022497?text=Hello%20Attitude%20Beauty%20Salon,%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="info-link whatsapp-color"
                  >
                    Chat Directly on WhatsApp (+91 93160 22497)
                  </a>
                </div>
              </div>
            </div>

            <div className="action-buttons-group">
              <button onClick={onOpenBooking} className="btn-primary">
                <Calendar size={18} /> Book Appointment
              </button>
              <a
                href="https://maps.google.com/?q=Kanha+City+Ajwa+Road+Vadodara"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Navigation size={16} /> Get Directions
              </a>
            </div>
          </div>

          {/* Right Column: Weekly Schedule & Map Preview */}
          <div className="schedule-card glass-panel">
            <div className="schedule-header">
              <Clock size={22} color="#D4AF37" />
              <h3>Weekly Working Schedule</h3>
            </div>

            <div className="schedule-matrix">
              {days.map((d) => {
                const isToday = d.dayNum === currentDayIndex;
                return (
                  <div key={d.name} className={`schedule-row ${isToday ? 'today-row' : ''}`}>
                    <div className="day-name-wrap">
                      <span className="day-name">{d.name}</span>
                      {isToday && <span className="today-badge">TODAY</span>}
                    </div>
                    <span className="day-time">{d.time}</span>
                  </div>
                );
              })}
            </div>

            <div className="hygiene-guarantee">
              <ShieldCheck size={18} color="#E6C594" />
              <span>Prior Appointment Recommended for D-Day Bridal Consultation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
