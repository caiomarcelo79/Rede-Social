const express = require("express")
const app = express()
const Pessoa = require('./models/Pessoa')
const cors = require("cors")

app.use(express.json())
app.use(cors())




app.get("/", (req, res)=>{
  res.send("Pagina inicial")
})

app.post("/registro/pessoa", (req, res)=>{
  Pessoa.create({
    nome: req.json.nome,
    idade: req.json.idade
  }).then(() => {
    console.log("salvo com sucesso")
  }).catch((err) => {
    console.log("erro ao salvar")
  });
})






app.listen(8080, ()=>{
  console.log("Servidor rodando na porta 8080")
})