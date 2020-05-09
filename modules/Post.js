const db = require ('./db')

const Post = db.sequelize.define('postagens',{
    titulo: {type:db.Sequelize.STRING},
    conteudo: {type:db.Sequelize.TEXT}
})

// Post.sync({force:true})

// db.sequelize.authenticate().then(() => console.log('conectado com sucesso')
// ).catch((erro)=>console.log('houve um erro'+erro)
// )

module.exports = Post