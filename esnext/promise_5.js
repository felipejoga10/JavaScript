const { resolve } = require("path");
const { reject } = require("lodash");

function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject ('Ocorreu um erro')
        } else{
            resolve(valor)
        }
    })
}
funcionarOuNao('testandoo...', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .catch(err => console.log(`ERRO: ${err}`))
    .then(() => console.log('FIM!'))