import type { ReactNode } from 'react'
import type { Message, Sender } from './message'

export type MessageBubbleProps = {
  sender: Sender
  children: ReactNode
}

export type MessageListProps = {
  messages: Message[]
  typingSender: Sender | null
}

export type MessageInputProps = {
  onSend: (text: string, sender: Sender) => void
  onTypingChange: (sender: Sender | null) => void
}

export type SenderToggleProps = {
  isBot: boolean
  onToggle: () => void
}
