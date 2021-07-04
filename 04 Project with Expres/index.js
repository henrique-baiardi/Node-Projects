const express = require('express');
var bodyParser = require('body-parser')

const path = require('path');

const app = express();

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));


var tarefas = ['Arrumar o quarto','Comprar no supermercado'];

app.post('/',function(req,res){
    tarefas.push(req.body.tarefa);
    res.render('index',{listaTarefas:tarefas});
})

app.get('/',function(req,res){

    res.render('index',{listaTarefas:tarefas});

});

app.get('/deletar/:id',function(req,res){
    tarefas = tarefas.filter(function(val,index){
            if(index != req.params.id){
                return val;
            }
    })
    res.render('index',{listaTarefas:tarefas});
})

app.listen(5000,()=>{
    console.log('server rodando!');
})