# PRD — Chat Offline

## 1. Visão geral

Janela única de chat, sem backend, em que a mesma pessoa envia mensagens **como usuário** ou **como robô**, alternando por um toggle no campo de entrada. Serve para simular/prototipar conversas visualmente. O histórico vive apenas em memória (state do React) e é perdido ao recarregar a página.

## 2. Objetivos

- Enviar mensagens alternando entre os papéis "usuário" e "robô".
- Distinguir visualmente os papéis (lado do histórico e borda roxa no input).
- Interface limpa, centralizada e responsiva.

## 3. Fora de escopo

- Persistência (localStorage, IndexedDB, backend).
- Respostas automáticas / integração com IA.
- Autenticação, múltiplas conversas, edição/exclusão de mensagens.
- Testes automatizados (a definir, ver questões em aberto).

## 4. Stack e convenções

- Vite + React + TypeScript + Tailwind (já configurados).
- Tipos em `src/types`, usando `type` (nunca `interface`).
- Componentes em `src/components`.
- Histórico em `useState` no componente raiz, sem persistência.

## 5. Requisitos funcionais

| ID | Requisito |
|----|-----------|
| RF1 | O usuário digita uma mensagem e a envia pelo botão de enviar. |
| RF2 | O botão de enviar fica desabilitado quando não há texto digitado (considerando texto sem espaços em branco nas pontas). |
| RF3 | Um toggle à esquerda dentro do card define o remetente: desativado = usuário, ativado = robô. |
| RF4 | Mensagens de usuário aparecem alinhadas à **direita** do histórico; mensagens de robô, à **esquerda**. |
| RF5 | Com o toggle em modo robô, o card do input exibe borda roxa. |
| RF6 | Após enviar, o input é limpo; o modo do toggle é mantido. |
| RF7 | O histórico exibe as mensagens em ordem cronológica (mais recentes embaixo). |
| RF8 | Pressionar **Enter** no campo envia a mensagem (mesma regra do botão: não envia se vazia). **Shift+Enter** insere quebra de linha. |

## 6. Requisitos visuais

- Fundo da tela: cinza claro.
- Histórico e input: largura máxima `2xl`, centralizados em telas maiores.
- Card do input: fundo branco, **altura ajustável** ao conteúdo (textarea auto-resize), fixo no canto inferior da tela o tempo todo.
- Dentro do card: toggle (esquerda) e botão de enviar (direita).
- Borda roxa no card quando em modo robô; borda neutra no modo usuário.
- Mensagens no histórico: balões diferenciados por papel (cor/alinhamento).

## 7. Modelo de dados

```ts
// src/types/message.ts
export type Sender = 'user' | 'bot'

export type Message = {
  id: string
  sender: Sender
  text: string
  createdAt: number
}
```

## 8. Estrutura de componentes

```
src/
├── types/
│   └── message.ts
├── components/
│   ├── ChatWindow.tsx      # layout geral: histórico + input, largura 2xl
│   ├── MessageList.tsx     # lista, scroll
│   ├── MessageBubble.tsx   # balão individual (alinhamento por sender)
│   ├── MessageInput.tsx    # card com textarea, toggle e enviar
│   └── SenderToggle.tsx    # botão toggle usuário/robô
└── App.tsx                 # state `messages`, handler de envio
```

## 9. Plano de implementação (tarefas em ordem progressiva)

### Tarefa 1 — Base do projeto e tipos
- Limpar boilerplate do Vite (`App.tsx`, CSS de exemplo, assets não usados).
- Criar `src/types/message.ts` com `Sender` e `Message`.
- Aplicar fundo cinza claro e `min-h-screen` no layout raiz.
- **Pronto quando:** app roda com tela cinza vazia, sem erros de lint/tsc.

### Tarefa 2 — State do histórico em `App`
- `useState<Message[]>([])` e função `handleSend(text, sender)` que cria a mensagem (id via `crypto.randomUUID()`, `createdAt: Date.now()`).
- **Pronto quando:** a função adiciona mensagens ao state (verificável temporariamente via log).

### Tarefa 3 — Layout do chat (`ChatWindow`)
- Container centralizado com `max-w-2xl`, ocupando a altura da tela, com área de histórico rolável e área do input embaixo.
- **Pronto quando:** a estrutura fica centralizada em telas largas e ocupa a largura toda em telas pequenas.

### Tarefa 4 — Balões e lista de mensagens
- `MessageBubble`: `user` à direita, `bot` à esquerda, com estilos distintos.
- `MessageList`: renderiza as mensagens em ordem; estado vazio simples.
- **Pronto quando:** mensagens de teste de ambos os papéis aparecem nos lados corretos.

### Tarefa 5 — Card de input (`MessageInput`)
- Card branco, fixo embaixo, com `textarea` que cresce conforme o conteúdo (limite máximo de altura com scroll interno).
- Botão de enviar à direita, desabilitado sem texto.
- Enviar limpa o campo e chama `handleSend`.
- Enter envia a mensagem (`preventDefault` no `onKeyDown`); Shift+Enter quebra linha. Ignorar Enter durante composição de IME (`isComposing`).
- **Pronto quando:** é possível enviar mensagens como usuário, pelo botão ou pelo Enter, e vê-las no histórico.

### Tarefa 6 — Toggle usuário/robô (`SenderToggle`)
- Botão à esquerda dentro do card, com estado visual claro (ícone/rótulo) e `aria-pressed`.
- Estado `isBot` em `MessageInput`; define o `sender` enviado.
- Borda roxa no card quando `isBot` ativo.
- **Pronto quando:** alternar o toggle muda a borda e o lado em que a mensagem aparece.

### Tarefa 7 — Refinamentos de UX
- Auto-scroll para a última mensagem ao enviar.
- Foco devolvido ao textarea após enviar.
- Acessibilidade básica: `aria-label` nos botões, foco visível.
- **Pronto quando:** fluxo completo é utilizável só com teclado.

### Tarefa 8 — Revisão final
- Rodar `npm run lint` e `npm run build` sem erros.
- Checar responsividade (mobile e desktop) e mensagens longas (quebra de palavras/URLs).
- Atualizar o `README.md` com uma descrição curta do projeto.

## 10. Critérios de aceite gerais

- Todos os RF1–RF8 atendidos.
- Histórico some ao recarregar (sem persistência).
- Nenhum `interface` no código; tipos em `src/types`; componentes em `src/components`.
- `npm run lint` e `npm run build` passam.

## 11. Questões em aberto

1. Mensagens devem exibir horário? *(assumido: não)*
2. Robô e usuário devem ter avatar/rótulo? *(assumido: não, só cor e lado)*
3. Quer testes automatizados (Vitest + Testing Library)? *(assumido: não)*
4. Precisa de botão para limpar o histórico? *(assumido: não)*
