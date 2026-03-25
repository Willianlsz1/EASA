# ⬡ SENAI · EASA — Eletrônica Aplicada a Sistemas de Automação

Aplicativo web interativo de estudos para a disciplina **Eletrônica Aplicada a Sistemas de Automação Industrial** do SENAI.

Inspirado e estruturado como extensão do [SENAI · MVF](https://willianlsz1.github.io/Senai.MVF/) (Medição de Variáveis Físicas).

---

## 📁 Estrutura do Projeto

```
easa/
├── index.html   — Estrutura HTML e páginas da aplicação
├── style.css    — Estilos, tema dark/light, componentes
├── data.js      — Dados centralizados (flashcards, quiz, changelog)
├── app.js       — Lógica da aplicação (navegação, calculadoras, quiz)
└── README.md    — Este arquivo
```

### Responsabilidade de cada arquivo

| Arquivo | O que contém | Quando editar |
|---|---|---|
| `index.html` | Estrutura HTML, sidebar, páginas de teoria | Adicionar novo módulo ou seção |
| `style.css` | Tokens de cor, layout, componentes, responsivo | Ajustes visuais e novos componentes |
| `data.js` | Flashcards, questões do quiz, changelog | **Toda adição de conteúdo** |
| `app.js` | Navegação, calculadoras, flashcards, quiz, render de updates | Nova lógica ou nova calculadora |

---

## 🗂️ Módulos de Conteúdo

| # | Módulo | Tópicos |
|---|---|---|
| 01 | Eletricidade Básica | V, I, R, P — eletrostática, eletrodinâmica |
| 02 | Circuitos CC | Série, paralelo, misto — Ohm, Kirchhoff |
| 03 | Circuitos CA | Frequência, impedância, potência, fator de potência |
| 04 | Semicondutores & Diodo | Junção PN, polarização, tipos de diodo |
| 05 | Transistores | BJT NPN/PNP, FET, chave, amplificador |
| 06 | Optoeletrônica | LED, fotodiodo, fototransistor, acoplador óptico |
| 07 | Retificadores & Fontes | Meia onda, onda completa, ponte, filtro, Zener |
| 08 | Sistemas Numéricos | Binário, hexadecimal, BCD, complemento |
| 09 | Lógica Digital | Portas lógicas, tabela da verdade, álgebra booleana |

---

## 🛠️ Ferramentas de Estudo

- **Fórmulas Visuais** — 6 fórmulas com clique interativo nas variáveis
- **Calculadora** — 6 calculadoras: Ohm, Potência, Série, Paralelo, LED, Divisor de tensão
- **Flashcards** — 17 cards com flip 3D, navegação anterior/próximo
- **Quiz** — 10 questões com feedback imediato e explicação detalhada
- **Atualizações** — Histórico de versões e roadmap de conteúdos futuros

---

## ✨ Design

- **Tema dark/light** alternável, com preferência salva por sessão
- **Estética PCB** — grid de circuito impresso, símbolos eletrônicos decorativos
- **Tipografia técnica** — `Share Tech Mono` para fórmulas, `JetBrains Mono` para dados, `Exo 2` para texto
- **Paleta** — Ciano elétrico (`#00e5ff`), verde circuito (`#76ff03`), laranja sinal (`#ff6d00`)

---

## ➕ Como Adicionar Conteúdo

### Novo flashcard
Abra `data.js` e adicione um objeto ao array `FLASHCARDS`:
```js
{
  q: 'Sua pergunta aqui?',
  a: 'Resposta curta',
  s: 'Explicação complementar mais detalhada.',
},
```

### Nova questão de quiz
Abra `data.js` e adicione um objeto ao array `QUIZ_DATA`:
```js
{
  q: 'Enunciado da questão',
  opts: ['Opção A', 'Opção B', 'Opção C', 'Opção D'],
  ans: 0,           // índice da opção correta (0 = A)
  exp: 'Explicação que aparece após responder.',
},
```

### Nova entrada no changelog
Abra `data.js` e adicione um objeto ao array `UPDATES`:
```js
{
  version: 'v1.x',
  title: 'Nome da atualização',
  date: 'Mês Ano',
  type: 'live',     // 'live' | 'upcoming' | 'planned'
  items: [
    'Item de mudança 1',
    'Item de mudança 2',
  ],
},
```

### Novo módulo de teoria
1. Adicione a entrada em `PAGE_TITLES` no `data.js`
2. Adicione o `nav-item` na sidebar do `index.html`
3. Adicione a `<div class="page" id="pg-novomodulo">` no `index.html`

---

## 📅 Roadmap

| Versão | Conteúdo planejado |
|---|---|
| v1.2 | Circuitos RC/RL — Constante de tempo τ, simulador de carga/descarga |
| v1.3 | Conversores A/D e D/A — resolução, taxa de amostragem, relação com 4–20 mA |
| v2.0 | Eletromagnetismo + Amplificadores Operacionais |

---

## 🔗 Projeto Relacionado

- **SENAI · MVF** (Medição de Variáveis Físicas): [willianlsz1.github.io/Senai.MVF](https://willianlsz1.github.io/Senai.MVF/)
