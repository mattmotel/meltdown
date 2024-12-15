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
  const isComposing = (email.from.includes("c.morgan") || email.from.includes("Casey")) && 
                     !email.content.includes("could not be delivered");

  if (isComposing) {
    // Outlook composing email style
    return (
      <div className={`
        bg-white text-black rounded-lg shadow-lg overflow-hidden
        ${email.urgent ? 'border-l-4 border-red-500' : ''}
      `}>
        <div className="bg-green-500 text-white p-3">
          <h2 className="text-xl font-semibold">New Message</h2>
        </div>
        
        <div className="border-b border-gray-200 p-3">
          <div className="space-y-2">
            <div className="flex items-center">
              <span className="w-20 text-gray-600">To:</span>
              <span className="text-black">{email.to}</span>
            </div>
            <div className="flex items-center">
              <span className="w-20 text-gray-600">Subject:</span>
              <span className="text-black">{email.subject}</span>
            </div>
          </div>
        </div>
        
        <div className="text-sm p-4 min-h-[200px] bg-gray-50 whitespace-pre-wrap relative">
          {email.content}
          <span className="inline-block w-0.5 h-5 bg-black ml-1 animate-[blink_1s_infinite]" />
        </div>

        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <ChoiceList choices={email.choices} onChoice={onChoice} />
        </div>
      </div>
    );
  }

  // Regular received email style (your existing style)
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
              ${isAWSFailure 
                ? 'bg-red-600 text-white border-red-400 hover:bg-red-700' 
                : isGameOver
                  ? 'bg-red-900 text-white border-red-500 hover:bg-red-800'
                  : 'bg-white text-black border border-gray-300 hover:bg-gray-300'
              }
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