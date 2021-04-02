const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 12
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2015'
})

pessoa.dataNascimento = '01/01/2016'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assing (ECMS 2015)
const dest = {a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)
console.log(dest, o1, o2)
console.log(obj)