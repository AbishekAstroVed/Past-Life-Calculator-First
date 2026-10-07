import React, { useState } from 'react';

const FAQItem = ({ question, answer, icon, isFirst, isLast }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`transition-colors duration-300 ${isOpen ? 'bg-[#f8f9ff] rounded-2xl p-3 md:p-4 mb-2 border border-[#e5e7ff]' : `py-3 md:py-4 px-3 md:px-4 ${!isLast && !isOpen ? 'border-b border-gray-100' : ''}`}`}>
      <button
        className="w-full flex items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-10 h-10 rounded-full bg-[#eef0ff] text-[#6868f9] flex items-center justify-center flex-shrink-0 shadow-[0_2px_10px_rgba(104,104,249,0.1)]">
            {icon}
          </div>
          <span className="font-bold text-dark-navy text-sm md:text-base">{question}</span>
        </div>
        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[#6868f9] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-3 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600 text-xs md:text-sm leading-relaxed pl-14 pr-6">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Is the past-life calculator really free?",
      answer: "Yes, the past-life calculator is completely free to use. You can access your results instantly without any charges or sign-up.",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 22C12 22 7 19.5 5 15.5C3 11.5 5.5 8 5.5 8C5.5 8 4.5 12 6.5 15C8.5 18 12 20 12 20C12 20 15.5 18 17.5 15C19.5 12 18.5 8 18.5 8C18.5 8 21 11.5 19 15.5C17 19.5 12 22 12 22Z" opacity="0.6" />
          <path d="M12 20.5C12 20.5 8 17 6.5 13C5 9 8 5 8 5C8 5 6.5 9.5 9 13C11 16 12 18 12 18C12 18 13 16 15 13C17.5 9.5 16 5 16 5C16 5 19 9 17.5 13C16 17 12 20.5 12 20.5Z" />
        </svg>
      )
    },
    {
      question: "How does Vedic astrology read past lives?",
      answer: "Through Ketu (the south node), the 12th house, Atmakaraka and the Rahu-Ketu axis — the classical karmic significators.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4L8 8m4-4l4 4M12 20l-4-4m4 4l4-4" opacity="0.5" />
        </svg>
      )
    },
    {
      question: "What is the Rahu-Ketu axis?",
      answer: "It's the line from what your soul mastered (Ketu) to what it's here to grow into (Rahu) — your karmic direction.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )
    }
  ];

  return (
    <div className="pt-10 pb-20 md:pt-14 md:pb-28 w-full bg-[#fbfbf8] relative overflow-hidden">

      {/* Decorative Moon Background Graphic */}
      <div className="absolute top-10 right-10 w-32 h-32 opacity-20 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="#6868f9" strokeWidth="1">
          <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
          <path d="M60 30 A20 20 0 1 0 60 70 A30 30 0 0 1 60 30" fill="#6868f9" />
          <line x1="50" y1="0" x2="50" y2="100" strokeOpacity="0.2" />
          <line x1="0" y1="50" x2="100" y2="50" strokeOpacity="0.2" />
          <circle cx="50" cy="5" r="2" fill="#6868f9" />
        </svg>
      </div>

      <div className="max-w-[850px] mx-auto px-6 md:px-8 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-16 h-[1px] bg-[#6868f9]/30"></div>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#8e95b3] uppercase">
              Past Life Calculator
            </span>
            <div className="w-16 h-[1px] bg-[#6868f9]/30"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-navy mb-4">
            Past Life Calculator — <span className="text-[#6868f9]">FAQs</span>
          </h2>

          <p className="text-gray-500 text-sm md:text-base">
            Quick answers to common questions about the past life calculator.
          </p>
        </div>

        {/* FAQ Container */}
        <div className="bg-white border border-gray-100 rounded-3xl p-3 md:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              icon={faq.icon}
              isFirst={index === 0}
              isLast={index === faqs.length - 1}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default FAQ;
