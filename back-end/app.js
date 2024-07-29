const express = require("express")
const app = express()
const Pessoa = require('./models/Pessoa')
const cors = require("cors")
const bodyParser = require("body-parser")

//Middleware
  app.use(express.json())
  app.use(cors())
  app.use((req, res, next)=>{
    console.log("acessou o middleware")
    next()
  })

//Body-parser
  app.use(bodyParser.urlencoded({extended: false}))
  app.use(bodyParser.json())


app.get("/", (req, res)=>{
  Pessoa.findAll().then((pessoa)=>{
    return res.json(pessoa)
  }).catch((err)=>{
    console.log("nao achou")
  })
})

app.post("/registro/pessoa", (req, res)=>{
  Pessoa.create({
    nome: req.body.nome,
    idade: req.body.idade
  }).then(() => {
    console.log("salvo com sucesso")
  }).catch((err) => {
    console.log("erro ao salvar")
  })
})








app.listen(8080, ()=>{
  console.log("Servidor rodando na porta 8080")
})