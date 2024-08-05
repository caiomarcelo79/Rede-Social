const db = require("../config/db")

const Usuario = db.sequelize.define('usuarios', {
  nickname: {
    type: db.Sequelize.STRING,
    allowNUll: false,
    unique: true
  },
  nome: {
    type: db.Sequelize.STRING,
    allowNUll: false
  },
  email: {
    type: db.Sequelize.STRING,
    allowNUll: false
  },
  nascimento:{
    type: db.Sequelize.DATE,
    allowNUll: false
  }
})

Usuario.associate = (models) => {
  Usuario.hasMany(models.Postagem, {
    foreingKey: 'usuarionickname',
    as: 'postagens'
  })
}

try {
  const resultado = Usuario.sync()
  console.log(resultado)
} catch (error) {
  console.log(error)
}

module.exports = Usuario