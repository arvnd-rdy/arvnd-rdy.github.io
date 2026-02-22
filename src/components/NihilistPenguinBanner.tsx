import { motion } from "framer-motion";

export const NihilistPenguinBanner = () => {
  return (
    <motion.div
      className="w-full bg-white dark:bg-gray-100 relative overflow-hidden border-t-4 border-b-4 border-gray-300 dark:border-gray-400"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <svg viewBox="0 0 1200 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
        {/* WHITE SKY */}
        <rect x="0" y="0" width="1200" height="200" fill="#ffffff" className="dark:fill-gray-100" />
        
        {/* Subtle sun */}
        <circle cx="600" cy="100" r="80" fill="#f4f6f7" opacity="0.8" />
        
        {/* MOUNTAINS */}
        <polygon points="-50,200 150,80 450,200" fill="#cfd8dc" />
        <polygon points="150,80 450,200 150,200" fill="#b0bec5" />
        <polygon points="750,200 1050,60 1300,200" fill="#cfd8dc" />
        <polygon points="1050,60 1300,200 1050,200" fill="#b0bec5" />
        <polygon points="350,200 600,30 850,200" fill="#90a4ae" />
        <polygon points="600,30 850,200 600,200" fill="#78909c" />
        <polygon points="600,30 540,110 600,140 660,110" fill="#ffffff" />
        <polygon points="600,30 600,140 660,110" fill="#eceff1" />
        
        {/* GROUND */}
        <rect x="0" y="200" width="1200" height="100" fill="#f0f3f5" />
        <line x1="0" y1="200" x2="1200" y2="200" stroke="#cfd8dc" strokeWidth="2" />
        <polygon points="585,200 615,200 750,300 450,300" fill="#ffffff" />
        
        {/* PENGUIN */}
        <g className="animate-walk-away">
          <ellipse cx="0" cy="85" rx="35" ry="10" fill="rgba(0,0,0,0.15)" />
          <g className="animate-waddle">
            <ellipse cx="-20" cy="80" rx="14" ry="7" fill="#e67e22" className="animate-step-l" />
            <ellipse cx="20" cy="80" rx="14" ry="7" fill="#e67e22" className="animate-step-r" />
            <path d="M -30 10 Q -50 40 -40 70" stroke="#111" strokeWidth="14" strokeLinecap="round" fill="none" className="animate-flap-l" />
            <path d="M 30 10 Q 50 40 40 70" stroke="#111" strokeWidth="14" strokeLinecap="round" fill="none" className="animate-flap-r" />
            <ellipse cx="0" cy="30" rx="42" ry="60" fill="#111" />
            <circle cx="0" cy="-40" r="30" fill="#111" />
            <rect x="-22" y="-5" width="44" height="50" rx="6" fill="#c0392b" />
            <path d="M -15 -5 Q -15 -25 -5 -25" stroke="#922b21" strokeWidth="5" fill="none" />
            <path d="M 15 -5 Q 15 -25 5 -25" stroke="#922b21" strokeWidth="5" fill="none" />
            <rect x="-26" y="25" width="52" height="18" rx="5" fill="#27ae60" />
            <line x1="-12" y1="20" x2="-12" y2="45" stroke="#111" strokeWidth="2" />
            <line x1="12" y1="20" x2="12" y2="45" stroke="#111" strokeWidth="2" />
          </g>
        </g>
        
        {/* FALLING SNOW */}
        <g className="snow-layer">
          <circle cx="50" cy="0" r="2.5" fill="#fff" className="animate-snow" style={{ animationDuration: '4s', animationDelay: '0s' }} />
          <circle cx="150" cy="0" r="1.5" fill="#fff" className="animate-snow" style={{ animationDuration: '6s', animationDelay: '2s' }} />
          <circle cx="250" cy="0" r="3" fill="#fff" className="animate-snow" style={{ animationDuration: '5s', animationDelay: '1s' }} />
          <circle cx="350" cy="0" r="2" fill="#fff" className="animate-snow" style={{ animationDuration: '7s', animationDelay: '4s' }} />
          <circle cx="450" cy="0" r="3.5" fill="#fff" className="animate-snow" style={{ animationDuration: '4.5s', animationDelay: '0.5s' }} />
          <circle cx="520" cy="0" r="2" fill="#fff" className="animate-snow" style={{ animationDuration: '5.5s', animationDelay: '3s' }} />
          <circle cx="650" cy="0" r="1.5" fill="#fff" className="animate-snow" style={{ animationDuration: '6.5s', animationDelay: '1.5s' }} />
          <circle cx="750" cy="0" r="3" fill="#fff" className="animate-snow" style={{ animationDuration: '4s', animationDelay: '2.5s' }} />
          <circle cx="850" cy="0" r="2.5" fill="#fff" className="animate-snow" style={{ animationDuration: '7s', animationDelay: '0.2s' }} />
          <circle cx="950" cy="0" r="2" fill="#fff" className="animate-snow" style={{ animationDuration: '5s', animationDelay: '3.5s' }} />
          <circle cx="1050" cy="0" r="3.5" fill="#fff" className="animate-snow" style={{ animationDuration: '6s', animationDelay: '1s' }} />
          <circle cx="1150" cy="0" r="2" fill="#fff" className="animate-snow" style={{ animationDuration: '4.5s', animationDelay: '2s' }} />
          <circle cx="100" cy="-50" r="2" fill="#fff" className="animate-snow" style={{ animationDuration: '5s', animationDelay: '3s' }} />
          <circle cx="400" cy="-50" r="3" fill="#fff" className="animate-snow" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          <circle cx="800" cy="-50" r="1.5" fill="#fff" className="animate-snow" style={{ animationDuration: '6s', animationDelay: '2s' }} />
          <circle cx="1100" cy="-50" r="2.5" fill="#fff" className="animate-snow" style={{ animationDuration: '5.5s', animationDelay: '0.5s' }} />
        </g>
      </svg>

      <style>{`
        .animate-walk-away {
          animation: move-into-distance 18s linear infinite;
        }
        
        @keyframes move-into-distance {
          0% { transform: translate(600px, 320px) scale(0.7); opacity: 0; }
          5% { opacity: 1; }
          90% { transform: translate(600px, 205px) scale(0.04); opacity: 1; }
          100% { transform: translate(600px, 200px) scale(0); opacity: 0; }
        }
        
        .animate-waddle {
          animation: rock-side-to-side 0.8s infinite ease-in-out;
          transform-origin: 0px 70px;
        }
        
        @keyframes rock-side-to-side {
          0% { transform: rotate(-6deg); }
          50% { transform: rotate(6deg); }
          100% { transform: rotate(-6deg); }
        }
        
        .animate-step-l {
          animation: step-l 0.8s infinite ease-in-out;
        }
        
        .animate-step-r {
          animation: step-r 0.8s infinite ease-in-out;
        }
        
        @keyframes step-l {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(-15px); }
          50% { transform: translateY(0); }
        }
        
        @keyframes step-r {
          50% { transform: translateY(0); }
          75% { transform: translateY(-15px); }
          100% { transform: translateY(0); }
        }
        
        .animate-flap-l {
          animation: swing-l 0.8s infinite ease-in-out;
          transform-origin: -35px 0px;
        }
        
        .animate-flap-r {
          animation: swing-r 0.8s infinite ease-in-out;
          transform-origin: 35px 0px;
        }
        
        @keyframes swing-l {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(15deg); }
        }
        
        @keyframes swing-r {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-15deg); }
        }
        
        .animate-snow {
          animation-name: snowfall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        
        @keyframes snowfall {
          0% { transform: translateY(-20px) translateX(0px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(320px) translateX(-30px); opacity: 0; }
        }
      `}</style>
    </motion.div>
  );
};
