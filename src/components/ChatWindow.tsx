import { useState } from 'react'
import type { Message, Sender } from '../types/message'
import MessageInput from './MessageInput'
import MessageList from './MessageList'

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([])
  const [typingSender, setTypingSender] = useState<Sender | null>(null)

  function handleSend(text: string, sender: Sender) {
    const message: Message = {
      id: crypto.randomUUID(),
      sender,
      text,
      createdAt: Date.now(),
    }
    setMessages((current) => [...current, message])
  }

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex-1 overflow-y-auto p-4">
        <MessageList messages={messages} typingSender={typingSender} />
      </div>
      <div className="p-4">
        <MessageInput onSend={handleSend} onTypingChange={setTypingSender} />
      </div>
    </div>
  )
}
