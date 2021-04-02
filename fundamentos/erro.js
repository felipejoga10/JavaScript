function tratarErroELancar(erro) {
    //throw new Error('...')
    throw 'DEU ERRO!'
}

function imprimirNomaGritado (obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    }
    finally {
        console.log('final')
    }
}


const obj = {name: 'Roberto'}
imprimirNomaGritado(obj)