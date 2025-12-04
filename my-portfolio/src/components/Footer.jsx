import React from 'react';

const Footer = () => (
  <footer className="bg-slate-950 border-t border-slate-800 py-8">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <p className="text-slate-500 text-sm">
        Built with React & Tailwind CSS. © {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;