const pilotos = ['vettel', 'alonso', 'raikkonen', 'massa']
pilotos.pop() //massa saiu (pop) saca o ultimo
console.log(pilotos)

pilotos.push('verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro.
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode add e remove elementos

//add com splice
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remove com splice
pilotos.splice(3, 1) 
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)

