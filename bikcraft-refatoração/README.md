# 🚲 Bikcraft – Refatoração

Projeto desenvolvido como parte dos meus **estudos em Front-end**, a partir do exercício **Bikcraft – Posicionamento** do curso da plataforma **Origamid**.

Este projeto consiste em uma **refatoração do exercício original**, com foco em:
- melhoria da **semântica do HTML**
- organização e evolução do **CSS**
- uso de **boas práticas de acessibilidade**
- uso de **novas interações visuais**

> 📌 Projeto com fins educacionais, utilizado para praticar refatoração e evolução de código existente.

---

## 🎥 Preview do projeto

<p align="center">
  <img src="/bikcraft-refatoração/preview-bikcraft-refatorado.gif" alt="Preview do projeto Bikcraft refatorado">
</p>

<p align="center">
  <em>Vídeo demonstrando o layout final do projeto Bikcraft após a refatoração e adição de interações.</em>
</p>

---

## 📝 Objetivo da refatoração

O objetivo deste exercício foi **refatorar o projeto Bikcraft original**, mantendo o layout base, mas aplicando melhorias estruturais e visuais conforme as especificações propostas.

---

## 🔧 Principais alterações realizadas

### 🧱 HTML semântico e acessibilidade
- Substituição de `<div>` por **tags semânticas** (`header`, `nav`, `main`, `section`, `article`, `footer`)
- Uso de listas semânticas (`ul` e `li`)
- Aplicação de `aria-label` quando pertinente
- Estrutura mais clara e acessível

### 🎨 CSS e tipografia
- Conversão de unidades de **PX para REM**, principalmente na tipografia
- Melhor organização e legibilidade do CSS
- Substituição de elementos decorativos por **pseudo-elementos (`::before`)**

### 🖌️ Estilo e identidade visual
- Modificação do background do subtítulo
- Aplicação do padrão SVG **`onda.svg`**
- Borda esquerda vermelha nas seções de vantagens
- Borda vermelha nos links do menu
- Botão com vermelho escuro (`#900`)
- Itens ímpares da lista de vantagens com background `#f7f7f7`

### 🖱️ Interações
- Adição de estados `:hover` em links e botões
- Melhoria da experiência visual ao interagir com os elementos

---

## 📚 Contexto do exercício

Este exercício faz parte do curso de **HTML e CSS para Iniciantes** da **Origamid** e tem como foco a prática de **refatoração e boas práticas** em HTML e CSS.

- Refatoração de código existente
- Uso correto de semântica HTML
- Acessibilidade básica
- Boas práticas de CSS
- Interações visuais com pseudo-classes
- Separação entre estrutura e apresentação

---

## 🛠️ Tecnologias utilizadas

- HTML5  
- CSS3  
- Visual Studio Code  

---

## 📂 Estrutura do projeto

```text
bikcraft-refatoracao/
├── imagens/
│   ├── bicicleta.jpg
│   ├── bikcraft.svg
│   ├── eletrica.svg
│   ├── rastreador.svg
│   ├── velocidade.svg
│   └── onda.svg
├── index.html
├── preview-bikcraft-refatorado.gif
├── README.md
└── style.css
