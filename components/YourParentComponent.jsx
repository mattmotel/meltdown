import React, { useState } from 'react';
import CallingWindow from './CallingWindow';

const YourParentComponent = () => {
  const [isCallActive, setIsCallActive] = useState(false);

  return (
    <div>
      {isCallActive && (
        <CallingWindow 
          callee="John Doe"
          onClose={() => setIsCallActive(false)}
        />
      )}

      <button onClick={() => setIsCallActive(true)}>
        Call
      </button>
    </div>
  );
};

export default YourParentComponent; 