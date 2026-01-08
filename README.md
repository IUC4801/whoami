# Portfolio Website

A modern portfolio website built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- Reactjs
- TypeScript
- Vite
- Tailwind CSS with shadcn-ui
- Framer Motion
- React Router DOM
- TanStack Query
- Next Themes

## Setup

### Prerequisites

```
Node.js v18 or higher
```

### Installation

```bash
git clone <YOUR_GIT_URL>
cd my-creative-space
npm install
```

### Development

```bash
npm run dev        # Development server at http://localhost:8080
npm run build      # Production build
npm run start      # Preview production build at http://localhost:3000
npm run lint       # Run ESLint
```

## Project Structure

```
src/
├── components/     # React components
│   └── ui/        # shadcn-ui components
├── pages/         # Route pages
├── hooks/         # Custom hooks
├── lib/           # Utilities
└── data/          # Static data
```

## Configuration

Content can be updated in:
- `src/data/projects.ts` - Project listings
- `src/data/experience.ts` - Work experience
- `src/data/skills.ts` - Technical skills
- `src/data/achievements.ts` - Achievements and certifications
