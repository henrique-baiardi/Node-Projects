
module.exports = app =>{

    app.get('/',(req,res)=>{
        res.send('Voce esta na rota: Home.')
    })

}