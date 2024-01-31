/* 
Uso de tarifa de energia:

Sistema em desenvolimento  para calcular contas de energia eletrica 
e a tarifa será calculada com base no consumo mensal de energia e 
tipo de consumidor.

Regras:
Tipos de consumidor

(residencial - Fixa de 50 centavos por KWh/hora)

(Comercial - fixa de 40 centavos por KWh/hora - Com 10% de desconto caso 
tenha um consumo superior à 1000 KWh/hora)

(industrial - fixa de 70 centavos por KWh/hora e acrecimo de 5% caso o 
consumo seja abaixo de 800 KWh/hora)

Retorno: Somente o valor da conta em reais e centavos para o tipo de 
consumirdor
Segundo retorno: tipo de consumidor invalido
*/

const consumidor = "residencial";
const gasto = 1000;
const gastoHora = 0.4;

switch (consumidor && gasto >= 1000) {
  case "residencial":
    console.log(`O consumidor deverá pagar 1000`);
    break;

  default:
    break;
}
