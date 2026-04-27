const buscarUsuario = (id) => {
 return console.log("entre com seu nome de usuário.");
}


function findUser(user){
    console.log("Buscando usuário...");
    setTimeout(() => {
        console.log("Usuário encontrado!\n");
        console.log("Welcome, Lucas!");
    }, 2000);
    
}

main(
    buscarUsuario()
    
)