import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  content: string;
  typingSpeed?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  content, 
  typingSpeed = 1.25
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < content.length) {
      const currentChar = content[currentIndex];
      
      // Add natural pauses after punctuation
      let delay = typingSpeed;
      if (['.', '!', '?'].includes(currentChar)) {
        delay = 300; // Longer pause after sentences
      } else if ([',', ';'].includes(currentChar)) {
        delay = 150; // Medium pause after clauses
      } else if (currentChar === ' ') {
        delay = 50; // Small pause after words
      } else {
        // Random variation in typing speed
        delay = typingSpeed + Math.random() * 10;
      }

      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + currentChar);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [content, currentIndex, typingSpeed]);

  return (
    <div className="relative">
      {displayedText}
      <span 
        className="inline-block w-[2px] h-3 bg-black ml-1" 
        style={{ animation: 'cursor-blink 1s step-end infinite' }}
      />
    </div>
  );
};

export default TypewriterText; 