import React from 'react';
import { Award, Zap, Smartphone, PhoneCall, Clock, Microscope, HeartHandshake, ArrowRight } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const features = [
  {
    title: "Trained and Competent Dental Staff",
    description: "Our practice boasts a qualified team of dentists and supporting staff who are registered with GDC – ensuring safe, professional, and high-quality care every time you see us.",
    icon: Award,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Immediate Emergency Relief",
    description: "We offer same-day emergency dental treatment for quick pain relief and urgent dental problems without lengthy waiting lists.",
    icon: Zap,
    color: "bg-red-100 text-red-600"
  },
  {
    title: "Convenient Online Booking",
    description: "Arranging your appointment is easy with our protected online booking system – no need to pop into or call us during clinic hours.",
    icon: Smartphone,
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Immediate Phone or Online Access",
    description: "Call us between working hours or book online 24/7 for fast and hassle-free emergency dental care in London.",
    icon: PhoneCall,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Extended Opening Hours",
    description: "We offer early morning to late evening appointment hours as well as weekend appointments – ideal for the working professional or the weekend emergency patient.",
    icon: Clock,
    color: "bg-orange-100 text-orange-600"
  },
  {
    title: "Affordable, State-of-the-Art Treatment",
    description: "We utilise state-of-the-art dental equipment to offer high quality, affordable treatment on all procedures of a dental emergency.",
    icon: Microscope,
    color: "bg-cyan-100 text-cyan-600"
  },
  {
    title: "Caring Treatment for Nervous Patients",
    description: "Our compassionate staff is specially trained to put nervous or anxious patients at ease and relaxed during their experience.",
    icon: HeartHandshake,
    color: "bg-rose-100 text-rose-600"
  }
];

const WhyChooseUs: React.FC = () => {
  const { openBooking } = useBooking();

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-medical-600 font-semibold tracking-wide uppercase">Why Choose Us</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Why Choose Us as Your Emergency Dentist in London?
          </h3>
          <p className="mt-4 text-xl text-slate-500">
            At our clinic, we don’t do only emergency treatment – we specialise in <span className="text-slate-900 font-medium">patient care, affordability and convenience</span>. 
            Here’s why we are a partner of choice for patients in London for emergency dental treatment:
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${index === features.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.color}`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex rounded-md shadow">
            <button
              onClick={openBooking}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-medical-600 hover:bg-medical-700 md:text-xl md:px-10 transition-transform transform hover:scale-105"
            >
              Book Your Appointment Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Don't suffer in pain. We are ready to help you today.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;