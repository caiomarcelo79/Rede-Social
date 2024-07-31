const express = require("express")
const app = express()
const Usuario = require('./models/Usuario')
const cors = require("cors")
const bodyParser = require("body-parser")
var bancoUsuarios = true


// Middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  app.use(cors())
  // console.log(bancoUsuariosRetorno)
  console.log(bancoUsuarios)
  next()
})

// Body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/usuarios", (req, res) => {
  Usuario.findAll().then((usuario) => {
    return res.json(usuario)
  }).catch((err) => {
    console.log("não achou")
    res.status(500).json({ error: "Erro ao buscar usuarios" })
    bancoUsuarios = false
    console.log(bancoUsuarios)
    return bancoUsuarios
  })
  return bancoUsuarios
})

app.post("/usuarios/registro", (req, res) => {
  Usuario.create({
    nome: req.body.nome,
    email: req.body.email
  }).then(() => {
    console.log("Usuario registrado com sucesso")
    res.status(201).json({ message: "Usuario registrado com sucesso" })
  }).catch((err) => {
    console.log("Erro ao registrar usuario")
    res.status(500).json({ error: "Erro ao registrar usuario" })
  })
})

app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080")
})

module.exports = {
  bancoUsuarios: bancoUsuarios
}

