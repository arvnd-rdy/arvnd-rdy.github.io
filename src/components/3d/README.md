# 3D Components Documentation

This directory contains all 3D components built with React Three Fiber and Three.js, designed to enhance the portfolio with subtle but impactful 3D elements.

## Components Overview

### Core Components

#### `Scene3D.tsx`
- Main 3D scene wrapper with performance monitoring
- Adaptive quality based on device performance
- Configurable camera position and lighting
- Optional floating geometry background

#### `Adaptive3D.tsx`
- Smart wrapper that conditionally renders 3D content
- Detects device capabilities (WebGL support, performance)
- Falls back gracefully on low-end devices

#### `PerformanceMonitor.tsx`
- Real-time FPS monitoring
- Automatic quality adjustment based on performance
- Pixel ratio optimization for different devices

### Visual Components

#### `FloatingGeometry.tsx`
- Animated dodecahedron particles
- Smooth floating motion with mouse interaction
- Configurable count and speed parameters

#### `InteractiveOrb.tsx`
- Large interactive 3D spheres
- Mouse-responsive rotation and scaling
- Customizable position, color, and size

#### `ParticleField.tsx`
- Spherical particle distribution
- Gradient coloring and additive blending
- Smooth rotation animation

#### `CodeMatrix.tsx`
- Floating code snippets in 3D space
- Represents different tech stacks
- Animated positioning and depth

#### `SkillsVisualization.tsx`
- 3D network of skill nodes
- Connected spheres representing technologies
- Dynamic text labels and connections

#### `ProjectCard3D.tsx`
- Floating project card representations
- Hover interactions and animations
- Staggered positioning for visual depth

#### `Timeline3D.tsx`
- 3D timeline visualization for experience
- Interactive nodes with company information
- Smooth animations and transitions

#### `NetworkNodes.tsx`
- Connected node network visualization
- Represents professional connections
- Dynamic line connections between nodes

## Usage Examples

### Basic Scene
```tsx
import { Scene3D, InteractiveOrb } from '@/components/3d';

<Scene3D className="opacity-60" enableFloatingGeometry={true}>
  <InteractiveOrb position={[15, 5, -10]} color="#6366f1" size={2} />
</Scene3D>
```

### Adaptive Rendering
```tsx
import { Adaptive3D, ParticleField } from '@/components/3d';

<Adaptive3D className="opacity-40" fallback={<div>Fallback content</div>}>
  <ParticleField count={500} radius={30} />
</Adaptive3D>
```

## Performance Considerations

- **Automatic Quality Adjustment**: Components automatically reduce complexity on lower-end devices
- **Device Detection**: WebGL support and hardware capabilities are checked before rendering
- **Memory Management**: Proper cleanup and disposal of 3D resources
- **Frame Rate Monitoring**: Real-time performance tracking with automatic optimization

## Integration Points

### Hero Section
- Floating geometry background
- Interactive orbs for visual interest
- Mouse-responsive animations

### About Section
- Code matrix background
- Particle field for depth
- Subtle animations that don't distract from content

### Skills Section
- 3D skill visualization
- Connected node network
- Interactive hover effects

### Projects Section
- Floating project cards
- Depth-based positioning
- Smooth transitions

### Experience Section
- 3D timeline visualization
- Interactive experience nodes
- Professional journey representation

### Contact Section
- Network nodes background
- Connection visualization
- Professional networking theme

## Browser Compatibility

- **WebGL Support**: Required for 3D rendering
- **Performance Fallbacks**: Graceful degradation on unsupported devices
- **Mobile Optimization**: Reduced complexity on mobile devices
- **Cross-browser Testing**: Tested on Chrome, Firefox, Safari, Edge

## Customization

All components accept standard props for:
- Position and rotation
- Colors and materials
- Animation speed and behavior
- Opacity and blending modes
- Performance thresholds

## Future Enhancements

- VR/AR support for compatible devices
- Advanced shader materials
- Physics-based animations
- Interactive 3D models
- Real-time lighting effects