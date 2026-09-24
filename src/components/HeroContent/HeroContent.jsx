import React from 'react';

const CheckIcon = ({ delay }) => (
  <svg
    className="w-5 h-5 text-gold animate-pulse-glow shrink-0"
    style={{ animationDelay: delay }}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

const HeroContent = () => {
  return (
    <div className="flex flex-col gap-6 animate-fade-in-up">
      <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-gold uppercase">
        <span className="w-2 h-2 bg-gold rounded-full inline-block"></span>
        PAST LIFE & KARMA
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] text-off-white m-0">
        What karma did <span className="text-gold italic animate-pulse-glow inline-block">you</span> carry into this life?
      </h1>

      <p className="text-lg text-light-purple max-w-[90%]">
        Your Ketu, 12th house and the Rahu-Ketu axis reveal where your soul has been. Discover your past-life pattern — free, in seconds.
      </p>

      <div className="flex flex-wrap gap-y-4 gap-x-8 mt-4 mb-8">
        <div className="flex items-center gap-2 text-[0.95rem] font-medium text-off-white">
          <CheckIcon delay="0s" />
          Ketu & 12th house
        </div>
        <div className="flex items-center gap-2 text-[0.95rem] font-medium text-off-white">
          <CheckIcon delay="1s" />
          Your past-life theme
        </div>
        <div className="flex items-center gap-2 text-[0.95rem] font-medium text-off-white">
          <CheckIcon delay="2s" />
          Free, instant result
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8 border-t border-light-purple/20 pt-6 mt-4">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-light-purple uppercase tracking-wider">READS</span>
          <span className="font-serif text-lg font-semibold text-off-white">Ketu + 12th</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-light-purple uppercase tracking-wider">REVEALS</span>
          <span className="font-serif text-lg font-semibold text-off-white">Past-life theme</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-light-purple uppercase tracking-wider">SHOWS</span>
          <span className="font-serif text-lg font-semibold text-off-white">Soul's direction</span>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
