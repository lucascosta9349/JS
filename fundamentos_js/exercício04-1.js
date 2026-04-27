//normalização de Dados

const user = {
    body:{
        user_name: 'lucascosata9349',
        user_email: 'lucascosta9349@gmail.com'
    }
}

function normalizeUser(user){
    const {user_name: nome, user_email: email} = user.body

    return {
        nome: nome.trim().tolowerCase(),
        email: email.trim().tolowerCase(),
        ativo: true
    }
}
