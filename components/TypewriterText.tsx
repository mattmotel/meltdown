import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  content: string;
  typingSpeed?: number;  // milliseconds per character
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  content, 
  typingSpeed = 2  // default speed
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < content.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + content[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timer);
    }
  }, [content, currentIndex, typingSpeed]);

  return (
    <div className="relative">
      {displayedText}
      <span 
        className="inline-block w-[2px] h-4 bg-black ml-1" 
        style={{ animation: 'cursor-blink 1s step-end infinite' }}
      />
    </div>
  );
};

export default TypewriterText; 