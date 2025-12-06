import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, User, Calendar } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  qualifications?: string;
  gdc: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Yasha Y Shirazi',
    role: 'Principal Dentist and Clinical Director',
    gdc: '195843',
    bio: 'Experienced Principal Dentist focused on prevention and complex surgical treatments.'
  },
  {
    id: '2',
    name: 'Dr. Kamran Yazdi',
    role: 'Dentist',
    qualifications: 'DDS, MSc, Dip',
    gdc: '197926',
    bio: 'Specialist in conservative dentistry and patient-centred care.'
  },
  {
    id: '3',
    name: 'Dr. Andreia Phipps',
    role: 'Dentist',
    gdc: '229601',
    bio: 'Passionate about cosmetic and minimally invasive dentistry.'
  },
  {
    id: '4',
    name: 'Dr. Reza Davari',
    role: 'Dentist',
    qualifications: 'Special Interest in Prosthodontics',
    gdc: '302422',
    bio: 'Specialises in comfortable, long-lasting prosthodontics with a gentle approach.'
  },
  {
    id: '5',
    name: 'Dr. Narges Ameri',
    role: 'Dentist',
    qualifications: 'DDS',
    gdc: '325081',
    bio: 'Expert in prosthetics, cosmetic dentistry, and implant-supported restorations.'
  },
  {
    id: '6',
    name: 'Dr. Louise Carnaby',
    role: 'Dentist',
    gdc: '302239',
    bio: 'Dedicated to minimally invasive and cosmetic treatments to boost confidence.'
  },
  {
    id: '7',
    name: 'Jack Button',
    role: 'Dental Hygienist and Therapist',
    gdc: '244367',
    bio: 'Award-winning Clinical Director committed to first-class hygiene therapy.'
  },
  {
    id: '8',
    name: 'Laila Alhussein',
    role: 'Dental Hygienist',
    gdc: '328882',
    bio: 'Dedicated to promoting oral health and patient comfort in a warm environment.'
  }
];

const TeamSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const { openBooking } = useBooking();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setCardsToShow(4);
      } else if (window.innerWidth >= 1024) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + cardsToShow >= teamMembers.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, teamMembers.length - cardsToShow) : prevIndex - 1
    );
  };

  const maxIndex = Math.max(0, teamMembers.length - cardsToShow);
  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex >= maxIndex;

  return (
    <section className="py-20 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-medical-600 font-semibold tracking-wide uppercase">Our Team</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Meet Our Dentists
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Experienced professionals dedicated to your care.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            disabled={isAtStart}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 p-3 rounded-full shadow-lg transition-all ${
              isAtStart 
                ? 'bg-gray-100 text-gray-300 cursor-not-allowed' 
                : 'bg-white text-medical-600 hover:bg-medical-50 border border-medical-100'
            }`}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={nextSlide}
            disabled={isAtEnd}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 p-3 rounded-full shadow-lg transition-all ${
              isAtEnd 
                ? 'bg-gray-100 text-gray-300 cursor-not-allowed' 
                : 'bg-white text-medical-600 hover:bg-medical-50 border border-medical-100'
            }`}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider Container */}
          <div className="overflow-hidden py-4 -mx-4 px-4">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
            >
              {teamMembers.map((member) => (
                <div 
                  key={member.id} 
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / cardsToShow}%` }}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center text-center group">
                    <div className="w-24 h-24 rounded-full bg-medical-50 flex items-center justify-center mb-4 group-hover:bg-medical-100 transition-colors">
                      <img 
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0284c7&color=fff&size=128`} 
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-sm"
                      />
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1">
                      {member.name}
                    </h3>
                    
                    <p className="text-sm font-semibold text-medical-600 mb-1 h-10 flex items-center justify-center">
                      {member.role}
                    </p>

                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 mb-3">
                      GDC: {member.gdc}
                    </div>

                    <p className="text-sm text-slate-500 mb-6 flex-grow">
                      {member.bio}
                    </p>

                    <button 
                        onClick={openBooking}
                        className="w-full inline-flex items-center justify-center px-4 py-2 border border-medical-600 text-sm font-medium rounded-full text-medical-600 bg-white hover:bg-medical-600 hover:text-white transition-colors cursor-pointer"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Your Visit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSlider;
