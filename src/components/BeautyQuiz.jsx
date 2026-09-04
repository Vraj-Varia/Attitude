import React, { useState } from 'react';
import { HelpCircle, Sparkles, Check, ArrowRight, RotateCcw, Calendar } from 'lucide-react';
import './BeautyQuiz.css';

export default function BeautyQuiz({ onOpenBooking }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({
    goal: '',
    concern: '',
    time: ''
  });

  const step1Options = [
    { id: 'bridal', title: 'Royal Wedding / Engagement Makeover', desc: 'Flawless HD/Airbrush makeup for your big day.' },
    { id: 'hair', title: 'Silky Smooth Hair Transformation', desc: 'Frizz repair, Keratin smoothing & Botoplex.' },
    { id: 'skin', title: 'Glass Skin Glow & Facial Ritual', desc: 'HydraFacial, Gold facial & deep nourishment.' },
    { id: 'party', title: 'Glam Party / Reception Look', desc: 'Soft glam makeup & designer saree draping.' }
  ];

  const step2Options = [
    { id: 'dullness', title: 'Dullness & Skin Hyperpigmentation', desc: 'Needs instant brightness & cellular glow.' },
    { id: 'frizz', title: 'Frizzy, Dry or Damaged Hair', desc: 'Needs intense protein hydration & shine.' },
    { id: 'wedding_prep', title: 'Complete Bridal Head-to-Toe Prep', desc: 'Requires multi-day pampering & bridal package.' },
    { id: 'quick_touch', title: 'Special Event & Party Attendance', desc: 'Quick polish for tonight’s function.' }
  ];

  const step3Options = [
    { id: 'express', title: 'Express (1 Hour Quick Session)', desc: 'Fast, high-impact results.' },
    { id: 'standard', title: 'Luxury Session (2–3 Hours)', desc: 'Thorough pampering & hair/skin care.' },
    { id: 'multiday', title: 'Bridal Package (Full Day / Multi-Day)', desc: 'Unhurried royal experience.' }
  ];

  const handleSelectGoal = (val) => {
    setAnswers({ ...answers, goal: val });
    setCurrentStep(2);
  };

  const handleSelectConcern = (val) => {
    setAnswers({ ...answers, concern: val });
    setCurrentStep(3);
  };

  const handleSelectTime = (val) => {
    setAnswers({ ...answers, time: val });
    setCurrentStep(4); // Result step
  };

  const resetQuiz = () => {
    setAnswers({ goal: '', concern: '', time: '' });
    setCurrentStep(1);
  };

  // Recommendation engine logic
  const getRecommendation = () => {
    if (answers.goal === 'bridal' || answers.concern === 'wedding_prep' || answers.time === 'multiday') {
      return {
        title: 'Bespoke Royal HD Bridal Package',
        subtitle: 'Perfect match for your wedding goals',
        services: [
          'High Definition / Airbrush Bridal Makeup',
          '24K Gold Radiance Facial',
          'Moroccan Argan Hair Spa & Styling',
          'Designer Saree & Dupatta Draping'
        ],
        duration: '3.5 - 4 Hours',
        estimatedPrice: '₹15,000 - ₹22,000'
      };
    } else if (answers.goal === 'hair' || answers.concern === 'frizz') {
      return {
        title: 'Keratin Smooth & Gloss Therapy',
        subtitle: 'Custom hair couture treatment',
        services: [
          'Deep Keratin Protein Rebuilding Therapy',
          'Scalp Steam & Argan Polish',
          'Olaplex Bond Protection',
          'Precision Hair Trim & Blowdry Styling'
        ],
        duration: '3 Hours',
        estimatedPrice: '₹5,500'
      };
    } else if (answers.goal === 'skin' || answers.concern === 'dullness') {
      return {
        title: '7-in-1 HydraFacial & Gold Radiance Ritual',
        subtitle: 'Instant glass skin luminosity',
        services: [
          'Hydro-dermabrasion & Pore Extraction',
          'Hyaluronic Acid Serum Infusion',
          'LED Light Rejuvenation Therapy',
          'Gold Glow Face & Neck Mask'
        ],
        duration: '75 Minutes',
        estimatedPrice: '₹3,800'
      };
    } else {
      return {
        title: 'Celebrity Party Soft Glam & Hair Updo',
        subtitle: 'Quick high-fashion glam',
        services: [
          'Luminous Base & Smokey Eye Makeup',
          'Hollywood Curls or Chic Hair Updo',
          'Precision Saree Draping',
          'Gel Nail Polish Coat'
        ],
        duration: '90 Minutes',
        estimatedPrice: '₹4,000'
      };
    }
  };

  const rec = getRecommendation();

  return (
    <section className="quiz-section" id="quiz">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Personalized Beauty Diagnostic</span>
          <h2 className="section-title">
            Smart Beauty <span className="gold-text">Consultation Quiz</span>
          </h2>
          <p className="section-desc">
            Not sure which service suits your occasion best? Answer 3 quick questions to receive a tailored recommendation from our master stylists.
          </p>
        </div>

        <div className="quiz-card-wrapper glass-panel">
          {/* Progress Bar */}
          <div className="quiz-progress-bar">
            <div
              className="quiz-progress-fill"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>

          {currentStep === 1 && (
            <div className="quiz-step">
              <div className="step-badge">QUESTION 01 OF 03</div>
              <h3 className="quiz-question">What is your primary beauty goal today?</h3>

              <div className="quiz-options-grid">
                {step1Options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectGoal(opt.id)}
                    className="quiz-option-btn glass-card"
                  >
                    <span className="quiz-opt-title">{opt.title}</span>
                    <span className="quiz-opt-desc">{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="quiz-step">
              <div className="step-badge">QUESTION 02 OF 03</div>
              <h3 className="quiz-question">What is your main skin or hair concern?</h3>

              <div className="quiz-options-grid">
                {step2Options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectConcern(opt.id)}
                    className="quiz-option-btn glass-card"
                  >
                    <span className="quiz-opt-title">{opt.title}</span>
                    <span className="quiz-opt-desc">{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="quiz-step">
              <div className="step-badge">QUESTION 03 OF 03</div>
              <h3 className="quiz-question">How much time do you have available?</h3>

              <div className="quiz-options-grid">
                {step3Options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectTime(opt.id)}
                    className="quiz-option-btn glass-card"
                  >
                    <span className="quiz-opt-title">{opt.title}</span>
                    <span className="quiz-opt-desc">{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="quiz-result-step">
              <div className="badge-gold">
                <Sparkles size={14} />
                <span>YOUR TAILORED RECOMMENDATION</span>
              </div>

              <h3 className="result-title">{rec.title}</h3>
              <p className="result-sub">{rec.subtitle}</p>

              <div className="result-details-box glass-card">
                <div className="result-meta-row">
                  <div>
                    <span className="meta-lbl">Duration</span>
                    <span className="meta-val">{rec.duration}</span>
                  </div>
                  <div className="meta-vdivider"></div>
                  <div>
                    <span className="meta-lbl">Estimated Investment</span>
                    <span className="meta-val gold-text">{rec.estimatedPrice}</span>
                  </div>
                </div>

                <div className="result-services-list">
                  <span className="services-list-title">Recommended Service Inclusions:</span>
                  {rec.services.map((srv, idx) => (
                    <div key={idx} className="result-service-item">
                      <Check size={16} color="#D4AF37" />
                      <span>{srv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="result-actions-row">
                <button onClick={resetQuiz} className="btn-secondary">
                  <RotateCcw size={16} /> Retake Quiz
                </button>
                <button onClick={onOpenBooking} className="btn-primary">
                  <Calendar size={18} /> Book Recommended Package
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
