'use client';

import { SystemStatus } from '@/types';

interface TerminalProps {
  children: React.ReactNode;
  status: SystemStatus;
}

export default function Terminal({ children, status }: TerminalProps) {
  const isCritical = status.level === 'critical' || !status.containment;
  
  return (
    <div className={`
      min-h-screen bg-black text-green-500 p-4 font-mono
      ${isCritical ? 'animate-glitch' : ''}
      relative
    `}>
      {/* Glitch overlay */}
      {isCritical && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-red-500/5 animate-pulse" />
          <div className="absolute inset-0 bg-[url('/glitch.png')] opacity-10" />
        </div>
      )}
      
      {/* Screen flicker */}
      {status.temperature > 45 && (
        <div className="absolute inset-0 bg-white/5 animate-flicker pointer-events-none" />
      )}
      
      <div className="max-w-2xl mx-auto relative z-10">
        {children}
      </div>
    </div>
  );
} 