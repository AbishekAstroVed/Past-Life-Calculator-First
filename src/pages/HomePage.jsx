import React, { useState } from 'react';
import HeroContent from '../components/HeroContent/HeroContent';
import LeadForm from '../components/LeadForm/LeadForm';
import Features from '../components/Features/Features';
import ReportDetails from '../components/ReportDetails/ReportDetails';
import Pricing from '../components/Pricing/Pricing';
import Benefits from '../components/Benefits/Benefits';
import WelcomeContent from '../components/ReportDetails/WelcomeContent';
import Testimonials from '../components/Testimonials/Testimonials';
import FAQ from '../components/FAQ/FAQ';

const HomePage = () => {
  const [showReport, setShowReport] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);

  return (
    <>
      <div className="relative z-10 max-w-[1250px] mx-auto p-6 md:p-8 w-full flex flex-col animate-fade-in">
        <header className="mb-4 md:mb-6">
          <img src="https://cdn.astroved.com/images/images-av/AstroVed-Logo.svg" alt="AstroVed Logo" className="h-8 md:h-10 w-auto drop-shadow-lg" />
        </header>
        <div id="main-content" className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-8 items-center mt-2">
          <div className="flex flex-col justify-center">
            <HeroContent onCtaClick={() => {
              const formSection = document.getElementById('lead-form-section');
              if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }} />
          </div>
          <div className="relative flex justify-center lg:justify-end items-start lg:pt-0 h-full w-full">
            <div className="relative w-full max-w-[500px] aspect-square lg:w-[110%] lg:max-w-none animate-float-slow transform translate-x-4 lg:-translate-y-12" style={{ maskImage: 'radial-gradient(circle, black 50%, transparent 80%)', WebkitMaskImage: 'radial-gradient(circle, black 50%, transparent 80%)' }}>
               <img src="/astrology_orange_hero.jpg?v=3" alt="Mystical Astrology Journey" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div id="lead-form-section" className="relative z-10 max-w-[1250px] mx-auto px-6 md:px-8 w-full flex justify-center mt-10 lg:mt-16 mb-4 lg:mb-8">
         <div className="w-full max-w-[500px] animate-fade-in-up">
           <LeadForm onReportReady={() => {
              setShowReport(true);
              setTimeout(() => {
                const reportSection = document.getElementById('report-section');
                if (reportSection) {
                  const y = reportSection.getBoundingClientRect().top + window.scrollY - 40;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }, 100);
            }} />
         </div>
      </div>

      {showReport && (
        <div id="report-section" className="relative z-10 w-full mt-12 animate-fade-in min-h-screen max-w-[1250px] mx-auto px-6 md:px-8">
          <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-6 md:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-white/10">
            <WelcomeContent />
          </div>
        </div>
      )}

      <Features />

      <div className="relative z-10 max-w-[1200px] mx-auto p-6 md:p-8 w-full mt-4 md:mt-12">
        <div className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-[#C04921]"></div>
            <svg className="w-6 h-6 text-[#C04921]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.5C11.5 4.5 9 7 6.5 8C9 8.5 10.5 11 12 14C13.5 11 15 8.5 17.5 8C15 7 12.5 4.5 12 2.5Z" />
              <path d="M12 21.5C9.5 21.5 5 19 4 14C5.5 15.5 8 16 11 16C10 14 9.5 12 10.5 10.5C12.5 13 14.5 15.5 19 13.5C18 17 15 21.5 12 21.5Z" opacity="0.8"/>
            </svg>
            <div className="w-12 h-[2px] bg-[#C04921]"></div>
          </div>
          <h2 className="text-3xl md:text-5xl text-dark-navy font-bold font-serif mb-4 drop-shadow-sm">What's Inside <span className="text-[#C04921]">Your Report</span></h2>
          <p className="text-gray-600 text-base md:text-lg max-w-lg mx-auto">A complete, personalised reading of your karmic story, broken down into 6 profound chapters.</p>
        </div>
        <div className="mb-12 md:mb-20">
          <ReportDetails />
        </div>
        <div className="flex justify-center mb-12 md:mb-20">
          <Pricing />
        </div>
        <Benefits />
      </div>

      <Testimonials />
      <FAQ />

      {/* Final CTA Section */}
      <div className="w-full bg-[#FAF8F2] pb-20 md:pb-28 px-6 md:px-8">
        <div className="w-full max-w-[700px] mx-auto text-center">
          <h2 className="text-3xl md:text-[40px] text-[#1a1a1a] font-bold font-serif mb-4 leading-tight">
            Ready for the Full Story?
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-8">
            Your free result is a glimpse. The full Past Life Report tells your whole karmic story.
          </p>
          <Pricing />
        </div>
      </div>
    </>
  );
};

export default HomePage;
