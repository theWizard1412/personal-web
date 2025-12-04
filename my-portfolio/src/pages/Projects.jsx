import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Pantry AI Receipt Detection",
      description: "An AI food management app built for the 2025 GDSC Hackathon. It uses Cloud Vision API to scan receipts for expiration dates and connects to the Gemini API to suggest recipes based on available ingredients.",
      tags: ["Python", "Gemini API", "Cloud Vision", "HTML/CSS"],
      links: { demo: "#", code: "https://github.com/theWizard1412" }, // Update specific repo link if available
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Gateway CGI Program",
      description: "Designed a gateway control system integrated with Node-Red. Implemented a web terminal via CGI architecture to provide users enhanced access to gateway configurations.",
      tags: ["C", "Bash", "JavaScript", "Node-Red"],
      links: { demo: "#", code: "https://github.com/theWizard1412" },
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Interactive Q-Arm Project",
      description: "Led a team to program a Q-Arm for transporting medical tools with high precision. Optimized performance through virtual environment testing using Python and Raspberry Pi.",
      tags: ["Python", "Raspberry Pi", "Engineering Design"],
      links: { demo: "#", code: "https://github.com/theWizard1412" },
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Robotics Competition Robot",
      description: "Developed code for the Skill Canada Robotics Competition. Utilized Python and Arduino for robot logic and 3D printed custom parts using Fusion 360.",
      tags: ["Python", "Arduino", "Fusion 360", "C++"],
      links: { demo: "#", code: "https://github.com/theWizard1412" },
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-slate-400">Academic and Hackathon Highlights</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all hover:-translate-y-1 hover:shadow-2xl">
              <div className={`h-48 bg-gradient-to-r ${project.color} opacity-80 group-hover:opacity-100 transition-opacity relative p-6 flex flex-col justify-end`}>
                 <div className="absolute top-4 right-4 flex gap-3">
                   <a href={project.links.code} target="_blank" rel="noreferrer" className="p-2 bg-black/20 hover:bg-black/40 rounded-full text-white backdrop-blur-sm transition-colors">
                     <Github className="w-5 h-5" />
                   </a>
                 </div>
                 <h3 className="text-2xl font-bold text-white shadow-black drop-shadow-md">{project.title}</h3>
              </div>
              
              <div className="p-6 space-y-4">
                <p className="text-slate-400 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/30 rounded-full border border-blue-900/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;