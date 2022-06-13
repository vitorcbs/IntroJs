// o que são vetores

// como declarar array

// let array = ['string', true, 1, [array1]]
// console.log(array)

// pode guardar varios tipos de dados
let array1 = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']]
console.log(array1)

//foreach 
// array1.forEach(function(index, item){console.log(item, index)})

//adiciona um item no final da lista
array1.push('novoitem')
console.log(array1)

//retira o ultimo item da lista
array1.pop();
console.log(array1)

//retira o primeiro item da lista
array1.shift()
console.log(array1)

//adiciona um item no inicio da lista
array1.unshift('string')
console.log(array1)

//retorna o index de um valor
console.log(array1.indexOf(true))

//apaga valores de uma lista de um determinado startpoint até um end point
array1.splice(0, 2)
console.log(array1)

//retorna um array de array já existente usando um startpoint e um endpoint determinado
novoArray = array1.slice(0, 2)
console.log(novoArray)
