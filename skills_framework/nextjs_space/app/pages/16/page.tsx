
import { CheckSquare, BookOpen, Mail, Sparkles } from 'lucide-react';

export default function Slide16() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-b from-slate-900 to-slate-700 text-white">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex-none text-center py-12">
          <h1 className="text-6xl font-bold text-white mb-4">Resources & Next Steps</h1>
          <h2 className="text-3xl opacity-80">Begin your AI capability journey today</h2>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 grid grid-rows-[auto_1fr] gap-8 px-16">
          {/* Top Row */}
          <div className="grid grid-cols-2 gap-12">
            {/* Immediate Next Steps */}
            <div className="bg-slate-800/80 rounded-xl p-8 border-l-4 border-blue-500">
              <div className="flex items-center gap-4 mb-6">
                <CheckSquare size={48} className="text-blue-400" />
                <h2 className="text-3xl font-bold text-blue-400">Immediate Next Steps</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-300">Leadership Actions</h3>
                  <ul className="space-y-3 text-xl">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">✓</span>
                      <p>Review and approve final framework</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">✓</span>
                      <p>Commit implementation budget and resources</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">✓</span>
                      <p>Assign executive sponsors for rollout</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">✓</span>
                      <p>Schedule organization-wide launch session</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">✓</span>
                      <p>Establish framework steering committee</p>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-emerald-300">Manager Actions</h3>
                  <ul className="space-y-3 text-xl">
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">✓</span>
                      <p>Attend framework training sessions</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">✓</span>
                      <p>Review current team member levels</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">✓</span>
                      <p>Prepare for calibration discussions</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">✓</span>
                      <p>Schedule 1-on-1s to discuss framework</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">✓</span>
                      <p>Identify development needs for team members</p>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-purple-300">Individual Actions</h3>
                  <ul className="space-y-3 text-xl">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">✓</span>
                      <p>Review framework documentation thoroughly</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">✓</span>
                      <p>Self-assess against current level criteria</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">✓</span>
                      <p>Identify skill gaps and development opportunities</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">✓</span>
                      <p>Discuss career goals with manager</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">✓</span>
                      <p>Create personal development plan</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Key Resources */}
            <div className="bg-slate-800/80 rounded-xl p-8 border-l-4 border-purple-500">
              <div className="flex items-center gap-4 mb-6">
                <BookOpen size={48} className="text-purple-400" />
                <h2 className="text-3xl font-bold text-purple-400">Key Resources & References</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-purple-300">Framework References</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• The Alan Turing Institute - AI Skills Framework</li>
                    <li>• SFIA Foundation - Skills Framework for the Information Age</li>
                    <li>• DataCamp - Data & AI Competency Framework</li>
                    <li>• NIST AI Risk Management Framework</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3 text-purple-300">Cloud AI Documentation</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• AWS AI & Machine Learning Documentation</li>
                    <li>• Microsoft Azure AI Fundamentals</li>
                    <li>• Google Cloud AI & ML Products</li>
                    <li>• AI Service Comparison Guide (Enterprise)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3 text-purple-300">Training Platforms</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Coursera for Government & Enterprise</li>
                    <li>• AWS Training and Certification</li>
                    <li>• Microsoft Learn for Azure AI</li>
                    <li>• Google Cloud Skills Boost</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3 text-purple-300">Community & Events</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Internal AI Community of Practice (to be established)</li>
                    <li>• Government AI Network</li>
                    <li>• Cloud AI Summit Series</li>
                    <li>• AI Ethics & Governance Forums</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Row - Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Sparkles size={48} className="text-white" />
              <h2 className="text-4xl font-bold text-white">Ready to Transform Your IT Organization?</h2>
            </div>
            
            <p className="text-2xl mb-8 italic">The AI revolution is here. Equip your teams with the skills they need to lead in an AI-augmented future.</p>
            
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-300">Program Lead Contact</h3>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-xl mb-2">AI Skills Framework Implementation Team</p>
                  <p className="text-lg"><span className="font-semibold">Email:</span> ai-skills@agency.gov</p>
                  <p className="text-lg"><span className="font-semibold">Portal:</span> intranet/ai-skills-framework</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-300">Supporting Points</h3>
                <ul className="text-left space-y-2 text-lg">
                  <li>• Comprehensive framework covering 6+ IT roles</li>
                  <li>• Practical, cloud-based learning approach</li>
                  <li>• Clear progression from awareness to expertise</li>
                  <li>• 12-month implementation roadmap with measurable outcomes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex-none text-center py-4">
          <p className="text-base opacity-60">AI Skills Framework v1.0 | Government Technology Agency | 2024 | Questions? Contact ai-skills@agency.gov</p>
        </div>
      </div>
    </div>
  );
}
