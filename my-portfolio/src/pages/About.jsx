import React from 'react';
import { Globe, BookOpen, Terminal } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Engineering student passionate about algorithms, embedded systems, and full-stack development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p>
                I am currently a Bachelor of Software Engineering student at 
                <span className="text-blue-400 font-medium"> McMaster University</span>, 
                maintaining a <span className="text-white font-bold">3.9/4.0 GPA</span>. 
                I am actively seeking co-op opportunities for 4 to 16 month terms.
              </p>
              <p>
                Most recently, I worked as a Software Engineer Co-op at 
                <span className="text-blue-400 font-medium"> TianJin Communication & Broadcasting Group</span>. 
                There, I developed gateway software for browser-based UIs, optimized system performance on AARCH64 architectures, 
                and collaborated with hardware engineers to validate firmware.
              </p>
              <p>
                Beyond coding, I've served as the International Student Association President, 
                organizing cultural events and fostering student connections.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-blue-500" />
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Python', 'C/C++', 'JavaScript', 'HTML/CSS', 'Bash', 'Verilog'].map((skill) => (
                    <span key={skill} className="px-3 py-1 text-sm bg-slate-900 text-slate-300 rounded-full border border-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-purple-500" />
                  Frameworks & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'Flask', 'Git', 'Docker', 'Linux', 'VS Code', 'Pandas'].map((skill) => (
                    <span key={skill} className="px-3 py-1 text-sm bg-slate-900 text-slate-300 rounded-full border border-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;