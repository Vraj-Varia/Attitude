import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle, Sparkles, Send, MessageSquare } from 'lucide-react';
import './BookingModal.css';

export default function BookingModal({ isOpen, onClose, preselectedServices = [] }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: preselectedServices.length > 0 ? preselectedServices.map(s => s.name).join(', ') : 'Royal HD Bridal Makeup',
    date: new Date().toISOString().split('T')[0],
    timeSlot: '11:30 AM',
    notes: ''
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  if (!isOpen) return null;

  const timeSlots = [
    '10:00 AM', '11:30 AM', '01:00 PM', 
    '02:30 PM', '04:00 PM', '05:30 PM', '07:00 PM'
  ];

  const serviceOptions = [
    'Royal HD Bridal Makeover & Styling (₹15,000)',
    'Airbrush Royal Luxury Bridal Package (₹22,000)',
    'Engagement & Sagan Glam Makeover (₹8,500)',
    'Keratin Smoothing & Repair Therapy (₹5,500)',
    'Botoplex Collagen Hair Transformation (₹6,500)',
    'HydraFacial 7-in-1 Skin Glow (₹3,800)',
    '24K Gold Foil Luxury Facial (₹4,500)',
    'Luxury Gel Extensions + Nail Art (₹2,800)',
    'Celebrity Party Soft Glam (₹4,000)'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Attitude Beauty Salon! 👋\n` +
    `I would like to book an appointment:\n\n` +
    `👤 *Name*: ${formData.name}\n` +
    `📞 *Phone*: ${formData.phone}\n` +
    `💅 *Service*: ${formData.serviceType}\n` +
    `📅 *Date*: ${formData.date}\n` +
    `⏰ *Preferred Time*: ${formData.timeSlot}\n` +
    (formData.notes ? `📝 *Notes*: ${formData.notes}\n` : '') +
    `\nPlease confirm slot availability. Thank you!`
  );

  const resetModal = () => {
    setBookingConfirmed(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={resetModal}>
      <div className="booking-modal-card glass-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={resetModal}>
          <X size={22} />
        </button>

        {!bookingConfirmed ? (
          <>
            <div className="modal-header">
              <div className="badge-gold">
                <Sparkles size={13} />
                <span>ONLINE APPOINTMENT DESK</span>
              </div>
              <h3 className="modal-title">Book Your Royal Experience</h3>
              <p className="modal-sub">Fast 1-minute reservation for Attitude Beauty Salon, Vadodara</p>
            </div>

            <form onSubmit={handleSubmit} className="booking-form">
              {/* Service Selection */}
              <div className="form-group">
                <label className="form-label">Select Primary Service</label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="form-input"
                  required
                >
                  {serviceOptions.map((opt, i) => (
                    <option key={i} value={opt} className="opt-dark">{opt}</option>
                  ))}
                </select>
              </div>

              {/* Date & Time Slot Grid */}
              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">
                    <Calendar size={14} /> Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Clock size={14} /> Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="form-input"
                    required
                  >
                    {timeSlots.map((slot, i) => (
                      <option key={i} value={slot} className="opt-dark">{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Contact Details */}
              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">
                    <User size={14} /> Your Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Pooja Patel"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Phone size={14} /> Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              {/* Notes */}
              <div className="form-group">
                <label className="form-label">Special Requests / Bridal Wedding Date</label>
                <textarea
                  placeholder="Tell us if this is for your wedding, hair length, or specific time preference..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="form-input textarea-input"
                  rows={2}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full submit-booking-btn">
                <span>Confirm Appointment Details</span>
                <Send size={16} />
              </button>
            </form>
          </>
        ) : (
          <div className="confirmation-screen">
            <div className="confirm-icon-wrap">
              <CheckCircle size={44} color="#D4AF37" />
            </div>

            <h3 className="confirm-title">Reservation Request Sent!</h3>
            <p className="confirm-desc">
              Thank you, <strong>{formData.name}</strong>! We have logged your request for <strong>{formData.serviceType}</strong> on <strong>{formData.date}</strong> at <strong>{formData.timeSlot}</strong>.
            </p>

            <div className="confirm-pass-box glass-card">
              <div className="pass-row">
                <span>Location:</span>
                <strong>Kanha City, Ajwa Road, Vadodara</strong>
              </div>
              <div className="pass-row">
                <span>Salon Phone:</span>
                <strong>+91 93160 22497</strong>
              </div>
            </div>

            <div className="confirm-actions">
              <a
                href={`https://wa.me/919316022497?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full whatsapp-confirm-btn"
              >
                <MessageSquare size={18} />
                <span>Instant Confirmation via WhatsApp</span>
              </a>

              <button onClick={resetModal} className="btn-secondary w-full">
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
