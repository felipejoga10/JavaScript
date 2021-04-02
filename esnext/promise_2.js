/*
setTimeout(function() {
    console.log('Executando CALLBACK...')
    
    setTimeout(function(){
        console.log('Executando CALLBACK...')
        setTimeout(function(){
            console.log('Executando CALLBACK...')
        }, 2000)
    }, 2000)
}, 2000)

*/
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)