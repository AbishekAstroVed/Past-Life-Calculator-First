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

      <div className="relative z-10 max-w-[1200px] mx-auto p-6 md:p-8 w-full mt-4 md:mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-center mb-12 md:mb-20">
          <div className="lg:col-span-2">
            <ReportDetails />
          </div>
          <div className="lg:col-span-1">
            <Pricing />
          </div>
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
