// Alguns dados de um usuário
let fullname = 'Jonicleison Junqueira Júnior'
let username = 'junin'
let group = 'alunos'

// Criando um objeto a partir das variáveis acima. Note que o nomes das propriedades (à esquerda)
// conincide com o nome das vairáveis (à direita.

// let user = {
//     fullname: fullname,
//     username: username,
//     group:group
// }

// Criando um objeto equivalente ao comentado acima usando propriedades abreviadas. Não é necessário repetir o mesmo identificador
// antes e depois do símbolo
let user ={
    fullname,
    username,
    group
}

console.log(user)

// Um objeto pode misturar propriedades abreviadas e não abreviadas
let userInfo = {
    fullname,
    username,
    password: 'abc123',
    group,
    last_login: '2024-02-22 10:14:37'
}

console.log(userInfo)

// DEPURAÇÃO USANDO VAIRÁVEIS ABREVIADAS

// Exibindo o valor de duas variáveis. Veja que os valores são exibidos, mas a saída não informa de quais variáveis provém os valores

let x = 10, y = 'batata'
console.log(x, y)

// Saída melhorada: passando um objeto com propriedades abreviadas para console.log(x,y), como forma de sabermos de quais vairáveis 
// provém os valores.
console.log({x, y})