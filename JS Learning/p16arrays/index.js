//idicies     0123456789...
const nome = "Felipe Castro";

console.log(nome[10]);
//                0        1       2
const nomes = ["Maria", "João", "Pedro"];

console.log(nomes[2]);
nomes[0] = "Marcelo"; // seleciona o primeiro item
console.log(nomes);
nomes[3] = "Felipe"; // seleciona o quarto item
console.log(nomes.length);
nomes.push("Gabrel"); // adiciona no final
console.log(nomes);
nomes.unshift("Mauro"); // adiciona em primeiro lugar
console.log(nomes);
// nomes.pop(); //remove o ultimo

const removido = nomes.pop();
const removido2 = nomes.shift();
console.log(removido, removido2);
delete nomes[2];
console.log(nomes);
