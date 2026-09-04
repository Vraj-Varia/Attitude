import React from 'react';
import { Calendar, MessageSquare, Phone } from 'lucide-react';
import './FloatingActions.css';

export default function FloatingActions({ onOpenBooking }) {
  return (
    <div className="floating-quick-bar">
      <a
        href="https://wa.me/919316022497?text=Hello%20Attitude%20Beauty%20Salon!%20I%20would%20like%20to%20inquire%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="quick-act-btn act-whatsapp"
        title="Chat on WhatsApp"
      >
        <MessageSquare size={18} />
        <span className="btn-lbl">WhatsApp</span>
      </a>

      <a
        href="tel:+919316022497"
        className="quick-act-btn act-phone"
        title="Call Salon"
      >
        <Phone size={18} />
        <span className="btn-lbl">Call Us</span>
      </a>

      <button
        onClick={onOpenBooking}
        className="quick-act-btn act-book"
        title="Book Appointment"
      >
        <Calendar size={18} />
        <span className="btn-lbl">Book Now</span>
      </button>
    </div>
  );
}
