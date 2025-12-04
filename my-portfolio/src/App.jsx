import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  // Simple scroll to top when changing views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-500/30">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="animate-in fade-in zoom-in duration-300">
        {renderContent()}
      </main>
      
      {/* Only show Footer if not on home, or remove this check to show always */}
      {activeTab !== 'home' && <Footer />}
    </div>
  );
};

export default App;