import React from 'react';

const Pricing = ({ className = '' }) => {
  return (
    <div className={`w-full flex justify-center my-4 animate-fade-in-up ${className}`}>
      {/* Clean White Compact Card */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 text-center border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] w-full max-w-[390px]">

        {/* Pricing Header: Centered Price in Poppins font with equal-size symbol & numerals */}
        <div className="flex items-center justify-center mb-4">
          <span className="text-dark-navy font-bold text-3xl sm:text-[36px] font-poppins tracking-tight leading-none">
            ₹1037
          </span>
        </div>

        {/* CTA Button */}
        <a
          href="https://www.astroved.com/Customized-Reports-Karmic-Astrology-Report-Past-Life-Influence-Report--P399.aspx"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#C04921] hover:bg-[#a63d1a] active:scale-[0.99] text-white border-none rounded-xl py-3 px-4 text-sm sm:text-[15px] font-bold cursor-pointer transition-all duration-200 shadow-sm flex items-center justify-center gap-2 group no-underline"
        >
          <span>Get My Past Life Report</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>

        {/* Footer Text */}
        <p className="text-slate-500 text-xs mt-3 font-normal text-center">
          Full report delivered as PDF
        </p>

      </div>
    </div>
  );
};

export default Pricing;
