const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const mulher = f => f.genero === 'F'
const chines = f => f.pais === 'China'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}


axios.get(url).then(response =>{
    const funcionarios = response.data
    const func = funcionarios
        .filter(mulher)
        .filter(chines)
        .reduce(menorSalario)

    console.log(func)

})