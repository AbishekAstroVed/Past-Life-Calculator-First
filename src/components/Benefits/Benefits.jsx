import React from 'react';

const Benefits = () => {
  const cards = [
    {
      num: '01',
      title: 'Soul insight',
      desc: 'See the past-life mastery you carry instinctively.',
      icon: (
        <img src="https://api.iconify.design/lucide/sun.svg?color=%23C04921" alt="Soul insight" className="w-8 h-8 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
      )
    },
    {
      num: '02',
      title: 'Pattern clarity',
      desc: 'Understand why certain themes keep returning.',
      icon: (
        <img src="https://api.iconify.design/lucide/eye.svg?color=%23C04921" alt="Pattern clarity" className="w-8 h-8 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
      )
    },
    {
      num: '03',
      title: 'Your direction',
      desc: 'Know where your soul is meant to grow this life.',
      icon: (
        <img src="https://api.iconify.design/lucide/moon.svg?color=%23C04921" alt="Your direction" className="w-8 h-8 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
      )
    },
    {
      num: '04',
      title: 'Karmic remedies',
      desc: 'Simple upayas to release and heal old karma.',
      icon: (
        <img src="https://api.iconify.design/lucide/scroll.svg?color=%23C04921" alt="Karmic remedies" className="w-8 h-8 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
      )
    }
  ];

  return (
    <div className="relative w-full pt-4 md:pt-6 pb-4 md:pb-6 bg-[#FAF8F2] overflow-hidden">

      {/* Mystical Sunburst Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-full pointer-events-none opacity-[0.05]">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C04921] rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-[1250px] mx-auto px-6 md:px-8">

        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24 relative">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.2em] text-[#C04921] uppercase mb-4">
            <span className="text-[#C04921] text-xs">✦</span>
            Your Journey
            <span className="text-[#C04921] text-xs">✦</span>
          </div>
          <h3 className="text-4xl md:text-5xl  text-[#1a1a1a] font-bold font-serif leading-tight">
            What You'll <span className="text-[#C04921] italic font-light">Walk Away With</span>
          </h3>
        </div>

        {/* Unique 'Tarot Pillar' Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-md rounded-[2rem] pt-16 pb-12 px-8 flex flex-col items-center text-center border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(192,73,33,0.12)] hover:bg-white overflow-hidden"
            >
              {/* Massive Watermark Number */}
              <div className="absolute -top-6 -right-4 text-[140px] font-serif font-bold text-[#C04921]/[0.03] select-none pointer-events-none group-hover:text-[#C04921]/[0.06] transition-colors duration-500">
                {card.num}
              </div>

              {/* Glowing Top Accent Line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-[#C04921] to-transparent transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100"></div>

              {/* Icon Container */}
              <div className="relative z-10 w-16 h-16 rounded-full bg-[#FAF8F2] flex items-center justify-center text-[#C04921] mb-8 ring-1 ring-[#C04921]/10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#C04921] group-hover:text-white shadow-sm">
                {card.icon}
              </div>

              {/* Text */}
              <h3 className="relative z-10 text-xl font-bold font-serif text-[#1a1a1a] mb-4 group-hover:text-[#C04921] transition-colors duration-300">
                {card.title}
              </h3>
              <div className="relative z-10 w-8 h-[1px] bg-[#C04921]/30 mb-4 transition-all duration-300 group-hover:w-12 group-hover:bg-[#C04921]"></div>
              <p className="relative z-10 text-[15px] text-gray-600 leading-relaxed font-medium">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Benefits;
