
import { Info } from 'lucide-react';

export default function Slide11() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-b from-slate-900 to-slate-700 text-white">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex-none text-center py-12">
          <h1 className="text-6xl font-bold text-white mb-4">Cloud-Based AI Capabilities Matrix</h1>
          <h2 className="text-3xl opacity-70">AWS, Azure, and Google Cloud AI/ML service comparison</h2>
        </div>
        
        {/* Main Table */}
        <div className="flex-1 px-16 pb-8">
          <div className="bg-slate-800/80 rounded-xl p-8 h-full overflow-hidden">
            <table className="w-full text-lg">
              <thead>
                <tr className="bg-slate-700">
                  <th className="p-4 text-left font-bold border-r border-slate-600">AI Capability</th>
                  <th className="p-4 text-center font-bold border-r border-slate-600 bg-orange-600/20">AWS</th>
                  <th className="p-4 text-center font-bold border-r border-slate-600 bg-blue-600/20">Azure</th>
                  <th className="p-4 text-center font-bold border-r border-slate-600 bg-green-600/20">Google Cloud</th>
                  <th className="p-4 text-left font-bold">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-slate-900/30 odd:bg-slate-800/30">
                  <td className="p-4 font-semibold border-r border-slate-600">ML Platform</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-orange-600/10">SageMaker</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-blue-600/10">Azure Machine Learning</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-green-600/10">Vertex AI</td>
                  <td className="p-4 border-r border-slate-600">End-to-end ML lifecycle</td>
                </tr>
                
                <tr className="even:bg-slate-900/30 odd:bg-slate-800/30">
                  <td className="p-4 font-semibold border-r border-slate-600">Pre-trained Vision</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-orange-600/10">Rekognition</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-blue-600/10">Computer Vision</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-green-600/10">Vision AI</td>
                  <td className="p-4 border-r border-slate-600">Image/video analysis</td>
                </tr>
                
                <tr className="even:bg-slate-900/30 odd:bg-slate-800/30">
                  <td className="p-4 font-semibold border-r border-slate-600">Pre-trained NLP</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-orange-600/10">Comprehend</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-blue-600/10">Language Service</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-green-600/10">Natural Language AI</td>
                  <td className="p-4 border-r border-slate-600">Text analysis, entities</td>
                </tr>
                
                <tr className="even:bg-slate-900/30 odd:bg-slate-800/30">
                  <td className="p-4 font-semibold border-r border-slate-600">Large Language Models</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-orange-600/10">Bedrock</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-blue-600/10">Azure OpenAI Service</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-green-600/10">Generative AI on Vertex</td>
                  <td className="p-4 border-r border-slate-600">Chatbots, content generation</td>
                </tr>
                
                <tr className="even:bg-slate-900/30 odd:bg-slate-800/30">
                  <td className="p-4 font-semibold border-r border-slate-600">Speech Services</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-orange-600/10">Transcribe, Polly</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-blue-600/10">Speech Service</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-green-600/10">Speech-to-Text, Text-to-Speech</td>
                  <td className="p-4 border-r border-slate-600">Voice interfaces</td>
                </tr>
                
                <tr className="even:bg-slate-900/30 odd:bg-slate-800/30">
                  <td className="p-4 font-semibold border-r border-slate-600">Document Processing</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-orange-600/10">Textract</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-blue-600/10">Document Intelligence</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-green-600/10">Document AI</td>
                  <td className="p-4 border-r border-slate-600">Extract data from documents</td>
                </tr>
                
                <tr className="even:bg-slate-900/30 odd:bg-slate-800/30">
                  <td className="p-4 font-semibold border-r border-slate-600">ML Ops & Pipelines</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-orange-600/10">SageMaker Pipelines</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-blue-600/10">Azure ML Pipelines</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-green-600/10">Vertex AI Pipelines</td>
                  <td className="p-4 border-r border-slate-600">Automated ML workflows</td>
                </tr>
                
                <tr className="even:bg-slate-900/30 odd:bg-slate-800/30">
                  <td className="p-4 font-semibold border-r border-slate-600">Model Deployment</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-orange-600/10">SageMaker Endpoints</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-blue-600/10">Azure ML Endpoints</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-green-600/10">Vertex AI Predictions</td>
                  <td className="p-4 border-r border-slate-600">Model serving & inference</td>
                </tr>
                
                <tr className="even:bg-slate-900/30 odd:bg-slate-800/30">
                  <td className="p-4 font-semibold border-r border-slate-600">Feature Store</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-orange-600/10">SageMaker Feature Store</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-blue-600/10">Azure ML Feature Store</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-green-600/10">Vertex AI Feature Store</td>
                  <td className="p-4 border-r border-slate-600">Feature management</td>
                </tr>
                
                <tr className="even:bg-slate-900/30 odd:bg-slate-800/30">
                  <td className="p-4 font-semibold border-r border-slate-600">AutoML</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-orange-600/10">SageMaker Autopilot</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-blue-600/10">Azure AutoML</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-green-600/10">Vertex AI AutoML</td>
                  <td className="p-4 border-r border-slate-600">Automated model training</td>
                </tr>
                
                <tr className="even:bg-slate-900/30 odd:bg-slate-800/30">
                  <td className="p-4 font-semibold border-r border-slate-600">Model Monitoring</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-orange-600/10">Model Monitor</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-blue-600/10">Model Monitoring</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-green-600/10">Vertex AI Model Monitoring</td>
                  <td className="p-4 border-r border-slate-600">Drift detection, performance</td>
                </tr>
                
                <tr className="even:bg-slate-900/30 odd:bg-slate-800/30">
                  <td className="p-4 font-semibold border-r border-slate-600">Recommendation</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-orange-600/10">Personalize</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-blue-600/10">Personalizer</td>
                  <td className="p-4 text-center border-r border-slate-600 bg-green-600/10">Recommendations AI</td>
                  <td className="p-4 border-r border-slate-600">Personalized recommendations</td>
                </tr>
              </tbody>
            </table>
            
            {/* Key Notes */}
            <div className="mt-6 bg-slate-800 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <Info size={24} className="text-blue-400" />
                <h3 className="text-xl font-semibold text-blue-400">Selection Considerations</h3>
              </div>
              <ul className="grid grid-cols-2 gap-4 text-base">
                <li>• Choose based on existing cloud infrastructure and team expertise</li>
                <li>• All major platforms offer comparable core capabilities</li>
                <li>• Consider pricing models, regional availability, and compliance requirements</li>
                <li>• Multi-cloud strategies may be needed for specific use cases</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex-none text-center py-4">
          <p className="text-base opacity-60">All capabilities available as managed services with API access | Updated Q4 2024</p>
        </div>
      </div>
    </div>
  );
}

