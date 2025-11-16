
import { Settings, RefreshCw, Upload, Activity, Wrench, Server, Eye, Shield } from 'lucide-react';

export default function Slide8() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-b from-slate-900 to-slate-700 text-white">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex-none text-center py-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Settings size={48} className="text-green-400" />
            <h1 className="text-6xl font-bold text-white">Operations & DevOps Teams</h1>
          </div>
          <h2 className="text-3xl opacity-80">MLOps, Monitoring & Production AI Management</h2>
          <div className="mt-4">
            <span className="bg-green-600 text-white px-4 py-2 rounded-full text-lg font-semibold">Primary: AI Worker</span>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-8 px-16 pb-16">
          {/* MLOps Lifecycle - Top Section */}
          <div className="bg-slate-800/80 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <RefreshCw size={32} className="text-green-400" />
              <h2 className="text-4xl font-bold text-green-400">MLOps Lifecycle Management</h2>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Upload size={32} className="text-green-400" />
                  <h3 className="text-xl font-bold text-green-400">Model Deployment</h3>
                </div>
                <ul className="space-y-2 text-lg text-left">
                  <li>• CI/CD for ML models</li>
                  <li>• Container orchestration (Kubernetes)</li>
                  <li>• Blue-green deployments</li>
                  <li>• Canary releases</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Activity size={32} className="text-green-400" />
                  <h3 className="text-xl font-bold text-green-400">Monitoring & Observability</h3>
                </div>
                <ul className="space-y-2 text-lg text-left">
                  <li>• Model performance metrics</li>
                  <li>• Data drift detection</li>
                  <li>• Inference latency tracking</li>
                  <li>• Resource utilization monitoring</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Wrench size={32} className="text-green-400" />
                  <h3 className="text-xl font-bold text-green-400">Model Maintenance</h3>
                </div>
                <ul className="space-y-2 text-lg text-left">
                  <li>• Automated retraining triggers</li>
                  <li>• Version rollback procedures</li>
                  <li>• Model retirement workflows</li>
                  <li>• Performance degradation alerts</li>
                </ul>
              </div>
            </div>
            
            {/* Connecting arrows */}
            <div className="flex items-center justify-center mt-6">
              <div className="flex items-center gap-8">
                <span className="text-green-400 text-2xl">→</span>
                <span className="text-green-400 text-2xl">→</span>
                <span className="text-green-400 text-2xl">⤴</span>
              </div>
            </div>
          </div>
          
          {/* Bottom Section - Three Skills Areas */}
          <div className="grid grid-cols-3 gap-8 flex-1">
            {/* Infrastructure Skills */}
            <div className="bg-slate-700/80 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Server size={32} className="text-green-400" />
                <h2 className="text-xl font-bold text-green-400">Infrastructure & Deployment</h2>
              </div>
              
              <ul className="space-y-3 text-base">
                <li>• Container orchestration for ML workloads</li>
                <li>• GPU/TPU resource management</li>
                <li>• Auto-scaling policies for inference endpoints</li>
                <li>• Infrastructure as Code (Terraform, CloudFormation)</li>
                <li>• Model serving platforms (TorchServe, TensorFlow Serving)</li>
                <li>• Service mesh for ML microservices</li>
              </ul>
            </div>
            
            {/* Monitoring Skills */}
            <div className="bg-slate-700/80 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Eye size={32} className="text-green-400" />
                <h2 className="text-xl font-bold text-green-400">Monitoring & Observability</h2>
              </div>
              
              <ul className="space-y-3 text-base">
                <li>• Model performance dashboards (Grafana, CloudWatch)</li>
                <li>• Data quality monitoring</li>
                <li>• Prediction accuracy tracking</li>
                <li>• Latency and throughput optimization</li>
                <li>• Alert configuration for model degradation</li>
                <li>• Logging and tracing for ML pipelines</li>
              </ul>
            </div>
            
            {/* Reliability Skills */}
            <div className="bg-slate-700/80 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield size={32} className="text-green-400" />
                <h2 className="text-xl font-bold text-green-400">Reliability & Incident Response</h2>
              </div>
              
              <ul className="space-y-3 text-base">
                <li>• SLA/SLO definition for AI services</li>
                <li>• Incident response for model failures</li>
                <li>• Disaster recovery for ML systems</li>
                <li>• Model rollback procedures</li>
                <li>• Chaos engineering for ML systems</li>
                <li>• Post-incident analysis and learning</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex-none text-center py-4">
          <p className="text-base opacity-70">Training estimate: 50-70 hours | Prerequisites: Strong DevOps fundamentals, cloud platform knowledge</p>
        </div>
      </div>
    </div>
  );
}

