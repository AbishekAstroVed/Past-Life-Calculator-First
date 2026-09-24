import React from 'react';

const Benefits = () => {
  const cards = [
    {
      icon: (
        <svg className="w-5 h-5 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      ),
      title: 'Soul insight',
      desc: 'See the past-life mastery you carry instinctively.'
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
        </svg>
      ),
      title: 'Pattern clarity',
      desc: 'Understand why certain themes keep returning.'
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
        </svg>
      ),
      title: 'Your direction',
      desc: 'Know where your soul is meant to grow this life.'
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
      title: 'Karmic remedies',
      desc: 'Simple upayas to release and heal old karma.'
    }
  ];

  return (
    <div className="w-full pb-20 mt-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl text-off-white font-bold font-serif mb-3">What You'll Walk Away With</h2>
        <p className="text-light-purple text-sm md:text-base">Understanding the deeper why behind your life.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((card, index) => (
          <div key={index} className="bg-[#1e1b38] rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.2)] border border-[#2d2852] flex flex-col items-start text-left">
            <div className="w-10 h-10 bg-[#2d2852] rounded-full mb-5 flex items-center justify-center">
              {card.icon}
            </div>
            <h4 className="text-off-white font-bold font-serif text-lg md:text-xl mb-2">{card.title}</h4>
            <p className="text-[#9ca3af] text-sm leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
