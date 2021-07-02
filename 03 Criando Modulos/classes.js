class Base01{

    constructor(){
        console.log("Funcionando!");
        this.nome = 'Henrique';
        this.sobrenome = 'Mendonça';
        this.idade = '27';
        this.mensagem = 'Bem vindo!';
        this.testes();
        this.teste2();
    }

    testes(){
        console.log("Teste funcionando!");
        console.log("--------------------------------")
    }
    teste2(){
        console.log('Nome: '+this.nome);
        console.log('Sobrenome: '+this.sobrenome);
        console.log('Idade: '+this.idade);
    }
}

module.exports = Base01;