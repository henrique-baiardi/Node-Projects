const fs = require('fs'); //permissao para manipulação de arquivos
const read = require('readline');

//criar novo arquivo:
//3 parametros: nome do arquivo que sera criado; o conteudo do arquivo; callback
fs.writeFile('main.txt','Parabens! Voce aprendeu a criar arquivos com node.js.',function(err){
    if(err) throw err;
    //console.log('Arquivo criado com sucesso!');
})

//criar novo arquivo ou inserir o conteudo depois do que ja existe
fs.appendFile('main.txt',"\n Add mais um conteudo com sucesso!",function(err){
    if(err) throw err;
    //console.log('Arquivo criado com sucesso!');
})

//lendo arquivos:
fs.readFile('listaNomes.txt',function(err,data){
    //console.log(data.toString());
})

fs.readFile('listaComBarras.txt',function(err,data){
    let listaArray = data.toString();
    
    let novalista = listaArray.split('/');//removendo as string '/'
    console.log(novalista)

    let filtroNome = listaArray.substr(0,5);
    console.log(filtroNome);
})

fs.unlink('arquivoLixo.txt',function(err,data){
    //console.log('Arquivo deletado com sucesso!')
})

fs.rename('curinga.txt','curinga02',function(err,data){
    console.log('Arquivo reanomeado com sucesso!');
})