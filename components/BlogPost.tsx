import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, Tag, Share2, Facebook, Twitter, Linkedin, Phone, AlertTriangle, CheckCircle2, Star } from 'lucide-react';
import { BlogPost } from '../data/blogPosts';
import { useBooking } from '../context/BookingContext';
import Header from './Header';
import Footer from './Footer';

interface BlogPostProps {
  post: BlogPost;
  onBack: () => void;
  onOpenFees?: () => void;
  onSelectService?: (id: string) => void;
  onSelectCondition?: (id: string) => void;
  onContactClick?: () => void;
}

// ----------------------------------------------------------------------
// INJECTED COMPONENTS (To break up dry text)
// ----------------------------------------------------------------------

const InlineCTA = ({ openBooking }: { openBooking: () => void }) => (
  <div className="my-10 bg-urgent-50 border-l-4 border-urgent-500 p-6 rounded-r-xl shadow-sm">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h4 className="text-lg font-bold text-urgent-800 flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2" />
          Experiencing these symptoms?
        </h4>
        <p className="text-urgent-700 text-sm mt-1">
          Delaying treatment can lead to tooth loss. We have slots available today.
        </p>
      </div>
      <button 
        onClick={openBooking}
        className="shrink-0 px-6 py-2 bg-urgent-600 hover:bg-urgent-700 text-white font-bold rounded-full text-sm transition-colors shadow-md"
      >
        Book Emergency Visit
      </button>
    </div>
  </div>
);

const InlineDentist = ({ openBooking }: { openBooking: () => void }) => (
  <div className="my-12 bg-white border border-gray-100 rounded-2xl p-6 shadow-md flex flex-col sm:flex-row gap-6 items-center">
    <div className="w-20 h-20 shrink-0 bg-medical-50 rounded-full overflow-hidden border-2 border-white shadow-sm">
       <img 
         src="https://ui-avatars.com/api/?name=Dr+Yasha&background=0d9488&color=fff" 
         alt="Dr Yasha" 
         className="w-full h-full object-cover"
       />
    </div>
    <div className="text-center sm:text-left">
       <h4 className="font-bold text-slate-900">Meet Dr. Yasha Shirazi</h4>
       <p className="text-sm text-slate-500 mb-3">Principal Dentist at Emergency Dentist London</p>
       <p className="text-sm text-slate-600 mb-4 italic">"We treat hundreds of dental emergencies every month. The sooner you come in, the easier the fix usually is."</p>
       <button onClick={openBooking} className="text-medical-600 font-bold text-sm hover:underline">
         Book an appointment with our team &rarr;
       </button>
    </div>
  </div>
);

const InlineResult = () => (
  <div className="my-12">
     <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl text-white">
        <div className="grid grid-cols-2">
           <div className="relative h-40">
              <img src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=600&h=400&q=80" className="w-full h-full object-cover opacity-80" alt="Before" />
              <div className="absolute top-2 left-2 bg-black/60 px-2 py-1 rounded text-xs font-bold">BEFORE</div>
           </div>
           <div className="relative h-40">
              <img src="https://images.unsplash.com/photo-1598256989337-1296b4859a2a?auto=format&fit=crop&w=600&h=400&q=80" className="w-full h-full object-cover" alt="After" />
              <div className="absolute top-2 left-2 bg-green-600 px-2 py-1 rounded text-xs font-bold">AFTER</div>
           </div>
        </div>
        <div className="p-4 text-center bg-medical-600">
           <p className="font-bold text-sm">Real Patient Result: Emergency Bonding</p>
        </div>
     </div>
  </div>
);

const ArticleFooter = ({ openBooking }: { openBooking: () => void }) => (
  <div className="mt-16 pt-8 border-t border-gray-200">
    <div className="flex items-center gap-4 mb-8">
       <div className="w-12 h-12 bg-medical-100 rounded-full flex items-center justify-center text-medical-600 font-bold shrink-0">ED</div>
       <div>
         <p className="font-bold text-slate-900 text-lg">Written by Emergency Dentist London Team</p>
         <p className="text-sm text-slate-500">Medically reviewed by Dr. Yasha Y Shirazi • GDC: 195843</p>
       </div>
    </div>
    
    <div className="bg-gradient-to-br from-medical-50 to-white p-8 rounded-3xl border border-medical-100 text-center shadow-sm">
       <h4 className="text-2xl font-bold text-medical-900 mb-3">Don't Suffer in Silence</h4>
       <p className="text-slate-600 mb-6 max-w-lg mx-auto">
         We are open 6 days a week for emergency appointments in South Kensington. 
         Pain relief is just a phone call away.
       </p>
       <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button onClick={openBooking} className="bg-medical-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-medical-700 hover:shadow-xl transition-all transform hover:-translate-y-1">
              Book Appointment Now
          </button>
          <a href="tel:02031376356" className="bg-white text-medical-700 border-2 border-medical-100 px-8 py-3 rounded-full font-bold hover:bg-medical-50 transition-colors">
              Call 020 3137 6356
          </a>
       </div>
    </div>
  </div>
);

// ----------------------------------------------------------------------
// MAIN COMPONENT
// ----------------------------------------------------------------------

const BlogPostView: React.FC<BlogPostProps> = ({ 
  post, 
  onBack,
  onOpenFees,
  onSelectService,
  onSelectCondition,
  onContactClick
}) => {
  const { openBooking } = useBooking();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${post.title} | London Emergency Dentist Blog`;
  }, [post]);

  // Content Injection Logic
  const renderContent = () => {
    if (typeof post.content !== 'string') return post.content;

    // Split content by paragraphs
    const paragraphs = post.content.split('</p>');
    return paragraphs.map((para, index) => {
      if (!para.trim()) return null;
      
      const cleanPara = para + '</p>';
      
      // Inject Components at specific indexes
      let Injection = null;
      if (index === 2) Injection = <InlineCTA openBooking={openBooking} />;
      if (index === 5) Injection = <InlineDentist openBooking={openBooking} />;
      if (index === 8) Injection = <InlineResult />;

      return (
        <React.Fragment key={index}>
          <div dangerouslySetInnerHTML={{ __html: cleanPara }} />
          {Injection}
        </React.Fragment>
      );
    });
  };

  return (
    <div className="min-h-screen bg-white animate-in fade-in slide-in-from-bottom-4 duration-300 flex flex-col">
      <Header 
        onOpenFees={onOpenFees}
        onSelectService={onSelectService}
        onSelectCondition={onSelectCondition}
        onContactClick={onContactClick}
      />

      {/* Article Hero */}
      <div className="relative h-[400px] w-full">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/50 to-stone-900/20"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <button 
            onClick={onBack}
            className="absolute top-24 left-4 sm:left-10 text-white/80 hover:text-white flex items-center gap-2 transition-colors bg-black/20 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 hover:bg-black/40"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </button>
          
          <div className="max-w-4xl mx-auto mt-12 animate-in slide-in-from-bottom-8 fade-in duration-700">
            <span className="bg-medical-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block shadow-lg">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-stone-200 text-sm font-medium bg-black/30 inline-flex px-6 py-2 rounded-full backdrop-blur-sm">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-medical-300" /> {post.date}</span>
              <span className="w-1 h-1 bg-stone-400 rounded-full"></span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-medical-300" /> {post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row gap-16 w-full flex-grow">
        
        {/* Main Content */}
        <div className="lg:w-2/3">
           <div className="prose-custom first-letter:text-6xl first-letter:font-bold first-letter:text-medical-600 first-letter:mr-3 first-letter:float-left">
              {renderContent()}
           </div>

           {/* Article Footer (Author & CTA) */}
           <ArticleFooter openBooking={openBooking} />

           {/* Share Buttons */}
           <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-between">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <Share2 className="w-5 h-5 text-medical-600" /> Share this article
              </h4>
              <div className="flex gap-3">
                 <button className="p-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition"><Facebook className="w-5 h-5" /></button>
                 <button className="p-2 bg-sky-50 text-sky-500 rounded-full hover:bg-sky-100 transition"><Twitter className="w-5 h-5" /></button>
                 <button className="p-2 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 transition"><Linkedin className="w-5 h-5" /></button>
              </div>
           </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3 space-y-8">
           
           {/* Sticky Booking Card */}
           <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xl shadow-gray-200/50 sticky top-28">
              <div className="w-12 h-12 bg-urgent-100 rounded-2xl flex items-center justify-center text-urgent-600 mb-6">
                  <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">In Pain Right Now?</h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                We prioritize dental emergencies. Book online now to secure the next available slot.
              </p>
              
              <div className="space-y-3">
                <button 
                  onClick={openBooking}
                  className="w-full py-4 bg-medical-600 hover:bg-medical-700 text-white rounded-xl font-bold shadow-lg shadow-medical-200 transition-all transform hover:-translate-y-1"
                >
                  Book Online (24/7)
                </button>
                <a 
                  href="tel:02031376356"
                  className="w-full py-4 bg-white border-2 border-slate-100 text-slate-700 hover:border-medical-200 hover:text-medical-700 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-5 h-5" /> 020 3137 6356
                </a>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
                  <div className="flex">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <span>4.9/5 from 200+ Reviews</span>
              </div>
           </div>

           {/* Tags Cloud */}
           <div className="bg-stone-50 border border-stone-200 rounded-3xl p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Popular Topics</h3>
              <div className="flex flex-wrap gap-2">
                {['Toothache', 'Wisdom Teeth', 'Cost', 'Root Canal', 'Anxiety', 'Cosmetic', 'Implants', 'Hygiene'].map(tag => (
                   <span key={tag} className="px-3 py-1 bg-white text-slate-600 text-sm font-medium rounded-lg border border-stone-200 shadow-sm hover:border-medical-300 hover:text-medical-700 cursor-default transition-colors">
                      {tag}
                   </span>
                ))}
              </div>
           </div>

        </div>

      </div>
      <Footer />
    </div>
  );
};

export default BlogPostView;