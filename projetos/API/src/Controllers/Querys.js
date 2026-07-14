import db from '../Config/BD_Connection.js'

export const listarUsuários = (request, response)=>{
    db.query('SELECT * FROM users', (err, results)=>{
        if(err) return response.status(500).json({error: 'Erro ao listar usuários'})
        return response.status(200).json(results)
    })
}

export const criarUsuário = (request, response)=>{
    const sql = 'INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)'
    db.query(sql, [nome, email, senha], err =>{
        if(err) return response.status(500).json({error: 'Erro ao criar usuário'})
        response.json({message: 'Usuário criado com sucesso'})
    })
}