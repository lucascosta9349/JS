import express from "express"
import{
    listarUsuarios,
    criarUsuario,
} from '../Controllers/usuarioController.js'

const app = express()
app.use(express.json()) /*para o express entender o formato json, sem isso, 
o express não entende o formato json e não consegue ler 
os dados enviados pelo cliente*/


const users = []

app.post('/usuarios', (request, response)=>{
    users.push(request.body)
    response.status(201).json(request.body)
})


app.get('/usuarios', (request, response)=>{
    response.status(200).json(users)
})

app.listen(3000)

app.get






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