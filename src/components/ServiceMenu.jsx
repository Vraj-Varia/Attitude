import React, { useState } from 'react';
import { Clock, Plus, Check, Search, X, ShoppingBag } from 'lucide-react';
import './ServiceMenu.css';

export const SERVICES_DATA = [
  {
    id: 'hair-1',
    category: 'hair',
    title: 'Haircuts & Precision Styling',
    price: 1200,
    time: '45 mins',
    image: '/assets/hair_spa.png',
    desc: 'Expert hair styling, coloring, treatments, and personalized beauty services designed to enhance your unique look.'
  },
  {
    id: 'hair-2',
    category: 'hair',
    title: 'Balayage & Highlights',
    price: 4500,
    time: '120 mins',
    image: '/assets/salon_interior.png',
    desc: 'Expert hair styling, coloring, treatments, and personalized beauty services designed to enhance your unique look.'
  },
  {
    id: 'hair-3',
    category: 'hair',
    title: 'Keratin & Botoplex Treatment',
    price: 5500,
    time: '150 mins',
    image: '/assets/hair_spa.png',
    desc: 'Short hair styling, treatments, and personalized beauty service designed to enhance your unique look.'
  },
  {
    id: 'hair-4',
    category: 'hair',
    title: 'Luxury Argan Hair Spa',
    price: 2200,
    time: '60 mins',
    image: '/assets/salon_interior.png',
    desc: 'Expert hair styling, coloring, treatments, and personalized beauty services designed to enhance your unique look.'
  },
  {
    id: 'hair-5',
    category: 'hair',
    title: 'Blow Dry & Signature Curls',
    price: 1500,
    time: '40 mins',
    image: '/assets/after_makeover.png',
    desc: 'Expert hair styling, coloring, treatments, and personalized beauty services designed to enhance your unique look.'
  },
  {
    id: 'bridal-1',
    category: 'bridal',
    title: 'Royal HD Bridal Makeover',
    price: 15000,
    time: '240 mins',
    image: '/assets/hero_bridal.png',
    desc: 'Expert hair styling, coloring, treatments, and personalized beauty services designed to enhance your unique look.'
  }
];

export default function ServiceMenu({ onOpenBooking, selectedServices, setSelectedServices }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'hair', label: 'Hair & Styling' },
    { id: 'bridal', label: 'Bridal Makeover' }
  ];

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleSelectService = (service) => {
    const exists = selectedServices.find(s => s.id === service.id);
    if (exists) {
      setSelectedServices(selectedServices.filter(s => s.id !== service.id));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const calculateTotal = () => {
    return selectedServices.reduce((sum, item) => sum + item.price, 0);
  };

  return (
    <section className="services-section-reference" id="services">
      <div className="container">
        {/* Section Heading matching reference.jpeg */}
        <div className="section-header">
          <h2 className="section-title">Our Premium Services</h2>
          <p className="section-desc">
            Explore our curated hair styling, coloring, keratin treatments, and royal bridal makeovers.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="services-tab-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`reference-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 6 Image Cards Grid matching reference.jpeg */}
        <div className="reference-services-grid">
          {filteredServices.map((service) => {
            const isSelected = selectedServices.some(s => s.id === service.id);
            return (
              <div key={service.id} className="reference-service-card">
                <div className="card-image-wrap">
                  <img src={service.image} alt={service.title} className="card-service-img" />
                  <span className="card-price-badge">₹{service.price.toLocaleString()}</span>
                </div>

                <div className="card-content-body">
                  <h3 className="card-service-title">{service.title}</h3>
                  <p className="card-service-desc">{service.desc}</p>

                  <div className="card-action-row">
                    <span className="card-time-text">
                      <Clock size={14} /> {service.time}
                    </span>

                    <button
                      onClick={() => toggleSelectService(service)}
                      className={`card-select-btn ${isSelected ? 'selected' : ''}`}
                    >
                      {isSelected ? (
                        <>
                          <Check size={14} /> Selected
                        </>
                      ) : (
                        <>
                          <Plus size={14} /> Add Service
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Tally Drawer if services selected */}
      {selectedServices.length > 0 && (
        <div className="floating-tally-bar">
          <div className="tally-info">
            <ShoppingBag size={20} color="#C59A68" />
            <span>{selectedServices.length} Service(s) Selected • Total: <strong>₹{calculateTotal().toLocaleString()}</strong></span>
          </div>

          <button onClick={onOpenBooking} className="btn-primary">
            Proceed to Book
          </button>
        </div>
      )}
    </section>
  );
}
