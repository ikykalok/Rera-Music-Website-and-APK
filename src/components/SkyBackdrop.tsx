import React from "react";

export const LeftAirplane: React.FC = () => {
  return (
    <div className="sky-plane-left pointer-events-none select-none" aria-hidden="true">
      {/* Contrail flight trail */}
      <svg
        className="sky-contrail-left"
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
        className="sky-plane-svg"
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
    <div className="sky-plane-right pointer-events-none select-none" aria-hidden="true">
      {/* Contrail flight trail */}
      <svg
        className="sky-contrail-right"
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
        className="sky-plane-right-svg"
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

export const SkyClouds: React.FC = () => {
  return (
    <>
      {/* Top-Left Billowing Cloud Mass */}
      <div className="sky-cloud-top-left pointer-events-none select-none" aria-hidden="true">
        <svg
          className="sky-cloud-svg"
          viewBox="0 0 260 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="cloudPuffGrad1" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="85%" stopColor="#F5F8FE" />
              <stop offset="100%" stopColor="#D5E4F8" />
            </radialGradient>
            <linearGradient id="cloudUnderShade" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#C9DCF5" />
            </linearGradient>
          </defs>

          <path
            d="M-20,0 L-20,310 C20,310 50,290 70,270 C110,295 160,270 180,225 C210,215 225,180 215,145 C225,110 205,75 170,70 C165,30 115,10 75,25 C50,5 10,0 -20,0 Z"
            fill="url(#cloudUnderShade)"
            opacity="0.85"
          />

          <circle cx="60" cy="85" r="55" fill="url(#cloudPuffGrad1)" />
          <circle cx="115" cy="115" r="50" fill="url(#cloudPuffGrad1)" />
          <circle cx="145" cy="165" r="48" fill="url(#cloudPuffGrad1)" />
          <circle cx="110" cy="215" r="52" fill="url(#cloudPuffGrad1)" />
          <circle cx="45" cy="250" r="45" fill="url(#cloudPuffGrad1)" />

          <circle cx="55" cy="75" r="45" fill="#FFFFFF" opacity="0.95" />
          <circle cx="105" cy="105" r="42" fill="#FFFFFF" opacity="0.95" />
          <circle cx="135" cy="155" r="40" fill="#FFFFFF" opacity="0.95" />
          <circle cx="100" cy="205" r="45" fill="#FFFFFF" opacity="0.95" />
        </svg>
      </div>

      {/* Small floating wisp */}
      <div className="sky-cloud-wisp pointer-events-none select-none" aria-hidden="true">
        <svg viewBox="0 0 140 45" fill="none" className="w-full h-full">
          <path
            d="M-10,20 C15,20 35,10 65,15 C95,8 120,18 135,28 C105,38 45,38 -10,32 Z"
            fill="#FFFFFF"
            opacity="0.9"
          />
          <path
            d="M0,24 C25,24 50,18 75,20 C100,18 115,24 105,28 C70,33 25,33 0,30 Z"
            fill="#D5E4F8"
            opacity="0.8"
          />
        </svg>
      </div>
    </>
  );
};
