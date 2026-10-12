import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maya',
      location: 'Rishikesh',
      initial: 'M',
      text: "It explained patterns I'd repeated my whole life. Reading my Ketu story was profound."
    },
    {
      name: 'Arjun',
      location: 'Varanasi',
      initial: 'A',
      text: "The karmic relationships section gave me so much peace about a difficult bond."
    },
    {
      name: 'Leela',
      location: 'Mysuru',
      initial: 'L',
      text: "Deep, respectful and genuinely insightful. Not what I expected — far better."
    }
  ];

  return (
    <div className="relative w-full pt-4 md:pt-8 pb-4 md:pb-6 bg-[#FAF8F2] overflow-hidden">

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-gradient-to-b from-[#C04921]/[0.03] to-transparent rounded-full blur-[80px] pointer-events-none"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8">

        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.2em] text-[#C04921] uppercase mb-4">
            <span className="text-[#C04921] text-xs">✦</span>
            Real Stories
          </div>
          <h2 className="text-4xl md:text-5xl text-[#1a1a1a] font-bold font-serif leading-tight">
            Loved by Seekers <span className="text-[#C04921] italic">Like You</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 md:p-10 border border-[#C04921]/10 flex flex-col justify-between shadow-lg shadow-[#C04921]/[0.03] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C04921]/[0.08] relative overflow-hidden"
            >
              {/* Decorative Quote Mark */}
              <div className="absolute top-4 right-6 text-9xl text-[#FAF8F2] font-serif leading-none select-none pointer-events-none group-hover:text-[#C04921]/5 transition-colors duration-300">
                "
              </div>

              <div className="relative z-10">
                {/* 5 Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#f5a623]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#333333] text-lg font-serif italic leading-relaxed mb-10">
                  "{item.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C04921]/20 to-[#C04921]/5 text-[#C04921] flex items-center justify-center font-bold text-lg ring-2 ring-white shadow-sm">
                  {item.initial}
                </div>
                <div>
                  <div className="text-[#1a1a1a] font-bold text-base">
                    {item.name}
                  </div>
                  <div className="text-gray-500 text-sm font-medium mt-0.5 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-[#C04921]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    {item.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Testimonials;
