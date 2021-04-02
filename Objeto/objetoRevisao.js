const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    marca: 'Nissan',
    modelo: 'Livina',
    proprietario: {
        nome: 'Felipe',
        indade: 31,
        endereco: {
            logradouro: 'Av. Polônia',
            numero: 375,
        }, 
        condutores: [{
            nome: 'Aline',
            idade: 34,
        },{
            nome: 'Nilse',
            idade: 58
        }]
    }
}
        

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro']
console.log(carro)
console.log(carro)