import React from 'react';
import HeroContent from '../components/HeroContent/HeroContent';
import LeadForm from '../components/LeadForm/LeadForm';
import Features from '../components/Features/Features';
import ReportDetails from '../components/ReportDetails/ReportDetails';
import Pricing from '../components/Pricing/Pricing';
import Benefits from '../components/Benefits/Benefits';

const HomePage = () => {
  return (
    <>
      <div className="relative z-10 max-w-[1200px] mx-auto p-6 md:p-8 w-full flex flex-col animate-fade-in">
        <header className="mb-6 md:mb-8">
          <img src="https://cdn.astroved.com/images/images-av/AstroVed-Logo.svg" alt="AstroVed Logo" className="h-8 md:h-10 w-auto drop-shadow-lg" />
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          <HeroContent />
          <LeadForm />
        </div>
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
    </>
  );
};

export default HomePage;
