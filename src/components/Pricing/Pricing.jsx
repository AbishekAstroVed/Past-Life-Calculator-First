import React from 'react';

const Pricing = () => {
  return (
    <div className="relative group rounded-3xl overflow-hidden p-[1px] shadow-[0_20px_40px_rgba(0,0,0,0.4)] animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold via-transparent to-[#e3bb69] opacity-50 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-slow"></div>
      
      {/* Inner card */}
      <div className="relative bg-[#17152F]/90 backdrop-blur-3xl rounded-3xl p-8 md:p-10 text-center h-full flex flex-col justify-center border border-white/10">
        {/* Ambient inner glows */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/20 rounded-full blur-[40px] pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-light-purple/20 rounded-full blur-[40px] pointer-events-none"></div>

        <div className="relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-gray-500 line-through text-2xl font-serif">₹999</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#fff5d1] font-bold text-6xl font-serif drop-shadow-lg">₹490</span>
          </div>
          
          <div className="inline-flex items-center gap-2 bg-[#d95c14] text-white px-5 py-2 rounded-full text-sm font-bold tracking-wide mb-8 shadow-[0_4px_15px_rgba(217,92,20,0.4)] border border-white/10">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            51% OFF · Limited offer
          </div>
          
          <button className="w-full relative overflow-hidden bg-[#dfad32] text-[#17152F] border-none rounded-[14px] px-6 py-4 text-base md:text-lg font-bold cursor-pointer transition-all hover:scale-[1.02] active:scale-95 shadow-[0_10px_30px_rgba(223,173,50,0.3)] hover:shadow-[0_15px_40px_rgba(223,173,50,0.4)] group flex items-center">
            
            {/* Left edge glossy highlight */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-white/50 rounded-l-[14px]"></div>
            
            <div className="flex-1 flex flex-col items-center justify-center relative z-10 leading-snug">
              <span>Get My Past Life</span>
              <span>Report</span>
            </div>
            
            <svg className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
          </button>
          
          <p className="text-gray-400 text-sm mt-6 font-medium flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Full report delivered securely as PDF
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
