
### Slide 12: Skills Assessment Decision Tree

**Objective**: Provide a practical decision tool to determine which AI skills are needed for specific roles and projects.

**Layout Composition**:
The slide is a flex-col with a header sized to its content, a main body that grows, and a footer sized to its content. The main body is a grid with two columns (3fr 2fr). The left column contains a large decision tree flow, and the right column contains a role-mapping reference card.

**Content Breakdown**:

- Block 1:
  - Block Type: Text
  - Placement: Header section
  - Component Schema: "Section Title"
  - Content:
    Title: "AI Skills Assessment Decision Tree"
    Subtitle: "Determine required AI capabilities for roles and projects"
  - Creative Brief: Bold title text-6xl, subtitle text-3xl with 70% opacity. White text.

- Block 2:
  - Block Type: Text
  - Placement: Left column, filling available space
  - Component Schema: "Decision Tree Flow"
  - Content:
    Tree_Title: "Skills Assessment Framework"
    Decision_Flow: [
      {
        "Level": 1,
        "Question": "Will this role interact with AI systems?",
        "Yes": "Continue to Level 2",
        "No": "Basic AI awareness only (4-8 hours training)"
      },
      {
        "Level": 2,
        "Question": "Will they make decisions about AI solutions?",
        "Yes": "AI Citizen + Strategic skills → Continue to Level 3",
        "No": "AI Citizen skills (24-40 hours training)"
      },
      {
        "Level": 3,
        "Question": "Will they implement or integrate AI?",
        "Yes": "AI Worker skills → Continue to Level 4",
        "No": "AI Citizen + Communication skills (40-60 hours)"
      },
      {
        "Level": 4,
        "Question": "What is the primary technical focus?",
        "Options": {
          "Development": "Developer AI Integration track (80-120 hours)",
          "Architecture": "Architecture & Design track (60-80 hours)",
          "Operations": "MLOps & Monitoring track (50-70 hours)",
          "Data": "Data Engineering for AI track (60-80 hours)",
          "Security": "AI Security & Governance track (40-60 hours)"
        }
      },
      {
        "Level": 5,
        "Question": "Additional considerations",
        "Factors": [
          "Cloud platform experience (add 20-40 hours if new to cloud)",
          "Leadership role (add governance & strategy modules: +16 hours)",
          "Regulated industry (add compliance & ethics modules: +16 hours)",
          "Customer-facing role (add responsible AI & explainability: +12 hours)"
        ]
      }
    ]
  - Creative Brief: Large vertical decision tree with slate-800 background. Five levels flowing top to bottom. Each level is a distinct card or node. Questions in bold text-xl with icon (HelpCircle). Yes/No paths shown with colored arrows or lines (green for yes, orange for no). Level 4 branches into 5 technical tracks shown as separate outcome cards with role-based color coding. Level 5 shows as additional factors list. Professional, flowchart-like styling with clear visual hierarchy. Use connecting lines/arrows between levels.

- Block 3:
  - Block Type: Text
  - Placement: Right column, top area
  - Component Schema: "Quick Role Mapping Card"
  - Content:
    Card_Title: "Quick Role Reference"
    Icon: "Users"
    Role_Mappings: [
      {
        "Role": "Software Developer",
        "Path": "L1→L2→L3→L4(Dev)",
        "Hours": "80-120",
        "Color": "Blue"
      },
      {
        "Role": "Product Manager",
        "Path": "L1→L2→L3(Stop)",
        "Hours": "40-60",
        "Color": "Orange"
      },
      {
        "Role": "System Architect",
        "Path": "L1→L2→L3→L4(Arch)",
        "Hours": "60-80",
        "Color": "Purple"
      },
      {
        "Role": "DevOps Engineer",
        "Path": "L1→L2→L3→L4(Ops)",
        "Hours": "50-70",
        "Color": "Green"
      },
      {
        "Role": "Security Analyst",
        "Path": "L1→L2→L3→L4(Sec)",
        "Hours": "40-60",
        "Color": "Red"
      },
      {
        "Role": "Data Engineer",
        "Path": "L1→L2→L3→L4(Data)",
        "Hours": "60-80",
        "Color": "Cyan"
      }
    ]
  - Creative Brief: Tall card with slate-700 background. Header with icon. Each role mapping is a mini-card or row with role name (bold, text-lg), decision path visualization (text-base), training hours (bold), and left border or icon in role-specific color. Compact, scannable layout.

- Block 4:
  - Block Type: Text
  - Placement: Right column, bottom area
  - Component Schema: "Assessment Instructions Card"
  - Content:
    Card_Title: "How to Use This Tool"
    Icon: "Info"
    Instructions: [
      "1. Start at Level 1 with the role or project in mind",
      "2. Follow Yes/No paths based on role responsibilities",
      "3. Select technical track at Level 4 based on primary function",
      "4. Add hours for additional considerations at Level 5",
      "5. Use Quick Reference for common roles"
    ]
  - Creative Brief: Card with slate-700 background. Header with icon (purple accent). Numbered instructions in text-base, clear and concise. Positioned at bottom of right column.

- Block 5:
  - Block Type: Text
  - Placement: Footer
  - Component Schema: "Simple Footer"
  - Content:
    Footer_Text: "Training hours are estimates based on foundation-level competency | Adjust for individual experience"
  - Creative Brief: Centered, text-base, opacity-70.

