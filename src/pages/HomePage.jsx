import React, { useState } from 'react';
import HeroContent from '../components/HeroContent/HeroContent';
import LeadForm from '../components/LeadForm/LeadForm';
import Features from '../components/Features/Features';
import ReportDetails from '../components/ReportDetails/ReportDetails';
import Pricing from '../components/Pricing/Pricing';
import Benefits from '../components/Benefits/Benefits';
import WelcomeContent from '../components/ReportDetails/WelcomeContent'; // Import WelcomeContent

import Testimonials from '../components/Testimonials/Testimonials';
import FAQ from '../components/FAQ/FAQ';

const HomePage = () => {
  const [showReport, setShowReport] = useState(false);

  return (
    <>
      <div className="relative z-10 max-w-[1200px] mx-auto p-6 md:p-8 w-full flex flex-col animate-fade-in">
        <header className="mb-6 md:mb-8">
          <img src="https://cdn.astroved.com/images/images-av/AstroVed-Logo.svg" alt="AstroVed Logo" className="h-8 md:h-10 w-auto drop-shadow-lg" />
        </header>
        <div id="main-content" className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          <HeroContent />
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

        {showReport && (
          <div id="report-section" className="relative z-10 w-full mt-16 animate-fade-in min-h-screen">
            <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-6 md:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-white/10">
               <WelcomeContent />
            </div>
          </div>
        )}
      </div>

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
    </>
  );
};

export default HomePage;
