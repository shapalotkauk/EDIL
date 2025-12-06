import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const BookingModal: React.FC = () => {
  const { isOpen, closeBooking } = useBooking();

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity" 
        onClick={closeBooking}
      />
      
      {/* Modal Content */}
      <div className="relative w-full h-full sm:h-[90vh] sm:max-w-4xl bg-white sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-white z-10">
            <h3 className="font-bold text-lg text-slate-800">Book Your Appointment</h3>
            <button 
                onClick={closeBooking}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors group"
                aria-label="Close booking modal"
            >
                <X className="w-6 h-6 text-slate-500 group-hover:text-slate-800" />
            </button>
        </div>

        {/* Iframe Container */}
        <div className="flex-1 w-full bg-white relative overflow-hidden">
            <iframe 
                src="https://booking.southkenmd.co.uk/south-kensington/emergency-dentist?source=emergencydentistinlondon.co.uk&success-url=https://www.emergencydentistinlondon.co.uk/thank-you?status=success"
                className="absolute inset-0 w-full h-full border-0"
                title="Book Dental Appointment"
                allow="camera; microphone; payment"
            />
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
