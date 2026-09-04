import React from 'react';
import { Heart, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import './InstagramFeed.css';

export default function InstagramFeed() {
  const instaPosts = [
    {
      id: 1,
      image: '/assets/hero_bridal.png',
      likes: '1.4k',
      comments: '88',
      caption: 'Royal D-Day Bride Priyanka glowing in our signature Airbrush Bridal Makeup! ✨ Ring us for 2026 dates booking. #VadodaraBride #AttitudeBeautySalon'
    },
    {
      id: 2,
      image: '/assets/hair_spa.png',
      likes: '920',
      comments: '45',
      caption: 'Silky smooth goals! Keratin smoothing therapy before & after shine. ✨ Book your hair pampering session today!'
    },
    {
      id: 3,
      image: '/assets/after_makeover.png',
      likes: '2.1k',
      comments: '112',
      caption: 'Soft glam engagement look for beautiful Riya! Clean base, gold glitter eye and defined lip contour. 💕 @attitudebeautysalon_'
    },
    {
      id: 4,
      image: '/assets/nail_art.png',
      likes: '640',
      comments: '29',
      caption: 'Gold leaf foil extensions for our bride! Precision nail art studio in Vadodara. 💅✨'
    }
  ];

  return (
    <section className="insta-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Live Social Grid</span>
          <h2 className="section-title">
            Follow Our <span className="gold-text">Instagram Journal</span>
          </h2>
          <p className="section-desc">
            Stay inspired with our daily bridal makeovers, hair trends, and client beauty reels on Instagram.
          </p>

          <a
            href="https://www.instagram.com/attitudebeautysalon_/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary insta-follow-btn"
          >
            <InstagramIcon size={18} color="#E5A9B4" />
            <span>Follow @attitudebeautysalon_</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Insta Grid */}
        <div className="insta-grid">
          {instaPosts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/attitudebeautysalon_/"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-post-card glass-card"
            >
              <img src={post.image} alt="Attitude Beauty Salon Instagram Post" className="insta-post-img" />
              <div className="insta-hover-overlay">
                <div className="insta-stats">
                  <span>
                    <Heart size={16} fill="#fff" /> {post.likes}
                  </span>
                  <span>
                    <MessageCircle size={16} fill="#fff" /> {post.comments}
                  </span>
                </div>
                <p className="insta-caption">{post.caption}</p>
                <span className="insta-handle-tag">@attitudebeautysalon_</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
