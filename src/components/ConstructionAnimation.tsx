import React from 'react';

const ConstructionAnimation: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-[#F6FAF6]">
      <div className="container mx-auto container-mobile">
        <div className="bg-[#F6FAF6] overflow-hidden">
          <div className="bg-[#F6FAF6] relative">
            <style>
              {`
              @keyframes rise {
                0% { transform: scaleY(0); opacity: 0; }
                25% { opacity: 1; }
                60% { transform: scaleY(1); opacity: 1; }
                100% { transform: scaleY(1); opacity: 1; }
              }
              @keyframes floatCloud {
                0% { transform: translateX(0); }
                50% { transform: translateX(20px); }
                100% { transform: translateX(0); }
              }
              @keyframes craneSwing {
                0% { transform: rotate(-4deg); }
                50% { transform: rotate(4deg); }
                100% { transform: rotate(-4deg); }
              }
              @keyframes moveDash {
                0% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: 120; }
              }
              @keyframes carMove {
                0% { transform: translateX(-120px); }
                100% { transform: translateX(540px); }
              }
              .bld { transform-origin: bottom center; animation: rise 5.8s ease-in-out infinite; }
              .bld-1 { animation-delay: 0s; }
              .bld-2 { animation-delay: 0.4s; }
              .bld-3 { animation-delay: 0.8s; }
              .bld-4 { animation-delay: 1.2s; }
              .bld-5 { animation-delay: 1.6s; }
              .cloud { animation: floatCloud 10s ease-in-out infinite; }
              .dash { animation: moveDash 2s linear infinite; }
              .car { animation: carMove 8s linear infinite; }
            `}
            </style>
            <svg className="w-full" viewBox="0 0 520 260" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Animated construction of city with road">
              <defs>
                <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F6FAF6" />
                  <stop offset="100%" stopColor="#F6FAF6" />
                </linearGradient>
                <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#CDEEE0" />
                  <stop offset="100%" stopColor="#A8E3C8" />
                </linearGradient>
                <linearGradient id="bannerGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#EFF6FF" />
                </linearGradient>
                <radialGradient id="medalGrad" cx="50%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="70%" stopColor="#E9EEF9" />
                  <stop offset="100%" stopColor="#DBE5F5" />
                </radialGradient>
                <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feOffset dx="0" dy="1" />
                  <feGaussianBlur stdDeviation="1.2" result="blur" />
                  <feColorMatrix in="blur" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.25 0" />
                  <feBlend in2="SourceGraphic" mode="normal" />
                </filter>
              </defs>

              <rect x="0" y="0" width="520" height="260" fill="url(#sky)" />

              {/* Clouds */}
              <g className="cloud" opacity="0.7">
                <circle cx="90" cy="40" r="10" fill="#FFFFFF" />
                <circle cx="100" cy="43" r="12" fill="#FFFFFF" />
                <circle cx="112" cy="40" r="9" fill="#FFFFFF" />
              </g>
              <g className="cloud" opacity="0.6" style={{ transformOrigin: '320px 50px' }}>
                <circle cx="320" cy="50" r="11" fill="#FFFFFF" />
                <circle cx="332" cy="52" r="13" fill="#FFFFFF" />
                <circle cx="344" cy="49" r="9" fill="#FFFFFF" />
              </g>

              {/* Sun */}
              <circle cx="60" cy="36" r="12" fill="#FFD54F" />
              <circle cx="60" cy="36" r="18" fill="#FFD54F" opacity="0.25" />

              {/* Background city silhouettes (harmonized to sky color to avoid banding) */}
              <rect x="0" y="160" width="520" height="30" fill="#F6FAF6" />

              {/* Ground (background) harmonized to sky color for seamless backdrop */}
              <rect x="0" y="210" width="520" height="50" fill="#F6FAF6" />

              {/* Trees */}
              <g>
                <rect x="70" y="206" width="6" height="12" fill="#2A523D" />
                <circle cx="73" cy="202" r="8" fill="#69B68D" />
              </g>
              <g>
                <rect x="450" y="206" width="6" height="12" fill="#2A523D" />
                <circle cx="453" cy="202" r="8" fill="#69B68D" />
              </g>

              {/* Crane */}
              <g transform="translate(410,120)">
                <rect x="-2" y="0" width="4" height="90" fill="#545454" />
                <g style={{ transformOrigin: '0px 10px', animation: 'craneSwing 6s ease-in-out infinite' }}>
                  <rect x="0" y="6" width="60" height="4" fill="#545454" />
                  <rect x="52" y="10" width="2" height="40" fill="#545454" />
                  <rect x="50" y="50" width="8" height="6" fill="#2E2E2E" />
                </g>
              </g>

              {/* Foreground buildings rising sequentially (bottom anchored near road; buildings end at y=220) */}
              <g className="bld bld-1">
                <rect x="40" y="132" width="70" height="88" rx="5" fill="#1C7C54" />
                {Array.from({ length: 4 }).map((_, r) => (
                  Array.from({ length: 3 }).map((_, c) => (
                    <rect key={`a-${r}-${c}`} x={48 + c * 18} y={142 + r * 18} width={12} height={10} rx={2} fill="#E6F5EA" />
                  ))
                ))}
                <rect x="55" y="124" width="40" height="6" rx="2" fill="#134C3B" />
              </g>

              <g className="bld bld-2">
                <rect x="130" y="122" width="60" height="98" rx="4" fill="#0A0A0A" />
                {Array.from({ length: 5 }).map((_, r) => (
                  Array.from({ length: 3 }).map((_, c) => (
                    <rect key={`b-${r}-${c}`} x={138 + c * 16} y={130 + r * 18} width={10} height={12} rx={2} fill="#F0F0F0" opacity="0.9" />
                  ))
                ))}
                <rect x="152" y="114" width="16" height="8" rx="2" fill="#2E2E2E" />
              </g>

              <g className="bld bld-3">
                <rect x="205" y="112" width="80" height="108" rx="6" fill="url(#glass)" />
                {Array.from({ length: 6 }).map((_, i) => (
                  <rect key={`c-${i}`} x={210 + i * 12} y="114" width="4" height="104" fill="#82D8B9" opacity="0.55" />
                ))}
                <rect x="230" y="106" width="30" height="6" rx="3" fill="#69B68D" />
              </g>

              <g className="bld bld-4">
                <path d="M310 220 L310 120 L360 120 L360 220 Z" fill="#134C3B" />
                {Array.from({ length: 4 }).map((_, r) => (
                  Array.from({ length: 4 }).map((_, c) => (
                    <rect key={`d-${r}-${c}`} x={318 + c * 10} y={132 + r * 18} width={8} height={10} rx={2} fill="#E6F5EA" />
                  ))
                ))}
                <rect x="330" y="114" width="20" height="6" rx="2" fill="#0A0A0A" opacity="0.8" />
              </g>

              <g className="bld bld-5">
                <rect x="380" y="128" width="56" height="92" rx="4" fill="#0F5132" />
                {Array.from({ length: 4 }).map((_, r) => (
                  Array.from({ length: 3 }).map((_, c) => (
                    <rect key={`e-${r}-${c}`} x={388 + c * 16} y={136 + r * 18} width={10} height={12} rx={2} fill="#DDF5EC" />
                  ))
                ))}
                <rect x="396" y="122" width="24" height="6" rx="2" fill="#134C3B" />
              </g>

              {/* Road and lane (front layer over buildings) – moved slightly downward to hide building bases */}
              <rect x="0" y="224" width="520" height="3" fill="#9AD6B5" />
              <rect x="0" y="226" width="520" height="26" fill="#2E2E2E" />
              <line x1="0" y1="239" x2="520" y2="239" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="12 10" className="dash" />

              {/* Bird carrying a banner */}
              <g style={{ animation: 'birdFly 12s linear infinite' }} className="bird" transform="translate(-160,0)">
                <style>
                  {`
                  @keyframes birdFly {
                    0% { transform: translateX(-160px); }
                    100% { transform: translateX(560px); }
                  }
                  @keyframes wingFlap {
                    0% { transform: rotate(6deg); }
                    50% { transform: rotate(-6deg); }
                    100% { transform: rotate(6deg); }
                  }
                `}
                </style>
                {/* Bird body */}
                <g transform="translate(120,55)">
                  <ellipse cx="0" cy="0" rx="10" ry="6" fill="#2E2E2E" />
                  <circle cx="4" cy="-1" r="1.2" fill="#FFFFFF" />
                  <polygon points="10,0 14,-2 10,-4" fill="#FFD54F" />
                  {/* Wings */}
                  <g style={{ transformOrigin: '0px 0px', animation: 'wingFlap 0.6s ease-in-out infinite' }}>
                    <polygon points="-2,0 -12,6 -2,4" fill="#3B3B3B" />
                    <polygon points="2,0 12,6 2,4" fill="#3B3B3B" opacity="0.9" />
                  </g>
                </g>
                {/* Rope to medallion */}
                <line x1="120" y1="61" x2="176" y2="70" stroke="#3B3B3B" strokeWidth="1" />
                {/* Badge-style medallion with short ribbon tail */}
                <g transform="translate(176,60) rotate(-5)" filter="url(#dropShadow)">
                  {/* Medal outer ring and face */}
                  <circle cx="28" cy="20" r="22" fill="url(#medalGrad)" stroke="#C8D2E5" strokeWidth="1.25" />
                  <circle cx="28" cy="20" r="18" fill="url(#bannerGrad)" stroke="#BFCBDF" strokeWidth="0.8" />
                  {/* Short ribbon tail below medal */}
                  <path d="M22,38 L22,52 L28,47 L34,52 L34,38" fill="#EFF6FF" stroke="#C8D2E5" />
                  {/* Two-line text inside the medal */}
                  <text x="28" y="18" textAnchor="middle" fontSize="6.2" fontWeight="700" fill="#0F172A" fontFamily="system-ui, -apple-system, Segoe UI, Roboto">
                    <tspan x="28" dy="0">Enhance Design</tspan>
                    <tspan x="28" dy="6.8">Studio Pvt. Ltd.</tspan>
                  </text>
                </g>
              </g>

              {/* Car moving across the road (adjusted to remain fully on road) */}
              <g className="car" transform="translate(-120,0)">
                <rect x="40" y="234" width="40" height="12" rx="3" fill="#69B68D" />
                <rect x="42" y="230" width="12" height="6" rx="2" fill="#FFFFFF" />
                <circle cx="50" cy="248" r="4" fill="#1F2937" />
                <circle cx="70" cy="248" r="4" fill="#1F2937" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionAnimation;