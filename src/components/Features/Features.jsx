import React from 'react';

const Features = () => {
  return (
    <div className="w-full relative z-10 pt-8 md:pt-12 pb-4 md:pb-8 mt-4">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-[#C04921]"></div>
            <svg className="w-6 h-6 text-[#C04921]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.5C11.5 4.5 9 7 6.5 8C9 8.5 10.5 11 12 14C13.5 11 15 8.5 17.5 8C15 7 12.5 4.5 12 2.5Z" />
              <path d="M12 21.5C9.5 21.5 5 19 4 14C5.5 15.5 8 16 11 16C10 14 9.5 12 10.5 10.5C12.5 13 14.5 15.5 19 13.5C18 17 15 21.5 12 21.5Z" opacity="0.8"/>
            </svg>
            <div className="w-12 h-[2px] bg-[#C04921]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl text-dark-navy font-bold font-serif mb-4 drop-shadow-sm">
            Why <span className="text-[#C04921]">AstroVed</span>
          </h2>
          <p className="text-gray-500 font-medium text-sm md:text-base max-w-xl mx-auto">
            Trusted by thousands for deep, respectful, hand-prepared karma readings.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="group bg-white rounded-3xl border border-black/5 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(192,73,33,0.12)] flex flex-col items-start text-left transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 rounded-2xl bg-[#C04921]/10 flex items-center justify-center text-[#C04921] mb-6 group-hover:scale-110 group-hover:bg-[#C04921] group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-md">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold font-serif text-dark-navy mb-3">Read by real astrologers</h3>
            <div className="w-10 group-hover:w-20 transition-all duration-500 h-[2px] bg-[#C04921] mb-4"></div>
            <p className="text-sm text-gray-500 font-medium leading-relaxed">Your report is interpreted by expert Vedic astrologers, not auto-generated text.</p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-3xl border border-black/5 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(192,73,33,0.12)] flex flex-col items-start text-left transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="w-16 h-16 rounded-2xl bg-[#C04921]/10 flex items-center justify-center text-[#C04921] mb-6 group-hover:scale-110 group-hover:bg-[#C04921] group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-md">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold font-serif text-dark-navy mb-3">Classical Vedic method</h3>
            <div className="w-10 group-hover:w-20 transition-all duration-500 h-[2px] bg-[#C04921] mb-4"></div>
            <p className="text-sm text-gray-500 font-medium leading-relaxed">Grounded in Ketu, the 12th house, Atmakaraka and the Rahu-Ketu axis.</p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-3xl border border-black/5 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(192,73,33,0.12)] flex flex-col items-start text-left transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="w-16 h-16 rounded-2xl bg-[#C04921]/10 flex items-center justify-center text-[#C04921] mb-6 group-hover:scale-110 group-hover:bg-[#C04921] group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-md">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold font-serif text-dark-navy mb-3">Private <span className="font-sans">&</span> secure</h3>
            <div className="w-10 group-hover:w-20 transition-all duration-500 h-[2px] bg-[#C04921] mb-4"></div>
            <p className="text-sm text-gray-500 font-medium leading-relaxed">Your birth details are used only for your reading and never shared.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Features;
