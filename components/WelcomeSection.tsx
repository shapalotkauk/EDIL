import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';

const WelcomeSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-4">
            Welcome to Emergency Dentist London
            </h2>
            <div className="inline-block bg-medical-50 border border-medical-100 rounded-full px-6 py-2 shadow-sm">
                <p className="text-lg text-medical-700 font-bold">
                Private Emergency Dental Examination is from ONLY £30*
                </p>
            </div>
        </div>
        
        {/* Content */}
        <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-justify sm:text-left">
          <p>
            Dental emergencies may come up anytime, leading to intense pain, discomfort and distress. For those seeking a reliable emergency dental clinic or an experienced emergency dentist in <span className="font-semibold text-slate-900">Central London</span>, our clinic delivers prompt, quick, same-day urgent dental care at affordable rates.
          </p>
          
          <p>
            Conveniently located at <span className="font-semibold text-slate-900">20 Old Brompton Road</span>, we are right next to <span className="font-semibold text-medical-700">South Kensington Tube Station</span>, making us easily accessible from anywhere in London. We’re here to deliver expert and compassionate dental care when you need it most.
          </p>
          
          <p>
            Our emergency dental services are available out of routine working hours – on evenings, weekends and bank holidays – allowing you to seek prompt care for any of the following urgent dental problems including extreme toothache, loose crown or filling, broken or lost dentures, cracked or knocked-out tooth, swollen face or gums, dental injury or trauma, and immediate pain relief.
          </p>
          
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 my-8">
            <p className="mb-0">
              We are open between <span className="font-semibold text-slate-900">9 am and 6 pm on all weekdays</span> (Monday to Friday) and accept patients on <span className="font-semibold text-slate-900">weekends (Saturday and Sunday)</span> only through appointment. For booking an emergency appointment, just give us a call on <a href="tel:02031376356" className="font-bold text-medical-600 hover:underline">020 3137 6356</a>. Our team is always ready to help you with any type of dental emergencies.
            </p>
          </div>
        </div>
        
        {/* Call to Action Footer */}
        <div className="mt-10 text-center">
             <p className="text-xl font-bold text-urgent-700 animate-pulse flex items-center justify-center gap-2">
            <Clock className="w-6 h-6" />
            Never delay! Your tooth emergency needs immediate professional attention!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;