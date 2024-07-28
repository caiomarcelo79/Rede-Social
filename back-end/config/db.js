const Sequelize = require("sequelize")

const sequelize = new Sequelize('redesocial', 'postgres', '0000', {
  host: "localhost",
  dialect: 'postgres'
})

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}