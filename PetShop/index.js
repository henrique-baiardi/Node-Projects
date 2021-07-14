const customExpress = require('./config/cunstomExpress') //exportando o modulo do cunstonExpress
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

conexao.connect(erro =>{  

    if(erro){
        console.log(erro)
    }else{

        console.log('Conectado com sucesso!')

        Tabelas.init(conexao)

        const app = customExpress() 

        //servidor
        app.listen(3000,()=>{
            console.log('Servidor rodando na porta 3000!')
        })
    }
})



