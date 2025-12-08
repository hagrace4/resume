# Harry Grace - Resume

[![Deploy Resume](https://github.com/hagrace4/resume/actions/workflows/deploy.yml/badge.svg)](https://github.com/hagrace4/resume/actions/workflows/deploy.yml)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/Docker-ready-2496ED?logo=docker)](https://www.docker.com/)

A modern, minimalist resume website built with Next.js and automatically deployed to Oracle Cloud Infrastructure using GitHub Actions.

## 🚀 Features

- **Automated CI/CD Pipeline** - GitHub Actions workflow for continuous deployment
- **Containerized Deployment** - Docker-based deployment for consistency and portability
- **Cloud Infrastructure** - Hosted on Oracle Cloud Free Tier
- **Modern Stack** - Built with Next.js 14, TypeScript, and Tailwind CSS
- **Print Optimized** - Specially designed print styles for PDF export
- **Responsive Design** - Looks great on all devices

## 🛠️ Tech Stack

### Application
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Code Quality**: [Biome.js](https://biomejs.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)

### Infrastructure & DevOps
- **CI/CD**: GitHub Actions
- **Container Registry**: GitHub Container Registry (ghcr.io)
- **Hosting**: Oracle Cloud Infrastructure (Free Tier)
- **Containerization**: Docker (multi-stage builds)
- **Deployment**: Automated SSH-based deployment

## 📋 CI/CD Pipeline

The project features a complete automated deployment pipeline:

```
Push to main → Build & Test → Docker Build → Push to Registry → Deploy to Oracle Cloud
```

### Pipeline Stages

1. **Build and Test**
   - Install dependencies with pnpm
   - Build Next.js application
   - Run Biome code quality checks

2. **Docker Build**
   - Build optimized Docker image
   - Tag with commit SHA and 'latest'
   - Push to GitHub Container Registry

3. **Deploy**
   - SSH to Oracle Cloud VM
   - Pull latest Docker image
   - Stop old container gracefully
   - Start new container
   - Verify deployment health

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm 9+
- Docker (optional, for local container testing)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/hagrace4/resume.git
   cd resume
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)**

### Customize Your Resume

Edit the resume data in a single file:
```typescript
// src/data/resume-data.tsx
export const RESUME_DATA = {
  name: "Your Name",
  location: "Your Location",
  about: "Your bio",
  // ... more fields
}
```

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm check        # Run code quality checks
pnpm check:fix    # Auto-fix linting and formatting issues
```

## 🐳 Docker Deployment

### Local Docker Testing

```bash
# Build the container
docker compose build

# Run the container
docker compose up -d

# Stop the container
docker compose down
```

### Production Deployment

The application automatically deploys to Oracle Cloud on every push to the main branch. The deployment process:

1. Builds optimized Docker image
2. Pushes to GitHub Container Registry
3. SSHs to Oracle Cloud VM
4. Pulls and deploys new container
5. Verifies deployment health

## 🔧 Infrastructure Setup

### Oracle Cloud VM Setup

The application runs on Oracle Cloud Free Tier:
- **Instance**: VM.Standard.E2.1.Micro (1 OCPU, 1GB RAM)
- **OS**: Ubuntu 22.04 LTS
- **Docker**: Latest stable version
- **Ports**: 3000 (application), 22 (SSH)

### GitHub Secrets Configuration

Required secrets for CI/CD:
- `ORACLE_VM_HOST` - VM IP address or hostname
- `ORACLE_VM_USER` - SSH username
- `ORACLE_VM_SSH_KEY` - Private SSH key for authentication

## 📁 Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD pipeline configuration
├── scripts/
│   └── deploy.sh               # Deployment script for Oracle VM
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── components/         # React components
│   │   └── page.tsx           # Main resume page
│   ├── data/
│   │   └── resume-data.tsx    # Resume content (edit this!)
│   └── components/
│       └── ui/                 # shadcn/ui components
├── Dockerfile                  # Multi-stage Docker build
├── docker-compose.yaml         # Local development compose
└── package.json               # Dependencies and scripts
```

## 🎨 Customization

### Styling

The application uses Tailwind CSS. Customize:
- Colors in `tailwind.config.js`
- Global styles in `src/app/globals.css`
- Print styles for PDF export

### Content

All resume content is in `src/data/resume-data.tsx`:
- Personal information
- Work experience
- Education
- Skills
- Projects
- Contact information

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Original template by [Bartosz Jarocki](https://github.com/BartoszJarocki/cv)
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Oracle Cloud](https://www.oracle.com/cloud/free/) for free tier hosting

---

**Built with ❤️ by Harry Grace**

[GitHub](https://github.com/hagrace4) • [LinkedIn](https://www.linkedin.com/in/hagrace4)
