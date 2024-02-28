/* Desesturturação é a operação pela qual é possível extrair valores de vetores e objetos, atribuindo-os a variáveis individuais */

// 1) DESESTRUTURAÇÃO DE VETOR
const frutas = ['laranja','banana', 'maçã']

//Desestruturação
let [fruta1, fruta2, fruta3] = frutas
console.log({fruta1, fruta2, fruta3})

// Desestruturação parcial: 1º e 2º valores
let [f1, f2] = frutas
console.log({f1,f2})

// Desestruturação parcial: 1º e 3º valores
let [g1, g3] = frutas
console.log({g1, g3})

// Desestruturação parcial: 2º e 3º valores
let [h2, h3] = frutas
console.log({h2, h3})

/****************************************************************/

console.log('-'.repeat(60))

// /* Problema: troca de valores entre variáveis (swap) */
// let x = 5, y = 10
// console.log('Antes do swap: ', {x, y})

// /* Swap feito de forma "tradicional", com uso de variável temporária */
// let temp = x
// x = y
// y = temp

// console.log('Depois do swap: ', {x, y})

// Swap feito por meio de desestruturação
[x,y] = [y, x];

console.log('Depois do swap: ', {x,y})

console.log('-'.repeat(60))

/*****************************************************************/

// 2) DESESTRUTURAÇÃO DE OBJETOS

// Na desestruturação de objetos, as variáveis avulsas:

// 1) Devem ter o MESMO NOME das propriedades do objetos.
// 2) Podem ser especificificadas em qualquer ordem.
// 3) Pode ser feita a desestruturação parcial.

let {sexo, nome, email} = pessoa
console.log({nome, sexo, email})

/***********/




