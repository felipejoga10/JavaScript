const alunos = [
    { nome: 'João', nota: 7.9},
    { nome: 'Ana', nota: 8.6},
    { nome: 'Gustavo', nota: 5.4},
    { nome: 'Nicole', nota: 6.8},
    { nome: 'Felipe', nota: 10},
]

// Imperativo
let total1 = 0
for (let i= 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(`O total de alunos é ${alunos.length}`)
console.log(`O total das notas é ${total1}`)
console.log(`A média entre os alunos é de ${total1 / alunos.length}`)

//Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)