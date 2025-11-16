# AI Skills Framework

**Building AI Capabilities Across IT & Technology Teams**

An interactive, web-based presentation framework designed to help IT and technology teams develop AI skills. This framework provides role-based learning paths for Software Developers, Product Managers, System Architects, DevOps/Operations, Security Teams, and Data Engineers.

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Updated](https://img.shields.io/badge/updated-2025-green.svg)

---

## 🎯 Overview

The **AI Skills Framework** is a comprehensive, interactive presentation system that helps enterprise technology teams build AI capabilities. **Version 2.0 (2025)** includes major updates with GenAI/LLM focus, AI-assisted development, and certification paths aligned with industry best practices from Google, Amazon, and Microsoft.

Unlike frameworks designed for AI specialists, this addresses the broader IT workforce who need to work effectively with AI technologies.

### Key Features

- ✅ **16 professional slides** delivered as an interactive web application
- ✅ **Role-based content** for 6+ IT/Technology roles
- ✅ **Progressive learning paths** from AI Citizen to AI Worker
- ✅ **GenAI/LLM focused** - RAG, prompt engineering, vector databases (NEW)
- ✅ **AI-assisted development** - GitHub Copilot, Cursor, AI coding tools (NEW)
- ✅ **Certification paths** - AWS ML, Azure AI, TensorFlow Developer (NEW)
- ✅ **2025 industry data** - Google/Amazon/Microsoft hiring insights (NEW)
- ✅ **Modern tech stack** built with Next.js 15, React 18, and Tailwind CSS
- ✅ **Fully responsive** and optimized for presentation mode
- ✅ **Comprehensive guide** with all content in markdown format

---

## 🚀 Quick Start

### Prerequisites

- **Node.js**: 18.17.0 or higher
- **npm**: 9.0.0 or higher
- **macOS**: Optimized for macOS (also works on Linux/Windows)

### Installation & Running

```bash
# Navigate to the presentation directory
cd skills_framework/nextjs_space

# Install dependencies
npm install

# Start the development server
npm run dev

# Open your browser to
# http://localhost:3000
```

The presentation will be available at `http://localhost:3000` with slide navigation.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## 📚 Documentation

### Complete Framework Guide

See **[AI_SKILLS_FRAMEWORK_COMPLETE_GUIDE.md](./AI_SKILLS_FRAMEWORK_COMPLETE_GUIDE.md)** for the comprehensive reference covering:

- Framework overview and strategic context
- AI Personas (Citizens vs Workers)
- Detailed role-based skills breakdowns
- Implementation roadmap
- Skills assessment tools
- Resources and next steps

### Quick Reference

See **[QUICKSTART.md](./QUICKSTART.md)** for rapid setup instructions.

---

## 📂 Repository Structure

```
AI_Skills/
├── README.md                              # This file
├── QUICKSTART.md                          # Quick setup guide
├── AI_SKILLS_FRAMEWORK_COMPLETE_GUIDE.md  # Comprehensive framework documentation
│
└── skills_framework/
    ├── layout_plan/                       # Slide specifications (markdown)
    │   ├── common_guidelines.md           # Design system & standards
    │   ├── slide_01_plan.md               # Title slide
    │   ├── slide_02_plan.md               # Framework overview
    │   └── ...                            # Slides 3-16
    │
    └── nextjs_space/                      # Interactive presentation app
        ├── package.json                   # Dependencies
        ├── app/                           # Next.js app directory
        │   ├── page.tsx                   # Landing page
        │   ├── layout.tsx                 # Root layout
        │   ├── globals.css                # Global styles
        │   └── pages/                     # Individual slides
        │       ├── 1/page.tsx             # Slide 1
        │       ├── 2/page.tsx             # Slide 2
        │       └── ...                    # Slides 3-16
        │
        └── components/                    # Reusable components
            ├── ui/                        # UI components (Radix, etc.)
            ├── theme-provider.tsx         # Theme management
            └── keyboard-navigation.tsx    # Presentation controls
```

---

## 🎓 Framework Content

### Roles Covered

1. **Software Developers** - AI Integration & Development Skills
2. **Product Managers** - AI Strategy & Planning
3. **System Architects** - AI Architecture & Design
4. **DevOps/Operations** - MLOps & AI Operations
5. **Security Teams** - AI Security & Governance
6. **Data Engineers** - AI-Ready Data Infrastructure

### Core Concepts

- **AI Citizens**: Professionals who work alongside AI systems (need AI literacy)
- **AI Workers**: Professionals who implement and integrate AI solutions
- **Progressive Learning**: Clear paths from awareness to proficiency
- **Responsible AI**: Built-in emphasis on ethics, bias, and governance

---

## 🛠 Technology Stack

### Core Framework

- **Next.js 15.1.4** - React framework for production
- **React 18.3.1** - UI library
- **TypeScript 5.7.2** - Type safety
- **Tailwind CSS 3.4.17** - Utility-first CSS

### UI Components

- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **Framer Motion** - Animation library
- **next-themes** - Dark mode support

### Development Tools

- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

---

## 🎮 Presentation Controls

When running the presentation:

- **Arrow Keys** (→/←): Navigate between slides
- **Space**: Next slide
- **Escape**: Exit fullscreen
- **F**: Toggle fullscreen mode
- **Home/End**: First/Last slide

---

## 🎨 Customization

### Design System

The presentation uses a consistent design system defined in `skills_framework/layout_plan/common_guidelines.md`:

- **Color Palette**: Role-based accent colors
  - Software Developers: Blue (#3B82F6)
  - Operations & DevOps: Green (#10B981)
  - Product Managers: Orange (#F59E0B)
  - Architects: Purple (#A855F7)
  - Security: Red (#EF4444)
  - Data Engineers: Cyan (#06B6D4)

- **Typography**: Inter font family throughout
- **Layout**: Consistent 1920×1080 slide dimensions

### Modifying Content

Each slide is specified in two places:

1. **Content Specification**: `skills_framework/layout_plan/slide_XX_plan.md`
2. **Implementation**: `skills_framework/nextjs_space/app/pages/XX/page.tsx`

---

## 📋 Implementation Roadmap

The framework includes a 12-month implementation plan:

### Phase 1: Foundation (Months 1-3)
- Skills assessment and planning
- Infrastructure setup
- Pilot program launch

### Phase 2: Skill Development (Months 4-9)
- Role-based training delivery
- Practical AI projects
- Communities of Practice

### Phase 3: Scale & Sustain (Months 10-12)
- Integration with HR processes
- Scaling across organization
- Sustainability planning

---

## 🤝 Contributing

This framework is designed to be adapted for your organization. Feel free to:

- Modify slide content for your context
- Add organization-specific examples
- Adjust training estimates and timelines
- Customize the visual design

---

## 📄 License

MIT License - Feel free to use and adapt for your organization.

---

## 📞 Support & Contact

For questions, issues, or feedback:

- Create an issue in this repository
- Contact: ai-skills@yourcompany.com (update for your organization)

---

## 🙏 Acknowledgments

This framework builds upon:

- The Alan Turing Institute - AI Skills Framework
- SFIA Foundation - Skills Framework for the Information Age
- DataCamp - Data & AI Competency Framework
- NIST AI Risk Management Framework
- Cloud AI frameworks (AWS, Azure, Google Cloud)

---

## 📊 Version History

**v2.0.0** (2025) - MAJOR UPDATE
- ✨ Enhanced with GenAI/LLM focus (RAG, prompt engineering, vector databases)
- 🤖 Added AI-assisted development tools section (GitHub Copilot, Cursor, etc.)
- 🎓 Included certification paths (AWS ML Specialty, Azure AI, TensorFlow Developer)
- 📊 Updated with 2025 industry data from Google, Amazon, Microsoft hiring trends
- 🚀 MLOps enhancements reflecting 9.8× market growth
- 🔒 Enhanced security section with OWASP Top 10 for LLMs, prompt injection defenses
- 🏢 Removed government-specific content, now enterprise-focused
- ⚡ Updated all dependencies to latest stable versions (Next.js 15.1.4, React 18.3.1)
- 📚 Major expansion of Software Developers, DevOps, and Security sections
- ✅ Reality checks based on actual tech industry hiring data

**v1.0.0** (2024)
- Initial release
- 16 professional slides covering 6 IT roles
- Complete framework guide
- Modern Next.js 15 implementation
- macOS optimized setup

---

**Ready to build AI capabilities across your IT organization?**

Start with the [Quick Start](#-quick-start) guide above or dive into the [Complete Framework Guide](./AI_SKILLS_FRAMEWORK_COMPLETE_GUIDE.md).