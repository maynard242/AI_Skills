
### Slide 7: System Architects - AI Architecture & Design

**Objective**: Define architectural skills needed to design scalable, secure, and maintainable AI-enhanced systems.

**Layout Composition**:
The slide is a flex-col with a header sized to its content, a main body that grows, and a footer sized to its content. The main body is a grid with two columns (1fr 1fr) and two rows (auto auto). Top row for architectural patterns, bottom row split between design considerations (left) and cloud architecture (right).

**Content Breakdown**:

- Block 1:
  - Block Type: Text
  - Placement: Header section
  - Component Schema: "Role Header"
  - Content:
    Role_Title: "System Architects"
    Role_Icon: "Network"
    Subtitle: "AI Architecture, Design & Integration Patterns"
    Persona_Badge: "Primary: AI Worker"
  - Creative Brief: Title text-6xl with purple accent color (architecture role). Icon inline with title. Persona badge as small chip/pill. White text.

- Block 2:
  - Block Type: Text
  - Placement: Top row, spanning both columns
  - Component Schema: "Architectural Patterns Card"
  - Content:
    Section_Title: "AI System Architecture Patterns"
    Icon: "Layers"
    Patterns: {
      "Model Serving Patterns": [
        "Real-time inference vs batch prediction",
        "Edge deployment vs cloud-based serving",
        "Model versioning and A/B testing strategies",
        "Caching and response optimization"
      ],
      "Integration Patterns": [
        "Microservices with AI capabilities",
        "Event-driven AI workflows",
        "API gateway patterns for AI services",
        "Hybrid human-AI processing pipelines"
      ],
      "Data Architecture": [
        "Feature stores and data versioning",
        "Training/inference data separation",
        "Data lineage and provenance tracking",
        "Real-time vs batch data pipelines"
      ]
    }
  - Creative Brief: Wide card with slate-800 background spanning both columns. Three pattern categories arranged horizontally or in a grid. Each category has bold title (text-xl, purple accent), icon, and bullet list (text-lg). Clear column/section separation.

- Block 3:
  - Block Type: Text
  - Placement: Bottom-left cell
  - Component Schema: "Design Considerations Card"
  - Content:
    Section_Title: "Key Design Considerations"
    Icon: "CheckCircle"
    Considerations: {
      "Scalability": [
        "Auto-scaling for variable AI workloads",
        "Cost optimization for GPU/TPU resources",
        "Multi-region deployment strategies"
      ],
      "Reliability": [
        "Fallback mechanisms for model failures",
        "Circuit breakers for AI service dependencies",
        "Model performance monitoring and alerting"
      ],
      "Security": [
        "Model access control and authentication",
        "Data encryption in transit and at rest",
        "Secure model deployment pipelines",
        "Audit logging for AI decisions"
      ]
    }
  - Creative Brief: Card with slate-700 background. Three consideration categories stacked vertically. Bold category headers (text-xl, purple) with icon indicators. Bullets in text-base. Ensure visual hierarchy is clear.

- Block 4:
  - Block Type: Text
  - Placement: Bottom-right cell
  - Component Schema: "Cloud Architecture Reference"
  - Content:
    Section_Title: "Cloud AI Architecture Components"
    Icon: "Cloud"
    AWS_Stack: {
      "Compute": "SageMaker, Lambda, EC2 (GPU)",
      "Storage": "S3, FSx",
      "Data": "Glue, Athena, Kinesis",
      "MLOps": "SageMaker Pipelines, CodePipeline"
    }
    Azure_Stack: {
      "Compute": "Azure ML, Functions, GPU VMs",
      "Storage": "Blob Storage, Data Lake",
      "Data": "Synapse, Data Factory, Event Hubs",
      "MLOps": "Azure ML Pipelines, DevOps"
    }
    GCP_Stack: {
      "Compute": "Vertex AI, Cloud Functions, GPU VMs",
      "Storage": "Cloud Storage, Filestore",
      "Data": "BigQuery, Dataflow, Pub/Sub",
      "MLOps": "Vertex AI Pipelines, Cloud Build"
    }
  - Creative Brief: Compact card with slate-700 background. Three cloud providers stacked with clear labels. Each provider has 4 component categories in a mini-grid or table format. Text-base, very scannable. Use cloud provider brand colors subtly for headers (orange for AWS, blue for Azure, multi-color for GCP).

- Block 5:
  - Block Type: Text
  - Placement: Footer
  - Component Schema: "Simple Footer"
  - Content:
    Footer_Text: "Training estimate: 60-80 hours | Focus on cloud architecture certifications"
  - Creative Brief: Centered, text-base, opacity-70.

