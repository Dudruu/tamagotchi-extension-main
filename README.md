
# 🐾 Tamagotchi Extension

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Chrome Extension](https://img.shields.io/badge/Chrome_Extension-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)
![Status](https://img.shields.io/badge/Status-Finalizado-brightgreen?style=for-the-badge)

Um projeto desenvolvido por quatro alunos do **Instituto Federal do Sul de Minas – Campus Pouso Alegre** para a disciplina de **Projeto Integrador**.  
O objetivo é recriar, em ambiente web, a experiência de um **pet virtual** no estilo **Tamagotchi**, integrando elementos de interação, cuidado e entretenimento.

---

## 🎮 Visão Geral

O **Tamagotchi Extension** é um jogo simples e divertido que simula o cotidiano de cuidar de um pet virtual.  
O jogador pode realizar ações como **alimentar**, **limpar**, **brincar** e **monitorar o humor e energia** do seu mascote.

A aplicação foi desenvolvida utilizando **tecnologias web puras**, e pode ser instalada e executada diretamente como **extensão no navegador**.

---

## 🚀 Tecnologias Utilizadas

- 🧱 **HTML5** – estrutura e páginas do jogo  
- 🎨 **CSS3** – design, layout e elementos visuais  
- ⚙️ **JavaScript (ES6)** – lógica do jogo e interações  
- 🧩 **Manifest v3** – estrutura de extensão Chrome  
- 🖼️ **Assets personalizados autorais** – imagens, ícones e fontes  

---

## 🧩 Estrutura do Projeto

ttamagotchi-extension-main/
│
├── index.html
├── miniGames/
│   ├── forca/
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   ├── guessNum/
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   ├── pedPapTes/
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   ├── quiz/
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   └── rooms/
│       ├── cozinha.html
│       ├── banheiro.html
│       └── fliperama.html
│
├── javascript/
│   └── script.js
├── css/
│   └── style.css
├── images/
├── fontes/
└── manifest.json

---

## 💻 Como Executar
A) Instalar como extensão no Google Chrome (recomendado)

1. Faça o download do projeto:
   - Pelo GitHub: clique em **Code ▾ → Download ZIP** e extraia, **ou**
   - Pelo terminal:
     ```bash
     git clone https://github.com/Dudruu/tamagotchi-extension-main.git
     ```

2. Abra o Google Chrome e acesse:
    chrome://extensions/


3. No canto superior direito, **ative o Modo do desenvolvedor** (Developer mode).

4. Clique em **"Carregar sem compactação"** (Load unpacked).

5. Na janela de seleção, navegue até a pasta do projeto extraído/clonado e **selecione a pasta raiz** (onde está o `manifest.json`) — ex: `tamagotchi-extension-main/`.

6. A extensão aparecerá na lista. Você pode:
- Fixar o ícone na barra (pin) e clicar para abrir, **ou**
- Abrir `index.html` diretamente no navegador (veja opção B caso prefira).

7. Se surgir algum erro relacionado ao `manifest.json`, confira se o arquivo existe na pasta selecionada e se a versão do Chrome suporta **Manifest V3** (Chrome 88+).

---

### B) Executar localmente (abrir página / servidor HTTP)

#### B.1 Abrir diretamente (para testes rápidos)
- Abra o arquivo `index.html` com o navegador (duplo clique ou `Abrir com -> Google Chrome`).
- OBS: Alguns recursos (ex.: requests fetch locais, armazenamento específico de extensões) podem funcionar diferente fora do contexto de extensão. Se algo não funcionar, use B.2 ou A.

#### B.2 Rodar com um servidor HTTP simples (recomendado para comportamento consistente)
- Abra um terminal na pasta do projeto (a pasta que contém `index.html`) e rode:

- Com Python 3:
 ```bash
 python3 -m http.server 8000
 ```
 Depois abra no navegador:
 ```
 http://localhost:8000/index.html
 ```

- Com Node.js (http-server):
 ```bash
 npm install -g http-server
 http-server -p 8000
 ```
 Depois abra:
 ```
 http://localhost:8000/index.html
 ```

---


## Contribuidores

Este projeto foi desenvolvido por:  

- [Thiago Andrade](https://github.com/thiago0410) — vá até o perfil  
- [Nycolle Pascoal](https://github.com/NycollePascoa) — vá até o perfil  
- [Breno Barbosa](https://github.com/brenouubarbosa) — vá até o perfil  
- [Eduardo Lima](https://guthub.com/Dudruu ) - vá até o perfil
