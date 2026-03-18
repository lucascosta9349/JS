//Arrays
/* O que aprender?
- O que são arrays
- Como criar um array
- Acessar elementos de um array
- Métodos comuns de arrays:
    map
    filter
    reduce
    find
*/

//declaração de um array
const frutas = ['maçã', 'banana', 'laranja'];
//acessando elementos de um array
console.log(frutas[0]); // maçã
console.log(frutas[1]); // banana
console.log(frutas[2]); // laranja     

//método map
// O método map é usado para criar um novo array a partir de um array existente, aplicando uma função a cada elemento do array original.
//exemplo: transformar todas as frutas em maiúsculo

const frutasEmMaiusculo = frutas.map(n => n.toUpperCase());
console.log(frutasEmMaiusculo);

// o processo interno que o map faz é o seguinte:
const frutasEmMaiusculo1 = [];
for (let i = 0; i < frutas.length; i++) {
    frutasEmMaiusculo1.push(frutas[i].toUpperCase());
}