import React from 'react';

const HeroContent = ({ onCtaClick }) => {
  return (
    <div className="flex flex-col gap-6 animate-fade-in-up font-sans">
      <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-[#C04921] uppercase w-fit mt-4">
        <span className="text-[#C04921] text-lg leading-none mb-1">•</span>
        PAST LIFE & KARMA
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-serif font-bold leading-[1.1] text-[#1a1a1a] tracking-tight m-0">
        What karma did<br className="hidden sm:block" /> <span className="text-[#C04921]">you</span> carry into this<br className="hidden sm:block" /> life?
      </h1>

      <p className="text-base md:text-lg text-[#333333] max-w-[95%] leading-relaxed mt-2">
        Your Ketu, 12th house and the Rahu-Ketu axis reveal<br className="hidden lg:block" /> where your soul has been. Discover your past-life pattern<br className="hidden lg:block" /> — free, in seconds.
      </p>

      {/* Checkmarks */}
      <div className="flex flex-wrap items-center gap-4 text-[13px] md:text-sm text-gray-800 font-medium mt-1">
        <div className="flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-[#C04921]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
          Ketu & 12th house
        </div>
        <div className="flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-[#C04921]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
          Your past-life theme
        </div>
        <div className="flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-[#C04921]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
          Free, instant result
        </div>
      </div>

      <div className="mt-2 flex flex-col items-start">
        <button
          type="button"
          onClick={onCtaClick}
          className="bg-[#C04921] hover:bg-[#a63d1a] text-white border-none rounded-md px-6 py-3.5 text-base font-semibold cursor-pointer transition-all w-full sm:w-auto text-center inline-block"
        >
          <span className="flex items-center justify-center gap-2">
            Reveal My Past-Life Karma
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
        </button>
      </div>

      {/* Stats Section */}
      <div className="flex flex-row items-center gap-8 md:gap-12 mt-6">
        <div>
          <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold block mb-1">READS</span>
          <span className="font-mono text-sm md:text-base font-bold text-[#1a1a1a]">Ketu + 12th</span>
        </div>
        <div>
          <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold block mb-1">REVEALS</span>
          <span className="font-mono text-sm md:text-base font-bold text-[#1a1a1a]">Past-life theme</span>
        </div>
        <div>
          <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold block mb-1">SHOWS</span>
          <span className="font-mono text-sm md:text-base font-bold text-[#1a1a1a]">Soul's direction</span>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
