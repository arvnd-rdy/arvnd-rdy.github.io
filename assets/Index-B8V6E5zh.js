const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutSection-BRqfQ32i.js","assets/ui-vendor-BvNGfaEb.js","assets/react-vendor-DYScToE-.js","assets/animations-Dqe7juVi.js","assets/index-BHk5soZK.js","assets/query-vendor-DFQBCaos.js","assets/index-CPsW6uca.css","assets/downloadResume-Baknf72E.js","assets/useScrollAnimation-JaDFNl9s.js","assets/download-U9wi5G-f.js","assets/arrow-right-hfAoFsdS.js","assets/SkillsSection-l0j0vYFe.js","assets/database-Bm8MKzWi.js","assets/ProjectsSection-xfx2hBYw.js","assets/ProjectCards-BSwrCQeU.js","assets/external-link-BzAP4rim.js","assets/github-0Vs9U9Yi.js","assets/TestimonialsSection-DAudlhv9.js","assets/ScrollProgress-BCWoYQbl.js","assets/Navbar-B9IDD5ax.js","assets/ExperienceSection-PgAXm73I.js","assets/map-pin-D5G7ZlHD.js","assets/ContactSection-DgeTx6Wo.js"])))=>i.map(i=>d[i]);
import{c as b,X as v,_ as m}from"./index-BHk5soZK.js";import{j as e,o as j,p as n}from"./ui-vendor-BvNGfaEb.js";import{r as l}from"./react-vendor-DYScToE-.js";import{M,S as B}from"./ScrollProgress-BCWoYQbl.js";import{f as y,B as F,a as C}from"./animations-Dqe7juVi.js";import{u as E,N as A}from"./Navbar-B9IDD5ax.js";import{d as $}from"./downloadResume-Baknf72E.js";import{G as D}from"./github-0Vs9U9Yi.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=b("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=b("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]),Q=()=>{const[x,t]=l.useState(!1),[r,h]=l.useState(""),[a,p]=l.useState("👋"),g=()=>{const c=new Date,s=c.getHours(),o=c.getDay(),f=c.getMonth(),d=c.getDate();if(f===11&&d===25)return{text:"Merry Christmas! 🎄",emoji:"🎄"};if(f===0&&d===1)return{text:"Happy New Year! 🎊",emoji:"🎊"};if(f===9&&d===31)return{text:"Happy Halloween! 🎃",emoji:"🎃"};if(f===5&&d===15)return{text:"It's my birthday! 🎂",emoji:"🎂"};if(o===1){const i=["Starting the week with a portfolio visit? I like your style.","Monday's rough, maybe some cool projects will help.","If Monday's a climb, consider this a scenic stop."];return{text:i[Math.floor(Math.random()*i.length)],emoji:"💪"}}if(o===5){const i=["Friday feels, thanks for ending the week here.","Before the weekend kicks in, take a look around.","Friday and you're browsing portfolios? That's dedication."];return{text:i[Math.floor(Math.random()*i.length)],emoji:"🎉"}}if(o===0||o===6){const i=["Weekend mode, perfect time to wander through some creative work.","Thanks for stopping by, even on your weekend.","Weekend visits are my favorite, no rush, just vibes."];return{text:i[Math.floor(Math.random()*i.length)],emoji:"😌"}}if(s>=5&&s<8){const i=["You're up early, checking out portfolios before the world wakes up?","Morning already? Glad you stopped by my little corner of the internet.","Early start, huh? Let's see if my work can keep you awake."];return{text:i[Math.floor(Math.random()*i.length)],emoji:"🌅"}}if(s>=8&&s<12){const i=["Good morning, perfect time to browse through some projects.","Morning! Coffee in one hand, portfolio in the other?","Morning, thanks for swinging by before the day gets too busy."];return{text:i[Math.floor(Math.random()*i.length)],emoji:"☀️"}}if(s>=12&&s<14){const i=["Lunch break scroll? I'll try to make it worth it.","Taking a break? Let's make it a creative one.","Lunch time and you're here, I'm flattered."];return{text:i[Math.floor(Math.random()*i.length)],emoji:"🍽️"}}if(s>=14&&s<18){const i=["Hey, glad you stopped by. Let me show you what I've been working on.","Afternoon visits are the best, fresh eyes, fresh ideas.","Hope your day's going well. Let's make it a bit more inspiring."];return{text:i[Math.floor(Math.random()*i.length)],emoji:"🌤️"}}if(s>=18&&s<21){const i=["Evening, perfect time to explore something new.","Glad you're here, let's make your night a bit more interesting.","Evening scroll? I've got some work you might like."];return{text:i[Math.floor(Math.random()*i.length)],emoji:"🌆"}}if(s>=21&&s<24){const i=["Burning the midnight oil? Me too, check this out.","Late night browsing, I respect that.","You're here when most people are asleep. That's dedication."];return{text:i[Math.floor(Math.random()*i.length)],emoji:"🌙"}}const u=["It's past midnight and you're here, love the commitment.","Guess we're both awake when we probably shouldn't be.","This is prime creative hour, welcome."];return{text:u[Math.floor(Math.random()*u.length)],emoji:"🌃"}};l.useEffect(()=>{const c=setTimeout(()=>{const{text:s,emoji:o}=g();h(s),p(o),t(!0)},2500);return()=>clearTimeout(c)},[]),l.useEffect(()=>{if(x){const c=setTimeout(()=>{t(!1)},3e4);return()=>clearTimeout(c)}},[x]);const w=()=>{t(!1)};return e.jsx(j,{children:x&&e.jsx(n.div,{className:"fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 max-w-[calc(100vw-2rem)] sm:max-w-xs",initial:{opacity:0,y:50,scale:.8},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:20,scale:.9,transition:{duration:.2}},transition:{type:"spring",stiffness:300,damping:20,duration:.4},children:e.jsxs("div",{className:"relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 pr-7 sm:pr-8 transition-colors duration-300",children:[e.jsx("button",{onClick:w,className:"absolute top-1.5 right-1.5 sm:top-2 sm:right-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200",children:e.jsx(v,{className:"w-3 h-3 sm:w-4 sm:h-4"})}),e.jsxs("div",{className:"flex items-start gap-2 sm:gap-3",children:[e.jsx("div",{className:"flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs sm:text-sm",children:a}),e.jsx("div",{className:"flex-1 pt-0.5 sm:pt-1",children:e.jsx("p",{className:"text-gray-900 dark:text-white text-xs sm:text-sm font-medium leading-relaxed",children:r})})]}),e.jsxs("div",{className:"absolute bottom-0 right-6 transform translate-y-full",children:[e.jsx("div",{className:"w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white dark:border-t-gray-800"}),e.jsx("div",{className:"absolute -top-px left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-7 border-r-7 border-t-7 border-l-transparent border-r-transparent border-t-gray-200"})]})]})})})},N=({variant:x,size:t=80,className:r=""})=>{const h=()=>{const a=`
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
    `;switch(x){case"welcome":return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${t}" height="${t}" class="${r}">
          <style>
            @keyframes mascot-bob {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-6px); }
            }

            .mascot-bob {
              animation: mascot-bob 2.4s ease-in-out infinite;
              transform-origin: 200px 200px;
            }

            @keyframes eye-blink {
              0%, 5%, 100% { transform: scaleY(1); }
              2%, 3% { transform: scaleY(0.1); }
            }

            .eye {
              animation: eye-blink 4s infinite;
              transform-origin: center;
            }

            @keyframes wing-wave {
              0%, 100% { transform: rotate(0deg); }
              50% { transform: rotate(-18deg); }
            }

            .wave-wing {
              animation: wing-wave 2s ease-in-out infinite;
              transform-origin: 280px 190px;
            }
          </style>
          <g class="mascot-bob">
            ${a}
            <path d="M 110 190 C 50 200, 30 280, 60 300 C 80 320, 110 260, 120 220 Z" fill="#1E293B"/>
            <g class="wave-wing">
              <path d="M 290 190 C 360 160, 380 90, 340 80 C 310 70, 270 130, 280 180 Z" fill="#1E293B"/>
            </g>
            <circle cx="165" cy="155" r="14" fill="#0F172A" class="eye"/>
            <circle cx="170" cy="149" r="5" fill="#FFFFFF"/>
            <circle cx="160" cy="158" r="2" fill="#FFFFFF"/>
            <circle cx="235" cy="155" r="14" fill="#0F172A" class="eye"/>
            <circle cx="240" cy="149" r="5" fill="#FFFFFF"/>
            <circle cx="230" cy="158" r="2" fill="#FFFFFF"/>
            <ellipse cx="145" cy="170" rx="12" ry="6" fill="#F472B6" opacity="0.6"/>
            <ellipse cx="255" cy="170" rx="12" ry="6" fill="#F472B6" opacity="0.6"/>
            <path d="M 180 175 Q 200 165 220 175 Q 200 190 180 175 Z" fill="#FBBF24"/>
            <path d="M 183 178 Q 200 205 217 178 Q 200 185 183 178 Z" fill="#F59E0B"/>
            <path d="M 192 186 Q 200 198 208 186 Q 200 190 192 186 Z" fill="#EF4444"/>
          </g>
        </svg>`;case"typing":return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${t}" height="${t}" class="${r}">
          <style>
            .typing-bob {
              animation: typing-bob 2.2s ease-in-out infinite;
              transform-origin: 200px 220px;
            }
            @keyframes typing-bob {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-5px); }
            }
            .typing-eye {
              animation: typing-blink 4s infinite;
              transform-origin: center;
            }
            @keyframes typing-blink {
              0%, 5%, 100% { transform: scaleY(1); }
              2%, 3% { transform: scaleY(0.1); }
            }
            .typing-hands {
              animation: typing-hands 0.6s ease-in-out infinite;
              transform-origin: 200px 250px;
            }
            @keyframes typing-hands {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(3px); }
            }
          </style>
          <g class="typing-bob">
            ${a}
            <g class="typing-hands">
              <path d="M 120 300 L 280 300 L 250 230 L 150 230 Z" fill="#64748B"/>
              <rect x="100" y="295" width="200" height="15" rx="5" fill="#475569"/>
              <polygon points="155,235 245,235 270,295 130,295" fill="#38BDF8" opacity="0.3"/>
            </g>
            <path d="M 110 190 C 50 180, 100 260, 160 280 C 180 280, 140 230, 120 220 Z" fill="#1E293B"/>
            <path d="M 290 190 C 350 180, 300 260, 240 280 C 220 280, 260 230, 280 220 Z" fill="#1E293B"/>
            <rect x="140" y="135" width="45" height="35" rx="5" fill="none" stroke="#0F172A" stroke-width="5"/>
            <rect x="215" y="135" width="45" height="35" rx="5" fill="none" stroke="#0F172A" stroke-width="5"/>
            <line x1="185" y1="150" x2="215" y2="150" stroke="#0F172A" stroke-width="5" stroke-linecap="round"/>
            <circle cx="165" cy="155" r="8" fill="#0F172A" class="typing-eye"/>
            <circle cx="235" cy="155" r="8" fill="#0F172A" class="typing-eye"/>
            <path d="M 185 180 Q 200 185 215 180" fill="none" stroke="#F59E0B" stroke-width="6" stroke-linecap="round"/>
          </g>
        </svg>`;case"thinking":return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${t}" height="${t}" class="${r}">
          <style>
            .mascot-bob-thinking {
              animation: mascot-bob-thinking 2.6s ease-in-out infinite;
              transform-origin: 200px 200px;
            }
            @keyframes mascot-bob-thinking {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-5px); }
            }
            .eye-thinking {
              animation: eye-blink-thinking 4.2s infinite;
              transform-origin: center;
            }
            @keyframes eye-blink-thinking {
              0%, 5%, 100% { transform: scaleY(1); }
              2%, 3% { transform: scaleY(0.1); }
            }
            .thought-bubble-float {
              animation: thought-float 3s ease-in-out infinite;
              transform-origin: 320px 50px;
            }
            @keyframes thought-float {
              0%, 100% { transform: translateY(0); opacity: 1; }
              50% { transform: translateY(-8px); opacity: 0.9; }
            }
          </style>
          <g class="thought-bubble-float">
            <circle cx="260" cy="110" r="6" fill="#FFFFFF"/>
            <circle cx="285" cy="85" r="12" fill="#FFFFFF"/>
            <circle cx="320" cy="50" r="22" fill="#FFFFFF"/>
            <text x="310" y="62" font-family="sans-serif" font-weight="bold" font-size="30" fill="#0F172A">?</text>
          </g>
          <g class="mascot-bob-thinking">
            ${a}
            <path d="M 110 190 C 50 200, 30 280, 60 300 C 80 320, 110 260, 120 220 Z" fill="#1E293B"/>
            <path d="M 290 190 C 350 160, 270 150, 240 180 C 240 190, 270 210, 280 210 Z" fill="#1E293B"/>
            <circle cx="165" cy="155" r="14" fill="#0F172A" class="eye-thinking"/>
            <circle cx="172" cy="148" r="4" fill="#FFFFFF"/>
            <circle cx="235" cy="155" r="14" fill="#0F172A" class="eye-thinking"/>
            <circle cx="242" cy="148" r="4" fill="#FFFFFF"/>
            <path d="M 185 185 L 210 175" fill="none" stroke="#F59E0B" stroke-width="6" stroke-linecap="round"/>
          </g>
        </svg>`;case"coffee":return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${t}" height="${t}" class="${r}">
          <style>
            .coffee-bob {
              animation: coffee-bob 2.2s ease-in-out infinite;
              transform-origin: 200px 220px;
            }
            @keyframes coffee-bob {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
            .coffee-eye {
              animation: coffee-blink 4.5s infinite;
              transform-origin: center;
            }
            @keyframes coffee-blink {
              0%, 5%, 100% { transform: scaleY(1); }
              2%, 3% { transform: scaleY(0.1); }
            }
            .coffee-steam {
              animation: coffee-steam 2.4s ease-in-out infinite;
              transform-origin: 255px 170px;
            }
            @keyframes coffee-steam {
              0%, 100% { transform: translateY(0); opacity: 0.7; }
              50% { transform: translateY(-14px); opacity: 1; }
            }
          </style>
          <g class="coffee-bob">
            ${a}
            <path d="M 110 190 C 50 200, 30 280, 60 300 C 80 320, 110 260, 120 220 Z" fill="#1E293B"/>
            <path d="M 290 190 C 350 180, 330 250, 280 250 C 270 250, 280 220, 280 210 Z" fill="#1E293B"/>
            <rect x="235" y="200" width="40" height="45" rx="5" fill="#F8FAFC"/>
            <path d="M 275 215 C 290 215 290 235 275 235" fill="none" stroke="#F8FAFC" stroke-width="6"/>
            <g class="coffee-steam">
              <path d="M 245 190 Q 250 180 245 170" fill="none" stroke="#94A3B8" stroke-width="4" stroke-linecap="round"/>
              <path d="M 260 190 Q 265 175 260 160" fill="none" stroke="#94A3B8" stroke-width="4" stroke-linecap="round"/>
            </g>
            <circle cx="165" cy="155" r="22" fill="#FFFFFF" stroke="#0F172A" stroke-width="3"/>
            <circle cx="165" cy="155" r="3" fill="#0F172A" class="coffee-eye"/>
            <circle cx="235" cy="155" r="22" fill="#FFFFFF" stroke="#0F172A" stroke-width="3"/>
            <circle cx="235" cy="155" r="3" fill="#0F172A" class="coffee-eye"/>
            <ellipse cx="140" cy="175" rx="15" ry="8" fill="#F43F5E" opacity="0.6"/>
            <ellipse cx="260" cy="175" rx="15" ry="8" fill="#F43F5E" opacity="0.6"/>
            <path d="M 180 180 L 190 175 L 200 185 L 210 175 L 220 180" fill="none" stroke="#F59E0B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
        </svg>`;case"cool":return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${t}" height="${t}" class="${r}">
          <style>
            .cool-bob {
              animation: cool-bob 2.5s ease-in-out infinite;
              transform-origin: 200px 220px;
            }
            @keyframes cool-bob {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-4px); }
            }
            .cool-glasses {
              animation: cool-glasses-tilt 3s ease-in-out infinite;
              transform-origin: 200px 150px;
            }
            @keyframes cool-glasses-tilt {
              0%, 100% { transform: rotate(0deg); }
              50% { transform: rotate(-5deg); }
            }
          </style>
          <g class="cool-bob">
            ${a}
            <path d="M 110 190 C 80 200, 150 260, 220 230 C 210 210, 150 230, 120 210 Z" fill="#1E293B"/>
            <path d="M 290 190 C 320 200, 250 260, 180 230 C 190 210, 250 230, 280 210 Z" fill="#0F172A"/>
            <g class="cool-glasses">
              <path d="M 135 145 L 195 145 L 185 165 L 145 165 Z" fill="#0F172A"/>
              <path d="M 205 145 L 265 145 L 255 165 L 215 165 Z" fill="#0F172A"/>
              <line x1="195" y1="145" x2="205" y2="145" stroke="#0F172A" stroke-width="4"/>
              <line x1="150" y1="155" x2="160" y2="145" stroke="#FFFFFF" stroke-width="3" opacity="0.4"/>
              <line x1="220" y1="155" x2="230" y2="145" stroke="#FFFFFF" stroke-width="3" opacity="0.4"/>
            </g>
            <path d="M 185 180 Q 200 185 220 175" fill="none" stroke="#F59E0B" stroke-width="6" stroke-linecap="round"/>
          </g>
        </svg>`;case"success":return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${t}" height="${t}" class="${r}">
          <style>
            .success-bob {
              animation: success-bob 1.6s ease-out infinite;
              transform-origin: 200px 260px;
            }
            @keyframes success-bob {
              0% { transform: translateY(0) scaleY(1); }
              20% { transform: translateY(0) scaleY(0.9); }
              40% { transform: translateY(-35px) scaleY(1.02); }
              70% { transform: translateY(0) scaleY(1); }
              100% { transform: translateY(0) scaleY(1); }
            }
            .success-confetti {
              animation: success-confetti 1.6s ease-in-out infinite;
              transform-origin: 200px 230px;
            }
            @keyframes success-confetti {
              0%, 100% { transform: scaleY(1); }
              40% { transform: scaleY(1.12); }
            }
            .success-shadow {
              animation: success-shadow 1.6s ease-out infinite;
              transform-origin: 200px 355px;
            }
            @keyframes success-shadow {
              0% { transform: scaleX(1); opacity: 0.18; }
              40% { transform: scaleX(0.7); opacity: 0.1; }
              70% { transform: scaleX(1); opacity: 0.18; }
              100% { transform: scaleX(1); opacity: 0.18; }
            }
          </style>
          <ellipse class="success-shadow" cx="200" cy="355" rx="80" ry="10" fill="#000000" opacity="0.18"/>
          <g transform="translate(0, -30)" class="success-bob">
            <path d="M 190 100 Q 180 50 205 30 Q 200 60 210 100 Z" fill="#1E293B"/>
            <ellipse cx="140" cy="330" rx="20" ry="30" fill="#F59E0B" transform="rotate(15 140 330)"/>
            <ellipse cx="260" cy="330" rx="20" ry="30" fill="#F59E0B" transform="rotate(-15 260 330)"/>
            <rect x="100" y="90" width="200" height="250" rx="100" fill="#1E293B"/>
            <path d="M 200 120 C 230 90, 270 110, 270 160 C 270 190, 280 270, 200 330 C 120 270, 130 190, 130 160 C 130 110, 170 90, 200 120 Z" fill="#FFFFFF"/>
            <g class="success-confetti">
              <path d="M 230 230 L 210 310 Q 230 315 250 305 L 260 225 Z" fill="#DC2626"/>
              <line x1="215" y1="308" x2="210" y2="320" stroke="#DC2626" stroke-width="4" stroke-linecap="round"/>
              <line x1="230" y1="311" x2="225" y2="323" stroke="#DC2626" stroke-width="4" stroke-linecap="round"/>
              <line x1="245" y1="307" x2="240" y2="319" stroke="#DC2626" stroke-width="4" stroke-linecap="round"/>
              <path d="M 95 210 Q 200 245 305 210 Q 305 240 200 270 Q 95 240 95 210 Z" fill="#EF4444"/>
            </g>
            <path d="M 110 190 C 50 160, 60 80, 90 70 C 110 60, 130 140, 120 180 Z" fill="#1E293B"/>
            <path d="M 290 190 C 350 160, 340 80, 310 70 C 290 60, 270 140, 280 180 Z" fill="#1E293B"/>
            <path d="M 150 155 Q 165 140 180 155" fill="none" stroke="#0F172A" stroke-width="6" stroke-linecap="round"/>
            <path d="M 220 155 Q 235 140 250 155" fill="none" stroke="#0F172A" stroke-width="6" stroke-linecap="round"/>
            <ellipse cx="145" cy="170" rx="12" ry="6" fill="#F472B6" opacity="0.6"/>
            <ellipse cx="255" cy="170" rx="12" ry="6" fill="#F472B6" opacity="0.6"/>
            <path d="M 175 175 Q 200 160 225 175 Q 200 210 175 175 Z" fill="#FBBF24"/>
            <path d="M 190 185 Q 200 200 210 185 Q 200 190 190 185 Z" fill="#EF4444"/>
          </g>
        </svg>`;case"eureka":return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${t}" height="${t}" class="${r}">
          ${a}
          <path d="M 110 190 C 50 200, 30 280, 60 300 C 80 320, 110 260, 120 220 Z" fill="#1E293B"/>
          <path d="M 290 190 C 360 160, 310 60, 280 70 C 260 80, 270 140, 280 180 Z" fill="#1E293B"/>
          <circle cx="200" cy="70" r="10" fill="#FBBF24"/>
          <path d="M 195 78 L 205 78 L 203 85 L 197 85 Z" fill="#94A3B8"/>
          <circle cx="165" cy="155" r="14" fill="#0F172A"/>
          <polygon points="165,145 168,152 175,152 169,157 172,164 165,160 158,164 161,157 155,152 162,152" fill="#FBBF24"/>
          <circle cx="235" cy="155" r="14" fill="#0F172A"/>
          <polygon points="235,145 238,152 245,152 239,157 242,164 235,160 228,164 231,157 225,152 232,152" fill="#FBBF24"/>
          <path d="M 180 175 Q 200 165 220 175 Q 200 200 180 175 Z" fill="#FBBF24"/>
        </svg>`;case"deploying":return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${t}" height="${t}" class="${r}">
          ${a}
          <path d="M 110 190 C 50 150, 90 90, 130 90 C 140 90, 130 140, 120 180 Z" fill="#1E293B"/>
          <path d="M 290 190 C 350 150, 310 90, 270 90 C 260 90, 270 140, 280 180 Z" fill="#1E293B"/>
          <path d="M 255 120 Q 262 135 255 142 Q 248 135 255 120 Z" fill="#38BDF8"/>
          <circle cx="165" cy="155" r="14" fill="#0F172A"/>
          <circle cx="168" cy="158" r="4" fill="#FFFFFF"/>
          <circle cx="235" cy="155" r="14" fill="#0F172A"/>
          <circle cx="238" cy="158" r="4" fill="#FFFFFF"/>
          <path d="M 180 180 Q 190 170 200 180 T 220 180" fill="none" stroke="#F59E0B" stroke-width="4" stroke-linecap="round"/>
        </svg>`;case"debugging":return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${t}" height="${t}" class="${r}">
          ${a}
          <path d="M 110 190 C 50 200, 30 280, 60 300 C 80 320, 110 260, 120 220 Z" fill="#1E293B"/>
          <path d="M 290 190 C 350 180, 280 260, 240 260 C 220 260, 260 230, 280 220 Z" fill="#1E293B"/>
          <line x1="235" y1="185" x2="265" y2="240" stroke="#475569" stroke-width="12" stroke-linecap="round"/>
          <circle cx="235" cy="155" r="35" fill="#38BDF8" fill-opacity="0.3" stroke="#94A3B8" stroke-width="8"/>
          <path d="M 150 155 Q 165 145 180 155" fill="none" stroke="#0F172A" stroke-width="6" stroke-linecap="round"/>
          <circle cx="235" cy="155" r="20" fill="#0F172A"/>
          <circle cx="242" cy="148" r="6" fill="#FFFFFF"/>
          <path d="M 185 178 Q 200 170 215 178 Q 200 185 185 178 Z" fill="#FBBF24"/>
        </svg>`;case"shocked":return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${t}" height="${t}" class="${r}">
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
        </svg>`;case"confused":return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${t}" height="${t}" class="${r}">
          ${a}
          <path d="M 110 190 C 30 190, 20 240, 50 250 C 70 255, 90 230, 120 220 Z" fill="#1E293B"/>
          <path d="M 290 190 C 370 190, 380 240, 350 250 C 330 255, 310 230, 280 220 Z" fill="#1E293B"/>
          <text x="200" y="110" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="20" fill="#EF4444">404</text>
          <circle cx="165" cy="155" r="18" fill="#0F172A"/>
          <circle cx="170" cy="149" r="5" fill="#FFFFFF"/>
          <circle cx="235" cy="155" r="8" fill="#0F172A"/>
          <circle cx="237" cy="153" r="2" fill="#FFFFFF"/>
          <path d="M 185 175 L 215 185" fill="none" stroke="#F59E0B" stroke-width="6" stroke-linecap="round"/>
        </svg>`;case"winking":return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${t}" height="${t}" class="${r}">
          ${a}
          <path d="M 110 190 C 50 200, 30 280, 60 300 C 80 320, 110 260, 120 220 Z" fill="#1E293B"/>
          <path d="M 290 190 C 350 160, 330 250, 300 240 C 280 230, 270 200, 280 180 Z" fill="#1E293B"/>
          <circle cx="310" cy="225" r="10" fill="#1E293B"/>
          <circle cx="165" cy="155" r="14" fill="#0F172A"/>
          <circle cx="170" cy="149" r="5" fill="#FFFFFF"/>
          <circle cx="160" cy="158" r="2" fill="#FFFFFF"/>
          <line x1="225" y1="155" x2="245" y2="155" stroke="#0F172A" stroke-width="6" stroke-linecap="round"/>
          <path d="M 180 175 Q 200 165 220 175 Q 200 190 180 175 Z" fill="#FBBF24"/>
        </svg>`;case"starstruck":return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${t}" height="${t}" class="${r}">
          <style>
            .star-bob {
              animation: star-bob 2.4s ease-in-out infinite;
              transform-origin: 200px 220px;
            }
            @keyframes star-bob {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-5px); }
            }
            .star-twinkle {
              animation: star-twinkle 1.8s ease-in-out infinite;
              transform-origin: center;
            }
            @keyframes star-twinkle {
              0%, 100% { transform: scale(1) rotate(0deg); }
              50% { transform: scale(1.1) rotate(4deg); }
            }
          </style>
          <g class="star-bob">
            ${a}
            <path d="M 110 190 C 140 200, 170 230, 180 210 C 190 190, 160 180, 140 180 Z" fill="#1E293B"/>
            <path d="M 290 190 C 260 200, 230 230, 220 210 C 210 190, 240 180, 260 180 Z" fill="#1E293B"/>
            <polygon class="star-twinkle" points="165,140 169,149 179,149 171,155 174,165 165,159 156,165 159,155 151,149 161,149" fill="#FBBF24"/>
            <polygon class="star-twinkle" points="235,140 239,149 249,149 241,155 244,165 235,159 226,165 229,155 221,149 231,149" fill="#FBBF24"/>
            <path d="M 180 175 Q 200 165 220 175 Q 200 190 180 175 Z" fill="#FBBF24"/>
          </g>
        </svg>`;case"love":return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${t}" height="${t}" class="${r}">
          ${a}
          <path d="M 200 250 Q 230 200 230 180 A 15 15 0 0 0 200 180 A 15 15 0 0 0 170 180 Q 170 200 200 250 Z" fill="#EF4444"/>
          <path d="M 110 190 C 140 210, 160 230, 170 210 C 180 190, 140 180, 130 180 Z" fill="#1E293B"/>
          <path d="M 290 190 C 260 210, 240 230, 230 210 C 220 190, 260 180, 270 180 Z" fill="#1E293B"/>
          <path d="M 165,160 Q 165,168 165,170 Q 150,155 150,145 A 8,8 0 0,1 165,145 A 8,8 0 0,1 180,145 Q 180,155 165,170 Z" fill="#EF4444"/>
          <path d="M 235,160 Q 235,168 235,170 Q 220,155 220,145 A 8,8 0 0,1 235,145 A 8,8 0 0,1 250,145 Q 250,155 235,170 Z" fill="#EF4444"/>
          <path d="M 180 178 Q 200 168 220 178 Q 200 193 180 178 Z" fill="#FBBF24"/>
        </svg>`;case"mindblown":return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${t}" height="${t}" class="${r}">
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
        </svg>`;case"loading":return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${t}" height="${t}" class="${r}">
          ${a}
          <path d="M 110 190 C 50 200, 30 280, 60 300 C 80 320, 110 260, 120 220 Z" fill="#1E293B"/>
          <path d="M 290 190 C 350 200, 370 280, 340 300 C 320 320, 290 260, 280 220 Z" fill="#1E293B"/>
          <circle cx="180" cy="60" r="5" fill="#38BDF8"/>
          <circle cx="200" cy="60" r="5" fill="#38BDF8" opacity="0.6"/>
          <circle cx="220" cy="60" r="5" fill="#38BDF8" opacity="0.2"/>
          <circle cx="165" cy="155" r="14" fill="none" stroke="#0F172A" stroke-width="4" stroke-dasharray="10 6"/>
          <circle cx="235" cy="155" r="14" fill="none" stroke="#0F172A" stroke-width="4" stroke-dasharray="10 6"/>
          <line x1="185" y1="180" x2="215" y2="180" stroke="#F59E0B" stroke-width="6" stroke-linecap="round"/>
        </svg>`;case"frustrated":return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${t}" height="${t}" class="${r}">
          ${a}
          <path d="M 110 190 C 50 200, 30 280, 60 300 C 80 320, 110 260, 120 220 Z" fill="#1E293B"/>
          <path d="M 290 190 C 360 170, 260 110, 220 140 C 210 150, 250 180, 280 200 Z" fill="#1E293B"/>
          <line x1="145" y1="140" x2="175" y2="150" stroke="#0F172A" stroke-width="5" stroke-linecap="round"/>
          <circle cx="165" cy="155" r="10" fill="#0F172A"/>
          <circle cx="168" cy="153" r="3" fill="#FFFFFF"/>
          <ellipse cx="145" cy="170" rx="12" ry="6" fill="#EF4444" opacity="0.6"/>
          <path d="M 185 180 Q 200 175 215 180" fill="none" stroke="#F59E0B" stroke-width="6" stroke-linecap="round"/>
        </svg>`;default:return h()}};return e.jsx("div",{dangerouslySetInnerHTML:{__html:h()}})},k=[{icon:D,href:"https://github.com/arvnd-rdy",bgColor:"bg-orange-600 hover:bg-orange-700",iconColor:"text-white"},{icon:L,href:"https://www.linkedin.com/in/arvnd-rdy/",bgColor:"bg-neutral-950 hover:bg-orange-600 dark:bg-white dark:hover:bg-orange-600",iconColor:"text-white dark:text-neutral-950 dark:hover:text-white"},{icon:M,href:"mailto:arvindhreddyanugu2002@gmail.com",bgColor:"bg-orange-600 hover:bg-orange-700",iconColor:"text-white"}],Y=()=>{const{scrollToSection:x}=E(),t=l.useRef(null),[r,h]=l.useState({x:0,y:0}),[a,p]=l.useState(!1),g=s=>{if(!t.current)return;const o=t.current.getBoundingClientRect(),f=(s.clientX-o.left)/o.width-.5,d=(s.clientY-o.top)/o.height-.5;h({x:f,y:d})},w=()=>p(!0),c=()=>{p(!1),h({x:0,y:0})};return l.useEffect(()=>{document.documentElement.style.scrollBehavior="smooth"},[]),e.jsxs(n.section,{className:"min-h-screen bg-white dark:bg-black flex flex-col transition-colors duration-300",children:[e.jsx("div",{className:"absolute inset-0 hero-grid brand-grid-fade pointer-events-none"}),e.jsx("div",{className:"hidden lg:flex flex-col items-center space-y-4 absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 z-20",children:k.map(({icon:s,href:o,bgColor:f,iconColor:d})=>e.jsx("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:`${f} ${d} transition-all duration-200 p-3 border border-gray-300 dark:border-white/25 shadow-md hover:shadow-lg hover:scale-105`,children:e.jsx(s,{className:"w-5 h-5 xl:w-6 xl:h-6"})},o))}),e.jsx("div",{className:"lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-6 z-20 bg-white/95 dark:bg-black/95 backdrop-blur-xl border border-gray-300 dark:border-white/20 px-6 py-3 shadow-md",children:k.map(({icon:s,href:o,bgColor:f,iconColor:d})=>e.jsx("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:`${f} ${d} transition-all duration-200 p-2 border border-gray-300 dark:border-white/25 shadow-md hover:shadow-lg hover:scale-105`,children:e.jsx(s,{className:"w-5 h-5"})},o))}),e.jsx("div",{className:"flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12",children:e.jsxs("div",{className:"max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center",children:[e.jsxs(n.div,{className:"space-y-3 sm:space-y-5 lg:space-y-6 text-center lg:text-left order-2 lg:order-1",children:[e.jsxs("div",{className:"space-y-2 sm:space-y-3",children:[e.jsxs(n.h1,{className:"text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-neutral-950 dark:text-white leading-none tracking-tight",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1,ease:"easeOut"},children:["ARAVIND",e.jsx("br",{}),"REDDY"]}),e.jsx(n.p,{className:"text-base sm:text-lg md:text-xl font-semibold text-orange-600 dark:text-orange-500 tracking-tight",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.25},children:"AI/ML Engineer"})]}),e.jsxs(n.div,{className:"space-y-3 max-w-lg mx-auto lg:mx-0",variants:y,initial:"hidden",animate:"visible",transition:{delay:.35},children:[e.jsx(n.p,{className:"text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm sm:text-[15px] md:text-base",variants:y,children:"I build RAG systems, multi-agent AI workflows, and ML applications — from hybrid retrieval pipelines to production-ready prototypes."}),e.jsx(n.p,{className:"text-neutral-900 dark:text-neutral-200 font-medium text-xs sm:text-sm",variants:y,children:"Open to full-time roles"})]}),e.jsxs(n.div,{className:"flex flex-col xs:flex-row gap-2.5 sm:gap-3 justify-center lg:justify-start",variants:y,initial:"hidden",animate:"visible",transition:{delay:.5},children:[e.jsx(F,{onClick:()=>x("projects"),className:"bg-orange-600 hover:bg-orange-700 text-white px-5 sm:px-7 py-2.5 sm:py-3 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg border border-orange-700 text-xs sm:text-sm font-bold rounded-none",children:"View Projects"}),e.jsx(F,{onClick:$,variant:"outline",className:"border-2 border-neutral-950 dark:border-white text-neutral-950 dark:text-white hover:bg-neutral-950 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950 px-5 sm:px-7 py-2.5 sm:py-3 transition-all duration-300 hover:scale-105 text-xs sm:text-sm font-bold rounded-none bg-transparent",children:"Download Resume"})]})]}),e.jsx(n.div,{className:"flex justify-center lg:justify-end order-1 lg:order-2",variants:C,initial:"hidden",animate:"visible",transition:{delay:.3},children:e.jsxs("div",{ref:t,className:"relative group",onMouseMove:g,onMouseEnter:w,onMouseLeave:c,style:{perspective:1200},children:[e.jsxs("div",{className:"hero-glow-track","aria-hidden":"true",children:[e.jsx("div",{className:"hero-glow-orb hero-glow-orb-a"}),e.jsx("div",{className:"hero-glow-orb hero-glow-orb-b"})]}),e.jsxs(n.div,{className:"relative z-10 overflow-hidden rounded-xl shadow-[0_20px_45px_-14px_rgba(234,88,12,0.22)] dark:shadow-[0_22px_55px_-12px_rgba(249,115,22,0.32)]",animate:{rotateX:a?r.y*-6:0,rotateY:a?r.x*6:0,scale:a?1.02:1},transition:{type:"spring",stiffness:260,damping:22},style:{transformStyle:"preserve-3d"},children:[e.jsx("img",{src:"/hero2.png",alt:"Arvind Reddy",className:"w-[240px] h-[300px] xs:w-[280px] xs:h-[340px] sm:w-[320px] sm:h-[380px] md:w-[350px] md:h-[420px] lg:w-[384px] lg:h-[460px] object-cover object-[center_15%] block"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/5 pointer-events-none"})]})]})})]})}),e.jsx(n.div,{className:"absolute bottom-6 right-4 xs:bottom-8 xs:right-6 sm:bottom-10 sm:right-8 lg:bottom-12 lg:right-12 z-10",initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.8},children:e.jsx(N,{variant:"welcome",size:80})}),e.jsx(n.div,{className:"absolute bottom-2 left-2 xs:bottom-4 xs:left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 z-10",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4,delay:.7},children:e.jsx(n.div,{animate:{y:[0,10,0]},transition:{duration:2,repeat:1/0,ease:"easeInOut"},children:e.jsx(Z,{className:"w-3 h-3 xs:w-4 xs:h-4 text-gray-400"})})})]})},_=()=>e.jsxs(n.div,{className:"w-full bg-white dark:bg-black relative overflow-hidden",initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.8},children:[e.jsxs("svg",{viewBox:"0 0 1200 300",xmlns:"http://www.w3.org/2000/svg",className:"w-full h-auto block",children:[e.jsx("rect",{x:"0",y:"0",width:"1200",height:"200",fill:"#ffffff",className:"dark:fill-gray-100"}),e.jsx("circle",{cx:"600",cy:"100",r:"80",fill:"#f4f6f7",opacity:"0.8"}),e.jsx("polygon",{points:"-50,200 150,80 450,200",fill:"#cfd8dc"}),e.jsx("polygon",{points:"150,80 450,200 150,200",fill:"#b0bec5"}),e.jsx("polygon",{points:"750,200 1050,60 1300,200",fill:"#cfd8dc"}),e.jsx("polygon",{points:"1050,60 1300,200 1050,200",fill:"#b0bec5"}),e.jsx("polygon",{points:"350,200 600,30 850,200",fill:"#90a4ae"}),e.jsx("polygon",{points:"600,30 850,200 600,200",fill:"#78909c"}),e.jsx("polygon",{points:"600,30 540,110 600,140 660,110",fill:"#ffffff"}),e.jsx("polygon",{points:"600,30 600,140 660,110",fill:"#eceff1"}),e.jsx("rect",{x:"0",y:"200",width:"1200",height:"100",fill:"#f0f3f5"}),e.jsx("line",{x1:"0",y1:"200",x2:"1200",y2:"200",stroke:"#cfd8dc",strokeWidth:"2"}),e.jsx("polygon",{points:"585,200 615,200 750,300 450,300",fill:"#ffffff"}),e.jsxs("g",{className:"animate-walk-away",children:[e.jsx("ellipse",{cx:"0",cy:"85",rx:"35",ry:"10",fill:"rgba(0,0,0,0.15)"}),e.jsxs("g",{className:"animate-waddle",children:[e.jsx("ellipse",{cx:"-20",cy:"80",rx:"14",ry:"7",fill:"#e67e22",className:"animate-step-l"}),e.jsx("ellipse",{cx:"20",cy:"80",rx:"14",ry:"7",fill:"#e67e22",className:"animate-step-r"}),e.jsx("path",{d:"M -30 10 Q -50 40 -40 70",stroke:"#111",strokeWidth:"14",strokeLinecap:"round",fill:"none",className:"animate-flap-l"}),e.jsx("path",{d:"M 30 10 Q 50 40 40 70",stroke:"#111",strokeWidth:"14",strokeLinecap:"round",fill:"none",className:"animate-flap-r"}),e.jsx("ellipse",{cx:"0",cy:"30",rx:"42",ry:"60",fill:"#111"}),e.jsx("circle",{cx:"0",cy:"-40",r:"30",fill:"#111"}),e.jsx("rect",{x:"-22",y:"-5",width:"44",height:"50",rx:"6",fill:"#c0392b"}),e.jsx("path",{d:"M -15 -5 Q -15 -25 -5 -25",stroke:"#922b21",strokeWidth:"5",fill:"none"}),e.jsx("path",{d:"M 15 -5 Q 15 -25 5 -25",stroke:"#922b21",strokeWidth:"5",fill:"none"}),e.jsx("rect",{x:"-26",y:"25",width:"52",height:"18",rx:"5",fill:"#27ae60"}),e.jsx("line",{x1:"-12",y1:"20",x2:"-12",y2:"45",stroke:"#111",strokeWidth:"2"}),e.jsx("line",{x1:"12",y1:"20",x2:"12",y2:"45",stroke:"#111",strokeWidth:"2"})]})]}),e.jsxs("g",{className:"snow-layer",children:[e.jsx("circle",{cx:"50",cy:"0",r:"2.5",fill:"#fff",className:"animate-snow",style:{animationDuration:"4s",animationDelay:"0s"}}),e.jsx("circle",{cx:"150",cy:"0",r:"1.5",fill:"#fff",className:"animate-snow",style:{animationDuration:"6s",animationDelay:"2s"}}),e.jsx("circle",{cx:"250",cy:"0",r:"3",fill:"#fff",className:"animate-snow",style:{animationDuration:"5s",animationDelay:"1s"}}),e.jsx("circle",{cx:"350",cy:"0",r:"2",fill:"#fff",className:"animate-snow",style:{animationDuration:"7s",animationDelay:"4s"}}),e.jsx("circle",{cx:"450",cy:"0",r:"3.5",fill:"#fff",className:"animate-snow",style:{animationDuration:"4.5s",animationDelay:"0.5s"}}),e.jsx("circle",{cx:"520",cy:"0",r:"2",fill:"#fff",className:"animate-snow",style:{animationDuration:"5.5s",animationDelay:"3s"}}),e.jsx("circle",{cx:"650",cy:"0",r:"1.5",fill:"#fff",className:"animate-snow",style:{animationDuration:"6.5s",animationDelay:"1.5s"}}),e.jsx("circle",{cx:"750",cy:"0",r:"3",fill:"#fff",className:"animate-snow",style:{animationDuration:"4s",animationDelay:"2.5s"}}),e.jsx("circle",{cx:"850",cy:"0",r:"2.5",fill:"#fff",className:"animate-snow",style:{animationDuration:"7s",animationDelay:"0.2s"}}),e.jsx("circle",{cx:"950",cy:"0",r:"2",fill:"#fff",className:"animate-snow",style:{animationDuration:"5s",animationDelay:"3.5s"}}),e.jsx("circle",{cx:"1050",cy:"0",r:"3.5",fill:"#fff",className:"animate-snow",style:{animationDuration:"6s",animationDelay:"1s"}}),e.jsx("circle",{cx:"1150",cy:"0",r:"2",fill:"#fff",className:"animate-snow",style:{animationDuration:"4.5s",animationDelay:"2s"}}),e.jsx("circle",{cx:"100",cy:"-50",r:"2",fill:"#fff",className:"animate-snow",style:{animationDuration:"5s",animationDelay:"3s"}}),e.jsx("circle",{cx:"400",cy:"-50",r:"3",fill:"#fff",className:"animate-snow",style:{animationDuration:"4s",animationDelay:"1s"}}),e.jsx("circle",{cx:"800",cy:"-50",r:"1.5",fill:"#fff",className:"animate-snow",style:{animationDuration:"6s",animationDelay:"2s"}}),e.jsx("circle",{cx:"1100",cy:"-50",r:"2.5",fill:"#fff",className:"animate-snow",style:{animationDuration:"5.5s",animationDelay:"0.5s"}})]})]}),e.jsx("style",{children:`
        .animate-walk-away {
          animation: move-into-distance 24s ease-out infinite;
        }
        
        @keyframes move-into-distance {
          0% { transform: translate(600px, 320px) scale(0.7); opacity: 0; }
          5% { opacity: 1; }
          40% { transform: translate(600px, 260px) scale(0.35); opacity: 1; }
          70% { transform: translate(600px, 220px) scale(0.15); opacity: 1; }
          95% { transform: translate(600px, 205px) scale(0.04); opacity: 1; }
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
      `})]}),I=l.lazy(()=>m(()=>import("./AboutSection-BRqfQ32i.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))),S=l.lazy(()=>m(()=>import("./SkillsSection-l0j0vYFe.js"),__vite__mapDeps([11,1,2,8,3,4,5,6,12]))),T=l.lazy(()=>m(()=>import("./ProjectsSection-xfx2hBYw.js"),__vite__mapDeps([13,1,2,8,3,4,5,6,14,15,16,10]))),R=l.lazy(()=>m(()=>import("./TestimonialsSection-DAudlhv9.js"),__vite__mapDeps([17,1,2,8,3,4,5,6,18,19,7,16]))),P=l.lazy(()=>m(()=>import("./ExperienceSection-PgAXm73I.js"),__vite__mapDeps([20,1,2,8,3,4,5,6,21]))),H=l.lazy(()=>m(()=>import("./ContactSection-DgeTx6Wo.js"),__vite__mapDeps([22,1,2,8,3,4,5,6,18,15,16,19,7]))),O=()=>e.jsx("div",{className:"min-h-[400px] flex items-center justify-center",children:e.jsx("div",{className:"animate-pulse text-gray-400",children:"Loading..."})}),V=()=>e.jsxs("div",{className:"overflow-y-auto overflow-x-hidden",children:[e.jsx(A,{}),e.jsx(B,{}),e.jsx(Q,{}),e.jsx("section",{children:e.jsx(Y,{})}),e.jsxs(l.Suspense,{fallback:e.jsx(O,{}),children:[e.jsx("section",{children:e.jsx(I,{})}),e.jsx("section",{children:e.jsx(S,{})}),e.jsx("section",{children:e.jsx(T,{})}),e.jsx("section",{children:e.jsx(P,{})}),e.jsx("section",{children:e.jsx(R,{})}),e.jsx(_,{}),e.jsx("section",{children:e.jsx(H,{})})]})]}),e0=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"}));export{e0 as I,L};
