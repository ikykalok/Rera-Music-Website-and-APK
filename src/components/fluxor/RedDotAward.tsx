import React from 'react';

export const RedDotAward: React.FC = () => {
  return (
    <div className="absolute left-[760px] top-[515px] w-[95px] flex flex-col items-center text-center select-none z-30">
      {/* 3D Red Dot Ribbon Sphere */}
      <div className="relative w-[44px] h-[44px] mb-4 drop-shadow-[0_4px_8px_rgba(200,20,30,0.25)]">
        <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="redSphereShade" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FF4D4D" />
              <stop offset="50%" stopColor="#DC2626" />
              <stop offset="85%" stopColor="#991B1B" />
              <stop offset="100%" stopColor="#7F1D1D" />
            </radialGradient>
            <linearGradient id="whiteRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F1F5F9" />
            </linearGradient>
            <clipPath id="sphereClip">
              <circle cx="50" cy="50" r="48" />
            </clipPath>
          </defs>

          <g clipPath="url(#sphereClip)">
            <circle cx="50" cy="50" r="48" fill="url(#redSphereShade)" />
            <path
              d="M-5,25 Q45,-5 105,35 L105,50 Q45,10 -5,40 Z"
              fill="url(#whiteRibbon)"
              opacity="0.95"
            />
            <path
              d="M-5,50 Q45,20 105,60 L105,75 Q45,35 -5,65 Z"
              fill="url(#whiteRibbon)"
              opacity="0.95"
            />
            <path
              d="M-5,75 Q45,45 105,85 L105,100 Q45,60 -5,90 Z"
              fill="url(#whiteRibbon)"
              opacity="0.95"
            />
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="rgba(0,0,0,0.15)"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>

      {/* 2026 Year text in Bodoni Moda / Serif */}
      <div className="font-numbers text-slate-900 text-[38px] leading-[0.9] tracking-tight font-normal">
        2026
      </div>

      {/* Red Dot Winner subtitle */}
      <div className="text-slate-800 text-[10.5px] font-sans font-medium tracking-normal mt-3 whitespace-nowrap">
        Red Dot Winner
      </div>
    </div>
  );
};
