const pessoa = {
  nome: "Felipe",
  sobrenome: "Castro",
  idade: 28,
  endereco: {
    rua: "Rua martins de Oliveira",
    numero: 683,
  },
};

// Atribuição via desestruturação
const { nome, sobrenome, endereco: {rua, numero} } = pessoa;
console.log(nome, sobrenome, rua, numero);
