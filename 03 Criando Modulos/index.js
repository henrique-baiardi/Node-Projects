//----------------------EXPORTANDO OS MODES-----------------------------------
const Main = require('./modes.js');

Main.helloExportado();

console.log(Main.variavel2);

console.log(Main.objExport.nome + " - " + Main.objExport.idade + "anos.");

console.log('****************************************************')

//-----------------------EXPORTANDO AS CLASSES--------------------------------
const Base01 = require('./classes.js'); //const tem que ter o mesmo nome da class

//new Base01();//roda tudo da funcao base01 do arquivo classe

const Base02 = new Base01();//roda e acessando o construtor da classe e seus elementos

console.log(Base02.mensagem);