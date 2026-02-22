interface PenguinMascotProps {
  variant: 'waving' | 'coding' | 'sliding' | 'celebrating' | 'thinking';
  size?: number;
  className?: string;
}

export const PenguinMascot = ({ variant, size = 100, className = '' }: PenguinMascotProps) => {
  const renderPenguin = () => {
    switch (variant) {
      case 'waving':
        return (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className}>
            <g>
              {/* Body bounce animation */}
              <animateTransform attributeName="transform" type="translate" values="0,0; 0,-3; 0,0" dur="2s" repeatCount="indefinite"/>
              
              {/* Main body - rounded and chubby */}
              <ellipse cx="50" cy="58" rx="24" ry="30" fill="#1E293B" stroke="#000000" strokeWidth="3"/>
              
              {/* White belly - bigger and rounder */}
              <ellipse cx="50" cy="60" rx="16" ry="22" fill="#FFFFFF"/>
              
              {/* Head - bigger and rounder */}
              <circle cx="50" cy="28" r="18" fill="#1E293B" stroke="#000000" strokeWidth="3"/>
              
              {/* White face - rounder */}
              <circle cx="50" cy="30" r="13" fill="#FFFFFF"/>
              
              {/* Big cute eyes */}
              <circle cx="44" cy="28" r="5" fill="#FFFFFF" stroke="#000000" strokeWidth="2"/>
              <circle cx="56" cy="28" r="5" fill="#FFFFFF" stroke="#000000" strokeWidth="2"/>
              <circle cx="45" cy="28" r="3" fill="#000000"/>
              <circle cx="57" cy="28" r="3" fill="#000000"/>
              <circle cx="46" cy="27" r="1.5" fill="#FFFFFF"/>
              <circle cx="58" cy="27" r="1.5" fill="#FFFFFF"/>
              
              {/* Cute rounded beak */}
              <ellipse cx="50" cy="36" rx="4" ry="3" fill="#FF6B35" stroke="#000000" strokeWidth="2"/>
              
              {/* Rosy cheeks */}
              <circle cx="38" cy="32" r="3" fill="#FFB6C1" opacity="0.6"/>
              <circle cx="62" cy="32" r="3" fill="#FFB6C1" opacity="0.6"/>
              
              {/* Left wing - rounded */}
              <ellipse cx="30" cy="52" rx="10" ry="16" fill="#1E293B" stroke="#000000" strokeWidth="3" transform="rotate(-10 30 52)"/>
              
              {/* Right wing - waving and rounded */}
              <g transform="translate(70, 48)">
                <animateTransform attributeName="transform" type="rotate" values="0 0 0; -35 0 0; 0 0 0; -35 0 0; 0 0 0" dur="2s" repeatCount="indefinite"/>
                <ellipse cx="0" cy="4" rx="10" ry="16" fill="#1E293B" stroke="#000000" strokeWidth="3"/>
              </g>
              
              {/* Cute rounded feet */}
              <ellipse cx="42" cy="86" rx="7" ry="5" fill="#FF6B35" stroke="#000000" strokeWidth="2"/>
              <ellipse cx="58" cy="86" rx="7" ry="5" fill="#FF6B35" stroke="#000000" strokeWidth="2"/>
              
              {/* Toe details */}
              <path d="M 38 86 L 36 88" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M 42 86 L 42 88" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M 46 86 L 48 88" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M 54 86 L 52 88" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M 58 86 L 58 88" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M 62 86 L 64 88" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/>
            </g>
          </svg>
        );

      case 'coding':
        return (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className}>
            <g>
              {/* Subtle typing animation */}
              <animateTransform attributeName="transform" type="translate" values="0,0; 0,-1; 0,0" dur="0.5s" repeatCount="indefinite"/>
              
              {/* Body - chubby */}
              <ellipse cx="50" cy="58" rx="24" ry="30" fill="#1E293B" stroke="#000000" strokeWidth="3"/>
              <ellipse cx="50" cy="60" rx="16" ry="22" fill="#FFFFFF"/>
              
              {/* Head - big and round */}
              <circle cx="50" cy="28" r="18" fill="#1E293B" stroke="#000000" strokeWidth="3"/>
              <circle cx="50" cy="30" r="13" fill="#FFFFFF"/>
              
              {/* Focused eyes (half-closed, concentrated) */}
              <ellipse cx="44" cy="29" rx="5" ry="3" fill="#FFFFFF" stroke="#000000" strokeWidth="2"/>
              <ellipse cx="56" cy="29" rx="5" ry="3" fill="#FFFFFF" stroke="#000000" strokeWidth="2"/>
              <circle cx="45" cy="29" r="2" fill="#000000"/>
              <circle cx="57" cy="29" r="2" fill="#000000"/>
              
              {/* Cute rounded beak */}
              <ellipse cx="50" cy="36" rx="4" ry="3" fill="#FF6B35" stroke="#000000" strokeWidth="2"/>
              
              {/* Rosy cheeks */}
              <circle cx="38" cy="32" r="3" fill="#FFB6C1" opacity="0.6"/>
              <circle cx="62" cy="32" r="3" fill="#FFB6C1" opacity="0.6"/>
              
              {/* Wings typing - rounded */}
              <g transform="translate(30, 52)">
                <animateTransform attributeName="transform" type="rotate" values="0; 10; 0; 10; 0" dur="0.5s" repeatCount="indefinite" additive="sum"/>
                <ellipse cx="0" cy="0" rx="10" ry="16" fill="#1E293B" stroke="#000000" strokeWidth="3" transform="rotate(-10 0 0)"/>
              </g>
              <g transform="translate(70, 52)">
                <animateTransform attributeName="transform" type="rotate" values="0; -10; 0; -10; 0" dur="0.5s" repeatCount="indefinite" additive="sum"/>
                <ellipse cx="0" cy="0" rx="10" ry="16" fill="#1E293B" stroke="#000000" strokeWidth="3" transform="rotate(10 0 0)"/>
              </g>
              
              {/* Cute laptop */}
              <rect x="32" y="68" width="36" height="20" fill="#64748B" stroke="#000000" strokeWidth="2" rx="3"/>
              <rect x="34" y="70" width="32" height="14" fill="#10B981" rx="1"/>
              <line x1="36" y1="73" x2="42" y2="73" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="36" y1="76" x2="48" y2="76" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="36" y1="79" x2="40" y2="79" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
              
              {/* Feet */}
              <ellipse cx="42" cy="86" rx="7" ry="5" fill="#FF6B35" stroke="#000000" strokeWidth="2"/>
              <ellipse cx="58" cy="86" rx="7" ry="5" fill="#FF6B35" stroke="#000000" strokeWidth="2"/>
            </g>
          </svg>
        );

      case 'sliding':
        return (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className}>
            <g transform="rotate(-15 50 50)">
              {/* Sliding motion */}
              <animateTransform attributeName="transform" type="translate" values="0,0; 3,0; 0,0" dur="1s" repeatCount="indefinite" additive="sum"/>
              
              {/* Body - chubby */}
              <ellipse cx="50" cy="58" rx="24" ry="30" fill="#1E293B" stroke="#000000" strokeWidth="3"/>
              <ellipse cx="50" cy="60" rx="16" ry="22" fill="#FFFFFF"/>
              
              {/* Head */}
              <circle cx="50" cy="28" r="18" fill="#1E293B" stroke="#000000" strokeWidth="3"/>
              <circle cx="50" cy="30" r="13" fill="#FFFFFF"/>
              
              {/* Super happy eyes (closed, smiling) */}
              <path d="M 39 28 Q 44 26 49 28" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M 51 28 Q 56 26 61 28" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round"/>
              
              {/* Happy open beak */}
              <ellipse cx="50" cy="36" rx="5" ry="4" fill="#FF6B35" stroke="#000000" strokeWidth="2"/>
              <path d="M 47 36 Q 50 38 53 36" fill="none" stroke="#000000" strokeWidth="1.5"/>
              
              {/* Rosy cheeks - bigger for excitement */}
              <circle cx="38" cy="32" r="4" fill="#FFB6C1" opacity="0.7"/>
              <circle cx="62" cy="32" r="4" fill="#FFB6C1" opacity="0.7"/>
              
              {/* Wings back - rounded */}
              <ellipse cx="30" cy="52" rx="10" ry="16" fill="#1E293B" stroke="#000000" strokeWidth="3" transform="rotate(-35 30 52)"/>
              <ellipse cx="70" cy="52" rx="10" ry="16" fill="#1E293B" stroke="#000000" strokeWidth="3" transform="rotate(35 70 52)"/>
              
              {/* Feet */}
              <ellipse cx="42" cy="86" rx="7" ry="5" fill="#FF6B35" stroke="#000000" strokeWidth="2"/>
              <ellipse cx="58" cy="86" rx="7" ry="5" fill="#FF6B35" stroke="#000000" strokeWidth="2"/>
              
              {/* Speed lines - more dynamic */}
              <line x1="15" y1="35" x2="28" y2="35" stroke="#64748B" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
              <line x1="10" y1="45" x2="25" y2="45" stroke="#64748B" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
              <line x1="12" y1="55" x2="30" y2="55" stroke="#64748B" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
            </g>
          </svg>
        );

      case 'celebrating':
        return (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className}>
            <g>
              {/* Jump animation */}
              <animateTransform attributeName="transform" type="translate" values="0,0; 0,-12; 0,0" dur="1.5s" repeatCount="indefinite"/>
              
              {/* Body - chubby */}
              <ellipse cx="50" cy="58" rx="24" ry="30" fill="#1E293B" stroke="#000000" strokeWidth="3"/>
              <ellipse cx="50" cy="60" rx="16" ry="22" fill="#FFFFFF"/>
              
              {/* Head */}
              <circle cx="50" cy="28" r="18" fill="#1E293B" stroke="#000000" strokeWidth="3"/>
              <circle cx="50" cy="30" r="13" fill="#FFFFFF"/>
              
              {/* Super happy eyes */}
              <path d="M 39 28 Q 44 25 49 28" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M 51 28 Q 56 25 61 28" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round"/>
              
              {/* Big happy open beak */}
              <ellipse cx="50" cy="37" rx="6" ry="5" fill="#FF6B35" stroke="#000000" strokeWidth="2"/>
              <path d="M 46 37 Q 50 40 54 37" fill="none" stroke="#000000" strokeWidth="1.5"/>
              
              {/* Extra rosy cheeks */}
              <circle cx="38" cy="32" r="4" fill="#FFB6C1" opacity="0.8"/>
              <circle cx="62" cy="32" r="4" fill="#FFB6C1" opacity="0.8"/>
              
              {/* Wings up high - rounded */}
              <ellipse cx="28" cy="38" rx="10" ry="16" fill="#1E293B" stroke="#000000" strokeWidth="3" transform="rotate(-50 28 38)"/>
              <ellipse cx="72" cy="38" rx="10" ry="16" fill="#1E293B" stroke="#000000" strokeWidth="3" transform="rotate(50 72 38)"/>
              
              {/* Feet */}
              <ellipse cx="42" cy="86" rx="7" ry="5" fill="#FF6B35" stroke="#000000" strokeWidth="2"/>
              <ellipse cx="58" cy="86" rx="7" ry="5" fill="#FF6B35" stroke="#000000" strokeWidth="2"/>
              
              {/* Confetti - more colorful */}
              <g>
                <animateTransform attributeName="transform" type="translate" values="0,0; 0,25; 0,50" dur="1.5s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="1; 1; 0" dur="1.5s" repeatCount="indefinite"/>
                <circle cx="25" cy="12" r="3" fill="#FBBF24"/>
                <rect x="68" y="15" width="4" height="4" fill="#10B981" transform="rotate(45 70 17)"/>
                <circle cx="35" cy="8" r="2.5" fill="#3B82F6"/>
                <rect x="58" y="10" width="4" height="4" fill="#EF4444" transform="rotate(30 60 12)"/>
                <circle cx="75" cy="18" r="2" fill="#A855F7"/>
              </g>
            </g>
          </svg>
        );

      case 'thinking':
        return (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className}>
            <g>
              {/* Gentle sway */}
              <animateTransform attributeName="transform" type="rotate" values="0 50 60; 3 50 60; 0 50 60; -3 50 60; 0 50 60" dur="4s" repeatCount="indefinite"/>
              
              {/* Body - chubby */}
              <ellipse cx="50" cy="58" rx="24" ry="30" fill="#1E293B" stroke="#000000" strokeWidth="3"/>
              <ellipse cx="50" cy="60" rx="16" ry="22" fill="#FFFFFF"/>
              
              {/* Head */}
              <circle cx="50" cy="28" r="18" fill="#1E293B" stroke="#000000" strokeWidth="3"/>
              <circle cx="50" cy="30" r="13" fill="#FFFFFF"/>
              
              {/* Thinking eyes (looking up and to the side) */}
              <circle cx="43" cy="26" r="5" fill="#FFFFFF" stroke="#000000" strokeWidth="2"/>
              <circle cx="55" cy="26" r="5" fill="#FFFFFF" stroke="#000000" strokeWidth="2"/>
              <circle cx="42" cy="25" r="3" fill="#000000"/>
              <circle cx="54" cy="25" r="3" fill="#000000"/>
              <circle cx="42" cy="24" r="1.5" fill="#FFFFFF"/>
              <circle cx="54" cy="24" r="1.5" fill="#FFFFFF"/>
              
              {/* Small beak */}
              <ellipse cx="50" cy="36" rx="3.5" ry="2.5" fill="#FF6B35" stroke="#000000" strokeWidth="2"/>
              
              {/* Rosy cheeks */}
              <circle cx="38" cy="32" r="3" fill="#FFB6C1" opacity="0.6"/>
              <circle cx="62" cy="32" r="3" fill="#FFB6C1" opacity="0.6"/>
              
              {/* Wing to chin (thinking pose) - rounded */}
              <ellipse cx="30" cy="52" rx="10" ry="16" fill="#1E293B" stroke="#000000" strokeWidth="3" transform="rotate(-10 30 52)"/>
              <ellipse cx="70" cy="48" rx="10" ry="16" fill="#1E293B" stroke="#000000" strokeWidth="3" transform="rotate(-35 70 48)"/>
              
              {/* Feet */}
              <ellipse cx="42" cy="86" rx="7" ry="5" fill="#FF6B35" stroke="#000000" strokeWidth="2"/>
              <ellipse cx="58" cy="86" rx="7" ry="5" fill="#FF6B35" stroke="#000000" strokeWidth="2"/>
              
              {/* Thought bubble - cuter */}
              <g>
                <animate attributeName="opacity" values="0; 1; 1; 0" dur="4s" repeatCount="indefinite"/>
                <circle cx="72" cy="18" r="10" fill="#FFFFFF" stroke="#000000" strokeWidth="2.5"/>
                <circle cx="66" cy="27" r="4" fill="#FFFFFF" stroke="#000000" strokeWidth="2"/>
                <circle cx="62" cy="32" r="2.5" fill="#FFFFFF" stroke="#000000" strokeWidth="2"/>
                <text x="72" y="23" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#000000" textAnchor="middle">?</text>
              </g>
            </g>
          </svg>
        );

      default:
        return null;
    }
  };

  return renderPenguin();
};
