import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, AlertTriangle, Banknote, Calendar, Activity, Star } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import Header from './Header';
import Footer from './Footer';

interface ServiceDetail {
  id: string;
  title: string;
  heroImage: string;
  description: string;
  longDescription: string;
  symptoms: string[];
  treatments: string[];
  pricing: {
    item: string;
    member: string;
    standard: string;
  }[];
}

const serviceData: Record<string, ServiceDetail> = {
  '1': {
    id: '1',
    title: 'Severe Toothache',
    heroImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1920&q=80",
    description: 'Throbbing or sharp pain keeping you awake? We diagnose the root cause and provide instant pain relief.',
    longDescription: "A severe toothache is often a sign that the nerve inside the tooth is irritated or infected. This can be caused by deep decay, a crack in the tooth, or gum infection. It is rarely something that goes away on its own and usually requires immediate professional intervention to stop the pain and save the tooth.",
    symptoms: [
      "Sharp, throbbing, or constant pain",
      "Pain when biting down",
      "Sensitivity to hot or cold foods",
      "Swelling around the tooth or jaw",
      "Headache or fever",
      "Bad taste in the mouth"
    ],
    treatments: [
      "Digital X-Rays to diagnose the root cause",
      "Emergency pain relief dressing",
      "Antibiotics if infection is present",
      "Root canal treatment to remove the infected nerve",
      "Tooth extraction (if the tooth cannot be saved)"
    ],
    pricing: [
      { item: "Emergency Assessment", member: "£30", standard: "New Patient Offer" },
      { item: "X-Ray", member: "£10", standard: "£20" },
      { item: "Composite Filling", member: "from £92.50", standard: "from £185" },
      { item: "Root Canal (Front)", member: "from £247.50", standard: "from £495" },
      { item: "Simple Extraction", member: "from £125", standard: "from £250" }
    ]
  },
  '2': {
    id: '2',
    title: 'Broken / Chipped Tooth',
    heroImage: "https://images.unsplash.com/photo-1606811971618-4486d14f3f72?auto=format&fit=crop&w=1920&q=80",
    description: 'Trauma to the mouth? We repair fractures and restore your smile using composite bonding or crowns.',
    longDescription: "Teeth can chip or break due to trauma, biting hard foods, or weakening from old large fillings. While a small chip might just be cosmetic, a deeper break can expose the inner nerve, causing significant pain and risk of infection. We can restore the aesthetics and function of your tooth, often in a single visit.",
    symptoms: [
      "Visible crack or missing part of tooth",
      "Sharp edge felt by tongue",
      "Pain when chewing",
      "Sensitivity to air or temperature",
      "Tooth feeling loose"
    ],
    treatments: [
      "Composite Bonding (for cosmetic chips)",
      "Dental Crown (for structural damage)",
      "Veneers",
      "Smoothing rough edges",
      "Root canal (if the break reaches the nerve)"
    ],
    pricing: [
      { item: "Emergency Assessment", member: "£30", standard: "New Patient Offer" },
      { item: "Composite Bonding", member: "from £197.50", standard: "from £395" },
      { item: "Porcelain Veneer", member: "from £547.50", standard: "from £1095" },
      { item: "Dental Crown", member: "from £497.50", standard: "from £995" },
      { item: "X-Ray", member: "£10", standard: "£20" }
    ]
  },
  '3': {
    id: '3',
    title: 'Dental Abscess',
    heroImage: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1920&q=80",
    description: 'Swelling and fever indicate infection. Urgent antibiotic treatment and drainage may be required.',
    longDescription: "A dental abscess is a pocket of pus caused by bacterial infection. It can be caused by deep decay, gum disease, or a cracked tooth. An abscess can be extremely painful and, if left untreated, the infection can spread to other parts of your face and neck, becoming a serious medical emergency.",
    symptoms: [
      "Severe, persistent, throbbing toothache",
      "Sensitivity to hot and cold temperatures",
      "Sensitivity to the pressure of chewing or biting",
      "Fever",
      "Swelling in your face or cheek",
      "Tender, swollen lymph nodes under your jaw"
    ],
    treatments: [
      "Incision and drainage of the abscess",
      "Root canal treatment to remove infection source",
      "Tooth extraction",
      "Prescription of antibiotics"
    ],
    pricing: [
      { item: "Emergency Assessment", member: "£30", standard: "New Patient Offer" },
      { item: "X-Ray", member: "£10", standard: "£20" },
      { item: "Simple Extraction", member: "from £125", standard: "from £250" },
      { item: "Root Canal (Premolar)", member: "from £297.50", standard: "from £595" },
      { item: "Root Canal (Molar)", member: "from £322.50", standard: "from £645" }
    ]
  },
  '4': {
    id: '4',
    title: 'Lost Filling / Crown',
    heroImage: "https://images.unsplash.com/photo-1598256989337-1296b4859a2a?auto=format&fit=crop&w=1920&q=80",
    description: 'Exposed sensitive nerves can be agonizing. We replace lost restorations quickly and durably.',
    longDescription: "Fillings and crowns can loosen and fall out due to decay underneath them or simply wear and tear over time. When this happens, the sensitive tissue underneath is exposed to air, temperature, and bacteria, which can cause pain and further damage to the remaining tooth structure.",
    symptoms: [
      "Gap or hole in your tooth",
      "Sharp pain when breathing in air",
      "Food getting stuck in the tooth",
      "Sensitivity to sweet or hot/cold foods",
      "Metallic taste (if old filling was metal)"
    ],
    treatments: [
      "Recementing existing crown (if undamaged)",
      "Placing a new composite filling",
      "Fabricating a new crown",
      "Temporary filling/crown for immediate relief"
    ],
    pricing: [
      { item: "Emergency Assessment", member: "£30", standard: "New Patient Offer" },
      { item: "Composite Filling", member: "from £92.50", standard: "from £185" },
      { item: "Recementing Crown", member: "Ask Dentist", standard: "Ask Dentist" },
      { item: "New Crown", member: "from £497.50", standard: "from £995" },
      { item: "Inlays & Onlays", member: "from £497.50", standard: "from £995" }
    ]
  },
  '5': {
    id: '5',
    title: 'Wisdom Tooth Pain',
    heroImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80",
    description: 'Impacted wisdom teeth causing jaw pain? We offer extraction or management plans.',
    longDescription: "Wisdom teeth are the last set of molars to emerge, usually in your late teens or early twenties. They often become 'impacted' (stuck) or grow at an angle, causing pain, infection (pericoronitis), and damage to adjacent teeth. Pain can flare up suddenly and be quite debilitating.",
    symptoms: [
      "Red or swollen gums at the back of the mouth",
      "Jaw pain or swelling around the jaw",
      "Difficulty opening your mouth",
      "Bad breath or an unpleasant taste",
      "Pain radiating to the ear"
    ],
    treatments: [
      "Cleaning the area and prescribing antibiotics",
      "Operculectomy (removing gum flap)",
      "Simple extraction",
      "Surgical extraction (for impacted teeth)"
    ],
    pricing: [
      { item: "Emergency Assessment", member: "£30", standard: "New Patient Offer" },
      { item: "X-Ray", member: "£10", standard: "£20" },
      { item: "Simple Extraction", member: "from £125", standard: "from £250" },
      { item: "Complicated Extraction", member: "from £225", standard: "from £450" },
      { item: "Surgical Extraction", member: "from £325", standard: "from £650" }
    ]
  },
  '6': {
    id: '6',
    title: 'Root Canal',
    heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1920&q=80",
    description: 'Save your tooth. We perform emergency root canal extirpation to stop infection spread.',
    longDescription: "A root canal is a treatment used to repair and save a tooth that is badly decayed or becomes infected. The procedure involves removing the damaged area of the tooth (the pulp), cleaning and disinfecting it, and then filling and sealing it. Contrary to popular belief, modern root canal treatment is usually no more painful than getting a filling.",
    symptoms: [
      "Severe pain while chewing or biting",
      "Pimples on the gums",
      "Chipped or cracked tooth",
      "Lingering sensitivity to hot or cold",
      "Swollen or tender gums",
      "Deep decay or darkening of the gums"
    ],
    treatments: [
      "Emergency extirpation (removing the nerve)",
      "Cleaning and shaping the canals",
      "Filling the canals (Obturation)",
      "Placing a final restoration (Filling or Crown)"
    ],
    pricing: [
      { item: "Emergency Assessment", member: "£30", standard: "New Patient Offer" },
      { item: "Root Canal (Front)", member: "from £247.50", standard: "from £495" },
      { item: "Root Canal (Premolar)", member: "from £297.50", standard: "from £595" },
      { item: "Root Canal (Molar)", member: "from £322.50", standard: "from £645" },
      { item: "X-Ray", member: "£10", standard: "£20" }
    ]
  }
};

interface ServiceDetailViewProps {
  serviceId: string;
  onBack: () => void;
  onOpenFees?: () => void;
  onSelectService?: (id: string) => void;
  onSelectCondition?: (id: string) => void;
  onContactClick?: () => void;
  onBlogClick?: () => void;
}

const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({ 
  serviceId, 
  onBack,
  onOpenFees,
  onSelectService,
  onSelectCondition,
  onContactClick,
  onBlogClick
}) => {
  const { openBooking } = useBooking();
  const service = serviceData[serviceId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) return <div>Service not found</div>;

  return (
    <div className="min-h-screen bg-white animate-in fade-in slide-in-from-right-8 duration-300 flex flex-col">
      {/* Header / Nav */}
      <Header 
        onOpenFees={onOpenFees}
        onSelectService={onSelectService}
        onSelectCondition={onSelectCondition}
        onContactClick={onContactClick}
        onBlogClick={onBlogClick}
        variant="overlay"
      />

      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img 
                src={service.heroImage} 
                alt={service.title} 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/30"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">
             <div className="inline-flex items-center justify-center p-4 bg-white/10 backdrop-blur-md rounded-full text-white mb-6 border border-white/20 shadow-lg">
                <Activity className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-md">
                {service.title}
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto drop-shadow-sm font-medium">
                {service.description}
            </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow">
        
        {/* Long Description */}
        <div className="text-center mb-16">
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                {service.longDescription}
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Symptoms */}
            <div className="bg-rose-50 rounded-2xl p-8 border border-rose-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className="w-6 h-6 text-rose-600" />
                    <h3 className="text-xl font-bold text-slate-900">Common Symptoms</h3>
                </div>
                <ul className="space-y-3">
                    {service.symptoms.map((symptom, idx) => (
                        <li key={idx} className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-rose-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700 font-medium">{symptom}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Treatments */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                    <Activity className="w-6 h-6 text-medical-600" />
                    <h3 className="text-xl font-bold text-slate-900">Treatment Options</h3>
                </div>
                <ul className="space-y-3">
                    {service.treatments.map((treatment, idx) => (
                        <li key={idx} className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-medical-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700 font-medium">{treatment}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 p-2 rounded-lg text-green-700">
                    <Banknote className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Treatment Fees</h3>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="grid grid-cols-12 bg-gray-50 border-b border-gray-200 text-sm font-bold text-slate-500 uppercase tracking-wider">
                    <div className="col-span-6 p-4 pl-6">Service</div>
                    <div className="col-span-3 p-4 text-center text-medical-700 bg-medical-50/50">Member Price*</div>
                    <div className="col-span-3 p-4 text-center">Non-Member</div>
                </div>
                <div className="divide-y divide-gray-100">
                    {service.pricing.map((price, idx) => (
                        <div key={idx} className="grid grid-cols-12 items-center hover:bg-gray-50 transition-colors">
                            <div className="col-span-6 p-4 pl-6 font-medium text-slate-800">{price.item}</div>
                            <div className="col-span-3 p-4 text-center font-bold text-slate-900 bg-medical-50/30 h-full flex items-center justify-center">
                                {price.member}
                            </div>
                            <div className="col-span-3 p-4 text-center text-slate-500">
                                {price.standard}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <p className="mt-4 text-sm text-slate-500 text-center">
                * Prices are indicative. A full treatment plan will be provided after assessment.
            </p>
        </div>

        {/* CTA */}
        <div className="bg-slate-900 rounded-2xl p-8 sm:p-12 text-center text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-10">
                <Activity className="w-64 h-64" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 relative z-10">Don't Delay Treatment</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                Dental emergencies rarely resolve on their own. Early intervention saves teeth and prevents higher costs later.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                <button 
                    onClick={openBooking}
                    className="inline-flex items-center justify-center px-8 py-4 bg-medical-500 hover:bg-medical-600 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Emergency Appt
                </button>
                <a 
                    href="tel:02031376356"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-bold text-lg transition-all"
                >
                    Call 020 3137 6356
                </a>
            </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default ServiceDetailView;