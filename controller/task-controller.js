//Carregar o model de Tasks
const Task = require("../model/Task")

//-------------# Funções controller ------------------
async function listarTasks(req, res) {
    //1) Buscar no banco com Task.find()
    const tasks = await Task.find({})
    //2) Enviar responsta em Json
    res.json(tasks)
}

async function cadastrarTask(req, res) {
    //1) Ler o request e montando objeto com os dados
    let task = new Task(req.body)
    //2) Salvar o objeto no banco de dados
    taskSalva = await task.save();
    //3) Enviar cliente em Json
    res.json(taskSalva)
}

async function deletarTask(req, res) {
    //1) Ler id da tarefa do req.query
    let id = req.query.id
    //2) buscar e remover com o findByIdAndRemove
    await Task.findByIdAndRemove(id)
    //3)definir o status 200
    res.status(200)
    //4) Enviar mensagem em texto
    res.send("removido indice:" + id)
}

async function alterarTask(req, res) {
    //1) Ler id do req.query
    let id = req.query.id
    //2) Ler dados do body
    let task = req.body
    //3) Buscar por ID e alterar
    await Task.findByIdAndUpdate(id, task)
    //4) Enviar resposta em texto
    res.send("Alterado com sucesso! ")
    j
}

module.exports = { listarTasks, cadastrarTask, deletarTask, alterarTask }