
import { Lightbulb, Target, MessageSquare, GitBranch } from 'lucide-react';

export default function Slide6() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-b from-slate-900 to-slate-700 text-white">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex-none text-center py-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Lightbulb size={48} className="text-orange-400" />
            <h1 className="text-6xl font-bold text-white">Product Managers</h1>
          </div>
          <h2 className="text-3xl opacity-80">AI Strategy, Planning & Communication Skills</h2>
          <div className="mt-4">
            <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-lg font-semibold">Primary: AI Citizen</span>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 grid grid-cols-[2fr_1fr] grid-rows-2 gap-8 px-16 pb-16">
          {/* Strategic Skills - Top Left */}
          <div className="bg-slate-800/80 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Target size={32} className="text-orange-400" />
              <h2 className="text-4xl font-bold text-orange-400">AI Strategy & Problem Definition</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-orange-300 mb-3">Opportunity Identification</h3>
                <ul className="space-y-2 text-lg">
                  <li>• Identify processes suitable for AI augmentation</li>
                  <li>• Assess AI feasibility and business value</li>
                  <li>• Differentiate AI hype from practical applications</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-orange-300 mb-3">Solution Specification</h3>
                <ul className="space-y-2 text-lg">
                  <li>• Define AI requirements and success metrics</li>
                  <li>• Understand ML problem types (classification, regression, clustering, etc.)</li>
                  <li>• Specify data requirements and quality thresholds</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-orange-300 mb-3">Vendor Evaluation</h3>
                <ul className="space-y-2 text-lg">
                  <li>• Evaluate build vs buy vs partner decisions</li>
                  <li>• Assess AI vendor capabilities and claims</li>
                  <li>• Understand pricing models for AI services</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Communication Skills - Bottom Left */}
          <div className="bg-slate-800/80 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare size={32} className="text-orange-400" />
              <h2 className="text-4xl font-bold text-orange-400">Communication & Stakeholder Management</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-orange-300 mb-3">Cross-Functional Communication</h3>
                <ul className="space-y-2 text-lg">
                  <li>• Translate business needs to technical requirements</li>
                  <li>• Communicate AI limitations to stakeholders</li>
                  <li>• Facilitate discussions between business and AI teams</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-orange-300 mb-3">Ethical & Responsible AI</h3>
                <ul className="space-y-2 text-lg">
                  <li>• Identify bias and fairness concerns in AI features</li>
                  <li>• Ensure transparency in AI-driven decisions</li>
                  <li>• Navigate privacy and regulatory requirements</li>
                  <li>• Implement responsible AI principles in product design</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Decision Framework - Right Column Spanning Both Rows */}
          <div className="row-span-2 bg-slate-700/80 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <GitBranch size={32} className="text-purple-400" />
              <h2 className="text-3xl font-bold text-purple-400">AI Feature Decision Framework</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-lg p-4 border-l-4 border-purple-400">
                <h3 className="text-lg font-bold mb-2">1. Is there sufficient quality data?</h3>
                <div className="flex gap-4">
                  <span className="text-green-400 font-semibold">Yes:</span> <span>Proceed to next question</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange-400 font-semibold">No:</span> <span>Assess data collection feasibility</span>
                </div>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-4 border-l-4 border-purple-400">
                <h3 className="text-lg font-bold mb-2">2. Is the problem well-defined?</h3>
                <div className="flex gap-4">
                  <span className="text-green-400 font-semibold">Yes:</span> <span>Proceed to next question</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange-400 font-semibold">No:</span> <span>Refine problem definition first</span>
                </div>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-4 border-l-4 border-purple-400">
                <h3 className="text-lg font-bold mb-2">3. Can success be measured?</h3>
                <div className="flex gap-4">
                  <span className="text-green-400 font-semibold">Yes:</span> <span>Proceed to next question</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange-400 font-semibold">No:</span> <span>Define clear success metrics</span>
                </div>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-4 border-l-4 border-purple-400">
                <h3 className="text-lg font-bold mb-2">4. Is AI better than rules-based?</h3>
                <div className="flex gap-4">
                  <span className="text-green-400 font-semibold">Yes:</span> <span>Proceed to next question</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange-400 font-semibold">No:</span> <span>Consider simpler approaches</span>
                </div>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-4 border-l-4 border-purple-400">
                <h3 className="text-lg font-bold mb-2">5. Are risks acceptable?</h3>
                <div className="flex gap-4">
                  <span className="text-green-400 font-semibold">Yes:</span> <span>Proceed with AI solution</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange-400 font-semibold">No:</span> <span>Implement risk mitigation first</span>
                </div>
              </div>
              
              <div className="bg-purple-900/30 rounded-lg p-4 mt-6">
                <p className="text-lg italic text-purple-300">Use this framework in early product discovery</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex-none text-center py-4">
          <p className="text-base opacity-70">Training estimate: 24-40 hours foundation | Focus on AI literacy and communication</p>
        </div>
      </div>
    </div>
  );
}

