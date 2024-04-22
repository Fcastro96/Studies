const frutas = ["Pera", "Maçã", "Uva"];

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

//for in -> lê os indices ou chaves do objeto
// for (let i in frutas) {
//     console.log(frutas[i]);
// }
const pessoa = {
  nome: "Felipe",
  sobrenome: "Castro",
  idade: 28,
};

for (let chave in pessoa) {
  console.log(`${chave}:`, pessoa[chave]);
}
