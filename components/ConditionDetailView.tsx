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

const conditionData: Record<string, ConditionDetail> = {
  'c1': {
    id: 'c1',
    title: 'Dental Trauma',
    heroImage: "https://images.unsplash.com/photo-1606811971618-4486d14f3f72?auto=format&fit=crop&w=1920&q=80",
    content: (
      <>
        <p className="mb-4">
          Dental trauma refers to any injury to the teeth, gums, or nearby soft tissues. These injuries can range from minor chips to severe fractures or completely knocked-out teeth (avulsion). 
        </p>
        <p className="mb-4">
          The speed at which you seek treatment for dental trauma significantly impacts the long-term prognosis of the tooth. For instance, a knocked-out tooth has the highest chance of being successfully reimplanted if seen by a dentist within 60 minutes.
        </p>
        <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">Types of Trauma We Treat</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-700">
          <li><strong>Luxation:</strong> The tooth is still in the socket but in the wrong position.</li>
          <li><strong>Avulsion:</strong> The tooth has been completely knocked out.</li>
          <li><strong>Root Fracture:</strong> A crack extending into the root.</li>
          <li><strong>Soft Tissue Injury:</strong> Lacerations to the gums or lips.</li>
        </ul>
      </>
    ),
    pricing: [
      { item: "Emergency Assessment", price: "£30 (New Patient Offer)" },
      { item: "Splinting (Stabilizing loose teeth)", price: "from £150" },
      { item: "Re-implantation of Avulsed Tooth", price: "from £250" },
      { item: "Root Canal Treatment", price: "from £247.50*" }
    ],
    beforeAfter: beforeAfterImages.trauma,
    seo: {
        title: "Emergency Dental Trauma Treatment London | Knocked Out Tooth",
        description: "Urgent care for dental trauma in Central London. We treat knocked-out teeth, fractures, and soft tissue injuries. Same-day appointments available.",
        keywords: "dental trauma london, knocked out tooth, luxation treatment, emergency dentist south kensington, dental injury"
    }
  },
  'c2': {
    id: 'c2',
    title: 'Severe Toothache',
    heroImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1920&q=80",
    content: (
      <>
        <p className="mb-4">
          A severe toothache is one of the most debilitating types of pain. It signals that something is wrong inside the tooth or gum. Unlike a headache, a toothache rarely resolves on its own and often worsens over time.
        </p>
        <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">Common Causes</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-700">
          <li><strong>Deep Decay:</strong> Bacteria reaching the nerve.</li>
          <li><strong>Abscess:</strong> Infection at the root tip.</li>
          <li><strong>Fracture:</strong> A crack allowing bacteria in.</li>
        </ul>
        <p className="mb-4">
          Our primary goal is immediate pain relief. We will perform a thorough examination to diagnose the source and treat it immediately.
        </p>
      </>
    ),
    pricing: [
      { item: "Emergency Assessment", price: "£30 (New Patient Offer)" },
      { item: "Emergency Pain Relief Dressing", price: "from £75" },
      { item: "Root Canal Extirpation (Stage 1)", price: "from £247.50*" },
      { item: "Simple Extraction", price: "from £125*" }
    ],
    beforeAfter: beforeAfterImages.toothache,
    seo: {
        title: "Severe Toothache Relief London | Emergency Dentist South Kensington",
        description: "Suffering from severe toothache? Get immediate pain relief and diagnosis at our Central London clinic. Same-day appointments. Open weekends.",
        keywords: "severe toothache relief, tooth pain london, emergency root canal, toothache remedy, urgent dentist london"
    }
  },
  'c3': {
    id: 'c3',
    title: 'Swollen Gums & Abscesses',
    heroImage: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1920&q=80",
    content: (
      <>
        <p className="mb-4">
          Swollen gums or facial swelling are serious indicators of an underlying infection, often a dental abscess. An abscess is a collection of pus caused by bacterial infection.
        </p>
        <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">Signs of a Dental Abscess</h3>
        <p className="mb-4">
          Symptoms often include severe, persistent toothache, sensitivity to hot and cold, fever, and facial swelling. Facial swelling can be dangerous if it spreads.
        </p>
        <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">Emergency Treatment</h3>
        <p className="mb-4">
          We prioritize these cases. Treatment may include draining the abscess, root canal therapy, or extraction to remove the source of infection.
        </p>
      </>
    ),
    pricing: [
      { item: "Emergency Assessment", price: "£30 (New Patient Offer)" },
      { item: "Abscess Drainage", price: "from £150" },
      { item: "Root Canal Treatment", price: "from £247.50*" },
      { item: "Surgical Extraction", price: "from £325*" }
    ],
    beforeAfter: beforeAfterImages.gum,
    seo: {
        title: "Dental Abscess & Swollen Gums Treatment London | Urgent Care",
        description: "Emergency treatment for dental abscesses and facial swelling in London. Don't ignore infection. Book a same-day appointment for drainage and antibiotics.",
        keywords: "dental abscess treatment, swollen gums london, facial swelling dentist, gum infection emergency, urgent dental care"
    }
  },
  'c4': {
    id: 'c4',
    title: 'Crowns Fall Out',
    heroImage: "https://images.unsplash.com/photo-1598256989337-1296b4859a2a?auto=format&fit=crop&w=1920&q=80",
    content: (
      <>
        <p className="mb-4">
          A lost crown or bridge can be distressing. It leaves the underlying tooth weak and sensitive. We advise against using household glues, as this can damage the tooth permanently.
        </p>
        <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">Our Solutions</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-700">
          <li><strong>Re-cementation:</strong> If the crown and tooth are healthy, we can re-cement it permanently.</li>
          <li><strong>New Crown:</strong> If the old crown is damaged, we can prepare the tooth for a new one.</li>
        </ul>
        <p className="mb-4">
          We offer same-day re-cementation to restore your smile instantly.
        </p>
      </>
    ),
    pricing: [
      { item: "Emergency Assessment", price: "£30 (New Patient Offer)" },
      { item: "Re-cementing Crown", price: "from £75" },
      { item: "New Porcelain Crown", price: "from £497.50*" },
      { item: "Core Build-up", price: "from £150" }
    ],
    beforeAfter: beforeAfterImages.crown,
    seo: {
        title: "Lost Crown & Bridge Repair London | Emergency Recementation",
        description: "Crown fell out? We offer same-day re-cementation and new crown fabrication in South Kensington. Restore your smile instantly.",
        keywords: "crown fell out, recement crown london, lost filling emergency, bridge repair, emergency dentist london"
    }
  },
  'c5': {
    id: 'c5',
    title: 'Broken Denture Repair',
    heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1920&q=80",
    content: (
      <>
        <p className="mb-4">
          A broken denture disrupts your ability to eat and speak. Whether it's a crack, a snapped tooth, or a loose fit, we can help.
        </p>
        <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">Same-Day Repairs</h3>
        <p className="mb-4">
           We work with specialized technicians to offer fast repair services for fractures, tooth replacements, and additions.
        </p>
        <p className="mb-4">
          Please do not try to glue your denture back together. Superglue is toxic and ruins the alignment. Bring it to us for professional repair.
        </p>
      </>
    ),
    pricing: [
      { item: "Emergency Assessment", price: "£30 (New Patient Offer)" },
      { item: "Simple Denture Repair", price: "from £150" },
      { item: "Addition of Tooth", price: "from £180" },
      { item: "New Acrylic Denture", price: "from £397.50*" }
    ],
    beforeAfter: beforeAfterImages.denture,
    seo: {
        title: "Same-Day Broken Denture Repair London | Emergency Dental Lab",
        description: "Fast broken denture repairs in Central London. We fix cracks, snapped teeth, and loose dentures while you wait or same-day.",
        keywords: "broken denture repair london, fix dentures same day, denture fracture, emergency denture clinic, denture technician"
    }
  },
  'c6': {
    id: 'c6',
    title: 'Dental Injury',
    heroImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80",
    content: (
      <>
        <p className="mb-4">
          Dental injuries from sports or falls can affect teeth, jawbone, and soft tissues. Immediate assessment is vital to rule out fractures.
        </p>
        <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">Comprehensive Care</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-700">
            <li><strong>Chipped Teeth:</strong> Repaired with composite bonding or crowns.</li>
            <li><strong>Displaced Teeth:</strong> Repositioned and splinted.</li>
            <li><strong>Soft Tissue Cuts:</strong> Sutures (stitches) provided where necessary.</li>
        </ul>
        <p className="mb-4">
           We also provide X-rays to check for hidden root fractures or bone damage.
        </p>
      </>
    ),
    pricing: [
      { item: "Emergency Assessment", price: "£30 (New Patient Offer)" },
      { item: "Composite Bonding Repair", price: "from £197.50*" },
      { item: "Suturing (Stitches)", price: "from £150" },
      { item: "Custom Mouthguard", price: "£297.50*" }
    ],
    beforeAfter: beforeAfterImages.injury,
    seo: {
        title: "Emergency Dental Injury Treatment London | Sports Injury Dentist",
        description: "Immediate care for dental injuries from sports or falls. We treat chipped teeth, lip cuts, and jaw trauma. X-rays and suturing available.",
        keywords: "dental injury treatment, sports dentist london, chipped tooth repair, mouth trauma emergency, facial injury"
    }
  }
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

interface ConditionDetailViewProps {
  conditionId: string;
  onBack: () => void;
  onOpenFees?: () => void;
  onSelectService?: (id: string) => void;
  onSelectCondition?: (id: string) => void;
}

const ConditionDetailView: React.FC<ConditionDetailViewProps> = ({ 
  conditionId, 
  onBack,
  onOpenFees,
  onSelectService,
  onSelectCondition
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