// sem parametro
function funcao() {
    console.log('eae meu chapa')
}

funcao()

//com parametro
function mensagem(primeiro, segundo) {
    console.log(primeiro, segundo)
}

mensagem('oi', 'jovem');

//funcao anonima
const soma = function (a,b) {
    return a+b
}

soma(1,2) // 3

//funcao autoinvocavel IIFE

    //exemplos
(
    function() {
        let name = 'teste'
        return name
    }
) ()

(
    function(a,b) {
        return a+b;
    }
) (1,2); // 3

const soma2 = (
    function () {
        return a + b
    }
) (1,2)

console.log(soma2)

// callbacks
const calc = function(operacao, num1, num2) {
    return operacao(num1, num2)
}

const soma3 = function(num1, num2) {
    return num1 + num2
}

const sub = function(num1, num2) {
    return num1 - num2
}

const resultSoma = calc(soma3, 1,2)
const resultSub = calc(sub,1,2)

console.log(resultSoma) // 3
console.log(resultSub) // -1