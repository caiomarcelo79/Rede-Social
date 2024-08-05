const express = require("express")
const app = express()
const Usuario = require('./models/Usuario')
const cors = require("cors")
const bodyParser = require("body-parser")
const { where } = require("sequelize")
const Postagem = require("./models/Postagem")


// Middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  app.use(cors())
  next()
})

// Body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




// Lista todos os usuarios
app.get("/usuarios", (req, res) => {
  Usuario.findAll().then((usuario) => {
    return res.json(usuario)
  }).catch((err) => {
    res.status(500).json({ error: "Erro ao buscar usuarios" })
  })
})

// Registra os usuarios
app.post("/usuarios/registro", (req, res) => {
  Usuario.create({
    nickname: req.body.nickname,
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

// Encontra usuarios a partir do id passado pelo parametro de url
app.get("/usuarios/find/:id", (req, res) => {
  const id = req.params.id;

  Usuario.findOne({ where: { id: id } })
  .then((usuario) => {
    if (usuario) {
      console.log("Esse eh o valor do id: " + id);
      res.status(200).json({ message: "Esse eh o valor do id: " + id, usuario: usuario });
    } else {
      console.log("Usuario não encontrado");
      res.status(404).json({ message: "Usuario não encontrado" });
    }
  })
  .catch((err) => {
    console.log("Erro ao tentar encontrar o id: ", err);
    res.status(500).json({ error: "Erro ao tentar encontrar o id" });
  });
});


// Lista todas as postagens
app.get("/postagens", (req, res) => {
  Postagem.findAll().then((postagem) => {
    return res.json(postagem)
  }).catch((err) => {
    res.status(500).json({ error: "Erro ao buscar postagens" })
  })
})

// Registra as postagens
app.post("/postagens/registro", (req, res) => {
  Postagem.create({
    usuarionickname: req.body.usuarionickname,
    titulo: req.body.titulo,
    conteudo: req.body.conteudo,
    datapostagem: Date.now()
  }).then(() => {
    console.log("Postagem registrada com sucesso")
    res.status(201).json({ message: "Postagem registrada com sucesso" })
  }).catch((err) => {
    console.log("Erro ao registrar usuario")
    res.status(500).json({ error: "Erro ao registrar postagem" })
  })
})




app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080")
})
