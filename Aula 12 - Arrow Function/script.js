//arrow function
const helloworld = function() {
    return 'helloworld'
}

// é a mesma coisa que
const helloworld1 = () => 'Hello World'

//exemplos
const imprimir = a => a;
imprimir(4) //4

const soma = (a, b) => a + b
soma(4, 6) //10

//ARROW FUNCTION NÃO FAZ HOISTING, tem que declarar antes de usar
//não pode usar .this, bind, etc. na arrowfunction
//não pode usar arguments
//não usar arrow function como metodo de objeto