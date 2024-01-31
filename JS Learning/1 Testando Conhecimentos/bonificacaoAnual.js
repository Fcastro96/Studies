/*
Sistema para bonificação anual, e assim essa bonificação é 
baseada no tempo de empresa tambem no cargo e em performace.

regras:

Tempo de Servico: menos de 1 ano não tem bonificação, 1 a 3 anos 5% do 
salario anual, mais de 3 anos 10% do salario anual.

cargo:  
gerente ( adicional de bonificação de 20% sobre o 
valor que ja foi calculado do tempo de serviço)

analista ( == 10%)

performace: se performance for classificada como excelente recebe 
bonificação adicional de 15% encima de TUDO.
se for Boa , 5% encima de TUDO


*/

const tempo = 3;
const cargo = "gerente";
const salarioAno = 10000;
const performance = "excelente";

let bonusCargo;
let bonusAnual;
let bonusPerformance;

if (tempo < 1 && cargo == "gerente" && performance == "boa") {
  console.log(
    `O gerente deve receber 20% de bonus de cargo e mais 5% performance (${
      (bonusCargo = salarioAno + (salarioAno * 20) / 100) +
      (bonusCargo * 5) / 100
    })`
  );
} else if (tempo < 1 && cargo == "gerente" && performance == "excelente") {
  console.log(
    `O gerente deve receber 20% de bonus de cargo e mais 15% performance (${
      (bonusCargo = salarioAno + (salarioAno * 20) / 100) +
      (bonusCargo * 15) / 100
    })`
  );
} else if (tempo < 1 && cargo == "analista" && performance == "boa") {
  console.log(
    `O analista deve receber 10% de bonus de cargo e mais 5% performance (${
      (bonusCargo = salarioAno + (salarioAno * 10) / 100) +
      (bonusCargo * 5) / 100
    })`
  );
} else if (tempo < 1 && cargo == "analista" && performance == "excelente") {
  console.log(
    `O analista deve receber 10% de bonus de cargo e mais 15% performance (${
      (bonusCargo = salarioAno + (salarioAno * 10) / 100) +
      (bonusCargo * 15) / 100
    })`
  );
} else if (
  tempo >= 1 &&
  tempo <= 3 &&
  cargo == "gerente" &&
  performance == "boa"
) {
  console.log(
    `O gerente deve receber um bonus de 5% pelo tempo de serviço, mais 20% pelo bonus de cargo e mais 5% pela boa performance (${
      (bonusAnual = salarioAno + (salarioAno * 5) / 100) +
      ((bonusCargo = bonusAnual + (bonusAnual * 20) / 100) - bonusAnual) +
      ((bonusPerformance = bonusCargo + (bonusCargo * 5) / 100) - bonusCargo)
    })`
  );
} else if (
  tempo >= 1 &&
  tempo <= 3 &&
  cargo == "gerente" &&
  performance == "excelente"
) {
  console.log(
    `O gerente deve receber um bonus de 5% pelo tempo de serviço, mais 20% pelo bonus de cargo e mais 15% pela boa performance (${
      (bonusAnual = salarioAno + (salarioAno * 5) / 100) +
      ((bonusCargo = bonusAnual + (bonusAnual * 20) / 100) - bonusAnual) +
      ((bonusPerformance = bonusCargo + (bonusCargo * 15) / 100) - bonusCargo)
    })`
  );
} else if (
  tempo >= 1 &&
  tempo <= 3 &&
  cargo == "analista" &&
  performance == "boa"
) {
  console.log(
    `O analista deve receber um bonus de 5% pelo tempo de serviço, mais 10% pelo bonus de cargo e mais 5% pela boa performance (${
      (bonusAnual = salarioAno + (salarioAno * 5) / 100) +
      ((bonusCargo = bonusAnual + (bonusAnual * 10) / 100) - bonusAnual) +
      ((bonusPerformance = bonusCargo + (bonusCargo * 5) / 100) - bonusCargo)
    })`
  );
} else if (
  tempo >= 1 &&
  tempo <= 3 &&
  cargo == "analista" &&
  performance == "excelente"
) {
  console.log(
    `O analista deve receber um bonus de 5% pelo tempo de serviço, mais 10% pelo bonus de cargo e mais 15% pela boa performance (${
      (bonusAnual = salarioAno + (salarioAno * 5) / 100) +
      ((bonusCargo = bonusAnual + (bonusAnual * 10) / 100) - bonusAnual) +
      ((bonusPerformance = bonusCargo + (bonusCargo * 15) / 100) - bonusCargo)
    })`
  );
} else if (tempo > 3 && cargo == "gerente" && performance == "boa") {
  console.log(
    `O gerente deve receber um bonus de 10% pelo tempo de serviço, mais 20% pelo bonus de cargo e mais 5% pela boa performance (${
      (bonusAnual = salarioAno + (salarioAno * 10) / 100) +
      ((bonusCargo = bonusAnual + (bonusAnual * 20) / 100) - bonusAnual) +
      ((bonusPerformance = bonusCargo + (bonusCargo * 5) / 100) - bonusCargo)
    })`
  );
} else if (tempo > 3 && cargo == "gerente" && performance == "excelente") {
  console.log(
    `O gerente deve receber um bonus de 10% pelo tempo de serviço, mais 20% pelo bonus de cargo e mais 15% pela boa performance (${
      (bonusAnual = salarioAno + (salarioAno * 10) / 100) +
      ((bonusCargo = bonusAnual + (bonusAnual * 20) / 100) - bonusAnual) +
      ((bonusPerformance = bonusCargo + (bonusCargo * 15) / 100) - bonusCargo)
    })`
  );
} else if (tempo > 3 && cargo == "analista" && performance == "boa") {
  console.log(
    `O analista deve receber um bonus de 10% pelo tempo de serviço, mais 10% pelo bonus de cargo e mais 5% pela boa performance (${
      (bonusAnual = salarioAno + (salarioAno * 10) / 100) +
      ((bonusCargo = bonusAnual + (bonusAnual * 10) / 100) - bonusAnual) +
      ((bonusPerformance = bonusCargo + (bonusCargo * 5) / 100) - bonusCargo)
    })`
  );
} else if (tempo > 3 && cargo == "analista" && performance == "excelente") {
  console.log(
    `O analista deve receber um bonus de 10% pelo tempo de serviço, mais 10% pelo bonus de cargo e mais 15% pela boa performance (${
      (bonusAnual = salarioAno + (salarioAno * 10) / 100) +
      ((bonusCargo = bonusAnual + (bonusAnual * 10) / 100) - bonusAnual) +
      ((bonusPerformance = bonusCargo + (bonusCargo * 15) / 100) - bonusCargo)
    })`
  );
} else {
  console.log("Ninguem recebe porra nenhuma");
}
