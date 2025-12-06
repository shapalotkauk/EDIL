import React from 'react';
import { AlertCircle, ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const EmergencyCriteria: React.FC = () => {
  const { openBooking } = useBooking();

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          
          {/* Text Content */}
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
              When Should You Look for <span className="text-medical-600">Emergency Dental Care?</span>
            </h2>
            <div className="prose prose-lg text-slate-500 mb-8">
              <p className="mb-4">
                Dental emergencies often happen without warning. Knowing when to seek professional help is crucial to saving a tooth, stopping pain, and preventing infection from spreading.
              </p>
              <p>
                In general, if you are suffering from <strong>severe pain</strong>, have <strong>active bleeding</strong>, or have suffered <strong>trauma to the mouth</strong>, you should not wait. Our London emergency clinic prioritizes these cases to provide same-day relief.
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl mb-10">
              <div className="flex">
                <AlertCircle className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-orange-900">Not sure if it's an emergency?</h4>
                  <p className="text-sm text-orange-800 mt-1">
                    It is always better to be safe. Call our triage team at <a href="tel:02031376356" className="font-bold underline">020 3137 6356</a> for immediate advice.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
               <button
                  onClick={openBooking}
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-medical-600 hover:bg-medical-700 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer"
               >
                  Book Emergency Slot
                  <ArrowRight className="ml-2 w-5 h-5" />
               </button>
               <a
                  href="tel:02031376356"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-200 text-lg font-bold rounded-full text-slate-700 bg-white hover:bg-slate-50 shadow-sm transition-all"
               >
                  <Phone className="mr-2 w-5 h-5 text-slate-400" />
                  020 3137 6356
               </a>
            </div>
          </div>

          {/* Checklist */}
          <div className="space-y-4">
            {[
              {
                title: "Severe Tooth Pain",
                desc: "Persistent, throbbing pain that isn't relieved by over-the-counter painkillers often indicates deep decay or infection."
              },
              {
                title: "Knocked-Out Tooth",
                desc: "A medical emergency. If reimplanted within an hour, the tooth has the highest chance of survival. Call us immediately."
              },
              {
                title: "Dental Abscess or Swelling",
                desc: "Swelling in your gums, face, or neck signals infection. If left untreated, it can spread to other parts of the body."
              },
              {
                title: "Uncontrollable Bleeding",
                desc: "If bleeding from a dental injury or recent extraction doesn't stop after applying pressure for 20 minutes, seek help."
              },
              {
                title: "Lost Filling or Crown",
                desc: "Leaving inner tooth tissue exposed can lead to further damage and sensitivity. We can restore your tooth same-day."
              },
              {
                title: "Broken Orthodontics",
                desc: "Wires sticking out or broken brackets causing pain or injury to your cheeks or gums."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex gap-4 hover:bg-white hover:shadow-md transition-all duration-300 group">
                <div className="mt-1 bg-white p-2 rounded-full border border-slate-200 group-hover:border-medical-200 group-hover:bg-medical-50 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-medical-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                  <p className="text-slate-600 mt-1 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default EmergencyCriteria;