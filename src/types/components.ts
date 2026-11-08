import type { Message, Sender } from './message'

export type MessageBubbleProps = {
  message: Message
}

export type MessageListProps = {
  messages: Message[]
}

export type MessageInputProps = {
  onSend: (text: string, sender: Sender) => void
}
