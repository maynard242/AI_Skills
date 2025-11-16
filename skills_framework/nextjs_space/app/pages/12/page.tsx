
import { HelpCircle, Users, Info } from 'lucide-react';

export default function Slide12() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-b from-slate-900 to-slate-700 text-white">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex-none text-center py-12">
          <h1 className="text-6xl font-bold text-white mb-4">AI Skills Assessment Decision Tree</h1>
          <h2 className="text-3xl opacity-70">Determine required AI capabilities for roles and projects</h2>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 grid grid-cols-[3fr_2fr] gap-8 px-16 pb-16">
          {/* Decision Tree Flow - Left Column */}
          <div className="bg-slate-800/80 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-purple-400 mb-8">Skills Assessment Framework</h2>
            
            <div className="space-y-6">
              {/* Level 1 */}
              <div className="bg-slate-700/80 rounded-lg p-4 border-l-4 border-blue-500">
                <div className="flex items-center gap-3 mb-3">
                  <HelpCircle size={20} className="text-blue-400" />
                  <h3 className="text-lg font-bold">Level 1: Will this role interact with AI systems?</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 text-base">
                  <div><span className="text-green-400 font-semibold">Yes →</span> Continue to Level 2</div>
                  <div><span className="text-orange-400 font-semibold">No →</span> Basic AI awareness only (4-8 hours)</div>
                </div>
              </div>
              
              {/* Level 2 */}
              <div className="bg-slate-700/80 rounded-lg p-4 border-l-4 border-emerald-500">
                <div className="flex items-center gap-3 mb-3">
                  <HelpCircle size={20} className="text-emerald-400" />
                  <h3 className="text-lg font-bold">Level 2: Will they make decisions about AI solutions?</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 text-base">
                  <div><span className="text-green-400 font-semibold">Yes →</span> AI Citizen + Strategic → Level 3</div>
                  <div><span className="text-orange-400 font-semibold">No →</span> AI Citizen skills (24-40 hours)</div>
                </div>
              </div>
              
              {/* Level 3 */}
              <div className="bg-slate-700/80 rounded-lg p-4 border-l-4 border-purple-500">
                <div className="flex items-center gap-3 mb-3">
                  <HelpCircle size={20} className="text-purple-400" />
                  <h3 className="text-lg font-bold">Level 3: Will they implement or integrate AI?</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 text-base">
                  <div><span className="text-green-400 font-semibold">Yes →</span> AI Worker skills → Level 4</div>
                  <div><span className="text-orange-400 font-semibold">No →</span> AI Citizen + Comm (40-60 hours)</div>
                </div>
              </div>
              
              {/* Level 4 */}
              <div className="bg-slate-700/80 rounded-lg p-4 border-l-4 border-amber-500">
                <div className="flex items-center gap-3 mb-3">
                  <HelpCircle size={20} className="text-amber-400" />
                  <h3 className="text-lg font-bold">Level 4: What is the primary technical focus?</h3>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-blue-600/20 p-2 rounded">
                    <span className="text-blue-400 font-semibold">Development:</span> Developer AI Integration track (80-120 hours)
                  </div>
                  <div className="bg-purple-600/20 p-2 rounded">
                    <span className="text-purple-400 font-semibold">Architecture:</span> Architecture & Design track (60-80 hours)
                  </div>
                  <div className="bg-green-600/20 p-2 rounded">
                    <span className="text-green-400 font-semibold">Operations:</span> MLOps & Monitoring track (50-70 hours)
                  </div>
                  <div className="bg-cyan-600/20 p-2 rounded">
                    <span className="text-cyan-400 font-semibold">Data:</span> Data Engineering for AI track (60-80 hours)
                  </div>
                  <div className="bg-red-600/20 p-2 rounded col-span-2">
                    <span className="text-red-400 font-semibold">Security:</span> AI Security & Governance track (40-60 hours)
                  </div>
                </div>
              </div>
              
              {/* Level 5 */}
              <div className="bg-slate-700/80 rounded-lg p-4 border-l-4 border-slate-500">
                <h3 className="text-lg font-bold mb-3">Level 5: Additional Considerations</h3>
                <ul className="space-y-1 text-base">
                  <li>• Cloud platform experience (add 20-40 hours if new to cloud)</li>
                  <li>• Leadership role (add governance & strategy modules: +16 hours)</li>
                  <li>• Regulated industry (add compliance & ethics modules: +16 hours)</li>
                  <li>• Customer-facing role (add responsible AI & explainability: +12 hours)</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col gap-8">
            {/* Quick Role Mapping */}
            <div className="bg-slate-700/80 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <Users size={32} className="text-purple-400" />
                <h2 className="text-2xl font-bold text-purple-400">Quick Role Reference</h2>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border-l-4 border-blue-400">
                  <div>
                    <h3 className="font-bold text-blue-400">Software Developer</h3>
                    <p className="text-sm opacity-80">L1→L2→L3→L4(Dev)</p>
                  </div>
                  <span className="font-bold text-blue-400">80-120h</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border-l-4 border-orange-400">
                  <div>
                    <h3 className="font-bold text-orange-400">Product Manager</h3>
                    <p className="text-sm opacity-80">L1→L2→L3(Stop)</p>
                  </div>
                  <span className="font-bold text-orange-400">40-60h</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border-l-4 border-purple-400">
                  <div>
                    <h3 className="font-bold text-purple-400">System Architect</h3>
                    <p className="text-sm opacity-80">L1→L2→L3→L4(Arch)</p>
                  </div>
                  <span className="font-bold text-purple-400">60-80h</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border-l-4 border-green-400">
                  <div>
                    <h3 className="font-bold text-green-400">DevOps Engineer</h3>
                    <p className="text-sm opacity-80">L1→L2→L3→L4(Ops)</p>
                  </div>
                  <span className="font-bold text-green-400">50-70h</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border-l-4 border-red-400">
                  <div>
                    <h3 className="font-bold text-red-400">Security Analyst</h3>
                    <p className="text-sm opacity-80">L1→L2→L3→L4(Sec)</p>
                  </div>
                  <span className="font-bold text-red-400">40-60h</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border-l-4 border-cyan-400">
                  <div>
                    <h3 className="font-bold text-cyan-400">Data Engineer</h3>
                    <p className="text-sm opacity-80">L1→L2→L3→L4(Data)</p>
                  </div>
                  <span className="font-bold text-cyan-400">60-80h</span>
                </div>
              </div>
            </div>
            
            {/* Instructions */}
            <div className="bg-slate-700/80 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Info size={32} className="text-purple-400" />
                <h2 className="text-xl font-bold text-purple-400">How to Use This Tool</h2>
              </div>
              
              <ol className="space-y-2 text-base">
                <li><span className="font-bold text-purple-400">1.</span> Start at Level 1 with the role or project in mind</li>
                <li><span className="font-bold text-purple-400">2.</span> Follow Yes/No paths based on role responsibilities</li>
                <li><span className="font-bold text-purple-400">3.</span> Select technical track at Level 4 based on primary function</li>
                <li><span className="font-bold text-purple-400">4.</span> Add hours for additional considerations at Level 5</li>
                <li><span className="font-bold text-purple-400">5.</span> Use Quick Reference for common roles</li>
              </ol>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex-none text-center py-4">
          <p className="text-base opacity-70">Training hours are estimates based on foundation-level competency | Adjust for individual experience</p>
        </div>
      </div>
    </div>
  );
}
