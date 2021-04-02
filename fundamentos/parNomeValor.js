// par nome/valor
const saudacao = 'Opa' //contexto léxico 1

function exec () {
    const saudacao = 'Falaaaa' //contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 30,
    Peso: 80,
    endereço: {
        logradouro: 'Rua muito legal',
        número: 654,
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente )