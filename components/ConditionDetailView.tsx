import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, AlertTriangle, Calendar, Phone, Activity, ArrowRight, Star, Clock } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import TeamSlider from './TeamSlider';
import Testimonials from './Testimonials';
import ContactSection from './ContactSection';
import Header from './Header';
import Footer from './Footer';

interface ConditionDetail {
  id: string;
  title: string;
  heroImage: string;
  content: React.ReactNode;
  pricing: { item: string; price: string }[];
  beforeAfter: { before: string; after: string; label: string }[];
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

// Helper for generating placeholder images if needed, mostly using Unsplash for realism
const beforeAfterImages = {
  trauma: [
    { before: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=600&h=400&q=80", after: "https://images.unsplash.com/photo-1606811971618-4486d14f3f72?auto=format&fit=crop&w=600&h=400&q=80", label: "Front Tooth Repair" },
    { before: "https://plus.unsplash.com/premium_photo-1661772661721-b16346deb5b0?auto=format&fit=crop&w=600&h=400&q=80", after: "https://images.unsplash.com/photo-1598256989337-1296b4859a2a?auto=format&fit=crop&w=600&h=400&q=80", label: "Chipped Incisor Bonding" }
  ],
  toothache: [
     { before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&h=400&q=80", after: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&h=400&q=80", label: "Deep Decay Treatment" },
     { before: "https://images.unsplash.com/photo-1609840114035-1c29046a8af3?auto=format&fit=crop&w=600&h=400&q=80", after: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=600&h=400&q=80", label: "Healthy Gum Restoration" }
  ],
  gum: [
      { before: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=600&h=400&q=80", after: "https://images.unsplash.com/photo-1598256989337-1296b4859a2a?auto=format&fit=crop&w=600&h=400&q=80", label: "Abscess Drainage & Healing" },
      { before: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&h=400&q=80", after: "https://images.unsplash.com/photo-1609840114035-1c29046a8af3?auto=format&fit=crop&w=600&h=400&q=80", label: "Gum Health Restoration" }
  ],
  crown: [
      { before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&h=400&q=80", after: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=600&h=400&q=80", label: "Crown Replacement" },
      { before: "https://images.unsplash.com/photo-1598256989337-1296b4859a2a?auto=format&fit=crop&w=600&h=400&q=80", after: "https://images.unsplash.com/photo-1606811971618-4486d14f3f72?auto=format&fit=crop&w=600&h=400&q=80", label: "Bridge Restoration" }
  ],
  denture: [
      { before: "https://images.unsplash.com/photo-1609840114035-1c29046a8af3?auto=format&fit=crop&w=600&h=400&q=80", after: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&h=400&q=80", label: "Denture Fracture Repair" },
      { before: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&h=400&q=80", after: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=600&h=400&q=80", label: "New Acrylic Denture" }
  ],
  injury: [
      { before: "https://images.unsplash.com/photo-1598256989337-1296b4859a2a?auto=format&fit=crop&w=600&h=400&q=80", after: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=600&h=400&q=80", label: "Soft Tissue Healing" },
      { before: "https://images.unsplash.com/photo-1606811971618-4486d14f3f72?auto=format&fit=crop&w=600&h=400&q=80", after: "https://images.unsplash.com/photo-1609840114035-1c29046a8af3?auto=format&fit=crop&w=600&h=400&q=80", label: "Composite Bonding Repair" }
  ]
};

const UrgencyBanner: React.FC<{ openBooking: () => void }> = ({ openBooking }) => (
  <div className="my-10 bg-gradient-to-r from-red-50 to-white border-l-4 border-red-500 p-6 sm:p-8 rounded-r-2xl shadow-sm">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-center md:text-left">
        <h3 className="text-xl font-bold text-red-900 mb-2 flex items-center justify-center md:justify-start">
          <AlertTriangle className="w-6 h-6 mr-2 text-red-600" />
          Don't Suffer in Silence
        </h3>
        <p className="text-red-800 text-lg">
          Dental pain worsens with time. Immediate treatment prevents infection spread and saves teeth.
        </p>
        <p className="text-red-700 font-semibold mt-2 flex items-center justify-center md:justify-start">
           <Clock className="w-4 h-4 mr-1" /> Same-day appointments available now.
        </p>
      </div>
      <button
        onClick={openBooking}
        className="flex-shrink-0 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full shadow-lg hover:shadow-red-200 transition-all transform hover:scale-105 animate-pulse"
      >
        Book Emergency Visit
      </button>
    </div>
  </div>
);

const BeforeAfterGallery: React.FC<{ images: { before: string; after: string; label: string }[] }> = ({ images }) => (
  <div className="my-16">
    <div className="text-center mb-8">
        <span className="bg-medical-50 text-medical-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Results</span>
        <h3 className="text-2xl font-bold text-slate-900 mt-2">Real Patient Results</h3>
        <p className="text-slate-500">Examples of our emergency restorative work.</p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-8">
      {images.map((img, idx) => (
        <div key={idx} className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 transform hover:-translate-y-1 transition-transform duration-300">
           <div className="flex gap-2 mb-4">
              <div className="relative flex-1 group">
                 <div className="overflow-hidden rounded-lg">
                    <img src={img.before} alt="Before" className="object-cover w-full h-48 group-hover:scale-110 transition-transform duration-500" />
                 </div>
                 <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">Before</div>
              </div>
              <div className="relative flex-1 group">
                 <div className="overflow-hidden rounded-lg">
                    <img src={img.after} alt="After" className="object-cover w-full h-48 group-hover:scale-110 transition-transform duration-500" />
                 </div>
                 <div className="absolute top-2 left-2 bg-green-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                    <CheckCircle2 className="w-3 h-3 mr-1" /> After
                 </div>
              </div>
           </div>
           <div className="bg-slate-50 p-3 rounded-lg text-center">
             <p className="font-bold text-slate-700 text-sm">{img.label}</p>
           </div>
        </div>
      ))}
    </div>
  </div>
);

const conditionData: Record<string, ConditionDetail> = {
  'c1': {
    id: 'c1',
    title: 'Dental Trauma',
    heroImage: "https://images.unsplash.com/photo-1606811971618-4486d14f3f72?auto=format&fit=crop&w=1920&q=80",
    content: (
      <>
        <p><strong>Dental trauma</strong> refers to injury to the teeth and/or gums, and surrounding soft tissues. This can include knocked-out teeth (avulsion), dislodged teeth (luxation), or broken/fractured teeth.</p>
        <p>Time is of the essence. If a tooth is knocked out, see us within 60 minutes for the best chance of saving it. Handle the tooth by the crown (top), not the root.</p>
        <h3>Common Causes</h3>
        <ul>
          <li>Sports injuries (contact sports)</li>
          <li>Falls or accidents</li>
          <li>Biting down on hard objects</li>
        </ul>
      </>
    ),
    pricing: [
      { item: "Emergency Exam", price: "£30" },
      { item: "Splinting (per tooth)", price: "from £150" },
      { item: "Composite Bonding", price: "from £197.50" },
      { item: "Re-implantation", price: "from £250" },
    ],
    beforeAfter: beforeAfterImages.trauma,
    seo: {
      title: "Emergency Dental Trauma Treatment London | Knocked Out Tooth",
      description: "Urgent care for dental trauma in London. Knocked out or broken teeth treated immediately. Call 020 3137 6356.",
      keywords: "dental trauma london, knocked out tooth, broken tooth emergency, sports dental injury"
    }
  },
  'c2': {
    id: 'c2',
    title: 'Severe Toothache',
    heroImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1920&q=80",
    content: (
      <>
        <p>A severe, throbbing toothache is often a sign of irreversible pulpitis (dying nerve) or an abscess. It rarely resolves on its own and requires professional intervention to relieve the pressure and pain.</p>
        <p>We can numb the tooth immediately and perform the necessary treatment (usually starting a root canal or extraction) to get you out of pain instantly.</p>
      </>
    ),
    pricing: [
      { item: "Emergency Exam", price: "£30" },
      { item: "X-Ray", price: "£10" },
      { item: "Root Canal (Start)", price: "from £247.50" },
      { item: "Extraction", price: "from £125" },
    ],
    beforeAfter: beforeAfterImages.toothache,
    seo: {
      title: "Severe Toothache Relief London | Emergency Dentist",
      description: "Stop tooth pain now. Same-day appointments for severe toothache in Central London. Open weekends.",
      keywords: "toothache relief london, severe tooth pain, emergency dentist toothache, pulpitis treatment"
    }
  },
  'c3': {
    id: 'c3',
    title: 'Swollen Gums / Abscess',
    heroImage: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1920&q=80",
    content: (
      <>
        <p>Swelling in the gums or face usually indicates a bacterial infection or <strong>dental abscess</strong>. This is a serious condition that can spread to the jaw, neck, or even the bloodstream (sepsis) if left untreated.</p>
        <p>Antibiotics alone are often not enough; the source of infection (the tooth) must be treated via drainage, root canal, or extraction.</p>
      </>
    ),
    pricing: [
      { item: "Emergency Exam", price: "£30" },
      { item: "Abscess Drainage", price: "from £100" },
      { item: "Antibiotics (if needed)", price: "£15" },
      { item: "Root Canal", price: "from £247.50" },
    ],
    beforeAfter: beforeAfterImages.gum,
    seo: {
      title: "Dental Abscess Treatment London | Swollen Gums Emergency",
      description: "Urgent treatment for dental abscesses and swollen gums. Prevent infection spread. Call for immediate drainage.",
      keywords: "dental abscess london, swollen gums, gum infection, emergency dentist abscess"
    }
  },
  'c4': {
    id: 'c4',
    title: 'Lost Crown or Filling',
    heroImage: "https://images.unsplash.com/photo-1598256989337-1296b4859a2a?auto=format&fit=crop&w=1920&q=80",
    content: (
      <>
        <p>Losing a crown or filling exposes the sensitive underlying tooth structure to air, temperature, and bacteria. This can cause sharp pain and allows decay to progress rapidly.</p>
        <p>If you have the crown, bring it with you! We may be able to re-cement it. If not, we can place a temporary or new permanent restoration.</p>
      </>
    ),
    pricing: [
      { item: "Emergency Exam", price: "£30" },
      { item: "Re-cement Crown", price: "from £65" },
      { item: "Temporary Filling", price: "from £50" },
      { item: "New Crown", price: "from £497.50" },
    ],
    beforeAfter: beforeAfterImages.crown,
    seo: {
      title: "Lost Crown Repair London | Emergency Dentist",
      description: "Lost a filling or crown? We can re-cement or replace it same-day. Protect your tooth from further damage.",
      keywords: "lost crown london, lost filling repair, recement crown, emergency dentist restoration"
    }
  },
  'c5': {
    id: 'c5',
    title: 'Broken Denture',
    heroImage: "https://images.unsplash.com/photo-1609840114035-1c29046a8af3?auto=format&fit=crop&w=1920&q=80",
    content: (
      <>
        <p>A broken denture can affect your ability to eat and speak. Whether it is a clean break down the middle or a snapped clasp, do <strong>not</strong> use superglue to fix it, as this can make professional repair impossible.</p>
        <p>We work with expert technicians who can often repair dentures within 24 hours.</p>
      </>
    ),
    pricing: [
      { item: "Denture Repair (Simple)", price: "from £95" },
      { item: "Denture Repair (Complex)", price: "from £150" },
      { item: "Addition of Tooth", price: "from £120" },
      { item: "New Denture (Acrylic)", price: "from £397.50" },
    ],
    beforeAfter: beforeAfterImages.denture,
    seo: {
      title: "Emergency Denture Repair London | Same Day Fix",
      description: "Broken denture? We offer fast denture repairs in Central London. Don't glue it, let us fix it professionally.",
      keywords: "denture repair london, broken denture, fix false teeth, emergency dental lab"
    }
  },
  'c6': {
    id: 'c6',
    title: 'Dental Injury / Soft Tissue',
    heroImage: "https://images.unsplash.com/photo-1598256989337-1296b4859a2a?auto=format&fit=crop&w=1920&q=80",
    content: (
      <>
        <p>Injuries to the lips, cheeks, or tongue can bleed heavily and be very distressing. This category also includes orthodontic emergencies, like snapped wires cutting the cheek.</p>
        <p>We can provide sutures (stitches), smooth sharp teeth, or clip orthodontic wires to make you comfortable and aid healing.</p>
      </>
    ),
    pricing: [
      { item: "Emergency Exam", price: "£30" },
      { item: "Sutures (Stitches)", price: "from £50" },
      { item: "Smoothing Sharp Tooth", price: "from £50" },
      { item: "Ortho Wire Adjustment", price: "from £50" },
    ],
    beforeAfter: beforeAfterImages.injury,
    seo: {
      title: "Dental Injury Treatment London | Cuts and Trauma",
      description: "Emergency care for mouth injuries, cuts, and orthodontic emergencies in London. Call 020 3137 6356.",
      keywords: "mouth injury london, dental stitches, cut lip dentist, orthodontic emergency"
    }
  }
};

interface ConditionDetailViewProps {
  conditionId: string;
  onBack: () => void;
  onOpenFees?: () => void;
  onSelectService?: (id: string) => void;
  onSelectCondition?: (id: string) => void;
  onContactClick?: () => void;
  onBlogClick?: () => void;
}

const ConditionDetailView: React.FC<ConditionDetailViewProps> = ({ 
  conditionId, 
  onBack,
  onOpenFees,
  onSelectService,
  onSelectCondition,
  onContactClick,
  onBlogClick
}) => {
  const { openBooking } = useBooking();
  const condition = conditionData[conditionId];

  useEffect(() => {
    window.scrollTo(0, 0);

    // Dynamic SEO Injection
    if (condition && condition.seo) {
        document.title = condition.seo.title;
        
        // Helper to set meta tags
        const setMetaTag = (name: string, content: string) => {
            let meta = document.querySelector(`meta[name="${name}"]`);
            if (!meta) {
                meta = document.createElement('meta');
                meta.setAttribute('name', name);
                document.head.appendChild(meta);
            }
            meta.setAttribute('content', content);
        };

        setMetaTag('description', condition.seo.description);
        setMetaTag('keywords', condition.seo.keywords);
    }

    // Cleanup: Reset title to default when unmounting
    return () => {
        document.title = 'Emergency Dentist Central London (South Kensington) | 24/7 Urgent Care';
    };
  }, [conditionId, condition]);

  if (!condition) return <div>Condition not found</div>;

  return (
    <div className="min-h-screen bg-white animate-in fade-in slide-in-from-right-8 duration-300 flex flex-col">
      {/* Navigation Bar */}
      <Header 
        onOpenFees={onOpenFees}
        onSelectService={onSelectService}
        onSelectCondition={onSelectCondition}
        onContactClick={onContactClick}
        onBlogClick={onBlogClick}
        variant="overlay"
      />

      {/* Hero Section */}
      <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img 
                src={condition.heroImage} 
                alt={condition.title} 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600 text-white font-bold text-sm mb-6 shadow-lg animate-pulse">
                <AlertTriangle className="w-4 h-4" />
                Emergency Case
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-md">
                {condition.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto drop-shadow-sm font-medium">
                Expert emergency care in Central London. Same-day appointments available.
            </p>
        </div>
      </div>

      <div className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Main Content */}
          <div className="prose prose-lg text-slate-600 mb-8 leading-relaxed mx-auto text-justify sm:text-left">
              {condition.content}
          </div>

          {/* Strong CTA - Don't Delay */}
          <UrgencyBanner openBooking={openBooking} />

          {/* Central Before/After Gallery */}
          <BeforeAfterGallery images={condition.beforeAfter} />

          {/* Secondary Trust CTA */}
          <div className="bg-medical-600 rounded-2xl p-8 text-center text-white mb-12 shadow-lg bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
               <h3 className="text-2xl font-bold mb-2">Don't Delay Your Treatment</h3>
               <p className="text-medical-100 mb-6 text-lg">We have emergency slots available today. Relieve your pain instantly.</p>
               <button 
                onClick={openBooking}
                className="bg-white text-medical-700 font-bold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition-colors"
               >
                Book Same-Day Appointment
               </button>
          </div>

          {/* Pricing Table */}
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-12 shadow-sm">
              <div className="bg-white px-6 py-4 border-b border-slate-200 flex justify-between items-center">
                  <h3 className="font-bold text-slate-800 flex items-center text-lg">
                      <Activity className="w-5 h-5 mr-2 text-medical-600" />
                      Treatment Costs
                  </h3>
              </div>
              <div className="divide-y divide-slate-200">
                  {condition.pricing.map((p, idx) => (
                      <div key={idx} className="flex justify-between px-6 py-4 hover:bg-white transition-colors items-center">
                          <span className="font-medium text-slate-700">{p.item}</span>
                          <span className="font-bold text-medical-700 bg-medical-50 px-3 py-1 rounded-lg">{p.price}</span>
                      </div>
                  ))}
              </div>
              <div className="p-4 bg-gray-50 text-center text-xs text-slate-400">
                  * Prices are indicative. Full plan provided after assessment.
              </div>
          </div>

          {/* Final Actions */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                  onClick={openBooking}
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-medical-600 hover:bg-medical-700 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                  Book Emergency Appointment
                  <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <a
                  href="tel:02031376356"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-200 text-lg font-bold rounded-full text-slate-700 bg-white hover:bg-slate-50 transition-all"
              >
                  <Phone className="mr-2 w-5 h-5 text-slate-400" />
                  020 3137 6356
              </a>
          </div>

        </div>
      </div>

      {/* Full Width Footer Sections */}
      <div className="mt-auto">
        <div className="border-t border-slate-200 bg-slate-50">
             <TeamSlider />
        </div>
        <div className="border-t border-slate-200">
             <Testimonials />
        </div>
        <div className="border-t border-slate-200">
             <ContactSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ConditionDetailView;