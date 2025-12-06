import React from 'react';
import { Check, Info, ShieldCheck, Banknote, ArrowRight } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

interface PriceItem {
  service: string;
  member: string;
  standard: string;
  saving: string;
  highlight?: boolean;
}

// Short list for Emergency Page
const emergencyPrices: PriceItem[] = [
  { service: "Emergency Dental", member: "£30", standard: "New Patient Offer", saving: "-", highlight: true },
  { service: "Dental Examination", member: "£47.50", standard: "£95", saving: "£47.50" },
  { service: "X-Ray", member: "£10", standard: "£20", saving: "£10" },
  { service: "Extractions Simple", member: "from £125", standard: "from £250", saving: "from £125" },
  { service: "Extractions Surgical", member: "from £325", standard: "from £650", saving: "from £325" },
  { service: "Root canal Front", member: "from £247.50", standard: "from £495", saving: "from £247.50" },
  { service: "Root canal Molar", member: "from £322.50", standard: "from £645", saving: "from £322.50" },
  { service: "Composite filling", member: "from £92.50", standard: "from £185", saving: "from £92.50" },
  { service: "Composite Bonding (Broken Tooth)", member: "from £197.50", standard: "from £395", saving: "from £197.50" },
];

interface PricingProps {
  onViewFullPrices: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onViewFullPrices }) => {
  const { openBooking } = useBooking();

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Emergency Dental Costs</h2>
          <p className="mt-4 text-xl text-slate-500">
            Transparent pricing for urgent care. Join our membership plan to save 50%.
          </p>
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="grid grid-cols-12 bg-medical-50 border-b border-medical-100 text-sm font-semibold text-medical-900 sticky top-0">
                <div className="col-span-6 sm:col-span-5 p-4 pl-6 uppercase tracking-wider">Treatment</div>
                <div className="col-span-3 sm:col-span-3 p-4 text-center uppercase tracking-wider bg-medical-100/50">Member Price*</div>
                <div className="col-span-3 sm:col-span-2 p-4 text-center uppercase tracking-wider hidden sm:block">Standard</div>
                <div className="col-span-3 sm:col-span-2 p-4 text-center uppercase tracking-wider text-green-700 hidden sm:block">Saving</div>
            </div>

            <div className="divide-y divide-gray-100">
                {emergencyPrices.map((item, index) => (
                    <div key={index} className={`grid grid-cols-12 items-center hover:bg-gray-50 transition-colors ${item.highlight ? 'bg-yellow-50/50' : ''}`}>
                        <div className="col-span-6 sm:col-span-5 p-4 pl-6">
                            <span className={`font-medium ${item.highlight ? 'text-medical-700 font-bold' : 'text-slate-700'}`}>
                                {item.service}
                            </span>
                            {item.highlight && <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">Special</span>}
                        </div>
                        <div className="col-span-3 sm:col-span-3 p-4 text-center bg-medical-50/30">
                            <span className="font-bold text-slate-900">{item.member}</span>
                        </div>
                        <div className="col-span-3 sm:col-span-2 p-4 text-center hidden sm:block">
                            <span className="text-slate-500 line-through decoration-slate-400 decoration-1">{item.standard}</span>
                        </div>
                        <div className="col-span-3 sm:col-span-2 p-4 text-center hidden sm:block">
                            <span className="font-bold text-green-600">{item.saving}</span>
                        </div>
                        {/* Mobile view for saving */}
                        <div className="col-span-3 sm:hidden p-4 text-right">
                             <span className="text-xs text-slate-400 block line-through">{item.standard}</span>
                             <span className="text-xs text-green-600 font-bold block">Save {item.saving}</span>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="bg-gray-50 p-6 flex flex-col items-center justify-center border-t border-gray-200 gap-4">
                <button 
                    onClick={onViewFullPrices}
                    className="text-medical-600 font-bold hover:text-medical-700 flex items-center group transition-all"
                >
                    View Complete Price List (Implants, Veneers, Braces etc.)
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button 
                    onClick={openBooking}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-medical-600 hover:bg-medical-700 shadow-md transition-all cursor-pointer"
                >
                    Book Your £30 Slot Now
                </button>
            </div>
        </div>

        {/* SEO SECTION: COST EXPLANATION */}
        <div className="mt-16 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-medical-100 p-2 rounded-lg text-medical-600">
                        <Banknote className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">How Much Does an Emergency Dentist Cost in London?</h3>
                </div>
                
                <div className="space-y-6 text-slate-600 leading-relaxed">
                    <p>
                        When dental pain strikes unexpectedly, one of the first concerns is often the <strong>cost of emergency dental treatment</strong>. 
                        At Emergency Dentist London, we are committed to providing high-quality, private urgent care that is both accessible and affordable.
                    </p>

                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                        <h4 className="text-lg font-bold text-slate-900 mb-3">Transparent & Competitive Pricing</h4>
                        <p className="mb-4">
                            We believe in complete transparency. Our fees are published online so you know exactly what to expect. 
                            <strong>Our initial emergency examination fee is just £30 for new patients</strong>, making us one of the most competitively priced private emergency dentists in Central London.
                        </p>
                        <ul className="space-y-2">
                             <li className="flex items-start">
                                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span><strong>Examination:</strong> £30 (Special Offer)</span>
                             </li>
                             <li className="flex items-start">
                                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span><strong>Digital X-Rays:</strong> From £10</span>
                             </li>
                             <li className="flex items-start">
                                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span><strong>Urgent Treatments:</strong> Up to 50% off with our membership plan</span>
                             </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;