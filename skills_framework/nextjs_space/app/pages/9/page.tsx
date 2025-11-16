
import { Lock, ShieldAlert, Shield, AlertTriangle, FileText, Scale } from 'lucide-react';

export default function Slide9() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-b from-slate-900 to-slate-700 text-white">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex-none text-center py-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Lock size={48} className="text-red-400" />
            <h1 className="text-6xl font-bold text-white">Security Teams</h1>
          </div>
          <h2 className="text-3xl opacity-80">AI Security, Governance & Risk Management</h2>
          <div className="mt-4">
            <span className="bg-red-600 text-white px-4 py-2 rounded-full text-lg font-semibold">Primary: AI Worker</span>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-8 px-16 pb-16">
          {/* AI Security Landscape - Top Section */}
          <div className="bg-slate-800/80 rounded-xl p-8 border-l-4 border-red-500">
            <div className="flex items-center gap-3 mb-6">
              <ShieldAlert size={32} className="text-red-400" />
              <h2 className="text-4xl font-bold text-red-400">AI-Specific Security Landscape</h2>
            </div>
            
            <p className="text-2xl italic mb-6 text-red-200">AI systems introduce unique security challenges beyond traditional application security</p>
            
            <div className="grid grid-cols-2 gap-8">
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-2 w-1 h-1 bg-red-400 rounded-full flex-shrink-0"></span>
                  <p>Model theft and intellectual property protection</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-2 w-1 h-1 bg-red-400 rounded-full flex-shrink-0"></span>
                  <p>Adversarial attacks and input manipulation</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-2 w-1 h-1 bg-red-400 rounded-full flex-shrink-0"></span>
                  <p>Data poisoning and training data integrity</p>
                </li>
              </ul>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-2 w-1 h-1 bg-red-400 rounded-full flex-shrink-0"></span>
                  <p>Model inversion and privacy leakage</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-2 w-1 h-1 bg-red-400 rounded-full flex-shrink-0"></span>
                  <p>Prompt injection and jailbreaking (LLMs)</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-2 w-1 h-1 bg-red-400 rounded-full flex-shrink-0"></span>
                  <p>Supply chain risks in ML dependencies</p>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Middle Row - Threat Protection and Monitoring */}
          <div className="grid grid-cols-2 gap-8">
            {/* Threat Protection Skills */}
            <div className="bg-slate-700/80 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield size={32} className="text-red-400" />
                <h2 className="text-2xl font-bold text-red-400">Threat Protection & Detection</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-red-300 mb-3">Model Security</h3>
                  <ul className="space-y-2 text-base">
                    <li>• Secure model storage and access control</li>
                    <li>• Model watermarking and provenance tracking</li>
                    <li>• Adversarial robustness testing</li>
                    <li>• Input validation and sanitization</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-red-300 mb-3">Data Security</h3>
                  <ul className="space-y-2 text-base">
                    <li>• Training data access controls</li>
                    <li>• PII detection and anonymization</li>
                    <li>• Differential privacy implementation</li>
                    <li>• Secure multi-party computation</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Monitoring & Response */}
            <div className="bg-slate-700/80 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle size={32} className="text-red-400" />
                <h2 className="text-2xl font-bold text-red-400">Monitoring & Incident Response</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-red-300 mb-3">Security Monitoring</h3>
                  <ul className="space-y-2 text-base">
                    <li>• Model behavior anomaly detection</li>
                    <li>• API abuse and rate limiting</li>
                    <li>• Data exfiltration detection</li>
                    <li>• Model drift as security indicator</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-red-300 mb-3">Incident Response</h3>
                  <ul className="space-y-2 text-base">
                    <li>• AI-specific incident playbooks</li>
                    <li>• Model rollback and containment</li>
                    <li>• Forensic analysis for ML systems</li>
                    <li>• Breach notification for AI systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Row - Governance and Compliance */}
          <div className="grid grid-cols-2 gap-8">
            {/* Governance Framework */}
            <div className="bg-slate-700/80 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText size={32} className="text-red-400" />
                <h2 className="text-2xl font-bold text-red-400">AI Governance Framework</h2>
              </div>
              
              <ul className="space-y-3 text-base">
                <li>• AI usage policies and standards</li>
                <li>• Model risk assessment frameworks</li>
                <li>• Ethical AI review boards</li>
                <li>• Third-party AI vendor risk assessment</li>
                <li>• AI inventory and asset management</li>
                <li>• Model documentation requirements</li>
              </ul>
            </div>
            
            {/* Compliance Requirements */}
            <div className="bg-slate-700/80 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Scale size={32} className="text-red-400" />
                <h2 className="text-2xl font-bold text-red-400">Compliance & Regulatory</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-red-300 mb-2">Privacy Regulations</h3>
                  <ul className="text-base space-y-1">
                    <li>• GDPR data rights</li>
                    <li>• CCPA transparency</li>
                    <li>• Right to explanation</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-red-300 mb-2">Industry Standards</h3>
                  <ul className="text-base space-y-1">
                    <li>• NIST AI Risk Management</li>
                    <li>• ISO/IEC 23894</li>
                    <li>• OWASP ML Top 10</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-red-300 mb-2">Government AI</h3>
                  <ul className="text-base space-y-1">
                    <li>• FITARA compliance</li>
                    <li>• OMB AI guidance</li>
                    <li>• Procurement standards</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex-none text-center py-4">
          <p className="text-base opacity-70">Training estimate: 40-60 hours | Prerequisites: Strong security fundamentals, risk management</p>
        </div>
      </div>
    </div>
  );
}

