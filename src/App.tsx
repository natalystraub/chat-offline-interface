import ChatWindow from './components/ChatWindow'

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      {/* Moldura do iPhone 16 Pro Max (440x956): a altura acompanha a tela e a largura segue a proporção */}
      <div className="relative aspect-[440/956] h-[calc(100vh-6rem)] max-h-[800px] rounded-[3.5rem] border-[10px] border-gray-900 bg-white shadow-2xl">
        <div
          className="absolute top-3 left-1/2 z-10 h-7 w-28 -translate-x-1/2 rounded-full bg-gray-900"
          aria-hidden="true"
        />
        <div className="h-full overflow-hidden rounded-[2.9rem] pt-12">
          <ChatWindow />
        </div>
      </div>
    </div>
  )
}
