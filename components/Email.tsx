import { Email as EmailType } from '@/types';
import ChoiceList from './ChoiceList';

interface EmailProps {
  email: EmailType;
  onChoice: (choiceId: string) => void;
}

export default function Email({ email, onChoice }: EmailProps) {
  if (!email) {
    return <div className="text-red-500">Email not found</div>;
  }

  const isGameOver = email.id === 'system_failure' || email.id === 'meltdown_ending';
  const isAWSFailure = email.content.includes("could not be delivered") && 
                       email.content.includes("AWS");

  return (
    <div className={`
      bg-white text-black rounded-lg shadow-lg overflow-hidden
      ${email.urgent ? 'border-l-4 border-red-500' : ''}
      ${isGameOver ? 'bg-black text-red-500 border border-red-500 animate-pulse' : ''}
      ${isAWSFailure ? 'border-2 border-red-600 shadow-[0_0_15px_rgba(255,0,0,0.5)]' : ''}
    `}>
      <div className={`
        ${isGameOver ? 'bg-red-900' : 'bg-[#0F6CBD]'} 
        ${isAWSFailure ? 'bg-red-700 animate-pulse' : ''}
        text-white p-3
      `}>
        <h2 className="text-xl font-semibold flex items-center">
          {isAWSFailure && <span className="animate-pulse mr-2">⚠️</span>}
          {email.subject || 'No Subject'}
          {isAWSFailure && <span className="animate-pulse ml-2">⚠️</span>}
        </h2>
      </div>
      
      <div className={`
        border-b border-gray-200 p-3 
        ${isGameOver ? 'bg-black border-red-500' : 'bg-gray-50'}
        ${isAWSFailure ? 'bg-red-50' : ''}
      `}>
        <div className="flex items-center gap-2">
          <div className={`
            w-8 h-8 rounded-full flex items-center justify-center text-white
            ${isGameOver ? 'bg-red-600' : 'bg-blue-600'}
            ${isAWSFailure ? 'bg-red-600 animate-pulse' : ''}
          `}>
            {(email.from || 'A').charAt(0).toUpperCase()}
          </div>
          <div>
            <div className={`font-semibold 
              ${isGameOver ? 'text-red-500' : ''}
              ${isAWSFailure ? 'text-red-600' : ''}
            `}>
              {email.from || 'Anonymous'}
            </div>
            <div className={`text-sm 
              ${isGameOver ? 'text-red-400' : 'text-gray-600'}
              ${isAWSFailure ? 'text-red-500' : ''}
            `}>
              {email.timestamp || 'No time'}
            </div>
          </div>
        </div>
      </div>
      
      <div className={`
        p-4 font-sans whitespace-pre-wrap
        ${isGameOver ? 'bg-black text-red-500' : ''}
        ${isAWSFailure ? 'bg-red-50 text-red-600 font-bold animate-pulse' : ''}
      `}>
        {email.content || 'No content'}
      </div>

      <div className={`
        p-4 space-y-2
        ${isGameOver ? 'bg-black' : 'bg-gray-50'}
        ${isAWSFailure ? 'bg-red-50' : ''}
      `}>
        {(email.choices || []).map((choice) => (
          <button
            key={choice.id}
            onClick={() => onChoice(choice.id)}
            className={`
              w-full p-3 text-left rounded shadow-sm
              ${isGameOver 
                ? 'bg-red-900 text-white border-red-500 hover:bg-red-800' 
                : 'bg-white border border-gray-300 hover:bg-gray-100'}
              ${isAWSFailure 
                ? 'bg-red-600 text-white border-red-400 hover:bg-red-700' 
                : ''}
              transition-colors
            `}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
} 