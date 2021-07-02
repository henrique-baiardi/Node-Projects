const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
})

rl.question('Digite seu nome: ',function(nome){
    console.log('Ola '+ nome + ', bem vindo ao Backend! =)');

    rl.question(nome+', quantos anos tem atualmente?',function(idade){
        console.log('Hmmm '+idade+' anos em!? Com certeza esta ta melhor fase!');

        rl.question('Digite seu Sobrenome: ',function(sobrenome){
            console.log('Entao '+nome+' '+sobrenome+' estou feliz em ti ver conseguindo =)');
        })
    })
})


rl.on('close',function(){
    console.log('Ate a proxim!');
    process.exit(0);
})