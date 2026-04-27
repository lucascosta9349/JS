import express from "express";

const app = express()

app.get('/usuarios', (request, response)=>{
    response.send('ok, deu bom')
})

app.listen(3000)
// retorna todos os usuários, como se fosse um select * from
/*
app.post('/usuarios')
app.put('/usuarios')
app.delete('/usuarios')

Get -> listar
Post -> Criar
Put -> Editar vários
Patch -> Editar um
Delete -> deletar
*/ 