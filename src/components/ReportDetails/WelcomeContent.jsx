import React from 'react';

const WelcomeContent = () => {
  return (
    <div className="w-full text-[#333] animate-fade-in">
      
      {/* 1. Document Header */}
      <div className="flex items-start gap-4 mb-10">
        <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
          <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
        </div>
        <div>
          <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Past Life · Ketu & 12th House</div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1a1a1a] m-0 leading-tight">Here's the Karma You Carried Into This Life</h1>
        </div>
      </div>

      <div className="w-full h-px bg-gray-200 mb-8"></div>

      {/* 2. Birth Chart Component */}
      <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 mb-8 relative">
        <h2 className="text-xl font-bold mb-1 text-black">Your birth chart</h2>
        <p className="text-gray-500 text-sm mb-10">Highlighted houses & planets are what this reading focuses on.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* North Indian Chart Mockup */}
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">North</span>
            <div className="w-full max-w-[280px] aspect-square relative border border-gray-200 overflow-hidden text-xs">
               {/* Grid Lines */}
               <svg className="absolute inset-0 w-full h-full text-gray-200" stroke="currentColor" strokeWidth="1">
                 <line x1="0" y1="0" x2="100%" y2="100%" />
                 <line x1="100%" y1="0" x2="0" y2="100%" />
                 <line x1="50%" y1="0" x2="100%" y2="50%" />
                 <line x1="100%" y1="50%" x2="50%" y2="100%" />
                 <line x1="50%" y1="100%" x2="0" y2="50%" />
                 <line x1="0" y1="50%" x2="50%" y2="0" />
               </svg>
               {/* Highlight Triangle */}
               <svg className="absolute inset-0 w-full h-full text-blue-600/10 fill-current" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <polygon points="50,0 100,0 50,50" />
               </svg>
               <svg className="absolute inset-0 w-full h-full text-blue-600" stroke="currentColor" strokeWidth="2" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <polygon points="50,0 100,0 50,50" fill="none" />
               </svg>
               
               {/* Data Points */}
               <div className="absolute top-2 left-1/4 text-gray-400">12</div>
               <div className="absolute top-1/4 left-2 text-gray-400">1</div>
               <div className="absolute top-1/2 left-8 text-gray-400">2</div>
               <div className="absolute bottom-1/4 left-2 text-gray-400">3</div>
               <div className="absolute bottom-2 left-1/4 text-gray-400">4</div>
               <div className="absolute bottom-2 right-1/4 text-gray-400">6</div>
               <div className="absolute bottom-1/4 right-2 text-gray-400">7</div>
               <div className="absolute top-1/2 right-8 text-gray-400">8</div>
               <div className="absolute top-1/4 right-2 text-gray-400">9</div>
               <div className="absolute top-2 right-1/4 text-blue-600 font-bold">10</div>
               <div className="absolute top-8 right-[30%] text-gray-400">11</div>

               <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-gray-700">Mo</div>
               <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 font-bold text-gray-700">Me Ve</div>
               <div className="absolute top-8 right-8 font-bold text-blue-600">Ju<sup className="font-normal text-[8px]">R</sup> Ra<sup className="font-normal text-[8px]">R</sup></div>
               <div className="absolute bottom-[35%] left-8 font-bold text-gray-700">Ma</div>
               <div className="absolute bottom-8 left-1/4 font-bold text-blue-400">Ke</div>
               <div className="absolute bottom-[20%] right-1/4 font-bold text-gray-700">Su <span className="text-blue-600">Sa</span></div>
            </div>
          </div>

          {/* South Indian Chart Mockup */}
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">South</span>
            <div className="w-full max-w-[280px] aspect-square border border-gray-200 grid grid-cols-4 grid-rows-4 text-[10px] relative">
              <div className="border border-gray-100 p-1"><div className="font-bold">2</div><div className="text-[8px] text-gray-400">PISCES</div></div>
              <div className="border border-gray-100 p-1"><div className="font-bold">3</div><div className="text-[8px] text-gray-400">ARIES</div></div>
              <div className="border border-gray-100 p-1"><div className="font-bold">4</div><div className="text-[8px] text-gray-400">TAURUS</div></div>
              <div className="border border-gray-100 p-1 relative"><div className="font-bold">5</div><div className="text-[8px] text-gray-400">GEMINI</div><div className="absolute bottom-1 left-1 font-bold text-xs text-gray-700">Ma</div></div>
              
              <div className="border border-gray-100 p-1 relative"><div className="font-bold">1</div><div className="text-[8px] text-gray-400">AQUARIUS</div><div className="absolute bottom-1 left-1 font-bold text-xs text-gray-700">Mo</div></div>
              <div className="col-span-2 row-span-2 flex items-center justify-center text-gray-300 font-serif text-lg">D1</div>
              <div className="border border-gray-100 p-1 relative"><div className="font-bold">6</div><div className="text-[8px] text-gray-400">CANCER</div><div className="absolute bottom-1 left-1 font-bold text-xs text-blue-400">Ke</div></div>
              
              <div className="border border-gray-100 p-1 bg-blue-50 border-blue-600 relative"><div className="font-bold text-blue-600">12</div><div className="text-[8px] text-blue-400">CAPRICORN</div><div className="absolute bottom-1 left-1 font-bold text-xs text-blue-600">Ju<sup className="font-normal text-[8px]">R</sup> Ra<sup className="font-normal text-[8px]">R</sup></div></div>
              <div className="border border-gray-100 p-1 relative"><div className="font-bold">7</div><div className="text-[8px] text-gray-400">LEO</div><div className="absolute bottom-1 left-1 font-bold text-xs text-gray-700">Me Ve</div></div>
              
              <div className="border border-gray-100 p-1"><div className="font-bold">11</div><div className="text-[8px] text-gray-400">SAGITTARIUS</div></div>
              <div className="border border-gray-100 p-1"><div className="font-bold">10</div><div className="text-[8px] text-gray-400">SCORPIO</div></div>
              <div className="border border-gray-100 p-1"><div className="font-bold">9</div><div className="text-[8px] text-gray-400">LIBRA</div></div>
              <div className="border border-gray-100 p-1 relative"><div className="font-bold">8</div><div className="text-[8px] text-gray-400">VIRGO</div><div className="absolute bottom-1 left-1 font-bold text-xs text-gray-700">Su <span className="text-blue-600">Sa</span></div></div>
            </div>
          </div>
        </div>

        {/* 3. Dasha Timeline */}
        <div className="mt-12">
          <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Your Current Planetary Period · Vimshottari Dasha</div>
          <div className="flex flex-wrap gap-4">
            
            <div className="bg-[#fcfaf5] border border-[#f0e8da] rounded-xl p-4 min-w-[140px] flex-1">
              <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-2">Mahadasha</div>
              <div className="font-bold text-gray-800 text-lg mb-2 font-serif">Jupiter</div>
              <div className="text-xs text-gray-500 leading-tight">Nov 2020 - Nov 2036</div>
            </div>

            <div className="bg-blue-50/50 border border-blue-600 rounded-xl p-4 min-w-[140px] flex-1">
              <div className="text-[9px] font-bold text-blue-400 uppercase tracking-wider mb-2">Antardasha</div>
              <div className="font-bold text-blue-600 text-lg mb-2 font-serif">Mercury</div>
              <div className="text-xs text-blue-600/70 leading-tight">Jul 2025 - Oct 2027</div>
            </div>

            <div className="bg-[#fcfaf5] border border-[#f0e8da] rounded-xl p-4 min-w-[140px] flex-1">
              <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-2">Pratyantar</div>
              <div className="font-bold text-gray-800 text-lg mb-2 font-serif">Mars</div>
              <div className="text-xs text-gray-500 leading-tight">Sep 2026 - Oct 2026</div>
            </div>

            <div className="bg-[#fcfaf5] border border-[#f0e8da] border-dashed rounded-xl p-4 min-w-[140px] flex-1">
              <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-2">Next Antardasha</div>
              <div className="font-bold text-gray-800 text-lg mb-2 font-serif">Ketu</div>
              <div className="text-xs text-gray-500 leading-tight">Oct 2027 - Sep 2028</div>
            </div>

          </div>
        </div>
      </div>

      {/* 4. Metrics & Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        
        {/* Strength Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-center">
          <div className="flex justify-between items-end mb-4">
            <h3 className="font-bold text-gray-800">Moksha (12th) Strength</h3>
            <span className="text-3xl font-bold text-[#E85D04]">83</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2 mb-2 relative overflow-hidden">
            <div className="bg-[#E85D04] h-2 rounded-full w-[83%]"></div>
          </div>
          <div className="text-xs text-gray-400 mb-4">avg 52</div>
          <p className="text-sm text-gray-600 leading-relaxed">A strong house of liberation — past-life merit supports your inner journey.</p>
        </div>

        {/* Premium Card */}
        <div className="bg-[#f9f7f1] rounded-2xl p-6 border border-[#f0e8da] flex flex-col justify-center relative overflow-hidden group cursor-pointer">
          <div className="absolute top-4 right-4 bg-orange-100 text-orange-600 text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm">Premium</div>
          <h3 className="font-bold text-gray-800 mb-6">Spiritual Growth</h3>
          <div className="w-full bg-gray-200 rounded-full h-2 relative overflow-hidden filter blur-[2px] opacity-60">
            <div className="bg-orange-300 h-2 rounded-full w-[40%]"></div>
          </div>
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] group-hover:backdrop-blur-none transition-all"></div>
        </div>

        {/* Insight Card 1 */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Ketu — Past-Life Karma</span>
            <div className="bg-orange-50 text-orange-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-2">
              Cancer <span className="w-1 h-1 rounded-full bg-orange-300"></span> Pushya
            </div>
          </div>
          <h3 className="text-xl font-bold font-serif text-black mb-4">What your soul already mastered</h3>
          <p className="text-gray-600 leading-relaxed">In a past life you nurtured and protected — emotion runs deep; this life asks you to step into authority.</p>
        </div>

        {/* Insight Card 2 */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">12th House — Moksha & Release</span>
            <div className="bg-orange-50 text-orange-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              Capricorn
            </div>
          </div>
          <h3 className="text-xl font-bold font-serif text-black mb-4">Your 12th house falls in Capricorn</h3>
          <p className="text-gray-600 leading-relaxed">Your 12th lord Saturn sits in the 8th house, showing where your release, retreat and spiritual growth play out this life.</p>
        </div>

      </div>

      {/* 5. Summary & Direction */}
      <div className="bg-orange-50 text-[#d95c14] text-sm md:text-base font-medium p-4 md:p-6 rounded-xl mb-6">
        Your dominant past-life theme: The Servant-Warrior — past struggles and service, now seeking balance.
      </div>

      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 mb-12">
        <div className="flex items-start gap-3 mb-2">
          <div className="w-3 h-3 rounded-full bg-green-600 mt-1 flex-shrink-0"></div>
          <div>
            <h3 className="text-lg font-bold text-black mb-1">Your Soul's Direction</h3>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">· Rahu-Ketu Axis</span>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed mt-2 pl-6">
          This life, your soul moves toward spirituality, release and liberation — the growth your Rahu calls you into.
        </p>
      </div>

      {/* 6. Final CTA Block */}
      <div className="bg-[#1a1510] rounded-[24px] p-8 md:p-12 text-center flex flex-col items-center justify-center shadow-2xl relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gold/10 rounded-full blur-3xl"></div>
        
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 relative z-10">This Is Just a Glimpse. See Your Whole Karmic Story.</h2>
        <p className="text-[#a69d95] max-w-2xl text-sm md:text-base leading-relaxed mb-8 relative z-10">
          Your free result reveals the theme. The full Past Life Report decodes your karmic debts, the relationships carried over, why patterns repeat, and the remedies to clear them — prepared by an expert astrologer.
        </p>
        
        <button className="relative overflow-hidden bg-gradient-to-r from-[#F48C42] to-[#E35F12] text-white border-none rounded-xl px-8 py-4 text-base md:text-lg font-bold cursor-pointer transition-all hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(227,95,18,0.4)] z-10 group">
          <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-sm">
            Get My Past Life Report
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
        </button>
      </div>

    </div>
  );
};

export default WelcomeContent;
