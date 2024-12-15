import { Choice } from '@/types';
import { useState } from 'react';
import CallingWindow from './CallingWindow.jsx';

interface ChoiceListProps {
  choices: Choice[];
  onChoice: (choiceId: string) => void;
}

export default function ChoiceList({ choices, onChoice }: ChoiceListProps) {
  const [showCallWindow, setShowCallWindow] = useState(false);

  const handleChoice = (choice: Choice) => {
    console.log('Choice clicked:', choice);
    if (choice.action === 'SHOW_CALL_WINDOW') {
      console.log('Showing call window');
      setShowCallWindow(true);
      setTimeout(() => {
        setShowCallWindow(false);
        onChoice(choice.id);
      }, 8000);
      return;
    }
    onChoice(choice.id);
  };

  return (
    <div className="space-y-2">
      {showCallWindow && (
        <CallingWindow 
          callee="Casey"
          onClose={() => setShowCallWindow(false)}
        />
      )}
      
      {choices.map((choice) => (
        <button
          key={choice.id}
          onClick={() => handleChoice(choice)}
          className="w-full p-3 text-left border border-green-500 
                   hover:bg-green-900 hover:border-green-400 
                   transition-colors"
        >
          {choice.text}
        </button>
      ))}
    </div>
  );
} 