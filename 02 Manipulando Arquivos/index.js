const http = require('http');
const fs = require('fs'); //permissao para manipulação de arquivos
const { Server } = require('http');

const hostname = '127.0.0.1';
const port = 3000;

//criar novo arquivo:
//3 parametros: nome do arquivo que sera criado; o conteudo do arquivo; callback
fs.writeFile('henrique.txt','Parabens! Voce aprendeu a criar arquivos com node.js.',function(err){
    if(err) throw err;
    console.log('Arquivo criado com sucesso!');
})

//criar novo arquivo ou inserir o conteudo depois do que ja existe
fs.appendFile('henrique.txt',"\n Add mais um conteudo com sucesso!",function(err){
    if(err) throw err;
    console.log('salvo com sucesso!')
})

//lendo arquivos:
fs.readFile('listaNomes.txt',function(err,data){
    console.log(data.toString());
})

