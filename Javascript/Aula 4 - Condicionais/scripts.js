var jogador1 = 0
var jogador2 = 0
var placa

//if dentro de if
// if (jogador1 != -1) {
//     if (jogador1 > 0) {
//         console.log('jogador 1 marcou ponto')
//     } else if (jogador2 > 0){
//         console.log('jogador 2 marcou ponto')
//     } else {
//         console.log('Jogador 1 não marcou')
// //     }
// // }

// //if ternario
// jogador1 != 1 && jogador2 != -1 ? console.log('Os jogadores são validos!') : console.log('Os jogadores são invalidos')
//     if (jogador1 > 0 && jogador2 == 0) {
//         console.log('jogador 1 marcou ponto')
//         placar = jogador1 > jogador2
//     } else if (jogador2 > 0 && jogador1 == 0){
//         console.log('jogador 2 marcou ponto')
//         placar = jogador2 > jogador1
//     } else {
//         console.log('Jogador 1 não marcou')
//     }

// // switch case
// switch (placar) {
//     case placar = jogador1 > jogador2:
//         console.log('jogador 1 ganhou')
//         break;
//     case placar = jogador2 > jogador1:
//         console.log('Jogador 2 ganhou')
//         break;
//     default:
//         console.log('Empate')
// }

//for  (repete até ser falso)
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5']

let object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}

for (let index = 0; index< array.length; index++ ) {
    console.log(index)
}

//for in com lista
for (let i in array) {
    console.log(i)
}

//for in com objeto
for (i in object){
    console.log(i)
}

//for of (imprime os valores)
for (i of array) {
    console.log(i)
}

//for of para objetos(não recomendado)
for (i of object.propriedade1){
    console.log(i)
}

//while
let a= 0
while (a < 10) {
    a++
    console.log(a)
}