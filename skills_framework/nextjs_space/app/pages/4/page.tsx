
export default function Slide4() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-b from-slate-900 to-slate-700 text-white">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex-none text-center py-12">
          <h1 className="text-6xl font-bold text-white mb-4">Role-Based AI Skills Overview</h1>
          <h2 className="text-3xl opacity-70">Capability requirements across IT/Technology roles</h2>
        </div>
        
        {/* Main Table */}
        <div className="flex-1 px-16 pb-16">
          <div className="bg-slate-800/80 rounded-xl p-8 h-full overflow-hidden">
            <table className="w-full text-lg">
              <thead>
                <tr className="bg-slate-700">
                  <th className="p-4 text-left font-bold border-r border-slate-600">IT/Tech Role</th>
                  <th className="p-4 text-center font-bold border-r border-slate-600">AI Literacy</th>
                  <th className="p-4 text-center font-bold border-r border-slate-600">Technical Integration</th>
                  <th className="p-4 text-center font-bold border-r border-slate-600">Architecture & Design</th>
                  <th className="p-4 text-center font-bold border-r border-slate-600">Operations & Monitoring</th>
                  <th className="p-4 text-center font-bold border-r border-slate-600">Security & Governance</th>
                  <th className="p-4 text-center font-bold">Primary Persona</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-slate-900/30 odd:bg-slate-800/30">
                  <td className="p-4 font-semibold border-r border-slate-600 text-blue-400">Software Developers</td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                      <span>Medium</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <span>High</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                      <span>Medium</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
                      <span>Low</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                      <span>Medium</span>
                    </span>
                  </td>
                  <td className="p-4 text-center text-blue-400 font-semibold">AI Worker</td>
                </tr>
                
                <tr className="even:bg-slate-900/30 odd:bg-slate-800/30">
                  <td className="p-4 font-semibold border-r border-slate-600 text-orange-400">Product Managers</td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <span>High</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
                      <span>Low</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                      <span>Medium</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
                      <span>Low</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <span>High</span>
                    </span>
                  </td>
                  <td className="p-4 text-center text-orange-400 font-semibold">AI Citizen</td>
                </tr>
                
                <tr className="even:bg-slate-900/30 odd:bg-slate-800/30">
                  <td className="p-4 font-semibold border-r border-slate-600 text-purple-400">System Architects</td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <span>High</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                      <span>Medium</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <span>High</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                      <span>Medium</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <span>High</span>
                    </span>
                  </td>
                  <td className="p-4 text-center text-purple-400 font-semibold">AI Worker</td>
                </tr>
                
                <tr className="even:bg-slate-900/30 odd:bg-slate-800/30">
                  <td className="p-4 font-semibold border-r border-slate-600 text-green-400">DevOps/Operations</td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                      <span>Medium</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                      <span>Medium</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
                      <span>Low</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <span>High</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                      <span>Medium</span>
                    </span>
                  </td>
                  <td className="p-4 text-center text-green-400 font-semibold">AI Worker</td>
                </tr>
                
                <tr className="even:bg-slate-900/30 odd:bg-slate-800/30">
                  <td className="p-4 font-semibold border-r border-slate-600 text-red-400">Security Teams</td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <span>High</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
                      <span>Low</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
                      <span>Low</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                      <span>Medium</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <span>High</span>
                    </span>
                  </td>
                  <td className="p-4 text-center text-red-400 font-semibold">AI Worker</td>
                </tr>
                
                <tr className="even:bg-slate-900/30 odd:bg-slate-800/30">
                  <td className="p-4 font-semibold border-r border-slate-600 text-cyan-400">Data Engineers</td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                      <span>Medium</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <span>High</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                      <span>Medium</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <span>High</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                      <span>Medium</span>
                    </span>
                  </td>
                  <td className="p-4 text-center text-cyan-400 font-semibold">AI Worker</td>
                </tr>
                
                <tr className="even:bg-slate-900/30 odd:bg-slate-800/30">
                  <td className="p-4 font-semibold border-r border-slate-600 text-purple-400">Tech Leads</td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <span>High</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                      <span>Medium</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <span>High</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                      <span>Medium</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <span>High</span>
                    </span>
                  </td>
                  <td className="p-4 text-center text-purple-400 font-semibold">AI Worker</td>
                </tr>
                
                <tr className="even:bg-slate-900/30 odd:bg-slate-800/30">
                  <td className="p-4 font-semibold border-r border-slate-600 text-orange-400">QA/Testing</td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                      <span>Medium</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                      <span>Medium</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
                      <span>Low</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                      <span>Medium</span>
                    </span>
                  </td>
                  <td className="p-4 text-center border-r border-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                      <span>Medium</span>
                    </span>
                  </td>
                  <td className="p-4 text-center text-orange-400 font-semibold">AI Citizen</td>
                </tr>
              </tbody>
            </table>
            
            {/* Legend */}
            <div className="mt-8 flex items-center justify-center gap-8 text-base">
              <h3 className="font-semibold">Skill Level Indicators:</h3>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span>High: Core competency, extensive training needed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                <span>Medium: Working knowledge, moderate training</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
                <span>Low: Basic awareness sufficient</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex-none text-center py-4">
          <p className="text-base opacity-60">Detailed breakdowns on following slides</p>
        </div>
      </div>
    </div>
  );
}
