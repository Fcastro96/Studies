//object
// const pessoa1 = {
//   nome: "Felipe",
//   sobrenome: "Castro",
//   idade: 27,
// };

// const pessoa2 = {
//     nome: "Mauro",
//     sobrenome: "Maio",
//     idade: 27,
//   };

// function criarPessoas(nome, sobrenome, idade) {
//   return {
//     nome,
//     sobrenome,
//     idade,
//   };
// }
// const pessoa1 = criarPessoas("Felipe", "Castro", 27);
// const pessoa2 = criarPessoas("Mauro", "Maio", 27);
// const pessoa3 = criarPessoas("Gabriel", "Emerson", 26);
// const pessoa4 = criarPessoas("Alvin", "Campos", 37);
// const pessoa5 = criarPessoas("Rafael", "Cardoso", 42);
// console.log(`${pessoa1.nome} e ${pessoa2.sobrenome}`);

const pessoa1 = {
  nome: "Felipe",
  sobrenome: "Castro",
  idade: 27,

  fala() {
    console.log(`A minha idade atual é ${this.idade}`);
  },

  adcIdade() {
    this.idade++;
  },
};

pessoa1.fala();
pessoa1.adcIdade();
pessoa1.fala();
pessoa1.adcIdade();
pessoa1.fala();
