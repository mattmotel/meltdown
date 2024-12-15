import React from 'react';
import styles from './CallingWindow.module.css';

const CallingWindow = ({ callee, onClose, status, ringCount }) => {
  return (
    <div className={styles.callingWindow}>
      <div className={styles.callingContent}>
        <div className={styles.userAvatar}>
          <div className={`${styles.avatarPlaceholder} ${status === 'ringing' ? styles.pulse : ''}`}>
            {callee[0]}
          </div>
        </div>
        
        <h2 className={styles.calleeName}>{callee}</h2>
        
        <div className={styles.status}>
          {status === 'ringing' && (
            <>
              <div className={styles.callingDots}>
                <span>.</span><span>.</span><span>.</span>
              </div>
              <p>Ringing... {ringCount}/4</p>
            </>
          )}
          {status === 'voicemail' && (
            <>
              <div className={styles.voicemailIcon}>📝</div>
              <p>Please leave a message after the beep...</p>
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