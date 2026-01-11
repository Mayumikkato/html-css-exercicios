# 🚲 Bikcraft – Projeto Responsivo

Projeto desenvolvido como parte dos meus estudos em Front-end, baseado no layout Bikcraft do curso da plataforma Origamid.

O foco deste projeto foi a implementação de um site totalmente responsivo, utilizando CSS Grid, media queries e unidades relativas, garantindo uma boa experiência em diferentes tamanhos de tela.

---

## 🎥 Preview do projeto

<p align="center">
  <img src="/bikcraft-responsivo/preview-bikcraft-responsivo.gif" alt="Preview do projeto Bikcraft responsivo">
</p>

<p align="center">
  <em>Visualização do projeto Bikcraft adaptado para desktop, tablet e mobile.</em>
</p>

---

## 📝 Objetivo do projeto

Desenvolver um site responsivo e adaptável, mantendo a identidade visual do Bikcraft e aplicando boas práticas de HTML e CSS, com foco em:
- organização do layout
- legibilidade do código
- adaptação para diferentes resoluções

---

## 📱 Responsividade

A responsividade do projeto foi construída utilizando media queries e layout flexível:

- Desktop: layout em duas colunas utilizando CSS Grid  
- Tablet (até 1000px): reorganização do conteúdo e alinhamento centralizado do subtítulo  
- Mobile (até 600px): layout em coluna única, ajustes de espaçamento e tipografia

```css
@media (max-width: 1000px) { ... }
@media (max-width: 600px) { ... }

---

## 🔧 Principais características

### HTML semântico
- Uso de tags semânticas (`header`, `nav`, `main`, `section`, `article`, `footer`)
- Estrutura clara e organizada
- Código mais acessível e fácil de manter

### CSS e layout
- Uso de CSS Grid para estruturação do layout
- Unidades relativas (`rem`) para espaçamento e tipografia
- Layout fluido e adaptável
- Código CSS organizado e escalável

### Estilo visual
- Aplicação do SVG decorativo `onda.svg`
- Destaques visuais com bordas e cores
- Alternância de background em listas
- Identidade visual consistente

### Interações
- Estados `:hover` em links e botões
- Feedback visual ao interagir com os elementos

---

## 🛠️ Tecnologias utilizadas
- HTML5
- CSS3
- Visual Studio Code

---

## 📂 Estrutura do projeto

```text
bikcraft-responsivo/
├── imagens/
│   ├── bicicleta.jpg
│   ├── bikcraft.svg
│   ├── eletrica.svg
│   ├── onda.svg
│   ├── rastreador.svg
│   └── velocidade.svg
├── index.html
├── preview-bikcraft-responsivo.gif
├── README.md
└── style.css

