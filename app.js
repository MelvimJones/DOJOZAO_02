//carregando o dotenv
const dotenv = require('dotenv')
//invocando a funcao de configuracao
dotenv.config().json
//imprimindo no console a chave do mongo.
console.log(process.env.MONGO_KEY)

//Conexao do mongoDB
const express = require('express')
const mongoose = require("mongoose")


mongoose.connect(process.env.MONGO_KEY)



//Importa as rotas
const taskRouter = require('./router/task-router')
const authRouter = require('./router/auth-router')
const autenticarToken = require("./middleware/autenticarToken")


// invocando a function do express
const app = express()

// definindo uma porta para o serviço
const port = 3000

// reconhecendo os request que possui json no body
app.use(express.json())

//Utiliza as rotas importadas
app.use("/task",autenticarToken,taskRouter)
app.use("/auth",authRouter)



//GET
app.get('/', (req, res) => {
  res.send('API TODO LIST GET')
})
//POST
app.post('/', (req, res) => {
    res.send('API TODO LIST POST')
  })

  //Ativa o servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
