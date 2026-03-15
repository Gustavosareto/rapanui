export function RapaNuiLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Moai statue inspired design with food elements */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="50%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      
      {/* Chef hat base */}
      <path
        d="M20 45 Q20 25 35 20 Q40 15 50 15 Q60 15 65 20 Q80 25 80 45 L75 55 Q75 60 70 60 L30 60 Q25 60 25 55 Z"
        fill="url(#logoGradient)"
      />
      
      {/* Hat band */}
      <rect x="25" y="55" width="50" height="8" rx="2" fill="white" opacity="0.9" />
      
      {/* Decorative food elements */}
      <circle cx="35" cy="35" r="3" fill="white" opacity="0.8" />
      <circle cx="50" cy="28" r="4" fill="white" opacity="0.8" />
      <circle cx="65" cy="35" r="3" fill="white" opacity="0.8" />
      
      {/* Island/plate base */}
      <ellipse cx="50" cy="75" rx="35" ry="8" fill="url(#logoGradient)" opacity="0.6" />
      
      {/* Steam lines */}
      <path
        d="M40 50 Q42 45 40 40"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M50 52 Q52 47 50 42"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M60 50 Q58 45 60 40"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
