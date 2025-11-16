
import { Database, Layers, GitBranch, Wrench } from 'lucide-react';

export default function Slide10() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-b from-slate-900 to-slate-700 text-white">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex-none text-center py-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Database size={48} className="text-cyan-400" />
            <h1 className="text-6xl font-bold text-white">Data Engineers</h1>
          </div>
          <h2 className="text-3xl opacity-80">AI-Ready Data Infrastructure & Pipeline Engineering</h2>
          <div className="mt-4">
            <span className="bg-cyan-600 text-white px-4 py-2 rounded-full text-lg font-semibold">Primary: AI Worker</span>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 grid grid-cols-[3fr_2fr] gap-8 px-16 pb-16">
          {/* Left Column - Skills Cards */}
          <div className="flex flex-col gap-8">
            {/* Data Architecture Skills */}
            <div className="bg-slate-800/80 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Layers size={32} className="text-cyan-400" />
                <h2 className="text-3xl font-bold text-cyan-400">Data Architecture for AI/ML</h2>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-cyan-300 mb-3">Feature Engineering Infrastructure</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Feature stores (Feast, Tecton, SageMaker Feature Store)</li>
                    <li>• Feature versioning and lineage tracking</li>
                    <li>• Online vs offline feature computation</li>
                    <li>• Feature discovery and reusability</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-cyan-300 mb-3">Data Quality & Validation</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Automated data quality checks</li>
                    <li>• Schema validation and evolution</li>
                    <li>• Data profiling and anomaly detection</li>
                    <li>• Great Expectations, Deequ frameworks</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-cyan-300 mb-3">ML Data Stores</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Vector databases (Pinecone, Weaviate, pgvector)</li>
                    <li>• Time-series optimized storage</li>
                    <li>• Graph databases for relationships</li>
                    <li>• Data lake vs data warehouse for ML</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Pipeline Engineering Skills */}
            <div className="bg-slate-800/80 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <GitBranch size={32} className="text-cyan-400" />
                <h2 className="text-3xl font-bold text-cyan-400">ML Data Pipeline Engineering</h2>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-cyan-300 mb-3">Pipeline Orchestration</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Workflow orchestration (Airflow, Prefect, Kubeflow)</li>
                    <li>• DAG design for ML workflows</li>
                    <li>• Dependency management and scheduling</li>
                    <li>• Pipeline monitoring and alerting</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-cyan-300 mb-3">Data Processing</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Batch vs streaming processing for ML</li>
                    <li>• Distributed data processing (Spark, Dask)</li>
                    <li>• Data transformation for model training</li>
                    <li>• ETL/ELT patterns for ML data</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-cyan-300 mb-3">Data Versioning</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Dataset versioning (DVC, LakeFS)</li>
                    <li>• Reproducible data snapshots</li>
                    <li>• Data provenance and lineage</li>
                    <li>• Training/validation/test splits management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col gap-8">
            {/* Data Pipeline Flow */}
            <div className="bg-slate-700/80 rounded-xl p-8 flex-1">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6">ML Data Pipeline Architecture</h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg">
                  <Database size={24} className="text-cyan-400" />
                  <div>
                    <h3 className="text-xl font-bold">Data Sources</h3>
                    <p className="text-base opacity-80">Databases, APIs, Streaming</p>
                  </div>
                </div>
                
                <div className="text-center text-cyan-400 text-2xl">↓</div>
                
                <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg">
                  <div className="text-cyan-400">📥</div>
                  <div>
                    <h3 className="text-xl font-bold">Ingestion & Validation</h3>
                    <p className="text-base opacity-80">Schema checks, Quality gates</p>
                  </div>
                </div>
                
                <div className="text-center text-cyan-400 text-2xl">↓</div>
                
                <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg">
                  <div className="text-cyan-400">⚙️</div>
                  <div>
                    <h3 className="text-xl font-bold">Feature Engineering</h3>
                    <p className="text-base opacity-80">Transform, Aggregate, Store</p>
                  </div>
                </div>
                
                <div className="text-center text-cyan-400 text-2xl">↓</div>
                
                <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg">
                  <div className="text-cyan-400">🗂️</div>
                  <div>
                    <h3 className="text-xl font-bold">Feature Store</h3>
                    <p className="text-base opacity-80">Online, Offline, Registry</p>
                  </div>
                </div>
                
                <div className="text-center text-cyan-400 text-2xl">↓</div>
                
                <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg">
                  <div className="text-cyan-400">🧠</div>
                  <div>
                    <h3 className="text-xl font-bold">Model Training/Inference</h3>
                    <p className="text-base opacity-80">Consume features, Log metrics</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tools & Technologies */}
            <div className="bg-slate-700/80 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Wrench size={32} className="text-cyan-400" />
                <h2 className="text-2xl font-bold text-cyan-400">Key Tools & Technologies</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-bold text-cyan-300 mb-2">Orchestration</h3>
                  <ul className="text-base space-y-1">
                    <li>• Apache Airflow</li>
                    <li>• Prefect</li>
                    <li>• Kubeflow Pipelines</li>
                    <li>• AWS Step Functions</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-cyan-300 mb-2">Processing</h3>
                  <ul className="text-base space-y-1">
                    <li>• Apache Spark</li>
                    <li>• Dask</li>
                    <li>• Ray</li>
                    <li>• Flink</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-cyan-300 mb-2">Feature Stores</h3>
                  <ul className="text-base space-y-1">
                    <li>• Feast</li>
                    <li>• Tecton</li>
                    <li>• AWS Feature Store</li>
                    <li>• Databricks Feature Store</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-cyan-300 mb-2">Versioning</h3>
                  <ul className="text-base space-y-1">
                    <li>• DVC</li>
                    <li>• LakeFS</li>
                    <li>• Pachyderm</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex-none text-center py-4">
          <p className="text-base opacity-70">Training estimate: 60-80 hours | Prerequisites: Strong data engineering fundamentals, SQL, Python</p>
        </div>
      </div>
    </div>
  );
}
