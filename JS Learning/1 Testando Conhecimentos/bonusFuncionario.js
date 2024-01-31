/*
Desenvolver um sistema para calcular o bonus de vendas para funcionarios
de uma loja.
Esse bonus é calculado com base no total de vendas e tempo de experiencia
desse funcionario.
Regras:

Experiencia: 2 tipos de funcionario
(Iniciante - 2 anos de experiencia)
(Experiente - 2 anos ou mais)

Calculo de bonus:

(iniciante - vendas de até 1000 reais bonus de 3% sobre a venda)
(iniciante - vendas acima de 1000 reais bonus de 5% sobre a venda)
(experiente - Bonus de 10% sobre a venda independente do valor)
*/

const funcionario = "experiente";
const venda = 500;

if (venda <= 1000 && funcionario == "iniciante") {
  console.log(
    `O funcionario iniciante vai receber um bonus de 3% (R$ ${
      (venda * 3) / 100
    } reais) do valor da venda`
  );
} else if (venda > 1000 && funcionario == "iniciante") {
  console.log(
    `O funcionario iniciante vai receber um bonus de 5% (R$ ${
      (venda * 5) / 100
    } reais)`
  );
} else if (venda > 0 && funcionario === "experiente") {
  console.log(
    `O funcionario experiente vai receber um bonus de 10% (R$ ${
      (venda * 10) / 100
    } reais)`
  );
}
