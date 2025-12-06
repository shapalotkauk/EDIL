import React from 'react';
import { MapPin, Phone, Clock, Bus, Car, Train } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-slate-50 py-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-base text-medical-600 font-semibold tracking-wide uppercase">Find Us</h2>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">Visit Us in Central London</h2>
            <p className="mt-4 text-lg text-slate-500">
              We are conveniently located next to South Kensington Tube Station.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
                
                {/* Left Col: Contact Info */}
                <div className="p-8 sm:p-10">
                    <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center">
                        Contact Details
                    </h3>
                    <dl className="space-y-8">
                      {/* Address */}
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-medical-50 text-medical-600">
                            <MapPin className="h-5 w-5" aria-hidden="true" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <dt className="text-sm font-medium text-slate-500 uppercase tracking-wide">Central London Address</dt>
                          <dd className="mt-1 text-base font-semibold text-slate-900">
                            20 Old Brompton Road<br />
                            South Kensington<br />
                            London, SW7 3DL
                          </dd>
                        </div>
                      </div>
                      
                      {/* Phone */}
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-medical-50 text-medical-600">
                            <Phone className="h-5 w-5" aria-hidden="true" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <dt className="text-sm font-medium text-slate-500 uppercase tracking-wide">Phone</dt>
                          <dd className="mt-1 text-base font-semibold text-slate-900">
                            <a href="tel:02031376356" className="hover:text-medical-600 hover:underline">020 3137 6356</a>
                          </dd>
                        </div>
                      </div>

                      {/* Hours */}
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-medical-50 text-medical-600">
                            <Clock className="h-5 w-5" aria-hidden="true" />
                          </div>
                        </div>
                        <div className="ml-4 w-full">
                          <dt className="text-sm font-medium text-slate-500 uppercase tracking-wide">Opening Hours</dt>
                          <dd className="mt-2 text-sm text-slate-700 space-y-2">
                            <div className="flex justify-between w-full max-w-[220px] border-b border-dashed border-gray-100 pb-1">
                                <span className="font-medium">Monday</span> <span>9am - 6pm</span>
                            </div>
                            <div className="flex justify-between w-full max-w-[220px] border-b border-dashed border-gray-100 pb-1">
                                <span className="font-medium">Tuesday</span> <span>9am - 8pm</span>
                            </div>
                            <div className="flex justify-between w-full max-w-[220px] border-b border-dashed border-gray-100 pb-1">
                                <span className="font-medium">Wednesday</span> <span>9am - 6pm</span>
                            </div>
                            <div className="flex justify-between w-full max-w-[220px] border-b border-dashed border-gray-100 pb-1">
                                <span className="font-medium">Thursday</span> <span>9am - 8pm</span>
                            </div>
                            <div className="flex justify-between w-full max-w-[220px] border-b border-dashed border-gray-100 pb-1">
                                <span className="font-medium">Friday</span> <span>8am - 5pm</span>
                            </div>
                            <div className="flex justify-between w-full max-w-[220px] border-b border-dashed border-gray-100 pb-1">
                                <span className="font-medium">Saturday</span> <span>10am - 4pm</span>
                            </div>
                            <div className="flex justify-between w-full max-w-[220px] pb-1">
                                <span className="font-medium text-urgent-600">Sunday</span> <span className="text-urgent-600 font-bold">Closed</span>
                            </div>
                          </dd>
                        </div>
                      </div>
                    </dl>
                </div>

                {/* Right Col: How to get here + Map */}
                <div className="bg-slate-50 p-8 sm:p-10 border-t md:border-t-0 md:border-l border-slate-100 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">How to get here</h3>
                    
                    <div className="space-y-6 flex-grow">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 mt-0.5">
                                <Train className="w-5 h-5 text-medical-500" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-bold text-slate-900">Tube (Nearest Station)</p>
                                <p className="text-sm text-slate-600 mt-1">
                                    <span className="font-bold text-medical-700">South Kensington Station</span> (District, Circle, and Piccadilly lines) is just a <span className="font-bold">2-minute walk</span>.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 mt-0.5">
                                <Bus className="w-5 h-5 text-medical-500" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-bold text-slate-900">Bus</p>
                                <p className="text-sm text-slate-600 mt-1">
                                    Routes 14, 74, 414, C1 stop nearby on Old Brompton Road.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 mt-0.5">
                                <Car className="w-5 h-5 text-medical-500" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-bold text-slate-900">Parking</p>
                                <p className="text-sm text-slate-600 mt-1">
                                    Metered street parking on Thurloe Place & Exhibition Road.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 rounded-xl overflow-hidden shadow-sm border border-slate-200 h-48 w-full relative">
                         <iframe 
                            title="Clinic Location Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.9298533878776!2d-0.17637822402128887!3d51.49615211152011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605666f7f525d%3A0x6b4460596375080e!2s20%20Old%20Brompton%20Rd%2C%20South%20Kensington%2C%20London%20SW7%203DL!5e0!3m2!1sen!2suk!4v1716380000000!5m2!1sen!2suk" 
                            width="100%" 
                            height="100%" 
                            style={{border:0}} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;