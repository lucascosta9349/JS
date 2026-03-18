function validarCPF(CPF, erro){
    // verifica se o CPF tem 11 caracteres
    if(CPF.length !== 11){
        erro.push("CPF deve conter 11 caracteres");
    }

    //verificar se o CPF contém apenas números
    if(!/^\d+$/.test(CPF)){
        erro.push("CPF deve conter apenas números");
    }
}

function validarSenha(senha, erro){
    if(senha.length < 8){
        erro.push("A senha deve conter pelo menos 8 caracteres");
    }

    if(!/\d/.test(senha)){
        erro.push("A senha deve conter pelo menos um número");
    }
}

function validarEmail(email, erro){
     // verifica se contém "@"
    if (!email.includes("@")) {
        erro.push("Email inválido: deve conter @");
    }
}

function validarCadastro(usuario){
    const erro = [];
    validarCPF(usuario.CPF, erro);
    validarEmail(usuario.email, erro);
    validarSenha(usuario.senha, erro);   
    
    if(erro.length > 0){
        return {valido: false, erros: erro};
    }else if(erro.length === 0){   
        return {valido: true, erros: "none"};
    }else{
        return {valido: false, erros: "ocorreu um erro inesperado"};
    }
}

function main(){
    let resultado;
    const usuario = {
        CPF: '12345678910',
        senha: 'senha123',
        email: 'lucascosta@gmail.com'
    }

    resultado = validarCadastro(usuario);
    console.log(resultado);
}
main();