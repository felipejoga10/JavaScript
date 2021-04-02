//operador .. rest (juntar)/ spread (espalhar)
//usar rest com parametro de função

//spread como objeto
const funcionario = { nome : 'Maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

//Spread como Array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafalel']
console.log(grupoFinal)