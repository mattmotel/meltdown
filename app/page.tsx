'use client';

import { useState } from 'react';
import Terminal from '@/components/Terminal';
import SystemStatus from '@/components/SystemStatus';
import Email from '@/components/Email';
import { scenario } from '@/data/scenario';
import { AlertLevel } from '@/types';

export default function Home() {
  const [currentEmailId, setCurrentEmailId] = useState('start');
  const [systemStatus, setSystemStatus] = useState({
    level: 'normal' as AlertLevel,
    temperature: 25,
    pressure: 100,
    containment: true
  });

  const handleChoice = (choiceId: string) => {
    console.log('Choice clicked:', choiceId);
    const currentEmail = scenario[currentEmailId];
    const choice = currentEmail.choices.find(c => c.id === choiceId);
    
    if (choice) {
      console.log('Moving to:', choice.nextEmailId);
      
      if (choice.consequence) {
        setSystemStatus(prev => ({
          ...prev,
          [choice.consequence.type]: choice.consequence.value,
          level: choice.consequence.type === 'temperature' && choice.consequence.value > 40 
            ? 'danger' 
            : prev.level
        }));
      }
      
      setCurrentEmailId(choice.nextEmailId);
    }
  };

  console.log('Current email:', currentEmailId);

  return (
    <Terminal status={systemStatus}>
      <SystemStatus status={systemStatus} />
      <Email 
        email={scenario[currentEmailId]} 
        onChoice={handleChoice}
      />
    </Terminal>
  );
}
