console.log(`Trabalhando com listas`)
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`)

listaDeDestinos.push(`curituba`)//adicionando um item na lista
console.log('Destinos Possíveis')
//console.log(salvador, saoPaulo,rioDeJaneiro);
console.log(listaDeDestinos)
console.log(listaDeDestinos.length); 
listaDeDestinos.splice(1, 1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[0]);

