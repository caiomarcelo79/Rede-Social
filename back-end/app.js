const express = require("express")
const app = express()
const Usuario = require('./models/Usuario')
const cors = require("cors")
const bodyParser = require("body-parser")


// Middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  app.use(cors())
  next()
})

// Body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/usuarios", (req, res) => {
  Usuario.findAll().then((usuario) => {
    return res.json(usuario)
  }).catch((err) => {
    res.status(500).json({ error: "Erro ao buscar usuarios" })
  })
})

app.post("/usuarios/registro", (req, res) => {
  Usuario.create({
    nome: req.body.nome,
    email: req.body.email,
    nascimento: req.body.nascimento
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
