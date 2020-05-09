

// criando tabela
const Postagem = sequelize.define('postagens',{
    titulo: {type:Sequelize.STRING},
    conteudo:{type:Sequelize.TEXT}
})
//inserindo dados
// Postagem.create({
//     titulo: 'a volta dos que nao foram',
//     conteudo:'um filme de muita bilhereria produzido pela uorner interneshional'
// })


//criando tabela
const Usuario = sequelize.define( 'usuarios',{
    nome: {type:Sequelize.STRING},
    sobrenome:{type:Sequelize.STRING},
    idade:{type:Sequelize.INTEGER}
})


//inserindo dados
// Usuario.create({
//     nome: 'rafael',
//     sobrenome:'da silva',
//     idade: 24
// })

//Usuario.sync({force: true})





sequelize.authenticate().then(()=>{console.log('servidor ok!');
}).catch((erro)=>{console.log('erro ao conectar ao servidor'+ erro)
})

