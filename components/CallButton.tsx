import React, { useState } from 'react';
import CallingWindow from './CallingWindow';

const CallButton: React.FC = () => {
  const [isCallActive, setIsCallActive] = useState(false);

  const handleCall = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsCallActive(true);
  };

  // ... rest of component
};

export default CallButton; 