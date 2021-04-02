//não aceita repetição não indexada
const times = new Set()
times.add('Vasco')
times.add('Flamengo').add('Fluminense').add('Bangu').add('Botafogo')
times.add('Madureira')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['raquel', 'lucas', 'júlia', 'ramon', 'lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)