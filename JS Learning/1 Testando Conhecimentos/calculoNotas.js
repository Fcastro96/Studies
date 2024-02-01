/*
Desenvolver um sistema que vai calcular as notas de um 
aluno em uma serie de testes

Regras:
Coleta de notas - coletar um conjunto fixo de 
notas - 5 - 10 - 80 - 3000 - 5000 e cada nota varia de 0.0 à 10
Calculo da média - Coletar a média - Retornar uma linha com a média
*/

const notas = [
  7.64, 9.46, 7.54, 8.75, 9.01, 9.62, 9.45, 4.45, 4.53, 7.48, 4.74, 8.6, 7.87,
  8.79, 7.11, 8.24, 8.88, 7.23, 7.29, 9.46, 5.93, 7.44, 7.24, 8.83, 8.77, 6.68,
  7.11, 5.97, 5.28, 8.25,
];
// const numProvas = 5;

let total = 0;

for (let i = 0; i < notas.length; i++) {
  total = total + notas[i];
}
console.log(notas.length);
const media = total / notas.length;
if (media >= 7) {
  console.log(`O aluno foi aprovado com a média de ${media.toFixed(2)}`);
} else {
  console.log(
    `Aluno reprovado com média ${media.toFixed(2)}. A média para passar é 7`
  );
}

//Obg gabrel