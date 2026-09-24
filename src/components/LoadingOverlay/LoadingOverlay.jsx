import React from 'react';

const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#061311]/90 backdrop-blur-md">
      <div className="relative flex items-center justify-center mb-8">
        {/* Outer rotating ring */}
        <div className="w-24 h-24 border-t-2 border-b-2 border-gold rounded-full animate-[spin_2s_linear_infinite]"></div>
        
        {/* Inner reverse rotating ring */}
        <div className="absolute w-16 h-16 border-r-2 border-l-2 border-[#e3bb69] rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>
        
        {/* Center symbol */}
        <div className="absolute text-gold text-2xl font-serif">ॐ</div>
      </div>
      
      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-white uppercase tracking-[0.2em] mb-2 animate-pulse">
        Unveiling Karma
      </h2>
      
      <p className="text-gold/70 text-sm tracking-widest font-light animate-pulse" style={{ animationDelay: '0.5s' }}>
        Consulting the Akashic Records...
      </p>
    </div>
  );
};

export default LoadingOverlay;
