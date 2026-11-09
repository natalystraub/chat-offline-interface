import { useEffect, useRef, useState } from 'react';
import SenderToggle from './SenderToggle';
import type { MessageInputProps } from '../types/components';

const TYPING_TIMEOUT_MS = 3000;

export default function MessageInput({ onSend, onTypingChange }: MessageInputProps) {
  const [text, setText] = useState('');
  const [isBot, setIsBot] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const canSend = text.trim().length > 0;


  // Avisa o chat quem está "digitando". Volta a null com o campo vazio ou
  // depois de TYPING_TIMEOUT_MS sem digitar (cada tecla reinicia a contagem).
  useEffect(() => {
    if (!canSend) {
      onTypingChange(null);
      return;
    }
    onTypingChange(isBot ? 'bot' : 'user');
    const timer = setTimeout(() => onTypingChange(null), TYPING_TIMEOUT_MS);
    return () => clearTimeout(timer);
  }, [text, canSend, isBot, onTypingChange]);

  // Ajusta a altura do textarea ao conteúdo (o limite é o max-h do CSS).
  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [text]);

  function send() {
    if (!canSend) return;
    onSend(text.trim(), isBot ? 'bot' : 'user');
    setText('');
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) {
      event.preventDefault();
      send();
    }
  }

  return (
    <div
      className={`flex items-end gap-2 rounded-2xl border-2 bg-white p-3 shadow-sm ${
        isBot ? 'border-purple-600' : 'border-gray-300'
      }`}
    >
      <SenderToggle isBot={isBot} onToggle={() => setIsBot((current) => !current)} />
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(event) => setText(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Digite uma mensagem..."
        rows={1}
        className="max-h-40 flex-1 resize-none overflow-y-auto outline-none"
      />
      <button
        type="button"
        onClick={send}
        disabled={!canSend}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        Enviar
      </button>
    </div>
  );
}
