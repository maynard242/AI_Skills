
import { Code, Plug, Brain, Database, Shield, Wrench, TrendingUp } from 'lucide-react';

export default function Slide5() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-b from-slate-900 to-slate-700 text-white">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex-none text-center py-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Code size={48} className="text-blue-400" />
            <h1 className="text-6xl font-bold text-white">Software Developers</h1>
          </div>
          <h2 className="text-3xl opacity-80">AI Integration & Development Skills</h2>
          <div className="mt-4">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-lg font-semibold">Primary: AI Worker</span>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 grid grid-cols-[2fr_1fr] grid-rows-2 gap-8 px-16 pb-16">
          {/* Core Skills - Left Column Spanning Both Rows */}
          <div className="row-span-2 bg-slate-800/80 rounded-xl p-8">
            <h2 className="text-4xl font-bold text-blue-400 mb-8">Core AI Capabilities</h2>
            
            <div className="space-y-8">
              {/* AI Service Integration */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Plug size={32} className="text-blue-400" />
                  <h3 className="text-2xl font-bold text-blue-400">AI Service Integration</h3>
                </div>
                <ul className="space-y-2 text-lg ml-10">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-2 w-1 h-1 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <p>Consume REST APIs from AI/ML services (AWS SageMaker, Azure AI, Google Vertex AI)</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-2 w-1 h-1 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <p>Implement authentication and rate limiting for AI endpoints</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-2 w-1 h-1 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <p>Handle asynchronous AI model inference</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-2 w-1 h-1 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <p>Error handling for AI service failures and fallbacks</p>
                  </li>
                </ul>
              </div>
              
              {/* Model Integration */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Brain size={32} className="text-blue-400" />
                  <h3 className="text-2xl font-bold text-blue-400">Model Integration</h3>
                </div>
                <ul className="space-y-2 text-lg ml-10">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-2 w-1 h-1 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <p>Integrate pre-trained models (computer vision, NLP, recommendation)</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-2 w-1 h-1 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <p>Implement prompt engineering for LLMs</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-2 w-1 h-1 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <p>Fine-tune models using cloud-based tools</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-2 w-1 h-1 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <p>Version control for model artifacts and configurations</p>
                  </li>
                </ul>
              </div>
              
              {/* Data Handling */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Database size={32} className="text-blue-400" />
                  <h3 className="text-2xl font-bold text-blue-400">Data Handling</h3>
                </div>
                <ul className="space-y-2 text-lg ml-10">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-2 w-1 h-1 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <p>Prepare and transform data for AI/ML consumption</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-2 w-1 h-1 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <p>Implement data validation and quality checks</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-2 w-1 h-1 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <p>Manage training/inference data pipelines</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-2 w-1 h-1 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <p>Handle sensitive data with privacy considerations</p>
                  </li>
                </ul>
              </div>
              
              {/* Responsible AI */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Shield size={32} className="text-blue-400" />
                  <h3 className="text-2xl font-bold text-blue-400">Responsible AI</h3>
                </div>
                <ul className="space-y-2 text-lg ml-10">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-2 w-1 h-1 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <p>Implement bias detection and mitigation strategies</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-2 w-1 h-1 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <p>Build explainable AI interfaces</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-2 w-1 h-1 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <p>Document model limitations and appropriate use</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-2 w-1 h-1 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <p>Implement human-in-the-loop workflows</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Top Right - Tools & Platforms */}
          <div className="bg-slate-700/80 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Wrench size={32} className="text-blue-400" />
              <h2 className="text-xl font-bold text-blue-400">Key Tools & Platforms</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-blue-300 mb-2">Cloud AI Services</h3>
                <ul className="text-base space-y-1">
                  <li>• AWS SageMaker</li>
                  <li>• Azure AI Services</li>
                  <li>• Google Vertex AI</li>
                  <li>• OpenAI API</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-blue-300 mb-2">Frameworks</h3>
                <ul className="text-base space-y-1">
                  <li>• LangChain</li>
                  <li>• Hugging Face</li>
                  <li>• TensorFlow.js</li>
                  <li>• ONNX Runtime</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-blue-300 mb-2">Dev Tools</h3>
                <ul className="text-base space-y-1">
                  <li>• MLflow</li>
                  <li>• Weights & Biases</li>
                  <li>• DVC</li>
                  <li>• GitHub Copilot</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Bottom Right - Skill Progression */}
          <div className="bg-slate-700/80 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp size={32} className="text-blue-400" />
              <h2 className="text-xl font-bold text-blue-400">Skill Progression</h2>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-300 pl-4">
                <h3 className="font-bold text-blue-300">Foundation</h3>
                <p className="text-base">Use pre-built AI APIs and services</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold text-blue-500">Intermediate</h3>
                <p className="text-base">Customize models, implement pipelines</p>
              </div>
              
              <div className="border-l-4 border-blue-700 pl-4">
                <h3 className="font-bold text-blue-700">Advanced</h3>
                <p className="text-base">Architect AI-native applications, optimize performance</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex-none text-center py-4">
          <p className="text-base opacity-70">Training estimate: 40-60 hours foundation | 80-120 hours intermediate | 160+ hours advanced</p>
        </div>
      </div>
    </div>
  );
}
