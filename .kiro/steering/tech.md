# Tech Stack & Build System

## Core Technologies
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite (fast development and optimized builds)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animation**: Framer Motion for smooth interactions
- **Routing**: React Router DOM v6
- **State Management**: TanStack React Query for server state
- **UI Components**: Radix UI primitives with shadcn/ui
- **Icons**: Lucide React + React Icons
- **Theme**: next-themes for dark/light mode
- **Forms**: React Hook Form with Zod validation

## Development Tools
- **Linting**: ESLint with TypeScript support
- **Package Manager**: npm (with bun.lockb present)
- **Dev Server**: Vite dev server on port 8080
- **Component Tagging**: lovable-tagger for development mode

## Common Commands
```bash
# Development
npm run dev          # Start dev server on localhost:8080
npm run build        # Production build
npm run build:dev    # Development build
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Alternative with bun (if preferred)
bun dev
bun run build
```

## Path Aliases
- `@/` maps to `./src/`
- `@/components` for UI components
- `@/lib` for utilities
- `@/hooks` for custom hooks
- `@/utils` for helper functions

## Key Dependencies
- **UI**: @radix-ui/* components, shadcn/ui, tailwindcss-animate
- **Animation**: framer-motion, custom animation utilities
- **Data**: @tanstack/react-query for async state
- **Forms**: react-hook-form, @hookform/resolvers, zod
- **Utilities**: clsx, tailwind-merge, class-variance-authority