
import { Users, Wrench, ArrowRight } from 'lucide-react';

export default function Slide3() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-b from-slate-900 to-slate-700 text-white">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex-none text-center py-12">
          <h1 className="text-6xl font-bold text-white mb-4">AI Personas: Citizens vs Workers</h1>
          <h2 className="text-3xl opacity-70">Understanding capability levels for IT/Tech roles</h2>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-8 px-16 pb-16">
          {/* Persona Cards */}
          <div className="grid grid-cols-2 gap-12 flex-1">
            {/* AI Citizens */}
            <div className="bg-slate-800/80 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Users size={48} className="text-orange-400" />
                <h2 className="text-4xl font-bold text-orange-400">AI Citizens</h2>
              </div>
              
              <p className="text-xl italic mb-6 opacity-90">
                Professionals who work alongside AI systems and need AI literacy
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Key Characteristics</h3>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-orange-400 mt-1">•</span>
                      <p>Understand AI capabilities and limitations</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-400 mt-1">•</span>
                      <p>Communicate requirements to AI specialists</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-400 mt-1">•</span>
                      <p>Evaluate AI solutions critically</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-400 mt-1">•</span>
                      <p>Apply AI ethics and governance principles</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-400 mt-1">•</span>
                      <p>Use pre-built AI tools and services</p>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-orange-900/30 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-300 mb-2">Example Roles</h4>
                  <p className="text-lg">Most IT roles: Support staff, junior developers, project coordinators</p>
                </div>
                
                <div className="bg-orange-900/20 rounded-lg p-4">
                  <p className="text-lg font-semibold text-orange-300">Skill Focus: AI Awareness • Ethical Use • Critical Evaluation</p>
                </div>
              </div>
            </div>
            
            {/* AI Workers */}
            <div className="bg-slate-800/80 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Wrench size={48} className="text-blue-400" />
                <h2 className="text-4xl font-bold text-blue-400">AI Workers</h2>
              </div>
              
              <p className="text-xl italic mb-6 opacity-90">
                Professionals who implement, integrate, or customize AI solutions
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Key Characteristics</h3>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">•</span>
                      <p>Select and configure AI services</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">•</span>
                      <p>Integrate AI APIs and models</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">•</span>
                      <p>Implement AI workflows and pipelines</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">•</span>
                      <p>Monitor and optimize AI performance</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">•</span>
                      <p>Design AI-enhanced systems</p>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-900/30 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-300 mb-2">Example Roles</h4>
                  <p className="text-lg">Senior devs, architects, data engineers, ML engineers, product leads</p>
                </div>
                
                <div className="bg-blue-900/20 rounded-lg p-4">
                  <p className="text-lg font-semibold text-blue-300">Skill Focus: Technical Integration • System Design • Performance Optimization</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Progression Indicator */}
          <div className="bg-purple-600/30 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-4 mb-2">
              <ArrowRight size={36} className="text-purple-400" />
              <h3 className="text-2xl font-bold text-purple-400">Progression Path</h3>
            </div>
            <p className="text-lg">Most IT professionals start as AI Citizens and develop AI Worker capabilities in their domain</p>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex-none text-center py-4">
          <p className="text-base opacity-60">Framework adapted from The Alan Turing Institute</p>
        </div>
      </div>
    </div>
  );
}
