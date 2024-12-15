import React, { useState } from 'react';
import CallingWindow from './CallingWindow';

const CallButton: React.FC = () => {
  const [isCallActive, setIsCallActive] = useState(false);

  const handleCall = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsCallActive(true);
  };

  return (
    <>
      <button onClick={handleCall}>
        Call Jessica
      </button>

      {isCallActive && (
        <CallingWindow 
          callee="Jessica"
          onClose={() => setIsCallActive(false)}
        />
      )}
    </>
  );
};

export default CallButton; 