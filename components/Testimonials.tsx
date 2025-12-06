import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Natalia Tiuleneva",
    daysAgo: "3 days ago",
    text: "Great experience at South Kensington Medical and Dental Clinic. Kind staff, quick appointment, and very fast results. Everything was smooth and stress-free. Highly recommend! 🌟",
    rating: 5
  },
  {
    name: "Parsa Hussein Nejad",
    daysAgo: "6 days ago",
    text: "Very pleasant experience",
    rating: 5
  },
  {
    name: "K D",
    daysAgo: "6 days ago",
    text: "Great treatment with Dr Andreia. Had composite bondings done and can honestly highly recommend it. It perfectly blends in with my natural shade. Thank you for giving my confidence back!!",
    rating: 5
  },
  {
    name: "Pierre Mallevays",
    daysAgo: "6 days ago",
    text: "Nurse Luciana was amazing",
    rating: 5
  },
  {
    name: "AD GS",
    daysAgo: "9 days ago",
    text: "Wonderful staff/reception, Dr Shirazi and his assistant delivered fantastic service for teeth whitening. Very friendly and efficient service (and Persian hospitality)",
    rating: 5
  },
  {
    name: "John Smith",
    daysAgo: "2 weeks ago",
    text: "Needed an emergency extraction on a Sunday. They saw me within an hour. Professional and painless.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    daysAgo: "1 month ago",
    text: "The £30 new patient offer is real. No hidden costs for the exam. Very transparent pricing.",
    rating: 5
  }
];

const ReviewCard: React.FC<{ review: typeof reviews[0] }> = ({ review }) => (
  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 w-[350px] flex-shrink-0 mx-4 h-full flex flex-col">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-medical-100 flex items-center justify-center text-medical-700 font-bold">
          {review.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
          <span className="text-xs text-slate-500">{review.daysAgo}</span>
        </div>
      </div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5" />
    </div>
    
    <div className="flex mb-3">
      {[...Array(review.rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      ))}
    </div>

    <p className="text-slate-600 text-sm leading-relaxed flex-grow line-clamp-4">
      "{review.text}"
    </p>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100 overflow-hidden">
      <div className="text-center mb-12 px-4">
        <h2 className="text-base text-medical-600 font-semibold tracking-wide uppercase">Patient Stories</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          What Our Patients Say
        </p>
        <div className="flex justify-center items-center mt-4 gap-2">
            <span className="font-bold text-slate-700">4.9/5 Excellent</span>
            <div className="flex">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
            </div>
            <span className="text-slate-500 text-sm">(Based on Google Reviews)</span>
        </div>
      </div>

      <div className="relative w-full">
         <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
         <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
         
         {/* Marquee Container */}
         <div className="flex overflow-hidden w-full">
            <div className="flex animate-marquee py-4">
                {reviews.map((review, index) => (
                    <ReviewCard key={`grp1-${index}`} review={review} />
                ))}
                {reviews.map((review, index) => (
                    <ReviewCard key={`grp1-dup-${index}`} review={review} />
                ))}
            </div>
         </div>
      </div>
    </section>
  );
};

export default Testimonials;