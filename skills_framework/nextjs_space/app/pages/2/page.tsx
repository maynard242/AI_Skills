
import { AlertCircle, Target, Compass } from 'lucide-react';

export default function Slide2() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-b from-slate-900 to-slate-700 text-white">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex-none text-center py-12">
          <h1 className="text-6xl font-bold text-white mb-4">Framework Overview & Strategic Context</h1>
          <h2 className="text-3xl opacity-70">Why AI capabilities matter for every IT role</h2>
        </div>
        
        {/* Main Content Grid */}
        <div className="flex-1 grid grid-cols-2 grid-rows-[auto_1fr] gap-12 px-16 pb-16">
          {/* Top Left - The Challenge */}
          <div className="bg-slate-800/80 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <AlertCircle size={48} className="text-orange-400" />
              <h2 className="text-4xl font-bold text-orange-400">The Challenge</h2>
            </div>
            <ul className="space-y-4 text-xl">
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">•</span>
                <p>AI is transforming every aspect of IT delivery</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">•</span>
                <p>Traditional IT roles require new capabilities</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">•</span>
                <p>Cloud platforms democratizing AI access</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">•</span>
                <p>Skills gap hindering digital transformation</p>
              </li>
            </ul>
          </div>
          
          {/* Top Right - Strategic Drivers */}
          <div className="bg-slate-800/80 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <Target size={48} className="text-purple-400" />
              <h2 className="text-4xl font-bold text-purple-400">Strategic Drivers</h2>
            </div>
            <ul className="space-y-4 text-xl">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <p>Enable AI-augmented IT operations</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <p>Build vs buy decision capability</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <p>Responsible AI implementation</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <p>Future-proof workforce skills</p>
              </li>
            </ul>
          </div>
          
          {/* Bottom Row - Framework Principles */}
          <div className="col-span-2 bg-slate-800/80 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <Compass size={48} className="text-blue-400" />
              <h2 className="text-4xl font-bold text-blue-400">Core Framework Principles</h2>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <ul className="space-y-4 text-xl">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <p><span className="font-semibold">Role-Based:</span> Skills mapped to specific IT/tech functions</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <p><span className="font-semibold">Progressive:</span> Clear pathways from awareness to proficiency</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <p><span className="font-semibold">Practical:</span> Focus on cloud-based, accessible AI tools</p>
                </li>
              </ul>
              <ul className="space-y-4 text-xl">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <p><span className="font-semibold">Ethical:</span> Emphasis on responsible AI and data stewardship</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <p><span className="font-semibold">Integrated:</span> Combines technical skills with critical thinking</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex-none text-center py-4">
          <p className="text-base opacity-60">Based on Turing Institute, DataCamp, SFIA, and Cloud AI frameworks</p>
        </div>
      </div>
    </div>
  );
}
