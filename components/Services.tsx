import React from 'react';
import { Zap, ShieldAlert, Activity, HeartPulse, Sparkles, AlertTriangle, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Severe Toothache',
    description: 'Throbbing or sharp pain keeping you awake? We diagnose the root cause and provide instant pain relief.',
    price: 'Exam £47.50',
    iconName: 'Zap'
  },
  {
    id: '2',
    title: 'Broken / Chipped Tooth',
    description: 'Trauma to the mouth? We repair fractures and restore your smile using composite bonding or crowns.',
    price: 'from £92.50',
    iconName: 'AlertTriangle'
  },
  {
    id: '3',
    title: 'Dental Abscess',
    description: 'Swelling and fever indicate infection. Urgent antibiotic treatment and drainage may be required.',
    price: 'Exam £47.50',
    iconName: 'ShieldAlert'
  },
  {
    id: '4',
    title: 'Lost Filling / Crown',
    description: 'Exposed sensitive nerves can be agonizing. We replace lost restorations quickly and durably.',
    price: 'from £92.50',
    iconName: 'Activity'
  },
  {
    id: '5',
    title: 'Wisdom Tooth Pain',
    description: 'Impacted wisdom teeth causing jaw pain? We offer extraction or management plans.',
    price: 'from £125',
    iconName: 'HeartPulse'
  },
  {
    id: '6',
    title: 'Root Canal',
    description: 'Save your tooth. We perform emergency root canal extirpation to stop infection spread.',
    price: 'from £247.50',
    iconName: 'Sparkles'
  }
];

const IconMap: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-6 h-6" />,
  AlertTriangle: <AlertTriangle className="w-6 h-6" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />,
  HeartPulse: <HeartPulse className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
};

interface ServicesProps {
  onServiceSelect?: (id: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceSelect }) => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-medical-600 font-semibold tracking-wide uppercase">Our Treatments</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            What we treat
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            We handle all dental emergencies on the spot. Click on a service to learn more.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div 
              key={service.id} 
              onClick={() => onServiceSelect && onServiceSelect(service.id)}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-medical-500 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="rounded-lg inline-flex p-3 bg-medical-50 text-medical-600 ring-4 ring-white group-hover:bg-medical-600 group-hover:text-white transition-colors duration-300">
                  {IconMap[service.iconName]}
                </span>
                <span className="text-sm font-bold text-slate-900 bg-gray-100 px-3 py-1 rounded-full">{service.price}</span>
              </div>
              <div className="mt-4 flex-grow">
                <h3 className="text-lg font-medium text-slate-900 group-hover:text-medical-600 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-50">
                 <button 
                    className="text-sm font-bold text-medical-600 hover:text-medical-500 flex items-center group-hover:translate-x-1 transition-transform"
                 >
                    View Details & Fees <ArrowRight className="ml-1 w-4 h-4" />
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
