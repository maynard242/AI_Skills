
import { Network, Layers, CheckCircle, Cloud } from 'lucide-react';

export default function Slide7() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-b from-slate-900 to-slate-700 text-white">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex-none text-center py-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Network size={48} className="text-purple-400" />
            <h1 className="text-6xl font-bold text-white">System Architects</h1>
          </div>
          <h2 className="text-3xl opacity-80">AI Architecture, Design & Integration Patterns</h2>
          <div className="mt-4">
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-lg font-semibold">Primary: AI Worker</span>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-8 px-16 pb-16">
          {/* Architectural Patterns - Top Section */}
          <div className="bg-slate-800/80 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Layers size={32} className="text-purple-400" />
              <h2 className="text-4xl font-bold text-purple-400">AI System Architecture Patterns</h2>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-purple-300 mb-4">Model Serving Patterns</h3>
                <ul className="space-y-2 text-lg">
                  <li>• Real-time inference vs batch prediction</li>
                  <li>• Edge deployment vs cloud-based serving</li>
                  <li>• Model versioning and A/B testing strategies</li>
                  <li>• Caching and response optimization</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-purple-300 mb-4">Integration Patterns</h3>
                <ul className="space-y-2 text-lg">
                  <li>• Microservices with AI capabilities</li>
                  <li>• Event-driven AI workflows</li>
                  <li>• API gateway patterns for AI services</li>
                  <li>• Hybrid human-AI processing pipelines</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-purple-300 mb-4">Data Architecture</h3>
                <ul className="space-y-2 text-lg">
                  <li>• Feature stores and data versioning</li>
                  <li>• Training/inference data separation</li>
                  <li>• Data lineage and provenance tracking</li>
                  <li>• Real-time vs batch data pipelines</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="grid grid-cols-2 gap-8 flex-1">
            {/* Design Considerations - Left */}
            <div className="bg-slate-700/80 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle size={32} className="text-purple-400" />
                <h2 className="text-3xl font-bold text-purple-400">Key Design Considerations</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-purple-300 mb-3">Scalability</h3>
                  <ul className="space-y-1 text-lg">
                    <li>• Auto-scaling for variable AI workloads</li>
                    <li>• Cost optimization for GPU/TPU resources</li>
                    <li>• Multi-region deployment strategies</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-purple-300 mb-3">Reliability</h3>
                  <ul className="space-y-1 text-lg">
                    <li>• Fallback mechanisms for model failures</li>
                    <li>• Circuit breakers for AI service dependencies</li>
                    <li>• Model performance monitoring and alerting</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-purple-300 mb-3">Security</h3>
                  <ul className="space-y-1 text-lg">
                    <li>• Model access control and authentication</li>
                    <li>• Data encryption in transit and at rest</li>
                    <li>• Secure model deployment pipelines</li>
                    <li>• Audit logging for AI decisions</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Cloud Architecture - Right */}
            <div className="bg-slate-700/80 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Cloud size={32} className="text-purple-400" />
                <h2 className="text-3xl font-bold text-purple-400">Cloud AI Architecture Components</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-bold text-orange-400 mb-3">AWS Stack</h3>
                  <div className="grid grid-cols-2 gap-2 text-base">
                    <div><span className="font-semibold">Compute:</span> SageMaker, Lambda, EC2 (GPU)</div>
                    <div><span className="font-semibold">Storage:</span> S3, FSx</div>
                    <div><span className="font-semibold">Data:</span> Glue, Athena, Kinesis</div>
                    <div><span className="font-semibold">MLOps:</span> SageMaker Pipelines, CodePipeline</div>
                  </div>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">Azure Stack</h3>
                  <div className="grid grid-cols-2 gap-2 text-base">
                    <div><span className="font-semibold">Compute:</span> Azure ML, Functions, GPU VMs</div>
                    <div><span className="font-semibold">Storage:</span> Blob Storage, Data Lake</div>
                    <div><span className="font-semibold">Data:</span> Synapse, Data Factory, Event Hubs</div>
                    <div><span className="font-semibold">MLOps:</span> Azure ML Pipelines, DevOps</div>
                  </div>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-bold text-green-400 mb-3">GCP Stack</h3>
                  <div className="grid grid-cols-2 gap-2 text-base">
                    <div><span className="font-semibold">Compute:</span> Vertex AI, Cloud Functions, GPU VMs</div>
                    <div><span className="font-semibold">Storage:</span> Cloud Storage, Filestore</div>
                    <div><span className="font-semibold">Data:</span> BigQuery, Dataflow, Pub/Sub</div>
                    <div><span className="font-semibold">MLOps:</span> Vertex AI Pipelines, Cloud Build</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex-none text-center py-4">
          <p className="text-base opacity-70">Training estimate: 60-80 hours | Focus on cloud architecture certifications</p>
        </div>
      </div>
    </div>
  );
}

