
import { Calendar, Rocket, TrendingUp, Award } from 'lucide-react';

export default function Slide15() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-b from-slate-900 to-slate-700 text-white">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex-none text-center py-12">
          <h1 className="text-6xl font-bold text-white mb-4">Implementation Strategy</h1>
          <h2 className="text-3xl opacity-70">Phased approach to building AI capabilities organization-wide</h2>
        </div>
        
        {/* Implementation Roadmap */}
        <div className="flex-none px-16 mb-8">
          <div className="bg-slate-800/80 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <Calendar size={48} className="text-purple-400" />
              <h2 className="text-4xl font-bold text-purple-400">12-Month Implementation Roadmap</h2>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600/20 rounded-lg p-6 border-t-4 border-blue-500">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">Phase 1: Foundation</h3>
                  <p className="text-xl text-blue-300 mb-2">Months 1-3</p>
                  <p className="text-lg">Assess, plan, pilot</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-green-600/20 rounded-lg p-6 border-t-4 border-green-500">
                  <h3 className="text-2xl font-bold text-green-400 mb-2">Phase 2: Expansion</h3>
                  <p className="text-xl text-green-300 mb-2">Months 4-8</p>
                  <p className="text-lg">Scale training, measure progress</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-600/20 rounded-lg p-6 border-t-4 border-purple-500">
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">Phase 3: Maturity</h3>
                  <p className="text-xl text-purple-300 mb-2">Months 9-12</p>
                  <p className="text-lg">Refine, optimize, embed</p>
                </div>
              </div>
            </div>
            
            {/* Timeline arrows */}
            <div className="flex items-center justify-center mt-6">
              <div className="flex items-center gap-8">
                <span className="text-blue-400 text-3xl">→</span>
                <span className="text-green-400 text-3xl">→</span>
                <span className="text-purple-400 text-3xl">✓</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Phase Details */}
        <div className="flex-1 grid grid-cols-3 gap-8 px-16 pb-16">
          {/* Phase 1: Foundation */}
          <div className="bg-slate-700/80 rounded-xl p-8 border-l-4 border-blue-500">
            <div className="flex items-center gap-3 mb-6">
              <Rocket size={32} className="text-blue-400" />
              <div>
                <h2 className="text-2xl font-bold text-blue-400">Phase 1: Foundation</h2>
                <p className="text-lg text-blue-300">Months 1-3</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-blue-300">Objectives</h3>
                <ul className="space-y-2 text-lg">
                  <li>• Establish baseline AI capabilities assessment</li>
                  <li>• Identify priority roles and skill gaps</li>
                  <li>• Launch pilot program with 15-20 participants</li>
                  <li>• Secure executive sponsorship and budget</li>
                  <li>• Set up learning infrastructure and resources</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-blue-300">Key Activities</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Month 1</h4>
                    <p className="text-base">Skills assessment survey, Stakeholder interviews, Framework customization</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Month 2</h4>
                    <p className="text-base">Pilot group selection, Training platform setup, Kick-off workshops</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Month 3</h4>
                    <p className="text-base">Pilot training delivery, Hands-on labs, Initial feedback collection</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-blue-300">Success Metrics</h3>
                <ul className="space-y-1 text-base">
                  <li>• Baseline assessment completed</li>
                  <li>• Pilot participants enrolled and engaged</li>
                  <li>• 80% pilot completion rate</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Phase 2: Expansion */}
          <div className="bg-slate-700/80 rounded-xl p-8 border-l-4 border-green-500">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp size={32} className="text-green-400" />
              <div>
                <h2 className="text-2xl font-bold text-green-400">Phase 2: Expansion</h2>
                <p className="text-lg text-green-300">Months 4-8</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-green-300">Objectives</h3>
                <ul className="space-y-2 text-lg">
                  <li>• Scale training to broader IT organization</li>
                  <li>• Develop role-specific learning paths</li>
                  <li>• Establish community of practice</li>
                  <li>• Launch applied AI projects</li>
                  <li>• Measure competency development</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-green-300">Key Activities</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Months 4-5</h4>
                    <p className="text-base">Roll out training to 50+ staff, Create internal learning community, Start project-based learning</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Months 6-7</h4>
                    <p className="text-base">Advanced tracks for early adopters, Mentorship program launch, Quarterly competency assessments</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Month 8</h4>
                    <p className="text-base">Mid-program review, Adjust based on feedback, Celebrate quick wins</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-green-300">Success Metrics</h3>
                <ul className="space-y-1 text-base">
                  <li>• 100+ staff enrolled in training</li>
                  <li>• 5+ applied AI projects initiated</li>
                  <li>• 70% competency target achievement</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Phase 3: Maturity */}
          <div className="bg-slate-700/80 rounded-xl p-8 border-l-4 border-purple-500">
            <div className="flex items-center gap-3 mb-6">
              <Award size={32} className="text-purple-400" />
              <div>
                <h2 className="text-2xl font-bold text-purple-400">Phase 3: Maturity</h2>
                <p className="text-lg text-purple-300">Months 9-12</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-purple-300">Objectives</h3>
                <ul className="space-y-2 text-lg">
                  <li>• Achieve organization-wide AI literacy</li>
                  <li>• Embed AI skills in career development</li>
                  <li>• Optimize training based on outcomes</li>
                  <li>• Establish continuous learning culture</li>
                  <li>• Plan for advanced capability building</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-purple-300">Key Activities</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Months 9-10</h4>
                    <p className="text-base">Full organizational rollout, Integration with performance reviews, Advanced certification tracks</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Months 11-12</h4>
                    <p className="text-base">Program evaluation and ROI analysis, Update framework based on learnings, Plan Year 2 roadmap</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-purple-300">Success Metrics</h3>
                <ul className="space-y-1 text-base">
                  <li>• 80% of IT staff at Awareness level</li>
                  <li>• 40% at Literacy level</li>
                  <li>• 20% at Practitioner level</li>
                  <li>• Measurable AI project impact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex-none text-center py-4">
          <p className="text-base opacity-70">Estimated total investment: $150K-250K for 200-person IT organization | ROI expected within 18 months</p>
        </div>
      </div>
    </div>
  );
}
