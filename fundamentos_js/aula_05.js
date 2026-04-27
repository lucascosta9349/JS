/*Módulo 5 - Escopo e contexto

### 📌 O que aprender

- Escopo de bloco
- Escopo de função
- `this`
- Arrow vs function

### 🧠 Por que isso importa

Erro de escopo derruba API inteira.

O que é escopo?
Escopo é o que delimita a visibilidade e a acessibilidade de variáveis, funções e objetos em um programa. Ele define onde as variáveis e funções podem ser acessadas e utilizadas.

Tipos de escopo:
1. Escopo global: Variáveis e funções declaradas no escopo global estão disponíveis em todo o programa.
2. Escopo de função: Variáveis e funções declaradas dentro de uma função estão disponíveis apenas dentro dessa função.
3. Escopo de bloco: Variáveis declaradas com `let` ou `const` dentro de um bloco (como um loop ou uma estrutura condicional) estão disponíveis apenas dentro desse bloco.
*/

/*arrow function x function tradicional
- Arrow functions não possuem seu próprio `this`, elas herdam o `this` do contexto onde foram definidas.
- Funções tradicionais possuem seu próprio `this`, que pode variar dependendo de como a função é chamada.
*/

/*
function soma(a, b) {
  return a + b;
}

const somaArrow = (a, b) => a + b;

console.log(soma(2, 3)); // 5
console.log(somaArrow(2, 3)); // 5
*/

/*
declaração de função
function minhaFuncao() {
  // código da função
} 

- function expression são formas de declarar funções em JavaScript. 
A principal diferença entre elas é que as funções declaradas com a palavra-chave `function`
são "hoisted", ou seja, podem ser chamadas antes de sua declaração no código, 
enquanto as funções atribuídas a variáveis (function expressions) não são hoisted
e só podem ser chamadas após sua definição.

exemplo:
console.log(minhaFuncao()); // "Olá, mundo!"

function minhaFuncao() {
  return "Olá, mundo!";
}

essa é uma função declarada com a palavra-chave `function`,
e pode ser chamada antes de sua declaração devido ao hoisting.

agora uma function expression:
console.log(minhaFuncao()); // TypeError: minhaFuncao is not a function

var minhaFuncao = function() {
  return "Olá, mundo!";
};

essa é uma função atribuída a uma variável, e não pode ser chamada antes de sua definição,
pois não é hoisted. Se tentarmos chamar `minhaFuncao` antes de sua definição, 
obteremos um erro. Por ser uma variável o que sofre hoisting é somente a declaração, 
o conteúdo da variável não é elevado ao topo, ou seja,
a variável `minhaFuncao` é declarada, mas seu valor (a função) não é atribuído até a linha
onde é definida.
*/