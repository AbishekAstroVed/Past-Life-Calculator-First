import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left transition-colors hover:text-gold"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-white text-base md:text-lg pr-4">{question}</span>
        <span className="text-gold text-2xl font-light leading-none">{isOpen ? '−' : '+'}</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed pr-8">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Is the past-life calculator really free?",
      answer: "Yes. Your Ketu, 12th house and past-life theme are shown free. The full report is optional."
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
    <div className="pt-8 pb-16 md:pt-12 md:pb-24 w-full bg-white/[0.02] border-t border-white/10">
      <div className="max-w-[800px] mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-white mb-10">Past Life Calculator — FAQs</h2>
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-xl">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
