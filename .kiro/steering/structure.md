# Project Structure & Organization

## Folder Architecture
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui base components
│   ├── HeroSection.tsx # Page section components
│   ├── AboutSection.tsx
│   ├── ProjectsSection.tsx
│   └── ...
├── pages/              # Route-level page components
│   ├── Index.tsx       # Home page
│   ├── About.tsx       # About page
│   ├── Projects.tsx    # Projects page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
│   ├── useScrollAnimation.ts
│   ├── useParallaxScroll.ts
│   └── ...
├── lib/                # Utility libraries
│   └── utils.ts        # Common utilities (cn, etc.)
├── utils/              # Helper functions
│   └── animations.ts   # Framer Motion variants
├── App.tsx             # Main app component with routing
├── main.tsx            # React app entry point
└── index.css           # Global styles & CSS variables
```

## Component Conventions
- **Section Components**: Named with "Section" suffix (e.g., `HeroSection.tsx`)
- **Page Components**: Simple names matching routes (e.g., `About.tsx`)
- **UI Components**: Located in `components/ui/` following shadcn/ui patterns
- **Custom Hooks**: Prefixed with "use" (e.g., `useScrollAnimation.ts`)

## Naming Patterns
- **Files**: PascalCase for components, camelCase for utilities
- **Components**: PascalCase with descriptive names
- **Props**: TypeScript interfaces, often inline for simple cases
- **CSS Classes**: Tailwind utility classes, custom animations via Tailwind config

## Code Organization
- **Imports**: External libraries first, then internal imports with `@/` alias
- **Component Structure**: Props interface → main component → export default
- **Animation**: Framer Motion variants defined in `utils/animations.ts`
- **Styling**: Tailwind classes with `cn()` utility for conditional styling

## Key Files
- `App.tsx`: Router setup with QueryClient and TooltipProvider
- `components.json`: shadcn/ui configuration
- `tailwind.config.ts`: Extended theme with custom animations
- `vite.config.ts`: Build configuration with path aliases