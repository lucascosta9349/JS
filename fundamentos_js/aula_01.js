// Tipos de variáveis
/*
var = usado em escopo de bloco (local) e tambem em escopo global. Pode ser redeclarada e reatribuída.
let = usado em escopo de bloco (local). Pode ser reatribuída.
const = usado em escopo de bloco (local). Não pode ser reatribuída e nem redeclarada.
*/
let nome = "Lucas";
let idade = 25;
let altura = 1.75;
let estudante = true;

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Altura:", altura);
console.log("Estudante:", estudante);

// Array

let array = ["lucas", "Mateus", "Joao", "Pedro", "Ana", "Julia", "Mariana"];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

array.push("Fernando");

console.log("Depois do push:", array);