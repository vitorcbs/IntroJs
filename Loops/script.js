//if / else
function numeroPositivo(num) {
    let resultado
    if (num < 0) {
        resultado = false
    }else {
        resultado = true
    }
    return resultado

}

numeroPositivo(2)
// true

numeroPositivo(-9)
// false

//switch case
// comparacao de tipo e valor
function getAnimal(id) {
    switch(id) {
        case 1:
            return 'Cão'
        case 2: 
            return 'gato'
        case 3:
            return 'passaro'
        default:
            return 'peixe'
    }
}

getAnimal(1) //cao
getAnimal('1') //peixe

//for in
//loop entre propriedades de um obj
function forInExemplo(obj) {
    for(propriedade in obj) {
        console.log(propriedade)
    } 
}

const meuObjeto = {
    nome: 'joão',
    idade: '20',
    cidade: 'Maua'
}

forInExemplo(meuObjeto)
// nome
// idade
// cidade

function forInExemplo(obj) {
    for(propriedade in obj) {
        console.log(obj[propriedade])
    } 
}

const meuObjeto = {
    nome: 'joão',
    idade: '20',
    cidade: 'Maua'
}

forInExemplo(meuObjeto)
// joão
// 20
// Salvador

// for of
//loop entre estruturas iteraveis(arrays, strings) -- parece o for do python
// string
function logLetras(palavra) {
    for(letra of palavra) {
        console.log(letra)
    }
}

const palavra = 'robinho';
logLetras(palavra)
// r
// o
// b
// i
// n
// h
// o

//array
function logNum(nums) {
    for(numero of nums) {
        console.log(numero)
    }
}

const nums = [20, 30, 40]

logNum(nums)
//20
//30
//40

//while
//executa instrução até a verificação ser falsa
function exemploWhile () {
    let num = 0

    while (num <= 5) {
        console.log(num)
        num ++
    }
}
 
exemploWhile()   // 0 1 2 3 4 5 

//do while
//executa instrução até a verificação ser falsa, mas pelo menos executa uma vez

function exemploDoWhile () {
    let num = 6

    do {
        console.log(num)
        num ++
    } while (num <= 5)
}

exemploDoWhile()  //6