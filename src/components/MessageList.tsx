import { useEffect, useRef } from 'react';
import type { MessageListProps } from '../types/components';
import MessageBubble from './MessageBubble';
import TypingDots from './TypingDots';

export default function MessageList({ messages, typingSender }: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typingSender]);

  const hasMessages = messages.length > 0;

  if (!hasMessages) {
    return <p className="text-center text-gray-400">Nenhuma mensagem ainda.</p>;
  }

  return (
    <div className="flex flex-col gap-2">
      {messages.map((message) => (
        <MessageBubble key={message.id} sender={message.sender}>
          {message.text}
        </MessageBubble>
      ))}
      {typingSender && (
        <MessageBubble sender={typingSender}>
          <TypingDots />
        </MessageBubble>
      )}
      <div ref={bottomRef} />
    </div>
  );
}
