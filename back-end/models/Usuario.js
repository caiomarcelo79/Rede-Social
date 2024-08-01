const db = require("../config/db")

const Usuario = db.sequelize.define('usuarios', {
  nome: {
    type: db.Sequelize.STRING
  },
  email: {
    type: db.Sequelize.STRING
  },
  nascimento:{
    type: db.Sequelize.DATE
  }
})

try {
  const resultado = Usuario.sync()
  console.log(resultado)
} catch (error) {
  console.log(error)
}

module.exports = Usuario