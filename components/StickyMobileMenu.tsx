import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const StickyMobileMenu: React.FC = () => {
  const { openBooking } = useBooking();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40 md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] safe-area-pb">
      <div className="grid grid-cols-2 gap-4">
        <a
          href="tel:02031376356"
          className="flex items-center justify-center px-4 py-3 bg-urgent-600 text-white rounded-lg font-bold shadow-md active:bg-urgent-700 transition-colors text-sm"
        >
          <Phone className="w-4 h-4 mr-2" />
          Call Us
        </a>
        <button
          onClick={openBooking}
          className="flex items-center justify-center px-4 py-3 bg-medical-600 text-white rounded-lg font-bold shadow-md active:bg-medical-700 transition-colors text-sm"
        >
          <Calendar className="w-4 h-4 mr-2" />
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default StickyMobileMenu;