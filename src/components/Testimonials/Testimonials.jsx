import React from 'react';

const QuoteIcon = () => (
  <svg className="w-8 h-8 opacity-40 mb-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const LotusGraphic = () => (
  <svg className="absolute bottom-0 right-0 w-32 h-32 text-[#a8a8ff] opacity-40 translate-x-4 translate-y-4 pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
    <path d="M50 20C45 40 25 50 10 50C25 50 40 65 50 90C60 65 75 50 90 50C75 50 55 40 50 20Z" />
    <path d="M50 40C40 50 20 55 5 60C20 65 35 75 50 90C65 75 80 65 95 60C80 55 60 50 50 40Z" opacity="0.6" />
  </svg>
);

const MoonGraphic = () => (
  <svg className="absolute bottom-2 right-2 w-28 h-28 text-[#e3bb69] pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M70 30 A30 30 0 1 0 70 90 A40 40 0 0 1 70 30" fill="rgba(227,187,105,0.2)" />
    <circle cx="85" cy="40" r="1.5" fill="#e3bb69" stroke="none" />
    <circle cx="20" cy="20" r="1" fill="#e3bb69" stroke="none" />
    <circle cx="40" cy="15" r="1.5" fill="#e3bb69" stroke="none" />
    <circle cx="80" cy="80" r="1" fill="#e3bb69" stroke="none" />
  </svg>
);

const MountainGraphic = () => (
  <svg className="absolute bottom-0 right-0 w-40 h-32 text-[#8ba2d3] opacity-50 pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
    <path d="M0 100 L25 60 L45 80 L75 40 L100 70 L100 100 Z" opacity="0.8" />
    <path d="M20 100 L45 50 L65 75 L90 45 L100 60 L100 100 Z" opacity="0.6" />
    <circle cx="85" cy="35" r="8" fill="#ffecd6" opacity="0.9" />
  </svg>
);

const Testimonials = () => {
  return (
    <div className="pt-16 pb-10 md:pt-20 md:pb-14 w-full relative overflow-hidden bg-gradient-to-b from-transparent to-[#fef8f4]/50">

      {/* Background Star Ornaments */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-[#6868f9]/5 blur-3xl"></div>
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-[#6868f9]/5 blur-3xl"></div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 text-xs md:text-sm font-semibold tracking-[0.2em] text-[#8e95b3] uppercase mb-4">
            <span>Real People</span>
            <span className="text-[#6868f9] text-[10px]">✦</span>
            <span>Real Insights</span>
            <span className="text-[#6868f9] text-[10px]">✦</span>
            <span>Real Stories</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-dark-navy mb-6">
            Loved by <span className="text-[#6868f9] italic font-medium">Seekers</span> Like You
          </h2>

          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Discover how this journey has helped others connect with their past, understand their present and embrace their future.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">

          {/* Card 1: Maya (Light Theme) */}
          <div className="relative bg-white border border-[#e5e7ff] rounded-2xl p-6 shadow-[0_10px_30px_rgba(104,104,249,0.06)] flex flex-col justify-between overflow-hidden transition-transform duration-500 hover:-translate-y-1 h-[280px]">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#8f8fff] to-[#d6d6ff]"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#8f8fff] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                    M
                  </div>
                  <div>
                    <div className="text-dark-navy font-bold text-sm">Maya</div>
                    <div className="text-gray-500 text-[10px] font-medium tracking-wider uppercase">Rishikesh</div>
                  </div>
                </div>
                <div className="text-[#e3bb69] text-sm tracking-widest">★★★★★</div>
              </div>

              <div className="text-[#8f8fff]">
                <QuoteIcon />
              </div>

              <p className="text-[#2a3052] font-serif text-sm md:text-base leading-relaxed flex-grow">
                "It explained patterns I'd repeated my whole life. Reading my Ketu story was profound."
              </p>

              <div className="flex items-center gap-2 mt-4 text-[9px] font-bold text-[#8f8fff] uppercase tracking-widest">
                <div className="w-6 h-[1px] bg-[#8f8fff]/50"></div>
                Past Life Reading
              </div>
            </div>
            <LotusGraphic />
          </div>

          {/* Card 2: Arjun (Dark Theme) */}
          <div className="relative bg-gradient-to-br from-[#1a1e3a] to-[#2b274e] border border-[#e3bb69]/40 rounded-2xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.2)] flex flex-col justify-between overflow-hidden transition-transform duration-500 hover:-translate-y-1 h-[280px] md:-translate-y-2">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#6868f9] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                    A
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Arjun</div>
                    <div className="text-gray-400 text-[10px] font-medium tracking-wider uppercase">Varanasi</div>
                  </div>
                </div>
                <div className="text-[#e3bb69] text-sm tracking-widest">★★★★★</div>
              </div>

              <div className="text-[#e3bb69]">
                <QuoteIcon />
              </div>

              <p className="text-white font-serif text-sm md:text-base leading-relaxed flex-grow drop-shadow-sm">
                "The karmic relationships section gave me so much peace about a difficult bond."
              </p>

              <div className="flex items-center gap-2 mt-4 text-[9px] font-bold text-[#6868f9] uppercase tracking-widest">
                <div className="w-6 h-[1px] bg-[#6868f9]/50"></div>
                Karmic Insights
              </div>
            </div>
            <MoonGraphic />
          </div>

          {/* Card 3: Leela (Light Blue Theme) */}
          <div className="relative bg-gradient-to-br from-[#f2f7ff] to-[#e6f0ff] border border-[#d0e1ff] rounded-2xl p-6 shadow-[0_10px_30px_rgba(139,162,211,0.1)] flex flex-col justify-between overflow-hidden transition-transform duration-500 hover:-translate-y-1 h-[280px]">
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#8ba2d3] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                    L
                  </div>
                  <div>
                    <div className="text-dark-navy font-bold text-sm">Leela</div>
                    <div className="text-gray-500 text-[10px] font-medium tracking-wider uppercase">Mysuru</div>
                  </div>
                </div>
                <div className="text-[#e3bb69] text-sm tracking-widest">★★★★★</div>
              </div>

              <div className="text-[#8ba2d3]">
                <QuoteIcon />
              </div>

              <p className="text-[#2a3052] font-serif text-sm md:text-base leading-relaxed flex-grow">
                "Deep, respectful and genuinely insightful. Not what I expected — far better."
              </p>

              <div className="flex items-center gap-2 mt-4 text-[9px] font-bold text-[#8ba2d3] uppercase tracking-widest">
                <div className="w-6 h-[1px] bg-[#8ba2d3]/50"></div>
                Past Life Reading
              </div>
            </div>
            <MountainGraphic />
          </div>

        </div>

        {/* Carousel Dots Indicator */}
        <div className="flex justify-center items-center gap-3 mt-14">
          <div className="w-12 h-[2px] bg-gray-200"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#6868f9]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#6868f9]/30"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#6868f9]/30"></div>
          <div className="w-12 h-[2px] bg-gray-200"></div>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;
