/* Escrever um codigo que recebe a 
idade de uma pessoa e 
dizer se a Pessoa é 
maior ou menor de idade.
*/

// const idade = 19;

// if (idade >= 18) {
//   console.log("Você é maior de idade");
// } else console.log("Você é menor de idade");

//Escrever um codigo que recebe um número e dizer se é positivo, negativo ou zero

// const numero = -153;

// if (numero > 0) {
//   console.log("Seu número é positivo");
// } else if (numero == 0) {
//   console.log("O número é zero");
// } else console.log("Seu numero é negativo");

//Escreva um número e diga se é impar ou par

// const numero = 4;

// if (numero % 2 == 0) {
//   console.log("O numero é par");
// } else {
//   console.log("O numero é impar");
// }

/* 
Faça uma aplicação onde um aluno vai 
fazer uma aplicação de 0 a 100
E ele precisa de no minimo 65 para passar
*/

// const nota = 65;

// if (nota >= 65) {
//     console.log("Você passou no teste");
// } else {
//     console.log("Você falhou");
// }

/* Faça uma aplicação que recebe o numero 1 e o 
numero 2 e diga qual o maior
Ou se eles são iguais */

// const num1 = -5;
// const num2 = -8;

// if (num1 < num2) {
//   console.log(`${num2} é maior que ${num1}`);
// } else if (num2 < num1) {
//   console.log(`${num2} é menor que ${num1}`);
// } else { console.log("Os numero são iguais");
// }

//Criar um algoritimo que simula um carro parado no semaforo
//O motorista só pode passar pelo semaforo caso esteja verde e na primeira marcha. ele passa o semaforo
//Caso o carro esteja na primeira marcha e o sinal for diferente de verde o motorista toma uma multa
//Caso o semaforo esteja vermelho e a marcha esteja na neutra o carro está parado

// const marcha = 1;
// const semaforo = "vermelho";

// if ((semaforo == "vermelho" || semaforo == "amarelo") && marcha >= 1) {
//   console.log("Multa");
// } else if (semaforo == "verde" && marcha != 1) {
//   console.log("Multa");
// } else if (semaforo == "vermelho" && marcha == 0) {
//   console.log("O carro está parado");
// } else {
//     console.log("Você passou no sinal");
// }

/* 
Num hotel, você está hospedado no andar Y. 
Para chegar num determinado andar você precisa pegar um elevador.
O elevador tem a capacidade de até 3 pessoas.
Caso o andar onde você está hospedado seja acima do quinto, você só entra no elevador 
se tiver no maximo 1 pessoa
Do quinto para baixo o elevador pode comportar a capacidade maxima
*/

// const andar = 8;
// const elevador = 2;

// if (andar >= 5 && elevador >= 2) {
//   console.log("Não entrou. A capacidade máxima de 2 pessoas ja foi atingida");
// } else if (andar >= 6 && elevador <= 1) {
//   console.log("Você entrou no elevador");
// } else if (andar <= 5 && elevador >= 3) {
//   console.log("Não entrou. A capacidade máxima de 3 pessoas ja foi atingida");
// } else if (andar <= 5 && elevador <= 2) {
//   console.log("Você entrou no elevador");
// }

/* 
Sistema de controle de acesso para um laboratorio
Regras: Os pesquisadores podem acessar o laboratorio das 8 da manhã até 20
durante os dias uteis.
Estudantes só podem acessar o laboratorio das 10 da manhã até as 18 também
durante os dias uteis
Supervisores tem acesso ao laboratorio em qualquer hora e qualquer dia
Em fds somente os supervisores podem acessar o laboratorio
capacidade maxima de 5 pessoas no laboratorio
*/
/*
Acesso negado: Limite de pessoas atingido
Acesso permitido: Supervisor
Acesso negado: Acesso permitido apenas para supervisores nos finais de semana
Acesso permitido: Pesquisador dentro do horario
Acesso permitido: Estudante dentro do Horario
Acesso negado: Fora do horario permitido
*/

const cargo = "Supervisor";
const funcionarios = 5;
const horario = 10;
const dia = 5;

if (funcionarios >= 6) {
  console.log("Acesso negado: Limite de pessoas atingido");
} else if (cargo == "Supervisor") {
  console.log("Acesso permitido: Supervisor");
} else if (dia >= 6 && (cargo == "Pesquisador" || cargo == "Estudante")) {
  console.log(
    "Acesso negado: Acesso permitido apenas para supervisores nos finais de semana"
  );
} else if (horario >= 8 && horario <= 20 && cargo == "Pesquisador") {
  console.log("Acesso permitido: Pesquisador dentro do horario");
} else if (horario >= 10 && horario <= 18 && cargo == "Estudante") {
  console.log("Acesso permitido: Estudante dentro do horario");
} else if ((horario < 8 || horario > 20) && cargo === "Pesquisador") {
  console.log("Acesso negado: Pesquisador fora do horario permitido");
} else if ((horario < 10 || horario > 18) && cargo === "Estudante") {
  console.log("Acesso negado: Estudante fora do horario permitido");
}
