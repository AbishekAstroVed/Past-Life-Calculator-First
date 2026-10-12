import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import countryData from '../../utils/country.json';
import LoadingOverlay from '../LoadingOverlay/LoadingOverlay';

// Reusable SVG Icons
const Icons = {
  User: () => <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
  Calendar: () => <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
  Clock: () => <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  Globe: () => <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  MapPin: () => <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  Female: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11a4 4 0 100-8 4 4 0 000 8zM12 11v10m-3-3h6" /></svg>,
  Male: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14a4 4 0 100-8 4 4 0 000 8zm0 0l6 6m0-6v6h-6" /></svg>,
  Other: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11a4 4 0 100-8 4 4 0 000 8zm-4 4l-4 4m16 0l-4-4" /></svg>,
  Calculator: () => <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
  Lotus: ({ className = "w-6 h-6" }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 22C12 22 17 19 19 15C21 11 19 7 19 7C19 7 15 9 12 13C9 9 5 7 5 7C5 7 3 11 5 15C7 19 12 22 12 22ZM12 22C12 22 15 16 15 11C15 6 12 2 12 2C12 2 9 6 9 11C9 16 12 22 12 22Z" /></svg>
};

const CustomSelect = ({ options, value, onChange, name, placeholder, searchable = false, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value) || null;
  const filteredOptions = searchable ? options.filter(opt => opt.label.toLowerCase().includes(searchTerm.toLowerCase())) : options;

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        className="w-full h-9 px-3 border border-gray-200 rounded-lg font-sans text-sm bg-white text-gray-800 cursor-pointer flex justify-between items-center transition-all hover:border-gray-300 relative"
        onClick={() => {
          if (!isOpen) setSearchTerm('');
          setIsOpen(!isOpen);
        }}
        tabIndex={0}
      >
        <div className="flex items-center gap-2 overflow-hidden flex-1">
          {Icon && <Icon />}
          <span className={`truncate ${!selectedOption && placeholder ? 'text-gray-400' : ''}`}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>
        <svg className={`w-3.5 h-3.5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''} shrink-0 ml-2`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-100 rounded-lg shadow-lg max-h-[200px] overflow-y-auto">
          {searchable && (
            <div className="sticky top-0 bg-white p-2 border-b border-gray-100 z-20">
              <input
                type="text"
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-[#C04921]"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                autoFocus
              />
            </div>
          )}
          {filteredOptions.length === 0 ? (
            <div className="px-3 py-2 text-sm text-gray-400">No results found</div>
          ) : (
            filteredOptions.map((option) => (
              <div
                key={option.value}
                className={`px-3 py-2.5 text-sm cursor-pointer hover:bg-gray-50 transition-colors ${value === option.value ? 'bg-orange-50 font-medium text-[#C04921]' : 'text-gray-700'}`}
                onClick={() => {
                  onChange({ target: { name, value: option.value } });
                  setIsOpen(false);
                }}
              >
                {option.label}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

const CityAutocomplete = ({ value, country, onChange, name, placeholder, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const fetchCities = async (searchTerm) => {
    if (!searchTerm || searchTerm.length < 2 || !country) {
      setOptions([]);
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(`https://webservice.astroved.com/Api/Panchang/PopulateCityBycountry/${encodeURIComponent(country)}/${encodeURIComponent(searchTerm)}`);
      const data = await response.json();
      setOptions(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching cities:", error);
      setOptions([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    onChange({ target: { name, value: newValue } });
    setIsOpen(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => fetchCities(newValue), 300);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div className="relative w-full flex items-center">
        {Icon && <div className="absolute left-3"><Icon /></div>}
        <input
          type="text"
          name={name}
          value={value}
          onChange={handleInputChange}
          onFocus={() => { if (value && value.length >= 2) setIsOpen(true); }}
          placeholder={placeholder}
          className={`w-full h-9 border border-gray-200 rounded-lg font-sans text-sm bg-white text-gray-800 transition-all focus:outline-none focus:border-[#C04921] focus:ring-1 focus:ring-[#C04921]/50 placeholder-gray-400 ${Icon ? 'pl-9 pr-3' : 'px-3'}`}
          autoComplete="off"
        />
      </div>
      {isOpen && (value.length >= 2) && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-100 rounded-lg shadow-lg max-h-[200px] overflow-y-auto">
          {isLoading ? (
            <div className="px-3 py-2 text-sm text-gray-400">Loading...</div>
          ) : options.length === 0 ? (
            <div className="px-3 py-2 text-sm text-gray-400">No results found</div>
          ) : (
            options.map((option, index) => (
              <div
                key={`${option.City}-${index}`}
                className="px-3 py-2.5 cursor-pointer hover:bg-gray-50 transition-colors text-gray-800 border-b border-gray-50 last:border-b-0"
                onClick={() => {
                  onChange({ target: { name, value: option.City } });
                  setIsOpen(false);
                }}
              >
                <div className="text-sm font-medium">{option.City}</div>
                <div className="text-[11px] text-gray-500">{option.StateorProvince}</div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

const LeadForm = ({ onReportReady }) => {
  const navigate = useNavigate();
  const [showReport, setShowReport] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '', gender: 'male', email: '',
    day: '', month: '', year: '',
    hour: '', minute: '', ampm: 'AM',
    country: 'India', city: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      if (onReportReady) onReportReady();
      else setShowReport(true);
    }, 1500);
  };

  const dayOptions = [...Array(31)].map((_, i) => ({ value: String(i + 1), label: String(i + 1).padStart(2, '0') }));
  const monthOptions = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(m => ({ value: m, label: m }));
  const yearOptions = [...Array(100)].map((_, i) => {
    const year = String(new Date().getFullYear() - i);
    return { value: year, label: year };
  });
  const hourOptions = [...Array(12)].map((_, i) => ({ value: String(i + 1), label: String(i + 1).padStart(2, '0') }));
  const minuteOptions = [...Array(60)].map((_, i) => ({ value: String(i), label: String(i).padStart(2, '0') }));
  const countryOptions = Array.from(new Set(countryData.Countries.map(c => c.CountryName1))).map(name => ({ value: name, label: name }));

  return (
    <>
      {isSubmitting && <LoadingOverlay />}
      <div className="w-full max-w-[500px] mx-auto">
        <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] w-full relative overflow-hidden flex flex-col">

          {/* Decorative Top Background */}
          <div className="absolute top-0 left-0 w-full h-[180px] bg-gradient-to-br from-[#FAF8F2] to-white pointer-events-none"></div>
          {/* Faint Astrology Wheel SVG Watermark */}
          <div className="absolute -top-12 -right-12 w-64 h-64 opacity-[0.03] text-[#C04921] pointer-events-none">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <path d="M50 5 L50 95 M5 50 L95 50" stroke="currentColor" strokeWidth="0.5" />
              <path d="M50 15 L60 40 L85 50 L60 60 L50 85 L40 60 L15 50 L40 40 Z" />
            </svg>
          </div>

          {/* Header Area */}
          <div className="relative z-10 px-6 pt-5 pb-3">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-[#C04921]/10 flex items-center justify-center text-[#C04921] shrink-0">
                <Icons.Lotus className="w-7 h-7" />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-serif font-bold leading-tight flex gap-1.5 flex-wrap">
                  <span className="text-[#1e293b]">See Your Past-Life Karma,</span>
                  <span className="text-[#C04921]">Free</span>
                </h2>
              </div>
            </div>
            <p className="text-[13px] text-gray-500 mt-4 leading-relaxed w-full">
              Your birth details stay private. We use them only to read your Ketu, Rahu and 12th house.
            </p>
          </div>

          <div className="w-full h-px bg-gray-100"></div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="relative z-10 p-5 flex flex-col gap-4">

            {/* Section 1: Identity */}
            <div className="flex gap-3">
              <div className="w-7 h-7 rounded-full bg-[#C04921] text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5 shadow-sm">
                1
              </div>
              <div className="flex-1 flex flex-col gap-2.5">
                <div>
                  <h3 className="text-[14px] font-bold text-[#1e293b]">Your Identity</h3>
                  <p className="text-[11px] text-gray-400 mt-0.5">Tell us who you are.</p>
                </div>

                <div className="relative w-full flex items-center">
                  <div className="absolute left-3"><Icons.User /></div>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your Name" required className="w-full h-9 pl-9 pr-3 border border-gray-200 rounded-lg font-sans text-sm bg-white text-gray-800 focus:outline-none focus:border-[#C04921] focus:ring-1 focus:ring-[#C04921]/50 placeholder-gray-400" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-bold text-[#1e293b]">Gender</label>
                  <div className="flex rounded-full overflow-hidden h-9 bg-gray-50 p-1 border border-gray-100">
                    {['Female', 'Male', 'Other'].map((g) => {
                      const value = g.toLowerCase();
                      const isSelected = formData.gender === value;
                      const Icon = Icons[g];
                      return (
                        <button
                          type="button"
                          key={g}
                          onClick={() => handleChange({ target: { name: 'gender', value } })}
                          className={`flex-1 flex items-center justify-center gap-1.5 text-[13px] rounded-full transition-all duration-200 ${isSelected
                            ? 'bg-[#C04921] text-white font-semibold shadow-sm'
                            : 'bg-transparent text-gray-500 hover:text-gray-800 font-medium'
                            }`}
                        >
                          <Icon />
                          {g}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-gray-100/70 ml-11"></div>

            {/* Section 2: Birth Details */}
            <div className="flex gap-3">
              <div className="w-7 h-7 rounded-full bg-[#C04921] text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5 shadow-sm">
                2
              </div>
              <div className="flex-1 flex flex-col gap-2.5">
                <div>
                  <h3 className="text-[14px] font-bold text-[#1e293b]">When were you born?</h3>
                  <p className="text-[11px] text-gray-400 mt-0.5">Select your date and time of birth.</p>
                </div>

                <div className="grid grid-cols-3 gap-2 relative z-50">
                  <CustomSelect name="day" value={formData.day} onChange={handleChange} options={dayOptions} placeholder="DD" icon={Icons.Calendar} />
                  <CustomSelect name="month" value={formData.month} onChange={handleChange} options={monthOptions} placeholder="Month" icon={Icons.Calendar} />
                  <CustomSelect name="year" value={formData.year} onChange={handleChange} options={yearOptions} placeholder="YYYY" icon={Icons.Calendar} />
                </div>

                <div className="flex flex-col gap-1.5 relative z-40">
                  <label className="text-[12px] font-bold text-[#1e293b]">Time</label>
                  <div className="flex gap-2">
                    <div className="grid grid-cols-2 gap-2 flex-1">
                      <CustomSelect name="hour" value={formData.hour} onChange={handleChange} options={hourOptions} placeholder="Hour" icon={Icons.Clock} />
                      <CustomSelect name="minute" value={formData.minute} onChange={handleChange} options={minuteOptions} placeholder="Minute" icon={Icons.Clock} />
                    </div>
                    <div className="flex w-[100px] h-9 rounded-lg bg-gray-50 p-1 border border-gray-100">
                      <button
                        type="button"
                        onClick={() => handleChange({ target: { name: 'ampm', value: 'AM' } })}
                        className={`flex-1 text-[13px] font-bold rounded-md transition-all duration-200 ${formData.ampm === 'AM' ? 'bg-[#C04921] text-white shadow-sm' : 'bg-transparent text-gray-500 hover:text-gray-800'}`}
                      >
                        AM
                      </button>
                      <button
                        type="button"
                        onClick={() => handleChange({ target: { name: 'ampm', value: 'PM' } })}
                        className={`flex-1 text-[13px] font-bold rounded-md transition-all duration-200 ${formData.ampm === 'PM' ? 'bg-[#C04921] text-white shadow-sm' : 'bg-transparent text-gray-500 hover:text-gray-800'}`}
                      >
                        PM
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-gray-100/70 ml-11"></div>

            {/* Section 3: Location */}
            <div className="flex gap-3 relative z-30">
              <div className="w-7 h-7 rounded-full bg-[#C04921] text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5 shadow-sm">
                3
              </div>
              <div className="flex-1 flex flex-col gap-2.5">
                <div>
                  <h3 className="text-[14px] font-bold text-[#1e293b]">Where were you born?</h3>
                  <p className="text-[11px] text-gray-400 mt-0.5">Enter your birth place details.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <CustomSelect name="country" value={formData.country} onChange={handleChange} options={countryOptions} searchable={true} placeholder="India" icon={Icons.Globe} />
                  <CityAutocomplete name="city" value={formData.city} country={formData.country} onChange={handleChange} placeholder="Birth City/District" icon={Icons.MapPin} />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-1 flex flex-col">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-[44px] bg-gradient-to-r from-[#C04921] to-[#e87a55] hover:from-[#a83d1a] hover:to-[#d6653f] text-white border-none rounded-xl text-[14px] font-bold cursor-pointer transition-all shadow-[0_8px_20px_rgba(192,73,33,0.25)] flex justify-center items-center gap-2 group"
              >
                <Icons.Calculator />
                Calculate My Past-Life Karma
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
};

export default LeadForm;
