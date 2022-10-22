const mongoose = require('mongoose');

// Criando um Schema ("collection")
const TaskSchema = new mongoose.Schema( { descricao:String, concluida: Boolean} )

// Criando o Modelo
const task = mongoose.model ("Task",TaskSchema )

//Exportar
module.exports = task
