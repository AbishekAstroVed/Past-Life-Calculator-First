import React from 'react';

const Features = () => {
  return (
    <div className="w-full relative z-10 pt-16 md:pt-24 pb-4 md:pb-8 mt-10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-4xl md:text-5xl text-off-white font-bold font-serif mb-4 drop-shadow-md">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#e3bb69]">AstroVed</span>
          </h2>
          <p className="text-light-purple text-sm md:text-base max-w-xl mx-auto">
            Trusted by thousands for deep, respectful, hand-prepared karma readings.
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(214,168,79,0.15)] flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-500 shadow-[0_0_20px_rgba(214,168,79,0.2)] group-hover:shadow-[0_0_30px_rgba(214,168,79,0.4)]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold font-serif text-off-white mb-3">Read by real astrologers</h3>
            <p className="text-sm text-gray-400 leading-relaxed">Your report is interpreted by expert Vedic astrologers, not auto-generated text.</p>
          </div>
          
          {/* Card 2 */}
          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(214,168,79,0.15)] flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-500 shadow-[0_0_20px_rgba(214,168,79,0.2)] group-hover:shadow-[0_0_30px_rgba(214,168,79,0.4)]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold font-serif text-off-white mb-3">Classical Vedic method</h3>
            <p className="text-sm text-gray-400 leading-relaxed">Grounded in Ketu, the 12th house, Atmakaraka and the Rahu-Ketu axis.</p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(214,168,79,0.15)] flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-500 shadow-[0_0_20px_rgba(214,168,79,0.2)] group-hover:shadow-[0_0_30px_rgba(214,168,79,0.4)]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold font-serif text-off-white mb-3">Private & secure</h3>
            <p className="text-sm text-gray-400 leading-relaxed">Your birth details are used only for your reading and never shared.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Features;
