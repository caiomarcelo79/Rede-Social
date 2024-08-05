const db = require("../config/db")

const Postagem = db.sequelize.define('postagens', {
  usuarionickname: {
    type: db.Sequelize.STRING,
    allowNUll: false,
    references:{
      model: 'usuarios',
      key: 'nickname'
    }
  },
  titulo: {
    type: db.Sequelize.STRING,
    allowNUll: false,
  },
  conteudo: {
    type: db.Sequelize.TEXT,
    allowNUll: false,
  },
  datapostagem:{
    type: db.Sequelize.DATE,
    allowNUll: false,
  }
})

Postagem.associate = (models) => {
  Postagem.belongTo(models.Usuario, {
    foreingKey: 'usuarionickname',
    as: 'usuario'
  })
}

try {
  const resultado = Postagem.sync()
  console.log(resultado)
} catch (error) {
  console.log(error)
}

module.exports = Postagem