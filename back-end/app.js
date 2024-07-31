const express = require("express")
const app = express()
const Pessoa = require('./models/Pessoa')
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

app.get("/pessoas", (req, res) => {
  Pessoa.findAll().then((pessoa) => {
    return res.json(pessoa)
  }).catch((err) => {
    console.log("não achou")
    res.status(500).json({ error: "Erro ao buscar pessoas" })
  })
})

app.post("/pessoas/registro", (req, res) => {
  Pessoa.create({
    nome: req.body.nome,
    idade: req.body.idade
  }).then(() => {
    console.log("salvo com sucesso")
    res.status(201).json({ message: "Pessoa criada com sucesso" })
  }).catch((err) => {
    console.log("erro ao salvar")
    res.status(500).json({ error: "Erro ao salvar pessoa" })
  })
})

app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080")
})
