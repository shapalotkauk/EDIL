import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-medical-950 text-white py-12 mb-16 md:mb-0">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h4 className="text-lg font-bold mb-4">Emergency Dentist London</h4>
        <p className="text-medical-200 text-sm">
          Providing urgent dental care to Londoners in South Kensington.
        </p>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-4">Legal & Links</h4>
        <ul className="space-y-2 text-sm text-medical-200">
          <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
          <li><a href="#" className="hover:text-white">Blog</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-4">Regulation</h4>
        <p className="text-medical-200 text-sm mb-2">Regulated by the Care Quality Commission (CQC).</p>
        <p className="text-medical-200 text-sm">All dentists are GDC registered.</p>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-4">Contact</h4>
        <p className="text-medical-200 text-sm">020 3137 6356</p>
        <p className="text-medical-200 text-sm mt-2">20 Old Brompton Rd, SW7 3DL</p>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-medical-900 text-center">
        <p className="text-medical-400 font-bold text-sm mb-2 uppercase tracking-wider">* Exclusive to members</p>
        <p className="text-white text-lg font-semibold bg-medical-900/50 inline-block px-6 py-3 rounded-full border border-medical-800">
            Join now only £20 pounds a month and you get 50% off all dental treatments
        </p>
    </div>

    <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-medical-900 text-center text-medical-400 text-sm">
      &copy; {new Date().getFullYear()} London Emergency Dentist. All rights reserved.
    </div>
  </footer>
);

export default Footer;