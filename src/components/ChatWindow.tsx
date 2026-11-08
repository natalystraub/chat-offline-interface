import { useState } from 'react'
import type { Message, Sender } from '../types/message'
import MessageInput from './MessageInput'
import MessageList from './MessageList'

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([])

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
    <div className="mx-auto flex h-screen w-full max-w-2xl flex-col">
      <div className="flex-1 overflow-y-auto p-4">
        <MessageList messages={messages} />
      </div>
      <div className="p-4"><MessageInput onSend={handleSend} /></div>
    </div>
  )
}
