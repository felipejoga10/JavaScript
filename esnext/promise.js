function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve (frase) //resolve só passa um parâmetro
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal isso!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase =>console.log(outraFrase))
    .catch(e => console.log(e)) //Pra gerar o erro usa-se o catch