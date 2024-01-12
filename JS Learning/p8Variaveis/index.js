const nome = "Felipe";
const sobrenome = "Castro Borges";
const idade = 27;
const altura = 1.78;
const peso = 119;
const ano = 2024;
let imc;
let anoNascimento;
anoNascimento = ano - idade - 1;
imc = peso / (altura * altura);

console.log(
  nome,
  sobrenome,
  "tem",
  idade,
  "anos,",
  "pesa",
  peso,
  "kg e tem",
  altura,
  "Metros de altura"
);
console.log(`O IMC de ${nome} é de ${imc}`); //Concatenação para poder usar variaveis dentro de uma string
console.log(nome, "nasceu em", ano - idade - 1);
