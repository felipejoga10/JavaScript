function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 01
    }
}

console.log(criarProduto('Notebook', 2199))
console.log(criarProduto('iPad', 1199))
console.log(criarProduto('Xamixunga', 899))