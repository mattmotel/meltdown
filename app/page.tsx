'use client';

import { useState } from 'react';
import Terminal from '@/components/Terminal';
import SystemStatus from '@/components/SystemStatus';
import Email from '@/components/Email';
import EmergencyCallButton from '@/components/EmergencyCallButton';
import { scenario } from '@/data/scenario';
import { AlertLevel, SystemStatus as SystemStatusType } from '@/types';

const initialStatus = {
  level: 'normal' as AlertLevel,
  temperature: 25,
  pressure: 100,
  containment: true
};

export default function Home() {
  const [currentEmailId, setCurrentEmailId] = useState('start');
  const [systemStatus, setSystemStatus] = useState<SystemStatusType>(initialStatus);

  const handleChoice = (choiceId: string) => {
    console.log('Choice clicked:', choiceId);
    const currentEmail = scenario[currentEmailId];
    const choice = currentEmail.choices.find(c => c.id === choiceId);
    
    if (choice) {
      // If it's a restart, reset everything
      if (choice.nextEmailId === 'start') {
        setSystemStatus(initialStatus);
      } else if (choice.consequence) {
        const consequenceValue = typeof choice.consequence.value === 'number' ? choice.consequence.value : 0;
        
        setSystemStatus(prev => ({
          ...prev,
          [choice.consequence!.type]: choice.consequence!.value,
          level: choice.consequence!.type === 'temperature' && consequenceValue > 40 
            ? 'danger' 
            : prev.level
        }));
      }
      
      setCurrentEmailId(choice.nextEmailId);
    }
  };

  console.log('Current email:', currentEmailId);

  return (
    <main className="relative min-h-screen">
      <Terminal status={systemStatus}>
        <SystemStatus status={systemStatus} />
        <Email 
          email={scenario[currentEmailId]} 
          onChoice={handleChoice}
        />
      </Terminal>
      <EmergencyCallButton />
    </main>
  );
}
