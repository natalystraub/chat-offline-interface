# Projeto: Chat Offline

Projeto de uma janela única de chat em que eu consigo enviar mensagens como usuário e como robo (através de um toggle no imput de mensagem)

## Aspectos Técnicos

Projeto feito em Vite + React + Typescript + Tailwind
Todos os types salvos na pasta src/types (usando type e não interface)
Todos os componentes salvos na pasta src/components
O histórico do chat deve estar em um state sem persistência

## Aspectos Visuais

A tela vai ter um fundo cinza claro
Todo o chat, incluindo o histórico de mensagem e o input, terão uma largura máxima (2xl), centralizado, em tela maior

O input será em um card com o fundo branco e altura ajustada conforme a mensagem.
O card ficará no canto inferior o tempo inteiro
Dentro do card do input, do lado direito:
-Botão de enviar que fica desabilitado quando não há meensagem digitada

Dentro do card, do lado esquerdo:

- Botão que servirá como toggle para marcar se a mensagem enviada será via usuário (e fica do lado direito do histórico) ou robo (e fica do lado esquerdo do histórico)
- Quando o toggle estiver ativado (robô) o card do input terá uma borda roxa, indicando visualmente que a mensagem enviada será enviada como robô e não usuário.
