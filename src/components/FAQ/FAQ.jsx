import React, { useState } from 'react';

const FAQItem = ({ question, answer, isLast }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`py-6 px-6 md:px-8 ${!isLast ? 'border-b border-gray-100' : ''}`}>
      <button
        className="w-full flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold font-serif text-[#1a1a1a] text-lg md:text-[19px]">{question}</span>
        <div className={`text-[#C04921] transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-45' : ''}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed pr-8">
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
      answer: "Yes, the past-life calculator is completely free to use. You can access your results instantly without any charges or sign-up."
    },
    {
      question: "How does Vedic astrology read past lives?",
      answer: "Through Ketu (the south node), the 12th house, Atmakaraka and the Rahu-Ketu axis — the classical karmic significators."
    },
    {
      question: "What is the Rahu-Ketu axis?",
      answer: "It's the line from what your soul mastered (Ketu) to what it's here to grow into (Rahu) — your karmic direction."
    }
  ];

  return (
    <div className="pt-16 pb-20 md:pt-24 md:pb-28 w-full bg-[#FAF8F2]">
      <div className="max-w-[900px] mx-auto px-6 md:px-8">

        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-[40px] font-serif font-bold text-[#1a1a1a]">
            Past Life Calculator — FAQs
          </h2>
        </div>

        {/* FAQ Container */}
        <div className="bg-white border border-gray-100 rounded-[20px] shadow-sm">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isLast={index === faqs.length - 1}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default FAQ;
