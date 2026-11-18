import React from 'react';

export const Clouds: React.FC = () => {
  return (
    <>
      {/* 1. Top-Left Billowing Cloud Mass (Z-15) */}
      <div className="absolute top-0 left-0 w-[260px] h-[360px] pointer-events-none select-none z-15 overflow-hidden">
        <svg
          className="w-full h-full drop-shadow-[0_4px_16px_rgba(25,60,150,0.18)]"
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

          {/* Cloud under-shading */}
          <path
            d="M-20,0 
               L-20,310 
               C20,310 50,290 70,270 
               C110,295 160,270 180,225 
               C210,215 225,180 215,145 
               C225,110 205,75 170,70 
               C165,30 115,10 75,25 
               C50,5 10,0 -20,0 Z"
            fill="url(#cloudUnderShade)"
            opacity="0.85"
          />

          {/* Front white puffs */}
          <circle cx="60" cy="85" r="55" fill="url(#cloudPuffGrad1)" />
          <circle cx="115" cy="115" r="50" fill="url(#cloudPuffGrad1)" />
          <circle cx="145" cy="165" r="48" fill="url(#cloudPuffGrad1)" />
          <circle cx="110" cy="215" r="52" fill="url(#cloudPuffGrad1)" />
          <circle cx="45" cy="250" r="45" fill="url(#cloudPuffGrad1)" />

          {/* Crisp white puff highlights */}
          <circle cx="55" cy="75" r="45" fill="#FFFFFF" opacity="0.95" />
          <circle cx="105" cy="105" r="42" fill="#FFFFFF" opacity="0.95" />
          <circle cx="135" cy="155" r="40" fill="#FFFFFF" opacity="0.95" />
          <circle cx="100" cy="205" r="45" fill="#FFFFFF" opacity="0.95" />
        </svg>

        {/* Small floating wisp below */}
        <div className="absolute top-[305px] left-0 w-[140px] h-[45px]">
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
      </div>

      {/* 2. Bottom Billowing Cloud Bank (Overlapping dashboard at the bottom, Z-25) */}
      <div className="absolute bottom-0 left-0 right-0 h-[220px] w-full pointer-events-none select-none z-25 overflow-hidden">
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 922 220"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cloudFrontGrad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.99" />
              <stop offset="60%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F8FAFC" />
            </linearGradient>
            <radialGradient id="cloudPuffBottom" cx="45%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="75%" stopColor="#F6F9FE" />
              <stop offset="100%" stopColor="#DEEAF8" />
            </radialGradient>
          </defs>

          {/* Under-layer cloud soft shading */}
          <circle cx="100" cy="130" r="110" fill="#DEEAF8" opacity="0.75" />
          <circle cx="260" cy="145" r="95" fill="#DEEAF8" opacity="0.7" />
          <circle cx="460" cy="165" r="90" fill="#DEEAF8" opacity="0.65" />
          <circle cx="660" cy="150" r="95" fill="#DEEAF8" opacity="0.7" />
          <circle cx="830" cy="130" r="110" fill="#DEEAF8" opacity="0.75" />

          {/* Main Front Billowing Cloud Bank */}
          {/* Bottom Left Cloud Bank */}
          <circle cx="20" cy="135" r="95" fill="url(#cloudPuffBottom)" />
          <circle cx="95" cy="115" r="90" fill="url(#cloudPuffBottom)" />
          <circle cx="180" cy="130" r="82" fill="url(#cloudPuffBottom)" />
          <circle cx="250" cy="150" r="75" fill="url(#cloudPuffBottom)" />

          {/* Center Cloud Puffs overlapping the bottom of the chat dashboard */}
          <circle cx="330" cy="160" r="70" fill="url(#cloudPuffBottom)" />
          <circle cx="410" cy="155" r="66" fill="url(#cloudPuffBottom)" />
          <circle cx="490" cy="158" r="68" fill="url(#cloudPuffBottom)" />
          <circle cx="570" cy="160" r="70" fill="url(#cloudPuffBottom)" />

          {/* Bottom Right Cloud Bank */}
          <circle cx="660" cy="145" r="80" fill="url(#cloudPuffBottom)" />
          <circle cx="750" cy="120" r="92" fill="url(#cloudPuffBottom)" />
          <circle cx="840" cy="110" r="98" fill="url(#cloudPuffBottom)" />
          <circle cx="910" cy="130" r="90" fill="url(#cloudPuffBottom)" />

          {/* Solid white bottom ground */}
          <rect x="0" y="145" width="922" height="75" fill="#FFFFFF" />
        </svg>
      </div>
    </>
  );
};
