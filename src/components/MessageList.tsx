import { useEffect, useRef } from 'react'
import type { MessageListProps } from '../types/components'
import MessageBubble from './MessageBubble'

export default function MessageList({ messages }: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  if (messages.length === 0) {
    return <p className="text-center text-gray-400">Nenhuma mensagem ainda.</p>
  }

  return (
    <div className="flex flex-col gap-2">
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
      <div ref={bottomRef} />
    </div>
  )
}
