const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response =>{
    const funcionarios = response.data
    const mulher = funcionarios => funcionarios.genero === 'F'
    const chines = funcionarios => funcionarios.pais === 'China'
    const poucoSalario = funcionarios => funcionarios.salario < 2500


    console.log(funcionarios.filter(mulher).filter(chines).filter(poucoSalario))

})

