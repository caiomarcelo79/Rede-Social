const db = require("../config/db")
const app = require("../app")

const Usuario = db.sequelize.define('usuarios', {
  nome: {
    type: db.Sequelize.STRING
  },
  email: {
    type: db.Sequelize.STRING
  }
})

if (app.bancoUsuarios == false) {
  // Post.sync({force: true})
  bancoUsuarios = true
  console.log(bancoUsuarios)
}




module.exports = Usuario