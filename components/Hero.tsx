import React from 'react';
import { Phone, Calendar, Clock, CheckCircle2, ShieldCheck, Star, MapPin } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const Hero: React.FC = () => {
  const { openBooking } = useBooking();

  return (
    <div className="relative bg-medical-50 pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Abstract Background Pattern */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 opacity-10">
         <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#0EA5E9" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.4,82.2,23.1,70.9,35.3C59.6,47.5,48.3,58.2,35.2,65.3C22.1,72.4,7.2,75.9,-6.9,87.8C-21,99.7,-34.3,120,-46.8,118.8C-59.3,117.6,-71,94.9,-78.9,73.1C-86.8,51.3,-90.9,30.4,-89.6,10.2C-88.3,-10,-81.6,-29.5,-70.6,-45.6C-59.6,-61.7,-44.3,-74.4,-29.3,-80.7C-14.3,-87,-0.4,-86.9,13.4,-86.3C27.2,-85.7,40.9,-84.6,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            
            {/* Social Proof / Rating */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                <div className="flex bg-white px-3 py-1 rounded-full shadow-sm border border-slate-100 items-center gap-2">
                    <div className="flex">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                    </div>
                    <span className="text-xs font-bold text-slate-700">4.9/5 from Google Reviews</span>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-4 h-4" />
                </div>
            </div>

            {/* Location Badge */}
            <div className="flex items-center justify-center lg:justify-start mb-4">
               <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-900 text-white text-sm font-semibold shadow-md">
                  <MapPin className="w-4 h-4 mr-2 text-medical-400" />
                  Central London • Next to South Kensington Station
               </div>
            </div>

            <div className="inline-flex items-center px-3 py-1 rounded-full border border-urgent-600/20 bg-urgent-600/10 text-urgent-700 text-sm font-semibold mb-6 animate-pulse">
              <span className="w-2 h-2 bg-urgent-600 rounded-full mr-2"></span>
              Same-day Emergency Appointments
            </div>
            
            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
              Looking for an <br className="hidden lg:block"/>
              <span className="text-medical-600">Emergency Dentist?</span>
            </h1>
            
            <p className="mt-4 text-xl text-slate-600 font-medium sm:max-w-xl sm:mx-auto lg:mx-0">
              Get Same-day Dental Emergency Appointment in <span className="text-slate-900 font-bold">Central London</span>.
            </p>

            {/* Special Offer Box */}
            <div className="mt-8 bg-white rounded-2xl shadow-xl border-l-4 border-medical-500 relative overflow-hidden max-w-lg mx-auto lg:mx-0">
                <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1 rounded-bl-lg shadow-sm">
                    LIMITED OFFER
                </div>
                <div className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-6">
                        <div>
                            <span className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">New Patient Special</span>
                            <div className="flex items-baseline">
                                <span className="text-sm font-medium text-slate-500 mr-2">Just</span>
                                <span className="text-5xl font-black text-medical-600 tracking-tight">£30</span>
                            </div>
                        </div>
                        <div className="mb-2">
                            <span className="inline-block bg-medical-50 text-medical-700 border border-medical-100 text-xs px-2 py-1 rounded-md font-bold">
                                Only for new patients
                            </span>
                        </div>
                    </div>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                        {['Toothache', 'Swelling', 'Broken Tooth'].map((item) => (
                            <span key={item} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                                <CheckCircle2 className="w-3 h-3 mr-1.5 text-medical-500" />
                                {item}
                            </span>
                        ))}
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-slate-100">
                         <p className="text-xs text-urgent-600 font-medium flex items-center">
                            <Clock className="w-3 h-3 mr-1.5" />
                            Offer Valid Until End of December 2025
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="tel:02031376356"
                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-urgent-600 hover:bg-urgent-700 md:py-4 md:text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 020 3137 6356
              </a>
              <button 
                onClick={openBooking}
                className="flex items-center justify-center px-8 py-3 border-2 border-slate-200 text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 md:py-4 md:text-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <Calendar className="w-5 h-5 mr-2 text-medical-600" />
                Book Your Appointment
              </button>
            </div>
          </div>

          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6">
            <div className="relative mx-auto w-full rounded-2xl shadow-2xl overflow-hidden group">
              <div className="aspect-w-4 aspect-h-3 lg:aspect-none lg:h-[500px]">
                <img
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Dentist treating patient in Central London"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3 text-white mb-2">
                     <ShieldCheck className="w-6 h-6 text-green-400" />
                     <span className="font-semibold text-lg">CQC Registered Practice</span>
                  </div>
                  <p className="text-slate-300 text-sm">State-of-the-art facilities in South Kensington, Central London.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;