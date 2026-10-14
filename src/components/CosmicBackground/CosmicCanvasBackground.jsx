import React from 'react';

const CosmicCanvasBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Deep Celestial Multi-Tone Gradient Base */}
      <div className="absolute inset-0 bg-[#ECE5D9] bg-celestial-canvas"></div>

      {/* 2. Sacred Constellation Grid Lines (Clean Subtle Texture) */}
      <div
        className="absolute inset-0 celestial-grid-overlay opacity-60"
        style={{
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 30%, black 25%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 30%, black 25%, transparent 85%)'
        }}
      ></div>

      {/* 3. Ambient Smooth Breathing Prana Light Waves (No Sparks, Pure Soft Glow) */}
      <div className="absolute -top-[10%] -left-[10%] w-[65vw] max-w-[700px] h-[65vw] max-h-[700px] rounded-full bg-gradient-to-br from-[#D97706]/15 via-[#C04921]/12 to-transparent blur-[120px] animate-pulse-slow"></div>
      <div className="absolute top-[25%] -right-[15%] w-[60vw] max-w-[750px] h-[60vw] max-h-[750px] rounded-full bg-gradient-to-bl from-[#C04921]/18 via-[#F59E0B]/14 to-transparent blur-[130px] animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-[60%] -left-[15%] w-[60vw] max-w-[700px] h-[60vw] max-h-[700px] rounded-full bg-gradient-to-tr from-[#F59E0B]/14 via-[#C04921]/10 to-transparent blur-[140px] animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute -bottom-[10%] right-[10%] w-[65vw] max-w-[800px] h-[65vw] max-h-[800px] rounded-full bg-gradient-to-tl from-[#C04921]/15 via-[#D97706]/12 to-transparent blur-[130px] animate-pulse-slow"></div>

      {/* 4. Giant Rotating Sacred Sri Yantra Watermark across Page */}
      <svg
        className="absolute top-[2%] right-[-5%] w-[600px] sm:w-[750px] lg:w-[900px] h-[600px] sm:h-[750px] lg:h-[900px] opacity-[0.055] text-[#C04921] animate-spin"
        style={{ animationDuration: '240s' }}
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.35"
      >
        <circle cx="50" cy="50" r="48" strokeDasharray="1.5 1.5" />
        <circle cx="50" cy="50" r="43" />
        <circle cx="50" cy="50" r="37" strokeDasharray="3 3" />
        <polygon points="50,6 88,72 12,72" />
        <polygon points="50,94 88,28 12,28" />
        <polygon points="6,50 72,88 72,12" />
        <polygon points="94,50 28,88 28,12" />
        <polygon points="50,15 80,68 20,68" />
        <polygon points="50,85 80,32 20,32" />
        <circle cx="50" cy="50" r="26" />
        <circle cx="50" cy="50" r="16" strokeDasharray="1 1" />
        <circle cx="50" cy="50" r="7" />
      </svg>

      {/* Second Faint Sacred Mandala near bottom */}
      <svg
        className="absolute top-[65%] left-[-10%] w-[500px] lg:w-[700px] h-[500px] lg:h-[700px] opacity-[0.045] text-[#D97706] animate-spin-reverse"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.35"
      >
        <circle cx="50" cy="50" r="48" />
        <circle cx="50" cy="50" r="38" strokeDasharray="2 2" />
        <polygon points="50,10 85,70 15,70" />
        <polygon points="50,90 85,30 15,30" />
        <circle cx="50" cy="50" r="24" />
        <circle cx="50" cy="12" />
      </svg>
    </div>
  );
};

export default CosmicCanvasBackground;
