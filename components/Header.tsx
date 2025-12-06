import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, ChevronDown, ChevronRight, AlertTriangle } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

interface HeaderProps {
  onOpenFees?: () => void;
  onSelectService?: (id: string) => void;
  onSelectCondition?: (id: string) => void;
  onContactClick?: () => void;
  onBlogClick?: () => void;
}

const treatmentsList = [
  { id: '1', title: 'Severe Toothache' },
  { id: '2', title: 'Broken / Chipped Tooth' },
  { id: '3', title: 'Dental Abscess' },
  { id: '4', title: 'Lost Filling / Crown' },
  { id: '5', title: 'Wisdom Tooth Pain' },
  { id: '6', title: 'Root Canal' },
];

const emergencyCasesList = [
  { id: 'c1', title: 'Dental Trauma' },
  { id: 'c2', title: 'Toothache' },
  { id: 'c3', title: 'Swollen Gums' },
  { id: 'c4', title: 'Crowns Fall Out' },
  { id: 'c5', title: 'Broken Denture' },
  { id: 'c6', title: 'Dental Injury' },
];

const Header: React.FC<HeaderProps> = ({ 
  onOpenFees, 
  onSelectService, 
  onSelectCondition, 
  onContactClick,
  onBlogClick 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    openBooking();
  };

  const handleFeesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onOpenFees) {
      onOpenFees();
    } else {
      document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onContactClick) {
        onContactClick();
    } else {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBlogLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onBlogClick) {
        onBlogClick();
    }
  };

  const handleServiceClick = (id: string) => {
    setMobileMenuOpen(false);
    if (onSelectService) {
      onSelectService(id);
    }
  };

  const handleConditionClick = (id: string) => {
    setMobileMenuOpen(false);
    if (onSelectCondition) {
      onSelectCondition(id);
    }
  };

  const goHome = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if(onSelectService) onSelectService(''); 
    window.scrollTo(0,0);
  }

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" onClick={goHome} className="flex items-center gap-2">
                <div className="bg-medical-600 text-white p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </div>
                <div className="flex flex-col">
                    <span className={`font-bold text-xl leading-none ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>London Emergency</span>
                    <span className={`text-sm font-medium tracking-wider uppercase ${isScrolled ? 'text-medical-600' : 'text-medical-700'}`}>Dentist</span>
                </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            
            {/* Mega Menu Dropdown */}
            <div className="relative group">
                <button className="flex items-center text-slate-600 hover:text-medical-600 font-medium transition cursor-pointer py-2">
                    Treatments <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[500px] bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden hidden group-hover:block transition-all duration-200 transform origin-top">
                    <div className="flex">
                        {/* Left Col: General */}
                        <div className="w-1/2 bg-white">
                            <div className="px-4 py-3 bg-gray-50 border-b border-gray-100 font-bold text-slate-700">General Treatments</div>
                            <div className="py-2">
                                {treatmentsList.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => handleServiceClick(item.id)}
                                        className="block w-full text-left px-4 py-2.5 text-sm text-slate-600 hover:bg-medical-50 hover:text-medical-700 transition-colors"
                                    >
                                        {item.title}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right Col: Emergency Cases (Red Header) */}
                        <div className="w-1/2 bg-white border-l border-gray-100">
                             <div className="px-4 py-3 bg-red-50 text-red-600 font-bold border-b border-red-100 flex items-center justify-center text-center">
                                Emergency Dental Cases <ChevronDown className="w-3 h-3 ml-1" />
                             </div>
                             <div className="py-2">
                                {emergencyCasesList.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => handleConditionClick(item.id)}
                                        className="block w-full text-left px-4 py-2.5 text-sm text-slate-600 hover:bg-red-50 hover:text-red-700 transition-colors"
                                    >
                                        {item.title}
                                    </button>
                                ))}
                                <div className="px-4 py-2 text-right">
                                    <span className="inline-flex items-center text-xs font-bold text-red-500">
                                        <AlertTriangle className="w-3 h-3 mr-1" /> Urgent Care
                                    </span>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            <button onClick={handleFeesClick} className="text-slate-600 hover:text-medical-600 font-medium transition cursor-pointer">Fees</button>
            <button onClick={handleContactLinkClick} className="text-slate-600 hover:text-medical-600 font-medium transition cursor-pointer">Contact Us</button>
            <button onClick={handleBlogLinkClick} className="text-slate-600 hover:text-medical-600 font-medium transition cursor-pointer">Blog</button>
            
            <div className="flex items-center gap-3 ml-2">
                 <a href="tel:02031376356" className="flex items-center text-urgent-600 font-bold hover:text-urgent-700 transition">
                    <Phone className="w-4 h-4 mr-2" />
                    020 3137 6356
                 </a>
                 <button 
                    onClick={openBooking}
                    className="bg-medical-600 hover:bg-medical-700 text-white px-5 py-2.5 rounded-full font-medium transition shadow-md hover:shadow-lg flex items-center cursor-pointer"
                 >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Your Visit
                 </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <a href="tel:02031376356" className="mr-4 bg-urgent-100 text-urgent-700 p-2 rounded-full">
                <Phone className="w-5 h-5" />
            </a>
            <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-600 hover:text-slate-900"
            >
                {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-2">
            
            {/* Mobile Treatments Accordion */}
            <div>
                <button 
                    onClick={() => setMobileTreatmentsOpen(!mobileTreatmentsOpen)}
                    className="flex items-center justify-between w-full px-3 py-4 text-base font-medium text-slate-700 hover:bg-gray-50 rounded-md"
                >
                    Treatments
                    <ChevronDown className={`w-5 h-5 transition-transform ${mobileTreatmentsOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileTreatmentsOpen && (
                    <div className="bg-slate-50 rounded-lg mb-2 overflow-hidden">
                        {/* Mobile General */}
                        <div className="bg-gray-100 px-6 py-2 text-xs font-bold text-slate-500 uppercase">General</div>
                        {treatmentsList.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleServiceClick(item.id)}
                                className="block w-full text-left px-6 py-3 text-sm text-slate-600 border-b border-gray-200 last:border-0"
                            >
                                {item.title}
                            </button>
                        ))}
                        {/* Mobile Emergency */}
                        <div className="bg-red-100 px-6 py-2 text-xs font-bold text-red-600 uppercase mt-2">Emergency Cases</div>
                        {emergencyCasesList.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleConditionClick(item.id)}
                                className="block w-full text-left px-6 py-3 text-sm text-slate-600 border-b border-gray-200 last:border-0 hover:bg-red-50"
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <button onClick={handleFeesClick} className="block w-full text-left px-3 py-4 text-base font-medium text-slate-700 hover:bg-gray-50 rounded-md border-t border-gray-100">Fees</button>
            <button onClick={handleContactLinkClick} className="block w-full text-left px-3 py-4 text-base font-medium text-slate-700 hover:bg-gray-50 rounded-md border-t border-gray-100">Contact Us</button>
            <button onClick={handleBlogLinkClick} className="block w-full text-left px-3 py-4 text-base font-medium text-slate-700 hover:bg-gray-50 rounded-md border-t border-gray-100">Blog</button>
            <button 
                onClick={handleBookClick}
                className="block w-full text-left px-3 py-4 text-base font-bold text-white bg-medical-600 rounded-md text-center mt-4 shadow-md"
            >
                Book Your Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;