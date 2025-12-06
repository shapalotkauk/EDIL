import React from 'react';
import { Clock, HeartPulse, Stethoscope, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const WhatToExpect: React.FC = () => {
  const { openBooking } = useBooking();

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-medical-600 font-semibold tracking-wide uppercase">Patient Experience</h2>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            What to Expect at an Emergency Dentist Appointment
          </h2>
          <p className="mt-4 text-xl text-slate-500">
             We provide your dental emergency with the highest level of skill, speed, and care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-medical-600 mb-6 shadow-sm">
                    <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">1. Availability of Same-Day Appointments</h3>
                <p className="text-slate-600 leading-relaxed">
                    When you call our clinic, we will provide you with the first available appointment that is on the <strong>same day</strong> in most instances. We work 6 days a week, Monday to Saturday, and take emergency patients on weekends by appointment. Our aim is to minimise your pain as soon as possible and get urgent care with no delay.
                </p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-urgent-600 mb-6 shadow-sm">
                    <HeartPulse className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">2. Immediate Pain Relief</h3>
                <p className="text-slate-600 leading-relaxed">
                    If you have severe dental pain, we will first identify the cause of the problem and do everything we can to ease your pain immediately. This might involve <strong>painless anaesthetic injections</strong> to make you comfortable before we start any treatment.
                </p>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-medical-600 mb-6 shadow-sm">
                    <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">3. Same-Day Treatment</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                    Once your pain is under control, we start treatment immediately. Based on your condition, your emergency dentist may:
                </p>
                <ul className="space-y-2">
                    {[
                        "Fix broken dentures, braces, bridges or crowns",
                        "Perform tooth extractions, including wisdom teeth",
                        "Treat abscesses or infections",
                        "Fix chipped or damaged teeth",
                        "Offer temporary or permanent fillings"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-medical-500 mr-2 flex-shrink-0 mt-0.5" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        <div className="mt-12 text-center bg-medical-50 rounded-2xl p-8 border border-medical-100">
            <h3 className="text-xl font-bold text-medical-900 mb-2">Ready to relieve your pain?</h3>
            <p className="text-medical-700 mb-6">Our specialists are ready to see you today.</p>
            <button
              onClick={openBooking}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-medical-600 hover:bg-medical-700 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Book Your Appointment Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;