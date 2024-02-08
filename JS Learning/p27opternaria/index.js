// ? :

// (condição) ? 'valor para verdadeiro' : 'Valor para falso'
const pontuacaoUser = 1000;

const corUsuario = "Vermelho";
const corPadrao = corUsuario || "Preto";

const nivelUser = pontuacaoUser >= 1000 ? "Usuario VIP" : "Usuario normal";
console.log(nivelUser, corPadrao);

// if (pontuacaoUser >= 1000) {
//     console.log("Usuario VIP");
// } else {
//     console.log("Usuario normal");
// }
