import React from 'react';

const Pricing = () => {
  return (
    <div className="w-full flex justify-center mt-10 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
      {/* Clean White Card */}
      <div className="bg-white rounded-[20px] p-8 md:p-10 text-center border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] w-full max-w-lg">
        
        {/* Pricing Header */}
        <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
          <span className="text-gray-500 line-through text-2xl font-serif">₹999</span>
          <span className="text-[#1a1a1a] font-bold text-5xl md:text-6xl font-serif">₹490</span>
          
          {/* Discount Badge */}
          <div className="bg-[#C04921] text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wide ml-2">
            51% OFF · Limited offer
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-[#C04921] text-white border-none rounded-xl px-6 py-4 text-lg font-bold cursor-pointer transition-transform hover:-translate-y-1 shadow-[0_5px_15px_rgba(192,73,33,0.2)] hover:shadow-[0_8px_25px_rgba(192,73,33,0.3)] flex items-center justify-center gap-2 whitespace-nowrap">
          <span>Get My Past Life Report</span>
          <span>→</span>
        </button>

        {/* Footer Text */}
        <p className="text-gray-500 text-sm mt-5 font-medium">
          Full report delivered as PDF
        </p>
        
      </div>
    </div>
  );
};

export default Pricing;
