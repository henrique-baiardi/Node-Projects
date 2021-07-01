const http = require('http');
const fs = require('fs')

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(function(req,res){
    //console.log(req);
    if(req.url == '/test'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        res.end("Hello Word! Parabens! Voce conseguiu acessar pagina de test")
    }else{//sem o else o servidor quebra
        fs.readFile('index.html',function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        })
    }
    
})

server.listen(port,hostname,function(){
    console.log("Servidor Rodando!");
})
