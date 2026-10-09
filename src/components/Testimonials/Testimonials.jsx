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
    <div className="w-full py-16 md:py-24 bg-[#FAF8F2]">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8">

        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-[40px] text-[#1a1a1a] font-bold font-serif mb-4 leading-tight">
            Loved by Seekers Like You
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-[20px] p-6 md:p-8 border border-gray-100 flex flex-col justify-between shadow-sm transition-transform hover:-translate-y-1"
            >
              <div>
                <div className="text-[#f5a623] text-lg tracking-widest mb-4">
                  ★★★★★
                </div>
                <p className="text-[#1a1a1a] text-[15px] leading-relaxed mb-8">
                  "{item.text}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C04921]/10 text-[#C04921] flex items-center justify-center font-bold text-sm">
                  {item.initial}
                </div>
                <div>
                  <div className="text-[#1a1a1a] font-bold text-sm">
                    {item.name}
                  </div>
                  <div className="text-gray-500 text-xs mt-0.5">
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
