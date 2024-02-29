//  O método find() encontra, em um vetor, o PRIMEIRO ELEMENTO que corresponda ao retorno 
// de uma função passada como parâmetro

// Vetores para busca
const numeros = [10, 19, 3, -4, 13, -11, 15, 0, -1]
const frutas = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracuja']

// Encontrando o primero número negativo no vetor de númerros
console.log('Primeiro número negativo: ', numeros.find(n => n < 0))

// Encontrando o primeiro número multiplo de 5
console.log('Primeiro múltiplo de 5: ', numeros.find(x => x %5 === 0))

// Encontrando o primeiro número maior que 20
console.log('Primeiro número maior que 20: ', numeros.find(i => i > 20))

// Encontrando a primeira fruta que começa com a letra "m"
console.log('Primeiro fruta começando com a letra "m": ', 
    frutas.find(f => f.charAt(0) === 'm'))

// Encontrando a primeira fruta que termina com a letra "r"
console.log('Primeiro fruta terminando com a letra "r": ', 
    frutas.find(f => f.slice(-1) === 'r'))

    /*********/