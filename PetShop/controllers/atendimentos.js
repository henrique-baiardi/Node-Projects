const Atendimento = require('../models/atendimentos')

module.exports = (app) =>{

    app.get('/atendimentos',(req,res)=>{
        atendimento.lista(res)
    })

    app.post('/atendimentos',(req,res)=>{

        const atendimento = req.body

        Atendimento.adicionaAtendimento(atendimento, res)

        console.log('Atendimento enviado!')
        //console.log(req.body)
        //res.send('Voce esta na rota: Atendimentos (post)')
    })
    
}