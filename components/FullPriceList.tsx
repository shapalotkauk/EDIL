import React, { useEffect } from 'react';
import { Check, Banknote, Calendar, ArrowRight } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import Footer from './Footer';
import Header from './Header';

interface FullPriceListProps {
  onBack: () => void;
  onOpenFees?: () => void;
  onSelectService?: (id: string) => void;
  onSelectCondition?: (id: string) => void;
  onContactClick?: () => void;
}

interface PriceItem {
  service: string;
  member: string;
  standard: string;
  saving: string;
  category?: string;
  highlight?: boolean;
}

const allPrices: PriceItem[] = [
  // Emergency / General
  { service: "Emergency Dental", member: "£30", standard: "New Patient Offer", saving: "-", highlight: true, category: "Emergency & General" },
  { service: "Dental Examination", member: "£47.50", standard: "£95", saving: "£47.50", category: "Emergency & General" },
  { service: "X-Ray", member: "£10", standard: "£20", saving: "£10", category: "Emergency & General" },
  { service: "Dental Hygiene", member: "£44.50", standard: "£89", saving: "£44.50", category: "Emergency & General" },
  { service: "Children’s Dentistry", member: "from £47.50", standard: "from £95", saving: "from £47.50", category: "Emergency & General" },
  
  // Restorative
  { service: "Composite filling", member: "from £92.50", standard: "from £185", saving: "from £92.50", category: "Restorative" },
  { service: "Composite Bonding", member: "from £197.50", standard: "from £395", saving: "from £197.50", category: "Restorative" },
  { service: "Root canal Front", member: "from £247.50", standard: "from £495", saving: "from £247.50", category: "Restorative" },
  { service: "Root canal Premolar", member: "from £297.50", standard: "from £595", saving: "from £297.50", category: "Restorative" },
  { service: "Root canal Molar", member: "from £322.50", standard: "from £645", saving: "from £322.50", category: "Restorative" },
  { service: "Crowns", member: "from £497.50", standard: "from £995", saving: "from £497.50", category: "Restorative" },
  { service: "Inlays & Onlays", member: "from £497.50", standard: "from £995", saving: "from £497.50", category: "Restorative" },
  { service: "Bridge (per unit)", member: "from £497.50", standard: "from £995", saving: "from £497.50", category: "Restorative" },

  // Surgical / Extractions
  { service: "Extractions Simple", member: "from £125", standard: "from £250", saving: "from £125", category: "Surgical" },
  { service: "Extractions Complicated", member: "from £225", standard: "from £450", saving: "from £225", category: "Surgical" },
  { service: "Extractions Surgical", member: "from £325", standard: "from £650", saving: "from £325", category: "Surgical" },
  { service: "Frenectomy", member: "£175", standard: "£350", saving: "£175", category: "Surgical" },
  { service: "Perio", member: "from £425", standard: "from £850", saving: "from £425", category: "Surgical" },
  { service: "Gum contouring", member: "From £100", standard: "From £200", saving: "From £100", category: "Surgical" },

  // Cosmetic
  { service: "Teeth Whitening", member: "£247.50", standard: "£495", saving: "£247.50", category: "Cosmetic" },
  { service: "Composite Veneer", member: "from £297.50", standard: "from £595", saving: "from £297.50", category: "Cosmetic" },
  { service: "Porcelain Veneer", member: "from £547.50", standard: "from £1095", saving: "from £547.50", category: "Cosmetic" },
  
  // Orthodontics & Retainers
  { service: "Pro-aligners (Invisible braces)", member: "From £1000", standard: "From £2000", saving: "From £1000", category: "Orthodontics" },
  { service: "Removable Retainer (per arch)", member: "£150", standard: "£300", saving: "£150", category: "Orthodontics" },
  { service: "Fixed Retainer (Per arch)", member: "£175", standard: "£350", saving: "£175", category: "Orthodontics" },
  { service: "Mouthguards", member: "£297.50", standard: "£595", saving: "£297.50", category: "Orthodontics" },

  // Prosthetics (Dentures/Implants)
  { service: "Acrylic Denture Partial", member: "from £397.50", standard: "from £795", saving: "from £397.50", category: "Prosthetics" },
  { service: "Acrylic Denture Full", member: "from £547.50", standard: "from £1095", saving: "from £547.50", category: "Prosthetics" },
  { service: "Cobalt-Chrome Denture", member: "£697.50", standard: "£1395", saving: "£697.50", category: "Prosthetics" },
  { service: "Valplast/Flexi Denture", member: "£447.50", standard: "£895", saving: "£447.50", category: "Prosthetics" },
  { service: "Dental Implants + crown", member: "from £1475", standard: "from £2950", saving: "from £1475", category: "Prosthetics" },
  
  // Preventive
  { service: "Fissure sealant (per tooth)", member: "£32.50", standard: "£65", saving: "£32.50", category: "Preventive" },
  { service: "Fluoride treatment", member: "£20", standard: "£40", saving: "£20", category: "Preventive" },
];

const FullPriceList: React.FC<FullPriceListProps> = ({ 
  onBack,
  onOpenFees,
  onSelectService,
  onSelectCondition,
  onContactClick
}) => {
  const { openBooking } = useBooking();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Dental Fees & Pricing | Emergency Dentist London";
  }, []);

  // Group by category
  const categories = Array.from(new Set(allPrices.map(p => p.category)));

  return (
    <div className="min-h-screen bg-white animate-in fade-in slide-in-from-bottom-4 duration-300 flex flex-col">
      <Header 
        onOpenFees={onOpenFees}
        onSelectService={onSelectService}
        onSelectCondition={onSelectCondition}
        onContactClick={onContactClick}
      />

      {/* Hero Section */}
      <div className="relative h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80" 
                alt="Dental Clinic Reception" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-md rounded-full text-white mb-6 border border-white/20">
                <Banknote className="w-6 h-6" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-md">
                Complete Fee Guide
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto font-medium">
                Transparent pricing for all our dental treatments. <br/>
                <span className="text-yellow-400 font-bold">Join our membership to save 50%</span>
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow w-full py-16">
        
        {/* Categories */}
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-medical-50 px-6 py-4 border-b border-medical-100">
                <h2 className="text-xl font-bold text-medical-800">{category}</h2>
              </div>
              
              <div className="grid grid-cols-12 bg-gray-50/50 border-b border-gray-100 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <div className="col-span-6 md:col-span-5 p-4 pl-6">Treatment</div>
                <div className="col-span-3 md:col-span-3 p-4 text-center">Member Price*</div>
                <div className="col-span-3 md:col-span-2 p-4 text-center">Standard</div>
                <div className="hidden md:block col-span-2 p-4 text-center text-green-600">Saving</div>
              </div>

              <div className="divide-y divide-gray-100">
                {allPrices.filter(p => p.category === category).map((item, index) => (
                  <div key={index} className={`grid grid-cols-12 items-center hover:bg-gray-50 transition-colors ${item.highlight ? 'bg-yellow-50' : ''}`}>
                    <div className="col-span-6 md:col-span-5 p-4 pl-6">
                      <span className={`block font-medium ${item.highlight ? 'text-medical-700 font-bold' : 'text-slate-700'}`}>
                        {item.service}
                      </span>
                      {item.highlight && <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold bg-yellow-100 text-yellow-800 uppercase">Special Offer</span>}
                    </div>
                    <div className="col-span-3 md:col-span-3 p-4 text-center bg-medical-50/30 h-full flex items-center justify-center">
                      <span className="font-bold text-slate-900">{item.member}</span>
                    </div>
                    <div className="col-span-3 md:col-span-2 p-4 text-center flex flex-col justify-center">
                      <span className="text-slate-500 line-through decoration-slate-300 decoration-1 text-sm">{item.standard}</span>
                      <span className="md:hidden text-green-600 text-xs font-bold mt-1">Save {item.saving}</span>
                    </div>
                    <div className="hidden md:flex col-span-2 p-4 text-center items-center justify-center">
                      <span className="font-bold text-green-600">{item.saving}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-12 bg-blue-50 rounded-xl p-8 border border-blue-100 text-center">
          <p className="text-blue-800 mb-6">
            <strong>Please Note:</strong> Prices starting with "from" are indicative and depend on the complexity of the case. 
            A full treatment plan and cost breakdown will be provided after your consultation.
          </p>
          <div className="flex justify-center gap-4">
            <button 
                onClick={openBooking}
                className="inline-flex items-center justify-center px-8 py-3 bg-medical-600 hover:bg-medical-700 text-white rounded-full font-bold transition-all shadow-md"
            >
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Appointment
            </button>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default FullPriceList;