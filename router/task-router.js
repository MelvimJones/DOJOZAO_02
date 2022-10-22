const express = require("express")
const router = express.Router()
const taskController = require('../controller/task-controller')

//Rota lista de tasks
router.get("/", taskController.listarTasks)
//cadastro de tasks
router.post("/", taskController.cadastrarTask)
//exclusao de tasks
router.delete("/", taskController.deletarTask)
//alteracao de tasks
router.put("/", taskController.alterarTask)

module.exports = router

