import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const connection = mysql.createConnection({
    host: process.env.BD_HOST,
    port: process.env.PORT,
    user: process.env.BD_USER,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_NAME
})
connection.connect((err) => {
    if(err){
        console.error('Erro ao conectar ao banco de dados: ', err)
    }

    else{
        console.log('Conexão com o banco de dados estabelecida com sucesso!')
    }
})


export default connection





