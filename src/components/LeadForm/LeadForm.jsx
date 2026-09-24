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
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-gold"
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
                className={`px-3 py-2 text-sm cursor-pointer hover:bg-gold/10 transition-colors ${value === option.value ? 'bg-gold/5 font-semibold text-gold' : 'text-dark-navy'}`}
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
        className="w-full px-3 py-2 md:py-2.5 border border-gray-200 rounded-md font-sans text-sm bg-white text-dark-navy transition-all focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
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
                className="px-3 py-2 cursor-pointer hover:bg-gold/10 transition-colors text-dark-navy border-b border-gray-50 last:border-b-0"
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

const LeadForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    email: '',
    day: '1',
    month: 'Jan',
    year: '2000',
    hour: '12',
    minute: '00',
    ampm: 'AM',
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
      navigate('/report');
    }, 1500);
  };

  const inputClasses = "w-full px-3 py-2 md:py-2.5 border border-gray-200 rounded-md font-sans text-sm bg-white text-dark-navy transition-all focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20";
  const labelClasses = "text-[10px] md:text-xs font-semibold text-dark-navy uppercase tracking-wide";

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
  const hourOptions = [...Array(12)].map((_, i) => ({ value: String(i + 1), label: String(i + 1).padStart(2, '0') }));
  const minuteOptions = [...Array(60)].map((_, i) => ({ value: String(i), label: String(i).padStart(2, '0') }));
  const ampmOptions = [{ value: 'AM', label: 'AM' }, { value: 'PM', label: 'PM' }];

  const uniqueCountries = Array.from(new Set(countryData.Countries.map(c => c.CountryName1)));
  const countryOptions = uniqueCountries.map(name => ({ value: name, label: name }));

  return (
    <>
      {isSubmitting && <LoadingOverlay />}
      <div className="bg-white/5 backdrop-blur-2xl rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-white/10 text-dark-navy w-full max-w-md mx-auto lg:mr-0 xl:ml-auto animate-float-slow" style={{ animationDelay: '0.2s' }}>
      <div className="bg-gradient-to-r from-gold to-[#e3bb69] text-dark-navy p-3 md:p-4 text-center border-b border-white/20">
        <h2 className="text-base md:text-lg m-0 uppercase tracking-widest font-bold drop-shadow-sm">Reveal My Past-Life Karma</h2>
      </div>

      <div className="p-5 md:p-6 bg-off-white/95">
        <h3 className="text-lg md:text-xl mb-1 text-dark-navy font-bold tracking-tight">Enter Your Birth Details</h3>
        <p className="text-xs text-gray-600 mb-4 md:mb-5">Get your personalized karma report with accurate predictions.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="flex flex-col gap-2">
              <label className={labelClasses}>Full Name</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your Name" required className={inputClasses} />
            </div>
            <div className="flex flex-col gap-2 relative z-[20]">
              <label className={labelClasses}>Gender</label>
              <CustomSelect name="gender" value={formData.gender} onChange={handleChange} options={genderOptions} placeholder="Select Gender" />
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className={labelClasses}>Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className={inputClasses} />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 relative z-[19]">
            <div className="flex flex-col gap-2">
              <label className={labelClasses}>Day</label>
              <CustomSelect name="day" value={formData.day} onChange={handleChange} options={dayOptions} />
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelClasses}>Month</label>
              <CustomSelect name="month" value={formData.month} onChange={handleChange} options={monthOptions} />
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelClasses}>Year</label>
              <CustomSelect name="year" value={formData.year} onChange={handleChange} options={yearOptions} />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 relative z-[18]">
            <div className="flex flex-col gap-2">
              <label className={labelClasses}>Hour</label>
              <CustomSelect name="hour" value={formData.hour} onChange={handleChange} options={hourOptions} />
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelClasses}>Minute</label>
              <CustomSelect name="minute" value={formData.minute} onChange={handleChange} options={minuteOptions} />
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelClasses}>AM / PM</label>
              <CustomSelect name="ampm" value={formData.ampm} onChange={handleChange} options={ampmOptions} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 relative z-[17]">
            <div className="flex flex-col gap-2">
              <label className={labelClasses}>Country</label>
              <CustomSelect name="country" value={formData.country} onChange={handleChange} options={countryOptions} searchable={true} />
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelClasses}>City</label>
              <CityAutocomplete name="city" value={formData.city} country={formData.country} onChange={handleChange} placeholder="Type your city" />
            </div>
          </div>

          <button type="submit" disabled={isSubmitting} className="relative group overflow-hidden bg-gradient-to-r from-gold to-[#c59842] text-white border-none rounded-lg px-5 py-3.5 md:py-4 text-sm md:text-base font-bold cursor-pointer mt-2 transition-all shadow-[0_10px_20px_rgba(214,168,79,0.3)] hover:shadow-[0_15px_30px_rgba(214,168,79,0.4)] hover:-translate-y-0.5 active:translate-y-px">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Reveal My Past-Life Karma
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default LeadForm;
