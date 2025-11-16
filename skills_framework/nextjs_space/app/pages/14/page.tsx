
import { GraduationCap, Users, Wrench, BookOpen, CheckCircle } from 'lucide-react';

export default function Slide14() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-b from-slate-900 to-slate-700 text-white">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex-none text-center py-12">
          <h1 className="text-6xl font-bold text-white mb-4">Training & Development Pathways</h1>
          <h2 className="text-3xl opacity-70">Structured learning approach for AI capability building</h2>
        </div>
        
        {/* Training Approach Overview */}
        <div className="flex-none px-16 mb-8">
          <div className="bg-slate-800/80 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <GraduationCap size={48} className="text-purple-400" />
              <h2 className="text-4xl font-bold text-purple-400">Blended Learning Approach</h2>
            </div>
            
            <p className="text-2xl mb-6 italic">Combine self-paced learning, hands-on practice, and project-based application</p>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-purple-600/20 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-purple-300 mb-3">Foundation (30%)</h3>
                  <div className="h-4 bg-purple-600 rounded-full mb-4"></div>
                  <ul className="text-lg space-y-2">
                    <li>• Online courses and certifications</li>
                    <li>• Documentation and reading</li>
                    <li>• AI literacy programs</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600/20 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-blue-300 mb-3">Practice (40%)</h3>
                  <div className="h-4 bg-blue-600 rounded-full mb-4"></div>
                  <ul className="text-lg space-y-2">
                    <li>• Hands-on labs and sandboxes</li>
                    <li>• Cloud platform tutorials</li>
                    <li>• Practice projects with real data</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-green-600/20 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-green-300 mb-3">Application (30%)</h3>
                  <div className="h-4 bg-green-600 rounded-full mb-4"></div>
                  <ul className="text-lg space-y-2">
                    <li>• Work-based projects</li>
                    <li>• Peer learning and collaboration</li>
                    <li>• Mentorship and coaching</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Learning Pathways */}
        <div className="flex-1 grid grid-cols-2 gap-8 px-16 pb-8">
          {/* AI Citizen Pathway */}
          <div className="bg-slate-700/80 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <Users size={32} className="text-orange-400" />
              <div>
                <h2 className="text-2xl font-bold text-orange-400">AI Citizen Learning Path</h2>
                <p className="text-lg text-orange-300">Product Managers, Business Analysts, Junior IT staff</p>
                <p className="text-base opacity-80">6-8 weeks, 6-8 hours/week</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-lg p-4 border-l-4 border-orange-400">
                <h3 className="font-bold text-orange-300 mb-2">Week 1-2: AI Fundamentals</h3>
                <p className="text-base mb-2">What is AI/ML? Common AI use cases, AI capabilities and limitations</p>
                <p className="text-sm italic">Resources: Coursera AI For Everyone, Google AI Essentials</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-4 border-l-4 border-orange-400">
                <h3 className="font-bold text-orange-300 mb-2">Week 3-4: Data & AI Literacy</h3>
                <p className="text-base mb-2">Data fundamentals, Reading ML results, Data quality assessment</p>
                <p className="text-sm italic">Resources: DataCamp Data Literacy, Microsoft AI Business School</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-4 border-l-4 border-orange-400">
                <h3 className="font-bold text-orange-300 mb-2">Week 5-6: Ethics & Decision Making</h3>
                <p className="text-base mb-2">Responsible AI principles, Bias and fairness, AI risk assessment</p>
                <p className="text-sm italic">Resources: Turing Institute Resources, Ethics in AI (edX)</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-4 border-l-4 border-orange-400">
                <h3 className="font-bold text-orange-300 mb-2">Week 7-8: Practical Application</h3>
                <p className="text-base mb-2">Using AI tools, Evaluating AI solutions, Communicating with AI teams</p>
                <p className="text-sm italic">Resources: Hands-on project, Case studies</p>
              </div>
            </div>
          </div>
          
          {/* AI Worker Pathway */}
          <div className="bg-slate-700/80 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <Wrench size={32} className="text-blue-400" />
              <div>
                <h2 className="text-2xl font-bold text-blue-400">AI Worker Learning Path</h2>
                <p className="text-lg text-blue-300">Developers, Architects, Data Engineers, DevOps</p>
                <p className="text-base opacity-80">12-16 weeks, 8-10 hours/week</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-lg p-4 border-l-4 border-blue-400">
                <h3 className="font-bold text-blue-300 mb-2">Week 1-3: AI/ML Foundations</h3>
                <p className="text-base mb-2">ML algorithms overview, Training vs inference, Model evaluation</p>
                <p className="text-sm italic">Resources: AWS ML Foundations, Azure AI Fundamentals</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-4 border-l-4 border-blue-400">
                <h3 className="font-bold text-blue-300 mb-2">Week 4-7: Cloud AI Services</h3>
                <p className="text-base mb-2">Platform AI services, API integration, Service selection</p>
                <p className="text-sm italic">Resources: Platform-specific training, Hands-on labs</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-4 border-l-4 border-blue-400">
                <h3 className="font-bold text-blue-300 mb-2">Week 8-11: Role-Specific Deep Dive</h3>
                <p className="text-base mb-2">See role-specific slides (5-10), Technical implementation, Best practices</p>
                <p className="text-sm italic">Resources: Role-based certifications, Advanced labs</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-4 border-l-4 border-blue-400">
                <h3 className="font-bold text-blue-300 mb-2">Week 12-16: Applied Project</h3>
                <p className="text-base mb-2">Real-world implementation, MLOps practices, Production deployment</p>
                <p className="text-sm italic">Resources: Capstone project, Mentored work</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Resources */}
        <div className="flex-none grid grid-cols-2 gap-8 px-16 pb-8">
          {/* Learning Resources */}
          <div className="bg-slate-700/80 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen size={32} className="text-purple-400" />
              <h2 className="text-2xl font-bold text-purple-400">Recommended Learning Platforms</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-purple-300 mb-2">General AI Literacy</h3>
                <ul className="text-base space-y-1">
                  <li>• Coursera</li>
                  <li>• edX</li>
                  <li>• LinkedIn Learning</li>
                  <li>• Udacity</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-purple-300 mb-2">Cloud Platforms</h3>
                <ul className="text-base space-y-1">
                  <li>• AWS Training</li>
                  <li>• Azure Learn</li>
                  <li>• Google Cloud Skills Boost</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-purple-300 mb-2">Hands-On Practice</h3>
                <ul className="text-base space-y-1">
                  <li>• DataCamp</li>
                  <li>• Kaggle Learn</li>
                  <li>• Qwiklabs</li>
                  <li>• A Cloud Guru</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-purple-300 mb-2">Certifications</h3>
                <ul className="text-base space-y-1">
                  <li>• AWS ML Specialty</li>
                  <li>• Azure AI Engineer</li>
                  <li>• Google ML Engineer</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Implementation Best Practices */}
          <div className="bg-slate-700/80 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle size={32} className="text-purple-400" />
              <h2 className="text-2xl font-bold text-purple-400">Implementation Best Practices</h2>
            </div>
            
            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <p>Start with pilot group of 10-15 enthusiastic team members</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <p>Align training with actual project work for immediate application</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <p>Establish internal community of practice for knowledge sharing</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <p>Partner with cloud vendor training teams for customized content</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <p>Budget 20% time for learning and experimentation</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <p>Track competency development with assessments</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <p>Celebrate successes and share learnings organization-wide</p>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex-none text-center py-4">
          <p className="text-base opacity-70">Budget estimate: $1,500-3,000 per person for comprehensive training program</p>
        </div>
      </div>
    </div>
  );
}
