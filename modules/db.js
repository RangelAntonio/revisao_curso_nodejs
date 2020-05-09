const Sequelize = require ('sequelize')
const sequelize = new Sequelize('revisao', 'root', 'bateria365',{
host: 'localhost',
dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}