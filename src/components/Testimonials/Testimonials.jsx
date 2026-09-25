import React from 'react';

const TestimonialCard = ({ quote, name, location, initial }) => (
  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg flex flex-col justify-between transition-transform hover:-translate-y-1">
    <div>
      <div className="text-gold text-sm mb-4">★★★★★</div>
      <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">"{quote}"</p>
    </div>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gold/20 text-gold flex items-center justify-center font-bold text-sm border border-gold/30">
        {initial}
      </div>
      <div>
        <div className="text-white font-bold text-sm">{name}</div>
        <div className="text-gray-500 text-xs">{location}</div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "It explained patterns I'd repeated my whole life. Reading my Ketu story was profound.",
      name: "Maya",
      location: "Rishikesh",
      initial: "M"
    },
    {
      quote: "The karmic relationships section gave me so much peace about a difficult bond.",
      name: "Arjun",
      location: "Varanasi",
      initial: "A"
    },
    {
      quote: "Deep, respectful and genuinely insightful. Not what I expected — far better.",
      name: "Leela",
      location: "Mysuru",
      initial: "L"
    }
  ];

  return (
    <div className="pt-8 pb-16 md:pt-10 md:pb-24 w-full">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-white mb-10">Loved by Seekers Like You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
