# Chat Offline

Janela de chat sem backend, exibida dentro de uma moldura de iPhone 16 Pro Max. A mesma pessoa envia mensagens **como usuário** ou **como robô**, alternando por um toggle no campo de entrada. Serve para simular e prototipar conversas visualmente.

O histórico vive apenas em memória (state do React) e é perdido ao recarregar a página.

## Funcionalidades

- Envio de mensagens pelo botão ou por **Enter** (**Shift+Enter** quebra linha).
- Toggle usuário/robô: mensagens de usuário ficam à direita, de robô à esquerda, e o card do input ganha borda roxa no modo robô.
- Textarea que cresce conforme o conteúdo (com limite de altura).
- Indicador de "digitando" que some após 3 segundos sem digitar.
- Auto-scroll para a última mensagem e foco devolvido ao campo após enviar.
- Acessibilidade básica: `aria-label` nos botões e foco visível, com fluxo utilizável só por teclado.

## Stack

- [Vite](https://vite.dev) + [React](https://react.dev) + TypeScript
- [Tailwind CSS](https://tailwindcss.com)
- [lucide-react](https://lucide.dev) (ícones)

## Como rodar

```bash
npm install
npm run dev
```

Outros scripts:

| Comando           | O que faz                                 |
| ----------------- | ----------------------------------------- |
| `npm run build`   | Checa os tipos e gera o build de produção |
| `npm run preview` | Serve o build localmente                  |
| `npm run lint`    | Roda o ESLint                             |

## Estrutura

```
src/
├── types/
│   ├── message.ts        # Sender e Message
│   └── components.ts     # props dos componentes
├── components/
│   ├── ChatWindow.tsx    # state das mensagens e layout do chat
│   ├── MessageList.tsx   # lista, auto-scroll e indicador de digitando
│   ├── MessageBubble.tsx # balão individual (alinhado por remetente)
│   ├── MessageInput.tsx  # card com textarea, toggle e botão de enviar
│   ├── SenderToggle.tsx  # toggle usuário/robô
│   └── TypingDots.tsx    # animação de "digitando"
└── App.tsx               # moldura do iPhone + ChatWindow
```

## Convenções

- Tipos em `src/types`, sempre com `type` (nunca `interface`).
- Componentes em `src/components`.

## Documentação

O PRD com requisitos e plano de implementação está em [docs/prd.md](docs/prd.md).
