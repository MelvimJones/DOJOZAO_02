const jwt = require("jsonwebtoken")

function autenticarToken(req, res, next) {
    console.log("Eu sou um middleware")
    //Decidir se essa requisição permite seguir o fluxo
    
    try {
        console.log(req.query.token)
        let decoted = jwt.verify(req.query.token, process.env.JWT_KEY)
        console.log(decoted)
        next()
    } catch (e) {
        console.log("Excexão: " + e)
        res.sendStatus(403)
    }
}

module.exports = autenticarToken
