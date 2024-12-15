import { Choice } from '@/types';

interface ChoiceListProps {
  choices: Choice[];
  onChoice: (choiceId: string) => void;
}

export default function ChoiceList({ choices, onChoice }: ChoiceListProps) {
  const handleClick = (choiceId: string) => {
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onChoice(choiceId);
  };

  return (
    <div className="space-y-2">
      {choices.map((choice) => (
        <button
          key={choice.id}
          onClick={() => handleClick(choice.id)}
          className="w-full p-2 text-left rounded shadow-sm text-sm
                   font-sans leading-tight
                   bg-white text-black border border-gray-300 
                   hover:bg-gray-300 transition-colors"
        >
          {choice.text}
        </button>
      ))}
    </div>
  );
} 