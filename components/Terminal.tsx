'use client';

import React, { useEffect, useState } from 'react';
import { SystemStatus } from '@/types';
import Email from './Email';

interface TerminalProps {
  children: React.ReactNode;
  status: SystemStatus;
}

export default function Terminal({ children, status }: TerminalProps) {
  const [key, setKey] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);
  const isCritical = status.level === 'critical' || !status.containment;
  const isEmergency = status.temperature >= 80;
  
  useEffect(() => {
    if (status.level === 'normal' && status.temperature === 25) {
      setKey(prev => prev + 1);
    }
  }, [status]);

  useEffect(() => {
    const updateTitle = () => {
      if (status.temperature >= 80) {
        // More dramatic messages for critical state
        const criticalMessages = [
          "🚨 CRITICAL: AWS SHUTDOWN IMMINENT 🚨",
          "⚠️ $4.99 UNPAID - EVACUATE NOW ⚠️",
          "🔥 MELTDOWN SEQUENCE INITIATED 🔥",
          "💀 NO EXPENSE APPROVAL - DOOM 💀"
        ];
        let messageIndex = 0;
        
        const flashTitle = () => {
          document.title = criticalMessages[messageIndex];
          messageIndex = (messageIndex + 1) % criticalMessages.length;
        };

        const titleInterval = setInterval(flashTitle, 800);
        return () => clearInterval(titleInterval);
      } else if (status.temperature > 45) {
        // Warning state messages
        const warningMessages = [
          "⚠️ WARNING: AWS Shutdown Risk",
          "⏰ Time Running Out",
          "📝 HR Approval Pending..."
        ];
        let messageIndex = 0;

        const flashTitle = () => {
          document.title = warningMessages[messageIndex];
          messageIndex = (messageIndex + 1) % warningMessages.length;
        };

        const titleInterval = setInterval(flashTitle, 2000);
        return () => clearInterval(titleInterval);
      } else {
        document.title = "Prevent AWS Shutdown";
      }
    };

    const cleanup = updateTitle();
    return () => cleanup?.();
  }, [status.temperature]);

  const handleGameOver = () => {
    setIsFlashing(true);
    setTimeout(() => {
      setIsFlashing(false);
      setKey(prev => prev + 1);
    }, 5000);
  };

  return (
    <div 
      key={key}
      className={`
        min-h-screen bg-black text-green-500 p-4 font-mono
        ${isCritical ? 'animate-glitch' : ''}
        ${isEmergency ? 'border-4 border-red-600 animate-pulse' : ''}
        ${isFlashing ? 'animate-flash' : ''}
        relative transition-all duration-3000
      `}
    >
      {/* Emergency overlay */}
      {isEmergency && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-red-900/20 animate-pulse" />
          <div className="absolute inset-0 bg-[url('/emergency.png')] opacity-20" />
        </div>
      )}
      
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
      
      {/* White flash overlay */}
      {isFlashing && (
        <div 
          className="absolute inset-0 bg-white pointer-events-none animate-fadeIn z-50"
        />
      )}
      
      <div className="max-w-2xl mx-auto relative z-10">
        {React.Children.map(children, child => {
          if (React.isValidElement(child) && child.type === Email) {
            return React.cloneElement(child, { onGameOver: handleGameOver });
          }
          return child;
        })}
      </div>
    </div>
  );
} 