/* ═══════════════════════════════════════════════════════════
   SENAI · EASA — data.js
   Dados centralizados da aplicação.
   Toda adição de conteúdo (cards, questões) acontece aqui.
═══════════════════════════════════════════════════════════ */

/* ── TÍTULOS DAS PÁGINAS ─────────────────────────────────── */
const PAGE_TITLES = {
  'dashboard':    'Dashboard · EASA',
  'fund-eletrica':'Módulo 01 · Eletricidade Básica',
  'cc':           'Módulo 02 · Circuitos CC',
  'ca':           'Módulo 03 · Circuitos CA',
  'semicond':     'Módulo 04 · Semicondutores',
  'transistor':   'Módulo 05 · Transistores',
  'opto':         'Módulo 06 · Optoeletrônica',
  'retificador':  'Módulo 07 · Retificadores',
  'numeracao':    'Módulo 08 · Sistemas Numéricos',
  'logica':       'Módulo 09 · Lógica Digital',
  'formulas':     '★ Fórmulas Visuais',
  'calc':         '🧮 Calculadora',
  'flashcards':   '🃏 Flashcards',
  'quiz':         '📝 Quiz',
  'updates':      '📋 Atualizações',
};

/* ── FLASHCARDS ──────────────────────────────────────────── */
const FLASHCARDS = [
  // Fundamentos
  {
    q: 'Qual é a unidade de medida da resistência elétrica?',
    a: 'Ohm (Ω)',
    s: 'Em homenagem a Georg Simon Ohm (1789–1854).',
  },
  {
    q: 'O que é a 1ª Lei de Kirchhoff (LCK)?',
    a: 'Soma das correntes = 0',
    s: 'Correntes que entram num nó = correntes que saem.',
  },
  {
    q: 'O que é a 2ª Lei de Kirchhoff (LTK)?',
    a: 'Soma das tensões em uma malha = 0',
    s: 'Base para análise de malhas em circuitos CC complexos.',
  },
  // Semicondutores
  {
    q: 'Qual é a tensão de barreira do diodo de silício?',
    a: '≈ 0,7 V',
    s: 'Germânio ≈ 0,3V. Abaixo desse valor o diodo não conduz.',
  },
  {
    q: 'O que é dopagem de semicondutor?',
    a: 'Adição de impurezas para modificar condutividade',
    s: 'Tipo P: impurezas trivalentes (boro). Tipo N: pentavalentes (fósforo).',
  },
  // Transistores
  {
    q: 'O que significa β (beta) do transistor BJT?',
    a: 'Ganho de corrente: β = IC / IB',
    s: 'Típico: 50 a 500. Relaciona corrente da carga com sinal de controle.',
  },
  {
    q: 'Quais são as três regiões de operação do BJT?',
    a: 'Corte · Ativa · Saturação',
    s: 'Corte = chave aberta. Saturação = chave fechada. Ativa = amplificação.',
  },
  {
    q: 'Qual a diferença entre saída NPN e PNP de CLP?',
    a: 'NPN: drena corrente (sink). PNP: fornece corrente (source).',
    s: 'NPN conecta ao GND quando ativa. PNP conecta ao VCC quando ativa.',
  },
  // Optoeletrônica
  {
    q: 'Qual componente realiza isolamento galvânico?',
    a: 'Acoplador óptico (optocoupler)',
    s: 'Isola eletricamente circuito de controle do circuito de campo.',
  },
  {
    q: 'Como calcular o resistor limitador do LED?',
    a: 'R = (VCC − VLED) / ILED',
    s: 'Exemplo: (5V − 2V) / 15mA = 200Ω. Sempre calcule para não queimar o LED!',
  },
  // CA
  {
    q: 'O que é Fator de Potência (FP)?',
    a: 'FP = cos(φ) = P / S',
    s: 'FP = 1 é ideal. FP baixo indica reatância — penalidade na conta industrial.',
  },
  {
    q: 'Qual a fórmula da reatância indutiva?',
    a: 'XL = 2πfL',
    s: 'Aumenta proporcionalmente com a frequência. Indutor de 100mH a 60Hz: XL ≈ 37,7Ω.',
  },
  {
    q: 'Qual a fórmula da reatância capacitiva?',
    a: 'XC = 1 / (2πfC)',
    s: 'Diminui com frequência (oposto ao indutor). Em CC (f=0): XC → infinito.',
  },
  {
    q: 'O que é impedância (Z)?',
    a: 'Z = √(R² + X²) — oposição total em CA',
    s: 'Inclui resistência (R) e reatância (X). Unidade: Ohm. Z = V/I em CA.',
  },
  // Retificadores
  {
    q: 'O que é Ripple em uma fonte retificada?',
    a: 'Variação residual de tensão CA após retificação',
    s: 'Fator ripple = Vripple(ef) / Vdc. Menor com filtros maiores.',
  },
  // Digital
  {
    q: 'Converta 1010₂ para decimal.',
    a: '10',
    s: '1×8 + 0×4 + 1×2 + 0×1 = 8 + 0 + 2 + 0 = 10.',
  },
  {
    q: 'Qual é o resultado da porta NAND com A=1 e B=1?',
    a: '0',
    s: 'NAND = NOT(A AND B). AND(1,1) = 1 → NOT(1) = 0.',
  },
];

/* ── QUIZ ────────────────────────────────────────────────── */
const QUIZ_DATA = [
  {
    q: 'Em um circuito com V = 12V e R = 240Ω, qual é a corrente I?',
    opts: ['0,05 A', '0,5 A', '50 mA', 'Ambas a 1ª e 3ª'],
    ans: 3,
    exp: 'I = V/R = 12/240 = 0,05A = 50mA. As opções 1 e 3 são equivalentes!',
  },
  {
    q: 'Qual componente é usado para ISOLAMENTO GALVÂNICO entre CLP e campo?',
    opts: ['Transistor BJT', 'Resistor de pull-up', 'Acoplador óptico', 'Capacitor eletrolítico'],
    ans: 2,
    exp: 'O acoplador óptico (optocoupler) usa LED + fototransistor fisicamente isolados.',
  },
  {
    q: 'O transistor NPN no CLP opera como chave. Quando a base recebe sinal lógico 1:',
    opts: ['Coletor desconecta da carga', 'Transistor satura — chave fechada', 'Base bloqueia o coletor', 'Emissor eleva tensão'],
    ans: 1,
    exp: 'Com IB suficiente o BJT satura: VCE ≈ 0,2V — equivale a chave fechada.',
  },
  {
    q: 'A porta lógica NAND com entradas A=0 e B=1 resulta em:',
    opts: ['0', '1', 'Indeterminado', 'Igual ao AND'],
    ans: 1,
    exp: 'NAND = NOT(A AND B). AND(0,1) = 0 → NOT(0) = 1.',
  },
  {
    q: 'Numa fonte em ponte (4 diodos), qual é o fator ripple sem filtro?',
    opts: ['1,21', '0,48', '0,25', '2,00'],
    ans: 1,
    exp: 'Ponte retificadora com onda completa: ripple = 0,48. Meia onda = 1,21.',
  },
  {
    q: 'Dois resistores de 100Ω em paralelo resultam em:',
    opts: ['200 Ω', '50 Ω', '100 Ω', '25 Ω'],
    ans: 1,
    exp: 'Req = (R1×R2)/(R1+R2) = (100×100)/200 = 50Ω. Paralelo sempre < o menor.',
  },
  {
    q: 'Qual o valor decimal de 1111 0000 em binário?',
    opts: ['240', '248', '224', '252'],
    ans: 0,
    exp: '128+64+32+16+0+0+0+0 = 240. Nibble alto = 0xF = 15 × 16 = 240.',
  },
  {
    q: 'XL de um indutor de 50mH a 50Hz é:',
    opts: ['15,7 Ω', '3,14 Ω', '31,4 Ω', '157 Ω'],
    ans: 0,
    exp: 'XL = 2π×f×L = 2π×50×0,05 = 15,71Ω.',
  },
  {
    q: 'Qual resistor usar com LED (VCC=5V, VLED=2V, ILED=20mA)?',
    opts: ['100Ω', '150Ω', '200Ω', '50Ω'],
    ans: 1,
    exp: 'R = (5−2) / 0,02 = 150Ω. Use sempre o valor comercial mais próximo acima.',
  },
  {
    q: 'O Fator de Potência de uma carga puramente resistiva é:',
    opts: ['0', '0,5', '0,707', '1'],
    ans: 3,
    exp: 'FP = cos(φ). Carga resistiva: defasagem φ = 0° → cos(0°) = 1. FP ideal!',
  },
];

/* ── CHANGELOG / ATUALIZAÇÕES ───────────────────────────── */
const UPDATES = [
  /* Versões planejadas (mais recentes no topo) */
  {
    version: 'v2.0',
    title: 'Eletromagnetismo & Amplificadores Operacionais',
    date: 'Planejado',
    type: 'planned',
    items: [
      'Módulo 10 — Eletromagnetismo: campo magnético, Lei de Faraday, indutores na automação',
      'Módulo 11 — Amplificadores Operacionais: comparador, inversor, somador, integrador',
      'Fórmulas visuais de XL, XC e filtros passivos RC/RL',
      'Calculadora de filtro passa-baixa e passa-alta com frequência de corte',
      '12 novos flashcards cobrindo op-amp e eletromagnetismo',
      '8 novas questões de quiz: circuitos RL/RC e aplicações de op-amp',
    ],
  },
  {
    version: 'v1.3',
    title: 'Conversores A/D · D/A & Processamento de Sinais',
    date: 'Planejado',
    type: 'planned',
    items: [
      'Módulo — Conversores A/D e D/A: resolução, fundo de escala, taxa de amostragem',
      'Relação com sinais 4–20 mA dos transmissores industriais',
      'Cálculo de resolução de ADC (ex: ADC de 12 bits em escala 0–10V)',
      'Novas calculadoras: resolução ADC, tensão de referência',
    ],
  },
  {
    version: 'v1.2',
    title: 'Circuitos RC/RL — Constante de Tempo τ',
    date: 'Em breve',
    type: 'upcoming',
    items: [
      'Expansão do módulo CA com análise temporal de circuitos RC e RL',
      'Fórmula visual interativa de τ = R×C e τ = L/R',
      'Simulador de carga/descarga de capacitor com gráfico animado',
      'Aplicação prática: constante de tempo em filtros de CLPs e sensores',
      '6 novos flashcards e 4 novas questões de quiz',
    ],
  },
  /* Versão atual */
  {
    version: 'v1.0',
    title: 'Lançamento — Base Completa',
    date: 'Mar 2025',
    type: 'live',
    items: [
      '9 módulos de teoria: Eletricidade Básica, CC, CA, Semicondutores, Transistores, Optoeletrônica, Retificadores, Sistemas Numéricos, Lógica Digital',
      'Fórmulas visuais interativas: Ohm, Potência, Série, Paralelo, Impedância, β BJT',
      '6 calculadoras: Lei de Ohm, Potência, Série, Paralelo, Resistor LED, Divisor de tensão',
      '17 flashcards com flip 3D em 6 categorias',
      '10 questões de quiz com feedback e explicação',
      'Dark mode e Light mode com referências à estética de circuito impresso (PCB)',
    ],
  },
];
