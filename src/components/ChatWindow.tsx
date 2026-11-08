import { useState } from 'react'
import type { Message, Sender } from '../types/message'
import MessageList from './MessageList'

// TEMPORÁRIO (removido na Tarefa 5): mensagens de teste para validar a lista.
const testMessages: Message[] = [
  { id: '1', sender: 'user', text: 'Olá, tudo bem?', createdAt: 1 },
  { id: '2', sender: 'bot', text: 'Tudo bem! Como posso ajudar?', createdAt: 2 },
  { id: '3', sender: 'user', text: 'Só testando o chat.', createdAt: 3 },
]

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>(testMessages)

  function handleSend(text: string, sender: Sender) {
    const message: Message = {
      id: crypto.randomUUID(),
      sender,
      text,
      createdAt: Date.now(),
    }
    setMessages((current) => [...current, message])
  }

  // TEMPORÁRIO (removido na Tarefa 5): verificação via log.
  console.log(handleSend)

  return (
    <div className="mx-auto flex h-screen w-full max-w-2xl flex-col">
      <div className="flex-1 overflow-y-auto p-4">
        <MessageList messages={messages} />
      </div>
      <div className="p-4">{/* MessageInput entra na Tarefa 5 */}</div>
    </div>
  )
}
