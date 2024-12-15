import React, { useState, useEffect } from 'react';
import styles from './CallingWindow.module.css';

export interface CallingWindowProps {
  callee: string;
  onClose: () => void;
  status?: 'ringing' | 'voicemail';
  ringCount?: number;
}

const CallingWindow: React.FC<CallingWindowProps> = ({ callee, onClose }) => {
  const [callDuration, setCallDuration] = useState(0);
  const [callStatus, setCallStatus] = useState('ringing'); // ringing, calling, voicemail, ended
  const [ringCount, setRingCount] = useState(0);

  useEffect(() => {
    const ringInterval = setInterval(() => {
      if (callStatus === 'ringing') {
        setRingCount(prev => prev + 1);
      }
    }, 3000);

    if (ringCount >= 4 && callStatus === 'ringing') {
      setCallStatus('calling');
    }

    const voicemailTimeout = setTimeout(() => {
      if (callStatus === 'calling') {
        setCallStatus('voicemail');
      }
    }, 30000);

    const durationTimer = setInterval(() => {
      if (callStatus === 'calling') {
        setCallDuration(prev => prev + 1);
      }
    }, 1000);

    return () => {
      clearInterval(ringInterval);
      clearTimeout(voicemailTimeout);
      clearInterval(durationTimer);
    };
  }, [callStatus, ringCount]);

  const formatDuration = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={styles.callingWindow}>
      <div className={styles.callingContent}>
        <div className={styles.userAvatar}>
          <div className={`${styles.avatarPlaceholder} ${callStatus === 'ringing' ? styles.pulse : ''}`}>
            {callee[0]}
          </div>
        </div>
        
        <h2 className={styles.calleeName}>{callee}</h2>
        
        <div className={styles.status}>
          {callStatus === 'ringing' && (
            <>
              <div className={styles.ringWaves}>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
              </div>
              <p>Ringing...</p>
            </>
          )}
          {callStatus === 'calling' && (
            <>
              <div className={styles.callingDots}>
                <span>.</span><span>.</span><span>.</span>
              </div>
              <p>Calling</p>
            </>
          )}
          {callStatus === 'voicemail' && (
            <>
              <div className={styles.voicemailIcon}>📝</div>
              <p>Please leave a message</p>
            </>
          )}
        </div>

        {callStatus === 'calling' && (
          <div className={styles.duration}>{formatDuration(callDuration)}</div>
        )}

        <div className={styles.controls}>
          <button 
            className={`${styles.button} ${styles.endCall}`}
            onClick={onClose}
          >
            End Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallingWindow; 