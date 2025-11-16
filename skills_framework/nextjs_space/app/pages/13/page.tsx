
import { Eye, BookOpen, Wrench, Award } from 'lucide-react';

export default function Slide13() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-b from-slate-900 to-slate-700 text-white">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex-none text-center py-12">
          <h1 className="text-6xl font-bold text-white mb-4">Competency Progression Framework</h1>
          <h2 className="text-3xl opacity-70">Four-level advancement pathway for AI capabilities</h2>
        </div>
        
        {/* Progression Levels Overview */}
        <div className="flex-none px-16 mb-8">
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-slate-800/80 rounded-xl p-6 text-center border-t-4 border-gray-500">
              <Eye size={32} className="mx-auto mb-4 text-gray-400" />
              <h3 className="text-2xl font-bold mb-2">1. Awareness</h3>
              <p className="text-lg mb-3">Understand AI concepts, capabilities, and limitations</p>
              <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-bold">8-16 hours</span>
            </div>
            
            <div className="bg-slate-800/80 rounded-xl p-6 text-center border-t-4 border-blue-500">
              <BookOpen size={32} className="mx-auto mb-4 text-blue-400" />
              <h3 className="text-2xl font-bold mb-2">2. Literacy</h3>
              <p className="text-lg mb-3">Communicate about AI, evaluate solutions, make informed decisions</p>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">24-40 hours</span>
            </div>
            
            <div className="bg-slate-800/80 rounded-xl p-6 text-center border-t-4 border-green-500">
              <Wrench size={32} className="mx-auto mb-4 text-green-400" />
              <h3 className="text-2xl font-bold mb-2">3. Practitioner</h3>
              <p className="text-lg mb-3">Use AI tools, integrate services, implement solutions</p>
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">60-120 hours</span>
            </div>
            
            <div className="bg-slate-800/80 rounded-xl p-6 text-center border-t-4 border-purple-500">
              <Award size={32} className="mx-auto mb-4 text-purple-400" />
              <h3 className="text-2xl font-bold mb-2">4. Expert</h3>
              <p className="text-lg mb-3">Design architectures, lead implementations, drive strategy</p>
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">160+ hours</span>
            </div>
          </div>
          
          {/* Progression indicator */}
          <div className="flex items-center justify-center mt-6">
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-2xl">→</span>
              <span className="text-blue-400 text-2xl">→</span>
              <span className="text-green-400 text-2xl">→</span>
              <span className="text-purple-400 text-2xl">✓</span>
            </div>
          </div>
        </div>
        
        {/* Detailed Competency Table */}
        <div className="flex-1 px-16 pb-16">
          <div className="bg-slate-800/80 rounded-xl p-8 h-full overflow-hidden">
            <table className="w-full text-base">
              <thead>
                <tr className="bg-slate-700">
                  <th className="p-4 text-left font-bold border-r border-slate-600">Competency Domain</th>
                  <th className="p-4 text-center font-bold border-r border-slate-600 bg-gray-600/20">Level 1: Awareness</th>
                  <th className="p-4 text-center font-bold border-r border-slate-600 bg-blue-600/20">Level 2: Literacy</th>
                  <th className="p-4 text-center font-bold border-r border-slate-600 bg-green-600/20">Level 3: Practitioner</th>
                  <th className="p-4 text-center font-bold bg-purple-600/20">Level 4: Expert</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-slate-900/30 odd:bg-slate-800/30">
                  <td className="p-4 font-bold border-r border-slate-600">AI Fundamentals</td>
                  <td className="p-4 border-r border-slate-600">Recognize AI use cases</td>
                  <td className="p-4 border-r border-slate-600">Explain ML concepts and approaches</td>
                  <td className="p-4 border-r border-slate-600">Select appropriate ML techniques</td>
                  <td className="p-4">Design novel AI solutions</td>
                </tr>
                
                <tr className="even:bg-slate-900/30 odd:bg-slate-800/30">
                  <td className="p-4 font-bold border-r border-slate-600">Technical Skills</td>
                  <td className="p-4 border-r border-slate-600">None required</td>
                  <td className="p-4 border-r border-slate-600">Basic API usage concepts</td>
                  <td className="p-4 border-r border-slate-600">Implement AI integrations, use SDKs</td>
                  <td className="p-4">Architect complex AI systems</td>
                </tr>
                
                <tr className="even:bg-slate-900/30 odd:bg-slate-800/30">
                  <td className="p-4 font-bold border-r border-slate-600">Data Literacy</td>
                  <td className="p-4 border-r border-slate-600">Understand data importance</td>
                  <td className="p-4 border-r border-slate-600">Assess data quality and sufficiency</td>
                  <td className="p-4 border-r border-slate-600">Prepare data for ML, feature engineering</td>
                  <td className="p-4">Design data strategies for AI</td>
                </tr>
                
                <tr className="even:bg-slate-900/30 odd:bg-slate-800/30">
                  <td className="p-4 font-bold border-r border-slate-600">Ethics & Governance</td>
                  <td className="p-4 border-r border-slate-600">Recognize bias and fairness issues</td>
                  <td className="p-4 border-r border-slate-600">Apply ethical frameworks to AI decisions</td>
                  <td className="p-4 border-r border-slate-600">Implement responsible AI practices</td>
                  <td className="p-4">Lead governance programs</td>
                </tr>
                
                <tr className="even:bg-slate-900/30 odd:bg-slate-800/30">
                  <td className="p-4 font-bold border-r border-slate-600">Cloud AI Services</td>
                  <td className="p-4 border-r border-slate-600">Aware of available services</td>
                  <td className="p-4 border-r border-slate-600">Compare and select services</td>
                  <td className="p-4 border-r border-slate-600">Configure and deploy services</td>
                  <td className="p-4">Design multi-service architectures</td>
                </tr>
                
                <tr className="even:bg-slate-900/30 odd:bg-slate-800/30">
                  <td className="p-4 font-bold border-r border-slate-600">Problem Solving</td>
                  <td className="p-4 border-r border-slate-600">Identify AI-suitable problems</td>
                  <td className="p-4 border-r border-slate-600">Frame problems for AI solutions</td>
                  <td className="p-4 border-r border-slate-600">Solve problems using AI tools</td>
                  <td className="p-4">Define new problem categories</td>
                </tr>
                
                <tr className="even:bg-slate-900/30 odd:bg-slate-800/30">
                  <td className="p-4 font-bold border-r border-slate-600">Communication</td>
                  <td className="p-4 border-r border-slate-600">Discuss AI at high level</td>
                  <td className="p-4 border-r border-slate-600">Translate between technical and business</td>
                  <td className="p-4 border-r border-slate-600">Document AI implementations</td>
                  <td className="p-4">Present AI strategy to executives</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex-none text-center py-4">
          <p className="text-base opacity-70">Progression is role-specific | Not all roles require Level 4 expertise | Focus on relevant domains</p>
        </div>
      </div>
    </div>
  );
}
