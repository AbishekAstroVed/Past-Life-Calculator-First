import React from 'react';

const ReportDetails = () => {
  const items = [
    { num: '01', title: 'Your Past-Life Story', desc: 'The life and role your soul carried before this one.' },
    { num: '02', title: 'Karmic Debts & Patterns', desc: 'What you came to resolve, and why patterns repeat.' },
    { num: '03', title: 'Relationships Carried Over', desc: 'The souls and bonds that travelled with you.' },
    { num: '04', title: "Your Soul's Purpose Now", desc: 'Where the Rahu-Ketu axis points your growth this life.' },
    { num: '05', title: 'Karmic Blocks & Releases', desc: 'What holds you back, and how the karma clears.' },
    { num: '06', title: 'Remedies to Clear Karma', desc: 'Practical upayas and mantras for liberation.' },
  ];

  return (
    <div className="w-full relative z-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      <div className="text-center lg:text-left mb-10">
        <h2 className="text-3xl md:text-5xl text-off-white font-bold font-serif mb-4 drop-shadow-lg">What's Inside Your Report</h2>
        <p className="text-light-purple text-base md:text-lg max-w-lg mx-auto lg:mx-0">A complete, personalised reading of your karmic story, broken down into 6 profound chapters.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {items.map((item, index) => (
          <div key={index} className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] overflow-hidden cursor-default flex flex-col justify-center min-h-[140px]">
            {/* Hover revealing side accent line */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-gold to-[#e3bb69] transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out"></div>
            
            <div className="flex gap-5 relative z-10 items-start">
              <div className="text-transparent bg-clip-text bg-gradient-to-b from-gold to-[#9a3412] font-bold font-serif text-3xl md:text-4xl opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-sm">{item.num}</div>
              <div>
                <h4 className="text-off-white font-bold text-lg mb-2 group-hover:text-gold transition-colors">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{item.desc}</p>
              </div>
            </div>
            
            {/* Subtle background glow on hover */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gold/5 rounded-full blur-[30px] group-hover:bg-gold/10 transition-colors duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportDetails;
