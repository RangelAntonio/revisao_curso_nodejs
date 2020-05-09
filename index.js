const express = require('express')
const handlebars = require ('express-handlebars')
const bodyParser = require ('body-parser')
const Post = require ('./modules/Post')
const app = express()


// bodyParser config
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



app.engine('handlebars', handlebars({defaultLayout:'main'}))
app.set('view engine', 'handlebars')

// Rotas

app.get('/',(req, res)=>{
    Post.findAll({order:[[ 'id', 'DESC']]}).then((posts)=>{
        res.render('home', {posts:posts})
    })
})

app.get('/cad',(req, res)=>res.render('formulario'))
app.post('/add', (req, res)=>(
    Post.create({
       titulo: req.body.titulo,
       conteudo: req.body.conteudo
    }).then(()=>res.redirect('/')
    ).catch((erro)=> res.send('houve um erro: ')+erro
    )
))


// app.get('/', (req, res)=>{res.sendFile(__dirname + '/html/index.html')})
// app.get('/sobre',(req, res)=>res.sendFile(__dirname +'/html/sobre.html'))
// app.get('/contato',(req,res)=>res.sendFile(__dirname +'/html/contato.html'))



















app.listen(8086, console.log('servidor rodando em http://localhost:8086')
)