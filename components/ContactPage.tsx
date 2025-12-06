import React, { useEffect } from 'react';
import { MapPin, Phone, Clock, Mail, Calendar, ArrowRight, Train, Bus, Car } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import Header from './Header';
import Footer from './Footer';

interface ContactPageProps {
  onBack: () => void;
  onOpenFees?: () => void;
  onSelectService?: (id: string) => void;
  onSelectCondition?: (id: string) => void;
  onContactClick?: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ 
  onBack,
  onOpenFees,
  onSelectService,
  onSelectCondition,
  onContactClick
}) => {
  const { openBooking } = useBooking();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us | Emergency Dentist Central London";
  }, []);

  return (
    <div className="min-h-screen bg-white animate-in fade-in slide-in-from-bottom-4 duration-300 flex flex-col">
      {/* Navigation */}
      <Header 
        onOpenFees={onOpenFees}
        onSelectService={onSelectService}
        onSelectCondition={onSelectCondition}
        onContactClick={onContactClick}
      />

      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1920&q=80" 
                alt="London South Kensington Street" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-md rounded-full text-white mb-6 border border-white/20">
                <MapPin className="w-6 h-6" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-md">
                Get in Touch
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto font-medium">
                We are located in the heart of South Kensington, Central London. <br/>
                Open 6 days a week for dental emergencies.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-grow">
        
        <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Left Column: Contact Info & Hours */}
            <div className="space-y-8">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Clinic Information</h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        Our emergency dental clinic is designed to be accessible and welcoming. Whether you are a local resident or visiting London, we are here to help.
                    </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm">
                    <ul className="space-y-6">
                        <li className="flex items-start">
                            <div className="flex-shrink-0 bg-medical-100 p-3 rounded-lg text-medical-600">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-bold text-slate-900">Address</h4>
                                <p className="text-slate-600 mt-1">
                                    20 Old Brompton Road<br/>
                                    South Kensington<br/>
                                    London, SW7 3DL
                                </p>
                                <p className="text-sm text-medical-600 font-semibold mt-2">
                                    * Next to South Kensington Tube Station
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="flex-shrink-0 bg-urgent-100 p-3 rounded-lg text-urgent-600">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-bold text-slate-900">Phone</h4>
                                <p className="text-slate-600 mt-1">
                                    <a href="tel:02031376356" className="hover:underline hover:text-urgent-700 transition">020 3137 6356</a>
                                </p>
                                <p className="text-sm text-slate-400 mt-1">Available for emergency triage</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg text-blue-600">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-bold text-slate-900">Email</h4>
                                <p className="text-slate-600 mt-1">
                                    info@emergencydentist.london
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                        <Clock className="w-5 h-5 mr-2 text-medical-600" />
                        Opening Hours
                    </h3>
                    <div className="space-y-3">
                        <div className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="font-medium text-slate-600">Monday</span>
                            <span className="font-bold text-slate-900">9am - 6pm</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="font-medium text-slate-600">Tuesday</span>
                            <span className="font-bold text-slate-900">9am - 8pm</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="font-medium text-slate-600">Wednesday</span>
                            <span className="font-bold text-slate-900">9am - 6pm</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="font-medium text-slate-600">Thursday</span>
                            <span className="font-bold text-slate-900">9am - 8pm</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="font-medium text-slate-600">Friday</span>
                            <span className="font-bold text-slate-900">8am - 5pm</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="font-medium text-slate-600">Saturday</span>
                            <span className="font-bold text-slate-900">10am - 4pm</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium text-urgent-600">Sunday</span>
                            <span className="font-bold text-urgent-600">Closed</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Directions & Map */}
            <div className="flex flex-col h-full">
                <div className="bg-slate-900 text-white rounded-2xl p-8 mb-8 shadow-xl">
                    <h3 className="text-2xl font-bold mb-6">How to get here</h3>
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <Train className="w-6 h-6 text-medical-400 mt-1 flex-shrink-0" />
                            <div className="ml-4">
                                <h4 className="font-bold text-lg">By Tube</h4>
                                <p className="text-slate-300 text-sm mt-1">
                                    We are a 2-minute walk from <span className="text-white font-bold">South Kensington Station</span>. 
                                    Served by the District, Circle, and Piccadilly lines.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Bus className="w-6 h-6 text-medical-400 mt-1 flex-shrink-0" />
                            <div className="ml-4">
                                <h4 className="font-bold text-lg">By Bus</h4>
                                <p className="text-slate-300 text-sm mt-1">
                                    Bus routes 14, 74, 414, C1 and 360 all stop nearby on Old Brompton Road or Cromwell Road.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Car className="w-6 h-6 text-medical-400 mt-1 flex-shrink-0" />
                            <div className="ml-4">
                                <h4 className="font-bold text-lg">Car Parking</h4>
                                <p className="text-slate-300 text-sm mt-1">
                                    Limited metered street parking is available on Thurloe Place and Exhibition Road. We recommend public transport where possible.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-grow rounded-2xl overflow-hidden shadow-lg border border-gray-200 min-h-[400px] relative">
                    <iframe 
                        title="South Kensington Clinic Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.9298533878776!2d-0.17637822402128887!3d51.49615211152011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605666f7f525d%3A0x6b4460596375080e!2s20%20Old%20Brompton%20Rd%2C%20South%20Kensington%2C%20London%20SW7%203DL!5e0!3m2!1sen!2suk!4v1716380000000!5m2!1sen!2suk" 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0"
                    ></iframe>
                </div>
            </div>
        </div>

        {/* CTAs */}
        <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Need Immediate Assistance?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                    onClick={openBooking}
                    className="inline-flex items-center justify-center px-8 py-4 bg-medical-600 hover:bg-medical-700 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Online Now
                </button>
                <a 
                    href="tel:02031376356"
                    className="inline-flex items-center justify-center px-8 py-4 bg-urgent-600 hover:bg-urgent-700 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                >
                    <Phone className="w-5 h-5 mr-2" />
                    Call 020 3137 6356
                </a>
            </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;