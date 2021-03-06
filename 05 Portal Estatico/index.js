const express = require('express');
var bodyParser = require('body-parser')

const path = require('path');
const { get } = require('http');

const app = express();

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/pages'));

app.get('/',function(req,res){ //home
  console.log(req.query);

  if(req.query.busca == null){
    res.render('home',{})
  }else{
    res.send('Você buscou: '+req.query.busca);
  }
})

app.get('/:slug',function(req,res){ //url com nome da noticia | pagina da noticia
  res.send(req.params.slug);
})


app.listen(5000,()=>{
    console.log('server rodando!');
})