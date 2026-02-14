import { useState } from 'react';
import CockapooLogo from './CockapooLogo';

export default function StartScreen({ onStart }) {
  const [isLeaving, setIsLeaving] = useState(false);

  const handleStart = () => {
    setIsLeaving(true);
    setTimeout(onStart, 400);
  };

  return (
    <div className={`start-screen ${isLeaving ? 'leaving' : ''}`}>
      <div className="start-content">
        <div className="paw-icon"><CockapooLogo size={80} /></div>
        <h1>What Dog Breed<br />Are You?</h1>
        <p className="subtitle">
          Answer 13 personality questions to discover which dog breed
          matches your unique personality
        </p>
        <button className="start-btn" onClick={handleStart}>
          <span>Find My Breed</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
        <p className="disclaimer">No dogs were harmed in the making of this quiz</p>
      </div>
    </div>
  );
}
