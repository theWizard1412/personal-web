import React from 'react';
import { Github, Linkedin, Mail, ChevronRight, User, Code2, Cpu } from 'lucide-react';
// Make sure to import your profile image if you haven't yet:
// import profileImg from '../assets/profile.jpg';

const Home = ({ setActiveTab }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <h2 className="text-blue-500 font-semibold tracking-wide uppercase text-sm">
              Software Engineering Student @ McMaster
            </h2>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Performance
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I am a Software Engineering student at McMaster University with a 3.9 GPA. 
              I build full-stack applications and embedded systems, bridging the gap between hardware and software.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button 
              onClick={() => setActiveTab('projects')}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2"
            >
              View Projects <ChevronRight className="w-4 h-4" />
            </button>
            <a 
              href="mailto:liu2007@mcmaster.ca"
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-medium transition-all border border-slate-700 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" /> Contact Me
            </a>
          </div>

          <div className="flex items-center gap-6 justify-center lg:justify-start text-slate-400">
            <a href="https://github.com/theWizard1412" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/merlin-liu" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="flex-1 relative">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div className="relative w-full h-full bg-slate-800 rounded-full border-4 border-slate-700 overflow-hidden flex items-center justify-center">
               {/* Replace with your <img> tag here */}
               <User className="w-32 h-32 text-slate-600" />
            </div>
            
            <div className="absolute -top-4 -right-4 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl hidden sm:block animate-bounce" style={{ animationDuration: '3s' }}>
              <Code2 className="w-6 h-6 text-blue-400 mb-2" />
              <div className="text-xs text-slate-400">Full Stack</div>
              <div className="text-sm font-bold text-white">Developer</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl hidden sm:block animate-bounce" style={{ animationDuration: '4s' }}>
              <Cpu className="w-6 h-6 text-purple-400 mb-2" />
              <div className="text-xs text-slate-400">Embedded</div>
              <div className="text-sm font-bold text-white">Systems</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;