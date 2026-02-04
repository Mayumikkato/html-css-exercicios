//---------------------------------------------------------------
// ---Ao clicar no botão (.botao), adiciona/remove a classe "ativar"---
// ---no elemento (.texto), mostrando ou escondendo via CSS.---

// const botao = document.querySelector('.botao');

// function mostrar() {
//   const texto = document.querySelector('.texto');
//   texto.classList.toggle('ativar');
// }

// botao.addEventListener('click', mostrar);
//----------------------------------------------------------------

// ---Captura as coordenadas (X,Y) do mouse ao mover na tela---
// ---e exibe no console.---

// const larguraTela = window.innerWidth;

// function coordenadaMouse(event) {
//   const coordenadas = {
//     x: event.x,
//     y: event.y,
//   };
//   console.log(coordenadas);
// }

// window.addEventListener("mousemove", coordenadaMouse);
//----------------------------------------------------------------

// ---Exibe no console a posição vertical do scroll (scrollY)---
// ---sempre que a página é rolada.---

// function scroll() {
//   console.log(window.scrollY);
// }
// window.addEventListener("scroll", scroll);
//----------------------------------------------------------------

//----Exercício:
// 1 - Crie um círculo com uma div de width: 16px, height: 16px e background: #999;
// 2 - Adicione ao window uma função que ocorre ao "mousemove";
// 3 - Na função mude as propriedades top e left do círculo com base no mouse.
// 4 - Você pode usar elemento.style.propriedade para mudar o CSS diretamente.

//RESOLUÇÃO (menos otimizado, extenso) do exercício:
function seguirMouse(event) {
  const x = event.x;
  const y = event.y;
  const circulo = document.querySelector('#circulo');
  circulo.style.top = y + "px";
  circulo.style.left = x + "px";
}

window.addEventListener("mousemove", seguirMouse);

//RESOLUÇÃO (mais otimizado) do exercício:

const circulo = document.querySelector("#circulo");

function seguirMouse(event) {
  circulo.style.top = event.y + "px";
  circulo.style.left = event.x + "px";
}

window.addEventListener("mousemove", seguirMouse);
