//Função sem Retorno
function ImprimirSoma(a, b){
    console.log(a + b)
}
ImprimirSoma(2, 3)
ImprimirSoma(2) //NaN

//Função com retorno
function soma (a, b = 0){
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))
