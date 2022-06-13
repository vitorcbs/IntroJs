//parametro padrão
// é possivel definir um parametro padrão na função
function exponencial(array, num = 1);


//objeto arguments
//é usado para criar um array com todos os parametros que foram passados para a função
function findMax() {
    let max = -Infinity

    for(let i = 0; i< arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i]
        }
    }

    return max
}

//array spread
// uma forma de lidar separadamente com os elementos de um array
function sum(x,y,z) {
    return x + y + z
}

const numbers = [1,2,3]

console.log(sum(...numbers))

//rest
//combina elementos em um array

function confereTamanho(...args) {
    console.log(args.length)
}

confereTamanho() //0
confereTamanho(1,2) //2
confereTamanho(3,4,5) // 3

// Object destructuring
// Entre chaves {} podemos filtrar apenas os dados que interessam de um objeto
const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
}

function userId({id}) {
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`
}

userId(user)
//42

getFullName(user)
//John Doe