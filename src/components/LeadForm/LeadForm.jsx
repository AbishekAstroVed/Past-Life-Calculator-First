import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import countryData from '../../utils/country.json';
import LoadingOverlay from '../LoadingOverlay/LoadingOverlay';

const CustomSelect = ({ options, value, onChange, name, placeholder, searchable = false }) => {
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

  const filteredOptions = searchable
    ? options.filter(opt => opt.label.toLowerCase().includes(searchTerm.toLowerCase()))
    : options;

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        className="w-full px-3 py-2 md:py-2.5 border border-gray-200 rounded-md font-sans text-sm bg-white text-dark-navy cursor-pointer flex justify-between items-center transition-all hover:border-gray-300"
        onClick={() => {
          if (!isOpen) setSearchTerm('');
          setIsOpen(!isOpen);
        }}
        tabIndex={0}
      >
        <span className={!selectedOption && placeholder ? 'text-gray-500' : ''}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.15)] max-h-[185px] overflow-y-auto">
          {searchable && (
            <div className="sticky top-0 bg-white p-2 border-b border-gray-100 z-20">
              <input
                type="text"
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-[#6868f9]"
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
                className={`px-3 py-2 text-sm cursor-pointer hover:bg-[#6868f9]/10 transition-colors ${value === option.value ? 'bg-[#6868f9]/5 font-semibold text-[#6868f9]' : 'text-dark-navy'}`}
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

const CityAutocomplete = ({ value, country, onChange, name, placeholder }) => {
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
      if (Array.isArray(data)) {
        setOptions(data);
      } else {
        setOptions([]);
      }
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
    timeoutRef.current = setTimeout(() => {
      fetchCities(newValue);
    }, 300);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleInputChange}
        onFocus={() => { if (value && value.length >= 2) setIsOpen(true); }}
        placeholder={placeholder}
        className="w-full px-3 py-2 md:py-2.5 border border-gray-200 rounded-md font-sans text-sm bg-white text-dark-navy transition-all focus:outline-none focus:border-[#6868f9] focus:ring-2 focus:ring-[#6868f9]/20"
        autoComplete="off"
      />
      {isOpen && (value.length >= 2) && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.15)] max-h-[185px] overflow-y-auto">
          {isLoading ? (
            <div className="px-3 py-2 text-sm text-gray-400">Loading...</div>
          ) : options.length === 0 ? (
            <div className="px-3 py-2 text-sm text-gray-400">No results found</div>
          ) : (
            options.map((option, index) => (
              <div
                key={`${option.City}-${index}`}
                className="px-3 py-2 cursor-pointer hover:bg-[#6868f9]/10 transition-colors text-dark-navy border-b border-gray-50 last:border-b-0"
                onClick={() => {
                  onChange({ target: { name, value: option.City } });
                  setIsOpen(false);
                }}
              >
                <div className="text-sm font-semibold">{option.City}</div>
                <div className="text-[10px] text-gray-500">{option.StateorProvince}</div>
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
    fullName: '',
    gender: 'male',
    email: '',
    day: '',
    month: '',
    year: '',
    hour: '',
    minute: '',
    country: 'India',
    city: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      if (onReportReady) {
        onReportReady();
      } else {
        setShowReport(true);
      }
    }, 1500);
  };

  const inputClasses = "w-full px-3 py-2.5 md:py-3 border border-gray-200 rounded-md font-sans text-[13px] md:text-sm bg-gray-50/50 text-gray-800 transition-all focus:outline-none focus:border-[#C04921] focus:ring-1 focus:ring-[#C04921] placeholder-gray-400";
  const labelClasses = "text-[12px] md:text-[13px] font-bold text-gray-800 tracking-tight block mb-2";

  // Option lists
  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
  ];
  const dayOptions = [...Array(31)].map((_, i) => ({ value: String(i + 1), label: String(i + 1).padStart(2, '0') }));
  const monthOptions = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(m => ({ value: m, label: m }));
  const yearOptions = [...Array(100)].map((_, i) => {
    const year = String(new Date().getFullYear() - i);
    return { value: year, label: year };
  });
  const hourOptions = [...Array(24)].map((_, i) => ({ value: String(i), label: String(i).padStart(2, '0') }));
  const minuteOptions = [...Array(60)].map((_, i) => ({ value: String(i), label: String(i).padStart(2, '0') }));

  const uniqueCountries = Array.from(new Set(countryData.Countries.map(c => c.CountryName1)));
  const countryOptions = uniqueCountries.map(name => ({ value: name, label: name }));

  return (
    <>
      {isSubmitting && <LoadingOverlay />}
      <div className="w-full max-w-xl mx-auto flex flex-col items-center">
        
        {/* Title Section */}
        <div className="text-center mb-8 px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a1a1a] leading-tight mb-3">
            See Your Past-Life Karma,<br />Free
          </h2>
          <p className="text-[15px] md:text-base text-[#555555] mx-auto leading-relaxed">
            Your birth details stay private. We use them only to read your<br />Ketu, Rahu and 12th house.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 p-6 md:p-8 w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            
            {/* Name & Gender */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 relative z-[20]">
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your Name" required className={inputClasses} />
              <CustomSelect name="gender" value={formData.gender} onChange={handleChange} options={genderOptions} placeholder="Gender" />
            </div>

            {/* Birth Date */}
            <div className="flex flex-col relative z-[19]">
              <label className={labelClasses}>Select Your Birth Date</label>
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <CustomSelect name="day" value={formData.day} onChange={handleChange} options={dayOptions} placeholder="DD" />
                <CustomSelect name="month" value={formData.month} onChange={handleChange} options={monthOptions} placeholder="Birth Month" />
                <CustomSelect name="year" value={formData.year} onChange={handleChange} options={yearOptions} placeholder="YYYY" />
              </div>
            </div>

            {/* Birth Time */}
            <div className="flex flex-col relative z-[18]">
              <label className={labelClasses}>Select Your Birth Time</label>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <CustomSelect name="hour" value={formData.hour} onChange={handleChange} options={hourOptions} placeholder="Birth Hour" />
                <CustomSelect name="minute" value={formData.minute} onChange={handleChange} options={minuteOptions} placeholder="Birth Minute" />
              </div>
            </div>

            {/* Birth Place */}
            <div className="flex flex-col relative z-[17]">
              <label className={labelClasses}>Select Your Birth Place</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <CustomSelect name="country" value={formData.country} onChange={handleChange} options={countryOptions} searchable={true} placeholder="Country" />
                <CityAutocomplete name="city" value={formData.city} country={formData.country} onChange={handleChange} placeholder="Type Birth City/District" />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isSubmitting} 
              className="mt-3 w-full bg-[#C04921] hover:bg-[#a63d1a] text-white border-none rounded-md py-3.5 md:py-4 text-base font-bold cursor-pointer transition-colors"
            >
              Reveal My Past-Life Karma
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LeadForm;
