//manipulação de objeto
//CRUD em objetos

let pessoa = {
    nome: "none",
    idade: 0,
}

//CRUD
//Create
pessoa.sexo = "masculino";
pessoa.etnia = "parda";
pessoa.profissao = "desenvolvedor";

//Read
console.log(pessoa.sexo);
console.log(pessoa.etnia);
console.log(pessoa.profissao);

//Update
pessoa.nome = "lucas";
pessoa.nome = "lucas costa";
pessoa.idade = 25;
console.log("\n\nupdate\n", pessoa);

//Delete
delete pessoa.etnia;
delete pessoa.profissao;
console.log("\nApós o delete\n", pessoa);
