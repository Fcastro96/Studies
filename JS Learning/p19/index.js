/*
Primitivos (imutaveis) - string, number, boolean, undefined, 
null, (bigint, symbol)


Referência (Mutaveis) - array, object, function - Passodos por referência
*/

// let a = [1, 2, 3];
// let b = [...a];
// let c = b;
// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// a.push("Felipe");
// console.log(a, b, c);

const a = {
  nome: "Felipe",
  sobrenome: "Castro",
};
const b = { ...a };
a.nome = "Mauro";
console.log(a);
console.log(b);
