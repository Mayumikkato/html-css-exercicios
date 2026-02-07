// Percorre o array e adiciona cada item como <li> dentro do body.
const lista = ['JavaScript', 'HTML', 'CSS', 'PHP'];

const body = document.querySelector('body');

for (let index = 0; index < lista.length; index++) {
  body.innerHTML += "<li>" + lista[index] + "</li>";
}

//---------------------------------------------------------
const lista2 = ['JavaScript', 'HTML', 'CSS'];

// retorna o total
const total = lista2.length;

// remove o último
const ultimo = lista2.pop();

// remove o primeiros
const primeiro = lista2.shift();

// adiciona ao final
lista2.push('PHP');

console.log(lista2);

//----------------------------------------------------------

//----Exercício:
// 1 - Adicione uma navegação (nav) com 3 links: ./, ./produto.html e ./contato.html
// 2 - Crie as páginas produto.html e contato.html com o mesmo html de index.html
// 3 - Selecione os links na navegação.
// 4 - Para cada link execute uma função (ativarLink);
// 5 - Na função, extraia o href do elemento.
// 6 - Verifique se o href é igual ao URL da página (document.location.href)
// 7 - Se for igual mude o backgroundColor para black e a color para white do link.

//----Resolução do exercício:
// Obs:
// Destaca o link do menu que corresponde à página atual,
// comparando a URL do link com a URL da página.

const links = document.querySelectorAll("nav a");

function ativarLink(link) {
  const href = link.href;
  const url = document.location.href;

  if (href === url) {
    link.style.backgroundColor = "black";
    link.style.color = "white";
  }
}

links.forEach(ativarLink);

