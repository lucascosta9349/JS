function verificarAcesso() {
    const usuario = {
    nome: "Lucas",
    idade: 19,
    ativo: true,
    tentativasLogin: 2
    }

    if(usuario.ativo == false){
        return {acesso: false, motivo: "acesso negado.\nUsuário inativo"};
    }
    else if(usuario.tentativasLogin >= 3){
        return {acesso: false, motivo: "acesso negado.\nNúmero de tentativas de login excedido"};
    }
    else if(usuario.idade < 18){
        return {acesso: true, motivo: "entrando no modo limitado, idade insuficiente"};
    }
    else{
        return {acesso: true, motivo: "acesso concedido"};
    }
}

console.log(verificarAcesso());