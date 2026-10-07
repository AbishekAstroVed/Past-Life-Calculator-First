import React from 'react';

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const BlobGraphic = () => (
  <svg className="absolute -bottom-6 -right-6 w-40 h-40 opacity-70 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a8a8ff" />
        <stop offset="100%" stopColor="#6868f9" stopOpacity="0.5" />
      </linearGradient>
    </defs>
    <path fill="url(#blobGrad)" d="M45,-76C58.6,-68.8,70.2,-56,79.5,-41.5C88.8,-27,95.8,-10.8,93.6,4.5C91.4,19.8,80,34.2,68.8,45.8C57.6,57.4,46.5,66.2,33.5,73.5C20.5,80.8,5.5,86.6,-8.8,85.2C-23.1,83.8,-36.8,75.2,-48.5,64.8C-60.2,54.4,-70,42.2,-77.8,28.2C-85.6,14.2,-91.4,-1.6,-87.6,-14.8C-83.8,-28,-70.4,-38.6,-57.8,-46.8C-45.2,-55,-33.4,-60.8,-21,-65.8C-8.6,-70.8,3.4,-75,18.4,-78.2C33.4,-81.4,31.4,-83.2,45,-76Z" transform="translate(100 100) scale(1.1)" />
  </svg>
);

const PlanetsGraphic = () => (
  <svg className="absolute -bottom-10 -right-10 w-48 h-48 opacity-60 pointer-events-none transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-12" viewBox="0 0 100 100" fill="none">
    <defs>
      <linearGradient id="planetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8f8fff" />
        <stop offset="100%" stopColor="#6868f9" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <circle cx="70" cy="70" r="25" fill="url(#planetGrad)" />
    <circle cx="20" cy="80" r="5" fill="#a8a8ff" opacity="0.8" />
    <path d="M 40 100 A 45 45 0 0 1 100 40" stroke="#a8a8ff" strokeWidth="0.5" strokeDasharray="2 2" />
    <path d="M 20 100 A 70 70 0 0 1 100 20" stroke="#8f8fff" strokeWidth="0.5" />
    <circle cx="85" cy="25" r="1.5" fill="#fff" opacity="0.5" />
  </svg>
);

const StairsGraphic = () => (
  <svg className="absolute bottom-0 right-0 w-32 h-32 opacity-90 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-2 group-hover:-translate-x-2" viewBox="0 0 100 100" fill="currentColor">
    <defs>
      <linearGradient id="stairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f0f2ff" />
        <stop offset="100%" stopColor="#dce1ff" />
      </linearGradient>
    </defs>
    {/* Doorway */}
    <path d="M 70 20 L 70 60 L 90 60 L 90 20 A 10 10 0 0 0 70 20 Z" fill="#6868f9" opacity="0.8" />
    <path d="M 72 22 L 72 60 L 88 60 L 88 22 A 8 8 0 0 0 72 22 Z" fill="#8f8fff" />
    <circle cx="80" cy="35" r="2" fill="#fff" />
    {/* Stairs */}
    <path d="M 70 60 L 90 60 L 90 70 L 60 70 L 60 60 Z" fill="url(#stairGrad)" />
    <path d="M 60 70 L 80 70 L 80 80 L 50 80 L 50 70 Z" fill="url(#stairGrad)" />
    <path d="M 50 80 L 70 80 L 70 90 L 40 90 L 40 80 Z" fill="url(#stairGrad)" />
    <path d="M 40 90 L 60 90 L 60 100 L 30 100 L 30 90 Z" fill="url(#stairGrad)" />
  </svg>
);

const LeafGraphic = () => (
  <svg className="absolute -bottom-2 -right-2 w-32 h-32 text-[#6868f9] opacity-30 pointer-events-none transition-transform duration-700 origin-bottom-right group-hover:scale-110 group-hover:-rotate-6" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M80 100 C 80 60 60 40 90 10" />
    <path d="M65 80 C 65 60 45 40 75 10" opacity="0.5" />
    <path d="M70 70 Q 50 60 60 40 Q 80 50 70 70" fill="currentColor" opacity="0.2" />
    <path d="M75 50 Q 55 40 65 20 Q 85 30 75 50" fill="currentColor" opacity="0.4" />
    <path d="M85 85 Q 65 75 75 55 Q 95 65 85 85" fill="currentColor" opacity="0.2" />
  </svg>
);

const Benefits = () => {
  const cards = [
    {
      theme: "light",
      bgClass: "bg-gradient-to-br from-[#f8f6ff] to-[#eae8ff] border border-[#dce1ff]",
      iconBg: "bg-[#6868f9] text-white",
      titleColor: "text-dark-navy",
      descColor: "text-gray-600",
      buttonClass: "bg-[#6868f9] text-white hover:bg-[#5252d8]",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Soul insight',
      desc: 'See the past-life mastery you carry instinctively.',
      Graphic: BlobGraphic
    },
    {
      theme: "dark",
      bgClass: "bg-gradient-to-br from-[#1a1c3d] to-[#25255c] border border-[#3b3b80]",
      iconBg: "bg-[#8f8fff] text-white",
      titleColor: "text-white",
      descColor: "text-[#b4b8d0]",
      buttonClass: "bg-[#8f8fff] text-white hover:bg-[#a8a8ff]",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: 'Pattern clarity',
      desc: 'Understand why certain themes keep returning.',
      Graphic: PlanetsGraphic
    },
    {
      theme: "white",
      bgClass: "bg-white border border-[#eae8ff]",
      iconBg: "bg-[#f0f2ff] text-[#6868f9]",
      titleColor: "text-dark-navy",
      descColor: "text-gray-600",
      buttonClass: "bg-[#6868f9] text-white hover:bg-[#5252d8]",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
      title: 'Your direction',
      desc: 'Know where your soul is meant to grow this life.',
      Graphic: StairsGraphic
    },
    {
      theme: "purple",
      bgClass: "bg-gradient-to-br from-[#f4f2ff] to-[#d6d6ff] border border-[#c4c4ff]",
      iconBg: "bg-[#6868f9] text-white",
      titleColor: "text-dark-navy",
      descColor: "text-gray-600",
      buttonClass: "bg-[#6868f9] text-white hover:bg-[#5252d8]",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Karmic remedies',
      desc: 'Simple upayas to release and heal old karma.',
      Graphic: LeafGraphic
    }
  ];

  return (
    <div className="w-full py-16 md:py-24 bg-[#fcfbff]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">

        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-8 h-[1px] bg-[#6868f9]/30"></div>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#6868f9] uppercase">
              Wellness Journey
            </span>
            <div className="w-8 h-[1px] bg-[#6868f9]/30"></div>
          </div>

          <h2 className="text-3xl md:text-5xl text-dark-navy font-bold font-serif mb-4">
            What You'll <span className="text-[#6868f9]">Walk Away</span> With
          </h2>

          <p className="text-gray-500 text-sm md:text-base">
            Understanding the deeper why behind your life.
          </p>
          <div className="w-12 h-1 bg-[#8f8fff] rounded-full mx-auto mt-6"></div>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-6 md:p-7 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-[0_10px_30px_rgba(104,104,249,0.08)] hover:shadow-[0_20px_40px_rgba(104,104,249,0.15)] group min-h-[260px] ${card.bgClass}`}
            >
              {/* Graphic Layer */}
              <card.Graphic />

              {/* Content Layer */}
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-sm transition-transform duration-500 group-hover:scale-110 ${card.iconBg}`}>
                  {card.icon}
                </div>
                <h4 className={`font-bold font-serif text-lg md:text-xl mb-2 ${card.titleColor}`}>
                  {card.title}
                </h4>
                <p className={`text-sm leading-relaxed ${card.descColor}`}>
                  {card.desc}
                </p>
              </div>

              {/* Bottom Arrow Button */}
              <div className="relative z-10 mt-8">
                <button className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1 ${card.buttonClass}`}>
                  <ArrowIcon />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Benefits;
