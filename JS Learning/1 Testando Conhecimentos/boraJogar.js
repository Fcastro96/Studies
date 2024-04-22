const horaAtual = new Date().getHours();

if (horaAtual >= 21 && horaAtual <= 22) {
  console.log("Devemos começar a jogar");
} else if (horaAtual < 21 && horaAtual > 20) {
  console.log("A hora do jogo está chegando, prepare-se");
} else if (horaAtual < 20 && horaAtual > 19) {
    console.log("Lembre-se do jogo de hoje");
} else {
    console.log("Hoje tem jogo");
}
