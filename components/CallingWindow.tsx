import React, { useState, useEffect } from 'react';
import styles from './CallingWindow.module.css';

export interface CallingWindowProps {
  callee: string;
  onClose: () => void;
  status?: 'ringing' | 'voicemail';
  ringCount?: number;
}

const CallingWindow = ({ callee, onClose }: CallingWindowProps) => {
  const [callStatus, setCallStatus] = useState<'ringing' | 'holding' | 'transferring' | 'voicemail'>('ringing');
  const [audioPlayer, setAudioPlayer] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Start hold sequence after 2.5 seconds
    const holdTimer = setTimeout(() => {
      if (callStatus === 'ringing') {
        setCallStatus('holding');
        // Initialize audio player for hold music
        const audio = new Audio('/audio/phone-holding-music-163387.mp3');
        audio.loop = true;
        audio.play();
        setAudioPlayer(audio);

        // After 8 seconds of hold music, transfer
        setTimeout(() => {
          setCallStatus('transferring');
          // After 3 more seconds, go to voicemail
          setTimeout(() => {
            if (audioPlayer) {
              audioPlayer.pause();
            }
            setAudioPlayer(null);
            setCallStatus('voicemail');
          }, 3000);
        }, 8000);
      }
    }, 2500);

    return () => {
      clearTimeout(holdTimer);
      if (audioPlayer) {
        audioPlayer.pause();
        setAudioPlayer(null);
      }
    };
  }, [callStatus, audioPlayer]);

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
          {callStatus === 'holding' && (
            <>
              <div className={styles.holdingAnimation}>
                <span>♪</span><span>♫</span><span>♪</span>
              </div>
              <p>Please hold. Your call is important to us.</p>
            </>
          )}
          {callStatus === 'transferring' && (
            <>
              <div className={styles.transferAnimation}>
                <div className={styles.transferDot}></div>
              </div>
              <p>Transferring to HR department...</p>
            </>
          )}
          {callStatus === 'voicemail' && (
            <>
              <div className={styles.voicemailIcon}>📝</div>
              <p>Please leave a message after the tone.</p>
            </>
          )}
        </div>

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