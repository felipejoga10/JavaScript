const escola = 'Cod3r'

console.log(escola.charAt(4)) //Lembrando que a string começa a partir do 0
console.log(escola.charAt(0))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(2)) //escreve a partir da string (2)
console.log(escola.substring(0, 3)) //escreve a partir da string (0) até o índice (3) sem escrever o mesmo

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3 , 'e'))

console.log('Uva,Pera,Maçã'.split(',')) //array, split é a separação da array

