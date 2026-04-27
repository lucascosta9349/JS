//EXERCÍCIO DESTRUTURING
console.log("EXERCÍCIO 1");
console.log("-------------------");
const pessoa = {
    Nome: "lucas",
    idade: 20
}

const {Nome, idade} = pessoa
console.log(Nome);
console.log(idade);
console.log("\n");


//exercício 2
console.log("EXERCÍCIO 2");
console.log("-------------------");
const produto = {
    nome: "teclado",
    preco: 150
}
const {nome: nomeProduto, preco: precoProduto} = produto
console.log(nomeProduto);
console.log(precoProduto);
console.log("\n");

//exercício 3
console.log("EXERCÍCIO 3");
console.log("-------------------");
const user = {
    name: "Lucas"
}

const {name: meuNome, ativo = true} = user  
console.log(meuNome);
console.log(ativo); 
console.log("\n");

//exercício 4   
console.log("EXERCÍCIO 4");
console.log("-------------------");
const request = {
    body:{
        user_name: "lucas",
        user_email: "lucas@gmail.com"
    }
}

const {user_name: nome, user_email: email} = request.body
console.log(nome);
console.log(email);
console.log("\n");

//exercício 5
console.log("EXERCÍCIO 5");
console.log("-------------------");
console.log(`já foi feito no exercício 4.
Fazer em uma linha só acessar o body e renomear as variáveis com o destructuring
`);

//exercício 6
console.log("EXERCÍCIO 6");
console.log("-------------------"); 
const numeros = [10, 20, 30];
const [a, b] = numeros;
console.log(a);
console.log(b);
console.log("\n");

//exercício 7
console.log("EXERCÍCIO 7");
console.log("-------------------");
const numeros2 = [10, 20, 30];
const [primeiro, , terceiro] = numeros2;
console.log(primeiro);
console.log(terceiro);
console.log("\n"); 

//exercício 8
console.log("EXERCÍCIO 8");
console.log("-------------------");
const request2 = {
    body: {
        user_name: "LUCAS",
        user_email: "LUCASCOSTA@EMAIL.COM"
    }
}
const {user_name: userName, user_email: userEmail, ativo2 = true} = request2.body
console.log(userName.trim().toLowerCase());
console.log(userEmail.trim().toLowerCase());
console.log(ativo2);