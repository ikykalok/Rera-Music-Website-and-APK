import React from 'react';

export const LeftAirplane: React.FC = () => {
  return (
    <div className="absolute left-[63px] top-[331px] pointer-events-none select-none z-20">
      {/* Contrail flight trail */}
      <svg
        className="absolute -left-16 top-6 w-24 h-16 overflow-visible opacity-50"
        viewBox="0 0 100 60"
        fill="none"
      >
        <path
          d="M 0 50 C 35 45, 65 30, 95 15"
          stroke="white"
          strokeWidth="1.5"
          strokeDasharray="3 3.5"
          strokeLinecap="round"
        />
      </svg>

      {/* 3D Paper Airplane SVG pointing up-right */}
      <svg
        viewBox="0 0 140 70"
        className="w-[120px] h-auto drop-shadow-[0_4px_12px_rgba(20,50,110,0.2)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="planeTopWing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F1F5FD" />
          </linearGradient>
          <linearGradient id="planeBottomWing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2EDFC" />
            <stop offset="100%" stopColor="#CBDCF8" />
          </linearGradient>
          <linearGradient id="planeFold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ADC8F3" />
            <stop offset="100%" stopColor="#89AFE9" />
          </linearGradient>
        </defs>

        <polygon points="135,15 5,20 85,45" fill="url(#planeTopWing)" />
        <polygon points="135,15 85,45 105,65" fill="url(#planeBottomWing)" />
        <polygon points="85,45 88,60 105,65" fill="url(#planeFold)" />
        <line x1="135" y1="15" x2="85" y2="45" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
      </svg>
    </div>
  );
};

export const RightAirplane: React.FC = () => {
  return (
    <div className="absolute left-[598px] top-[345px] pointer-events-none select-none z-20">
      {/* Contrail flight trail */}
      <svg
        className="absolute -right-14 -top-4 w-20 h-14 overflow-visible opacity-45"
        viewBox="0 0 80 50"
        fill="none"
      >
        <path
          d="M 80 0 C 55 15, 30 25, 5 35"
          stroke="white"
          strokeWidth="1.2"
          strokeDasharray="2.5 3"
          strokeLinecap="round"
        />
      </svg>

      {/* 3D Paper Airplane SVG pointing down-left */}
      <svg
        viewBox="0 0 100 60"
        className="w-[66px] h-auto drop-shadow-[0_4px_10px_rgba(20,50,110,0.18)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="planeRightTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E9F1FD" />
          </linearGradient>
          <linearGradient id="planeRightBottom" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D9E7FA" />
            <stop offset="100%" stopColor="#BED7F7" />
          </linearGradient>
          <linearGradient id="planeRightFold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9EBEF0" />
            <stop offset="100%" stopColor="#7DA6E5" />
          </linearGradient>
        </defs>

        <g transform="translate(5, 5) rotate(15)">
          <polygon points="5,35 75,5 45,45" fill="url(#planeRightTop)" />
          <polygon points="5,35 45,45 60,52" fill="url(#planeRightBottom)" />
          <polygon points="45,45 52,50 60,52" fill="url(#planeRightFold)" />
          <line x1="5" y1="35" x2="45" y2="45" stroke="#FFFFFF" strokeWidth="0.8" />
        </g>
      </svg>
    </div>
  );
};
