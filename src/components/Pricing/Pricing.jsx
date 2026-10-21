import React from 'react';

const Pricing = ({ className = '' }) => {
  return (
    <div className={`w-full flex justify-center my-4 animate-fade-in-up ${className}`}>
      {/* Clean White Compact Card */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 text-center border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] w-full max-w-[390px]">
        
        {/* Pricing Header: Strikethrough price + Current price + Discount badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 line-through text-base sm:text-lg font-serif">₹999</span>
            <span className="text-dark-navy font-bold text-3xl sm:text-[34px] font-serif leading-none">₹490</span>
          </div>
          
          {/* Discount Badge */}
          <div className="bg-[#C04921] text-white px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold tracking-tight whitespace-nowrap shadow-sm">
            51% OFF · Limited offer
          </div>
        </div>

        {/* CTA Button */}
        <button
          type="button"
          className="w-full bg-[#C04921] hover:bg-[#a63d1a] active:scale-[0.99] text-white border-none rounded-xl py-3 px-4 text-sm sm:text-[15px] font-bold cursor-pointer transition-all duration-200 shadow-sm flex items-center justify-center gap-2 group"
        >
          <span>Get My Past Life Report</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>

        {/* Footer Text */}
        <p className="text-slate-500 text-xs mt-3 font-normal text-center">
          Full report delivered as PDF
        </p>
        
      </div>
    </div>
  );
};

export default Pricing;
