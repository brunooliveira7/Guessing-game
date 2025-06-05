# 🎯 Guessing Game

Um jogo de adivinhação de palavras (estilo "Forca") desenvolvido com **React + Vite**, onde o jogador deve descobrir uma palavra com base em uma dica. A cada tentativa, o jogo mostra se a letra está correta ou não, marcando as letras utilizadas com cores visuais intuitivas.

## 🧠 Sobre o Projeto

Este projeto foi criado como um jogo interativo para treinar conceitos de React como:

- Componentização
- Manipulação de estado (`useState`, `useEffect`)
- Comunicação entre componentes
- Validação de entradas e controle de fluxo de jogo
- Estilização com CSS Modules

## 🔍 Como Jogar

- Você recebe uma **dica** relacionada à palavra secreta.
- Digite uma **letra** por vez no campo de palpite e confirme.
- Letras corretas aparecem nos espaços correspondentes.
- Letras incorretas são registradas abaixo.
- O jogo termina quando:
  - Você acerta todas as letras da palavra (**Vitória**)
  - Ou atinge o número máximo de tentativas (**Derrota**)

## 🧩 Funcionalidades

- ✅ Geração aleatória de palavras e dicas.
- ✅ Validação de letras únicas por tentativa.
- ✅ Exibição visual de letras corretas (verde) e incorretas (laranja).
- ✅ Contador de tentativas baseado no tamanho da palavra.
- ✅ Contador de pontos por acerto.
- ✅ Botão para reiniciar o jogo com confirmação.
- ✅ Componentes reutilizáveis (Input, Button, Header, Tip, Letter, LettersUsed).

## 🚀 Tecnologias

- React
- Vite
- TypeScript
- CSS Modules


