import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceMenu from './components/ServiceMenu';
import BridalCustomizer from './components/BridalCustomizer';
import TransformationSlider from './components/TransformationSlider';
import BeautyQuiz from './components/BeautyQuiz';
import SalonGallery from './components/SalonGallery';
import Testimonials from './components/Testimonials';
import InstagramFeed from './components/InstagramFeed';
import LocationHours from './components/LocationHours';
import BookingModal from './components/BookingModal';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="app-container">
      {/* Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        
        <ServiceMenu 
          onOpenBooking={handleOpenBooking} 
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
        />
        
        <BridalCustomizer onOpenBooking={handleOpenBooking} />
        
        <TransformationSlider />
        
        <BeautyQuiz onOpenBooking={handleOpenBooking} />
        
        <SalonGallery />
        
        <Testimonials />
        
        <InstagramFeed />
        
        <LocationHours onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Quick Action Pill */}
      <FloatingActions onOpenBooking={handleOpenBooking} />

      {/* Glassmorphic Interactive Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={handleCloseBooking}
        preselectedServices={selectedServices}
      />
    </div>
  );
}
