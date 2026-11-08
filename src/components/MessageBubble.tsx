import type { MessageBubbleProps } from '../types/components'

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isBot = message.sender === 'bot'

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
      <p
        className={`max-w-[80%] rounded-2xl px-4 py-2 whitespace-pre-wrap break-words ${
          isBot ? 'bg-purple-100 text-gray-900' : 'bg-blue-600 text-white'
        }`}
      >
        {message.text}
      </p>
    </div>
  )
}
