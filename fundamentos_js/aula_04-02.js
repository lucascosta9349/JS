//DESTRUCTURING

//SEM DESTRUCTURING
const pessoa = {
    nome: 'João',
    idade: 30,
    cidade: 'São Paulo'
};

const nome = pessoa.nome;
const idade = pessoa.idade;
const cidade = pessoa.cidade;
console.log(nome); // João
console.log(idade); // 30
console.log(cidade); // São Paulo

//COM DESTRUCTURING
const pessoa2 = {
    nome: 'Maria',
    idade: 25,
    cidade: 'Rio de Janeiro'
};
const { nome: nome2, idade: idade2, cidade: cidade2} = pessoa2;
console.log(nome2);
console.log(idade2);
console.log(cidade2);  

/*o exemplo acima é o modo simplificado de usar o destructuring, mas também dá pra usar 
com objetos aninhados*/
const pessoa3 = {
    nome: 'Carlos',
    idade: 40,
    cidade: 'Belo Horizonte',
    endereco: {
        rua: 'Rua A',
        numero: 123
    }
};
const { nome:nome3, idade:idade3, cidade:cidade3, endereco: { rua, numero } } = pessoa3;

//Vamos entender destructuring com vetor (array) em JavaScript de forma prática.
/*
📦 Exemplo básico
const numeros = [10, 20, 30];

const [a, b, c] = numeros;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

👉 Aqui:
- a pega o primeiro valor
- b pega o segundo
- c pega o terceiro

----------------------------------------
🎯 Pegar só alguns valores
const numeros = [10, 20, 30];

const [primeiro, , terceiro] = numeros;

console.log(primeiro); // 10
console.log(terceiro); // 30
👉 Pulamos o segundo valor com ,

---------------------------------------
🔄 Trocar valores de variáveis
let x = 1;
let y = 2;

[x, y] = [y, x];

console.log(x); // 2
console.log(y); // 1

---------------------------------------
🧩 Com valor padrão
const numeros = [10];

const [a, b = 50] = numeros;

console.log(a); // 10
console.log(b); // 50
👉 Se não existir valor, usa o padrão

⚠️ Erro comum
const numeros = [10, 20];

const [a, b, c] = numeros;

console.log(c); // undefined
👉 Não dá erro, mas vem undefined

----------------------------------------
📚 Usando REST (pegar o resto)
const numeros = [10, 20, 30, 40];

const [primeiro, ...resto] = numeros;

console.log(primeiro); // 10
console.log(resto); // [20, 30, 40]

-----------------------------------------
💡 Exemplo mais real (função)
function pegarCoordenadas() {
  return [100, 200];
}

const [x, y] = pegarCoordenadas();

console.log(x, y);
*/
