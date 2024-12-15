import React, { useState } from 'react';
import CallingWindow from './CallingWindow';

const CallButton = () => {
  const [isCallActive, setIsCallActive] = useState(false);

  const handleCall = (e) => {
    e.preventDefault(); // Prevent any default handling
    e.stopPropagation(); // Stop event bubbling
    setIsCallActive(true);
  };

  return (
    <>
      <button onClick={handleCall}>
        Call Casey
      </button>

      {isCallActive && (
        <CallingWindow 
          callee="Casey"
          onClose={() => setIsCallActive(false)}
        />
      )}
    </>
  );
};

export default CallButton; 