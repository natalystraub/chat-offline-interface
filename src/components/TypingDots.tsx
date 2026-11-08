export default function TypingDots() {
  return (
    <span className="flex items-center gap-1 py-1" aria-label="Digitando...">
      <span className="size-2 animate-bounce rounded-full bg-current opacity-60" />
      <span className="size-2 animate-bounce rounded-full bg-current opacity-60 [animation-delay:150ms]" />
      <span className="size-2 animate-bounce rounded-full bg-current opacity-60 [animation-delay:300ms]" />
    </span>
  )
}
