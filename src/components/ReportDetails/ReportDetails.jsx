import React from 'react';

const ReportDetails = () => {
  const items = [
    { 
      num: '01', 
      title: 'Your Past-Life Story', 
      desc: 'The life and role your soul carried before this one.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 21h12"></path>
        </svg>
      )
    },
    { 
      num: '02', 
      title: <>Karmic Debts <span className="font-sans">&</span> Patterns</>, 
      desc: 'What you came to resolve, and why patterns repeat.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    { 
      num: '03', 
      title: 'Relationships Carried Over', 
      desc: 'The souls and bonds that travelled with you.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 9h4m-2-2v4"></path>
        </svg>
      )
    },
    { 
      num: '04', 
      title: "Your Soul's Purpose Now", 
      desc: 'Where the Rahu-Ketu axis points your growth this life.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
        </svg>
      )
    },
    { 
      num: '05', 
      title: <>Karmic Blocks <span className="font-sans">&</span> Releases</>, 
      desc: 'What holds you back, and how the karma clears.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12a4 4 0 108 0 4 4 0 10-8 0 M12 8v8 M8 12h8"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21a9 9 0 119-9"></path>
        </svg>
      )
    },
    { 
      num: '06', 
      title: 'Remedies to Clear Karma', 
      desc: 'Practical upayas and mantras for liberation.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="w-full relative z-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {items.map((item, index) => (
          <div key={index} className="group relative bg-white rounded-2xl p-6 md:p-8 border border-black/5 hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 shadow-[0_5px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_30px_rgba(192,73,33,0.08)] overflow-hidden cursor-default flex items-center min-h-[140px]">
            {/* Hover revealing side accent line */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#C04921] transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out"></div>

            <div className="flex gap-6 relative z-10 items-center w-full">
              <div className="w-16 h-16 shrink-0 rounded-full bg-[#C04921]/10 flex items-center justify-center text-[#C04921] group-hover:bg-[#C04921] group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-[#C04921] font-bold text-lg leading-none mb-1">{item.num}</span>
                <h4 className="text-dark-navy font-bold font-serif text-xl mb-2 group-hover:text-[#C04921] transition-colors">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-800 transition-colors">{item.desc}</p>
              </div>
            </div>

            {/* Subtle background glow on hover */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#C04921]/5 rounded-full blur-[30px] group-hover:bg-[#C04921]/10 transition-colors duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportDetails;
