import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function Logo({ className = "", size = 40, showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <img 
          src="/growuptechlogo-small.svg" 
          alt="Grow Up Tech Logo" 
          style={{ width: size, height: size }}
          className="object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
      {showText && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1">
            <span className="text-xl md:text-2xl font-display font-bold tracking-tighter text-primary">
              MicroC@re
            </span>
            <span className="text-foreground font-display font-bold">&</span>
            <span className="text-xl md:text-2xl font-display font-bold tracking-tighter text-primary">
              Grow Up Tech
            </span>
          </div>
          <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-muted-foreground">
            Mundra's IT & Education Hub
          </span>
        </div>
      )}
    </div>
  );
}
