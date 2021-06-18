let titulo = document.createElement('h1');
let pai1 = document.querySelector('header');
pai1.appendChild(titulo).innerHTML = "Enrolados"


let pai2 = document.querySelector('main');
let div1 = document.createElement('div');
let div2 = document.createElement('div');

pai2.appendChild(div1);
pai2.appendChild(div2);

let titulo2 = document.createElement('h2');
let paragrafo = document.createElement('p');

div1.appendChild(titulo2).innerHTML = "Sinopse do filme Enrolados";
div2.appendChild(paragrafo).innerHTML = "O bandido mais procurado do reino, Flynn Rider, se esconde em uma torre e imediatamente se torna prisioneiro de Rapunzel, residente de longa data do local. Dona de cabelos dourados mágicos com 21 metros de comprimento, ela está trancada há anos e quer, desesperadamente, a liberdade. A adolescente determinada faz um acordo com o rapaz, e, juntos, partem para uma aventura emocionante."