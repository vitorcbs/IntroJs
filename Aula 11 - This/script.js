//this em objeto
const pessoa = {
    firstName: 'Victor',
    lastName: 'Lima',
    id: 1,
    fullname: function () {   //funcao dentro de objeto é chamado de metodo
        return this.firstName + '' + this.lastName //this se referencia ao objeto pai
    },
    getId: function() {
        return this.id
    }
}

pessoa.fullname()
// 'Victor Lima'

pessoa.getId()
// 1

//this fora de uma função
console.log(this)
//retorna o objeto global

//dentro de uma função
(function() {
    console.log(this)
}) ();
//retorna o objeto global da função

//this em um evento html
// ele vai retornar o que acontece no evento

//manipulando valores com this

//call
const person = {
    nome: 'Miguel'
}

const anima = {
    nome: 'Murpy'
}

function getSomethingCall() {
    console.log(this.nome)
}

getSomethingCall.call(person) //this vai assumir o valor de person graças ao call

const myObjCall = {
    num1: 2,
    num2: 4
}

function somaCall(a,b) {
    console.log(this.num1 + this.num2 + a + b)
} //soma os dois valores do objeto + dois parametros

somaCall.call(myObjCall, 1, 5) // 2 + 4 + 1 + 5 = 12

//apply
//é parecida com a call, porem os argumentos aqui são passados dentro de um array
const pessoa1 = {
    nome: 'Miguel'
}

const animal1 = {
    nome: 'Billy'
}

function getSomethingApply() {
    console.log(this.nome)
}

getSomethingApply.apply(animal1) //billy

const myObjApply = {
    num1: 2,
    num2: 4
}

function somaApply(a,b) {
    console.log(this.num1 + this.num2 + a + b)
}

somaApply.apply(myObjApply, [1,5]) // 12

//bind
//Clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parametro
const retornaNome = function (){
    return this.nome
}

let bruno = retornaNome.bind({nome : 'Bruno'})

bruno()