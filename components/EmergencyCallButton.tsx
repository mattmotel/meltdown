import React, { useState, useEffect } from 'react';
import CallingWindow from './CallingWindow.jsx';

export default function EmergencyCallButton() {
  const [showCallWindow, setShowCallWindow] = useState(false);
  const [ringCount, setRingCount] = useState(0);
  const [callStatus, setCallStatus] = useState<'ringing' | 'voicemail'>('ringing');

  useEffect(() => {
    if (!showCallWindow) {
      // Reset states when call window closes
      setRingCount(0);
      setCallStatus('ringing');
      return;
    }

    // Ring every 3 seconds
    const ringInterval = setInterval(() => {
      setRingCount(prev => {
        const newCount = prev + 1;
        // After 4 rings, go to voicemail
        if (newCount >= 4) {
          setCallStatus('voicemail');
          clearInterval(ringInterval);
        }
        return newCount;
      });
    }, 3000);

    return () => clearInterval(ringInterval);
  }, [showCallWindow]);

  return (
    <>
      {showCallWindow && (
        <CallingWindow 
          callee="Casey"
          onClose={() => setShowCallWindow(false)}
          status={callStatus}
          ringCount={ringCount}
        />
      )}
      
      <button
        onClick={() => setShowCallWindow(true)}
        className="fixed bottom-4 right-4 bg-red-600 hover:bg-red-700 
                   text-white font-bold py-4 px-8 rounded-full 
                   shadow-lg hover:shadow-xl transition-all
                   animate-pulse"
      >
        <span className="mr-2">📞</span>
             Call Jessica
      </button>
    </>
  );
} 