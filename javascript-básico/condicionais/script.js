// Testa quais valores viram true ou false
// ao serem convertidos para boolean.
// const elemento = document.querySelector('body');
// const elementoNaoExiste = document.querySelector('article');
// console.log(Boolean(elemento));
// console.log(Boolean(elementoNaoExiste));

// const texto = 'JavaScript';
// const textoVazio = '';
// console.log(Boolean(texto));
// console.log(Boolean(textoVazio));

// const numero = 20;
// const numeroZero = 0;
// console.log(Boolean(numero));
// console.log(Boolean(numeroZero));

// console.log(Boolean(undefined));
// console.log(Boolean(null));

//--------------------------------------------------

//----EXERCÍCIO:
// 1 - Crie um botão com nome de Adicionar.
// 2 - Adicione uma função (somar) ao clique desse botão
// 3 - Só adicione a função se o botão existir na tela.
// 4 - Crie uma div com o texto 0 dentro dela: <div>0</div>
// 5 - Na função do botão, pegue o total que estiver dentro da div e adicione + 1.
// 6 - Mude o valor da div para o novo total.
// 7 - Mude o valor apenas se o total for menor que 10.
// 8 - Quando não for mais possível adicionar, mostre uma mensagem no console.

// Resolução do exercício:
const botao = document.querySelector('button');

function somar() {
  const div = document.querySelector('div');
  const total = Number(div.innerText) + 1;
 
  if (total < 10) {
    div.innerText = total;
  } else {
    console.log("Não é possível adicionar mais")
  }
}

if (botao) {
  botao.addEventListener("click", somar);
}
