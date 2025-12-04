import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-2">
        {/* Main Copyright Line */}
        <p className="text-slate-400 font-medium">
          &copy; {currentYear} Merlin Liu. All rights reserved.
        </p>
        
        {/* Optional Secondary Line */}
        <p className="text-slate-600 text-sm">
          Built with React, Tailwind CSS & Vite.
        </p>
      </div>
    </footer>
  );
};

export default Footer;