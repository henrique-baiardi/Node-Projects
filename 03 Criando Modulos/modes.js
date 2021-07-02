
function helloword(){
    console.log("Olá mundo!")
}
exports.helloExportado = helloword;


let variavel1 = 10;
//x = exports.variavel2;
exports.variavel2 = variavel1;


let obj = {nome:'henri', idade:'27'};
exports.objExport = obj;