import { Choice } from '@/types';

interface ChoiceListProps {
  choices: Choice[];
  onChoice: (choiceId: string) => void;
}

export default function ChoiceList({ choices, onChoice }: ChoiceListProps) {
  return (
    <div className="space-y-2">
      {choices.map((choice) => (
        <button
          key={choice.id}
          onClick={() => onChoice(choice.id)}
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