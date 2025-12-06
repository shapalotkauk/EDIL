import React from 'react';
import { Plus, Minus, HelpCircle, Phone, Calendar } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const faqs = [
  {
    question: "How much does an emergency dentist cost in London?",
    answer: "At our Central London clinic, our new patient emergency examination is a fixed price of £30. Treatment costs are transparent: X-rays are £10*, fillings start from £92.50*, and simple extractions from £125*. We always provide a full cost breakdown before starting treatment."
  },
  {
    question: "Can I get a same-day dental appointment in London?",
    answer: "Yes, we specialize in same-day emergency appointments. We have slots available daily for urgent cases including toothaches, abscesses, and broken teeth. You can book online 24/7 or call us at 020 3137 6356."
  },
  {
    question: "Do you treat unregistered or non-private patients?",
    answer: "Absolutely. You do not need to be a registered member or have private insurance to see us. We welcome all new patients for one-off emergency treatments."
  },
  {
    question: "What is considered a dental emergency?",
    answer: "A dental emergency includes severe toothache, dental abscesses (swelling), knocked-out teeth, uncontrollable bleeding after extraction, or facial trauma. If you are in pain, it is an emergency."
  },
  {
    question: "Are you open on weekends and bank holidays?",
    answer: "Yes, we are open on Saturdays from 10am to 4pm. We also offer Sunday and Bank Holiday appointments by arrangement. During the week, we are open late until 8pm on Tuesdays and Thursdays."
  },
  {
    question: "Where is the emergency dental clinic located?",
    answer: "We are located at 20 Old Brompton Road, South Kensington, SW7 3DL. We are situated right next to South Kensington Tube Station in Central London."
  }
];

const FAQSection: React.FC = () => {
  const { openBooking } = useBooking();
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured Data for SEO (JSON-LD)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-20 bg-white border-t border-slate-100" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-medical-50 rounded-full text-medical-600 mb-4">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Common Questions about <br/>
            <span className="text-medical-600">Emergency Dental Care</span>
          </h2>
          <p className="mt-4 text-xl text-slate-500">
            Quick answers to your most urgent concerns.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-medical-50/30 border-medical-200 shadow-sm' : 'bg-white hover:border-medical-200'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <span className={`text-lg font-bold ${openIndex === index ? 'text-medical-700' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-medical-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-slate-400" />
                  )}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-transparent">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-slate-900 rounded-2xl p-8 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Our triage team is ready to help you. We can assess your symptoms over the phone and book you in immediately.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:02031376356"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-full text-slate-900 bg-white hover:bg-slate-100 transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call 020 3137 6356
            </a>
            <button
              onClick={openBooking}
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 text-base font-bold rounded-full text-white bg-slate-800 hover:bg-slate-700 transition-all"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Online Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;