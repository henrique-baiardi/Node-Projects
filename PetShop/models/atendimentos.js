const moment = require('moment')  //biblioteca para trabalhar e manipular datas
const conexao = require('../infraestrutura/conexao')

class Atendimento{

    adicionaAtendimento(atendimento, res){
        
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

        const dataEhValida = moment(data).isSameOrAfter(dataCriacao)//bulean
        const clientEhValido = atendimento.cliente.length >=3

        const validacoes = [
            {
                campoInvalido: 'data',
                valido: dataEhValida,
                mensagem: 'Data dever ser apos a data atual'
            },
            {
                campoInvalido: 'cliente',
                valido: clientEhValido,
                mensagem: 'O nome do cliente deve conter mais caracteres'
            }
        ]

        const erros = validacoes.filter( (campo) => !campo.valido)
        const existemErros = erros.length
        
        if(existemErros <= 1){                      //------------erro----

            res.status(400).json(erros)

        }else{

            const atendimentoDatado = {...atendimento, data, dataCriacao}

            const sql = 'INSERT INTO Atendimentos SET ?'

            conexao.query(sql, atendimentoDatado, (erro,resultados) => {
                if(erro){
                    res.status(400).json(erro)
                }else{
                    res.status(201).json(resultados)
                }
            })
        }
    }

    lista(res){
        const sql = 'SELECT* FROM Atendimentos'

        conexao.query(sql, (erro, resultados)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultados)
            }
        })
    }
}

module.exports = new Atendimento