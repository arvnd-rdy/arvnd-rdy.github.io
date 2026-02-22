interface OctopusMascotProps {
  variant: 'idle' | 'working' | 'victory' | 'panic' | 'sleep';
  size?: number;
  className?: string;
}

export const OctopusMascot = ({ variant, size = 100, className = '' }: OctopusMascotProps) => {
  const renderOctopus = () => {
    switch (variant) {
      case 'idle':
        return (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className}>
            <g>
              <animateTransform attributeName="transform" type="translate" values="0,5; 0,-5; 0,5" dur="3s" repeatCount="indefinite"/>
              <path d="M 30 50 C 30 10 70 10 70 50 C 70 60 30 60 30 50 Z" fill="#A855F7"/>
              <circle cx="40" cy="45" r="4" fill="#FFFFFF"/>
              <circle cx="60" cy="45" r="4" fill="#FFFFFF"/>
              <circle cx="40" cy="45" r="2" fill="#1E293B"/>
              <circle cx="60" cy="45" r="2" fill="#1E293B"/>
              <g transform="translate(35, 55)">
                <animateTransform attributeName="transform" type="rotate" values="0; 20; 0" dur="2s" repeatCount="indefinite" additive="sum"/>
                <path d="M 0 0 Q -20 10 -15 25" fill="none" stroke="#A855F7" strokeWidth="8" strokeLinecap="round"/>
              </g>
              <g transform="translate(45, 58)">
                <animateTransform attributeName="transform" type="rotate" values="0; -15; 0" dur="2.5s" repeatCount="indefinite" additive="sum"/>
                <path d="M 0 0 Q -5 15 0 30" fill="none" stroke="#A855F7" strokeWidth="8" strokeLinecap="round"/>
              </g>
              <g transform="translate(55, 58)">
                <animateTransform attributeName="transform" type="rotate" values="0; 15; 0" dur="2.2s" repeatCount="indefinite" additive="sum"/>
                <path d="M 0 0 Q 5 15 0 30" fill="none" stroke="#A855F7" strokeWidth="8" strokeLinecap="round"/>
              </g>
              <g transform="translate(65, 55)">
                <animateTransform attributeName="transform" type="rotate" values="0; -20; 0" dur="1.8s" repeatCount="indefinite" additive="sum"/>
                <path d="M 0 0 Q 20 10 15 25" fill="none" stroke="#A855F7" strokeWidth="8" strokeLinecap="round"/>
              </g>
            </g>
          </svg>
        );

      case 'working':
        return (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className}>
            <g>
              <animateTransform attributeName="transform" type="translate" values="0,2; 0,-2; 0,2" dur="1s" repeatCount="indefinite"/>
              <path d="M 30 50 C 30 10 70 10 70 50 C 70 60 30 60 30 50 Z" fill="#A855F7"/>
              <circle cx="40" cy="45" r="4" fill="#FFFFFF"/>
              <circle cx="60" cy="45" r="4" fill="#FFFFFF"/>
              <circle cx="42" cy="45" r="2" fill="#1E293B"/>
              <circle cx="58" cy="45" r="2" fill="#1E293B"/>
              <line x1="35" y1="40" x2="45" y2="42" stroke="#7E22CE" strokeWidth="2" strokeLinecap="round"/>
              <line x1="65" y1="40" x2="55" y2="42" stroke="#7E22CE" strokeWidth="2" strokeLinecap="round"/>
              <g transform="translate(32, 45)">
                <animateTransform attributeName="transform" type="rotate" values="-10; 10; -10" dur="0.5s" repeatCount="indefinite" additive="sum"/>
                <path d="M 0 0 Q -25 0 -25 -15" fill="none" stroke="#A855F7" strokeWidth="6" strokeLinecap="round"/>
                <path d="M -28 -15 C -32 -20 -20 -20 -22 -15 Z" fill="#94A3B8"/>
              </g>
              <g transform="translate(68, 45)">
                <animateTransform attributeName="transform" type="rotate" values="10; -5; 10" dur="2s" repeatCount="indefinite" additive="sum"/>
                <path d="M 0 0 Q 25 0 25 -10" fill="none" stroke="#A855F7" strokeWidth="6" strokeLinecap="round"/>
                <rect x="20" y="-18" width="10" height="12" fill="#F87171" rx="2"/>
              </g>
              <g transform="translate(40, 55)">
                <animateTransform attributeName="transform" type="rotate" values="0; 20; 0" dur="0.3s" repeatCount="indefinite" additive="sum"/>
                <path d="M 0 0 Q -10 20 0 30" fill="none" stroke="#A855F7" strokeWidth="6" strokeLinecap="round"/>
              </g>
              <g transform="translate(60, 55)">
                <animateTransform attributeName="transform" type="rotate" values="0; -20; 0" dur="0.35s" repeatCount="indefinite" additive="sum"/>
                <path d="M 0 0 Q 10 20 0 30" fill="none" stroke="#A855F7" strokeWidth="6" strokeLinecap="round"/>
              </g>
            </g>
          </svg>
        );

      case 'victory':
        return (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className}>
            <g>
              <animateTransform attributeName="transform" type="translate" values="0,5; 0,-10; 0,5" dur="1.5s" repeatCount="indefinite"/>
              <path d="M 30 50 C 30 10 70 10 70 50 C 70 60 30 60 30 50 Z" fill="#A855F7"/>
              <path d="M 36 45 Q 40 40 44 45" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round"/>
              <path d="M 56 45 Q 60 40 64 45" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round"/>
              <path d="M 35 48 Q 20 20 40 10" fill="none" stroke="#A855F7" strokeWidth="8" strokeLinecap="round"/>
              <path d="M 65 48 Q 80 20 60 10" fill="none" stroke="#A855F7" strokeWidth="8" strokeLinecap="round"/>
              <path d="M 40 58 Q 30 70 40 75 Q 45 70 40 68" fill="none" stroke="#A855F7" strokeWidth="6" strokeLinecap="round"/>
              <path d="M 60 58 Q 70 70 60 75 Q 55 70 60 68" fill="none" stroke="#A855F7" strokeWidth="6" strokeLinecap="round"/>
            </g>
            <g transform="translate(50, 20)">
              <animateTransform attributeName="transform" type="rotate" values="0; 360" dur="4s" repeatCount="indefinite" additive="sum"/>
              <polygon points="0,-10 3,-3 10,-3 4,2 6,9 0,5 -6,9 -4,2 -10,-3 -3,-3" fill="#FBBF24"/>
            </g>
          </svg>
        );

      case 'panic':
        return (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className}>
            <circle cx="50" cy="50" r="0" fill="#1E293B">
              <animate attributeName="r" values="0; 40; 0" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.8; 0; 0.8" dur="2s" repeatCount="indefinite"/>
            </circle>
            <g>
              <animateTransform attributeName="transform" type="translate" values="-3,0; 3,0; -3,0; 3,0; 0,0" dur="0.2s" repeatCount="indefinite"/>
              <path d="M 30 50 C 30 10 70 10 70 50 C 70 60 30 60 30 50 Z" fill="#A855F7"/>
              <circle cx="40" cy="45" r="6" fill="#FFFFFF"/>
              <circle cx="60" cy="45" r="6" fill="#FFFFFF"/>
              <circle cx="40" cy="45" r="1" fill="#1E293B"/>
              <circle cx="60" cy="45" r="1" fill="#1E293B"/>
              <ellipse cx="50" cy="55" rx="3" ry="5" fill="#7E22CE"/>
              <path d="M 35 55 Q 10 70 20 40" fill="none" stroke="#A855F7" strokeWidth="6" strokeLinecap="round"/>
              <path d="M 45 58 Q 30 80 50 70" fill="none" stroke="#A855F7" strokeWidth="6" strokeLinecap="round"/>
              <path d="M 55 58 Q 70 80 50 70" fill="none" stroke="#A855F7" strokeWidth="6" strokeLinecap="round"/>
              <path d="M 65 55 Q 90 70 80 40" fill="none" stroke="#A855F7" strokeWidth="6" strokeLinecap="round"/>
            </g>
          </svg>
        );

      case 'sleep':
        return (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className}>
            <g transform="translate(0, 20)">
              <animateTransform attributeName="transform" type="scale" values="1,1; 1.05,0.95; 1,1" dur="4s" repeatCount="indefinite" transform-origin="50 50"/>
              <ellipse cx="50" cy="45" rx="20" ry="18" fill="#A855F7"/>
              <path d="M 38 48 Q 42 52 46 48" fill="none" stroke="#7E22CE" strokeWidth="2" strokeLinecap="round"/>
              <path d="M 54 48 Q 58 52 62 48" fill="none" stroke="#7E22CE" strokeWidth="2" strokeLinecap="round"/>
              <path d="M 32 55 Q 50 70 68 55" fill="none" stroke="#9333EA" strokeWidth="8" strokeLinecap="round"/>
              <path d="M 28 50 Q 50 80 72 50" fill="none" stroke="#7E22CE" strokeWidth="8" strokeLinecap="round"/>
            </g>
            <text x="65" y="30" fontFamily="Arial" fontWeight="bold" fontSize="10" fill="#A855F7">
              <animateTransform attributeName="transform" type="translate" values="0,0; 5,-10; 10,-20" dur="3s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0; 1; 0" dur="3s" repeatCount="indefinite"/>Z
            </text>
          </svg>
        );

      default:
        return null;
    }
  };

  return renderOctopus();
};
