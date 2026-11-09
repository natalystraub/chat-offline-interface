import type { SenderToggleProps } from '../types/components';
import { Bot, User } from 'lucide-react';

export default function SenderToggle({ isBot, onToggle }: SenderToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isBot}
      aria-label="Enviar como robô"
      className={`rounded-lg px-1.5 py-1.5 text-sm font-medium ${
        isBot ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'
      }`}
    >
      {isBot ? <Bot /> : <User />}
    </button>
  );
}
