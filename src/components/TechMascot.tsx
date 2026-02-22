interface TechMascotProps {
  variant: 'welcome' | 'typing' | 'thinking' | 'loading' | 'coffee' | 'debugging' | 
           'deploying' | 'shocked' | 'eureka' | 'confused' | 'cool' | 'hacker' | 
           'bored' | 'success' | 'winking' | 'mindblown' | 'starstruck' | 'love' | 
           'tired' | 'frustrated';
  size?: number;
  className?: string;
}

export const TechMascot = ({ variant, size = 80, className = '' }: TechMascotProps) => {
  const renderMascot = () => {
    const commonElements = `
      <ellipse cx="200" cy="345" rx="100" ry="12" fill="#000000" opacity="0.15"/>
      <path d="M 190 100 Q 180 50 205 30 Q 200 60 210 100 Z" fill="#1E293B"/>
      <ellipse cx="150" cy="330" rx="35" ry="20" fill="#F59E0B"/>
      <ellipse cx="250" cy="330" rx="35" ry="20" fill="#F59E0B"/>
      <rect x="100" y="90" width="200" height="250" rx="100" fill="#1E293B"/>
      <path d="M 200 120 C 230 90, 270 110, 270 160 C 270 190, 280 270, 200 330 C 120 270, 130 190, 130 160 C 130 110, 170 90, 200 120 Z" fill="#FFFFFF"/>
      <path d="M 230 230 L 210 310 Q 230 315 250 305 L 260 225 Z" fill="#DC2626"/>
      <line x1="215" y1="308" x2="210" y2="320" stroke="#DC2626" stroke-width="4" stroke-linecap="round"/>
      <line x1="230" y1="311" x2="225" y2="323" stroke="#DC2626" stroke-width="4" stroke-linecap="round"/>
      <line x1="245" y1="307" x2="240" y2="319" stroke="#DC2626" stroke-width="4" stroke-linecap="round"/>
      <path d="M 95 210 Q 200 245 305 210 Q 305 240 200 270 Q 95 240 95 210 Z" fill="#EF4444"/>
    `;

    switch (variant) {
      case 'welcome':
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${size}" height="${size}" class="${className}">
          ${commonElements}
          <path d="M 110 190 C 50 200, 30 280, 60 300 C 80 320, 110 260, 120 220 Z" fill="#1E293B"/>
          <path d="M 290 190 C 360 160, 380 90, 340 80 C 310 70, 270 130, 280 180 Z" fill="#1E293B"/>
          <circle cx="165" cy="155" r="14" fill="#0F172A"/>
          <circle cx="170" cy="149" r="5" fill="#FFFFFF"/>
          <circle cx="160" cy="158" r="2" fill="#FFFFFF"/>
          <circle cx="235" cy="155" r="14" fill="#0F172A"/>
          <circle cx="240" cy="149" r="5" fill="#FFFFFF"/>
          <circle cx="230" cy="158" r="2" fill="#FFFFFF"/>
          <ellipse cx="145" cy="170" rx="12" ry="6" fill="#F472B6" opacity="0.6"/>
          <ellipse cx="255" cy="170" rx="12" ry="6" fill="#F472B6" opacity="0.6"/>
          <path d="M 180 175 Q 200 165 220 175 Q 200 190 180 175 Z" fill="#FBBF24"/>
          <path d="M 183 178 Q 200 205 217 178 Q 200 185 183 178 Z" fill="#F59E0B"/>
          <path d="M 192 186 Q 200 198 208 186 Q 200 190 192 186 Z" fill="#EF4444"/>
        </svg>`;

      case 'typing':
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${size}" height="${size}" class="${className}">
          ${commonElements}
          <path d="M 120 300 L 280 300 L 250 230 L 150 230 Z" fill="#64748B"/>
          <rect x="100" y="295" width="200" height="15" rx="5" fill="#475569"/>
          <polygon points="155,235 245,235 270,295 130,295" fill="#38BDF8" opacity="0.3"/>
          <path d="M 110 190 C 50 180, 100 260, 160 280 C 180 280, 140 230, 120 220 Z" fill="#1E293B"/>
          <path d="M 290 190 C 350 180, 300 260, 240 280 C 220 280, 260 230, 280 220 Z" fill="#1E293B"/>
          <rect x="140" y="135" width="45" height="35" rx="5" fill="none" stroke="#0F172A" stroke-width="5"/>
          <rect x="215" y="135" width="45" height="35" rx="5" fill="none" stroke="#0F172A" stroke-width="5"/>
          <line x1="185" y1="150" x2="215" y2="150" stroke="#0F172A" stroke-width="5" stroke-linecap="round"/>
          <circle cx="165" cy="155" r="8" fill="#0F172A"/>
          <circle cx="235" cy="155" r="8" fill="#0F172A"/>
          <path d="M 185 180 Q 200 185 215 180" fill="none" stroke="#F59E0B" stroke-width="6" stroke-linecap="round"/>
        </svg>`;

      case 'thinking':
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${size}" height="${size}" class="${className}">
          ${commonElements}
          <path d="M 110 190 C 50 200, 30 280, 60 300 C 80 320, 110 260, 120 220 Z" fill="#1E293B"/>
          <path d="M 290 190 C 350 160, 270 150, 240 180 C 240 190, 270 210, 280 210 Z" fill="#1E293B"/>
          <circle cx="260" cy="110" r="6" fill="#FFFFFF"/>
          <circle cx="285" cy="85" r="12" fill="#FFFFFF"/>
          <circle cx="320" cy="50" r="22" fill="#FFFFFF"/>
          <text x="310" y="62" font-family="sans-serif" font-weight="bold" font-size="30" fill="#0F172A">?</text>
          <circle cx="165" cy="155" r="14" fill="#0F172A"/>
          <circle cx="172" cy="148" r="4" fill="#FFFFFF"/>
          <circle cx="235" cy="155" r="14" fill="#0F172A"/>
          <circle cx="242" cy="148" r="4" fill="#FFFFFF"/>
          <path d="M 185 185 L 210 175" fill="none" stroke="#F59E0B" stroke-width="6" stroke-linecap="round"/>
        </svg>`;

      case 'coffee':
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${size}" height="${size}" class="${className}">
          ${commonElements}
          <path d="M 110 190 C 50 200, 30 280, 60 300 C 80 320, 110 260, 120 220 Z" fill="#1E293B"/>
          <path d="M 290 190 C 350 180, 330 250, 280 250 C 270 250, 280 220, 280 210 Z" fill="#1E293B"/>
          <rect x="235" y="200" width="40" height="45" rx="5" fill="#F8FAFC"/>
          <path d="M 275 215 C 290 215 290 235 275 235" fill="none" stroke="#F8FAFC" stroke-width="6"/>
          <path d="M 245 190 Q 250 180 245 170" fill="none" stroke="#94A3B8" stroke-width="4" stroke-linecap="round"/>
          <path d="M 260 190 Q 265 175 260 160" fill="none" stroke="#94A3B8" stroke-width="4" stroke-linecap="round"/>
          <circle cx="165" cy="155" r="22" fill="#FFFFFF" stroke="#0F172A" stroke-width="3"/>
          <circle cx="165" cy="155" r="3" fill="#0F172A"/>
          <circle cx="235" cy="155" r="22" fill="#FFFFFF" stroke="#0F172A" stroke-width="3"/>
          <circle cx="235" cy="155" r="3" fill="#0F172A"/>
          <ellipse cx="140" cy="175" rx="15" ry="8" fill="#F43F5E" opacity="0.6"/>
          <ellipse cx="260" cy="175" rx="15" ry="8" fill="#F43F5E" opacity="0.6"/>
          <path d="M 180 180 L 190 175 L 200 185 L 210 175 L 220 180" fill="none" stroke="#F59E0B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;

      case 'cool':
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${size}" height="${size}" class="${className}">
          ${commonElements}
          <path d="M 110 190 C 80 200, 150 260, 220 230 C 210 210, 150 230, 120 210 Z" fill="#1E293B"/>
          <path d="M 290 190 C 320 200, 250 260, 180 230 C 190 210, 250 230, 280 210 Z" fill="#0F172A"/>
          <path d="M 135 145 L 195 145 L 185 165 L 145 165 Z" fill="#0F172A"/>
          <path d="M 205 145 L 265 145 L 255 165 L 215 165 Z" fill="#0F172A"/>
          <line x1="195" y1="145" x2="205" y2="145" stroke="#0F172A" stroke-width="4"/>
          <line x1="150" y1="155" x2="160" y2="145" stroke="#FFFFFF" stroke-width="3" opacity="0.4"/>
          <line x1="220" y1="155" x2="230" y2="145" stroke="#FFFFFF" stroke-width="3" opacity="0.4"/>
          <path d="M 185 180 Q 200 185 220 175" fill="none" stroke="#F59E0B" stroke-width="6" stroke-linecap="round"/>
        </svg>`;

      case 'success':
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${size}" height="${size}" class="${className}">
          <ellipse cx="200" cy="355" rx="80" ry="10" fill="#000000" opacity="0.1"/>
          <g transform="translate(0, -30)">
            <path d="M 190 100 Q 180 50 205 30 Q 200 60 210 100 Z" fill="#1E293B"/>
            <ellipse cx="140" cy="330" rx="20" ry="30" fill="#F59E0B" transform="rotate(15 140 330)"/>
            <ellipse cx="260" cy="330" rx="20" ry="30" fill="#F59E0B" transform="rotate(-15 260 330)"/>
            <rect x="100" y="90" width="200" height="250" rx="100" fill="#1E293B"/>
            <path d="M 200 120 C 230 90, 270 110, 270 160 C 270 190, 280 270, 200 330 C 120 270, 130 190, 130 160 C 130 110, 170 90, 200 120 Z" fill="#FFFFFF"/>
            <path d="M 230 230 L 210 310 Q 230 315 250 305 L 260 225 Z" fill="#DC2626"/>
            <line x1="215" y1="308" x2="210" y2="320" stroke="#DC2626" stroke-width="4" stroke-linecap="round"/>
            <line x1="230" y1="311" x2="225" y2="323" stroke="#DC2626" stroke-width="4" stroke-linecap="round"/>
            <line x1="245" y1="307" x2="240" y2="319" stroke="#DC2626" stroke-width="4" stroke-linecap="round"/>
            <path d="M 95 210 Q 200 245 305 210 Q 305 240 200 270 Q 95 240 95 210 Z" fill="#EF4444"/>
            <path d="M 110 190 C 50 160, 60 80, 90 70 C 110 60, 130 140, 120 180 Z" fill="#1E293B"/>
            <path d="M 290 190 C 350 160, 340 80, 310 70 C 290 60, 270 140, 280 180 Z" fill="#1E293B"/>
            <path d="M 150 155 Q 165 140 180 155" fill="none" stroke="#0F172A" stroke-width="6" stroke-linecap="round"/>
            <path d="M 220 155 Q 235 140 250 155" fill="none" stroke="#0F172A" stroke-width="6" stroke-linecap="round"/>
            <ellipse cx="145" cy="170" rx="12" ry="6" fill="#F472B6" opacity="0.6"/>
            <ellipse cx="255" cy="170" rx="12" ry="6" fill="#F472B6" opacity="0.6"/>
            <path d="M 175 175 Q 200 160 225 175 Q 200 210 175 175 Z" fill="#FBBF24"/>
            <path d="M 190 185 Q 200 200 210 185 Q 200 190 190 185 Z" fill="#EF4444"/>
          </g>
        </svg>`;

      case 'eureka':
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${size}" height="${size}" class="${className}">
          ${commonElements}
          <path d="M 110 190 C 50 200, 30 280, 60 300 C 80 320, 110 260, 120 220 Z" fill="#1E293B"/>
          <path d="M 290 190 C 360 160, 310 60, 280 70 C 260 80, 270 140, 280 180 Z" fill="#1E293B"/>
          <circle cx="200" cy="70" r="10" fill="#FBBF24"/>
          <path d="M 195 78 L 205 78 L 203 85 L 197 85 Z" fill="#94A3B8"/>
          <circle cx="165" cy="155" r="14" fill="#0F172A"/>
          <polygon points="165,145 168,152 175,152 169,157 172,164 165,160 158,164 161,157 155,152 162,152" fill="#FBBF24"/>
          <circle cx="235" cy="155" r="14" fill="#0F172A"/>
          <polygon points="235,145 238,152 245,152 239,157 242,164 235,160 228,164 231,157 225,152 232,152" fill="#FBBF24"/>
          <path d="M 180 175 Q 200 165 220 175 Q 200 200 180 175 Z" fill="#FBBF24"/>
        </svg>`;

      case 'deploying':
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${size}" height="${size}" class="${className}">
          ${commonElements}
          <path d="M 110 190 C 50 150, 90 90, 130 90 C 140 90, 130 140, 120 180 Z" fill="#1E293B"/>
          <path d="M 290 190 C 350 150, 310 90, 270 90 C 260 90, 270 140, 280 180 Z" fill="#1E293B"/>
          <path d="M 255 120 Q 262 135 255 142 Q 248 135 255 120 Z" fill="#38BDF8"/>
          <circle cx="165" cy="155" r="14" fill="#0F172A"/>
          <circle cx="168" cy="158" r="4" fill="#FFFFFF"/>
          <circle cx="235" cy="155" r="14" fill="#0F172A"/>
          <circle cx="238" cy="158" r="4" fill="#FFFFFF"/>
          <path d="M 180 180 Q 190 170 200 180 T 220 180" fill="none" stroke="#F59E0B" stroke-width="4" stroke-linecap="round"/>
        </svg>`;

      case 'debugging':
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${size}" height="${size}" class="${className}">
          ${commonElements}
          <path d="M 110 190 C 50 200, 30 280, 60 300 C 80 320, 110 260, 120 220 Z" fill="#1E293B"/>
          <path d="M 290 190 C 350 180, 280 260, 240 260 C 220 260, 260 230, 280 220 Z" fill="#1E293B"/>
          <line x1="235" y1="185" x2="265" y2="240" stroke="#475569" stroke-width="12" stroke-linecap="round"/>
          <circle cx="235" cy="155" r="35" fill="#38BDF8" fill-opacity="0.3" stroke="#94A3B8" stroke-width="8"/>
          <path d="M 150 155 Q 165 145 180 155" fill="none" stroke="#0F172A" stroke-width="6" stroke-linecap="round"/>
          <circle cx="235" cy="155" r="20" fill="#0F172A"/>
          <circle cx="242" cy="148" r="6" fill="#FFFFFF"/>
          <path d="M 185 178 Q 200 170 215 178 Q 200 185 185 178 Z" fill="#FBBF24"/>
        </svg>`;

      case 'shocked':
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${size}" height="${size}" class="${className}">
          <ellipse cx="200" cy="355" rx="80" ry="10" fill="#000000" opacity="0.1"/>
          <g transform="translate(0, -30)">
            <path d="M 190 100 Q 180 50 205 30 Q 200 60 210 100 Z" fill="#1E293B"/>
            <ellipse cx="140" cy="330" rx="20" ry="30" fill="#F59E0B" transform="rotate(15 140 330)"/>
            <ellipse cx="260" cy="330" rx="20" ry="30" fill="#F59E0B" transform="rotate(-15 260 330)"/>
            <rect x="100" y="90" width="200" height="250" rx="100" fill="#1E293B"/>
            <path d="M 200 120 C 230 90, 270 110, 270 160 C 270 190, 280 270, 200 330 C 120 270, 130 190, 130 160 C 130 110, 170 90, 200 120 Z" fill="#FFFFFF"/>
            <path d="M 230 230 L 210 310 Q 230 315 250 305 L 260 225 Z" fill="#DC2626"/>
            <line x1="215" y1="308" x2="210" y2="320" stroke="#DC2626" stroke-width="4" stroke-linecap="round"/>
            <line x1="230" y1="311" x2="225" y2="323" stroke="#DC2626" stroke-width="4" stroke-linecap="round"/>
            <line x1="245" y1="307" x2="240" y2="319" stroke="#DC2626" stroke-width="4" stroke-linecap="round"/>
            <path d="M 95 210 Q 200 245 305 210 Q 305 240 200 270 Q 95 240 95 210 Z" fill="#EF4444"/>
            <path d="M 110 190 C 50 160, 60 80, 90 70 C 110 60, 130 140, 120 180 Z" fill="#1E293B"/>
            <path d="M 290 190 C 350 160, 340 80, 310 70 C 290 60, 270 140, 280 180 Z" fill="#1E293B"/>
            <circle cx="165" cy="150" r="18" fill="#FFFFFF" stroke="#0F172A" stroke-width="3"/>
            <circle cx="165" cy="150" r="5" fill="#0F172A"/>
            <circle cx="235" cy="150" r="18" fill="#FFFFFF" stroke="#0F172A" stroke-width="3"/>
            <circle cx="235" cy="150" r="5" fill="#0F172A"/>
            <ellipse cx="200" cy="190" rx="10" ry="15" fill="#FBBF24"/>
          </g>
        </svg>`;

      case 'confused':
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${size}" height="${size}" class="${className}">
          ${commonElements}
          <path d="M 110 190 C 30 190, 20 240, 50 250 C 70 255, 90 230, 120 220 Z" fill="#1E293B"/>
          <path d="M 290 190 C 370 190, 380 240, 350 250 C 330 255, 310 230, 280 220 Z" fill="#1E293B"/>
          <text x="200" y="110" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="20" fill="#EF4444">404</text>
          <circle cx="165" cy="155" r="18" fill="#0F172A"/>
          <circle cx="170" cy="149" r="5" fill="#FFFFFF"/>
          <circle cx="235" cy="155" r="8" fill="#0F172A"/>
          <circle cx="237" cy="153" r="2" fill="#FFFFFF"/>
          <path d="M 185 175 L 215 185" fill="none" stroke="#F59E0B" stroke-width="6" stroke-linecap="round"/>
        </svg>`;

      case 'winking':
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${size}" height="${size}" class="${className}">
          ${commonElements}
          <path d="M 110 190 C 50 200, 30 280, 60 300 C 80 320, 110 260, 120 220 Z" fill="#1E293B"/>
          <path d="M 290 190 C 350 160, 330 250, 300 240 C 280 230, 270 200, 280 180 Z" fill="#1E293B"/>
          <circle cx="310" cy="225" r="10" fill="#1E293B"/>
          <circle cx="165" cy="155" r="14" fill="#0F172A"/>
          <circle cx="170" cy="149" r="5" fill="#FFFFFF"/>
          <circle cx="160" cy="158" r="2" fill="#FFFFFF"/>
          <line x1="225" y1="155" x2="245" y2="155" stroke="#0F172A" stroke-width="6" stroke-linecap="round"/>
          <path d="M 180 175 Q 200 165 220 175 Q 200 190 180 175 Z" fill="#FBBF24"/>
        </svg>`;

      case 'starstruck':
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${size}" height="${size}" class="${className}">
          ${commonElements}
          <path d="M 110 190 C 140 200, 170 230, 180 210 C 190 190, 160 180, 140 180 Z" fill="#1E293B"/>
          <path d="M 290 190 C 260 200, 230 230, 220 210 C 210 190, 240 180, 260 180 Z" fill="#1E293B"/>
          <polygon points="165,140 169,149 179,149 171,155 174,165 165,159 156,165 159,155 151,149 161,149" fill="#FBBF24"/>
          <polygon points="235,140 239,149 249,149 241,155 244,165 235,159 226,165 229,155 221,149 231,149" fill="#FBBF24"/>
          <path d="M 180 175 Q 200 165 220 175 Q 200 190 180 175 Z" fill="#FBBF24"/>
        </svg>`;

      case 'love':
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${size}" height="${size}" class="${className}">
          ${commonElements}
          <path d="M 200 250 Q 230 200 230 180 A 15 15 0 0 0 200 180 A 15 15 0 0 0 170 180 Q 170 200 200 250 Z" fill="#EF4444"/>
          <path d="M 110 190 C 140 210, 160 230, 170 210 C 180 190, 140 180, 130 180 Z" fill="#1E293B"/>
          <path d="M 290 190 C 260 210, 240 230, 230 210 C 220 190, 260 180, 270 180 Z" fill="#1E293B"/>
          <path d="M 165,160 Q 165,168 165,170 Q 150,155 150,145 A 8,8 0 0,1 165,145 A 8,8 0 0,1 180,145 Q 180,155 165,170 Z" fill="#EF4444"/>
          <path d="M 235,160 Q 235,168 235,170 Q 220,155 220,145 A 8,8 0 0,1 235,145 A 8,8 0 0,1 250,145 Q 250,155 235,170 Z" fill="#EF4444"/>
          <path d="M 180 178 Q 200 168 220 178 Q 200 193 180 178 Z" fill="#FBBF24"/>
        </svg>`;

      case 'mindblown':
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${size}" height="${size}" class="${className}">
          <ellipse cx="200" cy="345" rx="100" ry="12" fill="#000000" opacity="0.15"/>
          <ellipse cx="150" cy="330" rx="35" ry="20" fill="#F59E0B"/>
          <ellipse cx="250" cy="330" rx="35" ry="20" fill="#F59E0B"/>
          <rect x="100" y="90" width="200" height="250" rx="100" fill="#1E293B"/>
          <path d="M 200 120 C 230 90, 270 110, 270 160 C 270 190, 280 270, 200 330 C 120 270, 130 190, 130 160 C 130 110, 170 90, 200 120 Z" fill="#FFFFFF"/>
          <path d="M 230 230 L 210 310 Q 230 315 250 305 L 260 225 Z" fill="#DC2626"/>
          <line x1="215" y1="308" x2="210" y2="320" stroke="#DC2626" stroke-width="4" stroke-linecap="round"/>
          <line x1="230" y1="311" x2="225" y2="323" stroke="#DC2626" stroke-width="4" stroke-linecap="round"/>
          <line x1="245" y1="307" x2="240" y2="319" stroke="#DC2626" stroke-width="4" stroke-linecap="round"/>
          <path d="M 95 210 Q 200 245 305 210 Q 305 240 200 270 Q 95 240 95 210 Z" fill="#EF4444"/>
          <path d="M 200 60 L 210 75 L 230 70 L 220 85 L 240 95 L 220 100 L 225 115 L 205 105 L 190 120 L 180 105 L 160 110 L 175 95 L 160 80 L 180 85 L 190 70 Z" fill="#F59E0B"/>
          <path d="M 110 190 C 50 150, 90 90, 130 90 C 140 90, 130 140, 120 180 Z" fill="#1E293B"/>
          <path d="M 290 190 C 350 150, 310 90, 270 90 C 260 90, 270 140, 280 180 Z" fill="#1E293B"/>
          <circle cx="165" cy="155" r="18" fill="#FFFFFF" stroke="#0F172A" stroke-width="2"/>
          <circle cx="165" cy="155" r="5" fill="#0F172A"/>
          <circle cx="235" cy="155" r="18" fill="#FFFFFF" stroke="#0F172A" stroke-width="2"/>
          <circle cx="235" cy="155" r="5" fill="#0F172A"/>
          <ellipse cx="200" cy="190" rx="12" ry="18" fill="#FBBF24"/>
        </svg>`;

      case 'loading':
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${size}" height="${size}" class="${className}">
          ${commonElements}
          <path d="M 110 190 C 50 200, 30 280, 60 300 C 80 320, 110 260, 120 220 Z" fill="#1E293B"/>
          <path d="M 290 190 C 350 200, 370 280, 340 300 C 320 320, 290 260, 280 220 Z" fill="#1E293B"/>
          <circle cx="180" cy="60" r="5" fill="#38BDF8"/>
          <circle cx="200" cy="60" r="5" fill="#38BDF8" opacity="0.6"/>
          <circle cx="220" cy="60" r="5" fill="#38BDF8" opacity="0.2"/>
          <circle cx="165" cy="155" r="14" fill="none" stroke="#0F172A" stroke-width="4" stroke-dasharray="10 6"/>
          <circle cx="235" cy="155" r="14" fill="none" stroke="#0F172A" stroke-width="4" stroke-dasharray="10 6"/>
          <line x1="185" y1="180" x2="215" y2="180" stroke="#F59E0B" stroke-width="6" stroke-linecap="round"/>
        </svg>`;

      case 'frustrated':
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${size}" height="${size}" class="${className}">
          ${commonElements}
          <path d="M 110 190 C 50 200, 30 280, 60 300 C 80 320, 110 260, 120 220 Z" fill="#1E293B"/>
          <path d="M 290 190 C 360 170, 260 110, 220 140 C 210 150, 250 180, 280 200 Z" fill="#1E293B"/>
          <line x1="145" y1="140" x2="175" y2="150" stroke="#0F172A" stroke-width="5" stroke-linecap="round"/>
          <circle cx="165" cy="155" r="10" fill="#0F172A"/>
          <circle cx="168" cy="153" r="3" fill="#FFFFFF"/>
          <ellipse cx="145" cy="170" rx="12" ry="6" fill="#EF4444" opacity="0.6"/>
          <path d="M 185 180 Q 200 175 215 180" fill="none" stroke="#F59E0B" stroke-width="6" stroke-linecap="round"/>
        </svg>`;

      default:
        return renderMascot();
    }
  };

  return <div dangerouslySetInnerHTML={{ __html: renderMascot() }} />;
};
