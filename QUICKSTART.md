# AI Skills Framework - Quick Start Guide

Get the interactive presentation running in 5 minutes on macOS.

---

## Prerequisites Check

Before you begin, verify you have the required tools:

```bash
# Check Node.js version (need 18.17.0+)
node --version

# Check npm version (need 9.0.0+)
npm --version
```

**Don't have Node.js?** Install via Homebrew:

```bash
# Install Homebrew (if not already installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js (includes npm)
brew install node
```

---

## Quick Setup (3 Steps)

### 1. Navigate to the Presentation Directory

```bash
cd skills_framework/nextjs_space
```

### 2. Install Dependencies

```bash
npm install
```

This will take 1-2 minutes depending on your internet connection.

### 3. Start the Development Server

```bash
npm run dev
```

You should see output like:

```
✓ Ready in 2.3s
Local: http://localhost:3000
```

### 4. Open in Browser

Navigate to **http://localhost:3000** in your browser.

---

## 🎉 You're Done!

The interactive presentation is now running. Use arrow keys to navigate between slides.

---

## Presentation Controls

- **→ / ←** - Next/Previous slide
- **Space** - Next slide
- **Home** - First slide
- **End** - Last slide
- **Esc** - Exit fullscreen
- **F** - Toggle fullscreen

---

## Production Build (Optional)

For better performance or to deploy:

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## Troubleshooting

### Port 3000 Already in Use?

```bash
# Kill process using port 3000
lsof -ti:3000 | xargs kill -9

# Or specify a different port
PORT=3001 npm run dev
```

### Module Not Found Errors?

```bash
# Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Node Version Too Old?

```bash
# Update Node.js via Homebrew
brew upgrade node

# Verify version
node --version  # Should be 18.17.0 or higher
```

### Permission Errors on macOS?

```bash
# Fix npm permissions
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules
```

---

## Next Steps

### Explore the Framework

- 📖 **[Complete Guide](./AI_SKILLS_FRAMEWORK_COMPLETE_GUIDE.md)** - Full framework documentation
- 📝 **[README](./README.md)** - Detailed information about the project
- 🎨 **[Design Guidelines](./skills_framework/layout_plan/common_guidelines.md)** - Visual design system

### Customize the Presentation

Each slide has two components:

1. **Content Plan**: `skills_framework/layout_plan/slide_XX_plan.md`
2. **Implementation**: `skills_framework/nextjs_space/app/pages/XX/page.tsx`

Edit these files to customize for your organization.

---

## Common Tasks

### Update Dependencies

```bash
# Check for outdated packages
npm outdated

# Update to latest compatible versions
npm update

# Update to latest versions (use with caution)
npx npm-check-updates -u
npm install
```

### Run Type Checking

```bash
npm run type-check
```

### Run Linting

```bash
npm run lint
```

---

## macOS Specific Tips

### Performance Optimization

```bash
# Clear Next.js cache for better performance
rm -rf .next

# Rebuild
npm run build
```

### Recommended Browser

- **Chrome** or **Safari** for best performance
- Enable hardware acceleration in browser settings

### VS Code Integration

If using VS Code, install recommended extensions:

```bash
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension bradlc.vscode-tailwindcss
```

---

## Architecture Overview

```
skills_framework/nextjs_space/
├── app/
│   ├── page.tsx          # Landing page (/)
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Global styles
│   └── pages/            # Slides
│       ├── 1/page.tsx    # Slide 1
│       ├── 2/page.tsx    # Slide 2
│       └── ...
├── components/
│   ├── ui/               # Radix UI components
│   ├── theme-provider.tsx
│   └── keyboard-navigation.tsx
└── package.json          # Dependencies
```

---

## Scripts Reference

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm start           # Start production server
npm run lint        # Run ESLint
npm run type-check  # Run TypeScript type checking
```

---

## Support

- 📧 **Email**: ai-skills@yourcompany.com
- 🐛 **Issues**: Create an issue in the repository
- 📖 **Docs**: See [Complete Guide](./AI_SKILLS_FRAMEWORK_COMPLETE_GUIDE.md)

---

## License

MIT License - Free to use and adapt for your organization.

---

**Happy presenting! 🚀**
